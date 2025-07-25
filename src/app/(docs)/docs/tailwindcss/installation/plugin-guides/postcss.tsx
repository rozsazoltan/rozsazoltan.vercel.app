import { Step } from "./utils";
import { type Page, type Tile } from "./utils";
import Logo from "@/docs/img/guides/postcss.react.svg";
import dedent from "dedent";

export let tile: Tile = {
  title: "PostCSS",
  description: "Use Tailwind as a PostCSS plugin in flexible or legacy build pipelines.",

  Logo,
};

export let page: Page = {
  title: "Install Tailwind CSS with PostCSS plugin",
  description: "Installing Tailwind CSS as a PostCSS plugin is the most seamless way to integrate it with frameworks like Next.js and Angular.",
};

export let steps: Step[] = [
  {
    title: "Install Tailwind CSS",
    body: (
      <p>
        Install <code>tailwindcss</code>, <code>@tailwindcss/postcss</code>, and <code>postcss</code> via npm.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: dedent`
        npm install tailwindcss @tailwindcss/postcss postcss
      `,
    },
  },
  {
    title: "Add Tailwind to your PostCSS configuration",
    body: (
      <p>
        Add <code>@tailwindcss/postcss</code> to your <code>postcss.config.mjs</code> file, or wherever PostCSS is
        configured in your project.
      </p>
    ),
    code: {
      name: "postcss.config.mjs",
      lang: "js",
      code: dedent`
        export default {
          plugins: {
            // [!code highlight:2]
            "@tailwindcss/postcss": {},
          }
        }
      `,
    },
  },
  {
    title: "Import Tailwind CSS",
    body: (
      <p>
        Add an <code>@import</code> to your CSS file that imports Tailwind CSS.
      </p>
    ),
    code: {
      name: "CSS",
      lang: "css",
      code: dedent`
        @import "tailwindcss";
      `,
    },
  },
  {
    title: "Start your build process",
    body: (
      <p>
        Run your build process with <code>npm run dev</code> or whatever command is configured in your{" "}
        <code>package.json</code> file.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: dedent`
        npm run dev
      `,
    },
  },
  {
    title: "Start using Tailwind in your HTML",
    body: (
      <p>
        Make sure your compiled CSS is included in the <code>{"<head>"}</code>{" "}
        <em>(your framework might handle this for you)</em>, then start using Tailwind’s utility classes to style your
        content.
      </p>
    ),
    code: {
      name: "HTML",
      lang: "html",
      code: dedent`
        <!doctype html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <!-- [!code highlight:2] -->
          <link href="/dist/styles.css" rel="stylesheet">
        </head>
        <body>
          <!-- [!code highlight:4] -->
          <h1 class="text-3xl font-bold underline">
            Hello world!
          </h1>
        </body>
        </html>
      `,
    },
  },
];
