// Build-time sync of the Kanban board from GitHub Projects v2.
//
// If GITHUB_TOKEN / GITHUB_ORG / GITHUB_PROJECT_NUMBER are present we query the
// GraphQL API and map items onto our canonical columns. On any failure (no token,
// network error, empty project) we fall back to src/data/roadmap.ts so the build
// never breaks. This runs only during `astro build` / `astro dev`; the token is
// never exposed to the browser.

import {
  roadmap as fallbackRoadmap,
  columns,
  type RoadmapItem,
  type RoadmapStatus,
} from "@/data/roadmap";

const GITHUB_API = "https://api.github.com/graphql";

// Map free-form GitHub "Status" field values onto our three columns.
function normalizeStatus(raw: string | undefined): RoadmapStatus {
  const v = (raw ?? "").trim().toLowerCase();
  if (["done", "shipped", "complete", "completed", "released"].includes(v)) {
    return "Shipped";
  }
  if (
    ["in progress", "in-progress", "doing", "active", "started", "wip"].includes(v)
  ) {
    return "In progress";
  }
  return "Backlog";
}

type ProjectV2Response = {
  data?: {
    organization?: {
      projectV2?: {
        title?: string;
        items?: {
          nodes?: Array<{
            content?: { title?: string } | null;
            fieldValues?: {
              nodes?: Array<{
                name?: string;
                field?: { name?: string };
              }>;
            };
          }>;
        };
      } | null;
    } | null;
  };
  errors?: Array<{ message: string }>;
};

const QUERY = `
query($org: String!, $number: Int!) {
  organization(login: $org) {
    projectV2(number: $number) {
      title
      items(first: 100) {
        nodes {
          content {
            ... on Issue { title }
            ... on PullRequest { title }
            ... on DraftIssue { title }
          }
          fieldValues(first: 20) {
            nodes {
              ... on ProjectV2ItemFieldSingleSelectValue {
                name
                field { ... on ProjectV2SingleSelectField { name } }
              }
              ... on ProjectV2ItemFieldTextValue {
                text
                field { ... on ProjectV2FieldCommon { name } }
              }
            }
          }
        }
      }
    }
  }
}`;

export type RoadmapResult = {
  items: RoadmapItem[];
  columns: RoadmapStatus[];
  source: "github" | "local";
  projectTitle?: string;
};

export async function getRoadmap(): Promise<RoadmapResult> {
  // ROADMAP_TOKEN / PROJECT_NUMBER are CI-friendly aliases (repo secrets and
  // variables can't be named with the reserved GITHUB_ prefix).
  const token = process.env.GITHUB_TOKEN || process.env.ROADMAP_TOKEN;
  const org = process.env.GITHUB_ORG || "Unexplo";
  const number = Number(
    process.env.GITHUB_PROJECT_NUMBER || process.env.PROJECT_NUMBER,
  );

  if (!token || !org || !Number.isFinite(number) || number <= 0) {
    return { items: fallbackRoadmap, columns, source: "local" };
  }

  try {
    const res = await fetch(GITHUB_API, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "unexplo-website",
      },
      body: JSON.stringify({ query: QUERY, variables: { org, number } }),
    });

    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const json = (await res.json()) as ProjectV2Response;
    if (json.errors?.length) throw new Error(json.errors[0].message);

    const project = json.data?.organization?.projectV2;
    const nodes = project?.items?.nodes ?? [];

    const items: RoadmapItem[] = nodes
      .map((node): RoadmapItem | null => {
        const title = node.content?.title?.trim();
        if (!title) return null;
        const fields = node.fieldValues?.nodes ?? [];
        const statusField = fields.find(
          (f) => f.field?.name?.toLowerCase() === "status",
        );
        return { title, status: normalizeStatus(statusField?.name) };
      })
      .filter((x): x is RoadmapItem => x !== null);

    if (items.length === 0) {
      return { items: fallbackRoadmap, columns, source: "local" };
    }

    return {
      items,
      columns,
      source: "github",
      projectTitle: project?.title,
    };
  } catch (err) {
    // Never fail the build on a roadmap sync issue.
    console.warn(
      `[roadmap] GitHub Projects sync failed, using local data: ${
        err instanceof Error ? err.message : String(err)
      }`,
    );
    return { items: fallbackRoadmap, columns, source: "local" };
  }
}
