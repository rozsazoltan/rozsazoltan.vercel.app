type DocEntry = readonly [string, string];
type DocSubEntry = readonly [string, string];
type DocGroupEntry = readonly [string, string, readonly DocSubEntry[]];

type DocSection = readonly (DocEntry | DocGroupEntry)[];

type DocsNavigation = {
  [section: string]: DocSection;
};

const docsNav: DocsNavigation = {
  "Open Knowledge, Open Future": [
    ["Getting Started", "/docs/getting-started"],
    ["About Me", "/docs/about-me"],
  ] as const,
};

export default docsNav;
