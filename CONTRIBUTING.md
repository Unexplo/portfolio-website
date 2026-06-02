# Contributing to the Unexplo website

Thanks for your interest! This is the source for [unexplo.com](https://unexplo.com) — an Astro + Tailwind static site. Contributions to the **code** are welcome.

## Ground rules

- The **code** is MIT-licensed (see [LICENSE](./LICENSE)) — fork, reuse, and build on it freely.
- The **Unexplo name, logo, and written content/copy are not** covered by the MIT license. Please don't ship a site that passes itself off as Unexplo. If you fork it as a starter, swap the branding and content for your own (and update `public/CNAME`).

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

See the [README](./README.md) for environment variables and how the GitHub-Projects roadmap sync works.

## Making a change

1. Fork the repo and create a branch off `main` (`git checkout -b my-change`).
2. Make your change. Keep components small and match the existing style.
3. Run `npm run build` and confirm it passes.
4. Open a pull request describing **what** changed and **why**.

Merges to `main` deploy automatically to production via GitHub Actions, so PRs should always leave `main` in a buildable state.

## Good first contributions

- Accessibility and SEO improvements
- Performance tweaks
- Bug fixes in components or the roadmap sync
- Docs / README clarity

## Reporting issues

Open a GitHub issue with steps to reproduce, what you expected, and what happened. For anything security-sensitive, email **contact@unexplo.com** instead of filing a public issue.
