import type { APIRoute } from "astro";
import { site, newsletter, academy } from "@/data/site";
import { projects } from "@/data/projects";

// llms.txt — a curated, LLM-friendly map of the site.
// Spec: https://llmstxt.org/  (H1 title, blockquote summary, linked sections).
export const GET: APIRoute = () => {
  const u = site.url;

  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.tagline} ${site.description}`,
    "",
    "Unexplo is a Claude-partner AI lab and implementation studio. We run Labs (experiments and discovery), teach an Intro to AI through Unexplo Academy, publish the Unexplored newsletter, and build practical AI tools in the open on GitHub.",
    "",
    "## Pages",
    `- [Home](${u}/): Overview of Unexplo — Labs, Academy, Newsletter, and Roadmap.`,
    `- [Labs](${u}/labs): Experiments and discovery across four projects.`,
    `- [Academy](${u}/academy): ${academy.course} — a live ${academy.capacity}-seat cohort for building with AI.`,
    `- [Newsletter](${u}/newsletter): ${newsletter.name} — ${newsletter.tagline}`,
    `- [Roadmap](${u}/roadmap): Live Kanban of what we're building, synced from GitHub Projects.`,
    `- [Contact](${u}/contact): Email ${site.email}, plus GitHub and X.`,
    "",
    "## Labs projects",
    ...projects.map((p) => `- ${p.name} (${p.status}, ${p.domain}): ${p.description}`),
    "",
    "## Academy",
    `- ${academy.course}: ${academy.tagline} ${academy.format}, capped at ${academy.capacity} participants, beginner friendly.`,
    "",
    "## Open source",
    "- GitHub org: https://github.com/Unexplo — official plugins, MCP servers (e.g. StrideHive), and experimental AI tools.",
    "",
    "## Contact",
    `- Email: ${site.email}`,
    "- GitHub: https://github.com/Unexplo",
    "- X: https://x.com/unexplo",
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
