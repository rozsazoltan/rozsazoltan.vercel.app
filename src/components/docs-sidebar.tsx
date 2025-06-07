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
  "/docs/laravel": {
    label: "Laravel",
    importModule: () => import("../app/(docs)/docs/laravel/index"),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="170 170 1560 1560" fill="#ff2d20" stroke="10">
        <path d="M791.5 1714L215 1381.5c-8.5-5.5-15-8.5-15-19.5V357.5c0-8.158 5-13.5 9.5-16L502 173c9.5-5.5 17.5-5.5 26.5 0L819 340c11.5 6.5 12 15 12 22.5v622L1073.5 845V527c0-11 5-17.5 17-24.5L1380 336c7-4 12.5-4 19.5 0l295 170c9.5 5.5 10.5 12 10.5 21.5V858c0 10.5-2.5 16-13 22.5l-278.5 160v317c0 12.5-3 17.5-14 24L821 1714c-11 6-18.5 6-29.5 0zm-9-61.5v-279l-276-156c-9-5.5-15.5-9.5-15.5-23V543L248 403.5V1345zm583-307.5v-277L831 1373.5v279zm-25.528-318.167L1098 886.5 565 1194l241 137zM782.5 1012V403L540 543v609zm583-28V708l-243-140v277zm291-139V568l-243 140v276zm-267-179.5l242-139.5-242-139.5L1147 526zM757.635 361.004L515 221.5 273 361l242 140z"/>
      </svg>
    ),
  },
  "/docs/vuejs": {
    label: "Vue.js",
    importModule: () => import("../app/(docs)/docs/vuejs/index"),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196.32 170.02">
        <path fill="#42b883" d="M120.83 0L98.16 39.26 75.49 0H0l98.16 170.02L196.32 0h-75.49z"/>
        <path fill="#35495e" d="M120.83 0L98.16 39.26 75.49 0H39.26l58.9 102.01L157.06 0h-36.23z"/>
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
