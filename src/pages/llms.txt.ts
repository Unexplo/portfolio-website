import type { APIRoute } from "astro";
import { site, newsletter } from "@/data/site";

// llms.txt — a curated, LLM-friendly map of the site.
// Spec: https://llmstxt.org/  (H1 title, blockquote summary, linked sections).
export const GET: APIRoute = () => {
  const u = site.url;

  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.tagline} ${site.description}`,
    "",
    "Unexplo is two things: (1) we collaborate with AI to build things worth making, and (2) we help people understand how to use AI to make everyday life better. We build products toward that goal; the first is the Unexplored newsletter.",
    "",
    "## Pages",
    `- [Home](${u}/): What Unexplo does — collaborating with AI to build, and helping people use AI in everyday life.`,
    `- [Roadmap](${u}/roadmap): What we're building and exploring as we work with AI.`,
    `- [Newsletter](${u}/newsletter): ${newsletter.name} — ${newsletter.tagline}`,
    "",
    "## What we're building",
    `- ${newsletter.name} (newsletter, in progress): ${newsletter.tagline} ${newsletter.description} Subscribe at ${u}/newsletter`,
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
