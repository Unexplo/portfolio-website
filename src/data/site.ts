// Central site configuration. Edit here — everything else reads from this.

export const site = {
  name: "Unexplo",
  // Used in <title> templates and structured data.
  legalName: "Unexplo",
  domain: "unexplo.com",
  url: "https://unexplo.com",
  tagline: "We work with AI. So you can too.",
  description:
    "Unexplo is two things: we collaborate with AI to build things worth making, and we help people understand how to use AI to make everyday life better.",
  email: "contact@unexplo.com",
  // Default Open Graph image (1200x630). Generated at /og.svg -> render to PNG if desired.
  ogImage: "/og.png",
  locale: "en_US",
} as const;

export const socials = [
  {
    label: "X",
    handle: "@unexplo2k",
    url: "https://x.com/unexplo2k",
    icon: "x",
  },
] as const;

// Primary navigation. `external` links open in a new tab.
// Add entries here as pages ship; the header picks them up automatically.
export const nav = [
  { label: "Home", href: "/" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Newsletter", href: "/newsletter" },
] as const;

export const newsletter = {
  name: "Unexplored",
  tagline: "Get better with AI, one email at a time.",
  description:
    "Plain-language notes on what AI can do, how to actually use it, and what's worth paying attention to — for everyone, no jargon, no hype.",
  // Falls back to a mailto if no provider action is configured.
  action: import.meta.env.PUBLIC_NEWSLETTER_ACTION ?? "",
} as const;

export const academy = {
  course: "Intro to AI",
  capacity: 30,
  format: "Live cohort class",
  tagline: "A hands-on, plain-language introduction to building with modern AI.",
  formUrl: import.meta.env.PUBLIC_ACADEMY_FORM_URL ?? "",
} as const;
