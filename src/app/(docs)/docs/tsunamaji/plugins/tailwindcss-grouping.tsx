import { Step, Tab } from "./utils";
import { type Page, type Tile } from "./utils";
import Logo from "@/docs/img/guides/tsunamaji.react.svg";
import dedent from "dedent";

export let tile: Tile = {
  title: "Tailwind Grouping",
  description: "Drop the variant repetition and group them without any additional drawbacks.",

  Logo,
};

export let page: Page = {
  title: "Install Tailwind Grouping (by Tsunamaji)",
  description: "The plugin's purpose is to consolidate variant repetitions. For example, instead of writing `lg:p-12 lg:bg-emerald-300 lg:text-emerald-500 lg:dark:bg-emerald-800 lg:dark:text-emerald-500`, it enforces the following: `lg:(p-12,bg-emerald-300,text-emerald-500,dark:(bg-emerald-800,text-emerald-500))`. In general, this would result in larger generated CSS, but with our plugin, it does not.",
};

export let tabs: Tab[] = [
  {
    slug: "node",
    title: "Using Node.js",
  },
  {
    slug: "play-esm",
    title: "Play ESM (esm.sh)",
  },
  {
    slug: "play-cdn",
    title: "Play CDN",
  },
];

export let steps: Step[] = [
  {
    title: "Coming soon",
    body: (
      <p>
        The plugin is under development.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: dedent`
        check-plugin-status
        
        > [PluginLoader] ⚠️ Warning: Plugin not ready yet!
        > Status: 🐢 Slow-cooking in the dev kitchen...
      `,
    },
  },
];
