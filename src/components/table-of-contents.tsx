"use client";

import { useEffect, useState, useRef } from "react";
import { NavList, NavListHeading, NavListItem, NavListItems, NavListLink } from "./nav-list";

export type TOCEntry = {
  level: number;
  text: string;
  slug: string;
  children: TOCEntry[];
};

export default function TableOfContents({ tableOfContents }: { tableOfContents: TOCEntry[] }) {
  let [activeSection, setActiveSection] = useState<string | null>(null);
  let containerRef = useRef<HTMLDivElement>(null);

  // Scroll active link to center of TOC component
  const scrollActiveLinkToCenter = (slug: string) => {
    if (!containerRef.current) return;
    
    const activeLink = containerRef.current.querySelector(`a[href="${slug}"]`);
    if (!activeLink) return;

    const container = containerRef.current;
    const linkRect = activeLink.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    
    const linkRelativeTop = linkRect.top - containerRect.top;
    const containerHeight = container.clientHeight;
    const linkHeight = activeLink.clientHeight;
    
    const targetScrollTop = container.scrollTop + linkRelativeTop - (containerHeight / 2) + (linkHeight / 2);
    
    container.scrollTo({
      top: targetScrollTop,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const root = document.querySelector('[data-content="true"]');
    if (!root) return;

    let elements = root.children;
    let sections: Map<Element, string> = new Map();
    let currentSectionId: string | null = null;
    for (let element of elements) {
      if (element.id && (element.tagName === "H2" || element.tagName === "H3")) currentSectionId = element.id;
      if (!currentSectionId) continue;

      sections.set(element, `#${currentSectionId}`);
    }

    let visibleElements = new Set<Element>();

    const callback = (entries: IntersectionObserverEntry[]) => {
      for (let entry of entries) {
        if (entry.isIntersecting) {
          visibleElements.add(entry.target);
        } else {
          visibleElements.delete(entry.target);
        }
      }

      let firstVisibleSection = Array.from(sections.entries()).find(([element]) => visibleElements.has(element));
      if (!firstVisibleSection) return;
      
      const newActiveSection = firstVisibleSection[1];
      setActiveSection(newActiveSection);
      
      // Auto-scroll active link to center of TOC
      scrollActiveLinkToCenter(newActiveSection);
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "-56px 0px",
    });

    Array.from(sections.keys()).forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // Handle manual clicks on TOC links
  const handleLinkClick = (slug: string) => {
    setActiveSection(slug);
    
    // Scroll the link to center of TOC after a short delay
    setTimeout(() => scrollActiveLinkToCenter(slug), 100);
  };

  return (
    <div ref={containerRef} className="overflow-auto overflow-x-hidden">
      <NavList>
        <NavListHeading>On this page</NavListHeading>
        <NavListItems data-toc="true">
          {tableOfContents.map(({ text, slug, children }, i) => (
            <NavListItem key={i}>
              <div onClick={() => handleLinkClick(slug)}>
                <NavListLink aria-current={activeSection === slug ? "location" : undefined} href={slug}>
                  {text}
                </NavListLink>
              </div>
              {children.length > 0 && (
                <NavListItems nested>
                  {children.map(({ text, slug }, i) => (
                    <NavListItem key={i}>
                      <div onClick={() => handleLinkClick(slug)}>
                        <NavListLink nested aria-current={activeSection === slug ? "location" : undefined} href={slug}>
                          {text}
                        </NavListLink>
                      </div>
                    </NavListItem>
                  ))}
                </NavListItems>
              )}
            </NavListItem>
          ))}
        </NavListItems>
      </NavList>
    </div>
  );
}