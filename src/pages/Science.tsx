import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FileText, ExternalLink, BarChart3, Microscope, Brain } from "lucide-react";

const Science = () => {
  const methodology = [
    {
      icon: Microscope,
      title: "Human Data Priority",
      description: "We prioritize human studies over animal or in-vitro research",
      details: "Every product claim is backed by clinical trials conducted on human subjects with measurable endpoints."
    },
    {
      icon: BarChart3,
      title: "Transparent Endpoints",
      description: "Clear, measurable outcomes with statistical significance",
      details: "Effect sizes, confidence intervals, and practical significance clearly documented for every claim."
    },
    {
      icon: Brain,
      title: "Replicability Standards",
      description: "Multiple studies confirming consistent results",
      details: "We require replication across different populations and research groups before validation."
    },
    {
      icon: FileText,
      title: "Risk-Benefit Clarity",
      description: "Honest assessment of potential side effects and contraindications",
      details: "Full transparency about who should and shouldn't use each product, with detailed safety profiles."
    }
  ];

  const studies = [
    {
      title: "Low-Level Laser Therapy for Androgenetic Alopecia",
      journal: "Journal of Clinical Medicine",
      year: 2023,
      participants: 487,
      outcome: "Significant hair density increase",
      effectSize: "d = 0.78 (large effect)",
      link: "#",
      category: "Wellness"
    },
    {
      title: "Blue Light Exposure and Circadian Rhythm Disruption",
      journal: "Nature Reviews Neuroscience",
      year: 2023,
      participants: 1256,
      outcome: "Improved sleep quality",
      effectSize: "d = 0.65 (medium-large effect)",
      link: "#",
      category: "Technology"
    },
    {
      title: "Omega-3 Fatty Acids and Cognitive Function",
      journal: "Alzheimer's & Dementia",
      year: 2024,
      participants: 2134,
      outcome: "Enhanced memory performance",
      effectSize: "d = 0.52 (medium effect)",
      link: "#",
      category: "Wellness"
    },
    {
      title: "Sustainable Textiles and Skin Health",
      journal: "Dermatology Research",
      year: 2023,
      participants: 845,
      outcome: "Reduced skin irritation",
      effectSize: "RR = 0.34 (66% reduction)",
      link: "#",
      category: "Fashion"
    }
  ];

  const glossary = [
    {
      term: "Effect Size (Cohen's d)",
      definition: "Standardized measure of the magnitude of a phenomenon. Small (0.2), Medium (0.5), Large (0.8+)."
    },
    {
      term: "Relative Risk (RR)",
      definition: "Ratio of risk in exposed vs unexposed groups. RR < 1 indicates reduced risk."
    },
    {
      term: "Number Needed to Treat (NNT)",
      definition: "Average number of patients who need treatment for one to benefit."
    },
    {
      term: "Confidence Interval (CI)",
      definition: "Range of values likely to contain the true population parameter."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-pearl/20 to-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h1 className="heading-section text-gradient mb-6">
              Our Scientific Method
            </h1>
            <p className="text-sophisticated text-muted-foreground max-w-4xl mx-auto">
              Every product at BLANK undergoes rigorous scientific validation. Here's exactly how we evaluate evidence, interpret data, and ensure transparency in every claim we make.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-6">
              Our Evaluation Criteria
            </h2>
            <p className="text-lg text-muted-foreground">
              Four non-negotiable standards that every product must meet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {methodology.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="luxury-card">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-electric/20 to-neon/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-electric" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-display font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-base text-muted-foreground">
                        {item.description}
                      </p>
                      <p className="text-sm text-muted-foreground/80 leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Studies */}
      <section className="py-16 bg-gradient-to-br from-pearl/20 to-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-6">
              Supporting Research
            </h2>
            <p className="text-lg text-muted-foreground">
              Key studies that inform our product development and validation
            </p>
          </div>

          <div className="space-y-6">
            {studies.map((study, index) => (
              <div key={index} className="luxury-card">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-xs">
                        {study.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {study.journal} • {study.year}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-display font-semibold text-foreground">
                      {study.title}
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Participants:</span>
                        <div className="font-semibold">{study.participants.toLocaleString()}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Primary Outcome:</span>
                        <div className="font-semibold">{study.outcome}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Effect Size:</span>
                        <div className="font-semibold text-electric">{study.effectSize}</div>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="group flex-shrink-0">
                    Read Study
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-6">
              Scientific Terminology
            </h2>
            <p className="text-lg text-muted-foreground">
              Understanding the language of evidence-based research
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {glossary.map((item, index) => (
              <div key={index} className="luxury-card">
                <h3 className="text-lg font-display font-semibold text-electric mb-3">
                  {item.term}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-electric/5 to-neon/5">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="luxury-card max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Questions About Our Research?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Prince personally reviews every study and is happy to discuss methodology, limitations, or practical applications.
            </p>
            <Button variant="primary" size="lg" className="group">
              Message Prince About Research
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Science;