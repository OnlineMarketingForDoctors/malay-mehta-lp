"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { results } from "@/lib/ht";
import { Arrow } from "../icons";

/**
 * The clinic's own before and after photographs, one patient per slide. Each
 * slide leads with its graft count set large in mono — the number is what
 * distinguishes one case from another, so it is the thing the eye lands on.
 *
 * The track is a scroll-snap row driven by native scrolling, so it drags on a
 * phone and steps with the buttons or the keyboard on a desktop.
 */
export default function HtResults() {
  const track = useRef<HTMLDivElement>(null);
  const [at, setAt] = useState(0);
  const [ends, setEnds] = useState({ start: true, end: false });

  const step = useCallback(() => {
    const el = track.current;
    if (!el) return 0;
    const first = el.querySelector<HTMLElement>(".hres__slide");
    return first ? first.offsetWidth + 28 : el.clientWidth;
  }, []);

  const sync = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const s = step() || 1;
    setAt(Math.round(el.scrollLeft / s));
    setEnds({
      start: el.scrollLeft <= 2,
      end: el.scrollLeft >= el.scrollWidth - el.clientWidth - 2,
    });
  }, [step]);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const go = (dir: -1 | 1) =>
    track.current?.scrollBy({ left: dir * step(), behavior: "smooth" });

  return (
    <section className="hres" id="results">
      <div className="shell">
        <div className="hres__top">
          <div data-reveal>
            <span className="tag">Before &amp; after</span>
            <h2 className="h2 hres__h2">
              Eleven patients,
              <br />
              <span className="em">counted in grafts.</span>
            </h2>
          </div>
          <div
            className="hres__aside"
            data-reveal
            style={{ "--d": "120ms" } as React.CSSProperties}
          >
            <p className="hres__note">
              The clinic&rsquo;s own patients, published with their eyes
              redacted. Every case here carries its graft count, its Norwood
              Hamilton grade and the month the photograph was taken, because
              those three things are what a result actually means.
            </p>
            <div className="hres__nav">
              <button
                type="button"
                className="hres__btn"
                onClick={() => go(-1)}
                disabled={ends.start}
                aria-label="Previous patient"
              >
                <Arrow size={16} />
              </button>
              <button
                type="button"
                className="hres__btn"
                onClick={() => go(1)}
                disabled={ends.end}
                aria-label="Next patient"
              >
                <Arrow size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hres__viewport">
        <div className="hres__track" ref={track} tabIndex={0} aria-label="Patient results">
          {results.map((c) => (
            <figure className="hres__slide" key={c.src}>
              <div className="hres__frame">
                <span className="hres__grafts" aria-hidden="true">
                  {c.grafts}
                </span>
                <Image
                  src={c.src}
                  alt={`Before and after a hair transplant, ${c.title}`}
                  width={560}
                  height={560}
                  sizes="(max-width: 760px) 84vw, 380px"
                />
              </div>
              <figcaption className="hres__cap">
                <p className="hres__who">{c.title}</p>
                <dl className="hres__meta">
                  {c.meta.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="hres__det">{c.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="shell">
        <div className="hres__dots" aria-hidden="true">
          {results.map((c, i) => (
            <span key={c.src} className="hres__dot" data-on={i === at} />
          ))}
        </div>

        <p className="hres__disc">
          Results are individual and not typical. Outcomes vary from person to
          person and are not guaranteed.
        </p>

        <div className="hres__cta">
          <a href="#book" className="btn">
            Ask what is realistic for you <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
