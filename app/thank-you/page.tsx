import type { Metadata } from "next";
import Image from "next/image";
import FloatingActions from "@/components/FloatingActions";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Check } from "@/components/icons";
import { img, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank you | Malay Mehta Aesthetic Clinic",
  description:
    "Your consultation request has been received. The clinic will call you shortly to arrange your doctor-led hair-loss assessment.",
  // Confirmation pages should never rank, or conversions get counted from
  // organic landings that never filled the form in.
  robots: { index: false, follow: false },
};

const next = [
  {
    when: "Within a working day",
    title: "We call you back",
    body: "A member of the clinic team will ring the number you gave us to find a time.",
  },
  {
    when: "At the appointment",
    title: "Dr Mehta looks at your scalp",
    body: "A dermatoscope assessment, online or at the Vile Parle clinic, whichever suits you.",
  },
  {
    when: "Before you leave",
    title: "You get a plan, or a no",
    body: "Which treatment, how many sessions, what it costs. Or an honest answer that it won't help.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <SiteHeader minimal />
      <main>
        <section className="ty">
          <div className="ty__bg">
            <Image src={img.clinic} alt="" fill sizes="100vw" aria-hidden="true" priority />
          </div>

          <div className="shell ty__in">
            <div className="ty__tick">
              <Check size={28} />
            </div>
            <span className="tag">Request received</span>
            <h1 className="ty__h">Thank you.</h1>
            <p className="ty__lede">
              We have your details and will call you shortly to arrange your
              doctor-led consultation.
            </p>
            <div className="ty__acts">
              <a href={site.phoneHref} className="btn btn--wide btn--on-dark">
                Call {site.phoneDisplay}
              </a>
              <span className="ty__when">Vile Parle West · Mumbai</span>
            </div>

            <div className="ty__next">
              {next.map((n) => (
                <article key={n.title}>
                  <span className="ty__when">{n.when}</span>
                  <h2>{n.title}</h2>
                  <p>{n.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
