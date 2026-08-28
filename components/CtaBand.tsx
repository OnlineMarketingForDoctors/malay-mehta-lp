import { site } from "@/lib/site";
import { Arrow } from "./icons";

const included: [string, string][] = [
  ["01", "A dermatoscope look at your scalp and hairline"],
  ["02", "Which of PRP, GFC or exosome applies to you, if any"],
  ["03", "The number of sessions and what that costs"],
];

export default function CtaBand() {
  return (
    <section className="cta" id="consult">
      <div className="shell cta__grid">
        <div data-reveal>
          <span className="tag">Your consultation</span>
          <h2 className="cta__h">
            Twenty minutes that
            <br />
            decide the next year
            <br />
            of your hair.
          </h2>
          <div className="cta__acts">
            <a href="#book" className="btn btn--wide btn--on-dark">
              Book a consultation <Arrow />
            </a>
            <a href={site.phoneHref} className="cta__tel">
              or call {site.phoneDisplay}
            </a>
          </div>
        </div>

        <ul className="cta__list" data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
          {included.map(([n, text]) => (
            <li key={n}>
              <span>{n}</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
