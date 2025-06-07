import { Metadata } from "next";
import { TabBar } from "@/components/installation-tabs";

export const metadata: Metadata = {
  title: {
    template: "%s - Vue.js",
    default: "Installation",
  },
  openGraph: {
    type: "article",
    title: {
      template: "%s - Vue.js",
      default: "Installation",
    },
  },
};

const tabs = {
  "What's new": "/docs/vuejs/installation/whats-new",
};

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Add a placeholder div so the Next.js router can find the scrollable element. */}
      <div hidden />

      <div className="isolate mx-auto grid w-full max-w-2xl grid-cols-1 gap-10 pt-10 md:pb-24 xl:max-w-5xl">
        <div className="px-4 sm:px-6">
          <p
            data-section="true"
            className="font-mono text-xs/6 font-medium tracking-widest text-gray-600 uppercase dark:text-gray-400"
          >
            Installation
          </p>
          <h1 className="mt-2 text-3xl font-medium tracking-tight text-gray-950 dark:text-white">
            Get started with Vue 3
          </h1>
          <p data-description="true" className="mt-6 text-base/7 text-gray-700 dark:text-gray-300">
            ...
          </p>

          <div className="mt-10" data-content="true">
            <section className="relative mb-16">
              <div className="relative z-10">
                <h2
                  data-docsearch-ignore
                  className="mb-6 text-lg font-semibold tracking-tight text-gray-950 dark:text-white"
                >
                  Installation
                </h2>
                <TabBar
                  tabs={Object.entries(tabs).map(([title, url]) => ({
                    title,
                    url,
                  }))}
                />
              </div>
              {children}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}