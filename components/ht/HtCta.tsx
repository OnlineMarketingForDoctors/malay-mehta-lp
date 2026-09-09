import Image from "next/image";
import { htImg, site } from "@/lib/site";
import { Arrow, Phone } from "../icons";

/**
 * The dark break before the form. A theatre light on an almost black frame,
 * with the type sitting in the clean left two thirds the photograph was shot
 * to leave.
 */
export default function HtCta() {
  return (
    <section className="hcta">
      <div className="hcta__media" aria-hidden="true">
        <Image src={htImg.ctaLight} alt="" fill sizes="100vw" />
      </div>

      <div className="shell hcta__in">
        <h2 className="h2 hcta__h2" data-reveal>
          Ready to regain your hair
          <br />
          <span className="em">and your confidence?</span>
        </h2>
        <div
          className="hcta__acts"
          data-reveal
          style={{ "--d": "120ms" } as React.CSSProperties}
        >
          <a href="#book" className="btn btn--on-dark btn--wide">
            Book a consultation today <Arrow />
          </a>
          <a className="hcta__tel" href={site.phoneHref}>
            <Phone size={17} />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
