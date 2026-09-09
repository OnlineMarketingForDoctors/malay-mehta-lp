import Image from "next/image";
import { htImg, site } from "@/lib/site";
import { ledger } from "@/lib/ht";
import { Arrow, GoogleG } from "../icons";

/**
 * Full-bleed photograph with the headline set low and left, and the page's
 * recurring device — a mono figure over a hairline rule — running along the
 * bottom as a strip. The strip is the hero's thesis: a hair transplant is
 * measured in countable units, and every number on this page is one.
 */
export default function HtHero() {
  return (
    <section className="hth" id="top">
      <div className="hth__media">
        <Image
          src={htImg.hero}
          alt={`${site.doctor} in the operating theatre at ${site.name}`}
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="hth__scrim" />

      <div className="hth__in shell">
        <span className="tag hth__tag" data-reveal>
          Sapphire FUE &middot; Vile Parle West, Mumbai
        </span>

        <h1
          className="h1 hth__h1"
          data-reveal
          style={{ "--d": "90ms" } as React.CSSProperties}
        >
          Hair transplant
          <br />
          <span className="em">in Mumbai.</span>
        </h1>

        <p
          className="hth__lede"
          data-reveal
          style={{ "--d": "170ms" } as React.CSSProperties}
        >
          One day, one sitting, and a rich look forever. A minimally invasive,
          long-lasting FUE hair transplant, planned and performed personally by
          {" "}
          {site.doctor}, MBBS, MD Dermatology.
        </p>

        <div
          className="hth__acts"
          data-reveal
          style={{ "--d": "240ms" } as React.CSSProperties}
        >
          <a href="#book" className="btn btn--wide">
            Book a consultation <Arrow />
          </a>
          <a href="#reviews" className="hth__badge">
            <GoogleG size={22} />
            <span className="hth__badge-body">
              <span className="hth__badge-top">
                <b>5.0</b>
                <span className="hth__badge-stars" aria-hidden="true">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </span>
              </span>
              <span className="hth__badge-sub">Rated on Google Reviews</span>
            </span>
          </a>
        </div>

        <p
          className="hth__price"
          data-reveal
          style={{ "--d": "300ms" } as React.CSSProperties}
        >
          From <b>7,000 INR</b> per 1,000 grafts, payable monthly at 0% interest
          <span className="hth__ast">*</span>
        </p>
      </div>

      <div className="hth__ledger">
        <div className="shell hth__ledger-in">
          {ledger.map((l, i) => (
            <div
              className="hth__cell"
              key={l.label}
              data-reveal
              style={{ "--d": `${360 + i * 70}ms` } as React.CSSProperties}
            >
              <span className="hth__fig">
                {l.figure}
                <i>{l.unit}</i>
              </span>
              <span className="hth__lab">{l.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
