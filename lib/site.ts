/**
 * Single source of truth for clinic details used across the landing page.
 * Update here and every section, the JSON-LD and the metadata follow.
 */
export const site = {
  name: "Malay Mehta Aesthetic Clinic",
  doctor: "Dr Malay Mehta",
  phoneDisplay: "+91 70452 91747",
  phoneHref: "tel:+917045291747",
  whatsapp: "https://wa.me/+917045291747",
  street: "104, Cosmos Court, Vile Parle West",
  locality: "Mumbai",
  region: "Maharashtra",
  postalCode: "400056",
  country: "IN",
  /**
   * Where the landing page lives. Every internal link is built from this, so
   * moving the page is a one-line change here plus renaming its folder under
   * app/. `/` redirects here — see next.config.mjs.
   */
  lpPath: "/non-surgical-hair-treatment",
  /** Google Tag Manager container. Loaded on every page from app/layout.tsx. */
  gtmId: "GTM-MZTRS97",
  mainSite: "https://www.drmalaymehta.com/",
  privacyPolicy: "https://www.drmalaymehta.com/wpautoterms/privacy-policy/",
  /**
   * Footer wordmark, served from the main WordPress site. Its alt text is the
   * clinic name, so a failed load degrades to readable text rather than nothing.
   */
  footerLogo:
    "https://www.drmalaymehta.com/wp-content/uploads/2021/07/logo-footer.png.webp",
} as const;

/** The clinic's public profiles, listed in the footer. */
export const social = [
  { key: "facebook", label: "Facebook", href: "https://www.facebook.com/drmalaymehta/" },
  { key: "instagram", label: "Instagram", href: "https://www.instagram.com/drmalaymehta/" },
  {
    key: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/channel/UC81lPkFymOFyiZFMKYWjqZA",
  },
  { key: "x", label: "X", href: "https://x.com/drmalaymehta" },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/malay-mehta-b42a88a2/",
  },
] as const;

/**
 * Photography, all generated for this page and self-hosted in /public/img.
 */
export const img = {
  hero: "/img/hero.jpg",
  portrait: "/img/portrait.jpg",
  consult: "/img/consult.jpg",
  prp: "/img/prp.jpg",
  gfc: "/img/gfc.jpg",
  exosome: "/img/exosome.jpg",
  mirror: "/img/mirror.jpg",
  clinic: "/img/clinic.jpg",
  scalp: "/img/scalp.jpg",
} as const;
