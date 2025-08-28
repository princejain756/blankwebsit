import { Button } from "@/components/ui/button";
import { ArrowRight, FileCheck, Award, MessageSquare } from "lucide-react";

const PillarsGrid = () => {
  const pillars = [
    {
      icon: FileCheck,
      title: "Scientific Validation",
      body: "Readable evidence summaries with links to methods, endpoints, and human data.",
      cta: { label: "Our methods", href: "/science" }
    },
    {
      icon: Award,
      title: "Premium Curation",
      body: "Fewer, better things—selected for outcomes and craftsmanship.",
      cta: { label: "Curation criteria", href: "/science#criteria" }
    },
    {
      icon: MessageSquare,
      title: "Human Concierge",
      body: "Message the founder for guidance on fit, protocols, or safety.",
      cta: { label: "Concierge", href: "/founder" }
    }
  ];

  return (
    <section className="py-24 bg-surface-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Science × Curation × You
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Three pillars that define everything we do at BLANK.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div key={index} className="group p-8 rounded-2xl bg-white border border-surface-100 hover:border-brand-200 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  {pillar.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {pillar.body}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="group/btn p-0 h-auto text-brand-600 hover:text-brand-700 font-medium"
                  asChild
                >
                  <a href={pillar.cta.href}>
                    {pillar.cta.label}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PillarsGrid;