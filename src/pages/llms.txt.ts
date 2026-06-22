import type { APIRoute } from "astro";
import { site, engine } from "@/data/site";

// llms.txt — a curated, LLM-friendly map of the site.
// Spec: https://llmstxt.org/  (H1 title, blockquote summary, linked sections).
export const GET: APIRoute = () => {
  const u = site.url;

  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.tagline} ${site.description}`,
    "",
    "Unexplo is a governed, AI-native data discovery tool. Rapid prototyping lets teams write requirements that make sense to engineers; tight integration makes the handoff seamless. The core engine is modular enough to adapt to any requirement, abstract enough to avoid noisy logic, with built-in compatibility and handoff so you can onboard quickly and leave at your choice.",
    "",
    "## Pages",
    `- [Home](${u}/): Governed, AI-native data discovery — the engine, principles, and handoff.`,
    "",
    "## Core engine",
    ...engine.map((e) => `- ${e.name} — ${e.role}: ${e.description}`),
    "",
    "## Contact",
    `- Email: ${site.email}`,
    "- X: https://x.com/unexplo2k",
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
