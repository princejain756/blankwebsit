import { Button } from "@/components/ui/button";
import { ArrowRight, Microscope, Crown, Heart } from "lucide-react";

const PillarsSection = () => {
  const pillars = [
    {
      icon: Microscope,
      title: "Scientific Validation",
      body: "Every claim is linked to methods, endpoints, and papers—summarized in human language.",
      cta: { label: "Read our methods", href: "/science" }
    },
    {
      icon: Crown,
      title: "Premium Curation",
      body: "Fewer, better things. Time-tested picks that earn their spot through outcomes.",
      cta: { label: "See the curation criteria", href: "/science#criteria" }
    },
    {
      icon: Heart,
      title: "Founder Involvement",
      body: "Prince handpicks, tests, and supports every product—DM directly for advice.",
      cta: { label: "Talk to Prince", href: "/founder" }
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Built on Three{" "}
            <span className="bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent">
              Core Pillars
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every decision we make stems from our commitment to science, quality, and personal care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div key={index} className="group">
                <div className="glass-card hover:shadow-elevated transition-all duration-500 h-full flex flex-col">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary-accent/20 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-heading text-2xl mb-4">{pillar.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{pillar.body}</p>
                  </div>
                  
                  <div className="mt-auto">
                    <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary-accent">
                      {pillar.cta.label}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;