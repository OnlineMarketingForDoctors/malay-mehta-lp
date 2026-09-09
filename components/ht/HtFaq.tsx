import { faqs } from "@/lib/ht";

/**
 * Native <details> accordions, so the answers are open to find-on-page and
 * work without JavaScript. The rule and the sign are drawn in CSS from the
 * open state; there is no script behind this section.
 */
export default function HtFaq() {
  return (
    <section className="hfaq" id="faq">
      <div className="shell hfaq__grid">
        <div className="hfaq__head">
          <span className="tag" data-reveal>
            Straight answers
          </span>
          <h2
            className="h2 hfaq__h2"
            data-reveal
            style={{ "--d": "80ms" } as React.CSSProperties}
          >
            What men ask
            <br />
            <span className="em">before they book.</span>
          </h2>
          <p
            className="hfaq__note"
            data-reveal
            style={{ "--d": "140ms" } as React.CSSProperties}
          >
            If your question is not here, ask it at the consultation. It is free
            and detailed, and the cost is explained before anything is booked.
          </p>
        </div>

        <div className="hfaq__list">
          {faqs.map((f, i) => (
            <details
              className="hfaq__item"
              key={f.q}
              data-reveal
              style={{ "--d": `${i * 60}ms` } as React.CSSProperties}
            >
              <summary className="hfaq__q">
                <span>{f.q}</span>
                <span className="hfaq__sign" aria-hidden="true" />
              </summary>
              <div className="hfaq__a">
                <p>{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
