import { TipCompat, TipHighlight, TipLearn, TipWarning } from "@/components/tips";
import { css, html, js, php, shell, Step, Tab } from "./utils";
import { type Page, type Tile } from "./utils";
import Logo from "@/docs/img/guides/react.react.svg";
import { CodeExample, CodeExampleStack } from "@/components/code-example";

export let tile: Tile = {
  title: "React.js",
  description: "A declarative, component-based JavaScript library for building interactive user interfaces.",
  type: "community",

  Logo,
};

export let page: Page = {
  title: "Install Tailwind CSS with React.js",
  description: "Setting up Tailwind CSS in a React.js project.",
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
