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
    <section className="py-24 bg-surface-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-2xl border border-surface-100 p-12 text-center shadow-sm">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Every PDP cites the science.
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Transparent research summaries with full citations and clear risk‑benefit analysis.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-10">
            {bulletPoints.map((bullet, index) => {
              const Icon = bullet.icon;
              return (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {bullet.text}
                  </span>
                </div>
              );
            })}
          </div>

          <Button size="lg" className="group h-12 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300" asChild>
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