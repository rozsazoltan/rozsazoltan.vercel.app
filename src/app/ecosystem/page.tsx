import { FooterSitemap, FooterMeta } from "@/components/footer";
import GridContainer from "@/components/grid-container";
import ShowcaseThumbnail from "@/components/showcase-thumbnail";
import { TipHighlight, TipStar } from "@/components/tips";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecosystem",
  description:
    "Brands, packages, plugins, and everything I've built - with docs.",
  openGraph: {
    type: "article",
    title: "Ecosystem",
    description: "Brands, packages, plugins, and everything I've built - with docs.",
    images: "https://rozsazoltan.vercel.app/api/og?path=/ecosystem",
    url: "https://rozsazoltan.vercel.app/ecosystem",
  },
};

export default async function Showcase() {
  return (
    <div className="mt-24">
      <div className="mx-2 font-mono text-sm/7 font-medium tracking-widest text-gray-500 uppercase">Ecosystem</div>
      <GridContainer>
        <h1 className="mx-2 text-4xl tracking-tighter text-balance sm:text-5xl lg:text-6xl xl:text-8xl">
          Every great idea is born the moment you have no way to write it down.
        </h1>
      </GridContainer>

      <GridContainer className="mt-10">
        <p className="prose mx-2 max-w-(--breakpoint-md) text-lg leading-8 text-gray-600 dark:text-gray-400">
          Brands, packages, plugins, and everything I've built - with docs.
        </p>
      </GridContainer>

      <div className="prose mt-12 mb-46">
        <h2>Coming soon</h2>

        <div className="max-w-lg">
          <TipHighlight>
            Content creation is in progress. I'm writing it alone, unpaid, as a hobby. It may take me some time to complete everything.
          </TipHighlight>

          <TipStar>
            While you wait, <a href="https://github.com/rozsazoltan/rozsazoltan.vercel.app" target="_blank">drop a star on the project</a> if you like the guides.
          </TipStar>
        </div>
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
