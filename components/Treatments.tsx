"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { img } from "@/lib/site";
import { Arrow } from "./icons";

const options = [
  {
    key: "prp",
    abbr: "PRP",
    idx: "Option one",
    name: "Platelet-rich plasma",
    src: img.prp,
    plate: "Plate 01 · Plasma separation",
    body: "A small draw of your own blood is spun down until the platelet-rich layer separates, then injected across the thinning areas of the scalp. The oldest and best-understood of the three, and usually where a plan starts.",
    facts: ["Your own blood", "~45 min in clinic", "No downtime"],
  },
  {
    key: "gfc",
    abbr: "GFC",
    idx: "Option two",
    name: "Growth factor concentrate",
    src: img.gfc,
    plate: "Plate 02 · GFC preparation",
    body: "A newer preparation, also from your own blood, processed to concentrate the growth factors rather than the platelets that carry them. Dr Mehta will explain where it differs from PRP and whether that difference matters for your scalp.",
    facts: ["Your own blood", "Higher concentrate", "No downtime"],
  },
  {
    key: "exosome",
    abbr: "EXO",
    idx: "Option three",
    name: "Exosome therapy",
    src: img.exosome,
    plate: "Plate 03 · Regenerative vials",
    body: "The newest option, and the one we are most careful about. It is an evolving area, so the conversation covers what the current evidence does and does not show before anyone decides anything.",
    facts: ["Lab-prepared", "Evolving evidence", "Discussed first"],
  },
];

export default function Treatments() {
  const [active, setActive] = useState(0);
  const items = useRef<(HTMLElement | null)[]>([]);

  /** The sticky image follows whichever entry is nearest the middle of the
   *  viewport, so the picture always matches what is being read. */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const i = items.current.indexOf(visible.target as HTMLElement);
        if (i >= 0) setActive(i);
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: [0, 0.4, 1] },
    );
    items.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="band" id="treatments">
      <div className="shell">
        <div className="tx__intro">
          <div data-reveal>
            <span className="tag">What we actually offer</span>
            <h2 className="h2">
              Three injectables,
              <br />
              <span className="em">one honest conversation.</span>
            </h2>
          </div>
          <div data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
            <p className="lede">
              None of these is a transplant, and none of them suits everyone.
              Which one you are offered, if any, depends on what the
              dermatoscope shows.
            </p>
            <div className="tx__strip">
              {["No surgery", "No scars", "No downtime", "Men and women"].map(
                (p) => (
                  <span className="tx__pill" key={p}>
                    {p}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="tx__split">
          <div className="tx__sticky">
            <div className="tx__frame">
              {options.map((o, i) => (
                <Image
                  key={o.key}
                  src={o.src}
                  alt={o.plate}
                  fill
                  sizes="(max-width: 900px) 100vw, 42vw"
                  data-on={active === i}
                />
              ))}
            </div>
            <p className="plate">
              <b>{options[active].abbr}</b>
              <span>{options[active].plate}</span>
            </p>
          </div>

          <div className="tx__list">
            {options.map((o, i) => (
              <article
                className="tx__item"
                key={o.key}
                data-on={active === i}
                ref={(el) => {
                  items.current[i] = el;
                }}
              >
                {/* Per-option image. Hidden on desktop, where the sticky
                    column carries the picture; on mobile each option becomes
                    a self-contained card with its own image. */}
                <div className="tx__thumb">
                  <Image
                    src={o.src}
                    alt={o.plate}
                    width={1100}
                    height={1366}
                    sizes="100vw"
                  />
                </div>
                <div className="tx__body">
                  <span className="tx__idx">{o.idx}</span>
                  <h3 className="h3">{o.name}</h3>
                  <p>{o.body}</p>
                  <div className="tx__facts">
                    {o.facts.map((f) => (
                      <span key={f}>{f}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="tx__foot">
          <a href="#book" className="btn">
            Find out which one fits <Arrow />
          </a>
          <p className="tx__note">
            Suitability, benefits and risks are assessed and explained by the
            doctor at your consultation. Nothing above is an offer of treatment
            or medical advice; individual results vary and no outcome is
            guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
}
