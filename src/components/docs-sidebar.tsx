"use client";

import { NavList, NavListHeading, NavListItem, NavListItems } from "@/components/nav-list";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { DocsSidebarLink } from "./docs-sidebar-link";
import type { DocsNavs, SidebarData } from "@/app/(docs)/config";

export function TopNavLink(props: { href: string } & React.ComponentPropsWithoutRef<"a">) {
  const Component = props.href.startsWith("/plus") ? "a" : Link;

  return (
    <Component
      className={clsx(
        "group inline-flex items-center gap-3 text-base/8 text-gray-600 sm:text-sm/7 dark:text-gray-300",
        "**:data-outline:stroke-gray-400 dark:**:data-outline:stroke-gray-500",
        "**:[svg]:first:size-5 **:[svg]:first:sm:size-4",
        "hover:text-gray-950 hover:**:data-highlight:fill-gray-300 hover:**:data-outline:stroke-gray-950",
        "dark:hover:text-white dark:hover:**:data-highlight:fill-gray-600 dark:hover:**:data-outline:stroke-white",
        "aria-[current]:font-semibold aria-[current]:text-gray-950 aria-[current]:**:data-highlight:fill-gray-300 aria-[current]:**:data-outline:stroke-gray-950",
        "dark:aria-[current]:text-white dark:aria-[current]:**:data-highlight:fill-gray-600 dark:aria-[current]:**:data-outline:stroke-white"
      )}
      {...props}
    />
  );
}

function TopNav(props: { navs: DocsNavs }) {
  const pathname = usePathname();

  const sortedPaths = Object.keys(props.navs).sort((a, b) => b.length - a.length);
  const activePath = sortedPaths.find((path) => pathname.startsWith(path)) || null;

  return (
    <ul className="flex flex-col gap-2">
      {Object.keys(props.navs).map((path) => {
        const { label, icon } = props.navs[path];
        return (
          <li key={path} className="[&:not(:hover):not(:has([aria-current]))]:grayscale-50">
            <TopNavLink href={path} aria-current={activePath === path ? "page" : undefined}>
              {icon}
              {label}
            </TopNavLink>
          </li>
        );
      })}
    </ul>
  );
}

export function DocsSidebar(props: { navs: DocsNavs }) {
  const pathname = usePathname();
  const [data, setData] = useState<SidebarData | null>(null);

  useEffect(() => {
    if (!pathname) return;

    const sortedPaths = Object.keys(props.navs).sort((a, b) => b.length - a.length);

    for (const path of sortedPaths) {
      if (pathname.startsWith(path)) {
        setData(props.navs[path].sidebar);
        return;
      }
    }

    // Default fallback
    setData(props.navs["/docs"].sidebar)
  }, [pathname]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <nav className="flex flex-col gap-8">
      <TopNav navs={props.navs} />
      {Object.entries(data).map(([category, entries]) => (
        <NavList key={category} data-autoscroll>
          <NavListHeading>{category}</NavListHeading>
          <NavListItems>
            {entries.map(([title, path, children]) => (
              <NavListItem key={path}>
                <DocsSidebarLink title={title} path={path} />
                {children && children.length > 0 && (
                  <NavListItems nested>
                    {children.map(([title, path]) => (
                      <NavListItem key={path}>
                        <DocsSidebarLink title={title} path={path} nested />
                      </NavListItem>
                    ))}
                  </NavListItems>
                )}
              </NavListItem>
            ))}
          </NavListItems>
        </NavList>
      ))}
    </nav>
  );
}
