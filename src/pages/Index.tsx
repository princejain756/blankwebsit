import SophisticatedNav from "@/components/SophisticatedNav";
import SophisticatedHero from "@/components/SophisticatedHero";
import CorePillars from "@/components/CorePillars";
import FeaturedCollection from "@/components/FeaturedCollection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SophisticatedNav />
      <SophisticatedHero />
      <CorePillars />
      <FeaturedCollection />
      <Footer />
    </div>
  );
};

export default Index;