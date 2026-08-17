import { Check } from "./icons";

const points = [
  "A doctor-led review of your hair and scalp",
  "A clear explanation of PRP, GFC and exosome, and what suits you",
  "A personalised plan, with no pressure to proceed",
];

export default function Value() {
  return (
    <section className="value">
      <div className="wrap">
        <div>
          <div className="big">
            <small>Your consultation</small>
            Without Obligation
          </div>
        </div>
        <div>
          <ul>
            {points.map((point) => (
              <li key={point}>
                <Check /> {point}
              </li>
            ))}
          </ul>
          <a href="#book" className="btn lg">
            Book a consultation
          </a>
        </div>
      </div>
    </section>
  );
}
