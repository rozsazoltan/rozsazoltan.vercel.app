import { TipLearn, TipWarning } from "@/components/tips";
import { Step, Tab } from "./utils";
import { type Page, type Tile } from "./utils";
import Logo from "@/docs/img/guides/tsunamaji.react.svg";
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
    title: "Start using plugin on your project",
    body: (
      <>
        <p>
          This is a JSX example, but of course the plugin works in any JavaScript framework according to your needs.
        </p>
        <TipWarning>
          In a production environment, it's better to generate the CSS once (with <code>compileTw</code>) when saving the content and store the generated output. This results in faster load times and less load on the client.
        </TipWarning>
        <TipLearn>
          <p>The <code>compileTw</code> function is clearly intended for generating the CSS for dynamic content in production, but not at runtime.</p>          
          <p>Generating the CSS at runtime would be unnecessary, as it would regenerate the CSS for every client repeatedly, even when the content isn't changing.</p>
          <p>If the content does change, it would be possible to update the generated CSS once on the server side.</p>
        </TipLearn>
      </>
    ),
    code: {
      name: "src/Component.jsx",
      lang: "js",
      code: dedent`
        import { useEffect, useState } from "react";
        import { compileTw } from "@tsunamaji/tailwindcss-raw";

        export default function App() {
          // State to hold the dynamic HTML content
          const [htmlString, setHtmlString] = useState(
            \`<div class="text-lg bg-tsunamaji">Lorem Ipsum</div>\`
          );

          // State to store the generated CSS for the current HTML content
          const [generatedCSS, setGeneratedCSS] = useState("");

          // Update the generated CSS whenever the HTML string changes
          useEffect(() => {
            const theme = \`@theme {
              --color-tsunamaji: #77c69e;
            }\`;

            compileTw(htmlString, theme).then((css) => {
              // Only update the state with the new CSS
              setGeneratedCSS(css);
            });
          }, [htmlString]);

          // Insert or update the <style> element whenever the generated CSS changes
          useEffect(() => {
            if (!generatedCSS) return;

            // Remove the previous style element if it exists
            const existingStyle = document.getElementById("generated-css");
            if (existingStyle) existingStyle.remove();

            // Create a new <style> element and append it to the document head
            const style = document.createElement("style");
            style.id = "generated-css";
            style.textContent = generatedCSS;
            document.head.appendChild(style);
          }, [generatedCSS]);

          // Example save function that sends both HTML and generated CSS
          function handleSave() {
            console.log("Saving content...");
            console.log("HTML:", htmlString);
            console.log("Generated CSS:", generatedCSS);

            // Here you could send htmlString and generatedCSS to an API or backend
          }

          return (
            <div id="app">
              {/* Editable area for dynamic HTML content */}
              <textarea
                value={htmlString}
                onChange={(e) => setHtmlString(e.target.value)}
                rows={5}
                cols={50}
              />

              {/* Preview of the dynamic HTML content */}
              <div
                style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}
                dangerouslySetInnerHTML={{ __html: htmlString }}
              />

              {/* Save button to persist content and generated CSS */}
              <button onClick={handleSave} style={{ marginTop: "10px" }}>
                Save
              </button>
            </div>
          );
        }
      `,
    },
  },
];
