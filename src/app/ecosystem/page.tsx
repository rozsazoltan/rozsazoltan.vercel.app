import { FooterSitemap, FooterMeta } from "@/components/footer";
import GridContainer from "@/components/grid-container";
import ServiceItems, { ServiceItemProps } from "@/components/service-items";
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

const services: ServiceItemProps[] = [
  {
    href: "/docs/tsunamaji",
    name: "Tsunamaji",
    pricing: "Free",
    description: "Enhanced power for Tailwind CSS",
    gradientStart: "#88e2db",
    gradientEnd: "#77c69e",
    type: 'medium',
  },
  {
    href: "/docs/verzly",
    name: "Verzly",
    pricing: "Free",
    description: "Smart version management",
    gradientStart: "#000",
    gradientEnd: "#bbb",
    type: "small",
  },
  {
    href: "/docs/seotron",
    name: "Seotron",
    pricing: "Free",
    description: "Advanced SEO analytics",
    gradientStart: "#b22955",
    gradientEnd: "#e5366e",
    type: "small",
  },
  {
    href: "",
    name: "Coming soon",
    pricing: "Free", // Paid
    description: "...",
    gradientStart: "#e63627",
    gradientEnd: "#cb2525",
    type: "large",
  },
];

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

      <GridContainer className="mt-15">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10">
          <ServiceItems items={services} />
        </div>
      </GridContainer>

      <GridContainer className="mt-20">
        <h2 className="mx-2 text-xl tracking-tighter text-balance sm:text-2xl lg:text-3xl xl:text-4xl">
          Why is there a need for different brands?
        </h2>
      </GridContainer>
      <GridContainer className="mt-10">
        <p className="prose mx-2 max-w-(--breakpoint-md) text-lg leading-8 text-gray-600 dark:text-gray-400">
          I do not want to distribute tools, plugins, or codebases created for different languages, platforms, or purposes under a single name. This would lead to chaos and make it impossible to clearly address the target audience of the brand. Different brands ensure consistency in the audience, purpose, and area of use.
        </p>
      </GridContainer>

      <GridContainer className="mt-20">
        <h2 className="mx-2 text-xl tracking-tighter text-balance sm:text-2xl lg:text-3xl xl:text-4xl">
          What guidelines do I follow when naming?
        </h2>
      </GridContainer>
      <GridContainer className="mt-10">
        <p className="prose mx-2 max-w-(--breakpoint-md) text-lg leading-8 text-gray-600 dark:text-gray-400">
          I always try to choose a name that is primarily unique and memorable; secondly, it reflects the brand's primary objective. This is not always straightforward - for example, in the case of Tsunamaji - but its alignment with Tailwind already helps convey the concept.
        </p>
      </GridContainer>

      <GridContainer className="mt-20">
        <h2 className="mx-2 text-xl tracking-tighter text-balance sm:text-2xl lg:text-3xl xl:text-4xl">
          What license are the free projects available under?
        </h2>
      </GridContainer>
      <GridContainer className="mt-10 space-y-4">
        <p className="prose mx-2 max-w-(--breakpoint-md) text-lg leading-8 text-gray-600 dark:text-gray-400">
          For now, I provide all projects under the AGPL-3.0 license, which means that any modified version must remain public and retain a similar open-source nature. Please make sure to mention the copyright in your project and indicate in some part of your software which of my packages helped in your project.
        </p>
        <p className="prose mx-2 max-w-(--breakpoint-md) text-lg leading-8 text-gray-600 dark:text-gray-400">
          Large companies like Google or Microsoft also respect the copyrights of freely available open-source projects and list them completely in their products, with proper copyrights and references.
        </p>
      </GridContainer>

      <GridContainer className="mt-20">
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
