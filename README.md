# unexplo.com

The Unexplo website — an AI lab and implementation studio. Built with [Astro](https://astro.build) + Tailwind CSS v4, optimized for SEO and LLM discovery.

> AI engineered for your business. Built and operated end-to-end.

## Sections

| Page | Path | What it does |
|------|------|--------------|
| **Home** | `/` | Hero, Labs preview, Academy callout, newsletter signup |
| **Labs** | `/labs` | The four experiments — Xundoku, Sigil, Scythe, Steamdoku — plus our ethos |
| **Academy** | `/academy` | *Intro to AI* — a live 30-seat cohort with embedded registration |
| **Newsletter** | `/newsletter` | *Unexplored* — weekly field notes; signup form |
| **Roadmap** | `/roadmap` | Kanban board synced from GitHub Projects (falls back to local data) |
| **Contact** | `/contact` | Email + social profiles |

## SEO & Claude / LLM layer

- **`/llms.txt`** — curated, [llmstxt.org](https://llmstxt.org)-format map of the site (generated from site data).
- **`/llms-full.txt`** — full self-contained context in one document for LLMs.
- **`/robots.txt`** — explicitly welcomes `ClaudeBot`, `anthropic-ai`, `GPTBot`, `PerplexityBot`; points to the sitemap.
- **`/sitemap-index.xml`** — auto-generated via `@astrojs/sitemap`.
- Per-page canonical URLs, Open Graph + Twitter cards, and **JSON-LD structured data** (`Organization`, `WebSite`, `Course`, `ItemList`, `ContactPage`, `Periodical`).
- `og.png` (1200×630) is generated at build time from `scripts/generate-og.mjs`.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/  (runs prebuild OG generation)
npm run preview  # serve the production build locally
```

## Configuration

Copy `.env.example` → `.env`. **Everything is optional** — the site builds and runs without any of it, using local fallbacks and placeholder embeds.

| Variable | Purpose |
|----------|---------|
| `SITE_URL` | Canonical origin for SEO/sitemap (default `https://unexplo.com`) |
| `GITHUB_TOKEN` | Token with `read:project` — enables the live Kanban. Build-time only, never shipped to the client |
| `GITHUB_ORG` | Org login owning the project board (default `Unexplo`) |
| `GITHUB_PROJECT_NUMBER` | The Projects v2 number from its URL (`/orgs/Unexplo/projects/N` → `N`) |
| `PUBLIC_NEWSLETTER_ACTION` | Newsletter provider form action (Buttondown / ConvertKit / Substack…) |
| `PUBLIC_ACADEMY_FORM_URL` | Embeddable registration form (Tally / Google Forms / Luma) |

### Roadmap (GitHub Projects)

The `/roadmap` Kanban pulls items from a GitHub Projects v2 board at build time and maps each item's **Status** field onto `Backlog` / `In progress` / `Shipped`. Without a token (or on any API error) it renders `src/data/roadmap.ts` instead and labels the board a "Roadmap snapshot." Rebuild to refresh.

## Content

All copy lives in plain data files — no CMS needed:

- `src/data/site.ts` — name, nav, socials, newsletter & academy config
- `src/data/projects.ts` — the four Labs projects
- `src/data/roadmap.ts` — fallback Kanban items + column order

## Deploy

Static output — host anywhere. For **Vercel / Netlify / Cloudflare Pages**: build command `npm run build`, output directory `dist`. Set the env vars above in the host's dashboard (mark `GITHUB_TOKEN` secret). Set up a periodic redeploy (or a deploy hook) if you want the roadmap to refresh on a schedule.

---

Made with Claude.
