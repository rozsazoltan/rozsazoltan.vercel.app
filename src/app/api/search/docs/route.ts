import { getDocsPostSlugs, getDocsPostBySlug } from "@/app/(docs)/api";
import { loadGuides as loadTailwindCSSPluginGuides } from "@/app/(docs)/docs/tailwindcss/installation/plugin-guides";
import { loadGuides as loadTailwindCSSFrameworkGuides } from "@/app/(docs)/docs/tailwindcss/installation/framework-guides";
import { NextResponse } from "next/server";

export async function GET() {
  const slugs = await getDocsPostSlugs();
  const pages = (await Promise.all(slugs.map(getDocsPostBySlug)))
    .filter(Boolean)
    .filter((post) => !post?.meta.private);

  // @ts-ignore
  const docsIndex = pages.map(({ meta, slug }) => ({
    title: meta.title,
    description: meta.description,
    url: `/docs/${slug}`,
  }));

  const tailwindcssPluginGuides = await loadTailwindCSSPluginGuides();
  const tailwindcssPluginIndexes = tailwindcssPluginGuides.map((guide) => ({
    title: guide.tile.title,
    description: guide.tile.description + ' ' + guide.page.description + ' ' + guide.page.title,
    url: `/docs/tailwindcss/installation/plugin-guides/${guide.slug}`,
    target: guide.tile.external ? '_blank' : '_self',
  }));

  const tailwindcssFrameworkGuides = await loadTailwindCSSFrameworkGuides();
  const tailwindcssFrameworkIndexes = tailwindcssFrameworkGuides.map((guide) => ({
    title: guide.tile.title,
    description: guide.tile.description + ' ' + guide.page.description + ' ' + guide.page.title,
    url: `/docs/tailwindcss/installation/framework-guides/${guide.slug}`,
    target: guide.tile.external ? '_blank' : '_self',
  }));

  return NextResponse.json([
    ...docsIndex,
    ...tailwindcssPluginIndexes,
    ...tailwindcssFrameworkIndexes,
  ]);
}
