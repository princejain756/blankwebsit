import { Button } from "@/components/ui/button";
import { ArrowRight, Microscope, BookOpen, FlaskConical } from "lucide-react";

const ScienceHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-surface-0 via-surface-50 to-surface-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 30%, hsl(var(--brand-500)) 0%, transparent 50%), 
                           radial-gradient(circle at 70% 70%, hsl(var(--accent)) 0%, transparent 50%)`
        }} />
      </div>
      
      {/* Floating Science Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 animate-[sophisticated-float_8s_ease-in-out_infinite]">
          <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
            <Microscope className="w-8 h-8 text-brand-500" />
          </div>
        </div>
        <div className="absolute bottom-32 right-32 animate-[sophisticated-float_6s_ease-in-out_infinite_-2s]">
          <div className="w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
            <FlaskConical className="w-10 h-10 text-brand-600" />
          </div>
        </div>
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 leading-[0.9]">
          Our{" "}
          <span className="text-gradient">Scientific</span>{" "}
          Methods
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Transparency in research methodology. Evidence-based product selection. Human-readable science summaries.
        </p>

        <Button size="lg" className="group h-12 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
          Explore Our Research
          <BookOpen className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
        </Button>
      </div>
    </section>
  );
};

export default ScienceHero;