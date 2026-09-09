import { promise } from "@/lib/ht";

/**
 * The promise the FUE page opened with, kept as the page's second beat, right
 * after the reviews. It is the only centred section on the page, which is what
 * makes it read as a statement rather than another block of selling.
 */
export default function HtPromise() {
  return (
    <section className="hprm">
      <div className="shell hprm__in">
        <h2 className="h2 hprm__h2" data-reveal>
          {promise.lead}
          <br />
          <span className="em">{promise.em}</span>
        </h2>

        <p
          className="hprm__body"
          data-reveal
          style={{ "--d": "110ms" } as React.CSSProperties}
        >
          {promise.body}
        </p>

        <ul className="hprm__points">
          {promise.points.map(([value, label], i) => (
            <li
              key={label}
              data-reveal
              style={{ "--d": `${180 + i * 80}ms` } as React.CSSProperties}
            >
              <b>{value}</b>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
