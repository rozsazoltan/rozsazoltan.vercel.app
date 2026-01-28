"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IconButton } from "./icon-button";
import { SearchButton } from "./search";
import VersionPicker from "./version-picker";
import { useVersionPicker } from "@/components/blog/blog-layout-wrapper";

function Logo(props: React.ComponentProps<"svg">) {
  return (
    <>
      <svg fill="none" viewBox="0 0 200.514 33" {...props}>
        <g fillRule="evenodd" clipPath="url(#prefix__clip0)" clipRule="evenodd" transform="matrix(1, 0, 0, 1, -15.522739, 4.309624)">
          <path
            d="M 63.763 4.566 Q 62.989 3.969 61.706 3.969 Q 59.544 3.969 58.191 6.175 Q 56.837 8.381 56.837 11.879 L 56.837 20.826 L 54.728 20.826 L 54.728 2.351 L 56.837 2.351 L 56.837 6.342 L 56.907 6.342 Q 57.558 4.285 58.885 3.151 Q 60.212 2.017 61.97 2.017 Q 63.007 2.017 63.763 2.299 Z M 73.377 21.283 Q 70.741 21.283 68.728 20.105 Q 66.715 18.928 65.625 16.757 Q 64.536 14.586 64.536 11.738 Q 64.536 7.221 66.988 4.575 Q 69.44 1.93 73.676 1.93 Q 77.667 1.93 79.969 4.496 Q 82.272 7.062 82.272 11.597 Q 82.272 15.957 79.881 18.62 Q 77.491 21.283 73.377 21.283 Z M 73.536 3.793 Q 70.424 3.793 68.596 5.893 Q 66.768 7.994 66.768 11.721 Q 66.768 15.254 68.579 17.328 Q 70.389 19.402 73.483 19.402 Q 76.629 19.402 78.343 17.346 Q 80.057 15.289 80.057 11.615 Q 80.057 7.801 78.37 5.797 Q 76.682 3.793 73.536 3.793 Z M 86.824 18.928 L 98.338 18.928 L 98.338 20.826 L 83.502 20.826 L 83.502 20.088 L 95.262 4.25 L 84.451 4.25 L 84.451 2.351 L 98.654 2.351 L 98.654 2.949 Z M 100.257 17.627 Q 101.135 18.383 102.507 18.892 Q 103.878 19.402 105.108 19.402 Q 109.292 19.402 109.292 16.203 Q 109.292 15.465 108.94 14.893 Q 108.589 14.322 107.885 13.83 Q 107.182 13.338 105.178 12.459 Q 102.436 11.316 101.373 10.121 Q 100.309 8.926 100.309 7.062 Q 100.309 4.83 102.111 3.38 Q 103.913 1.93 106.69 1.93 Q 109.081 1.93 110.856 2.844 L 110.856 5.129 Q 108.764 3.793 106.444 3.793 Q 104.669 3.793 103.596 4.663 Q 102.524 5.533 102.524 6.904 Q 102.524 8.205 103.306 8.987 Q 104.089 9.769 106.374 10.701 Q 109.344 11.949 110.425 13.118 Q 111.507 14.287 111.507 16.097 Q 111.507 18.453 109.67 19.859 Q 107.833 21.265 104.88 21.265 Q 102.173 21.265 100.257 20.07 Z M 125.551 20.826 L 125.551 17.433 L 125.48 17.433 Q 124.584 19.244 123.002 20.264 Q 121.42 21.283 119.416 21.283 Q 116.797 21.283 115.223 19.833 Q 113.65 18.383 113.65 16.01 Q 113.65 11.017 119.926 10.103 L 125.551 9.277 Q 125.551 3.793 121.332 3.793 Q 118.203 3.793 115.355 6.183 L 115.355 3.81 Q 118.291 1.93 121.525 1.93 Q 124.549 1.93 126.122 3.661 Q 127.695 5.392 127.695 8.82 L 127.695 20.826 Z M 115.865 15.887 Q 115.865 17.451 116.929 18.427 Q 117.992 19.402 119.767 19.402 Q 122.246 19.402 123.898 17.6 Q 125.551 15.799 125.551 12.951 L 125.551 11.123 L 120.717 11.808 Q 117.974 12.195 116.92 13.127 Q 115.865 14.058 115.865 15.887 Z M 133.163 18.928 L 144.677 18.928 L 144.677 20.826 L 129.841 20.826 L 129.841 20.088 L 141.601 4.25 L 130.79 4.25 L 130.79 2.351 L 144.994 2.351 L 144.994 2.949 Z M 155.136 21.283 Q 152.499 21.283 150.486 20.105 Q 148.474 18.928 147.384 16.757 Q 146.294 14.586 146.294 11.738 Q 146.294 7.221 148.746 4.575 Q 151.198 1.93 155.435 1.93 Q 159.425 1.93 161.728 4.496 Q 164.03 7.062 164.03 11.597 Q 164.03 15.957 161.64 18.62 Q 159.249 21.283 155.136 21.283 Z M 155.294 3.793 Q 152.183 3.793 150.354 5.893 Q 148.526 7.994 148.526 11.721 Q 148.526 15.254 150.337 17.328 Q 152.147 19.402 155.241 19.402 Q 158.388 19.402 160.102 17.346 Q 161.815 15.289 161.815 11.615 Q 161.815 7.801 160.128 5.797 Q 158.44 3.793 155.294 3.793 Z M 167.37 20.826 L 167.37 -6.508 L 169.514 -6.508 L 169.514 20.826 Z M 181.926 20.615 Q 180.678 21.213 179.378 21.213 Q 174.983 21.213 174.983 16.097 L 174.983 4.25 L 171.731 4.25 L 171.731 2.351 L 174.983 2.351 L 174.983 -2.324 L 177.145 -3.028 L 177.145 2.351 L 181.926 2.351 L 181.926 4.25 L 177.145 4.25 L 177.145 15.781 Q 177.145 17.68 177.743 18.514 Q 178.341 19.349 179.764 19.349 Q 180.907 19.349 181.926 18.681 Z M 195.144 20.826 L 195.144 17.433 L 195.074 17.433 Q 194.177 19.244 192.595 20.264 Q 191.013 21.283 189.009 21.283 Q 186.39 21.283 184.817 19.833 Q 183.243 18.383 183.243 16.01 Q 183.243 11.017 189.519 10.103 L 195.144 9.277 Q 195.144 3.793 190.925 3.793 Q 187.796 3.793 184.949 6.183 L 184.949 3.81 Q 187.884 1.93 191.118 1.93 Q 194.142 1.93 195.715 3.661 Q 197.288 5.392 197.288 8.82 L 197.288 20.826 Z M 185.458 15.887 Q 185.458 17.451 186.522 18.427 Q 187.585 19.402 189.361 19.402 Q 191.839 19.402 193.492 17.6 Q 195.144 15.799 195.144 12.951 L 195.144 11.123 L 190.31 11.808 Q 187.568 12.195 186.513 13.127 Q 185.458 14.058 185.458 15.887 Z M 214.024 20.826 L 214.024 10.174 Q 214.024 3.793 209.419 3.793 Q 206.94 3.793 205.314 5.647 Q 203.688 7.502 203.688 10.262 L 203.688 20.826 L 201.544 20.826 L 201.544 2.351 L 203.688 2.351 L 203.688 5.603 L 203.759 5.603 Q 205.798 1.93 209.964 1.93 Q 212.987 1.93 214.578 3.898 Q 216.169 5.867 216.169 9.576 L 216.169 20.826 Z"
            fill="currentColor"
            style={{ textTransform: "lowercase", textWrap: "nowrap" }}
          />
        </g>
        <defs>
          <clipPath id="prefix__clip0">
            <path fill="#fff" d="M0 0h262v32.4H0z" />
          </clipPath>
        </defs>
        <g transform="matrix(0.066863, 0, 0, 0.064453, -0.447259, -0.052524)">
          <path
            d="M502.774,221.7c0-109.2-88.53-197.729-197.729-197.729c-43.089,0-82.928,13.83-115.412,37.225 c63.915,4.943,131.847,38.619,184.149,97.488c53.544,60.28,73.426,136.009,63.839,215.107 C478.369,335.448,502.774,274.354,502.774,221.7z"
            style={{ fill: "oklch(0.662 0.179 23.3)" }}
          />
          <path
            d="M173.399,386.897c-41.275-49.044-64.884-121.098-59.561-199.669c5.445-80.44,57.733-156.186,124.848-184.945 C178.763-7.309,105.882,14.155,68.335,51.067c-77.869,76.56-78.937,201.752-2.391,279.626 C96.16,361.419,133.943,380.129,173.399,386.897z"
            style={{ fill: "oklch(0.662 0.179 23.3)" }}
          />
          <path
            d="M246.736,405.277c-78.978,16.225-163.847-12.311-204.594-50.662c4.792,59.923,39.929,104.532,85.531,130.86 c94.568,54.604,215.501,22.197,270.1-72.368c21.545-37.323,29.492-78.74,25.474-118.567 C387.005,347.419,323.873,389.417,246.736,405.277z"
            style={{ fill: "oklch(0.662 0.179 23.3)" }}
          />
          <path
            d="M176.363,95.756c-23.968,9.584-40.743,81.495-31.16,119.838c67.111-100.661,179.764-50.331,179.764-50.331 C296.208,122.12,210.262,82.195,176.363,95.756z"
            style={{ fill: "oklch(0.662 0.179 23.3)" }}
          />
          <path
            d="M194.885,372.307c20.289,15.966,90.944-5.462,119.368-32.943c-120.74-7.777-133.48-130.502-133.48-130.502 C157.799,255.34,166.194,349.734,194.885,372.307z"
            style={{ fill: "oklch(0.662 0.179 23.3)" }}
          />
          <path
            d="M247.259,294.657c45.951,19.738,130.476,7.071,146.428-21.536c11.283-20.212-19.484-86.849-49.016-112.729 C356.86,276.438,247.259,294.657,247.259,294.657z"
            style={{ fill: "oklch(0.662 0.179 23.3)" }}
          />
          <path
            d="M255.465 174.856 C222.786 181.443 203.987 247.636 231.494 258.746 C293.908 283.955 330.529 159.724 255.465 174.856 Z"
            style={{ fill: "oklch(0.662 0.179 23.3)" }}
          />
        </g>
      </svg>
    </>
  );
}

