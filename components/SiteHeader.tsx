import Image from "next/image";
import { site } from "@/lib/site";

const links = [
  { href: "#treatments", label: "Treatments" },
  { href: "#pricing", label: "Pricing" },
  { href: "#how", label: "How it works" },
  { href: "#about", label: "About Dr Mehta" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export default function SiteHeader() {
  return (
    <header className="site">
      <div className="wrap bar">
        <a className="logo" href="#top" aria-label={`${site.doctor} Aesthetic Clinic`}>
          <Image src="/logo.jpg" alt={site.name} width={160} height={80} priority />
        </a>
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
          <a href="#book" className="btn">
            Book a free consult
          </a>
        </div>
      </div>
    </header>
  );
}
