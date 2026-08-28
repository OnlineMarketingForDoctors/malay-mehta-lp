import Image from "next/image";
import { img, site } from "@/lib/site";

const creds: [string, string][] = [
  ["Degrees", "MBBS · MD Dermatology, Venereology & Leprosy"],
  ["Fellowship", "Microsurgical and advanced medical dermatology, McGill University, Canada"],
  ["Fellowship", "Laser and cosmetic dermatology, Nashville, USA"],
  ["Role", `Founder and chief dermatologist, ${site.name}`],
];

export default function About() {
  return (
    <section className="band ab" id="about">
      <div className="shell ab__grid">
        <figure className="ab__media" data-reveal>
          <Image
            src={img.portrait}
            alt={`Portrait of ${site.doctor}`}
            width={1200}
            height={1490}
            sizes="(max-width: 900px) 100vw, 40vw"
          />
          <figcaption className="plate">
            <b>Plate 07</b>
            <span>{site.doctor}, MD Dermatology</span>
          </figcaption>
        </figure>

        <div data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
          <span className="tag">The doctor</span>
          <p className="ab__quote">
            Known across Mumbai for telling people when a treatment
            won&rsquo;t work for their pattern of loss &mdash; before they pay
            for it.
          </p>
          <p className="ab__body">
            {site.doctor} is a dermatologist specialising in hair and skin, and
            the founder of {site.name} in Vile Parle West. He trained in advanced
            medical and cosmetic dermatology internationally before setting up
            the clinic, and still does the assessments himself.
          </p>
          <ul className="ab__creds">
            {creds.map(([k, v], i) => (
              <li key={`${k}-${i}`}>
                <span>{k}</span>
                <span>{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
