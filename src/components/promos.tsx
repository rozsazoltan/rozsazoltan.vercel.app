"use client";

import Image from "next/image";
import { useEffect, useState, type ReactElement } from "react";
import bookPromo from "./book-promo.png";
import coursePromo from "./course-promo.jpg";
// import LinkButton from "./home/link-button";

import clsx from "clsx";
import Link from "next/link";
import React from "react";

function Sponsor({ name }: { name: string }) {
  const texts = [
    "Shared with love,\nno money involved 💬❤️",
    "Not paid, just pure love ❤️✨",
    "Not paid, just pure love ❤️✨",
    "Not paid, just pure love ❤️✨",
    "Not paid, just pure love ❤️✨",
    "Not paid, just pure love ❤️✨",
    "No sponsorship, just admiration 🙌❤️",
    "Unpaid, heartfelt recommendation ❤️",
    "Promoted with passion,\nnot payment 🌟❤️",
    "Pure appreciation,\nno ads involved 🎁❤️",
    "Supporting what we love,\nfreely ❤️🌱",
    "Celebrating great work,\nno strings attached 🎉❤️",
  ]

  const randomText = texts[Math.floor(Math.random() * texts.length)]

  return (
    <div className="mt-4 px-2 flex flex-col gap-1">
      <span className="text-sm lg:text-xs">Sponsored, but...</span>
      <span className="text-sm lg:text-xs text-gray-900 opacity-80">
        {randomText.split("\n").map((line, idx) => (
          <span key={idx}>
            {line}
            <br />
          </span>
        ))}
      </span>
      <span className="mt-2 text-sm lg:text-xs">❤️ {name}</span>
    </div>
  )
}

export function BlogPromo() {
  return (
    <a href="/blog" className="group">
      <div className="mt-12 flex flex-col items-center justify-center">
        <div className="relative origin-center -translate-x-3 rotate-6 p-6 duration-500 group-hover:rotate-0">
          <div className="absolute top-4 left-0 h-px w-full bg-[linear-gradient(to_right,_transparent_0%,_var(--gradient-bg)_9.27%,_var(--gradient-bg)_90.7%,_transparent_100%)] [--gradient-bg:var(--color-black)]/15 dark:[--gradient-bg:var(--color-white)]/10"></div>
          <div className="absolute top-0 left-4 h-full w-px bg-[linear-gradient(to_bottom,_transparent_0%,_var(--gradient-bg)_9.27%,_var(--gradient-bg)_90.7%,_transparent_100%)] [--gradient-bg:var(--color-black)]/15 dark:[--gradient-bg:var(--color-white)]/10"></div>
          <Image
            src="/api/og?path=/blog"
            alt="Refactoring UI"
            width={128}
            height={171.2}
            className="shadow-[-5px_10px_15px_-3px_var(--shadow-color),_-5px_4px_6px_-4px_var(--shadow-color)] duration-500 [--shadow-color:var(--color-black)]/10 dark:[--shadow-color:var(--color-black)]"
          />
          <div className="absolute top-0 right-4 h-full w-px bg-[linear-gradient(to_bottom,_transparent_0%,_var(--gradient-bg)_9.27%,_var(--gradient-bg)_90.7%,_transparent_100%)] [--gradient-bg:var(--color-black)]/15 dark:[--gradient-bg:var(--color-white)]/10"></div>
          <div className="absolute bottom-4 left-0 h-px w-full bg-[linear-gradient(to_right,_transparent_0%,_var(--gradient-bg)_9.27%,_var(--gradient-bg)_90.7%,_transparent_100%)] [--gradient-bg:var(--color-black)]/15 dark:[--gradient-bg:var(--color-white)]/10"></div>
        </div>
      </div>
      <p className="text-[0.815rem]/6 font-semibold text-rose-500 dark:text-rose-400">
        Just me, building stuff I believe in
      </p>
      <p className="mt-1.5 text-base/5 font-semibold text-gray-950 dark:text-white">Because coding isn't just work.</p>
      <p className="mt-3 text-[0.8125rem]/5 text-gray-600 dark:text-gray-400">
        Detailed guides, opinions, and tips about popular frameworks and languages. And much more - whatever comes to mind.
      </p>
      <Sponsor name="Zoltán Rózsa" />
    </a>
  );
}

