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
    "Unexplo's mission is a future where AI works with people, not against them — a positive ecosystem woven into the fabric of everyday life. We build approachable tools toward that goal; the first is the Unexplored newsletter.",
    "",
    "## Pages",
    `- [Home](${u}/): Unexplo's mission — building a future where AI works for everyone, woven into everyday life.`,
    `- [Newsletter](${u}/newsletter): ${newsletter.name} — ${newsletter.tagline}`,
    "",
    "## What we're building",
    `- ${newsletter.name} (newsletter, in progress): ${newsletter.tagline} ${newsletter.description} Subscribe at ${u}/newsletter`,
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
