import Image from "next/image";
import { htImg } from "@/lib/site";
import { bladeCompare, sapphireCase, sapphirePoints } from "@/lib/ht";

/**
 * Why sapphire rather than steel. The blade macro bleeds off the left edge of
 * the viewport at full height; the argument sits in a column beside it, with
 * the eight-point ledger underneath and the steel/sapphire comparison drawn
 * as two channel diagrams rather than described in prose.
 */
export default function HtSapphire() {
  return (
    <section className="hsap" id="sapphire">
      <div className="hsap__grid">
        <div className="hsap__media" data-reveal>
          <Image
            src={htImg.blades}
            alt="Sapphire-tipped micro blades laid out on a sterile steel tray"
            fill
            sizes="(max-width: 980px) 100vw, 46vw"
          />
          {/* The blade, then the channel, then what goes into it. The two
              satellites carry the section's argument in sequence. */}
          <figure
            className="hsap__sat hsap__sat--a"
            data-reveal
            style={{ "--d": "160ms" } as React.CSSProperties}
          >
            <Image
              src={htImg.implant}
              alt="Implanter pens held over the recipient area"
              fill
              sizes="(max-width: 980px) 30vw, 20vw"
            />
          </figure>
          <figure
            className="hsap__sat hsap__sat--b"
            data-reveal
            style={{ "--d": "260ms" } as React.CSSProperties}
          >
            <Image
              src={htImg.grafts}
              alt="Harvested follicular unit grafts in a chilled dish"
              fill
              sizes="(max-width: 980px) 24vw, 15vw"
            />
          </figure>
        </div>

        <div className="hsap__body">
          <span className="tag" data-reveal>
            The blade
          </span>
          <h2
            className="h2 hsap__h2"
            data-reveal
            style={{ "--d": "80ms" } as React.CSSProperties}
          >
            Why sapphire,
            <br />
            <span className="em">not steel.</span>
          </h2>
          <p
            className="lede hsap__lede"
            data-reveal
            style={{ "--d": "140ms" } as React.CSSProperties}
          >
            Sapphire FUE transplants are conducted using blades made from a
            precious gemstone, instead of the steel blades used in a regular FUE
            transplant. What changes is the shape of the channel each graft goes
            into, and everything else follows from that.
          </p>

          {/* The comparison, drawn. A steel blade opens a flat slit; a sapphire
              tip opens a three-dimensional channel the size of the graft. */}
          <div
            className="hsap__compare"
            data-reveal
            style={{ "--d": "200ms" } as React.CSSProperties}
          >
            <div className="hsap__col">
              <span className="hsap__col-name">{bladeCompare.steel.name}</span>
              <div className="hsap__slits" aria-hidden="true">
                {Array.from({ length: 7 }, (_, i) => (
                  <span className="hsap__slit" key={i} />
                ))}
              </div>
              <p className="hsap__col-det">{bladeCompare.steel.detail}</p>
            </div>
            <div className="hsap__col hsap__col--on">
              <span className="hsap__col-name">
                {bladeCompare.sapphire.name}
              </span>
              <div className="hsap__slits" aria-hidden="true">
                {Array.from({ length: 12 }, (_, i) => (
                  <span className="hsap__chan" key={i} />
                ))}
              </div>
              <p className="hsap__col-det">{bladeCompare.sapphire.detail}</p>
            </div>
          </div>

          <ul
            className="hsap__points"
            data-reveal
            style={{ "--d": "260ms" } as React.CSSProperties}
          >
            {sapphirePoints.map((p) => (
              <li key={p.label}>
                <b>{p.value}</b>
                <span>{p.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="shell">
        <div className="hsap__case">
          {sapphireCase.map((c, i) => (
            <article
              className="hsap__card"
              key={c.title}
              data-reveal
              style={{ "--d": `${i * 90}ms` } as React.CSSProperties}
            >
              <h3 className="h3">{c.title}</h3>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
