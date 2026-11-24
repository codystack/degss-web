// Icons an admin can assign to homepage cards. The value is stored in site
// content, so never rename an existing value. Components: contentIcons.tsx.
export const CONTENT_ICON_OPTIONS = [
  { value: "target", label: "Target" },
  { value: "horizon", label: "Horizon" },
  { value: "compass", label: "Compass" },
  { value: "branch", label: "Branches" },
  { value: "people", label: "People" },
  { value: "shield", label: "Shield" },
  { value: "star", label: "Star" },
  { value: "refresh", label: "Refresh" },
  { value: "heart", label: "Heart" },
  { value: "scale", label: "Scales" },
  { value: "group", label: "Group" },
] as const;

export type ContentIconKey = (typeof CONTENT_ICON_OPTIONS)[number]["value"];
