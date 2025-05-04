import type { NextConfig } from "next";

const nextConfig = {
  serverExternalPackages: ["@tailwindcss/node"],
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  outputFileTracingIncludes: {
    "/**/*": ["./src/docs/*.mdx"],
  },
  experimental: {
    mdxRs: true,
    turbo: {
      rules: {
        // Support import .svg as react components in dev builds
        "*.react.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },

  webpack(config) {
    // Find the existing .svg rule used by Next.js and exclude .react.svg files
    const existingSvgRule = config.module.rules.find((rule: any) => rule.test?.test?.(".svg"));
    existingSvgRule.exclude = /\.react\.svg$/i;

    // Support import .svg as react components in production builds
    config.module.rules.push({
      test: /\.react\.svg$/,
      use: ["@svgr/webpack"],
    });

    // Disable CSS minification
    config.optimization.minimizer = config.optimization.minimizer.filter((fn: any) => {
      return !fn.toString().includes("CssMinimizerPlugin");
    });

    return config;
  },

  async redirects() {
    return [
      // Docs
      {
        source: "/docs",
        destination: "/docs/coming-soon",
        permanent: false,
      },

      // Framework guides
      // Coming Soon

      // Showcase examples
      {
        source: "/showcase/:path+",
        destination: "/showcase",
        permanent: false,
      },

      // External Links
      { source: "/github", destination: "https://github.com/rozsazoltan", permanent: false },
    ];
  },
} satisfies NextConfig;

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
