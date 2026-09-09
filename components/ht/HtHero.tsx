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
      {/*
        Art direction rather than one crop for both: a landscape frame with the
        type beside him on a desktop, a portrait one with him centred and the
        type below it on a phone. <picture> so only one of the two is ever
        fetched, which next/image cannot express.
      */}
      <div className="hth__media">
        <picture>
          <source media="(max-width: 900px)" srcSet={htImg.heroMobile} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={htImg.hero}
            alt={`${site.doctor} in the operating theatre at ${site.name}`}
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </div>
      <div className="hth__scrim" />

      <div className="hth__in shell">
        <span className="tag hth__tag" data-reveal>
          Hair transplant in Mumbai
        </span>

        <h1
          className="h1 hth__h1"
          data-reveal
          style={{ "--d": "90ms" } as React.CSSProperties}
        >
          Take ten years
          <br />
          <span className="em">off the mirror.</span>
        </h1>

        <p
          className="hth__lede"
          data-reveal
          style={{ "--d": "170ms" } as React.CSSProperties}
        >
          Up to 6,000 grafts placed in a single sitting, by {site.doctor}{" "}
          himself, behind a hairline drawn by hand to suit your face. Permanent,
          minimally invasive, and finished in a day.
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
