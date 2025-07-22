import Pagination from "@/components/pagination";
import { RandomPromo } from "@/components/promos";
import TableOfContents from "@/components/table-of-contents";
import { notFound } from "next/navigation";
import { Metadata } from "next/types";
import { generateTableOfContents, getDocPageBySlug, getDocPageSlugs, getSectionAndTitleBySlug } from "../api";
import { TipCompat } from "@/components/tips";

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

export async function generateStaticParams() {
  let slugs = await getDocPageSlugs();
  return slugs.map((slug) => ({ 
    slug: slug.split('/')
  }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  let params = await props.params;
  let fullSlug = params.slug.join('/');
  let sectionAndTitle = await getSectionAndTitleBySlug(fullSlug);
  let post = await getDocPageBySlug(fullSlug);

  if (!post) {
    return {};
  }

  let title = `${post.title} - ${sectionAndTitle?.section ?? ""}`;

  return {
    metadataBase: new URL("https://rozsazoltan.vercel.app"),
    title,
    description: post.description,
    openGraph: {
      title,
      description: post.description,
      type: "article",
      url: `/docs/${fullSlug}`,
      images: [{ url: `/api/og?path=/docs/${fullSlug}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.description,
      images: [{ url: `/api/og?path=/docs/${fullSlug}` }],
      site: "@rozsazoltan_dev",
      creator: "@rozsazoltan_dev",
    },
  };
}

export default async function DocPage(props: Props) {
  let params = await props.params;
  let fullSlug = params.slug.join('/');

  let sectionAndTitle = getSectionAndTitleBySlug(fullSlug);

  let [post, tableOfContents] = await Promise.all([
    getDocPageBySlug(fullSlug),
    generateTableOfContents(fullSlug),
  ]);

  if (!post) {
    return (
      <>
        {notFound()}
      </>
    );
  }

  return (
    <>
      {/* Add a placeholder div so the Next.js router can find the scrollable element. */}
      <div hidden />

      <div className="mx-auto grid w-full max-w-2xl grid-cols-1 gap-10 xl:max-w-5xl xl:grid-cols-[minmax(0,1fr)_var(--container-2xs)]">
        <div className="px-4 pt-10 pb-24 sm:px-6 xl:pr-0">
          <div className="mb-8">
            <TipCompat>
              The site is under development, so some information may be incomplete or unavailable.
            </TipCompat>
          </div>

          {sectionAndTitle ? (
            <p
              className="flex items-center gap-2 font-mono text-xs/6 font-medium tracking-widest text-gray-600 uppercase dark:text-gray-400"
              data-section="true"
            >
              {sectionAndTitle.section}
            </p>
          ) : null}
          <h1 data-title="true" className="mt-2 text-3xl font-medium tracking-tight text-gray-950 dark:text-white">
            {post.title}
          </h1>
          <p data-description="true" className="mt-6 text-base/7 text-gray-700 dark:text-gray-400">
            {post.description}
          </p>

          <div className="prose mt-10" data-content="true">
            <post.Component />
          </div>
          
          <Pagination slug={fullSlug} />
        </div>
        <div className="max-xl:hidden">
          <div className="sticky top-14 max-h-[calc(100svh-3.5rem)] overflow-x-hidden px-6 pt-10 pb-24">
            <TableOfContents tableOfContents={tableOfContents} />
            <RandomPromo />
          </div>
        </div>
      </div>
    </>
  );
}
