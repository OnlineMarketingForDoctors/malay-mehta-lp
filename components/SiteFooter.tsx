import { site } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="site">
      <div className="wrap">
        {/*
          Plain <img>, not next/image: the file lives on the main WordPress site
          and its intrinsic dimensions aren't known here. Height is fixed in CSS
          so the row can't shift as it loads.
        */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="flogo" src={site.footerLogo} alt={site.name} />
        <address>
          {site.street}
          <br />
          {site.locality} {site.postalCode}, {site.region}, India
          <br />
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
        </address>
        <p className="fine">
          This page is for booking a consultation. Treatment suitability, benefits and
          risks are assessed and explained by the doctor at your consultation. Descriptions
          here are informational only, not medical advice or an offer of treatment;
          individual results vary and no specific outcome is implied or guaranteed. ©{" "}
          {new Date().getFullYear()} {site.name}. All rights reserved. &nbsp;·&nbsp;{" "}
          <a href={site.privacyPolicy}>Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}
