import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, BarChart3, Users } from "lucide-react";

const ScienceBanner = () => {
  const features = [
    {
      icon: FileText,
      text: "Readable summaries + full references"
    },
    {
      icon: BarChart3, 
      text: "Effect sizes & expected timelines"
    },
    {
      icon: Users,
      text: "Who it's for & who should avoid"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 via-primary-accent/5 to-primary/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass-card text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              Every page cites{" "}
              <span className="bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent">
                the science
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center justify-center md:justify-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{feature.text}</span>
                  </div>
                );
              })}
            </div>
            
            <Button variant="hero" size="lg" className="group">
              See evidence pages
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceBanner;