/**
 * Single source of truth for clinic details used across the landing page.
 * Update here and every section, the JSON-LD and the metadata follow.
 */
export const site = {
  name: "Malay Mehta Aesthetic Clinic",
  doctor: "Dr Malay Mehta",
  phoneDisplay: "+91 70452 91747",
  phoneHref: "tel:+917045291747",
  street: "104, Cosmos Court, Vile Parle West",
  locality: "Mumbai",
  region: "Maharashtra",
  postalCode: "400056",
  country: "IN",
  /** Google Tag Manager container. Loaded on every page from app/layout.tsx. */
  gtmId: "GTM-MZTRS97",
  mainSite: "https://www.drmalaymehta.com/",
  privacyPolicy: "https://www.drmalaymehta.com/wpautoterms/privacy-policy/",
  /**
   * Hero background photograph, served from the main WordPress site so the
   * landing page stays visually in step with it. Swap for a local file in
   * /public if you would rather not hotlink; the dark gradient underneath is
   * the fallback either way.
   */
  heroImage:
    "https://www.drmalaymehta.com/wp-content/uploads/2021/07/hero-default.jpg",
} as const;