function GitHubLogo(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M10 0C4.475 0 0 4.475 0 10a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.013 1.35.725 1.538 1.025.9 1.512 2.337 1.087 2.912.825.088-.65.35-1.088.638-1.338-2.225-.25-4.55-1.112-4.55-4.937 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.274.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0020 10c0-5.525-4.475-10-10-10z" />
    </svg>
  );
}

export function Header(props: React.PropsWithChildren) {
  let [navIsOpen, setNavIsOpen] = useState(false);
  let router = useRouter();

  // Get the version picker props from context
  const versionPickerProps = useVersionPicker();

  return (
    <div className="bg-white dark:bg-gray-950">
      <div className="flex h-14 items-center justify-between gap-8 px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="shrink-0"
            aria-label="Home"
            onContextMenu={(evt) => {
              evt.preventDefault();
              router.push("/brand");
            }}
          >
            <Logo className="h-5 text-black dark:text-white" />
          </Link>

          {/* Pass the props from context to VersionPicker */}
          <VersionPicker {...versionPickerProps} />
          
          <Tsunamaji />
        </div>
        <div className="flex items-center gap-6 max-md:hidden">
          <SearchButton className="inline-flex items-center gap-1 rounded-full bg-gray-950/2 px-2 py-1 inset-ring inset-ring-gray-950/8 dark:bg-white/5 dark:inset-ring-white/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="-ml-0.5 size-4 fill-gray-600 dark:fill-gray-500"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>

            <kbd className="hidden font-sans text-xs/4 text-gray-500 dark:text-gray-400 [.os-macos_&]:block">⌘K</kbd>
            <kbd className="hidden font-sans text-xs/4 text-gray-500 not-[.os-macos_&]:block dark:text-gray-400">
              Ctrl&nbsp;K
            </kbd>
          </SearchButton>
          <Link href="/docs" className="text-sm/6 text-gray-950 dark:text-white">
            Docs
          </Link>
          <Link href="/blog" className="text-sm/6 text-gray-950 dark:text-white">
            Blog
          </Link>
          <Link href="/showcase" className="text-sm/6 text-gray-950 dark:text-white">
            Showcase
          </Link>
          <Link href="/ecosystem" className="text-sm/6 text-gray-950 dark:text-white">
            Ecosystem
          </Link>
          <Link href="/sponsor" className="text-sm/6 text-gray-950 dark:text-white">
            Sponsor
          </Link>
          <Link href="https://github.com/rozsazoltan/rozsazoltan.vercel.app" target="_blank" aria-label="GitHub repository">
            <GitHubLogo className="size-5 fill-black/40 dark:fill-gray-400" />
          </Link>
        </div>
        <div className="flex items-center gap-2.5 md:hidden">
          <SearchButton aria-label="Search" className="inline-grid size-7 place-items-center rounded-md">
            <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </SearchButton>

          <IconButton aria-label="Navigation" onClick={() => setNavIsOpen(!navIsOpen)}>
            <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
              <path d="M8 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM9.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
            </svg>
          </IconButton>

          <Dialog
            open={navIsOpen}
            onClose={() => setNavIsOpen(false)}
            className="fixed inset-0 bg-white focus:outline-none md:hidden dark:bg-gray-950"
          >
            <DialogPanel className="size-full overflow-y-auto">
              <div className="flex h-14 items-center justify-between px-4 py-4 sm:px-6">
                <Logo className="h-5 text-black dark:text-white" />
                <IconButton aria-label="Navigation" onClick={() => setNavIsOpen(false)}>
                  <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
                    <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                  </svg>
                </IconButton>
              </div>
              <div className="grid grid-cols-1 gap-1 px-1 pb-1 sm:px-3 sm:pb-3">
                <Link
                  href="/docs"
                  className="rounded-lg px-3 py-2 text-xl/9 font-medium text-gray-950 data-active:bg-gray-950/5 dark:text-white dark:hover:bg-white/10"
                >
                  Docs
                </Link>
                <Link
                  href="/blog"
                  className="rounded-lg px-3 py-2 text-xl/9 font-medium text-gray-950 data-active:bg-gray-950/5 dark:text-white dark:hover:bg-white/10"
                >
                  Blog
                </Link>
                <Link
                  href="/showcase"
                  className="rounded-lg px-3 py-2 text-xl/9 font-medium text-gray-950 data-active:bg-gray-950/5 dark:text-white dark:hover:bg-white/10"
                >
                  Showcase
                </Link>
                <Link
                  href="/ecosystem"
                  className="rounded-lg px-3 py-2 text-xl/9 font-medium text-gray-950 data-active:bg-gray-950/5 dark:text-white dark:hover:bg-white/10"
                >
                  Ecosystem
                </Link>
                <Link
                  href="/sponsor"
                  className="rounded-lg px-3 py-2 text-xl/9 font-medium text-gray-950 data-active:bg-gray-950/5 dark:text-white dark:hover:bg-white/10"
                >
                  Sponsor
                </Link>
                <Link
                  href="https://github.com/rozsazoltan"
                  target="_blank"
                  className="rounded-lg px-3 py-2 text-xl/9 font-medium text-gray-950 data-active:bg-gray-950/5 dark:text-white dark:hover:bg-white/10"
                >
                  GitHub
                </Link>
              </div>
            </DialogPanel>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

function Tsunamaji() {
  return (
    <Link
      href="/docs/tsunamaji/project"
      className="hidden min-[71rem]:flex items-center gap-2 rounded-full bg-gray-950/5 px-2.5 py-0.5 text-xs/5 text-gray-950 hover:bg-gray-950/7.5 dark:bg-white/10 dark:text-white dark:hover:bg-white/12.5"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5">
        <path style={{fill: "rgb(136, 226, 219)", strokeWidth: 1.068}} d="M 38.5 377.491 C 38.5 377.491 123.096 370.341 154.046 294.075 C 184.996 217.81 179.837 68.849 330.46 68.849 C 363.486 68.849 399.651 86.892 419.441 102.807 C 518.739 182.654 471.799 346.51 355.22 304.503 C 355.22 304.503 397.519 302.418 397.519 238.066 C 397.519 173.716 327.773 164.183 317.049 217.809 C 309.409 256.011 313.954 371.535 459.418 377.491"></path>
        <path style={{fill: "rgb(165, 242, 234)", strokeWidth: 1.068}} d="M 355.221 304.503 C 391.329 304.503 461.998 239.854 419.123 162.813 C 389.143 108.938 307.25 98.044 248.961 165.373 C 200.81 220.992 216.018 319.712 117.492 360.428 C 96.868 368.951 71.261 374.932 39.047 377.445 C 46.31 376.671 124.551 366.768 154.046 294.075 C 184.997 217.809 179.838 68.849 330.461 68.849 C 363.485 68.849 399.645 86.891 419.442 102.812 C 518.739 182.654 471.8 346.51 355.221 304.503 Z"></path>
        <path style={{fill: "rgb(201, 247, 241)", strokeWidth: 1.068}} d="M 383.973 310.973 C 467.362 303.822 490.895 171.88 404.999 102.811 C 386.335 87.808 353.147 70.922 321.743 69.027 C 324.591 68.907 327.499 68.848 330.461 68.848 C 363.485 68.848 399.645 86.89 419.442 102.811 C 510.115 175.719 478.856 318.672 383.973 310.973 Z"></path>
        <path style={{fill: "rgb(115, 198, 190)", strokeWidth: 1.068}} d="M 459.418 377.491 L 266.563 377.491 C 244.9 367.104 236.333 330.588 247.929 276.199 C 260.814 215.77 285.894 183.201 323.24 176.099 C 345.679 171.833 363.082 180.318 374.193 188.804 C 352.879 175.636 323.673 184.645 317.05 217.81 C 311.507 245.512 312.375 313.866 368.73 351.624 C 385.667 362.971 407.615 371.555 435.908 375.442 C 443.303 376.457 451.132 377.152 459.418 377.491 Z"></path>
        <path style={{fill: "rgb(119, 198, 158)", strokeWidth: 1}} d="M 465.449 329.937 C 442.179 329.937 442.179 352.476 418.899 352.476 C 395.629 352.476 395.629 329.937 372.353 329.937 C 349.079 329.937 349.079 352.476 325.806 352.476 C 302.533 352.476 302.533 329.937 279.261 329.937 C 255.989 329.937 255.989 352.476 232.716 352.476 C 209.447 352.476 209.447 329.937 186.177 329.937 C 162.905 329.937 162.905 352.476 139.633 352.476 C 116.36 352.476 116.36 329.937 93.088 329.937 C 69.816 329.937 69.816 352.476 46.543 352.476 C 23.272 352.476 23.272 329.937 0.001 329.937 L 0.001 369.339 L 0.001 384.739 L 0.001 421.179 L 511.999 421.179 L 511.999 407.278 L 511.999 369.339 L 511.999 352.476 C 488.729 352.476 488.729 329.937 465.449 329.937 Z"></path>
        <path style={{fill: "rgb(137, 229, 185)", strokeWidth: 1}} d="M 512.002 443.152 C 488.726 443.152 488.726 420.613 465.449 420.613 C 442.173 420.613 442.173 443.152 418.896 443.152 C 395.623 443.152 395.623 420.613 372.35 420.613 C 349.076 420.613 349.076 443.152 325.803 443.152 C 302.53 443.152 302.53 420.613 279.258 420.613 C 255.986 420.613 255.986 443.152 232.713 443.152 C 209.444 443.152 209.444 420.613 186.174 420.613 C 162.902 420.613 162.902 443.152 139.63 443.152 C 116.357 443.152 116.357 420.613 93.085 420.613 C 69.813 420.613 69.813 443.152 46.54 443.152 C 23.269 443.152 23.269 420.613 -0.002 420.613 L -0.002 365.811 C 23.269 365.811 23.269 388.35 46.54 388.35 C 69.811 388.35 69.812 365.811 93.085 365.811 C 116.358 365.811 116.358 388.35 139.63 388.35 C 162.902 388.35 162.902 365.811 186.174 365.811 C 209.444 365.811 209.444 388.35 232.713 388.35 C 255.985 388.35 255.985 365.811 279.258 365.811 C 302.531 365.811 302.531 388.35 325.803 388.35 C 349.077 388.35 349.077 365.811 372.35 365.811 C 395.623 365.811 395.623 388.35 418.896 388.35 C 442.172 388.35 442.172 365.811 465.449 365.811 C 488.725 365.811 488.725 388.35 512.001 388.35 L 512.002 443.152 Z"></path>
      </svg>
      <div className="flex items-center gap-x-2">
        Powerful extension of the Tailwind ecosystem
        <svg width="2" height="2" fill="currentColor" aria-hidden="true" className="text-gray-400">
          <circle cx="1" cy="1" r="1" />
        </svg>
        Try Tsunamaji
        <svg width="3" height="6" className="ml-1 overflow-visible text-gray-300 dark:text-gray-400" aria-hidden="true">
          <path
            d="M0 0L3 3L0 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
}
