import { Breadcrumb } from "@/components/breadcrumb";
import { getDocPageSlugs, getSectionAndTitleBySlug } from "../../../docs/api";

type Params = {
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

export default async function DocsTitle(props: Params) {
  let params = await props.params;
  let fullSlug = params.slug.join('/');
  let sectionAndTitle = getSectionAndTitleBySlug(fullSlug);
  if (!sectionAndTitle) return null;

  return <Breadcrumb section={sectionAndTitle.section} title={sectionAndTitle.title} />;
}