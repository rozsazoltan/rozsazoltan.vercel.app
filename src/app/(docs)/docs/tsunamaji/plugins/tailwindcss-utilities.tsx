import { Step, Tab } from "./utils";
import { type Page, type Tile } from "./utils";
import Logo from "@/docs/img/guides/tsunamaji.react.svg";
import dedent from "dedent";

export let tile: Tile = {
  title: "Tailwind Utilities",
  description: "Shipping utilities for multiple standard CSS properties, based on the baseline.",

  Logo,
};

export let page: Page = {
  title: "Install Tailwind Utilities (by Tsunamaji)",
  description: "The plugin's purpose is to extend the utility set provided by TailwindCSS. The extension is designed so that each project can use only the parts that fit its specific requirements. Some utilities require higher minimum browser versions; this is indicated in the documentation, but the baseline also helps determine which ones you need during import. The goal is to provide these utilities before the CSS properties become widely supported in browsers, even after several years of introduction.",
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
