// Fallback roadmap data for the Kanban board.
//
// When GITHUB_TOKEN + GITHUB_ORG + GITHUB_PROJECT_NUMBER are set, the board is
// populated live from GitHub Projects v2 at build time (see src/lib/github-projects.ts).
// This file is the source of truth when those aren't configured, and also defines
// the canonical column order the live data is mapped onto.

export type RoadmapStatus = "Backlog" | "In progress" | "Shipped";

export type RoadmapItem = {
  title: string;
  status: RoadmapStatus;
  area?: string; // Labs project or program this belongs to
  note?: string;
};

// Order matters — this is the left-to-right column order on the board.
export const columns: RoadmapStatus[] = ["Backlog", "In progress", "Shipped"];

export const roadmap: RoadmapItem[] = [
  {
    title: "Xundoku public beta",
    status: "In progress",
    area: "Xundoku",
    note: "Spaced-repetition recall for finished books.",
  },
  {
    title: "Sigil memory layer for Claude",
    status: "In progress",
    area: "Sigil",
    note: "Org-wide persistent context across conversations.",
  },
  {
    title: "Scythe DAW integration prototype",
    status: "Backlog",
    area: "Scythe",
    note: "Co-creation inside existing production tools.",
  },
  {
    title: "Steamdoku agent framework",
    status: "Backlog",
    area: "Steamdoku",
    note: "Custom agents for PC gaming libraries.",
  },
  {
    title: "Intro to AI — first cohort (30 seats)",
    status: "In progress",
    area: "Academy",
    note: "Live class. Registration open.",
  },
  {
    title: "Unexplored newsletter",
    status: "Shipped",
    area: "Newsletter",
    note: "Weekly field notes from the AI frontier.",
  },
  {
    title: "StrideHive MCP server",
    status: "In progress",
    area: "Open source",
    note: "Wearable & motion data as Claude-callable tools.",
  },
  {
    title: "unexplo-plugins-official",
    status: "Shipped",
    area: "Open source",
    note: "Official Unexplo plugins, public on GitHub.",
  },
];
