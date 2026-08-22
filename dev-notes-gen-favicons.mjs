// Regenera los favicons de Sincronia desde el logo real (sincronia-logo-transp.png).
// Detecta automáticamente la "S" del logo, la recorta, y la usa en todos los
// tamaños: favicon.ico multi-tamaño (16/32/48), favicon-16/32/48.png,
// apple-touch-icon.png 180x180, android-chrome-192/512.png + maskable,
// mstile-70/150/310.png, favicon.svg, safari-pinned-tab.svg.
//
// Uso: node dev-notes-gen-favicons.mjs
// Fuente esperada: dev-assets/sincronia/sincronia-logo-transp.png
// Salida: public/ (favicon.ico, favicon-*.png, etc.)
//
// Los assets se suben a R2 (media.sincronia.agency) con
// dev-notes-upload-favicons.mjs y Cloudflare Pages los sirve también
// desde public/ para que /favicon.ico (canónico de Google) funcione
// sin redirect.

import sharp from 'sharp';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, 'dev-assets', 'sincronia', 'sincronia-logo-transp.png');
const OUT = join(__dirname, 'public');
mkdirSync(OUT, { recursive: true });

async function cropToS(src) {
  const meta = await sharp(src).metadata();
  console.log('Source:', meta.width, 'x', meta.height);

  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  let minX = info.width, minY = info.height, maxX = -1, maxY = -1;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const a = data[(y * info.width + x) * 4 + 3];
      if (a > 50) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }

  const w = maxX - minX + 1;
  const h = maxY - minY + 1;
  // Encontrar gap horizontal grande para separar la "S" del texto "Sincronia"
  const colHasPixel = new Array(w).fill(false);
  for (let y = minY; y <= maxY; y++) {
    for (let x = minX; x <= maxX; x++) {
      const a = data[(y * info.width + x) * 4 + 3];
      if (a > 50) colHasPixel[x - minX] = true;
    }
  }

  let sEndX = w;
  for (let x = 30; x < w - 100; x++) {
    if (!colHasPixel[x]) {
      let gapLen = 0;
      for (let g = x; g < w && !colHasPixel[g]; g++) gapLen++;
      if (gapLen >= 30) { sEndX = x; break; }
    }
  }

  const sWidth = sEndX;
  const sHeight = h;
  const size = Math.max(sWidth, sHeight);
  const offsetX = minX + Math.floor((sWidth - size) / 2);
  const offsetY = minY + Math.floor((sHeight - size) / 2);

  return await sharp(src)
    .extract({ left: offsetX, top: offsetY, width: size, height: size })
    .png()
    .toBuffer();
}

const sBuf = await cropToS(SRC);
const NAVY = { r: 27, g: 58, b: 107, alpha: 1 };
const CORAL = { r: 255, g: 122, b: 77, alpha: 1 };

// Genera cada tamaño con la S al 80% del canvas, centrada, fondo navy
const SIZES = {
  'favicon-16x16.png': [16, 16],
  'favicon-32x32.png': [32, 32],
  'favicon-48x48.png': [48, 48],
  'apple-touch-icon.png': [180, 180],
  'android-chrome-192x192.png': [192, 192],
  'android-chrome-512x512.png': [512, 512],
  'android-chrome-maskable-192x192.png': [192, 192],
  'android-chrome-maskable-512x512.png': [512, 512],
  'mstile-70x70.png': [70, 70],
  'mstile-150x150.png': [150, 150],
  'mstile-310x310.png': [310, 310],
};

