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
    "Unexplo's mission is a future where AI works with people, not against them — a positive ecosystem woven into the fabric of everyday life. AI is for everyone, not just experts or the few; it should amplify what people do rather than replace them. We cut past the hype and build approachable tools that offer real help in everyday life.",
    "",
    "## What we're building",
    "",
    "Approachable products that put AI to work in everyday life. The first is the Unexplored newsletter; more to come.",
    "",
    "## Unexplored — the newsletter",
    "",
    `${newsletter.name}: ${newsletter.tagline} ${newsletter.description}`,
    `Subscribe at ${u}/`,
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
