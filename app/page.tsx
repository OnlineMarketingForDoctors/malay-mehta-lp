import type { Metadata } from "next";
import Image from "next/image";
import Motion from "@/components/Motion";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Arrow } from "@/components/icons";
import { htImg, htPath, img, site } from "@/lib/site";
import "./home.css";

export const metadata: Metadata = {
  title: `Landing pages | ${site.name}`,
  description: `The paid-traffic landing pages for ${site.name}, Vile Parle West, Mumbai.`,
  // An index of pages that are themselves noindex. Nothing here should rank
  // or pass equity to the main site's own hair pages.
  robots: { index: false, follow: false },
};

/**
 * The index served at `/`. Until now the root redirected straight to the
 * non-surgical page, which left the second landing page with no way in from
 * the domain root. Both are listed here instead.
 *
 * Order is the order they were built, which is also the order of the plate
 * numbers. Each entry is self-contained, so adding a third page is one more
 * object rather than a layout change.
 */
const pages = [
  {
    n: "01",
    href: htPath,
    path: "/hair-transplant",
    title: "Hair transplant in Mumbai",
    copy: "Sapphire FUE performed by Dr Mehta himself, written for men already weighing up surgery. Carries the case notes, the before and after photographs and the graft pricing.",
    tags: ["Sapphire FUE", "Case studies", "From 7,000 INR / 1,000 grafts"],
    img: htImg.hero,
    alt: `${site.doctor} in the operating theatre at ${site.name}`,
    /* He stands right of centre in this crop. */
    focus: "68%",
  },
  {
    n: "02",
    href: site.lpPath,
    path: "/non-surgical-hair-treatment",
    title: "Non-surgical hair treatment",
    copy: "PRP, GFC and exosome therapy for hair loss caught earlier, where the donor area is intact and surgery is not yet the answer. Same clinic, same consultation.",
    tags: ["PRP", "GFC", "Exosome therapy"],
    img: img.hero,
    alt: `${site.doctor} at ${site.name}, Vile Parle West`,
    focus: "62%",
  },
];

export default function Page() {
  return (
    <>
      <SiteHeader minimal basePath="/" />
      <main className="hmx">
        <div className="shell">
          <header className="hmx__head">
            <span className="tag" data-reveal>
              Landing pages
            </span>
            <h1
              className="h1 hmx__h1"
              data-reveal
              style={{ "--d": "80ms" } as React.CSSProperties}
            >
              Two pages,
              <br />
              <span className="em">two patients.</span>
            </h1>
            <p
              className="lede hmx__lede"
              data-reveal
              style={{ "--d": "140ms" } as React.CSSProperties}
            >
              The paid-traffic landing pages for {site.name}, both led by{" "}
              {site.doctor} in Vile Parle West, Mumbai.
            </p>
          </header>

          <div className="hmx__list">
            {pages.map((p, i) => (
              <a
                className="hmx__card"
                href={p.href}
                key={p.href}
                data-reveal
                style={{ "--d": `${200 + i * 90}ms` } as React.CSSProperties}
              >
                <div className="hmx__media">
                  <span className="hmx__n">{p.n}</span>
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 860px) 92vw, 46vw"
                    style={{ "--focus": p.focus } as React.CSSProperties}
                  />
                </div>

                <div className="hmx__body">
                  <span className="hmx__path">{p.path}</span>
                  <h2 className="h3 hmx__title">{p.title}</h2>
                  <p className="hmx__copy">{p.copy}</p>

                  <ul className="hmx__tags">
                    {p.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>

                  <span className="hmx__go">
                    View the page <Arrow />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <p
            className="hmx__note"
            data-reveal
            style={{ "--d": "400ms" } as React.CSSProperties}
          >
            Both pages are set to noindex, so they take paid traffic without
            competing with the clinic&rsquo;s own pages on{" "}
            {site.mainSite.replace(/^https?:\/\/|\/$/g, "")}.
          </p>
        </div>
      </main>
      <SiteFooter />
      <Motion />
    </>
  );
}
