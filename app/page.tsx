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
