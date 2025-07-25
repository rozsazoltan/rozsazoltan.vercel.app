import { TipCompat, TipHighlight, TipLearn, TipWarning } from "@/components/tips";
import { css, html, js, shell, Step, Tab } from "./utils";
import { type Page, type Tile } from "./utils";
import Logo from "@/docs/img/guides/postcss.react.svg";
import { CodeExample, CodeExampleStack } from "@/components/code-example";

export let tile: Tile = {
  title: "PostCSS",
  description: "Use Tailwind as a PostCSS plugin in flexible or legacy build pipelines.",

  Logo,
};

export let page: Page = {
  title: "Install Tailwind CSS with PostCSS plugin",
  description: "Setting up Tailwind CSS with PostCSS in a Node.js project.",
};

export let tabs: Tab[] = [
  {
    slug: "vite",
    title: "Using Vite",
  },
  {
    slug: "postcss",
    title: "Using PostCSS",
  },
];

export let steps: Step[] = [
  {
    tabs: ["vite"],
    title: "Install Tailwind CSS",
    body: (
      <p>
        Install <code>tailwindcss</code> and <code>@tailwindcss/vite</code> via npm.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install tailwindcss @tailwindcss/vite
      `,
    },
  },
];
