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
    "Unexplo collaborates and works with AI to help anyone understand it and put it to use — no jargon, no hype, just getting better together. We build a few products toward that goal; the first is the Unexplored newsletter.",
    "",
    "## Pages",
    `- [Home](${u}/): About Unexplo, our roadmap of what we're building, and the ${newsletter.name} newsletter.`,
    "",
    "## What we're building",
    `- ${newsletter.name} (newsletter, in progress): ${newsletter.tagline} ${newsletter.description} Subscribe at ${u}/`,
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
