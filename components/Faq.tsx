"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is PRP hair treatment?",
    a: "A small amount of your own blood is spun in a centrifuge until the platelet-rich plasma separates out, and that layer is injected into the thinning areas of the scalp. It is non-surgical and done in the clinic. Whether it suits you is decided at the consultation, not before it.",
  },
  {
    q: "How is GFC different from PRP?",
    a: "GFC — growth factor concentrate — is also prepared from your own blood, but processed to concentrate the growth factors themselves rather than the platelets carrying them. Dr Mehta will explain where that difference matters for your pattern of loss and where it does not.",
  },
  {
    q: "What about exosome therapy?",
    a: "It is the newest of the three and the evidence is still developing, so it is discussed individually and carefully. You will be told what the current research does and does not show before any decision is made.",
  },
  {
    q: "How many sessions will I need?",
    a: "That is genuinely the one thing that cannot be answered from a website. It depends on the pattern and stage of loss, and it is what the dermatoscope assessment is for. Most plans run over several months.",
  },
  {
    q: "What does it cost?",
    a: "Per-session rates are published on this page: ₹10,000 for PRP, ₹15,000 for GFC and ₹20,000 for exosome therapy. The total depends on how many sessions your plan needs.",
  },
  {
    q: "Where is the clinic, and can I start online?",
    a: "The clinic is in Vile Parle West, Mumbai, and sees patients from across the city and Navi Mumbai. You can start with an online consultation, which the doctor reviews personally, if that is easier.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="band fq" id="faq">
      <div className="shell fq__grid">
        <aside className="fq__aside" data-reveal>
          <span className="tag">Good to know</span>
          <h2 className="h2">
            Questions
            <br />
            <span className="em">worth asking.</span>
          </h2>
          <p>
            If yours is not here, it is a good thing to bring to the
            consultation.
          </p>
        </aside>

        <div className="fq__list" data-reveal style={{ "--d": "110ms" } as React.CSSProperties}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className="fq__item" key={f.q} data-open={isOpen}>
                <h3>
                  <button
                    type="button"
                    className="fq__q"
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="fq__n">{String(i + 1).padStart(2, "0")}</span>
                    <span>{f.q}</span>
                    <span className="fq__sign" aria-hidden="true" />
                  </button>
                </h3>
                <div className="fq__a" id={`faq-a-${i}`} role="region">
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
