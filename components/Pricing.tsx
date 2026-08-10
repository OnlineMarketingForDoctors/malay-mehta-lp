const tiers = [
  { name: "PRP", amount: "₹10,000", desc: "Platelet-Rich Plasma" },
  { name: "GFC", amount: "₹15,000", desc: "Growth Factor Concentrate" },
  { name: "Exosome", amount: "₹20,000", desc: "Regenerative therapy" },
];

export default function Pricing() {
  return (
    <section className="block cream" id="pricing">
      <div className="wrap">
        <div className="head center">
          <span className="eyebrow">Pricing</span>
          <h2>
            Clear, <b>per-session</b> pricing
          </h2>
          <p>
            Straightforward per-session pricing. The right treatment and the number of
            sessions for you are decided with the doctor at your free consultation.
          </p>
        </div>

        <div className="pgrid">
          {tiers.map((tier) => (
            <div className="pcard" key={tier.name}>
              <div className="pname">{tier.name}</div>
              <div className="amt">{tier.amount}</div>
              <div className="per">per session</div>
              <div className="pdesc">{tier.desc}</div>
            </div>
          ))}
        </div>

        <p className="pnote">
          Prices are per session and indicative. The number of sessions and the right
          approach for you are assessed by the doctor at your consultation, which is free,
          with no obligation.
        </p>

        <div className="sectioncta center">
          <a href="#book" className="btn lg">
            Book a free consultation
          </a>
        </div>
      </div>
    </section>
  );
}