export function BookPromo() {
  return (
    <a href="https://www.refactoringui.com/?ref=sidebar" className="group">
      <div className="mt-12 flex flex-col items-center justify-center">
        <div className="relative origin-center -translate-x-3 rotate-6 p-6 duration-500 group-hover:rotate-0">
          <div className="absolute top-4 left-0 h-px w-full bg-[linear-gradient(to_right,_transparent_0%,_var(--gradient-bg)_9.27%,_var(--gradient-bg)_90.7%,_transparent_100%)] [--gradient-bg:var(--color-black)]/15 dark:[--gradient-bg:var(--color-white)]/10"></div>
          <div className="absolute top-0 left-4 h-full w-px bg-[linear-gradient(to_bottom,_transparent_0%,_var(--gradient-bg)_9.27%,_var(--gradient-bg)_90.7%,_transparent_100%)] [--gradient-bg:var(--color-black)]/15 dark:[--gradient-bg:var(--color-white)]/10"></div>
          <Image
            src={bookPromo}
            alt="Refactoring UI"
            width={128}
            height={171.2}
            className="shadow-[-5px_10px_15px_-3px_var(--shadow-color),_-5px_4px_6px_-4px_var(--shadow-color)] duration-500 [--shadow-color:var(--color-black)]/10 dark:[--shadow-color:var(--color-black)]"
          />
          <div className="absolute top-0 right-4 h-full w-px bg-[linear-gradient(to_bottom,_transparent_0%,_var(--gradient-bg)_9.27%,_var(--gradient-bg)_90.7%,_transparent_100%)] [--gradient-bg:var(--color-black)]/15 dark:[--gradient-bg:var(--color-white)]/10"></div>
          <div className="absolute bottom-4 left-0 h-px w-full bg-[linear-gradient(to_right,_transparent_0%,_var(--gradient-bg)_9.27%,_var(--gradient-bg)_90.7%,_transparent_100%)] [--gradient-bg:var(--color-black)]/15 dark:[--gradient-bg:var(--color-white)]/10"></div>
        </div>
      </div>
      <p className="text-[0.815rem]/6 font-semibold text-sky-500 dark:text-sky-400">
        From the creators of Tailwind CSS
      </p>
      <p className="mt-1.5 text-[0.9375rem]/5 font-semibold text-gray-950 dark:text-white">
        Make your ideas look awesome, without relying on a designer.
      </p>
      <blockquote className="mt-6 border-l border-black/5 pl-4 text-gray-600 dark:border-white/10 dark:text-gray-400">
        <p className="text-[0.8125rem]/5 [hanging-punctuation:first_last]">
          “This is the survival kit I wish I had when I started building apps.”
        </p>
        <p className="mt-3 text-xs">Derrick Reimer, SavvyCal</p>
      </blockquote>
      <Sponsor name="Tailwind CSS" />
    </a>
  );
}

export function CoursePromo() {
  return (
    <div className="group relative">
      <div className="mt-12 flex flex-col items-center justify-center">
        <div className="relative origin-center -translate-x-3 rotate-6 p-6 duration-500 group-hover:rotate-0">
          <div className="absolute top-4 left-0 h-px w-full bg-[linear-gradient(to_right,_transparent_0%,_var(--gradient-bg)_9.27%,_var(--gradient-bg)_90.7%,_transparent_100%)] [--gradient-bg:var(--color-black)]/15 dark:[--gradient-bg:var(--color-white)]/10"></div>
          <div className="absolute top-0 left-4 h-full w-px bg-[linear-gradient(to_bottom,_transparent_0%,_var(--gradient-bg)_9.27%,_var(--gradient-bg)_90.7%,_transparent_100%)] [--gradient-bg:var(--color-black)]/15 dark:[--gradient-bg:var(--color-white)]/10"></div>
          <Image
            src={coursePromo}
            alt="Build UIs that don’t suck — 5-day mini-course"
            width={192}
            height={108}
            className="shadow-[-5px_10px_15px_-3px_var(--shadow-color),_-5px_4px_6px_-4px_var(--shadow-color)] duration-500 [--shadow-color:var(--color-black)]/10 dark:[--shadow-color:var(--color-black)]"
          />
          <div className="absolute top-0 right-4 h-full w-px bg-[linear-gradient(to_bottom,_transparent_0%,_var(--gradient-bg)_9.27%,_var(--gradient-bg)_90.7%,_transparent_100%)] [--gradient-bg:var(--color-black)]/15 dark:[--gradient-bg:var(--color-white)]/10"></div>
          <div className="absolute bottom-4 left-0 h-px w-full bg-[linear-gradient(to_right,_transparent_0%,_var(--gradient-bg)_9.27%,_var(--gradient-bg)_90.7%,_transparent_100%)] [--gradient-bg:var(--color-black)]/15 dark:[--gradient-bg:var(--color-white)]/10"></div>
          <div className="absolute inset-6 flex items-center justify-center">
            <div className="flex size-10 items-center justify-center rounded-full bg-white/30 outline -outline-offset-6 outline-white">
              <svg className="size-3" viewBox="0 0 17 17" fill="none">
                <path
                  d="M15.6046 7.34153C15.7244 7.40665 15.8243 7.50204 15.8938 7.61779C15.9633 7.73354 16 7.86544 16 7.99978C16 8.13413 15.9633 8.26602 15.8938 8.38178C15.8243 8.49753 15.7244 8.59292 15.6046 8.65804L4.13974 14.9054C4.02291 14.969 3.89117 15.0016 3.75756 14.9999C3.62395 14.9983 3.4931 14.9624 3.37797 14.8959C3.26283 14.8294 3.16739 14.7346 3.10109 14.6208C3.0348 14.507 2.99995 14.3782 3 14.2472V1.7524C3 1.17843 3.62818 0.817196 4.13974 1.09615L15.6046 7.34153Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="text-[0.8125rem]/6 font-semibold text-sky-500 dark:text-sky-400">5-day mini-course</p>
      <p className="mt-1.5 text-base/5 font-semibold text-gray-950 dark:text-white">Build UIs that don't suck.</p>
      <p className="mt-3 text-[0.8125rem]/5 text-gray-600 dark:text-gray-400">
        Short, tactical video lessons from the creator of Tailwind CSS, delivered directly to your inbox every day for a
        week.
      </p>

      <Sponsor name="Tailwind CSS" />
    </div>
  );
}

export default function LinkButton({
  className,
  children,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        className,
        "inline-block rounded-4xl bg-black px-3.5 py-1.25 text-[0.8125rem]/6 font-semibold text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600",
      )}
    >
      {children}
    </Link>
  );
}

export function RandomPromo() {
  const [PromoComponent, setPromoComponent] = useState<ReactElement | null>(null);

  useEffect(() => {
    const components = [
      BlogPromo,      
      BookPromo,
      CoursePromo,
    ]
    const RandomComponent = components[Math.floor(Math.random() * components.length)]
    setPromoComponent(<RandomComponent />);
  }, []);

  return PromoComponent;
}
