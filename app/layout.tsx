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

export const metadata: Metadata = {
  title: "PRP, GFC & Exosome Therapy for Hair | Dr Malay Mehta, Mumbai",
  description:
    "Doctor-led, non-surgical hair restoration in Vile Parle, Mumbai with Dr Malay Mehta, MD Dermatology. PRP hair treatment, GFC therapy and exosome therapy. Book a free consultation.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "PRP, GFC & Exosome Therapy for Hair | Dr Malay Mehta, Mumbai",
    description:
      "Non-surgical hair restoration led by Dr Malay Mehta, MD Dermatology. Free consultation in Vile Parle, Mumbai.",
    siteName: site.name,
    locale: "en_IN",
    type: "website",
  },
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
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
