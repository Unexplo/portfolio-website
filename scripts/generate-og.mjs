// Generates public/og.png (1200x630) from an inline SVG.
// Runs automatically before `astro build` (see package.json "prebuild").
// Uses sharp, which ships with Astro's image service.
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const out = fileURLToPath(new URL("../public/og.png", import.meta.url));

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#faf9f5"/>
  <g fill="#1a181410">
    ${Array.from({ length: 28 * 15 }, (_, i) => {
      const x = (i % 28) * 44 + 22;
      const y = Math.floor(i / 28) * 44 + 22;
      return `<circle cx="${x}" cy="${y}" r="1.4"/>`;
    }).join("")}
  </g>
  <g transform="translate(80,150)">
    <circle cx="14" cy="14" r="14" fill="#c2603d"/>
    <text x="44" y="26" font-family="Georgia, serif" font-size="34" fill="#1a1814">Unexplo</text>
  </g>
  <text x="80" y="320" font-family="Georgia, serif" font-size="72" fill="#1a1814">AI engineered for</text>
  <text x="80" y="400" font-family="Georgia, serif" font-size="72" fill="#1a1814">your business.</text>
  <text x="80" y="480" font-family="Inter, Arial, sans-serif" font-size="30" fill="#46423a">Labs · Academy · Newsletter · Built and operated end-to-end.</text>
  <text x="80" y="572" font-family="monospace" font-size="22" fill="#c2603d">unexplo.com</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log(`[og] wrote ${out}`);
