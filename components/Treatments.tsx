import { Check } from "./icons";

const benefits = [
  "Non-surgical",
  "No surgery or scars",
  "No downtime",
  "Virtually painless",
  "Quick in-clinic sessions",
  "For men and women",
  "Personalised plan",
  "Doctor-led",
];

const treatments = [
  {
    kicker: "Platelet-Rich Plasma",
    title: "PRP Hair Treatment",
    body: "A non-surgical treatment prepared from a small sample of your own blood, which is processed and injected into the scalp. Commonly considered as part of a wider, doctor-guided hair-care plan.",
    icon: (
      <path
        d="M7 3h10M9 3v4l-4 8a4 4 0 0 0 4 6h2a4 4 0 0 0 4-6l-4-8V3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    ),
  },
  {
    kicker: "Growth Factor Concentrate",
    title: "GFC Therapy",
    body: "A next-generation, non-surgical injectable also prepared from growth factors in your own blood. Dr Mehta will explain how GFC differs from PRP and whether it fits your situation.",
    icon: (
      <path
        d="M12 2v6M12 8a5 5 0 0 1 5 5c0 4-5 9-5 9s-5-5-5-9a5 5 0 0 1 5-5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    ),
  },
  {
    kicker: "Regenerative",
    title: "Exosome Therapy",
    body: "A newer, non-surgical regenerative approach. As a newer treatment, it's discussed with you individually, including what it involves and what it can and can't do, so you can make an informed choice.",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ),
  },
];

const subOptions = [
  {
    title: "Mesotherapy",
    body: "Micro-injections of a doctor-selected blend into the scalp.",
  },
  {
    title: "Low-Level Laser Therapy",
    body: "A non-invasive, light-based in-clinic option.",
  },
  {
    title: "Medical & topical care",
    body: "Doctor-guided oral and topical support, where appropriate.",
  },
];

export default function Treatments() {
  return (
    <section className="block" id="treatments">
      <div className="wrap">
        <div className="head">
          <span className="eyebrow">Regenerative &amp; non-surgical options</span>
          <h2>
            PRP, GFC &amp; <b>exosome therapy</b> for hair
          </h2>
          <p>
            Non-surgical, doctor-led approaches to hair loss. Here&rsquo;s a
            plain-English overview. Which option suits you is assessed and decided
            together at your consultation.
          </p>
        </div>

        <div className="benefits">
          {benefits.map((benefit) => (
            <div key={benefit}>
              <Check size={17} /> {benefit}
            </div>
          ))}
        </div>

        <div className="tgrid">
          {treatments.map((treatment) => (
            <div className="tcard" key={treatment.title}>
              <div className="ic">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {treatment.icon}
                </svg>
              </div>
              <span className="kw">{treatment.kicker}</span>
              <h3>{treatment.title}</h3>
              <p>{treatment.body}</p>
              <span className="tag">Discussed at your consultation</span>
            </div>
          ))}
        </div>

        <div className="suboptions">
          {subOptions.map((option) => (
            <div className="subopt" key={option.title}>
              <b>{option.title}</b>
              <span>{option.body}</span>
            </div>
          ))}
        </div>

        <p className="disclaim">
          Suitability, benefits and risks of any treatment are assessed and explained by
          the doctor at your consultation. The descriptions above are informational only,
          they are not offers of treatment or medical advice, individual results vary, and
          no specific outcome is implied or guaranteed. Exosome-based products are a newer,
          evolving area; your doctor will discuss the current evidence with you.
        </p>

        <div className="sectioncta">
          <a href="#book" className="btn lg">
            Book a free consultation
          </a>
        </div>
      </div>
    </section>
  );
}
