import { site, social } from "@/lib/site";
import { Facebook, Instagram, LinkedIn, Phone, XMark, YouTube } from "./icons";

const marks = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: YouTube,
  x: XMark,
  linkedin: LinkedIn,
} as const;

export default function SiteFooter() {
  return (
    <footer className="ft">
      <div className="shell">
        <div className="ft__top">
          {/*
            Plain <img>, not next/image: the file lives on the main WordPress
            site and its intrinsic dimensions aren't known here. Sizing is
            capped in CSS so the row can't shift as it loads.
          */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="ft__logo" src={site.footerLogo} alt={site.name} />

          <div className="ft__contact">
            <address className="ft__addr">
              {site.street}
              <br />
              {site.locality} {site.postalCode}, {site.region}, India
            </address>

            <a className="ft__tel" href={site.phoneHref}>
              <Phone size={16} />
              {site.phoneDisplay}
            </a>

            <ul className="ft__social">
              {social.map((s) => {
                const Mark = marks[s.key];
                return (
                  <li key={s.key}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${site.doctor} on ${s.label}`}
                    >
                      <Mark />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <p className="ft__fine">
          This page is for booking a consultation. Treatment suitability,
          benefits and risks are assessed and explained by the doctor at your
          consultation. Descriptions here are informational only, not medical
          advice or an offer of treatment; individual results vary and no
          specific outcome is implied or guaranteed. © {new Date().getFullYear()}{" "}
          {site.name}. All rights reserved. &nbsp;·&nbsp;{" "}
          <a href={site.privacyPolicy}>Privacy Policy</a>
        </p>

        <p className="ft__by">
          Powered by{" "}
          <a
            href="https://onlinemarketingfordoctors.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Online Marketing For Doctors
          </a>
        </p>
      </div>
    </footer>
  );
}
