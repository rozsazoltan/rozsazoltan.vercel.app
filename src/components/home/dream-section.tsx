"use client";

import { Tab, TabGroup, TabList } from "@headlessui/react";
import clsx from "clsx";
import React from "react";
import GridContainer from "../grid-container";
import CategoryHeader from "./category-header";

export default function TailwindUiSection() {
  return (
    <div className="relative max-w-full">
      <div
        aria-hidden="true"
        className="hidden h-4 items-end px-2 font-mono text-xs/6 whitespace-pre text-black/30 max-sm:px-4 2xl:visible 2xl:flex dark:text-white/50"
      >
        <span className="inline">fn main() &#123; let _ = "dream".to_uppercase(); &#125;</span>
      </div>

      <CategoryHeader>
        <span className="text-indigo-600 dark:text-indigo-500">make it <span className="underline underline-offset-2">WORK</span>,</span>{" "}
        <span className="text-pink-600 dark:text-pink-500">make it <span className="underline underline-offset-2">RIGHT</span>,</span>{" "}
        <span className="text-yellow-600 dark:text-yellow-500">make it <span className="underline underline-offset-2">FAST</span></span>
      </CategoryHeader>

      <GridContainer>
        <h2 className="px-2 text-[2.5rem]/10 font-medium tracking-tighter max-sm:px-4 2xl:mt-0">
          Move your dreams into reality, let's build together
        </h2>
      </GridContainer>

      <div
        aria-hidden="true"
        className="flex h-6 items-end px-2 font-mono text-xs/6 whitespace-pre text-black/30 max-sm:px-4 sm:h-10 dark:text-white/50"
      >
        <span className="inline">git checkout reality && git merge --no-ff dream && git push origin reality</span>
      </div>

      <GridContainer>
        <p className="max-w-(--breakpoint-md) px-2 text-base/7 text-gray-600 max-sm:px-4 dark:text-gray-400">
          I efficiently utilize my logic in the design and implementation of complex systems. I have a strong understanding of structures and how to navigate them. I excel at integrating different platforms and applications. I communicate seamlessly with web applications, mobile apps, desktop software, browser extensions, and other scripts using PHP-based API interfaces.
        </p>
      </GridContainer>

      <GridContainer className="mt-10">
        <div className="px-2 max-sm:px-4">
          <a
            href="https://rozsazoltan.vercel.io/blog"
            className="inline-block rounded-4xl bg-black px-4 py-2 text-sm/6 font-semibold text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Explore more
          </a>
        </div>
      </GridContainer>
      <TabGroup>
        <GridContainer className="mt-16">
          <div className="mt-16 grid w-full overflow-x-hidden">
            <TabList className="grid grid-cols-[repeat(3,_minmax(125px,_1fr))] divide-x divide-gray-950/10 overflow-x-auto text-gray-950 dark:divide-white/10 dark:text-white">
              <TabButton className="data-selected:bg-indigo-500/5 data-selected:text-indigo-600 dark:data-selected:text-indigo-500">
                <div className="text-center xl:text-left">
                  <p className="font-mono text-sm font-semibold tracking-widest uppercase">Backend</p>
                  <p className="mt-2 hidden text-sm text-gray-600 lg:block dark:text-gray-400">
                    Using PHP and Laravel, I easily write central data management systems as cloud-based databases for applications on various platforms.
                  </p>
                </div>
              </TabButton>
              <TabButton className="data-selected:bg-pink-500/5 data-selected:text-pink-600 dark:data-selected:text-pink-500">
                <div className="text-center xl:text-left">
                  <p className="font-mono text-sm font-semibold tracking-widest uppercase">Frontend</p>
                  <p className="mt-2 hidden text-sm text-gray-600 lg:block dark:text-gray-400">
                    I excel at building applications with JavaScript, TailwindCSS, and various frameworks like Vue.js, React.js, Svelte, etc.
                  </p>
                </div>
              </TabButton>
              <TabButton className="data-selected:bg-yellow-500/5 data-selected:text-yellow-600 dark:data-selected:text-yellow-500">
                <div className="text-center xl:text-left">
                  <p className="font-mono text-sm font-semibold tracking-widest uppercase">API</p>
                  <p className="mt-2 hidden text-sm text-gray-600 lg:block dark:text-gray-400">
                    I connect applications with cloud-based services. I am proficient in database management and data optimization.
                  </p>
                </div>
              </TabButton>
            </TabList>
          </div>
        </GridContainer>
      </TabGroup>
    </div>
  );
}

export function TabButton(
  props: React.ComponentProps<typeof Tab> & {
    children: React.ReactNode;
    className?: string;
  },
) {
  return (
    <Tab
      className={clsx(
        "group flex items-center gap-4 p-4 text-sm/7 focus:outline-none max-lg:flex-col sm:p-6 lg:grid lg:grid-cols-[auto_1fr]",
        props.className,
      )}
      // {...props}
    >
      {props.children}
    </Tab>
  );
}
