import Link from "next/link";
import { navs } from "@/app/(docs)/config";

// All sidebars are collected into a single array, and the ranges are tracked
let flatIndex: any[] = [];
let navRanges: { [navPath: string]: { start: number; end: number } } = {};

Object.entries(navs).forEach(([navPath, config]) => {
  const startIndex = flatIndex.length;
  
  const navEntries = Object.values(config.sidebar).flatMap(sidebarEntries => 
    sidebarEntries.flatMap((e) => [e, ...(Array.isArray(e[2]) ? e[2] : [])])
  );
  
  flatIndex.push(...navEntries);
  
  navRanges[navPath] = {
    start: startIndex,
    end: flatIndex.length - 1
  };
});

export default function Pagination({ slug }: { slug: string }) {
  let position = flatIndex.findIndex(([_, path]) => path === `/docs/${slug}`);
  if (position === -1) return null;

  // We determine which nav the current position belongs to
  let currentNavPath = Object.keys(navRanges).find(navPath => {
    const range = navRanges[navPath];
    return position >= range.start && position <= range.end;
  });

  if (!currentNavPath) return null;

  const currentRange = navRanges[currentNavPath];
  
  // Prev is only available if we are not at the beginning of the nav
  let prev = position > currentRange.start ? flatIndex[position - 1] : null;
  // Next is only available if we are not at the end of the nav
  let next = position < currentRange.end ? flatIndex[position + 1] : null;

  return (
    <footer className="mt-16 text-sm leading-6">
      <div className="flex items-center justify-between gap-2 text-gray-700 dark:text-gray-200">
        {prev ? (
          <Link className="group flex items-center gap-2 hover:text-gray-900 dark:hover:text-white" href={prev[1]}>
            <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
              <path
                fillRule="evenodd"
                d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>

            <span>{prev[0]}</span>
          </Link>
        ) : null}

        {next ? (
          <Link className="group flex items-center gap-2 hover:text-gray-900 dark:hover:text-white" href={next[1]}>
            <span>{next[0]}</span>
            <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
              <path
                fillRule="evenodd"
                d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        ) : null}
      </div>
    </footer>
  );
}