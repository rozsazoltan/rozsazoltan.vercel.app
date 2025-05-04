"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Document as FlexDocument } from "flexsearch";
import Link from "next/link";

type Post = {
  title: string
  description: string
  excerpt: {
    key: null,
    props: {
      children: string,
    }
  }
  url: string
}
type Docs = {
  title: string
  description: string
  url: string
}
type SearchItem = {
  id: number;
  name?: string;
  description?: string;
  excerpt?: string;
  apiUsage?: string;
  apiDescription?: string;
  url?: string;
};

const SearchContext = createContext<any>({});

export function SearchProvider({ children }: React.PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialQuery, setInitialQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const tryResult: SearchItem[] = [
    {
      id: 1,
      name: "Getting Started with Laravel",
      description: "A beginner-friendly introduction to building web applications with Laravel.",
    },
    {
      id: 2,
      name: "Understanding TypeScript Generics",
      description: "Learn how generics bring flexibility and type safety to your TypeScript code.",    },
    {
      id: 3,
      name: "JavaScript Event Loop Explained",
      description: "An in-depth guide to how the JavaScript runtime handles asynchronous code.",
    },
    {
      id: 4,
      name: "Testing with PestPHP",
      description: "Write elegant, readable PHP tests using the Pest framework.",
    },
    {
      id: 5,
      name: "Fast Frontend Development with Vite.js",
      description: "Explore how Vite.js improves build speed and DX for modern JavaScript projects.",
    }
  ];

  const [docIndex, setDocIndex] = useState<FlexDocument | null>(null);

  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);
  const onInput = useCallback((e: any) => {
    setInitialQuery(e.key);
    setIsOpen(true);
  }, []);

  // Dinamikus index betöltés az API-ról
  useEffect(() => {
    const loadIndex = async () => {
      const blogResult = await fetch("/api/search/blog");
      const posts: Post[] = await blogResult.json();

      const docsResult = await fetch("/api/search/docs");
      const docsList: Docs[] = await docsResult.json();

      const documentIndex = new FlexDocument({
        document: {
          id: "id",
          index: [
            {
              field: "name",
              tokenize: "forward",
              priority: 99,
              resolution: 9,
              context: true,
            },
            {
              field: "description",
              tokenize: "forward",
              priority: 2,
              resolution: 5,
              context: true,
            },
            {
              field: "url",
              tokenize: "forward",
              priority: 1,
              resolution: 5,
              context: true,
            },
            {
              field: "excerpt",
              priority: 0,
            },
          ],
          store: ["name", "url", "description", "excerpt"],
        },
      });    

      const extractTextFromChildren = (children: React.ReactNode): string => {
        if (typeof children === "string") {
          return children;
        }
        if (Array.isArray(children)) {
          return children.map(extractTextFromChildren).join('');
        }
        return '';
      };

      let idCounter = 1;
      posts.forEach((post) => {
        documentIndex.add({
          id: idCounter++,
          name: post.title,
          description: post.description,
          excerpt: extractTextFromChildren(post.excerpt.props.children),
          url: post.url
        });
      });
      docsList.forEach((docs) => {
        documentIndex.add({
          id: idCounter++,
          name: docs.title,
          description: docs.description,
          url: docs.url
        });
      });

      setDocIndex(documentIndex);
    };

    loadIndex();
  }, []);

  const search = async (docIndex: FlexDocument, initialQuery: string) => {
    const res = await docIndex.searchAsync(initialQuery, {
      enrich: true,
      context: true,
      suggest: true,
      merge: true,
      limit: 6,
      resolution: 9,
    });

    // @ts-ignore
    const hits = res.map((hit: any) => ({
      id: hit.id,
      ...hit.doc,
    }));

    setResults(hits);
  };

  useEffect(() => {
    if (!docIndex || !initialQuery) {
      setResults([]);
      return;
    }

    search(docIndex, initialQuery);
  }, [initialQuery, docIndex]);

  const contextValue = useMemo(() => ({ isOpen, onOpen, onClose, onInput }), [isOpen, onOpen, onClose, onInput]);

  return (
    <>
      <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>
      {isOpen &&
        createPortal(
          <div className="fixed inset-0 z-50 bg-black/30 dark:bg-white/30 backdrop-blur-xs" onClick={onClose}>
            <div
              className="absolute inset-x-0 top-24 mx-auto w-full max-w-3xl bg-white dark:bg-gray-950 rounded-xl shadow-xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between mb-4">
                <input
                  type="text"
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-2 focus:outline-1 focus:outline-sky-500"
                  value={initialQuery}
                  onChange={(e) => setInitialQuery(e.target.value)}
                  placeholder="Search..."
                  autoFocus
                />
                <button onClick={onClose} className="ml-2 text-sm text-gray-500 hover:text-black dark:hover:text-white">✕</button>
              </div>

              {initialQuery.length > 0 && results.length === 0 && (
                <p className="py-4 text-xl text-center text-gray-500">No results for "<span className="text-black dark:text-white">{initialQuery.trim()}</span>"</p>
              )}
              {results.length === 0 && (
                <>
                  <p className="pt-4 text-sm font-bold">Try searching for:</p>
                  <ul className="divide-y divide-gray-50 dark:divide-gray-900">
                    {tryResult.map((hit) => (
                      <li key={hit.id} className="cursor-pointer py-2">
                        <div
                          className="text-sm block hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-2 py-1 transition"
                          onClick={() => setInitialQuery(hit.name || "")}
                        >
                          <div className="font-medium text-gray-900 dark:text-gray-100 truncate">{hit.name}</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 truncate">{hit.description}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <ul className="divide-y divide-gray-50 dark:divide-gray-900">
                {results.map((hit) => (
                  <li key={hit.id} className="cursor-pointer py-2">
                    <Link
                      href={hit.url || "#"}
                      className="block hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-2 py-1 transition"
                      onClick={onClose}
                    >
                      <div className="font-medium text-gray-900 dark:text-gray-100 truncate">{hit.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 truncate">{hit.description}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export function SearchButton({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const searchButtonRef = useRef(null);
  const { onOpen, onInput } = useContext(SearchContext);

  useEffect(() => {
    function onKeyDown(event: any) {
      if (searchButtonRef.current === document.activeElement && /[a-zA-Z0-9]/.test(event.key)) {
        onInput(event);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onInput]);

  return (
    <button type="button" ref={searchButtonRef} onClick={onOpen} {...props}>
      {children}
    </button>
  );
}
