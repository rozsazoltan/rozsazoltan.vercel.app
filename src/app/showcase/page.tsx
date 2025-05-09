import { FooterSitemap, FooterMeta } from "@/components/footer";
import GridContainer from "@/components/grid-container";
import ShowcaseThumbnail from "@/components/showcase-thumbnail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Showcase",
  description:
    "...",
  openGraph: {
    type: "article",
    title: "Showcase",
    description: "...",
    images: "https://rozsazoltan.vercel.io/api/og?path=/showcase",
    url: "https://rozsazoltan.vercel.io/showcase",
  },
};

export default async function Showcase() {
  return (
    <div className="mt-24">
      <div className="mx-2 font-mono text-sm/7 font-medium tracking-widest text-gray-500 uppercase">Showcase</div>
      <GridContainer>
        <h1 className="mx-2 text-4xl tracking-tighter text-balance sm:text-5xl lg:text-6xl xl:text-8xl">
          Under construction
        </h1>
      </GridContainer>

      <GridContainer className="mt-10">
        <p className="prose mx-2 max-w-(--breakpoint-md) text-lg leading-8 text-gray-600 dark:text-gray-400">
          ...
        </p>
      </GridContainer>

      <div className="mt-12 mb-46 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {showcase.map((showcase, siteIndex) => (
          <ShowcaseThumbnail key={showcase.name} showcase={showcase} priority={siteIndex < 8} />
        ))}
      </div>
      <GridContainer>
        <FooterSitemap className="*:first:border-l-0 *:last:border-r-0" />
      </GridContainer>
      <FooterMeta className="px-4 md:px-6 lg:px-8" />
    </div>
  );
}

interface Site {
  name: string,
  url: string,
  thumbnail: string,
  video: string,
  description: string,
}

const showcase: Site[] = [
  // {
  //   name: "Example",
  //   url: "https://example.com",
  //   thumbnail: require("./img/example.com.png").default,
  //   video: "/showcase-videos/example.mp4",
  //   description: "Example Webpage Description",
  // },
];
