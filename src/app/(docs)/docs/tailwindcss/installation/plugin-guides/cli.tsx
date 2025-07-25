import { TipCompat, TipHighlight, TipLearn, TipWarning } from "@/components/tips";
import { css, html, js, shell, Step, Tab } from "./utils";
import { type Page, type Tile } from "./utils";
import Logo from "@/docs/img/guides/tailwindcss.react.svg";
import { CodeExample, CodeExampleStack } from "@/components/code-example";
import { CodeExampleGroup, CodeBlock, sh } from "@/components/code-example";
import { TabPanel } from '@headlessui/react';

export let tile: Tile = {
  title: "Tailwind CLI",
  description: "The simplest way to use Tailwind - no build tools required. Great for quick setups and small projects.",

  Logo,
};

export let page: Page = {
  title: "Install Tailwind CSS with CLI",
  description: "Setting up Tailwind CLI in a Node.js project.",
};

export let tabs: Tab[] = [
  {
    slug: "node",
    title: "Using Node.js",
  },
  {
    slug: "standalone",
    title: "Standalone",
  },
];

export let steps: Step[] = [
  {
    tabs: ["node"],
    title: "Install Tailwind CSS",
    body: (
      <p>
        Install <code>tailwindcss</code> and <code>@tailwindcss/cli</code> via npm.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install tailwindcss @tailwindcss/cli
      `,
    },
  },
  {
    tabs: ["standalone"],
    title: "Download executable",
    body: (
      <p>
        Downloading the executable file - including the <code>tailwindcss</code> and <code>@tailwindcss/cli</code> Node.js packages - for your operating system.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: (
        <CodeExampleGroup filenames={["Windows", "macOS", "Linux", "Direct URLs"]}>
          <TabPanel key="Windows">
            <CodeExampleGroup filenames={["PowerShell", "Command Prompt"]}>
              <CodeBlock
                example={sh`
                  # Download Tailwind CSS standalone
                  # [!code highlight:2]
                  Invoke-WebRequest -Uri "https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-windows-x64.exe" -OutFile "tailwindcss.exe"
                  
                  # Make it executable (if needed)
                  # No additional permissions needed on Windows
                `}
              />
              <CodeBlock
                example={sh`
                  REM Download Tailwind CSS standalone using curl (Windows 10 1803+)
                  # [!code highlight:2]
                  curl -L -o tailwindcss.exe https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-windows-x64.exe
                `}
              />
            </CodeExampleGroup>
          </TabPanel>
          <TabPanel>
            <CodeExampleGroup filenames={["ARM (M1/M2/M3)", "Intel"]}>
              <CodeBlock
                example={sh`
                  # Download for macOS ARM (M1/M2/M3)
                  # [!code highlight:2]
                  curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-arm64
                  chmod +x tailwindcss-macos-arm64
                  mv tailwindcss-macos-arm64 tailwindcss
                `}
              />
              <CodeBlock
                example={sh`
                  # Download for macOS Intel
                  # [!code highlight:2]
                  curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-x64
                  chmod +x tailwindcss-macos-x64
                  mv tailwindcss-macos-x64 tailwindcss
                `}
              />
            </CodeExampleGroup>
          </TabPanel>
          <TabPanel>
            <CodeExampleGroup filenames={["x64", "ARM64"]}>
              <CodeBlock
                example={sh`
                  # Download for Linux x64
                  # [!code highlight:2]
                  curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-x64
                  chmod +x tailwindcss-linux-x64
                  mv tailwindcss-linux-x64 tailwindcss
                `}
              />
              <CodeBlock
                example={sh`
                  # Download for Linux ARM64
                  # [!code highlight:2]
                  curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-arm64
                  chmod +x tailwindcss-linux-arm64
                  mv tailwindcss-linux-arm64 tailwindcss
                `}
              />
            </CodeExampleGroup>
          </TabPanel>
          <TabPanel>
            <div className="p-4 text-white/80">
              Direct download URLs for all platforms:
              <ul className="py-2 list-inside list-disc [&_a]:text-sky-500 [&_a]:hover:underline">
                <li><a href="https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-windows-x64.exe" target="_blank">Windows x64</a></li>
                <li><a href="https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-arm64" target="_blank">macOS ARM (M1/M2/M3)</a></li>
                <li><a href="https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-x64" target="_blank">macOS Intel</a></li>
                <li><a href="https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-arm64" target="_blank">Linux ARM64</a></li>
                <li><a href="https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-x64" target="_blank">Linux x64</a></li>
              </ul>
              <div className="pt-2 dark rounded-lg">
                <TipWarning>The link directly starts the download of the specified executable.</TipWarning>
              </div>
            </div>
          </TabPanel>
        </CodeExampleGroup>
      )
    }
  },
  {
    title: "Import Tailwind in your CSS",
    body: (
      <p>
        Add the <code>@import "tailwindcss";</code> import to your main CSS file.
      </p>
    ),
    code: {
      name: "src/input.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
      `,
    },
  },
  {
    tabs: ["node"],
    title: "Start the Tailwind CLI build process",
    body: (
      <p>
        Run the CLI tool to scan your source files for classes and build your CSS.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
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
              tailwindcss.exe -i ./src/input.css -o ./src/output.css --watch
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
      code: html`
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
