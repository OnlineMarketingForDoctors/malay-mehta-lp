import Image from "next/image";
import Script from "next/script";
import { img, site } from "@/lib/site";

/**
 * The booking form is a LeadConnector (GoHighLevel) embed, so submission,
 * validation and the post-submit destination are all configured in
 * LeadConnector rather than here.
 */
export default function BookForm() {
  return (
    <section className="bk" id="book">
      <div className="bk__grid">
        <figure className="bk__media">
          <Image
            src={img.clinic}
            alt={`The consultation room at ${site.name}`}
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
          />
          <figcaption className="bk__cap">
            <span className="tag">Where you&rsquo;ll be seen</span>
            <p className="h3">Vile Parle West, Mumbai</p>
            <address className="bk__addr">
              {site.street}
              <br />
              {site.locality} {site.postalCode}
              <br />
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
            </address>
          </figcaption>
        </figure>

        <div className="bk__panel">
          <span className="tag">Book your assessment</span>
          <h2 className="h2">
            Start with
            <br />
            <span className="em">a consultation.</span>
          </h2>
          <p className="bk__sub">
            Tell us how to reach you and we&rsquo;ll arrange a doctor-led
            assessment, online or at the clinic.
          </p>

          <div className="bk__form">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/MYDGWNFIK8AldRJjAagk"
              style={{ width: "100%", height: "100%", border: "none", borderRadius: "4px" }}
              id="inline-MYDGWNFIK8AldRJjAagk"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="LP Form"
              data-height="502"
              data-layout-iframe-id="inline-MYDGWNFIK8AldRJjAagk"
              data-form-id="MYDGWNFIK8AldRJjAagk"
              title="LP Form"
            />
          </div>

          <p className="bk__fine">
            No obligation. Your details are used only to arrange your
            consultation.
          </p>
        </div>
      </div>

      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </section>
  );
}
