# Malay Mehta Aesthetic Clinic — landing page

Next.js landing page for **PRP, GFC & exosome therapy** at Malay Mehta Aesthetic Clinic,
Vile Parle West, Mumbai. A "clinical editorial" design carrying the palette of
[drmalaymehta.com](https://www.drmalaymehta.com/).

## Routes

| Path | What it is |
| --- | --- |
| `/non-surgical-hair-treatment` | The landing page |
| `/thank-you` | Confirmation page after the form is submitted, `noindex` |
| `/` | 307 redirect to the landing page |

The landing page path is set once in `lib/site.ts` as `lpPath`; every internal link and the
root redirect are built from it. Moving the page means changing that value and renaming
the folder under `app/`.

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
| `app/globals.css` | The whole design system — tokens in `:root`, then one namespaced block per section |
| `app/non-surgical-hair-treatment/page.tsx` | The landing page — section order and its SEO metadata |
| `app/thank-you/page.tsx` | Post-submission confirmation page at `/thank-you` |
| `components/` | One file per section, in the order they appear |
| `components/Motion.tsx` | The page's single IntersectionObserver, driving every scroll reveal |
| `lib/site.ts` | Clinic details and image paths — edit once, applies everywhere |
| `lib/reviews.ts` | Google reviews, transcribed verbatim from `public/reviews/` |
| `public/img/` | Generated photography (see below) |

### Design

"Clinical editorial": large photography, one distinct layout per section, and a
recurring plate caption device borrowed from clinical journals. The palette is
unchanged from the previous design — rust `#BB3613`, peach `#E4AE95`, ink
`#1E2329`, cream `#FFF7F4` — on a warm paper `#FBF6F3`.

| Role | Face | Used for |
| --- | --- | --- |
| Display | Fraunces (variable, SOFT + WONK axes) | Headlines and pull statements |
| Body | Figtree | Running copy |
| Utility | DM Mono | Plate numbers, prices, ledgers, section tags |

Deliberately **not** a high-contrast Didone on cream with a terracotta accent —
that is the default look for this kind of page. The palette was fixed by the
brief, so the difference is carried by the display face and the layout system.

Every section uses a different device: a full-bleed hero with a credential
ledger, a dragging review marquee, an image that bleeds off the viewport edge,
a sticky image column that swaps as you scroll the treatment list, a
two-up before/after slider with uniform frames, a long selling passage beside a
full-height photograph, a typeset price list, a drawn process rule, a solid
panel over a macro photograph, a magazine spread, and an accordion. The only card
grid on the page is the reviews, by design.

Motion is one shared `IntersectionObserver` in `components/Motion.tsx`. Sections
stay server components and simply mark elements `data-reveal` (fade and lift)
or `data-draw` (used by the process rule). Everything reveals immediately under
`prefers-reduced-motion`, and nothing is left hidden if the observer is missing.

### Photography

`public/img/*.jpg` was generated for this page with Nano Banana Pro. The three
frames featuring Dr Mehta (`hero`, `portrait`, `consult`) were generated with
the clinic's own photographs from `public/Dr Malay Mehta photos/` attached as
likeness references. Sources were compressed from 61 MB of PNG to ~1.2 MB of
progressive JPEG.

The header carries two marks: `public/logo-mark.png` for the solid bar (derived
from `logo.jpg`, whose opaque white background showed as a patch on every
surface it sat on) and the clinic's own `public/logo-white-malay-mehta.webp`
while the bar is transparent over the hero. The favicon is
`public/favicon_www_drmalaymehta_com_64x64.png`, wired up through `metadata.icons`.

At rest the header also lays a soft top-down scrim over the hero so the mark,
nav and phone number stay readable against the bright part of the photograph.

### Copy

No em-dashes anywhere in the visible copy, on either page. Source comments
still use them; they are not copy.

## Wiring up the booking form

`components/BookForm.tsx` embeds the LeadConnector (GoHighLevel) form
`MYDGWNFIK8AldRJjAagk` in an iframe, loaded by `link.msgsndr.com/js/form_embed.js`.

Everything about the submission now lives in LeadConnector, not in this repo: the fields,
validation, where leads land, and **where the visitor goes after submitting**. Two things
follow from that.

- **The `/thank-you` redirect is a LeadConnector setting.** This site no longer performs
  it. For the confirmation page and any destination-based conversion to fire, the form's
  on-submit action in LeadConnector must point at
  `https://<domain>/thank-you`. If it is set to show an inline message instead, `/thank-you`
  is simply never reached.
- **Campaign parameters are the embed's job.** The old form copied `gclid` and the `utm_*`
  values into hidden fields; that code is gone. Attribution now depends on LeadConnector
  reading the query string of the parent page.

`NEXT_PUBLIC_LEAD_ENDPOINT` is no longer read by anything and can be removed from the
Vercel project.

The embed's own inline style is `height:100%`, which collapses to zero inside an
auto-height parent, so `.leadform iframe` sets a `min-height` floor of 502px (its
`data-height`). The embed script may grow it beyond that.

### The thank-you page

`/thank-you` is the conversion destination: confirmation, what happens next, and a click-
to-call. It is `noindex, nofollow` — a confirmation page that ranks collects organic
landings that never filled the form in, which inflates conversion counts.

It is a real page load, so it is the natural target for a Google Ads conversion tag or a
GA4 destination conversion. Set that up as a trigger in GTM (see below) rather than
hard-coding a tag into the page.

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
