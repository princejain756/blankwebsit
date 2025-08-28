import { Button } from "@/components/ui/button";
import { ArrowRight, Microscope, Crown, Sparkles } from "lucide-react";

const CorePillars = () => {
  const pillars = [
    {
      icon: Microscope,
      title: "Scientific Rigor",
      description: "Every claim backed by peer-reviewed research and transparent methodology",
      details: "We don't just cite studies—we break down effect sizes, confidence intervals, and real-world applicability in language that makes sense.",
      cta: { label: "Explore our methodology", href: "/science" },
      gradient: "from-electric/20 to-neon/20"
    },
    {
      icon: Crown,
      title: "Artisanal Curation",
      description: "Fewer products, higher standards, exceptional outcomes",
      details: "Each item undergoes months of testing, validation, and refinement before earning its place in our collection.",
      cta: { label: "View curation process", href: "/curation" },
      gradient: "from-gold/20 to-yellow-500/20"
    },
    {
      icon: Sparkles,
      title: "Personal Touch",
      description: "Direct access to Prince for guidance, questions, and support",
      details: "Not a chatbot, not a call center. Real conversations with the founder who handpicks everything here.",
      cta: { label: "Message Prince", href: "/founder" },
      gradient: "from-emerald/20 to-green-500/20"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-background via-pearl/30 to-background relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="text-center mb-20">
          <h2 className="heading-section text-gradient mb-8">
            Built on Three
            <br />
            Fundamental Principles
          </h2>
          <p className="text-sophisticated text-muted-foreground max-w-3xl mx-auto">
            Every decision, every product, every interaction stems from our unwavering commitment to these core values that define the BLANK experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div key={index} className="group relative">
                <div className="luxury-card h-full">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-10 h-10 text-electric" />
                  </div>
                  
                  <h3 className="text-3xl font-display font-semibold mb-4 text-foreground">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {pillar.description}
                  </p>
                  
                  <p className="text-base text-muted-foreground/80 mb-8 leading-relaxed">
                    {pillar.details}
                  </p>
                  
                  <Button variant="outline" className="group/btn w-full">
                    {pillar.cta.label}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CorePillars;