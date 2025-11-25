import { Step, Tab } from "./utils";
import { type Page, type Tile } from "./utils";
import Logo from "@/docs/img/guides/tsunamaji.react.svg";
import dedent from "dedent";

export let tile: Tile = {
  title: "UI Lab",
  description: "The foundation for building your own UI libraries.",

  Logo,
};

export let page: Page = {
  title: "Install Tsunamaji UI Lab",
  description: "This toolkit provides a structured, reliable environment for building and maintaining your own UI libraries. It handles scaffolding, build pipelines, conventions, and automation so you can focus entirely on the components themselves. Whether you're working in a monorepo or publishing packages, it ensures consistency, scalability, and developer-friendly workflows.",
};

export let tabs: Tab[] = [
  {
    slug: "node",
    title: "Using Node.js",
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
