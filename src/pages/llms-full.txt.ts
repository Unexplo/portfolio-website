import type { APIRoute } from "astro";
import { site, newsletter } from "@/data/site";

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
    "Unexplo is two things. First, we collaborate with AI to build things worth making — products, tools, and experiments. Second, we help people understand how to use AI to make everyday life better, cutting past the hype. We build products toward that goal and share our roadmap openly.",
    "",
    "## What we're building",
    "",
    "Our roadmap of products and initiatives. The first is the Unexplored newsletter; more to come.",
    "",
    "## Unexplored — the newsletter",
    "",
    `${newsletter.name}: ${newsletter.tagline} ${newsletter.description}`,
    `Subscribe at ${u}/`,
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
