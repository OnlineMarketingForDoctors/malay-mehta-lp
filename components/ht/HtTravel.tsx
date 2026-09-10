import Image from "next/image";
import { htImg, site } from "@/lib/site";
import { hotels, travelFacts, travelSteps } from "@/lib/ht";

/**
 * Travelling patients. Mumbai at dusk runs full width behind a cream panel
 * that overlaps its lower edge, so the card sits on the city rather than
 * beside it. The steps are a sequence and are numbered; the facts and the
 * hotels are lists and are not.
 */
export default function HtTravel() {
  return (
    <section className="htrv" id="travel">
      <figure className="htrv__media" data-reveal>
        <Image
          src={htImg.mumbai}
          alt="Mumbai at golden hour, looking towards the sea"
          fill
          sizes="100vw"
        />
        <figcaption className="htrv__cap">
          <span className="tag">Travelling patients</span>
          <p className="h3 htrv__cap-h">
            We treat patients from across Mumbai, Thane and Vashi, and from
            Dubai, Qatar and Turkey.
          </p>
        </figcaption>
      </figure>

      <div className="shell">
        <div className="htrv__panel" data-reveal>
          <div className="htrv__steps">
            <h3 className="h3 htrv__h3">Coming from further away</h3>
            <ol className="htrv__ol">
              {travelSteps.map((s, i) => (
                <li key={s}>
                  <span className="htrv__n">{String(i + 1).padStart(2, "0")}</span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="htrv__facts">
            <dl className="htrv__dl">
              {travelFacts.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>

            <div className="htrv__hotels">
              <span className="htrv__hotels-t">
                Where to stay, close to the clinic
              </span>
              <ul>
                {hotels.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>

            <p className="htrv__addr">
              All procedures take place at {site.street}, {site.locality}{" "}
              {site.postalCode}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
