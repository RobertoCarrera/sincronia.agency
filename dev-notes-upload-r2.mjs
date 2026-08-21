// Sube los assets binarios de public/ al bucket R2 "sincronia-media" (custom
// domain media.sincronia.agency).
//
// Que se sube:
//   public/logos/                 -> logos Sincronia
//   public/productos/             -> iconos y logos de productos
//   public/og/                    -> OG images (36 + 3 defaults)
//   public/favicon.*              -> favicon + apple-touch-icon
//   public/android-chrome-*       -> PWA icons
//   public/mstile-*               -> Windows tiles
//   public/safari-pinned-tab.svg  -> Safari pinned tab
//   public/manifest.webmanifest    -> PWA manifest
//   public/browserconfig.xml       -> MS browser config
//   public/robots.txt              -> NO (es del sitio, no se sube)
//
// Que NO se sube (assetUrl ya apunta a R2 desde el HTML, pero los fuentes
// de regeneracion quedan locales para regenerar):
//   dev-assets/                   -> fuentes RAW de iconos y logos
//
// Uso:
//   node dev-notes-upload-r2.mjs          # sube todo
//   node dev-notes-upload-r2.mjs --dry    # muestra que se subiria, sin subir
//
// Requiere:
//   - wrangler login (OAuth cacheado en ~/.config/.wrangler/config/default.toml)
//   - bucket 'sincronia-media' creado (este script NO lo crea)
//   - custom domain 'media.sincronia.agency' configurado (manual en dashboard)

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, relative, extname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, 'public');
const BUCKET = 'sincronia-media';

// Extensiones que SÍ se suben (whitelist — si hay duda, mejor no subir)
const ALLOWED_EXT = new Set([
  '.png', '.jpg', '.jpeg', '.webp', '.svg', '.ico',
  '.webmanifest', '.xml', '.txt',
]);

// Subdirectorios de public/ que SÍ se suben
const ALLOWED_DIRS = [
  'logos',
  'productos',
  'og',
];

// Archivos sueltos de public/ que SÍ se suben (whitelist)
const ALLOWED_FILES = [
  'favicon.ico',
  'favicon.svg',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'favicon-48x48.png',
  'apple-touch-icon.png',
  'android-chrome-192x192.png',
  'android-chrome-512x512.png',
  'android-chrome-maskable-192x192.png',
  'android-chrome-maskable-512x512.png',
  'mstile-70x70.png',
  'mstile-150x150.png',
  'mstile-310x310.png',
  'mstile-310x150.png',
  'safari-pinned-tab.svg',
  'manifest.webmanifest',
  'browserconfig.xml',
  'robots.txt',
];

const dryRun = process.argv.includes('--dry');

function shouldUpload(absPath, relPath) {
  if (statSync(absPath).isDirectory()) return false;
  const ext = extname(absPath).toLowerCase();
  if (!ALLOWED_EXT.has(ext)) return false;
  // Files sueltos en public/ (whitelist)
  if (ALLOWED_FILES.includes(basename(absPath))) return true;
  // Subdirectorios permitidos
  const top = relPath.split('/')[0];
  if (ALLOWED_DIRS.includes(top)) return true;
  return false;
}

function* walk(dir, prefix = '') {
  for (const entry of readdirSync(dir)) {
    const abs = join(dir, entry);
    const rel = prefix ? `${prefix}/${entry}` : entry;
    if (statSync(abs).isDirectory()) {
      yield* walk(abs, rel);
    } else {
      yield { abs, rel };
    }
  }
}

function main() {
  if (!existsSync(PUBLIC)) {
    console.error(`No existe ${PUBLIC}`);
    process.exit(1);
  }

  const files = [...walk(PUBLIC)].filter(({ abs, rel }) => shouldUpload(abs, rel));

  console.log(`Encontrados ${files.length} archivos para subir a R2 bucket '${BUCKET}'`);
  if (dryRun) {
    console.log('\n[DRY RUN] Archivos que se subirían:');
    for (const { rel, abs } of files) {
      const size = statSync(abs).size;
      console.log(`  ${rel}  (${size} bytes)`);
    }
    const totalBytes = files.reduce((acc, { abs }) => acc + statSync(abs).size, 0);
    console.log(`\nTotal: ${(totalBytes / 1024).toFixed(1)} KB`);
    return;
  }

  let ok = 0;
  let fail = 0;
  for (const { rel, abs } of files) {
    const size = statSync(abs).size;
    try {
      // --remote es CRITICO: sin el flag, wrangler escribe al emulador local.
      execSync(
        `npx wrangler r2 object put "${BUCKET}/${rel}" --file "${abs}" --content-type "${guessContentType(abs)}" --remote`,
        { stdio: ['ignore', 'pipe', 'pipe'] }
      );
      console.log(`  ✅ ${rel}  (${size} bytes)`);
      ok++;
    } catch (e) {
      console.error(`  ❌ ${rel}: ${e.message.split('\n')[0]}`);
      fail++;
    }
  }
  console.log(`\nSubidos: ${ok}  |  Fallos: ${fail}  |  Total: ${files.length}`);
  if (fail > 0) process.exit(1);
}

function guessContentType(absPath) {
  const ext = extname(absPath).toLowerCase();
  const map = {
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webmanifest': 'application/manifest+json',
    '.xml': 'application/xml',
    '.txt': 'text/plain',
  };
  return map[ext] ?? 'application/octet-stream';
}

main();
