# Malay Mehta Aesthetic Clinic — landing page

Next.js landing page for **PRP, GFC & exosome therapy** at Malay Mehta Aesthetic Clinic,
Vile Parle West, Mumbai. Built from the approved mockup, styled to match
[drmalaymehta.com](https://www.drmalaymehta.com/).

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Project layout

| Path | What's in it |
| --- | --- |
| `app/layout.tsx` | Fonts, page metadata, `MedicalClinic` JSON-LD |
| `app/globals.css` | The whole design system — brand tokens live in `:root` |
| `app/page.tsx` | Section order for the landing page |
| `app/thank-you/page.tsx` | Post-submission confirmation page at `/thank-you` |
| `components/` | One file per section, in the order they appear |
| `lib/site.ts` | Clinic name, phone, address, hero image — edit once, applies everywhere |
| `public/` | Logo and before/after photography |

### Brand tokens

Set in `:root` in `app/globals.css` and taken from the main site:

| Token | Value | Used for |
| --- | --- | --- |
| `--rust` | `#BB3613` | Buttons, links, accent headings |
| `--peach` | `#E4AE95` | Hero accent, step numbers, card rules |
| `--ink` | `#1E2329` | Headings, dark sections |
| `--cream` | `#FFF7F4` | Alternating section backgrounds |

Body and headings use Roboto, loaded through `next/font` so there is no render-blocking
request to Google Fonts.

## Wiring up the booking form

`components/BookForm.tsx` validates name and phone, captures `gclid`, `utm_source`,
`utm_medium`, `utm_campaign` and the page URL into hidden fields, and on success sends
the visitor to `/thank-you`.

To send leads to a CRM, set an environment variable on the Vercel project:

```
NEXT_PUBLIC_LEAD_ENDPOINT=https://your-crm/endpoint
```

The form then POSTs the submission as JSON and only redirects once the endpoint returns
a success status; a failure keeps the visitor on the form with the clinic's phone number.
With no endpoint set it validates and redirects without sending anything, so the page can
go live before the CRM is connected.

### The thank-you page

`/thank-you` is the conversion destination: confirmation, what happens next, and a click-
to-call. It is `noindex, nofollow` — a confirmation page that ranks collects organic
landings that never filled the form in, which inflates conversion counts.

Because the redirect is a real page load, `/thank-you` is the natural place for a Google
Ads conversion tag or a GA4 destination-based conversion. Set that up as a trigger in GTM
(see below) rather than hard-coding a tag into the page.

## Google Tag Manager

Container `GTM-MZTRS97`, loaded on every page from `app/layout.tsx`: the loader snippet is
a plain `<script>` in `<head>`, and the `<noscript>` iframe is the first element in
`<body>`. The container ID lives in `lib/site.ts`.

Two things to know if you touch this:

- It deliberately does **not** use `next/script`. `strategy="beforeInteractive"` queues the
  snippet through Next's own loader at the top of `<body>` — early enough to run, but not
  in `<head>` and not the snippet Google gave you.
- Next emits its framework chunks above the tag in `<head>`. They are all `async`, so this
  inline script still executes first; there is no way to sit above them in the App Router
  without giving up Next's head management entirely.

Since `/thank-you` is a distinct URL, the form conversion can be a Page View trigger on
`Page Path equals /thank-you` — no custom dataLayer event needed.

## Before running paid traffic

- **Reviews** in `components/Reviews.tsx` are placeholders from the mockup. Swap in the
  clinic's verified Google reviews or a live widget. Review/rating schema is deliberately
  *not* emitted until these are real.
- **Doctor photo** — `components/About.tsx` still has the mockup's dashed placeholder
  frame. Drop a photo in `public/` and replace it with `next/image`.
- **Hero photograph** is hotlinked from the main WordPress site
  (`lib/site.ts` → `heroImage`). Point it at a local file in `public/` if you would rather
  self-host; the dark gradient behind it is the fallback either way.
- **Logo** (`public/logo.jpg`) came from the mockup at 160×80 and is displayed at 52px
  tall, so it will soften on high-density screens. An SVG or a 2× export would fix that.

## Deployment

Connected to the `malay-mehta-lp` Vercel project, which builds on every push.

- **`main` is the production branch.** Pushing to it deploys straight to production, with
  no manual promote step in the Vercel dashboard.
- Any other branch gets a preview URL, useful for reviewing a change before it goes live.

Work happens on a feature branch and lands on `main` when it is verified. Note that Vercel
skips a build when the commit has already been deployed, so pushing an existing commit to
`main` will not by itself produce a production deployment — push a new commit.
