import type { SidebarData } from "../../config";

const docsNav: SidebarData = {
  "Getting Started": [
    ["Installation", "/docs/tailwindcss/installation"],
    ["Upgrade guide", "/docs/tailwindcss/upgrade-guide"],
  ] as const,
};

export default docsNav;
