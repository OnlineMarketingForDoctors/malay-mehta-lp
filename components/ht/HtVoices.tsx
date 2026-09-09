import Image from "next/image";
import { htImg } from "@/lib/site";
import { testimonials } from "@/lib/ht";

/**
 * Two written testimonials, set as pull quotes rather than cards. The first
 * sits against a photograph of a follow-up appointment; the second is offset
 * below and to the right, so the pair reads as a spread. The review card grid
 * on this page is the Google marquee near the top, and this is deliberately
 * not another one.
 */
export default function HtVoices() {
  const [first, second] = testimonials;

  return (
    <section className="hvoi" id="voices">
      <div className="shell">
        <span className="tag" data-reveal>
          In their words
        </span>

        <div className="hvoi__grid">
          <figure className="hvoi__media" data-reveal>
            <Image
              src={htImg.followUp}
              alt="A patient at a follow-up appointment eight months after surgery"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </figure>

          <blockquote
            className="hvoi__q hvoi__q--one"
            data-reveal
            style={{ "--d": "120ms" } as React.CSSProperties}
          >
            <p>{first.quote}</p>
            <footer>
              <b>{first.name}</b>
              <span>{first.role}</span>
            </footer>
          </blockquote>

          <blockquote
            className="hvoi__q hvoi__q--two"
            data-reveal
            style={{ "--d": "200ms" } as React.CSSProperties}
          >
            <p>{second.quote}</p>
            <footer>
              <b>{second.name}</b>
              <span>{second.role}</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
