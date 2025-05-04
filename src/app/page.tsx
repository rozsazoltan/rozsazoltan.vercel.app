import { FooterSitemap, FooterMeta } from "@/components/footer";
import { Header } from "@/components/header";
import Hero from "@/components/home/hero";
import GridContainer from "@/components/grid-container";
import DreamSection from "@/components/home/dream-section";

export default function Home() {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <div className="fixed inset-x-0 top-0 z-10 border-b border-black/5 dark:border-white/10">
        <Header />
      </div>
      <div className="grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center pt-14.25 [--gutter-width:2.5rem] md:-mx-4 md:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)] lg:mx-0">
        {/* Candy cane */}
        <div className="col-start-1 row-span-full row-start-1 hidden md:block"></div>

        {/* Main content area */}
        <div className="grid gap-24 pb-24 text-gray-950 sm:gap-40 md:pb-40 dark:text-white">
          <Hero />
          <DreamSection />
        </div>

        {/* Candy cane */}
        <div className="row-span-full row-start-1 hidden md:block"></div>

        <GridContainer className="col-start-1 row-start-3 md:col-start-2" withFrame>
          <FooterSitemap className="*:first:border-l-0 *:last:border-r-0" />
        </GridContainer>

        <div className="col-start-1 row-start-5 grid md:col-start-2">
          <FooterMeta className="px-4 md:px-6 lg:px-8" />
        </div>
      </div>
      <div className="fixed!" aria-hidden="true">
        <input type="text" tabIndex={-1} />
      </div>
    </div>
  );
}
