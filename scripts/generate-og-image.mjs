// Genera public/og-image.jpg (1200×630) para Open Graph.
// Fuente: docs/content.md §12 — `categoria-infantil.jpg` + logo.
//
// Uso: node scripts/generate-og-image.mjs  (o `pnpm og-image`)

import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const PHOTO = path.join(root, 'public/images/categoria-infantil.jpg');
const LOGO = path.join(root, 'public/logo/logotipo-horizontal-dark.png');
const OUT = path.join(root, 'public/og-image.jpg');

const W = 1200;
const H = 630;

async function main() {
  const base = await sharp(PHOTO)
    .resize(W, H, { fit: 'cover', position: 'top' })
    .toBuffer();

  // Degradado navy hacia abajo, para que el logo se lea sobre la foto.
  const gradient = Buffer.from(
    `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#01245B" stop-opacity="0"/>
          <stop offset="55%" stop-color="#01245B" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="#01245B" stop-opacity="0.85"/>
        </linearGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#g)"/>
    </svg>`
  );

  const logo = await sharp(LOGO).resize({ width: 420 }).toBuffer();
  const logoMeta = await sharp(logo).metadata();

  await sharp(base)
    .composite([
      { input: gradient, top: 0, left: 0 },
      {
        input: logo,
        left: 64,
        top: H - (logoMeta.height ?? 100) - 56,
      },
    ])
    .jpeg({ quality: 88 })
    .toFile(OUT);

  console.log(`Generado ${OUT}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
