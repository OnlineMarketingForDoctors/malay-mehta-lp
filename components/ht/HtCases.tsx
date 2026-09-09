"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { caseStudies } from "@/lib/ht";
import { Arrow } from "../icons";

/**
 * The clinic's documented cases, one full-width slide each: the two
 * photographs side by side on the left, the operative detail on the right.
 *
 * Deliberately not the same slider as the before and after row further up the
 * page. That one is a run of small frames you skim; this one is one case at a
 * time, at reading size, because each of these has a surgical note behind it.
 */
export default function HtCases() {
  const track = useRef<HTMLDivElement>(null);
  const [at, setAt] = useState(0);

  const sync = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const first = el.querySelector<HTMLElement>(".hcase__slide");
    const step = first ? first.offsetWidth : el.clientWidth;
    setAt(Math.round(el.scrollLeft / (step || 1)));
  }, []);

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

  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const first = el.querySelector<HTMLElement>(".hcase__slide");
    const step = first ? first.offsetWidth : el.clientWidth;
    el.scrollTo({ left: i * step, behavior: "smooth" });
  };

  const last = caseStudies.length - 1;

  return (
    <section className="hcase" id="cases">
      <div className="shell">
        <div className="hcase__top">
          <div data-reveal>
            <span className="tag">Case studies</span>
            <h2 className="h2 hcase__h2">
              Case notes,
              <br />
              <span className="em">not just photographs.</span>
            </h2>
          </div>
          <div
            className="hcase__aside"
            data-reveal
            style={{ "--d": "120ms" } as React.CSSProperties}
          >
            <p className="hcase__note">
              Each of these is a real operation with an operative note behind
              it: the diagnosis, the graft count, what was treated and how long
              after surgery the photograph was taken.
            </p>
            <div className="hcase__nav">
              <button
                type="button"
                className="hcase__btn"
                onClick={() => go(Math.max(0, at - 1))}
                disabled={at <= 0}
                aria-label="Previous case"
              >
                <Arrow size={16} />
              </button>
              <span className="hcase__count" aria-hidden="true">
                {String(at + 1).padStart(2, "0")}
                <i>/</i>
                {String(caseStudies.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                className="hcase__btn"
                onClick={() => go(Math.min(last, at + 1))}
                disabled={at >= last}
                aria-label="Next case"
              >
                <Arrow size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hcase__viewport">
        <div className="hcase__track" ref={track} tabIndex={0} aria-label="Case studies">
          {caseStudies.map((c) => (
            <article className="hcase__slide" key={c.n}>
              <div className="shell hcase__grid">
                <div className="hcase__pair">
                  <figure className="hcase__frame">
                    <Image
                      src={c.before}
                      alt={c.alt}
                      width={900}
                      height={1125}
                      sizes="(max-width: 900px) 44vw, 24vw"
                    />
                    <figcaption>Before</figcaption>
                  </figure>
                  <figure className="hcase__frame hcase__frame--after">
                    <Image
                      src={c.after}
                      alt=""
                      width={900}
                      height={1125}
                      sizes="(max-width: 900px) 44vw, 24vw"
                    />
                    <figcaption>After</figcaption>
                  </figure>
                </div>

                <div className="hcase__body">
                  <span className="hcase__n" aria-hidden="true">
                    {c.n}
                  </span>
                  <h3 className="hcase__who">{c.who}</h3>
                  <p className="hcase__proc">
                    <b>{c.grafts}</b> grafts &middot; {c.procedure}
                  </p>

                  <dl className="hcase__facts">
                    {c.facts.map(([k, v]) => (
                      <div key={k}>
                        <dt>{k}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>

                  <p className="hcase__summary">{c.summary}</p>
                  <p className="hcase__detail">{c.detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="shell">
        <div className="hcase__dots" aria-hidden="true">
          {caseStudies.map((c, i) => (
            <button
              type="button"
              key={c.n}
              className="hcase__dot"
              data-on={i === at}
              onClick={() => go(i)}
              tabIndex={-1}
            />
          ))}
        </div>
        <p className="hcase__disc">
          Published with the patients&rsquo; consent. Results are individual and
          not typical. Outcomes vary from person to person and are not
          guaranteed.
        </p>
      </div>
    </section>
  );
}
