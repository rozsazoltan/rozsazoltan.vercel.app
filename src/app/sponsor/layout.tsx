import React from "react";
import { Header } from "@/components/header";

export default async function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <div className="fixed inset-x-0 top-0 z-10 border-b border-black/5 dark:border-white/10">
        <Header />
      </div>
      <div className="grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center pt-14.25 [--gutter-width:2.5rem] lg:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)]">
        {/* Candy cane */}
        <div className="col-start-1 row-span-full row-start-1 hidden lg:block"></div>

        {/* Main content area */}
        <div className="text-gray-950 dark:text-white">{children}</div>

        {/* Candy cane */}
        <div className="row-span-full row-start-1 hidden lg:col-start-3 lg:block"></div>
      </div>
    </div>
  );
}
