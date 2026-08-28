"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Arrow, Close, Menu, Phone } from "./icons";

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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (minimal) return;
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [minimal]);

  /** While the drawer is open the page behind it should not scroll, and Escape
   *  should close it the way any other overlay does. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="hdr" data-stuck={stuck} data-open={open}>
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
            {/* On a phone the mark gives up its place to the booking button
                once the bar goes solid: past the hero, the call to action is
                worth more than the logo. Hidden from desktop, which keeps its
                own button on the right. */}
            <a href={`${site.lpPath}#book`} className="btn hdr__book">
              Book a consultation <Arrow size={13} />
            </a>

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

            {/* The number does not fit beside a menu button on a phone, so it
                becomes the icon it always is on a handset. */}
            <a
              className="hdr__icon hdr__call"
              href={site.phoneHref}
              aria-label={`Call ${site.phoneDisplay}`}
            >
              <Phone size={18} />
            </a>

            <a href={`${site.lpPath}#book`} className="btn hdr__cta">
              Book a consult <Arrow size={13} />
            </a>

            <button
              type="button"
              className="hdr__icon hdr__burger"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <Close /> : <Menu />}
            </button>
          </>
        )}
      </div>

      {!minimal && (
        <div className="hdr__drawer" id="site-menu" hidden={!open}>
          <nav aria-label="Sections">
            {links.map((l) => (
              <a
                key={l.hash}
                href={`${site.lpPath}${l.hash}`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={`${site.lpPath}#book`}
            className="btn btn--wide"
            onClick={() => setOpen(false)}
          >
            Book a consultation <Arrow size={13} />
          </a>
          <a className="hdr__drawer-tel" href={site.phoneHref}>
            <Phone size={16} />
            {site.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  );
}
