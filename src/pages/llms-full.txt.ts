import type { APIRoute } from "astro";
import { site, newsletter, academy } from "@/data/site";
import { projects } from "@/data/projects";
import { roadmap } from "@/data/roadmap";

// llms-full.txt — the full, self-contained context for LLMs in one document.
export const GET: APIRoute = () => {
  const u = site.url;

  const lines = [
    `# ${site.name} — Full Context`,
    "",
    `> ${site.tagline}`,
    "",
    site.description,
    "",
    "---",
    "",
    "## About Unexplo",
    "",
    "Unexplo is an AI lab and implementation studio, and a Claude partner. We design, build, and operate practical AI systems, run our own product experiments, and teach what we learn. We believe in discovery-first prototyping, client ownership of code and data, shipping small to learn fast, and optimizing for practical outcomes over novelty.",
    "",
    "## Unexplo Labs — experiments and discovery",
    "",
    "The Labs are four products exploring what modern AI makes newly possible:",
    "",
    ...projects.flatMap((p) => [
      `### ${p.name} — ${p.tagline}`,
      `Status: ${p.status}. Domain: ${p.domain}.`,
      p.description,
      "",
    ]),
    "## Unexplo Academy",
    "",
    `${academy.course}: ${academy.tagline}`,
    `Format: ${academy.format}. Capacity: ${academy.capacity} seats. Beginner friendly, no prior experience required.`,
    "Curriculum: (1) What AI actually is; (2) Prompting that works; (3) Building with tools, retrieval, and agents; (4) Ship your first AI project.",
    `Register at ${u}/academy or email ${site.email}.`,
    "",
    "## Unexplored — the newsletter",
    "",
    `${newsletter.name}: ${newsletter.tagline} ${newsletter.description}`,
    "Each issue covers what's working in business AI, what's emerging at the frontier, and the unknowns worth watching.",
    `Subscribe at ${u}/newsletter.`,
    "",
    "## Roadmap",
    "",
    "What we're building, across Labs, Academy, and open source:",
    ...roadmap.map((r) => `- [${r.status}] ${r.title}${r.area ? ` (${r.area})` : ""}${r.note ? ` — ${r.note}` : ""}`),
    "",
    "## Open source",
    "",
    "GitHub organization: https://github.com/Unexplo. Includes official Unexplo plugins, MCP servers such as StrideHive (wearable & motion data as Claude-callable tools), and experimental AI workflows.",
    "",
    "## Contact",
    "",
    `Email: ${site.email}`,
    "GitHub: https://github.com/Unexplo",
    "X: https://x.com/unexplo",
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
