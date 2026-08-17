const steps = [
  {
    title: "Book a Consultation",
    body: "Share a few details and we'll arrange a time that suits you, online or at the Vile Parle clinic.",
  },
  {
    title: "A Doctor-Led Assessment",
    body: "Dr Mehta examines your hair and scalp, listens to your goals, and explains what's actually happening.",
  },
  {
    title: "A Personalised Plan",
    body: "You'll get a clear view of your options: PRP, GFC, exosome or other non-surgical care, with no pressure.",
  },
];

export default function HowItWorks() {
  return (
    <section className="block cream" id="how">
      <div className="wrap">
        <div className="head center">
          <span className="eyebrow">How it works</span>
          <h2>
            Three Simple Steps to a <b>Clear Plan</b>
          </h2>
          <p>
            The consultation is about understanding your hair first, not selling you a
            procedure.
          </p>
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
  );
}
