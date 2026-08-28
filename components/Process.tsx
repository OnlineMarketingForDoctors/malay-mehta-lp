const steps = [
  {
    when: "Day one",
    title: "You tell us what changed",
    body: "A few details online, then a call to find a time — at the Vile Parle clinic or over video if that is easier.",
  },
  {
    when: "The appointment",
    title: "Dr Mehta looks at your scalp",
    body: "A dermatoscope, your history, and a straight read on what is actually happening up there. This is the part that decides everything else.",
  },
  {
    when: "Before you leave",
    title: "You get a plan, or a no",
    body: "Which treatment, how many sessions, what it costs — or an honest answer that none of it is worth your money.",
  },
];

export default function Process() {
  return (
    <section className="band" id="process">
      <div className="shell">
        <div className="hw__head" data-reveal>
          <span className="tag">How it works</span>
          <h2 className="h2">
            Three steps, and
            <br />
            <span className="em">one of them is a maybe.</span>
          </h2>
        </div>

        <div className="hw__track" data-draw>
          {steps.map((s, i) => (
            <article
              className="hw__step"
              key={s.title}
              style={{ "--dd": `${400 + i * 260}ms` } as React.CSSProperties}
            >
              <span className="hw__dot" aria-hidden="true" />
              <span className="hw__when">{s.when}</span>
              <h3 className="h3">{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
