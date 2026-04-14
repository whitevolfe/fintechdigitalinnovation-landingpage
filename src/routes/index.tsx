import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustSection } from "@/components/TrustSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { OfferSection } from "@/components/OfferSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "AzeemDigital — High-Converting Websites That Bring Clients" },
      {
        name: "description",
        content:
          "Premium, fast-loading websites with SEO tracking & lead systems. One-time payment. Lifetime hosting. Turn visitors into paying customers.",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustSection />
      <ProblemSolutionSection />
      <OfferSection />
      <PortfolioSection />
      <ProcessSection />
      <GuaranteeSection />
      <FinalCTASection />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
