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
| `app/page.tsx` | Section order for the page |
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
`utm_medium`, `utm_campaign` and the page URL into hidden fields, and shows the
thank-you state on success.

To send leads to a CRM, set an environment variable on the Vercel project:

```
NEXT_PUBLIC_LEAD_ENDPOINT=https://your-crm/endpoint
```

The form then POSTs the submission as JSON. With no endpoint set it validates and shows
the thank-you state without sending anything, so the page can go live before the CRM is
connected.

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

Connected to the `malay-mehta-lp` Vercel project. Every push builds automatically:
pushes to the default branch go to production, other branches get preview URLs.
