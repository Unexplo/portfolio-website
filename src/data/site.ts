// Central site configuration. Edit here — everything else reads from this.

export const site = {
  name: "Unexplo",
  // Used in <title> templates and structured data.
  legalName: "Unexplo",
  domain: "unexplo.com",
  url: "https://unexplo.com",
  tagline: "Let's get better with AI, together.",
  description:
    "Unexplo collaborates and works with AI to help anyone understand it and put it to use. Don't be scared of AI — learn it, use it, and grow with us. Start with the Unexplored newsletter.",
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
// Empty for now — it's a single newsletter page. Add entries here as pages ship
// and the header/footer will pick them up automatically.
export const nav = [] as const;

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
