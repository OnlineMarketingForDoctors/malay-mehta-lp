import Image from "next/image";
import { img } from "@/lib/site";
import { Arrow } from "./icons";

const signs = [
  "Your parting looks wider in photographs than it feels in the mirror",
  "More hair in the shower drain than there used to be",
  "A hairline that has crept back over two or three years",
  "Shampoos and serums from the pharmacy that changed nothing",
];

export default function IsThisYou() {
  return (
    <section className="band iy" id="signs">
      <div className="shell iy__grid">
        <div className="iy__copy">
          <span className="tag" data-reveal>
            Where most people start
          </span>
          <h2 className="h2" data-reveal style={{ "--d": "90ms" } as React.CSSProperties}>
            You noticed it
            <br />
            <span className="em">a while ago.</span>
          </h2>
          <ol className="iy__list" data-reveal style={{ "--d": "160ms" } as React.CSSProperties}>
            {signs.map((s, i) => (
              <li key={s}>
                <span className="iy__n">{String(i + 1).padStart(2, "0")}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
          <div className="iy__cta" data-reveal style={{ "--d": "240ms" } as React.CSSProperties}>
            <a href="#book" className="btn">
              Get it looked at properly <Arrow />
            </a>
          </div>
        </div>

        <figure className="iy__media" data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
          <Image
            src={img.mirror}
            alt="A man examining his hairline in a bathroom mirror"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </figure>
      </div>
    </section>
  );
}
