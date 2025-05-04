import { getBlogPostSlugs, getBlogPostBySlug } from "@/app/blog/api";
import { NextResponse } from "next/server";

export async function GET() {
  const slugs = await getBlogPostSlugs();
  const posts = (await Promise.all(slugs.map(getBlogPostBySlug)))
    .filter(Boolean)
    .filter((post) => !post?.meta.private);

  // @ts-ignore
  const index = posts.map(({ meta, slug }) => ({
    title: meta.title,
    description: meta.description,
    excerpt: meta.excerpt,
    url: `/blog/${slug}`,
  }));

  return NextResponse.json(index);
}
