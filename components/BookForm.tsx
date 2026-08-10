"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

type Tracking = {
  gclid: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  page_url: string;
};

const emptyTracking: Tracking = {
  gclid: "",
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  page_url: "",
};

/**
 * Where submitted leads are POSTed as JSON. Set NEXT_PUBLIC_LEAD_ENDPOINT in the
 * Vercel project to the CRM / form handler URL. With no endpoint configured the
 * form still validates and redirects to /thank-you, so the page can go live
 * before the CRM is wired up.
 */
const endpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT;

export default function BookForm() {
  const router = useRouter();
  const [tracking, setTracking] = useState<Tracking>(emptyTracking);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Campaign parameters are only available in the browser, so read them after mount.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setTracking({
      gclid: params.get("gclid") ?? "",
      utm_source: params.get("utm_source") ?? "",
      utm_medium: params.get("utm_medium") ?? "",
      utm_campaign: params.get("utm_campaign") ?? "",
      page_url: window.location.href,
    });
  }, []);

  // The thank-you page is where conversions are counted, so warm it up early.
  useEffect(() => {
    router.prefetch("/thank-you");
  }, [router]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    if (!name) {
      form.querySelector<HTMLInputElement>("#name")?.focus();
      return;
    }
    if (!phone) {
      form.querySelector<HTMLInputElement>("#phone")?.focus();
      return;
    }

    if (!endpoint) {
      router.push("/thank-you");
      return;
    }

    setSubmitting(true);
    setError("");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      if (!response.ok) throw new Error(`Lead endpoint returned ${response.status}`);
      router.push("/thank-you");
    } catch {
      setError(
        `Sorry, something went wrong. Please call us on ${site.phoneDisplay} and we'll book you in.`,
      );
      setSubmitting(false);
    }
  }

  return (
    <section className="booksec" id="book">
      <div className="wrap">
        <div>
          <span className="eyebrow">Book your assessment</span>
          <h2>Start with a free consultation</h2>
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
          <div className="kicker">Free · no obligation</div>
          <h3>Book a free consultation</h3>
          <p className="sub">A doctor-led hair-loss assessment, online or in-clinic.</p>
          <form onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Full name"
                required
                autoComplete="name"
              />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone / WhatsApp</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91"
                required
                autoComplete="tel"
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@email.com"
                autoComplete="email"
              />
            </div>
            <div className="field">
              <label htmlFor="concern">Which treatment are you interested in?</label>
              <select id="concern" name="interest" defaultValue="">
                <option value="">Select one…</option>
                <option>PRP hair treatment</option>
                <option>GFC therapy</option>
                <option>Exosome therapy</option>
                <option>Not sure, please advise</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="hdyhau">How did you hear about us?</label>
              <select id="hdyhau" name="how_did_you_hear" defaultValue="">
                <option value="">Select one…</option>
                <option>Google</option>
                <option>Instagram</option>
                <option>Facebook</option>
                <option>Friend / colleague</option>
                <option>Other</option>
              </select>
            </div>

            <input type="hidden" name="gclid" value={tracking.gclid} readOnly />
            <input type="hidden" name="utm_source" value={tracking.utm_source} readOnly />
            <input type="hidden" name="utm_medium" value={tracking.utm_medium} readOnly />
            <input type="hidden" name="utm_campaign" value={tracking.utm_campaign} readOnly />
            <input type="hidden" name="page_url" value={tracking.page_url} readOnly />

            <button className="btn" type="submit" disabled={submitting}>
              {submitting ? "Sending…" : "Book my free consultation"}
            </button>
            {error && <p className="form-error">{error}</p>}
            <p className="form-fine">
              No cost, no obligation. Your details are used only to arrange your
              consultation.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
