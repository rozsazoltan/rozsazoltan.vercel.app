import { type Page, type Tile } from "./utils";
import Logo from "@/docs/img/guides/rails.react.svg";
import LogoDark from "@/docs/img/guides/rails-white.react.svg";

export let tile: Tile = {
  title: "Ruby on Rails",
  description: "Full-stack framework with all the tools needed to build amazing web apps.",
  external: "https://tailwindcss.com/docs/installation/framework-guides/ruby-on-rails",

  Logo,
  LogoDark,
};

export let page: Page = {
  title: "Install Tailwind CSS with Ruby on Rails",
  description: "Setting up Tailwind CSS in Ruby on Rails v7+ project.",

  // NOTE: This intro is not used currently but is here for reference as we'll want to bring it back once the rails gem is updated for a stable v4 release.
  intro: (
    <div className="prose prose-slate dark:prose-dark relative z-10 mb-16 max-w-3xl">
      <p>
        The quickest way to start using Tailwind CSS in your Rails project is to use{" "}
        <a href="https://github.com/rails/tailwindcss-rails">Tailwind CSS for Rails</a> by running{" "}
        <code>rails new my-project --css tailwind</code>. This will automatically configure your Tailwind setup based on
        the official Rails example. If you'd like to configure Tailwind manually, continue with the rest of this guide.
      </p>
    </div>
  ),
};
