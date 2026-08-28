"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Arrow } from "./icons";

/** Slides in once the hero is behind you, so it never covers the opening frame. */
export default function MobileCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="mcta" data-show={show}>
      <a href={`${site.lpPath}#book`} className="btn">
        Book a consultation <Arrow />
      </a>
    </div>
  );
}
