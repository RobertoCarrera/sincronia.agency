// Genera todos los favicons a partir de public/favicon-source.png
// Outputs: favicon.ico, favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png,
//          android-chrome-192x192.png, android-chrome-512x512.png, mstile-150x150.png,
//          safari-pinned-tab.svg
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, 'public');
const SOURCE = join(__dirname, 'dev-assets', 'favicon-source.png');

// Genera un SVG monocromo a partir del PNG (tinta negra) para Safari pinned tab
// Safari pinned tab solo respeta el color del SVG; en este caso lo dejo como
// "currentColor" para que pueda adaptarse al tema del sistema, pero como fallback
// uso el coral para mantener identidad.
const SAFARI_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="#1B3A6B"/>
  <path fill="#FF7A4D" d="M30 22h32c12 0 22 5 22 18 0 8-5 13-13 16l17 22H70L55 60H44v18H30V22zm14 12v14h17c5 0 9-3 9-7s-4-7-9-7H44z"/>
  <circle cx="50" cy="50" r="8" fill="none" stroke="#fff" stroke-width="3"/>
</svg>`;

async function main() {
  const buf = readFileSync(SOURCE);
  const meta = await sharp(buf).metadata();
  console.log(`[favicons] source: ${meta.width}x${meta.height} ${meta.format}`);

  // PNGs a varios tamaños
  const sizes = {
    'favicon-16x16.png': 16,
    'favicon-32x32.png': 32,
    'favicon-48x48.png': 48,
    'apple-touch-icon.png': 180,
    'android-chrome-192x192.png': 192,
    'android-chrome-512x512.png': 512,
    'mstile-70x70.png': 70,
    'mstile-150x150.png': 150,
    'mstile-310x310.png': 310,
    'mstile-310x150.png': { w: 310, h: 150 },
  };

  for (const [name, size] of Object.entries(sizes)) {
    const w = typeof size === 'object' ? size.w : size;
    const h = typeof size === 'object' ? size.h : size;
    await sharp(buf)
      .resize(w, h, { fit: 'cover', withoutEnlargement: false })
      .png({ compressionLevel: 9, quality: 100 })
      .toFile(join(PUBLIC, name));
    console.log(`  -> ${name} (${w}x${h})`);
  }

  // Construir favicon.ico con 3 tamaños (16, 32, 48) — formato ICO con PNG embebido
  const pngs = await Promise.all([16, 32, 48].map(async (s) => {
    const p = await sharp(buf).resize(s, s, { fit: 'cover' }).png().toBuffer();
    return { size: s, data: p };
  }));

  const ico = buildIco(pngs);
  writeFileSync(join(PUBLIC, 'favicon.ico'), ico);
  console.log(`  -> favicon.ico (${pngs.length} sizes, ${ico.length} bytes)`);

  // SVG para Safari pinned tab (monocromo, con tinta negra; el "color" lo pone Safari
  // desde el theme-color). Como el icono real tiene 2 colores y pinned tab requiere
  // monocromo, simplifico a la silueta.
  writeFileSync(join(PUBLIC, 'safari-pinned-tab.svg'), SAFARI_SVG);
  console.log('  -> safari-pinned-tab.svg');
}

function buildIco(images) {
  // ICONDIR (6 bytes) + N * ICONDIRENTRY (16 bytes) + PNGs
  const numImages = images.length;
  const headerSize = 6 + numImages * 16;
  const header = Buffer.alloc(headerSize);
  // Reserved
  header.writeUInt16LE(0, 0);
  // Type: 1 = ICO
  header.writeUInt16LE(1, 2);
  // Number of images
  header.writeUInt16LE(numImages, 4);

  let offset = headerSize;
  images.forEach((img, i) => {
    const entryOffset = 6 + i * 16;
    header.writeUInt8(img.size === 256 ? 0 : img.size, entryOffset + 0); // width (0 = 256)
    header.writeUInt8(img.size === 256 ? 0 : img.size, entryOffset + 1); // height
    header.writeUInt8(0, entryOffset + 2); // palette
    header.writeUInt8(0, entryOffset + 3); // reserved
    header.writeUInt16LE(1, entryOffset + 4); // color planes
    header.writeUInt16LE(32, entryOffset + 6); // bits per pixel
    header.writeUInt32LE(img.data.length, entryOffset + 8); // size
    header.writeUInt32LE(offset, entryOffset + 12); // offset
    offset += img.data.length;
  });

  return Buffer.concat([header, ...images.map((i) => i.data)]);
}

main().catch((e) => {
  console.error('[favicons] error:', e);
  process.exit(1);
});
