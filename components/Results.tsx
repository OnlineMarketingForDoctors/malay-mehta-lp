import Image from "next/image";
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
  return (
    <section className="band band--cream" id="results">
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
          <p className="rs__note" data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
            Real patients of the clinic, photographed with their consent and
            shown unretouched. Each of these plans combined GFC with other
            treatment, so the pictures are not a claim about GFC on its own.
          </p>
        </div>

        <div className="rs__stack">
          {cases.map((c, i) => (
            <figure
              className="rs__plate"
              key={c.src}
              data-reveal
              style={{ "--d": `${i * 110}ms` } as React.CSSProperties}
            >
              <Image
                src={c.src}
                alt={`Before and after, ${c.who}, ${c.cond}`}
                width={800}
                height={500}
                sizes="(max-width: 820px) 100vw, 55vw"
              />
              <figcaption className="rs__cap">
                <span className="rs__who">{c.who}</span>
                <span className="rs__who">{c.plate}</span>
                <span className="rs__cond">{c.cond}</span>
                <span className="rs__det">{c.det}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="rs__disc">
          Results are individual and not typical. Outcomes vary from person to
          person and are not guaranteed.
        </p>

        <div style={{ marginTop: 34 }}>
          <a href="#book" className="btn">
            Ask what is realistic for you <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
