import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import UseCasesSection from "@/components/sections/UseCasesSection";
import TrustSection from "@/components/sections/TrustSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <BenefitsSection />
        <FeaturesSection />
        <UseCasesSection />
        <TrustSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
