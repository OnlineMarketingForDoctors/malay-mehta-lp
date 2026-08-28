import Image from "next/image";
import { img } from "@/lib/site";
import { Arrow } from "./icons";

export default function IsThisYou() {
  return (
    <section className="band iy" id="signs">
      <div className="shell iy__grid">
        <div className="iy__copy">
          <span className="tag" data-reveal>
            If this sounds familiar
          </span>
          <h2 className="h2" data-reveal style={{ "--d": "90ms" } as React.CSSProperties}>
            You noticed it long
            <br />
            <span className="em">before you said anything.</span>
          </h2>

          <div className="iy__prose" data-reveal style={{ "--d": "160ms" } as React.CSSProperties}>
            <p>
              Do you tilt the mirror to check your parting? Count what comes out
              in the shower? Most people watch it for a year before they say
              anything, and we understand why.
            </p>
            <p>
              PRP, GFC and exosome therapy work on the follicles you still have.
              Non-surgical, under an hour, nothing to recover from. Dr Mehta
              reads your scalp first and tells you which one fits.
            </p>
            <p>
              Then it gets quiet. Less hair on the pillow. Density coming back.
              You stop checking.
            </p>
          </div>

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
