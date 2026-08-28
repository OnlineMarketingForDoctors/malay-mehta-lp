import { Arrow } from "./icons";

const rows = [
  {
    abbr: "PRP",
    name: "Platelet-rich plasma",
    sub: "Prepared from your own blood",
    amount: "₹10,000",
  },
  {
    abbr: "GFC",
    name: "Growth factor concentrate",
    sub: "Concentrated growth factors, also from your blood",
    amount: "₹15,000",
  },
  {
    abbr: "EXO",
    name: "Exosome therapy",
    sub: "Lab-prepared regenerative treatment",
    amount: "₹20,000",
  },
];

export default function Pricing() {
  return (
    <section className="band pr" id="pricing">
      <div className="shell">
        <div className="pr__head">
          <div data-reveal>
            <span className="tag">Pricing</span>
            <h2 className="h2" style={{ marginTop: 20, color: "#fff" }}>
              Per session,
              <br />
              <span className="em">published up front.</span>
            </h2>
          </div>
          <p className="lede" data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
            How many sessions you need is the part nobody can quote from a
            website — that comes out of the assessment. The rate per session
            doesn&rsquo;t move.
          </p>
        </div>

        <div className="pr__list" data-reveal>
          {rows.map((r) => (
            <div className="pr__row" key={r.abbr}>
              <span className="pr__abbr">{r.abbr}</span>
              <h3 className="pr__name">
                {r.name}
                <span>{r.sub}</span>
              </h3>
              <span className="pr__amt">
                {r.amount}
                <em>per session</em>
              </span>
            </div>
          ))}
        </div>

        <div className="pr__foot">
          <p className="pr__fine">
            Indicative per-session pricing. The number of sessions, and whether
            any of these is right for you at all, is decided with the doctor at
            your consultation.
          </p>
          <a href="#book" className="btn btn--on-dark">
            Get a plan and a number <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
