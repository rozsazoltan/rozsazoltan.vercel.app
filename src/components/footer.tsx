import clsx from "clsx";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export function FooterSitemap({ className }: { className?: string }) {
  return (
    <footer className="bg-white text-sm/loose text-gray-950 dark:bg-gray-950 dark:text-white">
      <div className={clsx("flex gap-4 p-4 md:hidden", className)}>
        <div className="flex flex-1 flex-col gap-10">
          <div>
            <Learn />
          </div>
          <div>
            <Community />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-10">
          <div>
            <Stack />
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "mx-auto hidden w-full grid-cols-4 justify-between gap-y-0 md:grid md:grid-cols-4 md:gap-6 md:gap-x-4 lg:gap-8",
          className,
        )}
      >
        <div className="border-x border-b border-gray-950/5 py-10 pl-2 not-md:border-0 md:border-b-0 dark:border-white/10">
          <Learn />
        </div>
        <div className="border-x border-b border-gray-950/5 py-10 pl-2 not-md:border-0 md:border-b-0 dark:border-white/10 col-span-2">
          <Stack />
        </div>
        <div className="border-x border-gray-950/5 py-10 pl-2 not-md:border-0 dark:border-white/10">
          <Community />
        </div>
      </div>
    </footer>
  );
}

export function FooterMeta({ className }: { className?: string }) {
  return (
    <div className="px-2 pt-10 pb-24">
      <div
        className={clsx(
          "mx-auto flex w-full flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8",
          className,
        )}
      >
        <ThemeToggle />
        <div className="flex flex-col gap-4 text-sm/6 text-gray-700 sm:flex-row sm:gap-2 sm:pr-4 dark:text-gray-400">
          <span>Copyright ©&nbsp;2025&nbsp;Zoltán Rózsa</span>
          <span className="max-sm:hidden">&middot;</span>
          <Link href="/brand" className="hover:underline">
            Trademark Policy
          </Link>
        </div>
      </div>
    </div>
  );
}

function Learn() {
  return (
    <>
      <h3 className="font-semibold text-rose-500">Learn</h3>
      <ul className="mt-4 grid gap-4">
        <li>
          <Link href="/docs" className="hover:underline">
            Documentation
          </Link>
        </li>
        <li>
          <Link href="/showcase" className="hover:underline">
            Showcase
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
        </li>
      </ul>
    </>
  );
}

function Stack() {
  return (
    <>
      <h3 className="mb-2 font-semibold text-rose-500">
        Stack
      </h3>
      <div className="grid md:grid-cols-2 border-t-4 border-rose-500/20">
        <ul className="mt-4 flex flex-col gap-4">
          <li>
            <a href="https://php.net" className="hover:underline">
              PHP
            </a>
          </li>
          <li>
            <a href="https://laravel.com" className="hover:underline">
              Laravel
            </a>
          </li>
          <li>
            <a href="https://mariadb.org" className="hover:underline">
              MariaDB
            </a>
          </li>
          <li>
            <a href="https://www.postgresql.org/docs" className="hover:underline">
              PostgreSQL
            </a>
          </li>
          <h4 className="font-semibold">
            /* Backend, API */
          </h4>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="hover:underline">
              JavaScript
            </a>
          </li>
          <li>
            <a href="https://www.typescriptlang.org" className="hover:underline">
              TypeScript
            </a>
          </li>
          <li>
            <a href="https://vite.dev" className="hover:underline">
              Vite.js
            </a>
          </li>
          <li>
            <a href="https://vuejs.org" className="hover:underline">
              Vue.js
            </a>
          </li>
          <li>
            <a href="https://tailwindcss.com" className="hover:underline">
              TailwindCSS
            </a>
          </li>
          <h4 className="font-semibold">
            /* Frontend, Web */
          </h4>
        </ul>
        <ul className="mt-4 flex flex-col gap-4">
          <li>
            <a href="https://www.rust-lang.org" className="hover:underline">
              Rust
            </a>
          </li>
          <li>
            <a href="https://tauri.app" className="hover:underline">
              Tauri
            </a>
          </li>
          <h4 className="font-semibold">
            /* Desktop, Mobile */
          </h4>
          <li>
            <a href="https://pestphp.com" className="hover:underline">
              PestPHP
            </a>
          </li>
          <li>
            <a href="https://vitest.dev" className="hover:underline">
              Vitest
            </a>
          </li>
          <li>
            <a href="https://github.com/features/actions" className="hover:underline">
              GitHub Actions
            </a>
          </li>
          <h4 className="font-semibold">
            /* Testing */
          </h4>
          <li>
            <a href="https://github.com/microsoft/WSL" className="hover:underline">
              WSL (Debian, CentOS)
            </a>
          </li>
          <li>
            <a href="https://cpanel.net/" className="hover:underline">
              cPanel (Handle DNS, Domain, etc.)
            </a>
          </li>
          <h4 className="font-semibold">
            /* Other */
          </h4>
        </ul>
      </div>
    </>
  );
}

function Community() {
  return (
    <>
      <h3 className="font-semibold text-rose-500">Community</h3>
      <ul className="mt-4 grid gap-4">
        <li>
          <Link href="https://github.com/rozsazoltan" className="hover:underline">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="https://stackoverflow.com/users/15167500/rozsazoltan" className="hover:underline">
            StackOverflow
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/rozsazoltan" className="hover:underline">
            LinkedIn
          </Link>
        </li>
        <li>
          <Link href="https://x.com/rozsazoltan_dev" className="hover:underline">
            X (Twitter)
          </Link>
        </li>
      </ul>
    </>
  );
}
