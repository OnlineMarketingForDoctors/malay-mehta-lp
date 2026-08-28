"use client";

import { useEffect } from "react";

/**
 * One observer for the whole page. Sections stay server components and simply
 * mark themselves up:
 *   data-reveal        — fades and lifts in once, on first intersection
 *   data-draw          — sets data-drawn="true" (used by the process rule)
 * Elements are revealed immediately when the visitor prefers reduced motion,
 * and if IntersectionObserver is missing nothing is left hidden.
 */
export default function Motion() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal], [data-draw]"),
    );

    const reveal = (el: HTMLElement) => {
      if (el.hasAttribute("data-draw")) el.dataset.drawn = "true";
      if (el.hasAttribute("data-reveal")) el.dataset.reveal = "in";
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      nodes.forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          reveal(entry.target as HTMLElement);
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return null;
}
