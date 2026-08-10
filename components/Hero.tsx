import { site } from "@/lib/site";
import { Check } from "./icons";

const chips = ["MBBS, MD Dermatology", "Vile Parle, Mumbai", "Free consultation"];

export default function Hero() {
  return (
    <section
      className="hero"
      id="top"
      style={{ ["--hero-image" as string]: `url('${site.heroImage}')` }}
    >
      <div className="wrap">
        <span className="eyebrow">Non-Surgical Hair Restoration · Mumbai</span>
        <h1>
          <b>
            PRP, GFC &amp;
            <br />
            <em>Exosome Therapy</em>
          </b>{" "}
          for hair
        </h1>
        <p className="lead">
          Doctor-led, non-surgical hair restoration with {site.doctor}, MD Dermatology,
          including PRP hair treatment, Growth Factor Concentrate (GFC) and exosome
          therapy. Start with a free consultation in Vile Parle, Mumbai.
        </p>
        <div className="trust">
          {chips.map((chip) => (
            <span className="chip" key={chip}>
              <Check size={15} /> {chip}
            </span>
          ))}
        </div>
        <div className="actions">
          <a href="#book" className="btn lg">
            Book a free consultation
          </a>
          <a href="#treatments" className="btn lg ghost">
            Explore treatments
          </a>
        </div>
      </div>
    </section>
  );
}
