import { ReactNode } from "react";

export function Editor({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl bg-gray-950">
      <div className="rounded-xl p-1 text-sm scheme-dark dark:inset-ring dark:inset-ring-white/10">
        <div className="flex items-center gap-2 p-2">
          <span className="size-3 rounded-full bg-red-500/70"></span>
          <span className="size-3 rounded-full bg-yellow-500/70"></span>
          <span className="size-3 rounded-full bg-green-500/70"></span>
          {title && (
            <span className="text-xs text-white/70">{ title }</span>
          )}
        </div>
        <div className="with-line-numbers text-[13px]/6 *:*:p-3!">{children}</div>
      </div>
    </div>
  );
}
