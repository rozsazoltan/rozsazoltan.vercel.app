import { type Guide, loadGuides } from "@/app/(docs)/docs/tailwindcss/installation/framework-guides";
import { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/cta";

export const metadata: Metadata = {
  title: "Framework guides",
  description:
    "Framework-specific guides that cover our recommended approach to installing Tailwind CSS in a number of popular environments.",
  openGraph: {
    type: "article",
    title: "Framework guides",
    description: "Our recommended approach to installing Tailwind CSS in popular frameworks.",
    images: "https://rozsazoltan.vercel.app/api/og?path=/docs/tailwindcss/installation/framework-guides",
    url: "https://rozsazoltan.vercel.app/docs/tailwindcss/installation/framework-guides",
  },
};

export default async function FrameworkGuidesPage() {
  const guides = await loadGuides();

  return (
    <>
      <div id="content-wrapper" className="prose mb-10 max-w-3xl" data-content="true">
        <h3 className="sr-only" data-title="true">Framework Guides</h3>
        <p>
          Framework-specific guides that cover our recommended approach to installing Tailwind CSS in a number of popular environments. There are many guides available in the{" "}
          <a href="https://tailwindcss.com/docs/framework-guides" target="_blank" rel="noreferrer">
            official documentation
          </a>
          , but the community has added a few more, which I've included here.
        </p>
      </div>

      <Section guides={guides} emptyMessage="No results match the search." />

      <div className="my-4 md:my-16">
        <Cta>
          Don't see your framework of choice? Ask for help via <a href="https://stackoverflow.com/questions/ask" target="_blank" rel="noopener noreferrer">Stack Overflow</a> or <a href="https://github.com/tailwindlabs/tailwindcss/discussions/new?category=help" target="_blank" rel="noopener noreferrer">GitHub</a>; feel free to <a href="https://github.com/rozsazoltan/rozsazoltan.vercel.app/issues/new?title=Tailwind%20CSS%20-%20Community%20guide%20for%20[here%20your%20framework%20name]">suggest community guides</a>.
        </Cta>
      </div>
    </>
  );
}

function Section({
  title,
  guides,
  emptyMessage,
}: {
  title?: string;
  guides: Guide[];
  emptyMessage: string;
}) {
  return (
    <div className="mb-10">
      <h4 className="font-medium underline underline-offset-4 decoration-2 decoration-rose-500 mb-10" data-title="true">
        {title}
      </h4>
      {guides.length > 0 ? (
        <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide, idx) => (
            <GuideTile key={idx} guide={guide} />
          ))}
        </ul>
      ) : (
        <Cta>{emptyMessage}</Cta>
      )}
    </div>
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
              guide.tile.external || (
                guide.tabs
                  ? `/docs/tailwindcss/installation/framework-guides/${guide.slug}/${guide.tabs[0].slug}`
                  : `/docs/tailwindcss/installation/framework-guides/${guide.slug}`
              )
            }
            target={guide.tile.external ? '_blank' : '_self'}
            className="before:absolute before:-inset-3 before:rounded-2xl"
          >
            {guide.tile.title}
            <span className="inline overflow-visible text-slate-400 opacity-0 group-focus-within:opacity-100 group-hover:opacity-100">
              <svg
                viewBox="0 0 3 6"
                className="-mt-px ml-3 inline h-1.5 w-auto overflow-visible"
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
              {guide.tile.external && (
                <span className="ml-3 inline text-xs">external</span>
              )}
            </span>
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
