import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Check } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank you | Malay Mehta Aesthetic Clinic",
  description:
    "Your consultation request has been received. The clinic will call you shortly to arrange your free, doctor-led hair-loss assessment.",
  // Confirmation pages should never rank, or conversions get counted from
  // organic landings that never filled the form in.
  robots: { index: false, follow: false },
};

const steps = [
  {
    title: "We call you back",
    body: "A member of the clinic team will call you on the number you gave us, usually within one working day.",
  },
  {
    title: "We find a time that suits",
    body: "Your free consultation can be online or at the clinic in Vile Parle West, whichever is easier for you.",
  },
  {
    title: "You meet Dr Mehta",
    body: "A doctor-led review of your hair and scalp, a clear explanation of your options, and no pressure to proceed.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <SiteHeader minimal />
      <main>
        <section className="tyhero">
          <div className="wrap">
            <div className="tytick">
              <Check size={34} />
            </div>
            <span className="eyebrow">Request received</span>
            <h1>Thank you</h1>
            <p className="lead">
              We&rsquo;ve received your details and will call you shortly to arrange your
              free, doctor-led consultation.
            </p>
            <div className="callnow">
              Need us sooner? Call <a href={site.phoneHref}>{site.phoneDisplay}</a>
            </div>
          </div>
        </section>

        <section className="block">
          <div className="wrap">
            <div className="head center">
              <span className="eyebrow">What happens next</span>
              <h2>
                Three steps, <b>starting with a call</b>
              </h2>
            </div>
            <div className="steps">
              {steps.map((step) => (
                <div className="step" key={step.title}>
                  <div className="n" />
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="block cream">
          <div className="wrap tyvisit">
            <div>
              <span className="eyebrow">Where to find us</span>
              <h2>{site.name}</h2>
              <address>
                {site.street}
                <br />
                {site.locality} {site.postalCode}, {site.region}, India
              </address>
              <ul className="creds">
                <li>
                  <Check /> Free, no-obligation consultation
                </li>
                <li>
                  <Check /> Online or in-clinic, whichever suits you
                </li>
                <li>
                  <Check /> Led by {site.doctor}, MD Dermatology
                </li>
              </ul>
            </div>
            <div className="tyactions">
              <a href={site.phoneHref} className="btn lg">
                Call {site.phoneDisplay}
              </a>
              <a href="/" className="btn lg tyghost">
                Back to the page
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
