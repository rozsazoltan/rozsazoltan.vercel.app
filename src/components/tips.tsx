import React from "react";

export function TipGood({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex items-stretch space-x-4">
      <div className="relative flex size-5.5 items-center justify-center rounded-full bg-teal-500/25 text-teal-800 inset-ring inset-ring-teal-600/25 dark:text-teal-400">
        <svg width="6" height="4.5" className="overflow-visible" aria-hidden="true">
          <path
            d="M6 0L2 4.5L0 2.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="m-0 flex-1 text-sm font-semibold text-gray-950 dark:text-white">{children}</div>
    </div>
  );
}

export function TipBad({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex items-stretch space-x-4">
      <div className="relative flex size-5.5 items-center justify-center rounded-full bg-rose-500/25 text-rose-800 inset-ring inset-ring-rose-700/25 dark:text-rose-400">
        <svg width="6" height="6" className="overflow-visible" aria-hidden="true">
          <path
            d="M0 0L6 6M6 0L0 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="m-0 flex-1 text-sm font-semibold text-gray-950 dark:text-white">{children}</div>
    </div>
  );
}

export function TipCompat({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex items-stretch space-x-4 rounded-md border border-rose-500/10 bg-rose-500/5 p-3 text-rose-600 dark:border-rose-500/20 dark:text-rose-500">
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="min-w-5 size-5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
      <div className="m-0 text-sm font-medium text-rose-700 dark:text-rose-400">{children}</div>
    </div>
  );
}

export function TipInfo({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="-mb-1 flex items-stretch space-x-2 text-gray-700 dark:text-gray-200">
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
        />
      </svg>

      <div className="m-0 flex-1 text-sm font-semibold text-gray-950 dark:text-white">{children}</div>
    </div>
  );
}

export function TipLearn({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex items-stretch space-x-4 rounded-md border border-teal-500/10 bg-teal-500/5 p-3 text-teal-600 dark:border-teal-500/20 dark:text-teal-500">
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="min-w-5 size-5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </svg>
      <div className="m-0 text-sm font-medium text-teal-700 dark:text-teal-400">{children}</div>
    </div>
  );
}

export function TipStar({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex items-stretch space-x-4 rounded-md border border-purple-500/20 bg-purple-500/5 p-3 text-purple-600 dark:border-purple-500/40 dark:text-purple-500">
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="min-w-5 size-5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
      <div className="m-0 text-sm font-medium text-purple-700 dark:text-purple-400">{children}</div>
    </div>
  );
}

export function TipHighlight({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex items-stretch space-x-4 rounded-md border border-indigo-500/20 p-3 text-indigo-700 dark:border-indigo-500/40 dark:text-indigo-500">
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="min-w-5 size-5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
      <div className="m-0 text-sm font-medium text-indigo-700 dark:text-indigo-400">{children}</div>
    </div>
  );
}

export function TipWarning({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex items-stretch space-x-4 rounded-md border border-amber-500/20 bg-amber-500/10 p-3 text-amber-700 dark:border-amber-500/40 dark:text-amber-500">
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="min-w-5 size-5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
      <div className="m-0 text-sm font-medium text-amber-700 dark:text-amber-400">{children}</div>
    </div>
  );
}