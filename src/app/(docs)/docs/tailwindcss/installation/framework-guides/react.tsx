import { Step, Tab } from "./utils";
import { type Page, type Tile } from "./utils";
import Logo from "@/docs/img/guides/react.react.svg";
import { CodeExample, CodeExampleStack } from "@/components/code-example";
import dedent from "dedent";

export let tile: Tile = {
  title: "React.js",
  description: "A declarative, component-based JavaScript library for building interactive user interfaces.",

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
        # Templates: react, react-ts, react-swc, react-swc-ts
        npm create vite@latest my-project -- --template react-ts
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
        import react from '@vitejs/plugin-react'

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss(),
            react(),
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
      name: "src/index.css",
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
      name: "App.tsx",
      lang: "js",
      code: (
        <CodeExampleStack className="[&_.shiki]:max-h-96">
          <CodeExample
            filename="src/App.tsx"
            example={{
              lang: 'js',
              code: dedent`
                import './App.css'

                export default function Home() {
                  return (
                    /* [!code highlight:4] */
                    <h1 className="text-3xl font-bold underline">
                      Hello world!
                    </h1>
                  )
                }
              `,
            }}
          />
          <CodeExample
            filename="src/App.css"
            example={{
              lang: 'css',
              code: dedent`
                h1 {
                  /* [!code highlight:2] */
                  color: var(--text-sky-500);
                }
              `,
            }}
          />
        </CodeExampleStack>
      )
    },
  },
];
