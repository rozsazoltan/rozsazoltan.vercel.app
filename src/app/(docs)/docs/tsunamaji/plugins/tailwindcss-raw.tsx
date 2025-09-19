import { TipWarning } from "@/components/tips";
import { Step, Tab } from "./utils";
import { type Page, type Tile } from "./utils";
import Logo from "@/docs/img/guides/tailwindcss.react.svg";
import { CodeExampleGroup, CodeBlock, sh } from "@/components/code-example";
import { TabPanel } from '@headlessui/react';
import dedent from "dedent";

export let tile: Tile = {
  title: "Tailwind Raw",
  description: "Enable RAW HTML source so you can generate CSS not only from files but also directly from HTML.",

  Logo,
};

export let page: Page = {
  title: "Install Tailwind Raw (by Tsunamaji)",
  description: "The plugin's purpose is to provide functions where you pass in your RAW HTML code and CSS configuration, and receive the generated CSS as output. This allows you to produce the appropriate styles at runtime for any HTML code - for example, blog content, dynamic components, and much more. Unlike Tailwind CSS, which mainly serves developers during build time, Tailwind Raw is designed to be with you in production. Generate and apply styles at runtime - dynamic, flexible, and always ready.",
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
    tabs: ["node"],
    title: "Install Tailwind CSS",
    body: (
      <p>
        Install <code>@tsunamaji/tailwindcss-raw</code> via npm.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: dedent`
        npm install @tsunamaji/tailwindcss-raw
      `,
    },
  },
  {
    title: "Pass your RAW HTML string to Tsunamaji",
    body: (
      <p>
        Call the <code>compileTw</code> function, passing in your HTML, and it will return the generated CSS.
      </p>
    ),
    code: {
      name: "src/page.js",
      lang: "js",
      code: dedent`
        compileTw(
          \`<div class="text-lg bg-emerald-500">Lorem Ipsum</div>\`,
        )
        .then((css) => console.log(css));
      `,
    },
  },
  {
    title: "You can optionally pass your custom configuration",
    body: (
      <>
        <p>
          If your CSS code is missing or does not contain <code>@import</code>, then <code>@import "tailwindcss";</code> will be added by default.
        </p>
        <p>
          Additionally, you can pass extra CSS.
        </p>
      </>
    ),
    code: {
      name: "src/page.js",
      lang: "js",
      code: dedent`
        compileTw(
          \`<div class="text-lg bg-tsunamaji">Lorem Ipsum</div>\`,
          // [!code highlight:4]
          \`@theme {
            --color-tsunamaji: #77c69e;
          }\`,
        )
        .then((css) => console.log(css));
      `,
    },
  },
  {
    tabs: ["standalone"],
    title: "Start the Tailwind CLI build process",
    body: (
      <p>
        Run the executable CLI tool to scan your source files for classes and build your CSS.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: (
        <CodeExampleGroup filenames={["Windows", "macOS", "Linux"]}>
          <CodeBlock
            example={sh`
              ./tailwindcss.exe -i ./src/input.css -o ./src/output.css --watch
            `}
          />
          <CodeBlock
            example={sh`
              ./tailwindcss -i ./src/input.css -o ./src/output.css --watch
            `}
          />
          <CodeBlock
            example={sh`
              ./tailwindcss -i ./src/input.css -o ./src/output.css --watch
            `}
          />
        </CodeExampleGroup>
      )
    }
  },
  {
    title: "Start using Tailwind in your HTML",
    body: (
      <p>
        Add the <code>@import "tailwindcss";</code> import to your main CSS file.
      </p>
    ),
    code: {
      name: "src/index.html",
      lang: "html",
      code: dedent`
        <!doctype html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <!-- [!code highlight:2] -->
          <link href="./output.css" rel="stylesheet">
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
