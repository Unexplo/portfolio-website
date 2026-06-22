// Generates public/og.png (1200x630) from an inline SVG.
// Runs automatically before `astro build` (see package.json "prebuild").
// Uses sharp, which ships with Astro's image service.
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const out = fileURLToPath(new URL("../public/og.png", import.meta.url));

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="78%" cy="22%" r="60%">
      <stop offset="0%" stop-color="#4f46e5" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#4f46e5" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#ffffff"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <g fill="#0a0a0b14">
    ${Array.from({ length: 28 * 15 }, (_, i) => {
      const x = (i % 28) * 44 + 22;
      const y = Math.floor(i / 28) * 44 + 22;
      return `<circle cx="${x}" cy="${y}" r="1.4"/>`;
    }).join("")}
  </g>
  <g transform="translate(80,150)">
    <text x="0" y="26" font-family="Georgia, serif" font-size="34" fill="#0a0a0b">Unexplo</text>
  </g>
  <text x="80" y="320" font-family="Georgia, serif" font-size="72" fill="#0a0a0b">Governed, AI-native</text>
  <text x="80" y="400" font-family="Georgia, serif" font-size="72" fill="#0a0a0b">data discovery.</text>
  <text x="80" y="480" font-family="Inter, Arial, sans-serif" font-size="30" fill="#52555c">Built on dbt · Kedro · Obsidian. Adapts to any analytics system.</text>
  <text x="80" y="572" font-family="monospace" font-size="22" fill="#4f46e5">unexplo.com</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log(`[og] wrote ${out}`);
