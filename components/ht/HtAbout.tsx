import Image from "next/image";
import { htImg, site } from "@/lib/site";
import { education } from "@/lib/ht";

/**
 * A magazine spread. The portrait runs the full height of the left column and
 * bleeds to the viewport edge; a second, smaller frame overlaps its inner
 * corner. The running copy sits in a narrow measure on the right with the
 * training set beneath it as a ledger.
 */
export default function HtAbout() {
  return (
    <section className="habt" id="about">
      <div className="habt__grid">
        <div className="habt__media">
          <figure className="habt__plate" data-reveal>
            <Image
              src={htImg.portrait}
              alt={`${site.doctor}, MBBS, MD Dermatology`}
              fill
              sizes="(max-width: 980px) 100vw, 44vw"
            />
          </figure>
          {/* The satellite: the same man at the table rather than against a
              wall, overlapping the portrait's inner corner. */}
          <figure
            className="habt__satellite"
            data-reveal
            style={{ "--d": "180ms" } as React.CSSProperties}
          >
            <Image
              src={htImg.consult}
              alt={`${site.doctor} going through a scalp assessment with a patient`}
              fill
              sizes="(max-width: 980px) 52vw, 22vw"
            />
          </figure>
        </div>

        <div className="habt__body">
          <span className="tag" data-reveal>
            The surgeon
          </span>
          <h2
            className="h2 habt__h2"
            data-reveal
            style={{ "--d": "80ms" } as React.CSSProperties}
          >
            Discover the best
            <br />
            hair transplant doctor
            <br />
            <span className="em">in Mumbai.</span>
          </h2>

          <div
            className="habt__copy"
            data-reveal
            style={{ "--d": "140ms" } as React.CSSProperties}
          >
            <p className="habt__first">
              Dr Malay Mehta&rsquo;s reputation is built on one thing: hairlines
              nobody can pick out. He came to surgery through drawing, sketching
              and painting, and hairline design is where that still shows. The
              angle, the direction, the density and the irregular transition are
              drawn by hand on every patient before a single graft is taken,
              because a transplant is judged on whether the front looks like it
              grew there.
            </p>
            <p>
              He qualified MBBS in 2011 and took his MD in 2014, then spent four
              years in a chain clinic before opening his own centre in the heart
              of Mumbai, where he is chief surgeon and managing director. Four
              surgical tables run alongside a fully trained team, which is what
              makes a 5,000 to 6,000 graft sitting possible in one day instead
              of split across two surgeries six months apart. The punches are
              imported and run on a German motor, keeping graft transection to
              around 1 to 2%.
            </p>
            <p>
              The work he is best known for is the difficult end of it: grade 6
              and 7 patterns, exhausted donor areas, and repairing transplants
              performed badly elsewhere, where beard and body grafts make up the
              numbers a scalp no longer can. Patients come from across Mumbai and
              from Dubai, Qatar and Turkey. Dr Mehta plans every case himself,
              performs the surgery himself, and is in theatre throughout.
            </p>
          </div>

          <dl
            className="habt__edu"
            data-reveal
            style={{ "--d": "200ms" } as React.CSSProperties}
          >
            {education.map(([k, v]) => (
              <div className="habt__row" key={`${k}-${v}`}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
