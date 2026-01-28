"use client";

import { usePathname } from "next/navigation";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/16/solid";

export interface VersionPickerProps {
  mapKey?: string;
  label?: string;
  force?: string;
  disabled?: boolean;
}

interface Version {
  name: string;
  url: string;
  latest?: boolean;
  disabled?: boolean;
  tooltip?: string;
}

interface VersionMap {
  [key: string]: Version[];
}

const versionMap: VersionMap = {
  "/docs/php": [],
  "/docs/laravel": [
    { name: "v13.0", url: "/docs/laravel/v13/", disabled: true, tooltip: "Comming soon — Q1 2026" },
    { name: "v12.0", url: "/docs/laravel/v12/", latest: true },
    { name: "v11.0", url: "/docs/laravel/v11/", disabled: true, tooltip: "Legacy version — no docs planned" },
    { name: "v10.0", url: "/docs/laravel/v10/", disabled: true, tooltip: "Legacy version — no docs planned" },
    { name: "v9.0", url: "/docs/laravel/v9/", disabled: true, tooltip: "Legacy version — no docs planned" },
    { name: "v8.0", url: "/docs/laravel/v8/", disabled: true, tooltip: "Legacy version — no docs planned" },
    { name: "v7.0", url: "/docs/laravel/v7/", disabled: true, tooltip: "Legacy version — no docs planned" },
    { name: "v6.0", url: "/docs/laravel/v6/", disabled: true, tooltip: "Legacy version — no docs planned" },
    { name: "v5.6", url: "/docs/laravel/v5/", disabled: true, tooltip: "Legacy version — no docs planned" },
  ],
  "/docs/vuejs": [
    { name: "v3.0", url: "/docs/vuejs/v3/", latest: true },
    { name: "v2.0", url: "/docs/vuejs/v2/", disabled: true, tooltip: "Legacy version — no docs planned" },
    { name: "v1.0", url: "/docs/vuejs/v1/", disabled: true, tooltip: "Legacy version — no docs planned" },
  ],
  "/docs/tailwindcss": [
    { name: "v4.1", url: "/docs/tailwindcss/v4/", latest: true },
    { name: "v3.4.17", url: "/docs/tailwindcss/v3/", disabled: false, tooltip: "" },
    { name: "v2.2.19", url: "/docs/tailwindcss/v2/", disabled: true, tooltip: "Legacy version — no docs planned" },
    { name: "v1.9.6", url: "/docs/tailwindcss/v1/", disabled: true, tooltip: "Legacy version — no docs planned" },
    { name: "v0.7.4", url: "/docs/tailwindcss/v0/", disabled: true, tooltip: "Legacy version — no docs planned" },
  ],
  "/docs/tsunamaji": [
    { name: "v2.0", url: "/docs/tsunamaji/v2/", disabled: true, tooltip: "Comming soon — Q1 2027" },
    { name: "v1.0", url: "/docs/tsunamaji/v1/", latest: true },
  ],
};

// Helper function: removes the trailing '/' except for the root '/'
const normalizePath = (path: string) =>
  path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;

export default function VersionPicker({
  mapKey,
  label,
  force,
  disabled,
}: VersionPickerProps) {
  const pathname = normalizePath(usePathname());

  // Determine which version array to use
  const matchingKey = mapKey
    ? mapKey
    : Object.keys(versionMap).find(
        (key) => pathname === normalizePath(key) || pathname.startsWith(`${normalizePath(key)}/`)
      );

  const versions = matchingKey ? versionMap[matchingKey] : [];
  if (!versions.length) return null;

  const sortedVersions = [...versions].sort(
    (a, b) => normalizePath(b.url).length - normalizePath(a.url).length
  );

  // Determine selected version
  let selectedVersion;
  if (force) {
    selectedVersion = sortedVersions.find((v) => v.name === force || v.url === force)
  }
  selectedVersion = selectedVersion ||
    sortedVersions.find((v) => pathname === normalizePath(v.url) || pathname.startsWith(`${normalizePath(v.url)}/`)) ||
    sortedVersions.find((v) => v.latest) ||
    sortedVersions.find((v) => !(v.disabled || false)) ||
    sortedVersions[0]

  if (disabled) {
    // Static display, no dropdown
    return (
      <div className="flex items-center gap-0.5 rounded-2xl bg-gray-950/5 py-0.5 px-2.5 text-xs/5 font-medium text-gray-950 tabular-nums hover:bg-gray-950/7.5 data-active:bg-gray-950/7.5 dark:bg-white/10 dark:text-white dark:hover:bg-white/12.5 dark:data-active:bg-white/12.5">
        {label && <span className="mr-1 font-semibold">{label}</span>}
        {selectedVersion.name}
      </div>
    );
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton
        className="flex items-center gap-0.5 rounded-2xl bg-gray-950/5 py-0.5 pr-1.5 pl-2.5 text-xs/5 font-medium text-gray-950 tabular-nums hover:bg-gray-950/7.5 data-active:bg-gray-950/7.5 dark:bg-white/10 dark:text-white dark:hover:bg-white/12.5 dark:data-active:bg-white/12.5"
        aria-label="Select version of library"
      >
        {label && <span className="mr-1 font-semibold">{label}</span>}
        {selectedVersion.name}
        <ChevronDownIcon className="w-4 h-4 fill-gray-400" />
      </MenuButton>

      <MenuItems className="absolute mt-2 w-36 rounded-xl bg-white p-1 py-1 text-xs/7 font-medium text-gray-950 tabular-nums shadow-sm ring ring-gray-950/5 dark:bg-gray-950 dark:text-white dark:ring-white/10">
        {versions.map((version) => (
          <MenuItem key={version.name} as="div" disabled={version.disabled}>
            {({ disabled }) =>
              version.name === selectedVersion.name ? (
                <div
                  className="flex items-center justify-between gap-2 rounded-lg px-2.5 bg-gray-950/5 dark:bg-white/10"
                  title={version.tooltip}
                >
                  {version.name}
                  <CheckIcon className="w-4 h-4" />
                </div>
              ) : (
                <a
                  href={disabled ? undefined : version.url}
                  className={`
                    flex items-center justify-between gap-2 rounded-lg px-2.5
                    ${disabled ? "cursor-not-allowed opacity-50" : "data-[headlessui-state~='active']:bg-gray-950/5 dark:data-[headlessui-state~='active']:bg-white/10"}
                  `}
                  title={version.tooltip}
                >
                  {version.name}
                </a>
              )
            }
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
