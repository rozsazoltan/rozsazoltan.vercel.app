import { Cta } from "@/components/cta";
import { type Step, Steps } from "@/components/installation-steps";
import dedent from "dedent";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What's new from Tailwind CSS v4",
  description:
    "Tailwind CSS v4 arrives with many new features. New CSS-first configuration.",
  openGraph: {
    type: "article",
    title: "What's new",
    description: "Integrate Tailwind CSS with frameworks like Laravel, SvelteKit, React Router, and SolidJS.",
    images: "https://tailwindcss.com/api/og?path=/docs/installation/using-vite",
    url: "https://tailwindcss.com/docs/installation/using-vite",
  },
};

export default function Page() {
  return (
    <>
      <div
        id="content-wrapper"
        className="prose relative z-10 mb-10 max-w-3xl"
        data-content="true"
      >
        <h3 data-title="true" className="sr-only">
          What's new in Tailwind CSS v4
        </h3>
        <p>
          Tailwind CSS v4 arrives with many <Link href="/blog/2025-05-20-tailwind-css-v4-separated-packages">new features</Link>. Most notably, the legacy JavaScript-based configuration is being
          phased out - while it's still available for now, it's expected to be fully removed in the future. As a result, the{" "}
          <code>init</code> process is no longer necessary, making the CLI often redundant in many projects when used alongside the
          PostCSS plugin.
        </p>
        <p>
          Starting from v4, in addition to the core <code>tailwindcss</code> package, you'll also need to install a
          processing plugin. You can learn about each plugin in the <Link href="/docs/tailwindcss/installation/plugin-guides">plugin-specific guides</Link> section.
        </p>
        <p>
          With the appropriate plugins, Tailwind CSS integrates smoothly with many popular frameworks - each of which has its
          own dedicated guide in the <Link href="/docs/tailwindcss/installation/framework-guides">framework-specific guides</Link> section.
        </p>
        <p>
          For quick demo projects, use the <Link href="/docs/tailwindcss/installation/play-cdn">Tailwind CDN</Link> or the{' '}
          <a href="https://play.tailwindcss.com" target="_blank" rel="noopener noreferrer">
            Tailwind Playground
          </a>
          .
        </p>
        <p>
          After installation, get familiar with the benefits and usage of the <Link href="/blog/2025-05-25-tailwind-css-v4-css-first-configuration">new CSS-first configuration</Link>.
        </p>
      </div>

      {/* Optional: if you have steps to include, use your Steps component here */}
      {/* <Steps steps={steps} /> */}

      <div className="my-4 md:my-16">
        <Cta label="Explore framework guides" href="/docs/tailwindcss/installation/framework-guides">
          Explore the <Link href="/docs/tailwindcss/installation/plugin-guides">Tailwind CSS plugins</Link> and find the guide that matches your <Link href="/docs/tailwindcss/installation/framework-guides">framework</Link>.
        </Cta>
      </div>
    </>
  );
}