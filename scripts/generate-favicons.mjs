/*
 * Renders the raster favicons from the avocado mark in
 * src/assets/favicons/favicon.svg, so the .ico and the apple-touch icon can
 * never drift from the SVG the browser actually prefers.
 *
 * Run with: pnpm favicons
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const DIR = join(process.cwd(), 'src', 'assets', 'favicons');
const svg = await readFile(join(DIR, 'favicon.svg'));

// The mark is a green avocado on transparency; flatten the touch icon onto the
// paper ground so iOS doesn't composite it onto black.
await writeFile(
  join(DIR, 'apple-touch-icon.png'),
  await sharp(svg, { density: 384 }).resize(180, 180).flatten({ background: '#FBFAF7' }).png().toBuffer()
);

// .ico: a 32px PNG is accepted by every browser that still asks for favicon.ico.
await writeFile(
  join(DIR, 'favicon.ico'),
  await sharp(svg, { density: 384 }).resize(32, 32).png().toBuffer()
);

console.log('Wrote apple-touch-icon.png and favicon.ico');
