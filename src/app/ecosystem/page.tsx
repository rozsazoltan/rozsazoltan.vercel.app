import { FooterSitemap, FooterMeta } from "@/components/footer";
import GridContainer from "@/components/grid-container";
import ShowcaseThumbnail from "@/components/showcase-thumbnail";
import { TipHighlight, TipStar } from "@/components/tips";
import type { Metadata } from "next";
import clsx from 'clsx';

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

type CardType = 'tsunamaji' | 'verzly' | 'seotron';

interface BrandCardProps {
  type?: CardType;
  href?: string;
  title?: string;
  subtitle?: string;
  description?: string[];
  buttonText?: string;
  thankYouMessage?: string;
  icon?: string;
  disabled?: boolean;
}

interface CardColors {
  glow: string;
  border: string;
  bg: string;
  bgPattern: string;
  text: string;
  textGradient: string;
  desc: string;
  button: string;
  buttonBorder: string;
  buttonText: string;
  thankYou: string;
  dots: string[];
  borderColor: string;
  gradientOverlay: string;
}

interface CardConfig {
  colors: CardColors;
  defaults: {
    title: string;
    subtitle: string;
    description: string[];
    buttonText: string;
    thankYouMessage: string;
    icon: string;
    disabled?: boolean;
  };
}

export function BrandCard({
  type = 'tsunamaji',
  href = '',
  title,
  subtitle,
  description,
  buttonText,
  thankYouMessage,
  icon,
  disabled: propsDisabled
}: BrandCardProps) {
  const configs: Record<CardType, CardConfig> = {
    tsunamaji: {
      colors: {
        glow: 'from-emerald-400/50 via-green-500/50 to-emerald-400/50',
        border: 'from-emerald-300 via-green-400 to-emerald-300',
        bg: 'from-emerald-50 to-green-100',
        bgPattern: 'from-emerald-400 to-green-300',
        text: 'text-emerald-700',
        textGradient: 'from-emerald-600 to-green-600',
        desc: 'text-emerald-600',
        button: 'from-emerald-500 via-green-500 to-emerald-500',
        buttonBorder: 'border-green-400',
        buttonText: 'text-emerald-50',
        thankYou: 'text-emerald-500',
        dots: ['bg-emerald-400', 'bg-green-500', 'bg-emerald-500', 'bg-green-600'],
        borderColor: 'border-emerald-300',
        gradientOverlay: 'from-emerald-200/20'
      },
      defaults: {
        title: 'Ship spells. Surf code.',
        subtitle: 'Tsunamaji',
        description: ['Baseline based utility classes', 'Plugins for Tailwind CSS'],
        buttonText: 'Explore Plugins',
        thankYouMessage: 'Ride the wave! ❤️',
        icon: '🍃',
        disabled: false
      }
    },
    verzly: {
      colors: {
        glow: 'from-gray-400/50 via-slate-500/50 to-gray-400/50',
        border: 'from-gray-300 via-slate-400 to-gray-300',
        bg: 'from-gray-50 to-slate-100',
        bgPattern: 'from-gray-400 to-slate-300',
        text: 'text-gray-700',
        textGradient: 'from-gray-600 to-slate-600',
        desc: 'text-gray-600',
        button: 'from-gray-500 via-slate-500 to-gray-500',
        buttonBorder: 'border-slate-400',
        buttonText: 'text-gray-50',
        thankYou: 'text-gray-500',
        dots: ['bg-gray-400', 'bg-slate-500', 'bg-gray-500', 'bg-slate-600'],
        borderColor: 'border-gray-300',
        gradientOverlay: 'from-gray-200/20'
      },
      defaults: {
        title: 'Versatile Zesty Lifecycle',
        subtitle: 'Verzly',
        description: ['Smart version management', 'Streamline your workflow'],
        buttonText: 'Manage Versions',
        thankYouMessage: 'Stay organized! 📋',
        icon: '⚡',
        disabled: false
      }
    },
    seotron: {
      colors: {
        glow: 'from-red-400/50 via-rose-500/50 to-red-400/50',
        border: 'from-red-300 via-rose-400 to-red-300',
        bg: 'from-red-50 to-rose-100',
        bgPattern: 'from-red-400 to-rose-300',
        text: 'text-red-700',
        textGradient: 'from-red-600 to-rose-600',
        desc: 'text-red-600',
        button: 'from-red-500 via-rose-500 to-red-500',
        buttonBorder: 'border-rose-400',
        buttonText: 'text-red-50',
        thankYou: 'text-red-500',
        dots: ['bg-red-400', 'bg-rose-500', 'bg-red-500', 'bg-rose-600'],
        borderColor: 'border-red-300',
        gradientOverlay: 'from-red-200/20'
      },
      defaults: {
        title: 'SEO Optimizer',
        subtitle: 'SeoTron',
        description: ['Boost your rankings', 'Advanced SEO analytics'],
        buttonText: 'Optimize Now',
        thankYouMessage: 'Rank higher! 🚀',
        icon: '📈',
        disabled: false
      }
    }
  };

  const config = configs[type];
  const colors = config.colors;
  const defaults = config.defaults;

  const finalTitle = title ?? defaults.title;
  const finalSubtitle = subtitle ?? defaults.subtitle;
  const finalDescription = description ?? defaults.description;
  const finalButtonText = buttonText ?? defaults.buttonText;
  const finalThankYouMessage = thankYouMessage ?? defaults.thankYouMessage;
  const finalIcon = icon ?? defaults.icon;
  const finalDisabled = propsDisabled ?? defaults.disabled ?? false;

  return (
    <div
      className={clsx(
        "relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto px-4",
        finalDisabled && "cursor-not-allowed opacity-50 grayscale"
      )}
    >
      <a
        href={finalDisabled ? undefined : href}
        target={finalDisabled || href.startsWith('/') ? undefined : "_blank"}
        className={clsx(
          "group relative block transform transition-all duration-500 hover:-translate-y-3 hover:rotate-1",
          finalDisabled && "hover:translate-y-0 hover:rotate-0"
        )}
      >
        <div
          className={clsx(
            "absolute inset-0 rounded-2xl blur-2xl opacity-30 transition-all duration-500 scale-110 group-hover:opacity-50",
            `bg-gradient-to-r ${colors.glow}`
          )}
        ></div>

        <div className={clsx("relative p-1 rounded-2xl", `bg-gradient-to-br ${colors.border}`)}>
          <div
            className={clsx(
              "relative overflow-hidden rounded-xl p-4 sm:p-6 md:p-8 border-2",
              `bg-gradient-to-br ${colors.bg}`,
              colors.borderColor
            )}
          >
            <div className={clsx("absolute inset-0 opacity-10")}>
              <div className={clsx("absolute inset-0", `bg-gradient-to-br ${colors.bgPattern}`)}></div>
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 2px, transparent 2px), radial-gradient(circle at 75% 75%, rgba(37, 99, 235, 0.3) 2px, transparent 2px)',
                  backgroundSize: '20px 20px'
                }}
              ></div>
            </div>

            <div className="text-center">
              <div className={clsx(colors.text, "mb-2")}>
                <div className="text-xs font-semibold tracking-widest uppercase opacity-70 mb-1">{finalTitle}</div>
                <div className={clsx(
                  "text-xl sm:text-2xl font-bold bg-clip-text text-transparent",
                  `bg-gradient-to-r ${colors.textGradient}`
                )}>{finalSubtitle}</div>
              </div>

              <div className={clsx(colors.desc, "text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed")}>
                <div className="font-medium mb-1">{finalDescription[0]}</div>
                <div className="text-xs opacity-80">{finalDescription[1]}</div>
              </div>

              <div className="relative">
                <div className={clsx(
                  "rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 font-bold transition-all duration-300 border-2 flex items-center justify-center space-x-2 sm:space-x-3",
                  `bg-gradient-to-r ${colors.button}`,
                  colors.buttonText,
                  colors.buttonBorder
                )}>
                  <span className="text-sm sm:text-base md:text-lg">{finalButtonText}</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </div>
              </div>

              <div className={clsx(colors.thankYou, "text-xs mt-4 sm:mt-6 font-medium")}>{finalThankYouMessage}</div>
            </div>

            <div className={clsx("absolute top-4 sm:top-6 right-4 sm:right-6 w-2 sm:w-3 h-2 sm:h-3 rounded-full opacity-60 animate-pulse", colors.dots[0])}></div>
            <div className={clsx("absolute top-3 sm:top-4 right-7 sm:right-10 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full opacity-40", colors.dots[1])}></div>
            <div className={clsx("absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full opacity-50", colors.dots[2])}></div>
            <div className={clsx("absolute bottom-5 sm:bottom-8 left-7 sm:left-10 w-1 h-1 rounded-full opacity-60", colors.dots[3])}></div>

            <div className={clsx("absolute top-0 left-2 sm:left-4 right-2 sm:right-4 h-6 sm:h-8 rounded-t-xl bg-gradient-to-b to-transparent", colors.gradientOverlay)}></div>
            <div className={clsx("absolute bottom-0 left-2 sm:left-4 right-2 sm:right-4 h-6 sm:h-8 rounded-b-xl bg-gradient-to-t to-transparent", colors.gradientOverlay)}></div>
          </div>
        </div>

        <div className="absolute -top-3 sm:-top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500 pointer-events-none">
          <div className="text-lg sm:text-2xl">{finalIcon}</div>
        </div>
      </a>
    </div>
  );
}

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
        <div className="flex flex-wrap gap-4">
          <BrandCard type="tsunamaji" href="/docs/tsunamaji" />
          <BrandCard type="verzly" href="/docs/verzly" disabled={true} />
          <BrandCard type="seotron" href="/docs/seotron" disabled={true} />
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
