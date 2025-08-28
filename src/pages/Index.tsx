import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import PillarsSection from "@/components/PillarsSection";
import CategoryShowcase from "@/components/CategoryShowcase";
import ScienceBanner from "@/components/ScienceBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TrustBar />
      <PillarsSection />
      <CategoryShowcase />
      <ScienceBanner />
      <Footer />
    </div>
  );
};

export default Index;
