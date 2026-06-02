// Central site configuration. Edit here — everything else reads from this.

export const site = {
  name: "Unexplo",
  // Used in <title> templates and structured data.
  legalName: "Unexplo",
  domain: "unexplo.com",
  url: "https://unexplo.com",
  tagline: "AI engineered for your business. Built and operated end-to-end.",
  description:
    "Unexplo is an AI lab and implementation studio. We run Labs (experiments and discovery), teach an Intro to AI through Unexplo Academy, publish the Unexplored newsletter, and build practical AI tools in the open.",
  email: "contact@unexplo.com",
  // Default Open Graph image (1200x630). Generated at /og.svg -> render to PNG if desired.
  ogImage: "/og.png",
  locale: "en_US",
} as const;

export const socials = [
  {
    label: "GitHub",
    handle: "@Unexplo",
    url: "https://github.com/Unexplo",
    icon: "github",
  },
  {
    label: "X",
    handle: "@unexplo",
    url: "https://x.com/unexplo",
    icon: "x",
  },
] as const;

// Primary navigation. `external` links open in a new tab.
export const nav = [
  { label: "Labs", href: "/labs" },
  { label: "Academy", href: "/academy" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Contact", href: "/contact" },
] as const;

export const newsletter = {
  name: "Unexplored",
  tagline: "Weekly field notes from the AI frontier.",
  description:
    "What's working in business AI, what's emerging, and the unknowns worth watching. One email a week. No noise.",
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
