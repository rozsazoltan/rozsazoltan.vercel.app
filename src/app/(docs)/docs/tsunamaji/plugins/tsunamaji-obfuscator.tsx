import { Step, Tab } from "./utils";
import { type Page, type Tile } from "./utils";
import Logo from "@/docs/img/guides/tsunamaji.react.svg";
import dedent from "dedent";

export let tile: Tile = {
  title: "Obfuscator",
  description: "Build transparently and consistently, ship concisely and in an obfuscated form.",

  Logo,
};

export let page: Page = {
  title: "Install Tsunamaji Obfuscator (for CSS)",
  description: "The plugin's purpose is to hide and shorten the class names in production code, making the code as short as possible and less easily copied. Although the plugin was primarily created for TailwindCSS users, it can also be used in any other CSS system, or even with plain native CSS.",
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
