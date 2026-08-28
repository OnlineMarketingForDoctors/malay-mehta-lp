import Image from "next/image";
import { img, site } from "@/lib/site";
import { Arrow } from "./icons";

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
            <div
              className="hero__acts"
              data-reveal
              style={{ "--d": "270ms" } as React.CSSProperties}
            >
              <a href="#book" className="btn btn--wide">
                Book a consultation <Arrow />
              </a>
              <a href="#treatments" className="btn btn--wide btn--ghost" style={{ color: "#fff", borderColor: "rgba(255,255,255,.42)" }}>
                See the three options
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
