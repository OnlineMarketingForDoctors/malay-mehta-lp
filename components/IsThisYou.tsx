import type { ReactNode } from "react";

const signals: { icon: ReactNode; text: string }[] = [
  {
    icon: (
      <>
        <path
          d="M3 12s3.5-7 9-7 9 7 9 7-3.5 7-9 7-9-7-9-7Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="2" />
      </>
    ),
    text: "You've noticed thinning, hair fall or a receding hairline",
  },
  {
    icon: (
      <path
        d="M12 3v18M5 8l7-5 7 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    text: "You'd rather explore non-surgical hair treatment first",
  },
  {
    icon: (
      <path
        d="M4 7h16M4 12h16M4 17h10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    ),
    text: "You've tried off-the-shelf products without much luck",
  },
  {
    icon: (
      <>
        <path
          d="M12 21s-7-4.35-7-10a7 7 0 0 1 14 0c0 5.65-7 10-7 10Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 11.5 11 13l3.5-3.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
    text: "You want an honest, expert opinion before deciding anything",
  },
];

export default function IsThisYou() {
  return (
    <section className="block" id="why">
      <div className="wrap">
        <div className="head center">
          <span className="eyebrow">Is this you?</span>
          <h2>
            If You&rsquo;re Noticing <b>Hair Loss or Thinning</b>
          </h2>
          <p>
            Many people exploring PRP, GFC or exosome therapy are at an early stage, and an
            assessment is a good first step.
          </p>
        </div>

        <div className="grid4">
          {signals.map((signal) => (
            <div className="signal" key={signal.text}>
              <div className="ic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {signal.icon}
                </svg>
              </div>
              <p>{signal.text}</p>
            </div>
          ))}
        </div>

        <div className="sectioncta center">
          <a href="#book" className="btn lg">
            Book your assessment
          </a>
        </div>
      </div>
    </section>
  );
}
