import Image from "next/image";
import { img, site } from "@/lib/site";
import { Arrow, Check, GoogleG } from "./icons";

const selling = [
  "PRP, GFC and exosome therapy under one roof",
  "Non-surgical, with zero downtime",
  "Assessed and injected by an MD dermatologist",
  "Clear per-session pricing, published up front",
];

const ledger: [string, string][] = [
  ["Qualification", "MBBS · MD Derm"],
  ["Fellowships", "McGill · Nashville"],
  ["Clinic", "Vile Parle W, Mumbai"],
  ["Practising since", "2018"],
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__media">
        <Image
          src={img.hero}
          alt={`${site.doctor} in the consultation room at ${site.name}`}
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="hero__scrim" />

      <div className="hero__in shell">
        <div className="hero__grid">
          <div>
            <span className="tag" data-reveal>
              Non-surgical hair restoration · Mumbai
            </span>
            <h1 className="h1 hero__h1" data-reveal style={{ "--d": "90ms" } as React.CSSProperties}>
              Hair you keep,
              <br />
              <span className="em">without surgery.</span>
            </h1>
            <p
              className="lede hero__lede"
              data-reveal
              style={{ "--d": "180ms" } as React.CSSProperties}
            >
              PRP, GFC and exosome therapy for thinning hair, planned and
              performed by {site.doctor}, MD Dermatology. One honest assessment,
              then a plan that fits your scalp, or a straight answer that it
              won&rsquo;t help.
            </p>
            <ul
              className="hero__points"
              data-reveal
              style={{ "--d": "230ms" } as React.CSSProperties}
            >
              {selling.map((s) => (
                <li key={s}>
                  <Check size={16} />
                  <span>{s}</span>
                </li>
              ))}
            </ul>

            <div
              className="hero__acts"
              data-reveal
              style={{ "--d": "300ms" } as React.CSSProperties}
            >
              <a href="#book" className="btn btn--wide">
                Book a consultation <Arrow />
              </a>
              <a href="#reviews" className="hero__badge">
                <GoogleG size={22} />
                <span className="hero__badge-body">
                  <span className="hero__badge-top">
                    <b>5.0</b>
                    <span className="hero__badge-stars" aria-hidden="true">
                      &#9733;&#9733;&#9733;&#9733;&#9733;
                    </span>
                  </span>
                  <span className="hero__badge-sub">Rated on Google Reviews</span>
                </span>
              </a>
            </div>
          </div>

          <div
            className="hero__ledger"
            data-reveal
            style={{ "--d": "340ms" } as React.CSSProperties}
          >
            {ledger.map(([k, v]) => (
              <div className="hero__row" key={k}>
                <span>{k}</span>
                <b>{v}</b>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
