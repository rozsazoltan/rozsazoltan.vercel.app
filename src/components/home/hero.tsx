"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import GridContainer from "../grid-container";
import { SearchButton } from "../search";
import cover from "./cover.png";
import { Editor } from "./editor";
import LinkButton from "./link-button";

import { CodeAnimation } from '../code-animation';
import type { Step } from '../code-animation';

const SYMBOL = { color: "var(--color-slate-400)" };
const ELEMENT = { color: "var(--color-green-400)" };
const KEYWORD = { color: "var(--color-slate-300)" };
const STRING = { color: "var(--color-blue-300)" };
const JS_KEYWORD = { color: "var(--color-red-400)" };
const JS_CONST = { color: "var(--color-fuchsia-300)" };
const VUE_INLINE = { color: "var(--color-blue-300)", opacity: .88 };
const HTML_INLINE = { color: "var(--color-blue-200)" };

const birthday = "Wed Aug 15, 2001";
const today = new Date().toLocaleDateString("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
});

const Hero: React.FC = () => {
  let [step, setStep] = useState(0);

  // Very small screens should never try to drag the editor into a wider view.
  let showResponsiveDemo = "window" in globalThis ? window.matchMedia("(min-width: 40rem)").matches : false;

  // We can not rely on starting animations when elements go into view on these
  // screens since the code might overflow and not be visible.
  let shouldAutostartTypingAnimations =
    "window" in globalThis ? window.matchMedia("(min-width: 48rem)").matches : false;

  function nextStep(stepIndex: number) {
    setStep(stepIndex + 1);
  }

  // Widen or shrink screen
  useEffect(() => {
    if ((step !== 7 && step !== 11 && step !== 12) || !showResponsiveDemo) return;
    let timeout = setTimeout(() => setStep(step + 1), step === 11 ? 1200 : 800);
    return () => clearTimeout(timeout);
  });

  const initialCode = `<script setup>
const birthday = "Wed Aug 15, 2001";
###step9###
</script>

<template>
  <div class="###step1###p-7 rounded-2xl">
    <img class="size-48 shadow-xl###step2###" alt="" src="/img/cover.png" />
    <div###step3###>
      <span###step5###>Rózsa Zoltán</span>
      <span>I enjoy coding and playing chess.</span>
      <span>{{ birthday }}###step10###</span>
    </div>
  </div>
</template>###step4######step6######step8###`;

  const steps: Step[] = [
    {
      text: `flex flex-col md:flex-row gap-4 items-center `,
    },
    {
      text: ` rounded-3xl`,
    },
    {
      text: ` class="flex flex-col"`,
    },
    {
      text: ``, // animation: to large screen
    },
    {
      text: ` class="font-bold text-xl lg:text-3xl###step7###"`,
    },
    {
      text: ``, // animation: to small screen
    },
    {
      text: ` text-rose-600 dark:text-rose-400`,
    },
    {
      text: ``, // animation: to large screen
    },
    {
      text: `const today = new Date().toLocaleDateString("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
});`,
    },
    {
      text: ` - {{ today }}`,
    },
  ];

  return (
    <div>
      <div
        aria-hidden="true"
        className="flex h-16 items-end px-2 font-mono text-xs/6 whitespace-pre text-black/30 max-sm:px-4 sm:h-24 dark:text-white/50"
      >
        <span className="inline">echo str_repeat("❤️", rand(1, 10));</span>
      </div>
      <GridContainer>
        <h1 className="px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl">
          Software Developer
        </h1>
      </GridContainer>
      <div
        aria-hidden="true"
        className="flex h-6 items-end px-2 font-mono text-xs/6 whitespace-pre text-black/30 max-sm:px-4 sm:h-10 dark:text-white/50"
      >
        <span className="inline">console.log(0.1 + 0.2 === 0.3 ? "Yay!" : "Nope, it's " + (0.1 + 0.2));</span>
      </div>
      <GridContainer>
        <p className="max-w-(--breakpoint-md) px-2 text-lg/7 font-medium text-gray-600 max-sm:px-4 dark:text-gray-400">
          I am a{" "}
          <span className="font-mono text-[1.0625rem] text-rose-500 dark:text-rose-400">PHP</span>{" "}
          and{" "}
          <span className="font-mono text-[1.0625rem] text-rose-500 dark:text-rose-400">JavaScript</span>{" "}
          developer. I primarily work with{" "}
          <span className="font-mono text-[1.0625rem] text-rose-500 dark:text-rose-400">Laravel</span>{" "}
          and{" "}
          <span className="font-mono text-[1.0625rem] text-rose-500 dark:text-rose-400">Vue.js</span>,{" "}
          but I also have extensive experience with other frameworks.
        </p>
      </GridContainer>
      <GridContainer className="mt-10 px-4 sm:hidden">
        <LinkButton href="docs/coming-soon" className="z-1 w-full text-center">
          Get started
        </LinkButton>
      </GridContainer>
      <GridContainer className="mt-4 sm:mt-10 sm:px-2">
        <div className="flex gap-4 max-sm:px-4">
          <LinkButton href="docs/coming-soon" className="z-1 max-sm:hidden">
            Get started
          </LinkButton>
          <SearchButton className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-1 rounded-full px-4 py-2 text-left text-sm/6 text-gray-950/50 inset-ring inset-ring-gray-950/8 sm:w-80 dark:bg-white/5 dark:text-white/50 dark:inset-ring-white/15">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="-ml-0.5 size-4 fill-gray-600 dark:fill-gray-500"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            Quick search
            <kbd className="hidden font-sans text-xs/4 text-gray-500 dark:text-gray-400 [.os-macos_&]:block">
              <span className="opacity-60">⌘</span>K
            </kbd>
            <kbd className="hidden font-sans text-xs/4 text-gray-500 not-[.os-macos_&]:block dark:text-gray-400">
              <span className="opacity-60">Ctrl</span>&nbsp;K
            </kbd>
          </SearchButton>
        </div>
      </GridContainer>
      <GridContainer className="mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-2 lg:-mx-px shadow-2xl shadow-black/25 dark:shadow-white/25 rounded-lg">
            <Editor title="Component.vue">
              <CodeAnimation 
                code={initialCode}
                language="html"
                steps={steps}
                duration={2000}
                onAfterStep={(_, api) => nextStep(api.currentStep)}
              />
            </Editor>
          </div>
          <div className="relative max-lg:h-66">
            <div className="absolute right-1/2 max-lg:bottom-8 max-md:translate-x-1/2 md:right-16 lg:top-1/2 lg:-translate-y-1/2 2xl:right-1/2 2xl:translate-x-[calc(50%-3rem)]">
              <Example step={step} />
            </div>
          </div>
        </div>
      </GridContainer>
    </div>
  );
};

