import { type Guide, loadGuides } from "@/app/(docs)/docs/tailwindcss/installation/plugin-guides";
import { Cta } from "@/components/cta";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plugin guides",
  description:
    "Plugin-specific guides that explain the correct usage of the official Tailwind CSS plugins.",
  openGraph: {
    type: "article",
    title: "Plugin guides",
    description: "A guide to the different plugins, explaining their purpose.",
    images: "https://tailwindcss.com/api/og?path=/docs/tailwindcss/installation/plugin-guides",
    url: "https://tailwindcss.com/docs/tailwindcss/installation/plugin-guides",
  },
};

export default async function FrameworkGuides() {
  let guides = await loadGuides();

  return (
    <>
      <div id="content-wrapper" className="prose mb-10 max-w-3xl" data-content="true">
        <h3 className="sr-only" data-title="true">
          Framework Guides
        </h3>
        <p>
          Plugin-specific guides that explain the correct usage of the official Tailwind CSS plugins. Usually, you only need one plugin from the available options. The <a href="/docs/tailwindcss/installation/framework-guides">framework-specific guides</a> primarily use Tailwind CSS based on one of the plugins described here. Which plugin works seamlessly depends on the framework.
        </p>
      </div>
      <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
        {guides.map((guide, idx) => (
          <GuideTile key={idx} guide={guide} />
        ))}
      </ul>
      <div className="my-4 md:my-16">
        <Cta>
          Not sure which plugin to use? Check the <Link href="/docs/tailwindcss/installation/framework-guides">framework guides</Link> to see which one would work best for you and how to set it up.
        </Cta>
      </div>
    </>
  );
}

function GuideTile({ guide }: { guide: Guide }) {
  const { Logo, LogoDark } = guide.tile;

  return (
    <li className="relative flex flex-row-reverse">
      <div className="peer group ml-6 flex-auto">
        <h4 className="mb-2 leading-6 font-semibold text-slate-900 dark:text-slate-200">
          <Link
            href={
              guide.tabs
                ? `/docs/tailwindcss/installation/plugin-guides/${guide.slug}/${guide.tabs[0].slug}`
                : `/docs/tailwindcss/installation/plugin-guides/${guide.slug}`
            }
            className="before:absolute before:-inset-3 before:rounded-2xl"
          >
            {guide.tile.title}
            <svg
              viewBox="0 0 3 6"
              className="-mt-px ml-3 inline h-1.5 w-auto overflow-visible text-slate-400 opacity-0 group-focus-within:opacity-100 group-hover:opacity-100"
            >
              <path
                d="M0 0L3 3L0 6"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </h4>
        <p className="text-sm leading-6 text-slate-700 dark:text-slate-400">{guide.tile.description}</p>
      </div>
      <div className="dark:highlight-white/5 flex h-14 w-14 flex-none items-center justify-center overflow-hidden rounded-full bg-white shadow ring-1 ring-slate-900/5 dark:bg-slate-800">
        {LogoDark ? (
          <>
            <Logo className="block dark:hidden" />
            <LogoDark className="hidden dark:block" />
          </>
        ) : (
          <Logo className="block" />
        )}
      </div>
      <div className="absolute -inset-3 -z-10 rounded-2xl bg-slate-50 opacity-0 peer-hover:opacity-100 dark:bg-slate-800/50" />
    </li>
  );
}