import { FooterSitemap, FooterMeta } from "@/components/footer";
import GridContainer from "@/components/grid-container";
import ServiceItems, { ServiceItemProps } from "@/components/service-items";
import ShowcaseThumbnail from "@/components/showcase-thumbnail";
import { TipHighlight, TipStar } from "@/components/tips";
import type { Metadata } from "next";
import clsx from 'clsx';

export const metadata: Metadata = {
  title: "Sponsor",
  description:
    "Completely free open-source packages with no premium restrictions.",
  openGraph: {
    type: "article",
    title: "Sponsor",
    description: "Completely free open-source packages with no premium restrictions.",
    images: "https://rozsazoltan.vercel.app/api/og?path=/sponsor",
    url: "https://rozsazoltan.vercel.app/sponsor",
  },
};

const services: ServiceItemProps[] = [
  {
    href: "/ecosystem",
    name: "Open Source Ticket",
    pricing: "Free",
    description: "Available for everyone",
    extra: "Contribute on GitHub",
    button: "Ecosystem",
    gradientStart: "var(--color-sky-500)",
    gradientEnd: "var(--color-blue-400)",
    type: 'large',
  },
  {
    href: "https://ko-fi.com/rozsazoltan",
    name: "Golden Ticket",
    pricing: "Support",
    description: "Just a kind gesture",
    extra: "No extra premium functions",
    button: "Ko-fi",
    gradientStart: "var(--color-amber-400)",
    gradientEnd: "var(--color-yellow-300)",
    type: 'small',
  },
  {
    href: "/sponsor",
    name: "Premium Access",
    pricing: "Paid",
    description: "Just a kind gesture",
    extra: "Not available ticket",
    button: "Get Premium",
    gradientStart: "var(--color-emerald-400)",
    gradientEnd: "var(--color-green-300)",
    type: 'small',
    disabled: true,
  },
];

export default async function Showcase() {
  return (
    <div className="mt-24">
      <div className="mx-2 font-mono text-sm/7 font-medium tracking-widest text-gray-500 uppercase">Sponsor</div>
      <GridContainer>
        <h1 className="mx-2 text-4xl tracking-tighter text-balance sm:text-5xl lg:text-6xl xl:text-8xl">
          Completely free open-source packages with no premium restrictions.
        </h1>
      </GridContainer>

      <GridContainer className="mt-10">
        <p className="prose mx-2 max-w-(--breakpoint-md) text-lg leading-8 text-gray-600 dark:text-gray-400">
          If it was useful, inspiring, or helpful, and you feel like compensating the time invested, all I can do is say thank you. There are no hidden premium features, so support isn't necessary - just a kind gesture.
        </p>
      </GridContainer>

      <GridContainer className="mt-15">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10">
          <ServiceItems items={services} />
        </div>
      </GridContainer>

      <GridContainer className="mt-20">
        <h2 className="mx-2 text-xl tracking-tighter text-balance sm:text-2xl lg:text-3xl xl:text-4xl">
          Why is Premium not available?
        </h2>
      </GridContainer>
      <GridContainer className="mt-10">
        <p className="prose mx-2 max-w-(--breakpoint-md) text-lg leading-8 text-gray-600 dark:text-gray-400">
          My goal is not to restrict my open source projects. In the future, I may release paid packages built on these free projects, but this does not mean the free projects will end or be limited. Therefore, at most, if you feel like showing appreciation or simply want to make a voluntary gesture of thanks, the Support option is available.
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
