import type { Metadata } from "next";
import About from "@/components/About";
import BookForm from "@/components/BookForm";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import IsThisYou from "@/components/IsThisYou";
import MobileCta from "@/components/MobileCta";
import Pricing from "@/components/Pricing";
import Results from "@/components/Results";
import Reviews from "@/components/Reviews";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Strip from "@/components/Strip";
import Treatments from "@/components/Treatments";
import Value from "@/components/Value";
import WhyDrMehta from "@/components/WhyDrMehta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "PRP, GFC & Exosome Therapy for Hair | Dr Malay Mehta, Mumbai",
  description:
    "Doctor-led, non-surgical hair restoration in Vile Parle, Mumbai with Dr Malay Mehta, MD Dermatology. PRP hair treatment, GFC therapy and exosome therapy. Book a consultation.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "PRP, GFC & Exosome Therapy for Hair | Dr Malay Mehta, Mumbai",
    description:
      "Non-surgical hair restoration led by Dr Malay Mehta, MD Dermatology. Consultations in Vile Parle, Mumbai.",
    siteName: site.name,
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Strip />
        <Treatments />
        <Results />
        <Pricing />
        <Reviews />
        <IsThisYou />
        <HowItWorks />
        <WhyDrMehta />
        <About />
        <Value />
        <Faq />
        <BookForm />
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  );
}
