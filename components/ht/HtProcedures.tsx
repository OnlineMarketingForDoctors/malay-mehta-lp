import Image from "next/image";
import { procedures } from "@/lib/ht";

/**
 * The four procedures, as a staggered run of full-bleed image cards. Every
 * card is a different height and every other one drops down the page, so the
 * grid reads as a spread rather than a row of tiles. The copy sits on the
 * photograph under a scrim, which keeps the imagery at full size.
 */
export default function HtProcedures() {
  return (
    <section className="hproc" id="procedures">
      <div className="shell">
        <header className="hproc__head">
          <span className="tag" data-reveal>
            What we perform
          </span>
          <h2
            className="h2 hproc__h2"
            data-reveal
            style={{ "--d": "80ms" } as React.CSSProperties}
          >
            Hair transplant and restoration,
            <br />
            <span className="em">with natural results for a lifetime.</span>
          </h2>
        </header>

        <div className="hproc__grid">
          {procedures.map((p, i) => (
            <article
              className="hproc__card"
              key={p.key}
              data-proc={p.key}
              data-reveal
              style={{ "--d": `${(i % 2) * 110}ms` } as React.CSSProperties}
            >
              <div className="hproc__media">
                <Image
                  src={p.img}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 900px) 92vw, 46vw"
                />
              </div>
              <div className="hproc__body">
                <span className="hproc__lede">{p.lede}</span>
                <h3 className="h3 hproc__title">{p.title}</h3>
                <p className="hproc__copy">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
