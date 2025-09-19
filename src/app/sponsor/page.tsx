import { FooterSitemap, FooterMeta } from "@/components/footer";
import GridContainer from "@/components/grid-container";
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

type CardType = 'donate' | 'opensource' | 'premium';

interface DonateCardProps {
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

export function DonateCard({
  type = 'donate',
  href = 'https://ko-fi.com/rozsazoltan',
  title,
  subtitle,
  description,
  buttonText,
  thankYouMessage,
  icon,
  disabled: propsDisabled
}: DonateCardProps) {
  const configs: Record<CardType, CardConfig> = {
    donate: {
      colors: {
        glow: 'from-yellow-400/50 via-amber-500/50 to-yellow-400/50',
        border: 'from-yellow-300 via-amber-400 to-yellow-300',
        bg: 'from-amber-50 to-yellow-100',
        bgPattern: 'from-amber-400 to-yellow-300',
        text: 'text-amber-700',
        textGradient: 'from-amber-600 to-yellow-600',
        desc: 'text-amber-600',
        button: 'from-amber-500 via-yellow-500 to-amber-500',
        buttonBorder: 'border-yellow-400',
        buttonText: 'text-amber-50',
        thankYou: 'text-amber-500',
        dots: ['bg-amber-400', 'bg-yellow-500', 'bg-amber-500', 'bg-yellow-600'],
        borderColor: 'border-amber-300',
        gradientOverlay: 'from-amber-200/20'
      },
      defaults: {
        title: 'Golden Ticket',
        subtitle: 'Support Creator',
        description: ['Just a kind gesture', 'No extra premium functions'],
        buttonText: 'Ko-fi',
        thankYouMessage: 'Thank you for your support! ⭐',
        icon: '✨',
        disabled: false
      }
    },
    opensource: {
      colors: {
        glow: 'from-sky-400/50 via-blue-500/50 to-sky-400/50',
        border: 'from-sky-300 via-blue-400 to-sky-300',
        bg: 'from-sky-50 to-blue-100',
        bgPattern: 'from-sky-400 to-blue-300',
        text: 'text-sky-700',
        textGradient: 'from-sky-600 to-blue-600',
        desc: 'text-sky-600',
        button: 'from-sky-500 via-blue-500 to-sky-500',
        buttonBorder: 'border-blue-400',
        buttonText: 'text-sky-50',
        thankYou: 'text-sky-500',
        dots: ['bg-sky-400', 'bg-blue-500', 'bg-sky-500', 'bg-blue-600'],
        borderColor: 'border-sky-300',
        gradientOverlay: 'from-sky-200/20'
      },
      defaults: {
        title: 'Open Source ticket',
        subtitle: 'Free Access',
        description: ['Available for everyone', 'Contribute on GitHub'],
        buttonText: 'Ecosystem',
        thankYouMessage: 'Happy coding! 🚀',
        icon: '🔓',
        disabled: false
      }
    },
    premium: {
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
        title: 'Not available ticket',
        subtitle: 'Premium Access',
        description: ['Unlock all features', 'Priority support included'],
        buttonText: 'Get Premium',
        thankYouMessage: 'Welcome to premium! ⚡',
        icon: '🎉',
        disabled: true
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
            <div className="absolute inset-0 opacity-10">
              <div className={clsx("absolute inset-0", `bg-gradient-to-br ${colors.bgPattern}`)}></div>
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 2px, transparent 2px), radial-gradient(circle at 75% 75%, rgba(37, 99, 235, 0.3) 2px, transparent 2px)',
                  backgroundSize: '20px 20px sm:24px sm:24px'
                }}
              ></div>
            </div>

            <div className="text-center">
              <div className={clsx(colors.text, "mb-2")}>
                <div className="text-xs sm:text-xs md:text-xs font-semibold tracking-widest uppercase opacity-70 mb-1">{finalTitle}</div>
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

            <div className={clsx("absolute top-0 left-2 sm:left-4 right-2 sm:right-4 h-6 sm:h-8 rounded-t-xl bg-gradient-to-b", colors.gradientOverlay, "to-transparent")}></div>
            <div className={clsx("absolute bottom-0 left-2 sm:left-4 right-2 sm:right-4 h-6 sm:h-8 rounded-b-xl bg-gradient-to-t", colors.gradientOverlay, "to-transparent")}></div>
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
      <div className="mx-2 font-mono text-sm/7 font-medium tracking-widest text-gray-500 uppercase">Sponsor</div>
      <GridContainer>
        <h1 className="mx-2 text-4xl tracking-tighter text-balance sm:text-5xl lg:text-6xl xl:text-8xl">
          Completely free open-source packages with no premium restrictions.
        </h1>
      </GridContainer>

      <GridContainer className="mt-15">
        <p className="prose mx-2 max-w-(--breakpoint-md) text-lg leading-8 text-gray-600 dark:text-gray-400">
          If it was useful, inspiring, or helpful, and you feel like compensating the time invested, all I can do is say thank you. There are no hidden premium features, so support isn't necessary - just a kind gesture.
        </p>
      </GridContainer>

      <GridContainer className="mt-10">
        <div className="flex flex-wrap gap-4">
          <DonateCard type="opensource" href="/ecosystem" />
          <DonateCard type="donate" />
          <DonateCard type="premium" />
        </div>
      </GridContainer>

      <GridContainer className="mt-20">
        <h2 className="mx-2 text-xl tracking-tighter text-balance sm:text-2xl lg:text-3xl xl:text-4xl">
          Why is Premium not available?
        </h2>
      </GridContainer>
      <GridContainer className="mt-10">
        <p className="prose mx-2 max-w-(--breakpoint-md) text-lg leading-8 text-gray-600 dark:text-gray-400">
          My goal is not to restrict my open source projects. In the future, I may release paid packages built on these free projects, but this does not mean the free projects will end or be limited. Therefore, at most, if you feel like showing support for my work or find any of my packages useful and want to compensate for the effort involved, the Support option is available.
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
