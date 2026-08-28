"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Arrow } from "./icons";

const links = [
  { hash: "#treatments", label: "Treatments" },
  { hash: "#results", label: "Results" },
  { hash: "#pricing", label: "Pricing" },
  { hash: "#process", label: "Process" },
  { hash: "#about", label: "Dr Mehta" },
  { hash: "#faq", label: "FAQ" },
];

type Props = {
  /** Logo only — for pages past the point of conversion. */
  minimal?: boolean;
};

export default function SiteHeader({ minimal = false }: Props) {
  /** The bar is transparent over the hero and solid once you leave it. On the
   *  minimal header there is no hero behind it, so it starts solid. */
  const [stuck, setStuck] = useState(minimal);

  useEffect(() => {
    if (minimal) return;
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [minimal]);

  return (
    <header className="hdr" data-stuck={stuck}>
      <div className="shell hdr__in">
        <a
          className="hdr__logo"
          href={site.lpPath}
          aria-label={`${site.doctor} Aesthetic Clinic`}
          style={minimal ? { marginInline: "auto" } : undefined}
        >
          {/* Two marks: the coloured one for the solid header, the clinic's
              white lockup while the bar is transparent over the hero. */}
          <Image
            className="is-dark"
            src="/logo-mark.png"
            alt={site.name}
            width={160}
            height={80}
            priority
          />
          <Image
            className="is-light"
            src="/logo-white-malay-mehta.webp"
            alt=""
            aria-hidden="true"
            width={241}
            height={120}
            priority
          />
        </a>

        {!minimal && (
          <>
            <nav className="hdr__nav" aria-label="Sections">
              {links.map((l) => (
                <a key={l.hash} href={`${site.lpPath}${l.hash}`}>
                  {l.label}
                </a>
              ))}
            </nav>
            <a className="hdr__tel" href={site.phoneHref}>
              <span className="hdr__tel-label">Call us now</span>
              <strong className="hdr__tel-num">{site.phoneDisplay}</strong>
            </a>
            <a href={`${site.lpPath}#book`} className="btn hdr__cta">
              Book a consult <Arrow size={13} />
            </a>
          </>
        )}
      </div>
    </header>
  );
}
