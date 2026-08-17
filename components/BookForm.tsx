import Script from "next/script";
import { site } from "@/lib/site";

/**
 * The booking form is a LeadConnector (GoHighLevel) embed, so submission,
 * validation and the post-submit destination are all configured in
 * LeadConnector rather than here.
 */
export default function BookForm() {
  return (
    <section
      className="booksec"
      id="book"
      style={{ ["--book-image" as string]: `url('${site.bookImage}')` }}
    >
      <div className="wrap">
        <div>
          <span className="eyebrow">Book Your Assessment</span>
          <h2>Start With a Consultation</h2>
          <p className="lead">
            Tell us how to reach you and we&rsquo;ll arrange a doctor-led assessment,
            online or at the Vile Parle clinic. We&rsquo;ll talk you through PRP, GFC,
            exosome and other non-surgical options, and what suits you.
          </p>
          <div className="callnow">
            or call <a href={site.phoneHref}>{site.phoneDisplay}</a>
          </div>
        </div>

        <div className="card">
          <div className="kicker">No obligation</div>
          <h3>Book a Consultation</h3>
          <p className="sub">A doctor-led hair-loss assessment, online or in-clinic.</p>

          <div className="leadform">
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

          <p className="form-fine">
            No obligation. Your details are used only to arrange your
            consultation.
          </p>
        </div>
      </div>

      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </section>
  );
}
