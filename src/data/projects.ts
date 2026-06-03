// The four Unexplo Labs projects — experiments and discovery.
// Copy mirrors the public product descriptions; edit freely.

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  domain: string;
  status: "Live" | "Beta" | "In development" | "Research";
  url?: string;
  accent: string; // tailwind color token used for the card glow
};

export const projects: Project[] = [
  {
    slug: "xundoku",
    name: "Xundoku",
    tagline: "Read more. Retain more.",
    description:
      "An AI-native reading platform built to help people finish more books and retain more of what they read.",
    domain: "Reading & retention",
    status: "Beta",
    accent: "coral",
  },
  {
    slug: "sigil",
    name: "Sigil",
    tagline: "Memory that compounds.",
    description:
      "A persistent memory layer that compounds with every Claude conversation — for individuals and the organizations they work in.",
    domain: "Knowledge & memory",
    status: "In development",
    accent: "indigo",
  },
  {
    slug: "scythe",
    name: "Scythe",
    tagline: "An AI co-creator for musicians.",
    description:
      "An AI co-creator for musicians, integrated into the production tools they already use.",
    domain: "Music & creativity",
    status: "Research",
    accent: "rose",
  },
  {
    slug: "steamdoku",
    name: "Steamdoku",
    tagline: "Extend your library with agents.",
    description:
      "A platform for extending PC gaming libraries with custom AI agents and tools.",
    domain: "Gaming",
    status: "Research",
    accent: "amber",
  },
];
