import type { SidebarData } from "../../config";

const docsNav: SidebarData = {
  "Getting Started": [
    ["Installation", "/docs/tailwindcss/installation"],
    ["Significant differences", "/docs/tailwindcss/significant-differences-from-tailwindcss-v4"],
    ["What is spacing", "/docs/tailwindcss/what-is-spacing-from-tailwindcss-v4"],
    ["Themes", "/docs/tailwindcss/multiple-theme-management-tailwindcss-v4"],
  ] as const,
  "Configuration": [
    ["Core information", "/docs/tailwindcss/core-configuration"],
    ["Utilities", "/docs/tailwindcss/core-utilities"],
    ["Namespaces", "/docs/tailwindcss/core-namespaces"],
    ["User-defined utilities", "/docs/tailwindcss/user-defined-utilities"],
    ["User-defined namespaces", "/docs/tailwindcss/user-defined-namespaces"],
  ] as const,
  "v3 compatibility in v4": [
    ["JS-based config (legacy)", "/docs/tailwindcss/js-based-configuration"],
    ["Extending CSS-first config", "/docs/tailwindcss/extending-css-first-configuration"],
  ] as const,
  "Community": [
    ["Components", "/docs/tailwindcss/components"],
    ["Extra utilities", "/docs/tailwindcss/extra-utilities"],
    ["Extra namespaces", "/docs/tailwindcss/extra-namespaces"],
  ] as const,
};

export default docsNav;
