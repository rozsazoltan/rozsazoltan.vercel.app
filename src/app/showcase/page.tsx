import { FooterSitemap, FooterMeta } from "@/components/footer";
import GridContainer from "@/components/grid-container";
import GitHubContribution from "@/components/showcase-github-contribution";
import ShowcaseThumbnail from "@/components/showcase-thumbnail";
import { TipHighlight, TipStar } from "@/components/tips";
import type { Metadata } from "next";
import contributions from "./data/contributions";

export const metadata: Metadata = {
  title: "Showcase",
  description:
    "There's no such thing as an unachievable dream. Knowledge compounds within us day by day. What seemed like a miracle a few years ago is now our reality.",
  openGraph: {
    type: "article",
    title: "Showcase",
    description: "There's no such thing as an unachievable dream. Knowledge compounds within us day by day. What seemed like a miracle a few years ago is now our reality.",
    images: "https://rozsazoltan.vercel.app/api/og?path=/showcase",
    url: "https://rozsazoltan.vercel.app/showcase",
  },
};

export default async function Showcase() {
  return (
    <div className="mt-24">
      <div className="mx-2 font-mono text-sm/7 font-medium tracking-widest text-gray-500 uppercase">Showcase</div>
      <GridContainer>
        <h1 className="mx-2 text-4xl tracking-tighter text-balance sm:text-5xl lg:text-6xl xl:text-8xl">
          Hold my beer.
        </h1>
      </GridContainer>

      <GridContainer className="mt-10">
        <p className="prose mx-2 max-w-(--breakpoint-md) text-lg leading-8 text-gray-600 dark:text-gray-400">
          There's no such thing as an unachievable dream. Knowledge compounds within us day by day. What seemed like a miracle a few years ago is now our reality.
        </p>
      </GridContainer>

      <GridContainer className="mt-10 prose px-2">
        <h2>Coming soon</h2>

        <div className="max-w-lg">
          <TipHighlight>
            Content creation is in progress. I'm writing it alone, unpaid, as a hobby. It may take me some time to complete everything.
          </TipHighlight>

          <TipStar>
            While you wait, <a href="https://github.com/rozsazoltan/rozsazoltan.vercel.app" target="_blank">drop a star on the project</a> if you like the guides.
          </TipStar>
        </div>
      </GridContainer>

      <div className="prose mt-12 mb-46 p-2">
        
      </div>

      {showcase.length > 0 && (<div className="mt-12 mb-46 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {showcase.map((showcase, siteIndex) => (
          <ShowcaseThumbnail key={showcase.name} showcase={showcase} priority={siteIndex < 8} />
        ))}
      </div>)}

      <div className="mx-2 font-mono text-sm/7 font-medium tracking-widest text-gray-500 uppercase">GitHub Contributiuons</div>
      <GridContainer>
        <h1 className="mx-2 text-4xl tracking-tighter text-balance sm:text-5xl lg:text-6xl xl:text-8xl">
          Open Source.
        </h1>
      </GridContainer>

      <GridContainer className="mt-10">
        <p className="prose mx-2 max-w-(--breakpoint-md) text-lg leading-8 text-gray-600 dark:text-gray-400">
          I contribute ideas, bug reports, PRs, open discussions, or help answer existing issues across numerous public and private repositories. It's difficult to summarize all of this retrospectively on GitHub, but I tried to give an approximate picture using GraphQL queries.
        </p>
      </GridContainer>

      <div className="mt-12 mb-46 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {contributions.map((contribution, repoIndex) => (
          <GitHubContribution key={contribution.name} contribution={contribution} />
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
