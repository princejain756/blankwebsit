import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, BarChart3, AlertTriangle } from "lucide-react";

const ScienceBanner = () => {
  const bulletPoints = [
    {
      icon: FileText,
      text: "Mechanism"
    },
    {
      icon: BarChart3,
      text: "Endpoints & effect sizes"
    },
    {
      icon: AlertTriangle,
      text: "Who should avoid"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-brand-50 to-surface-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass-card text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Every PDP cites the science.
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transparent research summaries with full citations and clear risk‑benefit analysis.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {bulletPoints.map((bullet, index) => {
              const Icon = bullet.icon;
              return (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {bullet.text}
                  </span>
                </div>
              );
            })}
          </div>

          <Button size="lg" className="group" asChild>
            <a href="/science">
              See evidence pages
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ScienceBanner;