// Optimiza los assets de Strata (logo e icono) y los guarda en public/productos/strata/.
// Genera versiones WebP y PNG en varios tamaños, manteniendo el aspecto.
//
// Espejo de dev-notes-gen-simplifica-assets.mjs. La logica de cleanAlpha es
// identica — los fuentes de Strata tienen el mismo bleed rojo en el alpha
// que los de Simplifica (mismo diseno base, mismo problema de export).
import sharp from 'sharp';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, 'dev-assets', 'strata');
const OUT = join(__dirname, 'public', 'productos', 'strata');
mkdirSync(OUT, { recursive: true });

const WEBP_QUALITY = 82;
const PNG_COMPRESSION = 9;

async function cleanAlpha(inputBuf) {
  const { data, info } = await sharp(inputBuf)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];

    const isRedBleed = r > 2 * g + 20 && r > 2 * b + 20 && g < 90 && b < 90;
    const isEdgeNoise = a < 20;

    if (isRedBleed || isEdgeNoise) {
      data[i + 3] = 0;
    }
  }

  return sharp(data, { raw: info }).png({ compressionLevel: PNG_COMPRESSION }).toBuffer();
}

async function toWebp(buf, width, height, options = {}) {
  const src = options.cleanAlpha ? await cleanAlpha(buf) : buf;
  return sharp(src)
    .resize(width, height, options.resize ?? { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toBuffer();
}

async function toPng(buf, width, height, options = {}) {
  const src = options.cleanAlpha ? await cleanAlpha(buf) : buf;
  return sharp(src)
    .resize(width, height, options.resize ?? { fit: 'inside', withoutEnlargement: true })
    .png({ compressionLevel: PNG_COMPRESSION, quality: 92 })
    .toBuffer();
}

async function processLogo(name, srcFile, opts) {
  const buf = readFileSync(join(SRC, srcFile));
  const meta = await sharp(buf).metadata();
  console.log(`[${name}] source: ${meta.width}x${meta.height} ${meta.format}`);

  const widths = [320, 480, 640, 800];
  for (const w of widths) {
    const out = await toWebp(buf, w, null, { cleanAlpha: opts.cleanAlpha });
    writeFileSync(join(OUT, `${name}-${w}.webp`), out);
    console.log(`  -> ${name}-${w}.webp (${out.length} bytes)`);
  }

  const baseWebp = await toWebp(buf, 640, null, { cleanAlpha: opts.cleanAlpha });
  writeFileSync(join(OUT, `${name}.webp`), baseWebp);
  console.log(`  -> ${name}.webp (${baseWebp.length} bytes)`);

  const png = await toPng(buf, 640, null, { cleanAlpha: opts.cleanAlpha });
  writeFileSync(join(OUT, `${name}.png`), png);
  console.log(`  -> ${name}.png (${png.length} bytes)`);
}

async function processIcon(srcFile) {
  const buf = readFileSync(join(SRC, srcFile));
  const meta = await sharp(buf).metadata();
  console.log(`[icon] source: ${meta.width}x${meta.height} ${meta.format}`);

  const sizes = [32, 48, 64, 96, 128, 192, 256, 512];
  for (const s of sizes) {
    const out = await toWebp(buf, s, s, {
      cleanAlpha: true,
      resize: { fit: 'cover' },
    });
    writeFileSync(join(OUT, `icon-${s}.webp`), out);
  }
  const baseWebp = await toWebp(buf, 256, 256, {
    cleanAlpha: true,
    resize: { fit: 'cover' },
  });
  writeFileSync(join(OUT, 'icon.webp'), baseWebp);
  console.log(`  -> icon.webp (${baseWebp.length} bytes)`);
  const png256 = await toPng(buf, 256, 256, {
    cleanAlpha: true,
    resize: { fit: 'cover' },
  });
  writeFileSync(join(OUT, 'icon.png'), png256);
  console.log(`  -> icon.png (${png256.length} bytes) + icon-{32..512}.webp`);
}

async function main() {
  // Strata solo tiene una variante de logo (sobre fondo blanco) — usamos
  // logo-fondo.png como fuente del lockup horizontal.
  await processLogo('logo-on-light', 'logo-fondo.png', { cleanAlpha: true });
  // Icono: del favicon.png (icono solo sobre fondo blanco).
  await processIcon('favicon.png');

  // pwa.png se copia tal cual a public/ (sin redimensionar) — esta disennado
  // ya como icono PWA (rounded square sobre fondo azul oscuro). Para uso
  // futuro en manifest, OG, o icono de instalacion.
  const pwaBuf = readFileSync(join(SRC, 'pwa.png'));
  writeFileSync(join(OUT, 'pwa.png'), pwaBuf);
  console.log(`  -> pwa.png (${pwaBuf.length} bytes) [copia tal cual]`);
}

main().catch((e) => {
  console.error('error:', e);
  process.exit(1);
});
