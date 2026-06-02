import type { APIRoute } from "astro";
import { site } from "@/data/site";

// Generated at build time so the sitemap/host stay in sync with SITE_URL.
export const GET: APIRoute = () => {
  const origin = site.url;
  const body = [
    "# unexplo.com",
    "User-agent: *",
    "Allow: /",
    "",
    "# AI crawlers are welcome — see /llms.txt for a curated map.",
    "User-agent: GPTBot",
    "Allow: /",
    "User-agent: ClaudeBot",
    "Allow: /",
    "User-agent: anthropic-ai",
    "Allow: /",
    "User-agent: PerplexityBot",
    "Allow: /",
    "",
    `Sitemap: ${origin}/sitemap-index.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
