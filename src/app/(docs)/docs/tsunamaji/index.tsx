import type { SidebarData } from "../../config";

const docsNav: SidebarData = {
  "Getting Started": [
    ["What the hell is this?", "/docs/tsunamaji/project"],
    ["Plugins", "/docs/tsunamaji/plugins"],
  ] as const,
  "Community": [
    ["Discord", "/docs/tsunamaji/discord"],
  ] as const,
};

export default docsNav;
