"use client";

import { useRef, useState } from "react";
import { reviews } from "@/lib/reviews";
import { GoogleG } from "./icons";

/**
 * Continuous marquee of the clinic's Google reviews. The list is rendered
 * twice so the CSS translation can loop at -50% without a visible seam.
 * It pauses on hover and on focus, and can be dragged by hand.
 */
export default function ReviewMarquee() {
  const [paused, setPaused] = useState(false);
  const viewport = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0 });

  const onPointerDown = (e: React.PointerEvent) => {
    const el = viewport.current;
    if (!el) return;
    drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft };
    setPaused(true);
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const el = viewport.current;
    if (!el || !drag.current.active) return;
    el.scrollLeft = drag.current.startScroll - (e.clientX - drag.current.startX);
  };

  const endDrag = (e: React.PointerEvent) => {
    drag.current.active = false;
    viewport.current?.releasePointerCapture(e.pointerId);
    setPaused(false);
  };

  return (
    <section className="rv" aria-label="Google reviews">
      <div className="shell">
        <div className="rv__head">
          <span className="rv__score">
            <GoogleG /> <b>5.0</b>
            <span className="rv__stars" aria-hidden="true">
              ★★★★★
            </span>
            <span>on Google</span>
          </span>
          <span className="rv__hint">Drag or hover to pause</span>
        </div>
      </div>

      <div
        className="rv__viewport"
        ref={viewport}
        data-paused={paused}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => !drag.current.active && setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div className="rv__track">
          {[0, 1].map((pass) =>
            reviews.map((r) => (
              <figure
                className="rv__card"
                key={`${pass}-${r.name}`}
                aria-hidden={pass === 1 ? true : undefined}
              >
                <div className="rv__top">
                  <span className="rv__av" aria-hidden="true">
                    {r.initial}
                  </span>
                  <div>
                    <figcaption className="rv__name">{r.name}</figcaption>
                    <span className="rv__meta">{r.meta}</span>
                  </div>
                  <span className="rv__g">
                    <GoogleG size={16} />
                  </span>
                </div>
                <span className="rv__stars" aria-label="5 out of 5">
                  ★★★★★
                </span>
                <p className="rv__text">{r.text}</p>
                <div className="rv__when">{r.when}</div>
              </figure>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
