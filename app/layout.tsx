import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-roboto",
});

/** Defaults only — each page sets its own title and description. */
export const metadata: Metadata = {
  title: site.name,
  description:
    "Hair and skin care led by Dr Malay Mehta, MD Dermatology, in Vile Parle West, Mumbai.",
};

/**
 * LocalBusiness data only. The reviews on the page are labelled as samples, so
 * no review or rating markup is emitted until real verified reviews are wired in.
 */
const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: site.name,
  medicalSpecialty: "Dermatology",
  telephone: site.phoneDisplay,
  url: site.mainSite,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    addressLocality: site.locality,
    addressRegion: site.region,
    postalCode: site.postalCode,
    addressCountry: site.country,
  },
  employee: {
    "@type": "Physician",
    name: site.doctor,
    medicalSpecialty: "Dermatology",
  },
};

/**
 * Google Tag Manager loader, verbatim from the GTM install snippet.
 *
 * Rendered as a plain <script> inside <head> rather than via next/script:
 * `beforeInteractive` queues the snippet through Next's own loader at the top
 * of <body>, which is neither in the head nor the untouched snippet. Next still
 * emits its framework chunks above this tag, but those are async, so this
 * inline script executes first.
 */
const gtmSnippet = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${site.gtmId}');`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        {/* Google Tag Manager — first element in <head>. */}
        <script dangerouslySetInnerHTML={{ __html: gtmSnippet }} />
      </head>
      <body>
        {/* Google Tag Manager (noscript) — first thing inside <body>. */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${site.gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <script
          type="application/ld+json"
          // Static, hand-authored object — no user input reaches this string.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
      </body>
    </html>
  );
}
