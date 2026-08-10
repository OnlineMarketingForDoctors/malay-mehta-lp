import Image from "next/image";
import { site } from "@/lib/site";

// Root-relative so the header works from /thank-you as well as the landing page.
const links = [
  { href: "/#treatments", label: "Treatments" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#how", label: "How it works" },
  { href: "/#about", label: "About Dr Mehta" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
];

type Props = {
  /**
   * Logo only, centred — for pages past the point of conversion, where nav,
   * phone and a book CTA would only pull the visitor back out.
   */
  minimal?: boolean;
};

export default function SiteHeader({ minimal = false }: Props) {
  return (
    <header className="site">
      <div className={`wrap bar${minimal ? " minimal" : ""}`}>
        <a className="logo" href="/" aria-label={`${site.doctor} Aesthetic Clinic`}>
          <Image src="/logo.jpg" alt={site.name} width={160} height={80} priority />
        </a>
        {!minimal && (
          <>
            <nav className="anchors" aria-label="Page sections">
              {links.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="right">
              <div className="phone">
                <span>Call </span>
                {site.phoneDisplay}
              </div>
              <a href="/#book" className="btn">
                Book a free consult
              </a>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
