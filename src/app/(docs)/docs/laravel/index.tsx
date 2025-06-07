type DocEntry = readonly [string, string];
type DocSubEntry = readonly [string, string];
type DocGroupEntry = readonly [string, string, readonly DocSubEntry[]];

type DocSection = readonly (DocEntry | DocGroupEntry)[];

type DocsNavigation = {
  [section: string]: DocSection;
};

const docsNav: DocsNavigation = {
  "Getting Started": [
    ["Installation", "/docs/laravel/installation"],
  ] as const,
};

export default docsNav;
