"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Arrow } from "./icons";

const cases = [
  {
    src: "/results/gfc-case-01.jpg",
    who: "27 · Male",
    cond: "Androgenetic alopecia",
    det: "Medication, a laser helmet and four GFC sessions.",
    plate: "Plate 04",
  },
  {
    src: "/results/gfc-case-02.jpg",
    who: "24 · Female",
    cond: "Female pattern hair loss",
    det: "Medication and five monthly GFC sessions.",
    plate: "Plate 05",
  },
  {
    src: "/results/gfc-case-03.jpg",
    who: "28 · Female",
    cond: "Telogen effluvium",
    det: "Four GFC sessions and a multivitamin, after illness.",
    plate: "Plate 06",
  },
];

export default function Results() {
  const track = useRef<HTMLDivElement>(null);
  const [at, setAt] = useState(0);
  const [ends, setEnds] = useState({ start: true, end: false });

  /** One slide is one patient; the viewport shows two at a time. */
  const step = useCallback(() => {
    const el = track.current;
    if (!el) return 0;
    const first = el.querySelector<HTMLElement>(".rs__slide");
    return first ? first.offsetWidth + 24 : el.clientWidth / 2;
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
    <section className="band band--cream rs" id="results">
      <div className="shell">
        <div className="rs__top">
          <div data-reveal>
            <span className="tag">Before &amp; after</span>
            <h2 className="h2" style={{ marginTop: 20 }}>
              Three scalps,
              <br />
              <span className="em">months apart.</span>
            </h2>
          </div>
          <div className="rs__aside" data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
            <p className="rs__note">
              Real patients of the clinic, photographed with their consent and
              shown unretouched. Each of these plans combined GFC with other
              treatment, so the pictures are not a claim about GFC on its own.
            </p>
            <div className="rs__nav">
              <button
                type="button"
                className="rs__btn"
                onClick={() => go(-1)}
                disabled={ends.start}
                aria-label="Previous patient"
              >
                <Arrow size={16} />
              </button>
              <button
                type="button"
                className="rs__btn"
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

      <div className="rs__viewport shell">
        <div className="rs__track" ref={track}>
          {cases.map((c) => (
            <figure className="rs__slide" key={c.src}>
              <div className="rs__frame">
                <Image
                  src={c.src}
                  alt={`Before and after, ${c.who}, ${c.cond}`}
                  fill
                  sizes="(max-width: 820px) 86vw, 46vw"
                />
              </div>
              <figcaption className="rs__cap">
                <span className="rs__who">{c.who}</span>
                <span className="rs__who">{c.plate}</span>
                <span className="rs__cond">{c.cond}</span>
                <span className="rs__det">{c.det}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="shell">
        <div className="rs__dots" role="tablist" aria-label="Patients">
          {cases.map((c, i) => (
            <span key={c.src} className="rs__dot" data-on={i === at} aria-hidden="true" />
          ))}
        </div>

        <p className="rs__disc">
          Results are individual and not typical. Outcomes vary from person to
          person and are not guaranteed.
        </p>

        <div style={{ marginTop: 30 }}>
          <a href="#book" className="btn">
            Ask what is realistic for you <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