export default Hero;

const TRANSITION = { duration: 0.35 };

function Example({ step }: { step: number }) {
  return (
    <motion.div
      layout={true}
      transition={TRANSITION}
      className={clsx(
        "@container rounded-3xl bg-black/5 p-2 outline outline-white/15 backdrop-blur-md dark:bg-white/10",
        step > 3 && ! [6, 7].includes(step) ? "w-[584px]" : "w-[262px] xl:ml-[3rem]",
      )}
    >
      <motion.div
        className={clsx(
          "relative flex w-full flex-col rounded-2xl bg-white outline outline-black/5 dark:bg-gray-950",
          step > 0 ? "items-center gap-4 p-7" : null,
          step > 3 && ! [6, 7].includes(step) ? "md:flex-row" : null,
        )}
        layout={true}
        transition={TRANSITION}
      >
        {step === 4 || step === 6 || step === 8 ? (
          <motion.div
            key={step}
            layout={true}
            className={clsx(
              "pointer-events-none absolute top-1/2 right-auto left-0 z-1 -mt-4 mr-0 -ml-4 rounded-full text-black",
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ default: TRANSITION, opacity: { duration: 1, times: [0, 0.5, 1] } }}
          >
            <svg className="size-8" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="rgba(255, 255, 255, 0.5)"
                strokeWidth="8"
                fill="rgba(0, 0, 0, 0.5)"
              />
            </svg>
          </motion.div>
        ) : null}

        <motion.img
          alt=""
          layout="position"
          transition={TRANSITION}
          className={clsx(
            "size-48 shadow-xl transition-[border-radius] duration-350 dark:outline-1 dark:-outline-offset-1 dark:outline-white/10",
            step > 1 ? "rounded-3xl" : null,
          )}
          src={cover.src}
          width={192}
          height={192}
        />
        <motion.div
          className={clsx(
            step > 2 ? "flex flex-col" : null,
          )}
          layout={true}
          transition={TRANSITION}
        >
          <motion.span
            layout="position"
            transition={TRANSITION}
            className={clsx(
              "transition-[font-size,color] duration-350 font-bold",
              step > 4 ? "text-xl lg:text-3xl" : null,
              step > 6 ? "text-rose-600 dark:text-rose-400" : null,
            )}
          >
            Rózsa Zoltán
          </motion.span>
          <motion.span
            transition={TRANSITION}
            layout="position"
            className={clsx(
              "transition-colors duration-350",
            )}
          >
            I enjoy coding and playing chess.
          </motion.span>
          <motion.span
            layout="position"
            transition={TRANSITION}
            className={clsx(
              "transition-colors duration-350",
            )}
          >
            <motion.span layout="position" transition={TRANSITION}>
              <span>{birthday}</span>
              {step > 9 && (
                <motion.span
                  transition={TRANSITION}
                  layout="position"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {" - "}{today}
                </motion.span>
              )}
            </motion.span>
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
