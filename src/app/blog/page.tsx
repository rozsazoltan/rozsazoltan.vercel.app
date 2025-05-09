import { DesktopComputer } from "@/components/blog/desktop-computer";
import GridContainer from "@/components/grid-container";
import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { formatDate, getBlogPostBySlug, getBlogPostSlugs, nonNullable } from "./api";
import { FooterSitemap, FooterMeta } from "@/components/footer";

export const metadata: Metadata = {
  title: "Blog",
  description: "News, personal guides, and updates related to packages.",
  openGraph: {
    type: "article",
    title: "Latest updates - Blog",
    description: "News, personal guides, and updates related to packages.",
    images: "https://rozsazoltan.vercel.app/api/og?path=/blog",
    url: "https://rozsazoltan.vercel.app/blog",
  },
};

export default async function Blog() {
  let slugs = await getBlogPostSlugs();
  let posts = (await Promise.all(slugs.map(getBlogPostBySlug)))
    .filter(nonNullable)
    .filter((post) => !post.meta.private);

  return (
    <div className="relative mx-auto mt-24 max-lg:max-w-2xl">
      <div className="absolute -top-16 right-0 w-110 max-w-1/2 isolate z-0 not-xl:hidden">
        <DesktopComputer />
      </div>
      <GridContainer>
        <h1 className="mx-2 text-6xl tracking-tighter text-balance sm:text-7xl lg:text-8xl">Latest Updates</h1>
      </GridContainer>

      <GridContainer className="mt-10">
        <p className="mx-2 text-lg">News, personal guides, and updates related to packages.</p>
      </GridContainer>

      <div className="mt-12 mb-46 grid grid-cols-1 lg:grid-cols-[24rem_2.5rem_minmax(0,1fr)]">
        {posts.map(({ meta, slug }, index) => (
          <Fragment key={slug}>
            <GridContainer withFrame className="px-2 py-3 col-span-3 grid grid-cols-subgrid">
              <div className="px-2 font-mono text-xl/6 font-medium tracking-widest text-gray-400 uppercase max-lg:hidden">
                {formatDate(meta.date)}
              </div>
              <div className="max-lg:hidden" />
              <div className="text-md px-2">
                <div className="max-w-(--container-2xl)">
                  <div className="mb-4 font-mono text-sm/6 font-medium tracking-widest text-gray-500 uppercase lg:hidden">
                    {formatDate(meta.date)}
                  </div>

                  <Link href={`/blog/${slug}`} className="font-semibold">
                    {meta.title}
                  </Link>
                  <div className="prose prose-blog mt-4 line-clamp-3 leading-7">{meta.excerpt}</div>
                  <Link
                    href={`/blog/${slug}`}
                    className="mt-4 inline-block text-sm font-semibold text-rose-500 hover:text-rose-600 dark:text-rose-400"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </GridContainer>
            {index !== posts.length - 1 && (
              <div className="contents">
                <div className="h-10 max-lg:hidden" />
                <div className="h-10 max-lg:hidden" />
                <div className="h-10" />
              </div>
            )}
          </Fragment>
        ))}
      </div>
      <GridContainer withFrame>
        <FooterSitemap className="*:first:border-l-0 *:last:border-r-0" />
      </GridContainer>
      <FooterMeta className="px-4 md:px-6 lg:px-8" />
    </div>
  );
}
