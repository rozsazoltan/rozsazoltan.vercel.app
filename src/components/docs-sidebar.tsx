"use client";

import { NavList, NavListHeading, NavListItem, NavListItems } from "@/components/nav-list";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { DocsSidebarLink } from "./docs-sidebar-link";

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

const navConfig: Record<
  string,
  {
    label: string;
    importModule: () => Promise<any>;
    icon: React.ReactNode;
  }
> = {
  "/docs": {
    label: "Documentation",
    importModule: () => import("../app/(docs)/docs/index"),
    icon: (
      <svg viewBox="0 0 16 16" fill="none">
        <path
          data-highlight
          d="M3.5 1.5C2.4264 1.5 1.40926 1.74169 0.5 2.17363V13.1736C1.40926 12.7417 2.4264 12.5 3.5 12.5C5.21352 12.5 6.78323 13.1157 8 14.1379V3.13789C6.78323 2.11568 5.21352 1.5 3.5 1.5Z"
        />
        <path
          data-outline
          d="M8 14.1379C9.21677 13.1157 10.7865 12.5 12.5 12.5C13.5736 12.5 14.5907 12.7417 15.5 13.1736V2.17363C14.5907 1.74169 13.5736 1.5 12.5 1.5C10.7865 1.5 9.21677 2.11568 8 3.13789M8 14.1379C6.78323 13.1157 5.21352 12.5 3.5 12.5C2.4264 12.5 1.40926 12.7417 0.5 13.1736V2.17363C1.40926 1.74169 2.4264 1.5 3.5 1.5C5.21352 1.5 6.78323 2.11568 8 3.13789M8 14.1379V3.13789"
        />
      </svg>
    ),
  },
  "/docs/tailwindcss": {
    label: "Tailwind CSS",
    importModule: () => import("../app/(docs)/docs/tailwindcss/index"),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33">
        <g clipPath="url(#prefix__clip0)">
          <path
            fill="#38bdf8"
            fillRule="evenodd"
            d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
            clipRule="evenodd"
          />
        </g>
      </svg>
    ),
  },
};

function TopNav() {
  const pathname = usePathname();

  const sortedPaths = Object.keys(navConfig).sort((a, b) => b.length - a.length);
  const activePath = sortedPaths.find((path) => pathname.startsWith(path)) || null;

  return (
    <ul className="flex flex-col gap-2">
      {Object.keys(navConfig).map((path) => {
        const { label, icon } = navConfig[path];
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

type SidebarEntry = [title: string, path: string, children?: SidebarEntry[]];
type SidebarData = Record<string, SidebarEntry[]>;

export function DocsSidebar() {
  const pathname = usePathname();
  const [data, setData] = useState<SidebarData | null>(null);

  useEffect(() => {
    if (!pathname) return;

    const sortedPaths = Object.keys(navConfig).sort((a, b) => b.length - a.length);

    for (const path of sortedPaths) {
      if (pathname.startsWith(path)) {
        navConfig[path].importModule().then((mod) => {
          setData(mod.default || mod);
        });
        return;
      }
    }

    // Default fallback
    navConfig["/docs"].importModule().then((mod) => {
      setData(mod.default || mod);
    });
  }, [pathname]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <nav className="flex flex-col gap-8">
      <TopNav />
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
