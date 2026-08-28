import Image from "next/image";
import { img } from "@/lib/site";

const claims = [
  {
    h: "A dermatologist, not a counsellor",
    p: "Your scalp is assessed and injected by an MBBS, MD dermatologist — not handed to a sales desk.",
  },
  {
    h: "Known for saying no",
    p: "If a treatment will not move the needle for your pattern of loss, you will be told so before you pay for it.",
  },
  {
    h: "Trained abroad, practising here",
    p: "Fellowships at McGill in Canada and in Nashville, brought back to a clinic in Vile Parle West.",
  },
  {
    h: "One clinic, since 2018",
    p: "The same room, the same team and the same doctor for follow-ups, months after the first session.",
  },
  {
    h: "Nothing hidden until later",
    p: "The rate per session is on this page. What changes is how many you need, and that is a clinical decision.",
  },
  {
    h: "Online first, if you prefer",
    p: "A remote consultation is reviewed by the doctor personally before you travel anywhere.",
  },
];

export default function WhyMehta() {
  return (
    <section className="wm" id="why">
      <div className="wm__bg">
        <Image src={img.scalp} alt="" fill sizes="100vw" aria-hidden="true" />
      </div>

      <div className="wm__in shell">
        <div className="wm__panel">
          <div className="wm__head" data-reveal>
            <span className="tag">Why this clinic</span>
            <h2 className="h2">
              The reasons people
              <br />
              <span className="em">travel across Mumbai.</span>
            </h2>
          </div>

          <div className="wm__cols">
            {claims.map((c, i) => (
              <article
                className="wm__claim"
                key={c.h}
                data-reveal
                style={
                  {
                    "--d": `${(i % 2) * 90 + Math.floor(i / 2) * 60}ms`,
                  } as React.CSSProperties
                }
              >
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
