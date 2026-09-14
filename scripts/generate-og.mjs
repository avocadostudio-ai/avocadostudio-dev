/*
 * Renders the Open Graph card to src/assets/images/default.png.
 *
 * The previous Next.js site generated this per-request with next/og. Astro
 * builds static, so it is generated here instead and committed — the card only
 * changes when the wording or brand does. satori is the same engine next/og
 * used, so the output matches the card that was shipping before.
 *
 * Run with: pnpm og
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import satori from 'satori';
import sharp from 'sharp';

const ROOT = process.cwd();
// Matches what AstroWind's OG pipeline emits, so the card is not resampled.
const SIZE = { width: 1200, height: 626 };
const OUT = join(ROOT, 'src', 'assets', 'images', 'default.png');

// satori does no synthetic bolding: any weight not supplied here silently
// renders as regular, so load the real faces.
async function loadFonts() {
  const dir = join(ROOT, 'assets', 'fonts');
  const [display, body] = await Promise.all([
    readFile(join(dir, 'SchibstedGrotesk-SemiBold.ttf')),
    readFile(join(dir, 'InstrumentSans-Regular.ttf')),
  ]);
  return [
    { name: 'Schibsted Grotesk', data: display, weight: 600, style: 'normal' },
    { name: 'Instrument Sans', data: body, weight: 400, style: 'normal' },
  ];
}

// satori takes React-element-shaped objects; building them by hand keeps this
// script free of JSX tooling.
const h = (type, props, ...children) => ({
  type,
  props: { ...props, children: children.length <= 1 ? children[0] : children },
});

const card = h(
  'div',
  {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '80px',
      background: 'linear-gradient(135deg, #16241A 0%, #1F4A2C 58%, #2F6B3F 100%)',
      color: '#FBFAF7',
      fontFamily: 'Instrument Sans',
    },
  },
  h(
    'div',
    { style: { display: 'flex', alignItems: 'center', gap: '24px' } },
    h(
      'div',
      {
        style: {
          width: '72px',
          height: '84px',
          borderRadius: '36px 36px 44px 44px',
          background: '#7FA86A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
      h('div', { style: { width: '30px', height: '30px', borderRadius: '50%', background: '#7A5230' } })
    ),
    h(
      'div',
      { style: { fontFamily: 'Schibsted Grotesk', fontSize: '44px', fontWeight: 600, letterSpacing: '-0.5px' } },
      'Avocado Studio'
    )
  ),
  h(
    'div',
    {
      style: {
        marginTop: '56px',
        fontFamily: 'Schibsted Grotesk',
        fontWeight: 600,
        fontSize: '68px',
        lineHeight: 1.08,
        letterSpacing: '-1px',
        maxWidth: '940px',
      },
    },
    'Edit, maintain, optimize your website with AI.'
  ),
  h(
    'div',
    { style: { marginTop: '32px', fontSize: '28px', lineHeight: 1.4, color: '#D2DACB', maxWidth: '880px' } },
    'Describe it in plain language. Next.js today, Astro next.'
  )
);

const svg = await satori(card, { ...SIZE, fonts: await loadFonts() });
await writeFile(OUT, await sharp(Buffer.from(svg)).png().toBuffer());
console.log(`Wrote ${OUT}`);
