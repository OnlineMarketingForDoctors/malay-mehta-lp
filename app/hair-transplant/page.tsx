import type { Metadata } from "next";
import FloatingActions from "@/components/FloatingActions";
import Motion from "@/components/Motion";
import ReviewMarquee from "@/components/ReviewMarquee";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader, { type NavLink } from "@/components/SiteHeader";
import HtAbout from "@/components/ht/HtAbout";
import HtCta from "@/components/ht/HtCta";
import HtFaq from "@/components/ht/HtFaq";
import HtForm from "@/components/ht/HtForm";
import HtHero from "@/components/ht/HtHero";
import HtPricing from "@/components/ht/HtPricing";
import HtProcedures from "@/components/ht/HtProcedures";
import HtResults from "@/components/ht/HtResults";
import HtSapphire from "@/components/ht/HtSapphire";
import HtTravel from "@/components/ht/HtTravel";
import HtVoices from "@/components/ht/HtVoices";
import HtWhy from "@/components/ht/HtWhy";
import { htPath, site } from "@/lib/site";
import "./ht.css";

const links: NavLink[] = [
  { hash: "#results", label: "Results" },
  { hash: "#sapphire", label: "Sapphire FUE" },
  { hash: "#procedures", label: "Procedures" },
  { hash: "#about", label: "Dr Mehta" },
  { hash: "#pricing", label: "Pricing" },
  { hash: "#faq", label: "FAQ" },
];

export const metadata: Metadata = {
  title: "Hair Transplant in Mumbai | Sapphire FUE by Dr Malay Mehta",
  description:
    "Sapphire FUE hair transplant in Mumbai, performed personally by Dr Malay Mehta, MBBS, MD Dermatology, in Vile Parle West. Up to 6,000 grafts in one sitting, from 7,000 INR per 1,000 grafts. Book a consultation.",
  // Paid-traffic landing page. It carries the same terms as the clinic's own
  // hair transplant pages, so it is kept out of the index to avoid competing
  // with them. Flip both to true to make it an organic page.
  robots: { index: false, follow: false },
  openGraph: {
    title: "Hair Transplant in Mumbai | Sapphire FUE by Dr Malay Mehta",
    description:
      "Doctor-led Sapphire FUE hair transplant in Vile Parle West, Mumbai. Up to 6,000 grafts in one sitting.",
    siteName: site.name,
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <SiteHeader basePath={htPath} links={links} />
      <main>
        <HtHero />
        <div id="reviews">
          <ReviewMarquee />
        </div>
        <HtResults />
        <HtSapphire />
        <HtProcedures />
        <HtWhy />
        <HtAbout />
        <HtPricing />
        <HtTravel />
        <HtVoices />
        <HtFaq />
        <HtCta />
        <HtForm />
      </main>
      <SiteFooter />
      <FloatingActions />
      <Motion />
    </>
  );
}