for (const [name, [w, h]] of Object.entries(SIZES)) {
  const innerSize = Math.round(Math.min(w, h) * 0.8);
  const inner = await sharp(sBuf).resize(innerSize, innerSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  const out = await sharp({ create: { width: w, height: h, channels: 4, background: NAVY } })
    .composite([{ input: inner, gravity: 'center' }])
    .png({ compressionLevel: 9 })
    .toBuffer();
  writeFileSync(join(OUT, name), out);
  console.log('  ' + name + ' (' + out.length + ' bytes)');
}

// mstile 310x150 (banner Windows)
const inner150 = await sharp(sBuf).resize(120, 120, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
const mstileWide = await sharp({ create: { width: 310, height: 150, channels: 4, background: NAVY } })
  .composite([{ input: inner150, gravity: 'center' }])
  .png({ compressionLevel: 9 })
  .toBuffer();
writeFileSync(join(OUT, 'mstile-310x150.png'), mstileWide);
console.log('  mstile-310x150.png (' + mstileWide.length + ' bytes)');

// favicon.ico multi-tamaño (PNG embebidos)
const pngs = await Promise.all([16, 32, 48].map(async (s) => ({
  size: s,
  buf: await sharp(sBuf).resize(s, s, { fit: 'contain', background: NAVY }).png().toBuffer(),
})));
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(pngs.length, 4);
let dataOff = 6 + 16 * pngs.length;
const entries = pngs.map((p) => {
  const e = Buffer.alloc(16);
  e.writeUInt8(p.size === 256 ? 0 : p.size, 0);
  e.writeUInt8(p.size === 256 ? 0 : p.size, 1);
  e.writeUInt16LE(1, 4); e.writeUInt16LE(32, 6);
  e.writeUInt32LE(p.buf.length, 8);
  e.writeUInt32LE(dataOff, 12);
  dataOff += p.buf.length;
  return e;
});
writeFileSync(join(OUT, 'favicon.ico'), Buffer.concat([header, ...entries, ...pngs.map((p) => p.buf)]));
console.log('  favicon.ico (multi-tamaño 16+32+48)');

// favicon.svg (vector con la S estilizada sobre fondo navy)
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <rect width="48" height="48" fill="#1B3A6B"/>
  <text x="24" y="36" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="38" font-weight="700" fill="#FF7A4D" text-anchor="middle" font-style="italic">S</text>
</svg>`;
writeFileSync(join(OUT, 'favicon.svg'), svg);
console.log('  favicon.svg');

// safari-pinned-tab.svg (monocromo, color CSS — Safari lo aplica)
const safariSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <text x="24" y="36" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="38" font-weight="700" fill="#1B3A6B" text-anchor="middle" font-style="italic">S</text>
</svg>`;
writeFileSync(join(OUT, 'safari-pinned-tab.svg'), safariSvg);
console.log('  safari-pinned-tab.svg');

// manifest.webmanifest (PWA)
const manifest = {
  name: 'Sincronia Agency',
  short_name: 'Sincronia',
  description: 'Agencia técnica de diseño, desarrollo y SEO en Tarragona',
  start_url: '/',
  display: 'standalone',
  background_color: '#ffffff',
  theme_color: '#1B3A6B',
  icons: [
    { src: 'https://media.sincronia.agency/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    { src: 'https://media.sincronia.agency/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    { src: 'https://media.sincronia.agency/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    { src: 'https://media.sincronia.agency/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    { src: 'https://media.sincronia.agency/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    { src: 'https://media.sincronia.agency/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    { src: 'https://media.sincronia.agency/android-chrome-maskable-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
    { src: 'https://media.sincronia.agency/android-chrome-maskable-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
  ],
};
writeFileSync(join(OUT, 'manifest.webmanifest'), JSON.stringify(manifest, null, 2));
console.log('  manifest.webmanifest');

// browserconfig.xml (Windows tile)
const browserconfig = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square70x70logo src="https://media.sincronia.agency/mstile-70x70.png"/>
      <square150x150logo src="https://media.sincronia.agency/mstile-150x150.png"/>
      <square310x310logo src="https://media.sincronia.agency/mstile-310x310.png"/>
      <wide310x150logo src="https://media.sincronia.agency/mstile-310x150.png"/>
      <TileColor>#1B3A6B</TileColor>
    </tile>
  </msapplication>
</browserconfig>`;
writeFileSync(join(OUT, 'browserconfig.xml'), browserconfig);
console.log('  browserconfig.xml');

console.log('\nOK — todos los favicons regenerados');
