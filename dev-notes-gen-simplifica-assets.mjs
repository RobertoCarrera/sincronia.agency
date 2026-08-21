// Optimiza los assets de Simplifica (logo y favicon) y los guarda en public/productos/simplifica/.
// Genera versiones WebP y PNG en varios tamaños, manteniendo el aspecto.
import sharp from 'sharp';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, 'dev-assets', 'simplifica');
const OUT = join(__dirname, 'public', 'productos', 'simplifica');
mkdirSync(OUT, { recursive: true });

const WEBP_QUALITY = 82;
const PNG_COMPRESSION = 9;

async function processLogo(name, srcFile) {
  const buf = readFileSync(join(SRC, srcFile));
  const meta = await sharp(buf).metadata();
  console.log(`[${name}] source: ${meta.width}x${meta.height} ${meta.format}`);

  // Anchos objetivo para el logo completo (proporción 2.66:1 aprox).
  const widths = [320, 480, 640, 800];
  for (const w of widths) {
    const out = await sharp(buf)
      .resize(w, null, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY })
      .toBuffer();
    const file = join(OUT, `${name}-${w}.webp`);
    writeFileSync(file, out);
    console.log(`  -> ${name}-${w}.webp (${out.length} bytes)`);
  }

  // PNG fallback (single size, para compatibilidad).
  const png = await sharp(buf)
    .resize(640, null, { fit: 'inside', withoutEnlargement: true })
    .png({ compressionLevel: PNG_COMPRESSION, quality: 90 })
    .toBuffer();
  writeFileSync(join(OUT, `${name}.png`), png);
  console.log(`  -> ${name}.png (${png.length} bytes)`);
}

async function processIcon(srcFile) {
  const buf = readFileSync(join(SRC, srcFile));
  const meta = await sharp(buf).metadata();
  console.log(`[icon] source: ${meta.width}x${meta.height} ${meta.format}`);

  // Para el icono cuadrado necesitamos todos los tamaños que lo usen
  const sizes = [32, 48, 64, 96, 128, 192, 256, 512];
  for (const s of sizes) {
    const out = await sharp(buf)
      .resize(s, s, { fit: 'cover' })
      .webp({ quality: WEBP_QUALITY })
      .toBuffer();
    writeFileSync(join(OUT, `icon-${s}.webp`), out);
  }
  // PNG fallback principal
  const png256 = await sharp(buf)
    .resize(256, 256, { fit: 'cover' })
    .png({ compressionLevel: PNG_COMPRESSION, quality: 92 })
    .toBuffer();
  writeFileSync(join(OUT, 'icon.png'), png256);
  console.log(`  -> icon.png + icon-{32..512}.webp`);
}

async function main() {
  // Logos completos (con texto "Simplifica CRM by Sincronia")
  await processLogo('logo-on-light', 'logo-fondo.png');   // para cards coral/fondo claro
  await processLogo('logo-on-dark', 'logo-transp.png');   // para cards navy/fondo oscuro

  // Icono hexagonal (favicon del producto)
  await processIcon('favicon-transp.png');
}

main().catch((e) => {
  console.error('error:', e);
  process.exit(1);
});
