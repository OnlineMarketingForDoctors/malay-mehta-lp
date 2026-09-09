import Image from "next/image";
import { htImg } from "@/lib/site";
import { Arrow } from "../icons";

/**
 * The price, typeset rather than tabulated. A macro of the scalp runs full
 * bleed behind a dark scrim, and the figure is set as one sentence you read
 * across, with the instalment maths broken out beside it.
 */
export default function HtPricing() {
  return (
    <section className="hpri" id="pricing">
      <div className="hpri__media" aria-hidden="true">
        <Image src={htImg.scalp} alt="" fill sizes="100vw" />
      </div>

      <div className="shell hpri__in">
        <span className="tag" data-reveal>
          Pricing
        </span>

        <p
          className="hpri__stmt"
          data-reveal
          style={{ "--d": "80ms" } as React.CSSProperties}
        >
          The price for a Sapphire FUE transplant starts at only{" "}
          <b className="hpri__fig">7,000&nbsp;INR</b>{" "}
          <span className="hpri__per">per 1,000 grafts</span>{" "}
          <span className="hpri__fine">(follicular units).</span>
        </p>

        <div className="hpri__split">
          <div
            className="hpri__terms"
            data-reveal
            style={{ "--d": "160ms" } as React.CSSProperties}
          >
            <div className="hpri__row">
              <span>Instalment period</span>
              <b>Up to 8 months</b>
            </div>
            <div className="hpri__row">
              <span>Interest</span>
              <b>0%</b>
            </div>
            <div className="hpri__row">
              <span>Monthly cost</span>
              <b>7,000 INR / 1,000 grafts</b>
            </div>
          </div>

          <div
            className="hpri__note"
            data-reveal
            style={{ "--d": "220ms" } as React.CSSProperties}
          >
            <p>
              What you pay depends on the graft count your plan needs, and that
              number is counted from your own donor area rather than estimated
              over the phone. You are given the count and the figure at your
              consultation, before anything is booked.
            </p>
            <a href="#book" className="btn btn--on-dark">
              Get your graft count <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
