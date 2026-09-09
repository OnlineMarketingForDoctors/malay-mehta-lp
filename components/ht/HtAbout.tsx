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
              Dr Malay Mehta began his career in a small part of Gujarat, where
              his passion for serving his local community was formed. He found
              his calling in cosmetic procedures through his love of drawing,
              sketching and painting: the science and the art matched.
            </p>
            <p>
              He trained in dermatology, the science of skin, hair and nail, and
              worked in a chain clinic for four years before starting out as a
              hair transplant surgeon and cosmetic dermatologist. He holds
              fellowships in microsurgical and advanced medical dermatology
              under Dr Robin Billick at McGill University, Canada, and in laser
              and cosmetic dermatology under Dr Michael Gold in Nashville.
            </p>
            <p>
              He then set up his own centre in the heart of Mumbai, where he
              works as chief dermatologist and managing director. The clinic
              runs four surgical tables alongside fully trained staff, which is
              what allows a full sitting to be finished in one day. His
              reputation has come from hair transplant work, where he is known
              for creating a natural look through advanced, safe techniques at a
              price everyone can afford.
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
