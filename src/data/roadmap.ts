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

// Honest snapshot of what we're actually building. Add new products/initiatives
// here (or wire up GitHub Projects via the env vars above) and the board updates.
export const roadmap: RoadmapItem[] = [
  {
    title: "Unexplored newsletter",
    status: "In progress",
    area: "Newsletter",
    note: "Plain-language notes on getting better with AI — for everyone.",
  },
];
