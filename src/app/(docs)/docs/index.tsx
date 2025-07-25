import type { SidebarData } from "../config";

const docsNav: SidebarData = {
  "Open Knowledge, Open Future": [
    ["Getting Started", "/docs/getting-started"],
    ["About Me", "/docs/about-me"],
  ] as const,
};

export default docsNav;
