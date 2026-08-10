import { site } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="fword">
          Malay Mehta<small>Aesthetic Clinic</small>
        </div>
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
