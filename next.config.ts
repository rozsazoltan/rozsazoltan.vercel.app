import type { NextConfig } from "next";
import createMdx from "@next/mdx";

const nextConfig = {
  serverExternalPackages: ["@tailwindcss/node"],
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  outputFileTracingIncludes: {
    "/**/*": ["./src/docs/**/*.mdx"],
  },
  turbopack: {
    rules: {
      // Support import .svg as react components in dev builds
      "*.react.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  async redirects() {
    return [
      // Docs
      {
        source: "/docs",
        destination: "/docs/getting-started",
        permanent: false,
      },

      // Laravel installation
      {
        source: "/docs/laravel",
        destination: "/docs/laravel/installation",
        permanent: false,
      },
      {
        source: "/docs/laravel/installation",
        destination: "/docs/laravel/installation/whats-new",
        permanent: false,
      },
      // Vue.js installation
      {
        source: "/docs/vuejs",
        destination: "/docs/vuejs/installation",
        permanent: false,
      },
      {
        source: "/docs/vuejs/installation",
        destination: "/docs/vuejs/installation/whats-new",
        permanent: false,
      },
      // TailwindCSS installation
      {
        source: "/docs/tailwindcss",
        destination: "/docs/tailwindcss/installation",
        permanent: false,
      },
      {
        source: "/docs/tailwindcss/installation",
        destination: "/docs/tailwindcss/installation/whats-new",
        permanent: false,
      },

      // TailwindCSS version picker
      {
        source: "/docs/tailwindcss/v4",
        destination: "/docs/tailwindcss",
        permanent: false,
      },
      {
        source: "/docs/tailwindcss/v3",
        destination: "/docs/tailwindcss/v3/browser-support",
        permanent: false,
      },

      // Tsunamaji
      {
        source: "/docs/tsunamaji",
        destination: "/docs/tsunamaji/project",
        permanent: false,
      },
      {
        source: "/docs/tsunamaji/tailwindcss-raw",
        destination: "/docs/tsunamaji/tailwindcss-raw/installation",
        permanent: false,
      },
      {
        source: "/docs/tsunamaji/tailwindcss-utilities",
        destination: "/docs/tsunamaji/tailwindcss-utilities/installation",
        permanent: false,
      },
      {
        source: "/docs/tsunamaji/tailwindcss-grouping",
        destination: "/docs/tsunamaji/tailwindcss-grouping/installation",
        permanent: false,
      },

      // Showcase examples
      {
        source: "/showcase/:path+",
        destination: "/showcase",
        permanent: false,
      },

      // External Links
      { source: "/github", destination: "https://github.com/rozsazoltan", permanent: false },
      { source: "/docs/tsunamaji/discord", destination: "https://discord.gg/ECcH5xTnsu", permanent: false },
    ];
  },
} satisfies NextConfig;

const withMDX = createMdx();
module.exports = withMDX(nextConfig);
