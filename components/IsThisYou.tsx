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
              Do you tilt the mirror to check your parting before you leave the
              house? Count what comes out in the shower? Pick the seat with your
              back to the window, or keep a cap in your bag for the days it
              looks thin? Almost everyone who sits down with us has been
              watching it happen for a year or more before they say it out loud,
              usually after a bathroom shelf of shampoos and serums that changed
              nothing. You are not imagining it and you are not being vain.
              Hair loss is measurable, it is progressive, and the sooner someone
              looks at it properly the more there is left to work with.
            </p>
            <p>
              That is what PRP, GFC and exosome therapy are for. All three are
              non-surgical injectables prepared in the clinic, done in under an
              hour, with nothing to recover from afterwards and no scars to
              hide. They work on the follicles you still have, supporting the
              ones that are thinning before they are lost. Which is why the
              assessment comes first: Dr Mehta reads your scalp under a
              dermatoscope and tells you which of the three would actually do
              something for your pattern of loss, how many sessions it would
              take, and what that costs.
            </p>
            <p>
              What patients notice first is quiet. Less hair on the pillow.
              A parting that stops widening. Then, over the months that follow,
              density filling back through the areas that had thinned. What
              changes more than your hair is everything around it. You stop
              checking. You stop planning around the light. You get in the
              photograph, leave the cap at home, and go back to not thinking
              about it at all.
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
