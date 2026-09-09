import Image from "next/image";
import { htImg } from "@/lib/site";
import { assurances, reasons } from "@/lib/ht";
import { Arrow } from "../icons";

/**
 * The dark band of the page. A full-bleed theatre photograph sits behind a
 * heavy scrim; the six reasons run as a numbered ledger over it, and the three
 * assurances close it as a row of mono figures. This is the only place on the
 * page where the reasons are numbered, because they are a list rather than a
 * sequence, and numbering here is a counting device, not a process.
 */
export default function HtWhy() {
  return (
    <section className="hwhy" id="why">
      <div className="hwhy__media" aria-hidden="true">
        <Image
          src={htImg.theatreWide}
          alt=""
          fill
          sizes="100vw"
          className="hwhy__img"
        />
      </div>

      <div className="shell hwhy__in">
        <div className="hwhy__head">
          <span className="tag" data-reveal>
            Why this clinic
          </span>
          <h2
            className="h2 hwhy__h2"
            data-reveal
            style={{ "--d": "80ms" } as React.CSSProperties}
          >
            Six reasons people
            <br />
            <span className="em">travel here for it.</span>
          </h2>
        </div>

        <ol className="hwhy__list">
          {reasons.map((r, i) => (
            <li
              className="hwhy__item"
              key={r.title}
              data-reveal
              style={{ "--d": `${(i % 3) * 90}ms` } as React.CSSProperties}
            >
              <span className="hwhy__n">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="hwhy__title">{r.title}</h3>
              <p className="hwhy__copy">{r.body}</p>
            </li>
          ))}
        </ol>

        <div className="hwhy__assure">
          {assurances.map((a, i) => (
            <div
              className="hwhy__cell"
              key={a.title}
              data-reveal
              style={{ "--d": `${i * 90}ms` } as React.CSSProperties}
            >
              <h3 className="hwhy__cell-t">{a.title}</h3>
              <p className="hwhy__cell-b">{a.body}</p>
            </div>
          ))}
        </div>

        <div className="hwhy__cta" data-reveal>
          <a href="#book" className="btn btn--on-dark btn--wide">
            Book a consultation today <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
