"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

function WhatsAppMark({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.15-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.29-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.01-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2A9.96 9.96 0 0 0 2.08 11.96c0 1.76.46 3.48 1.34 5L2 22l5.17-1.36a9.92 9.92 0 0 0 4.87 1.24h.01A9.96 9.96 0 0 0 22 11.92 9.96 9.96 0 0 0 12.04 2Zm0 18.19a8.24 8.24 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.24 8.24 0 1 1 15.28-4.4 8.26 8.26 0 0 1-8.29 8.26Z" />
    </svg>
  );
}

/**
 * Two persistent shortcuts: WhatsApp on the left, always available, and a
 * back-to-top on the right that only appears once there is something to go
 * back up to. On phones both sit above the sticky booking bar.
 */
export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <div className="floats" aria-label="Quick actions">
      <a
        className="floats__wa"
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Message ${site.name} on WhatsApp`}
      >
        <WhatsAppMark />
        <span className="floats__tip">Chat on WhatsApp</span>
      </a>

      <button
        type="button"
        className="floats__top"
        onClick={toTop}
        data-show={showTop}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M8 13.5V3m0 0L3.4 7.6M8 3l4.6 4.6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
