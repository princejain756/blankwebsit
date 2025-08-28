import { Button } from "@/components/ui/button";
import { ArrowRight, Filter, Grid, Search } from "lucide-react";

const ShopHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-surface-0 via-surface-50 to-surface-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 75%, hsl(var(--brand-500)) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 25%, hsl(var(--accent)) 0%, transparent 50%)`
        }} />
      </div>
      
      {/* Floating Shop Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 animate-[sophisticated-float_8s_ease-in-out_infinite]">
          <div className="w-14 h-14 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
            <Grid className="w-7 h-7 text-brand-500" />
          </div>
        </div>
        <div className="absolute bottom-40 right-24 animate-[sophisticated-float_6s_ease-in-out_infinite_-2s]">
          <div className="w-18 h-18 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
            <Filter className="w-8 h-8 text-brand-600" />
          </div>
        </div>
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 leading-[0.9]">
          Shop the{" "}
          <span className="text-gradient">Proven</span>{" "}
          Edit
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Research-backed wellness, cutting-edge tech, and sustainable wear. Every product vetted by science and founder approval.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="group h-12 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            Browse All Products
            <Search className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="group h-12 px-8 text-base font-semibold bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            View by Category
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShopHero;