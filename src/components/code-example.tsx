import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
  transformerNotationFocus,
  transformerNotationErrorLevel,
} from "@shikijs/transformers";
import { clsx } from "clsx";
import dedent from "dedent";
import { createHighlighter } from "shiki";
import theme from "./syntax-highlighter/theme.json";
import { CopyButton } from "./copy-button";

import { highlightClasses } from "./highlight-classes";
import atApplyInjection from "./syntax-highlighter/at-apply.json";
import atRulesInjection from "./syntax-highlighter/at-rules.json";
import themeFnInjection from "./syntax-highlighter/theme-fn.json";
import { stripShikiComments } from "./shiki";

export function js(strings: TemplateStringsArray, ...args: any[]) {
  return { lang: "js", code: dedent(strings, ...args) };
}

export function ts(strings: TemplateStringsArray, ...args: any[]) {
  return { lang: "ts", code: dedent(strings, ...args) };
}

export function jsx(strings: TemplateStringsArray, ...args: any[]) {
  return { lang: "jsx", code: dedent(strings, ...args) };
}

export function html(strings: TemplateStringsArray, ...args: any[]) {
  return { lang: "html", code: dedent(strings, ...args) };
}

export function svelte(strings: TemplateStringsArray, ...args: any[]) {
  return { lang: "svelte", code: dedent(strings, ...args) };
}

export function css(strings: TemplateStringsArray, ...args: any[]) {
  return { lang: "css", code: dedent(strings, ...args) };
}

export function sh(strings: TemplateStringsArray, ...args: any[]) {
  return { lang: "sh", code: dedent(strings, ...args) };
}

export function php(strings: TemplateStringsArray, ...args: any[]) {
  return { lang: "php", code: dedent(strings, ...args) };
}

export async function CodeExample({
  example,
  filename,
  className = "",
  copyable = true,
}: {
  example: { lang: string; code: string; className?: string };
  filename?: string;
  className?: string;
  copyable?: boolean;
}) {
  return (
    <CodeExampleWrapper className={clsx('relative', className)}>
      <div className="relative">
        {filename ? <CodeExampleFilename filename={filename} /> : null}
        {copyable && (
          <CopyButton
            className={clsx(
              "absolute z-10 transition duration-150 group-hover/code-block:opacity-100",
              filename
                ? "-top-1 right-0 text-white/50 hover:text-white/75"
                : "top-2 right-2 rounded border border-black/15 bg-black/50 text-white/75 opacity-0 backdrop-blur-md hover:text-white",
            )}
            value={stripShikiComments(example.code)}
          />
        )}
      </div>
      <HighlightedCode example={example} className={example.className} />
    </CodeExampleWrapper>
  );
}

export function CodeExampleWrapper({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-gray-950 in-data-stack:mt-0 in-data-stack:rounded-none in-[figure]:-mx-1 in-[figure]:-mb-1 in-data-stack:[:first-child>&]:rounded-t-xl in-data-stack:[:first-child>&]:*:rounded-t-xl in-data-stack:[:last-child>&]:rounded-b-xl in-data-stack:[:last-child>&]:*:rounded-b-xl">
      <div
        className={clsx(
          "rounded-xl p-1 text-sm scheme-dark in-data-stack:rounded-none dark:bg-white/5 dark:inset-ring dark:inset-ring-white/10 in-data-stack:dark:inset-ring-0",
          "group/code-block",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function CodeExampleStack({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div data-stack>
      <div className={clsx(
        "not-prose rounded-xl bg-gray-950 in-[figure]:mt-1 in-[figure]:rounded-b-lg in-[figure]:px-0.5 in-[figure]:pb-0.5 dark:outline dark:-outline-offset-1 dark:outline-white/10 dark:in-[figure]:outline-1 dark:in-[figure]:outline-offset-1",
        className,
      )}>
        {children}
      </div>
    </div>
  );
}

export function CodeExampleGroup({
  filenames,
  children,
  className = "",
}: {
  filenames: string[];
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div>
      <TabGroup className="not-prose">
        <div className="rounded-xl bg-gray-950 in-[figure]:-mx-1 in-[figure]:-mb-1">
          <div
            className={clsx(
              "relative rounded-xl p-1 text-sm scheme-dark dark:bg-white/5 dark:inset-ring dark:inset-ring-white/10",
              className,
            )}
          >
            <TabList>
              {filenames.map((filename) => (
                <Tab
                  key={filename}
                  className="hover:*:text-white/85 aria-selected:*:font-medium aria-selected:*:text-white"
                >
                  <CodeExampleFilename filename={filename} />
                </Tab>
              ))}
            </TabList>
            <TabPanels>{children}</TabPanels>
          </div>
        </div>
      </TabGroup>
    </div>
  );
}

export function CodeBlock({ example }: { example: { lang: string; code: string } }) {
  return (
    <TabPanel>
      <CopyButton
        className={clsx(
          "absolute z-10 transition duration-150 group-hover/code-block:opacity-100",
          "top-0 right-0 z-10 text-white/50 hover:text-white/75",
        )}
        value={stripShikiComments(example.code)}
      />
      <HighlightedCode example={example} />
    </TabPanel>
  );
}

export function HighlightedCode({
  example,
  className,
}: {
  example: { lang: string; code: string };
  className?: string;
}) {
  return (
    <RawHighlightedCode
      example={example}
      className={clsx(
        "*:flex *:*:max-w-none *:*:shrink-0 *:*:grow *:overflow-auto *:rounded-lg *:bg-white/10! *:p-5 dark:*:bg-white/5!",
        "**:[.line]:isolate **:[.line]:block **:[.line]:not-last:min-h-[1lh]",
        "*:inset-ring *:inset-ring-white/10 dark:*:inset-ring-white/5",
        className,
      )}
    />
  );
}

export function RawHighlightedCode({
  example,
  className,
}: {
  example: { lang: string; code: string };
  className?: string;
}) {
  let codeWithoutPrettierIgnore = example.code
    .split("\n")
    .filter((line) => !line.includes("prettier-ignore"))
    .join("\n");

  let code = highlighter
    .codeToHtml(codeWithoutPrettierIgnore, {
      lang: example.lang,
      theme: theme.name,
      transformers: [
        transformerNotationHighlight({
          classActiveLine: "-mx-5 pl-[calc(var(--spacing)*5-2px)] border-l-2 pr-5 border-sky-400 bg-sky-300/15",
        }),
        transformerNotationDiff({
          classLineAdd:
            "relative -mx-5 border-l-4 border-teal-400 bg-teal-300/15 pr-5 pl-8 before:absolute before:left-4 before:text-teal-400 before:content-['+']",
          classLineRemove:
            "relative -mx-5 border-l-4 border-red-400 bg-red-300/15 pr-5 pl-8 before:absolute before:left-4 before:text-red-400 before:content-['-']",
          classActivePre: "[:where(&_.line)]:pl-4",
        }),
        transformerNotationWordHighlight({
          classActiveWord:
            "highlighted-word relative before:absolute before:-inset-x-0.5 before:-inset-y-0.25 before:-z-10 before:block before:rounded-sm before:bg-[lab(22.93_-1.66_-9.7)] [.highlighted-word_+_&]:before:rounded-l-none",
        }),
        transformerNotationFocus({
          classActivePre:
            "not-hover:[:where(&_.line)]:not-[.focused-line]:blur-[1px] transition-[2s_filter_-webkit-filter_linear]",
          classActiveLine:
            "focused-line",
        }),
        transformerNotationErrorLevel({
          classMap: {
            warning:
              "warning relative -mx-5 border-l-4 border-amber-400 bg-amber-300/20 pr-5 pl-8 before:absolute before:left-3 before:text-amber-400 before:content-['⚠'] after:absolute after:right-2 after:px-2 after:text-amber-400 after:bg-amber-950 after:content-['Warning'] after:max-md:hidden",
            error:
              "error relative -mx-5 border-l-4 border-red-400 bg-red-300/20 pr-5 pl-8 before:absolute before:left-3 before:text-red-400 before:content-['⚠'] after:absolute after:right-2 after:px-2 after:text-red-400 after:bg-red-950 after:content-['Error'] after:max-md:hidden",
          },
          classActivePre:
            "[:where(&_.line)]:pl-4",
        }),
        highlightClasses({
          highlightedClassName:
            "highlighted-word relative before:absolute before:-inset-x-0.5 before:-inset-y-0.25 before:-z-10 before:block before:rounded-sm before:bg-[lab(22.93_-1.66_-9.7)] [.highlighted-word_+_&]:before:rounded-l-none",
        }),
      ],
    })
    .replaceAll("\n", "");

  return <div className={className} dangerouslySetInnerHTML={{ __html: code }} />;
}

function CodeExampleFilename({ filename }: { filename: string }) {
  return <div className="px-3 pt-0.5 pb-1.5 text-xs/5 text-gray-400 dark:text-white/50">{filename}</div>;
}

let highlighter = await createHighlighter({
  themes: [theme],
  langs: [
    atApplyInjection as any,
    atRulesInjection,
    themeFnInjection,
    "astro",
    "blade",
    "css",
    "edge",
    "elixir",
    "hbs",
    "html",
    "js",
    "json",
    "jsx",
    "mdx",
    "sh",
    "svelte",
    "ts",
    "tsx",
    "twig",
    "vue",
    "md",
  ],
});
