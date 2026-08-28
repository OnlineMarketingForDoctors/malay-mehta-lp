import type { Metadata } from "next";
import About from "@/components/About";
import BookForm from "@/components/BookForm";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import IsThisYou from "@/components/IsThisYou";
import MobileCta from "@/components/MobileCta";
import Motion from "@/components/Motion";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Results from "@/components/Results";
import ReviewMarquee from "@/components/ReviewMarquee";
import FloatingActions from "@/components/FloatingActions";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Treatments from "@/components/Treatments";
import WhyMehta from "@/components/WhyMehta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "PRP, GFC & Exosome Therapy for Hair | Dr Malay Mehta, Mumbai",
  description:
    "Doctor-led, non-surgical hair restoration in Vile Parle, Mumbai with Dr Malay Mehta, MD Dermatology. PRP hair treatment, GFC therapy and exosome therapy. Book a consultation.",
  robots: { index: false, follow: false },
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
        <ReviewMarquee />
        <Results />
        <IsThisYou />
        <Treatments />
        <Pricing />
        <Process />
        <WhyMehta />
        <About />
        <Faq />
        <CtaBand />
        <BookForm />
      </main>
      <SiteFooter />
      <FloatingActions />
      <MobileCta />
      <Motion />
    </>
  );
}
