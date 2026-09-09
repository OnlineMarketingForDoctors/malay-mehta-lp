import Image from "next/image";
import Script from "next/script";
import { htImg, site } from "@/lib/site";

/**
 * The booking form is a LeadConnector (GoHighLevel) embed, so submission,
 * validation and the post-submit destination are all configured in
 * LeadConnector rather than here.
 *
 * This page has its own form, `Popup Booking Form (Landing Page)`, separate
 * from the one the non-surgical page uses, so the two pages' leads can be
 * told apart.
 */
export default function HtForm() {
  return (
    <section className="hfrm" id="book">
      <div className="shell hfrm__grid">
        <figure className="hfrm__media" data-reveal>
          <Image
            src={htImg.reception}
            alt={`The reception at ${site.name}, Vile Parle West`}
            fill
            sizes="(max-width: 980px) 100vw, 40vw"
          />
          <figcaption className="hfrm__cap">
            <span className="tag">Where you will be seen</span>
            <p className="h3">Vile Parle West, Mumbai</p>
            <address className="hfrm__addr">
              {site.street}
              <br />
              {site.locality} {site.postalCode}
              <br />
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
            </address>
          </figcaption>
        </figure>

        <div className="hfrm__panel">
          <span className="tag" data-reveal>
            Book a consultation
          </span>
          <h2
            className="h2 hfrm__h2"
            data-reveal
            style={{ "--d": "80ms" } as React.CSSProperties}
          >
            Start with
            <br />
            <span className="em">a graft count.</span>
          </h2>
          <p
            className="hfrm__sub"
            data-reveal
            style={{ "--d": "130ms" } as React.CSSProperties}
          >
            The consultation is free and detailed. Tell us how to reach you and
            we will arrange a time with {site.doctor}.
          </p>

          <div
            className="hfrm__form"
            data-reveal
            style={{ "--d": "180ms" } as React.CSSProperties}
          >
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/8lRVXNNSYjy5O1FuHRUt"
              style={{ width: "100%", height: "100%", border: "none", borderRadius: "4px" }}
              id="inline-8lRVXNNSYjy5O1FuHRUt"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Popup Booking Form (Landing Page)"
              data-height="1014"
              data-layout-iframe-id="inline-8lRVXNNSYjy5O1FuHRUt"
              data-form-id="8lRVXNNSYjy5O1FuHRUt"
              data-cookie-consent="true"
              data-cookie-consent-provider="auto"
              title="Popup Booking Form (Landing Page)"
            />
          </div>

          <p className="hfrm__fine">
            No obligation. Your details are used only to arrange your
            consultation.
          </p>
        </div>
      </div>

      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </section>
  );
}
