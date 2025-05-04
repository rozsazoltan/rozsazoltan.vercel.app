import { getDocsPostSlugs, getDocsPostBySlug } from "@/app/(docs)/api";
import { NextResponse } from "next/server";

export async function GET() {
  const slugs = await getDocsPostSlugs();
  const posts = (await Promise.all(slugs.map(getDocsPostBySlug)))
    .filter(Boolean)
    .filter((post) => !post?.meta.private);

  // @ts-ignore
  const index = posts.map(({ meta, slug }) => ({
    title: meta.title,
    description: meta.description,
    url: `/docs/${slug}`,
  }));

  return NextResponse.json(index);
}
