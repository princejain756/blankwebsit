import GlassHero from "@/components/GlassHero";
import TrustBar from "@/components/TrustBar";
import PillarsGrid from "@/components/PillarsGrid";
import CategoryShowcase from "@/components/CategoryShowcase";
import ScienceBanner from "@/components/ScienceBanner";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <GlassHero />
        <TrustBar />
        <PillarsGrid />
        <CategoryShowcase />
        <ScienceBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;