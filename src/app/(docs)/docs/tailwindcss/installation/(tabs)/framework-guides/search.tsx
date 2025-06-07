"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("q") ?? "";

  const [searchTerm, setSearchTerm] = useState(initialSearch);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const url = new URL(window.location.href);
      if (searchTerm) {
        url.searchParams.set("q", searchTerm);
      } else {
        url.searchParams.delete("q");
      }
      router.replace(url.toString(), { scroll: false });
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchTerm, router]);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onDoubleClick={() => setSearchTerm("")}
      placeholder="Search guides..."
      className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-2 focus:outline-1 focus:outline-sky-500"
      aria-label="Search framework guides"
    />
  );
}
