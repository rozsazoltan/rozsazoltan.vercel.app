import { Cta } from "@/components/cta";
import { type Step, Steps } from "@/components/installation-steps";
import dedent from "dedent";
import { Metadata } from "next";
import Link from "next/link";
import { TipCompat } from "@/components/tips";

export const metadata: Metadata = {
  title: "What's new from Vue 3",
  description:
    "...",
  openGraph: {
    type: "article",
    title: "What's new",
    description: "...",
    images: "https://rozsazoltan.vercel.app/api/og?path=/docs/vuejs/installation/whats-new",
    url: "https://rozsazoltan.vercel.app/docs/vuejs/installation/whats-new",
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
          What's new in Vue 3
        </h3>

        <div className="mb-8">
          <TipCompat>
            The site is under development, so some information may be incomplete or unavailable.
          </TipCompat>
        </div>
      </div>
    </>
  );
}