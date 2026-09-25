// Prepara las fotografías reales para el pipeline de imágenes de Astro.
// - Copia sin alterar las fotos que no necesitan corrección.
// - A las 4 fotos de piscina les baja la saturación (~18%) y corrige la
//   dominante cian, tal como pide DESIGN.md §5 ("corrección de color al
//   exportar, no con filtros CSS en producción").
//
// Uso: node scripts/process-images.mjs

import sharp from 'sharp';
import { mkdir, copyFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const SRC = path.join(root, 'public/images');
const OUT = path.join(root, 'src/assets/images');

// Fotos que se usan tal cual (docs/content.md §11 / DESIGN.md §5).
const PLAIN_COPY = [
  'alumnos-practicando-borde-piscina.jpg',
  'profesor-junto-a-alumnos.jpg',
  'categoria-infantil.jpg',
  'bebe-y-padre-piscina.png',
  'alumnos-compitiendo.jpg',
  'director-profesor-compitiendo-mundial-aguas-gelidas.jpg',
];

// Fotos de piscina: corrección de color (galería de instalaciones).
const COLOR_CORRECT = [
  'piscina-temperada-01.webp',
  'piscina-temperada-02.jpg',
  'piscina-aire-libre-01.webp',
  'piscina-aire-libre-02.webp',
];

async function main() {
  await mkdir(OUT, { recursive: true });

  for (const name of PLAIN_COPY) {
    await copyFile(path.join(SRC, name), path.join(OUT, name));
    console.log(`copiada  ${name}`);
  }

  for (const name of COLOR_CORRECT) {
    const outName = name.replace(/\.webp$/, '.jpg');
    await sharp(path.join(SRC, name))
      // Baja saturación ~18% y neutraliza un poco la dominante cian
      // rotando levemente el matiz hacia el azul-verde real del agua.
      .modulate({ saturation: 0.82, hue: -6 })
      .jpeg({ quality: 88 })
      .toFile(path.join(OUT, outName));
    console.log(`corregida ${name} → ${outName}`);
  }

  console.log('\nListo. Imágenes preparadas en src/assets/images/.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
