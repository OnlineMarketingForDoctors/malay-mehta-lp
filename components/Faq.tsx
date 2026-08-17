const faqs = [
  {
    q: "What is PRP hair treatment?",
    a: "PRP (platelet-rich plasma) hair treatment is a non-surgical procedure that uses a concentrate prepared from a small sample of your own blood, injected into the scalp. Whether it suits you is assessed by the doctor at your consultation.",
  },
  {
    q: "How is GFC therapy different from PRP?",
    a: "GFC (Growth Factor Concentrate) is a newer preparation also derived from your own blood. Dr Mehta will explain the practical differences between GFC and PRP and which may be more appropriate for you.",
  },
  {
    q: "What is exosome therapy for hair?",
    a: "Exosome therapy is a newer, non-surgical regenerative approach. As it's an evolving area, the doctor will discuss what it involves and the current evidence with you individually before any decision.",
  },
  {
    q: "What does PRP hair treatment cost?",
    a: "Cost depends on the plan that's right for you, so it's discussed openly at your consultation rather than quoted upfront. There's no obligation to proceed.",
  },
  {
    q: "Do you offer these treatments near me in Mumbai?",
    a: "Yes, the clinic is in Vile Parle West, Mumbai, and also sees patients from Navi Mumbai and across the city. You can start with an online consultation if that's easier.",
  },
  {
    q: "Is the consultation doctor-led?",
    a: "Yes. Your initial assessment is carried out by Dr Malay Mehta, MD Dermatology, with no obligation to proceed.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function Faq() {
  return (
    <section className="block cream" id="faq">
      <div className="wrap">
        <div className="head center">
          <span className="eyebrow">Good to know</span>
          <h2>Your Questions, Answered</h2>
        </div>

        <div className="faq">
          {faqs.map((faq, i) => (
            <details key={faq.q} open={i === 0}>
              <summary>
                {faq.q}
                <span className="pm" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="a">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        // Mirrors the questions and answers rendered above; no user input involved.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
