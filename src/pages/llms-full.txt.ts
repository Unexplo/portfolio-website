import type { APIRoute } from "astro";
import { site, engine, acronym } from "@/data/site";

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
    "Unexplo is a governed, AI-native data discovery tool. The core engine is built on tools that are modular enough to adapt to any requirement, while abstract enough to avoid noisy logic — all the while respecting your freedom of choice. It has built-in compatibility and handoff processes to adapt to any business analytics system, so you can quickly onboard and leave at your choice.",
    "",
    "## The idea",
    "",
    "Make requirements less dumb. Rapid prototyping lets you write requirements that make sense to your engineering teams. Tight integration makes the handoff process seamless. Companies leveraging these principles scale faster than those that don't. Choose the right tools for a scalable future.",
    "",
    "## Core engine",
    "",
    ...engine.map((e) => `### ${e.name} — ${e.role}\n${e.description}`).flatMap((s) => [s, ""]),
    "## Principles (UNEXPLO)",
    "",
    ...acronym.map((a) => `- ${a.letter} — ${a.word}: ${a.note}`),
    "",
    "## Contact",
    "",
    `Email: ${site.email}`,
    "X: https://x.com/unexplo2k",
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
