import { Step, Tab } from "./utils";
import { type Page, type Tile } from "./utils";
import Logo from "@/docs/img/guides/vue.react.svg";
import dedent from "dedent";

export let tile: Tile = {
  title: "Vue.js",
  description: "A lightweight, progressive framework for building user interfaces.",

  Logo,
};

export let page: Page = {
  title: "Install Tailwind CSS with Vue.js",
  description: "Setting up Tailwind CSS in a Vue.js project.",
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
    title: "Create your project",
    body: (
      <p>
        Start by creating a new Vite project if you don't have one set up already. The most common approach is to use{" "}
        <a href="https://vite.dev/guide/#scaffolding-your-first-vite-project">Create Vite</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: dedent`
        # Templates: vue, vue-ts
        npm create vite@latest my-project -- --template vue-ts
        cd my-project
      `,
    },
  },
  {
    tabs: ['vite'],
    title: "Install Tailwind CSS",
    body: (
      <p>
        Install <code>tailwindcss</code> and <code>@tailwindcss/vite</code> via npm.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: dedent`
        npm install tailwindcss @tailwindcss/vite
      `,
    },
  },
  {
    tabs: ['vite'],
    title: "Configure the Vite plugin",
    body: (
      <p>
        Add the <code>@tailwindcss/vite</code> plugin to your Vite configuration.
      </p>
    ),
    code: {
      name: "vite.config.ts",
      lang: "js",
      code: dedent`
        import { defineConfig } from 'vite'
        // [!code highlight:2]
        import tailwindcss from '@tailwindcss/vite'
        import vue from '@vitejs/plugin-vue'

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss(),
            vue(),
          ],
        })
      `,
    },
  },
  {
    tabs: ['postcss'],
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
    tabs: ['postcss'],
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
      name: "src/style.css",
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
        Run your build process with <code>npm run dev</code>.
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
        Start using Tailwind's utility classes to style your content.
      </p>
    ),
    code: {
      name: "src/App.vue",
      lang: "html",
      code: dedent`
        <template>
          <div>
            <!-- [!code highlight:4] -->
            <h1 class="text-3xl font-bold underline">
              Hello world!
            </h1>
          </div>
        </template>

        <style scoped>
        h1 {
          /* [!code highlight:2] */
          color: var(--text-sky-500);
        }
        </style>
      `,
    },
  },
];
