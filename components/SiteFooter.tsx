import { site } from "@/lib/site";

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

          <address className="ft__addr">
            {site.street}
            <br />
            {site.locality} {site.postalCode}, {site.region}, India
            <br />
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
          </address>
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
      </div>
    </footer>
  );
}
