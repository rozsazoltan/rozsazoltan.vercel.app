import { type Page, type Tile } from "./utils";
import Logo from "@/docs/img/guides/nextjs.react.svg";
import LogoDark from "@/docs/img/guides/nextjs-white.react.svg";

export let tile: Tile = {
  title: "Next.js",
  description: "Full-featured React framework with great developer experience.",
  type: "official",
  external: "https://tailwindcss.com/docs/installation/framework-guides/nextjs",
  trending: true,

  Logo,
  LogoDark,
};

export let page: Page = {
  title: "Install Tailwind CSS with Next.js",
  description: "Setting up Tailwind CSS in a Next.js project.",
};
