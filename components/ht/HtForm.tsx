"use client";

import Image from "next/image";
import { useState } from "react";
import { htImg, site } from "@/lib/site";
import { Arrow } from "../icons";

/**
 * PLACEHOLDER — this form is deliberately not connected to anything.
 *
 * It mirrors the field set of the Contact Form 7 form on the clinic's
 * WordPress FUE page (first and last name, email, phone, preferred date, how
 * they heard about us, baldness level 1 to 7 and up to three photographs), so
 * whatever replaces it can be dropped in without the layout changing.
 *
 * Submitting does nothing but show a notice. To make it live, either swap this
 * component for a LeadConnector iframe the way components/BookForm.tsx does,
 * or point the <form> at a real endpoint and remove the guard in `onSubmit`.
 */

const HEARD = [
  "Google",
  "Facebook Ads",
  "Instagram",
  "Newsletter",
  "Colleague or friend",
  "Other",
];

const LEVELS = [1, 2, 3, 4, 5, 6, 7];

export default function HtForm() {
  const [level, setLevel] = useState<number | null>(null);
  const [sent, setSent] = useState(false);

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

          <form
            className="hfrm__form"
            data-reveal
            style={{ "--d": "180ms" } as React.CSSProperties}
            onSubmit={(e) => {
              // Placeholder: there is nowhere to send this yet.
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="hfrm__pair">
              <label className="hfrm__field">
                <span>First name</span>
                <input type="text" name="first-name" autoComplete="given-name" required />
              </label>
              <label className="hfrm__field">
                <span>Last name</span>
                <input type="text" name="last-name" autoComplete="family-name" required />
              </label>
            </div>

            <div className="hfrm__pair">
              <label className="hfrm__field">
                <span>Email</span>
                <input type="email" name="email" autoComplete="email" required />
              </label>
              <label className="hfrm__field">
                <span>Phone</span>
                <input type="tel" name="phone" autoComplete="tel" required />
              </label>
            </div>

            <div className="hfrm__pair">
              <label className="hfrm__field">
                <span>Preferred date and time</span>
                <input type="text" name="preferred" placeholder="Optional" />
              </label>
              <label className="hfrm__field">
                <span>How did you hear about us?</span>
                <select name="heard" defaultValue="" required>
                  <option value="" disabled>
                    Please choose
                  </option>
                  {HEARD.map((h) => (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {/* The Norwood Hamilton scale, as the page's one interactive
                control. It is the same 1 to 7 the surgery is planned around. */}
            <fieldset className="hfrm__scale">
              <legend>Where are you on the scale?</legend>
              <div className="hfrm__chips">
                {LEVELS.map((n) => (
                  <label className="hfrm__chip" key={n} data-on={level === n}>
                    <input
                      type="radio"
                      name="baldness-level"
                      value={n}
                      checked={level === n}
                      onChange={() => setLevel(n)}
                    />
                    <span>{n}</span>
                  </label>
                ))}
              </div>
              <p className="hfrm__hint">
                Norwood Hamilton grade, 1 is barely receding and 7 is fully
                bald. A guess is fine, it is counted properly at the
                consultation.
              </p>
            </fieldset>

            <label className="hfrm__field hfrm__file">
              <span>Photographs of the area</span>
              <input type="file" name="photos" accept="image/*" multiple />
              <small>
                Up to three images, taken with the area exposed and in good
                light. You can email them instead to{" "}
                <a href="mailto:drmalaymehta@gmail.com">drmalaymehta@gmail.com</a>.
              </small>
            </label>

            <button type="submit" className="btn btn--wide hfrm__submit">
              Book a consultation <Arrow />
            </button>

            {sent && (
              <p className="hfrm__notice" role="status">
                This form is a placeholder and is not connected yet, so nothing
                was sent. Call {site.phoneDisplay} to book in the meantime.
              </p>
            )}

            <p className="hfrm__fine">
              No obligation. Your details would be used only to arrange your
              consultation.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
