import { type Page, type Tile } from "./utils";
import Logo from "@/docs/img/guides/svelte.react.svg";

export let tile: Tile = {
  title: "SvelteKit",
  description: "The fastest way to build apps of all sizes with Svelte.js.",
  external: "https://tailwindcss.com/docs/installation/framework-guides/sveltekit",

  Logo,
};

export let page: Page = {
  title: "Install Tailwind CSS with SvelteKit",
  description: "Setting up Tailwind CSS in a SvelteKit project.",
};
