import type { ReactNode } from "react";

const pillars: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: (
      <path
        d="M12 2 3 6v6c0 5 3.8 8.5 9 10 5.2-1.5 9-5 9-10V6l-9-4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    ),
    title: "Qualified Dermatologist",
    body: "MBBS and MD in Dermatology, your assessment and any treatment are led by a doctor.",
  },
  {
    icon: (
      <>
        <path d="M12 3a9 9 0 1 0 9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path
          d="m8 12 3 3 6-7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
    title: "Honest Advice",
    body: 'We’re known for saying "no" when a treatment won’t help, you’ll get a straight answer.',
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
        <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="2" />
      </>
    ),
    title: "Established Mumbai Clinic",
    body: "A dedicated hair and skin clinic in Vile Parle West, caring for patients since 2018.",
  },
  {
    icon: (
      <>
        <path d="M4 5h16v14H4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M4 9h16M8 5v14" stroke="currentColor" strokeWidth="2" />
      </>
    ),
    title: "Options Explained Clearly",
    body: "PRP, GFC, exosome and other options, described plainly so you can choose with confidence.",
  },
  {
    icon: (
      <>
        <path
          d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="m9 12 2 2 4-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
    title: "Safe, Careful Care",
    body: "Strict clinical protocols at every step, in a fully equipped, doctor-run clinic.",
  },
  {
    icon: (
      <>
        <path d="M4 12a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M2 12h2M20 12h2M12 4V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 12 9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
    title: "Online or In-Clinic",
    body: "Start with a remote consultation if that's easier, reviewed personally by the doctor.",
  },
];

export default function WhyDrMehta() {
  return (
    <section className="block">
      <div className="wrap">
        <div className="head center">
          <span className="eyebrow">Why choose</span>
          <h2>Dr Malay Mehta</h2>
        </div>

        <div className="why">
          {pillars.map((pillar) => (
            <div className="pillar" key={pillar.title}>
              <div className="ic">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {pillar.icon}
                </svg>
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
