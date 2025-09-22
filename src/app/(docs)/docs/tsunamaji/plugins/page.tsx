import { type Guide, loadGuides } from "@/app/(docs)/docs/tsunamaji/plugins";
import { Cta } from "@/components/cta";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plugin guides",
  description:
    "RAW HTML source injection, baseline-based utility packs, classname grouping, and much more.",
  openGraph: {
    type: "article",
    title: "Plugin guides",
    description: "A guide to the different Tusnamaji plugins, explaining their purpose.",
    images: "https://rozsazoltan.vercel.app/api/og?path=/docs/tsunamaji/plugins",
    url: "https://rozsazoltan.vercel.app/docs/tsunamaji/plugins",
  },
};

export default async function FrameworkGuides() {
  let guides = await loadGuides();

  return (
    <>
      {/* Add a placeholder div so the Next.js router can find the scrollable element. */}
      <div hidden />

      <div className="isolate mx-auto grid w-full max-w-2xl grid-cols-1 gap-10 pt-10 md:pb-24 xl:max-w-5xl">
        <div className="px-4 sm:px-6">
          <p
            data-section="true"
            className="font-mono text-xs/6 font-medium tracking-widest text-gray-600 uppercase dark:text-gray-400"
          >
            Plugins
          </p>
          <h1 className="mt-2 text-3xl font-medium tracking-tight text-gray-950 dark:text-white">
            Turbocharge Tailwind CSS with Tsunamaji
          </h1>
          <p data-description="true" className="mt-6 text-base/7 text-gray-700 dark:text-gray-300">
            Boost your Tailwind CSS projects with Tsunamaji's leading plugin suite, crafted to extend utilities, optimize builds, and keep your codebase clean and scalable.
          </p>
          <p className="mt-4 text-base/7 text-gray-700 dark:text-gray-300">
            Ship spells. Surf code. RAW HTML source injection, baseline-based utility packs, classname grouping, and much more.
          </p>

          <div className="mt-10" data-content="true">
            <section className="relative mb-16">
              <div className="relative z-10">
                <h2
                  data-docsearch-ignore
                  className="mb-6 text-lg font-semibold tracking-tight text-gray-950 dark:text-white"
                >
                  Plugins
                </h2>
              </div>

              {/* Page in Layout */}
              <div id="content-wrapper" className="prose mb-10 max-w-3xl" data-content="true">
                <h3 className="sr-only" data-title="true">
                  Plugins
                </h3>
                <p>
                  Discover the ultimate Tsunamaji plugin set for Tailwind CSS v4. Each plugin is crafted for a specific purpose—explore, pick what you need, and ship faster. No extra dependencies, just pure Tailwind power.
                </p>
              </div>
              <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
                {guides.map((guide, idx) => (
                  <GuideTile key={idx} guide={guide} />
                ))}
              </ul>
              <div className="my-4 md:my-16">
                <Cta>
                  Tsuna-maji? Tsunamaji? <Link href="/docs/tsunamaji/project">So what's that supposed to mean?</Link>
                </Cta>
              </div>
              {/* Page End */}

            </section>
          </div>
        </div>
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
                ? `/docs/tsunamaji/plugins/${guide.slug}/${guide.tabs[0].slug}`
                : `/docs/tsunamaji/plugins/${guide.slug}`
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