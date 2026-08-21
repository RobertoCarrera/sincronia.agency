// Optimiza los assets de Simplifica (logo y favicon) y los guarda en public/productos/simplifica/.
// Genera versiones WebP y PNG en varios tamaños, manteniendo el aspecto.
//
// IMPORTANTE: los fuentes con transparencia (`*-transp.png`) tienen artefactos
// rojos en el alpha (pixels con RGB rojo y alpha bajo, bleed del color de la
// pieza). Aplicamos threshold al alpha para purgar esos pixels: cualquier
// pixel con alpha < THRESHOLD se hace completamente transparente. Los fuentes
// con fondo solido (`*-fondo.png`) se usan tal cual.
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
// Los fuentes con alpha sucio tienen DOS tipos de pixel problematico:
//  1. Pixels casi transparentes con bleed rojo puro (R~255, G<80, B<80) — bled
//     del color de la pieza durante el export.
//  2. Pixels de borde con alpha muy bajo (< 30) — son casi invisibles pero
//     acumulan "ruido" rosa en el render.
// Reglas:
//  - Pixels con R>200 && G<80 && B<80 se hacen transparentes (purga el bleed).
//  - Pixels con alpha < 30 se hacen transparentes (purga el ruido de borde).
// NO tocamos pixels naranja (R~255, G~122, B~77) ni el azul marino (B>R) ni
// el texto navy. La funcion solo afecta pixels claramente problematicos.

/**
 * Purga pixels con bleed rojo en el alpha y ruido de borde casi transparente.
 * Devuelve un Buffer PNG con el alpha saneado.
 */
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

    // El bleed real tiene ratio R:G:R:B de ~8:1:1 (255,30,30).
    // El orange del icono (255,122,77) tiene ratio ~3:1.5:1, NO matchea.
    // Los bordes anti-aliased del orange (200,100,60) tampoco matchean.
    const isRedBleed = r > 2 * g + 20 && r > 2 * b + 20 && g < 90 && b < 90;
    // Pixels muy claros (anti-aliasing contra fondo blanco): si R>200 y
    // (G>200 o B>200) y alpha<255, es AA contra blanco. Lo matamos solo si
    // alpha<200 (los pixels solidos tienen alpha=255 y no entran).
    const isAAonWhite = a < 200 && r > 200 && (g > 200 || b > 200);
    // Ruido de borde casi invisible.
    const isEdgeNoise = a < 20;

    if (isRedBleed || isAAonWhite || isEdgeNoise) {
      data[i + 3] = 0;
    }
  }

  return sharp(data, { raw: info }).png({ compressionLevel: PNG_COMPRESSION }).toBuffer();
}

/**
 * Genera un WebP desde un buffer, opcionalmente aplicando cleanAlpha primero.
 */
async function toWebp(buf, width, height, options = {}) {
  const src = options.cleanAlpha ? await cleanAlpha(buf) : buf;
  return sharp(src)
    .resize(width, height, options.resize ?? { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toBuffer();
}

/**
 * Genera un PNG desde un buffer, opcionalmente aplicando cleanAlpha primero.
 */
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

  // WebP srcset sizes
  const widths = [320, 480, 640, 800];
  for (const w of widths) {
    const out = await toWebp(buf, w, null, { cleanAlpha: opts.cleanAlpha });
    writeFileSync(join(OUT, `${name}-${w}.webp`), out);
    console.log(`  -> ${name}-${w}.webp (${out.length} bytes)`);
  }

  // WebP base (sin sufijo) — para consumidores que no usan srcset (e.g. JSON-LD).
  const baseWebp = await toWebp(buf, 640, null, { cleanAlpha: opts.cleanAlpha });
  writeFileSync(join(OUT, `${name}.webp`), baseWebp);
  console.log(`  -> ${name}.webp (${baseWebp.length} bytes)`);

  // PNG fallback (single size).
  const png = await toPng(buf, 640, null, { cleanAlpha: opts.cleanAlpha });
  writeFileSync(join(OUT, `${name}.png`), png);
  console.log(`  -> ${name}.png (${png.length} bytes)`);
}

async function processIcon(srcFile) {
  const buf = readFileSync(join(SRC, srcFile));
  const meta = await sharp(buf).metadata();
  console.log(`[icon] source: ${meta.width}x${meta.height} ${meta.format}`);

  // Para el icono cuadrado necesitamos todos los tamaños que lo usen.
  const sizes = [32, 48, 64, 96, 128, 192, 256, 512];
  for (const s of sizes) {
    const out = await toWebp(buf, s, s, {
      cleanAlpha: true,
      resize: { fit: 'cover' },
    });
    writeFileSync(join(OUT, `icon-${s}.webp`), out);
  }
  // WebP base (sin sufijo) — ProductCard y MegaMenu usan `${logo.src}.webp`.
  const baseWebp = await toWebp(buf, 256, 256, {
    cleanAlpha: true,
    resize: { fit: 'cover' },
  });
  writeFileSync(join(OUT, 'icon.webp'), baseWebp);
  console.log(`  -> icon.webp (${baseWebp.length} bytes)`);
  // PNG fallback principal.
  const png256 = await toPng(buf, 256, 256, {
    cleanAlpha: true,
    resize: { fit: 'cover' },
  });
  writeFileSync(join(OUT, 'icon.png'), png256);
  console.log(`  -> icon.png (${png256.length} bytes) + icon-{32..512}.webp`);
}

async function main() {
  // Logos completos (con texto "Simplifica CRM by Sincronia").
  // El naming "logo-on-light"/"logo-on-dark" se refiere al FONDO donde se USA,
  // no al fondo del propio PNG. Ambos deben tener alpha transparente para
  // poder usarse sobre cualquier fondo. Como solo usamos el lockup sobre
  // fondo claro (mega menu + product page), generamos solo logo-on-light
  // desde el PNG transparente.
  await processLogo('logo-on-light', 'logo-transp.png', { cleanAlpha: true });

  // Icono hexagonal (favicon del producto). El PNG fuente tiene bleed rojo → cleanAlpha.
  await processIcon('favicon-transp.png');
}

main().catch((e) => {
  console.error('error:', e);
  process.exit(1);
});
