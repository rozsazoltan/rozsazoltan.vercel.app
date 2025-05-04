type DocEntry = readonly [string, string];
type DocSubEntry = readonly [string, string];
type DocGroupEntry = readonly [string, string, readonly DocSubEntry[]];

type DocSection = readonly (DocEntry | DocGroupEntry)[];

type DocsNavigation = {
  [section: string]: DocSection;
};

const docsNav: DocsNavigation = {
  Docs: [
    ["Coming Soon", "/docs/coming-soon"],
  ] as const,
};

export default docsNav;
