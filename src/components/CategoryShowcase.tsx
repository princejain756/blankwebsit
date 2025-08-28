import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Laptop, Shirt } from "lucide-react";

const CategoryShowcase = () => {
  const categories = [
    {
      key: "wellness",
      icon: Activity,
      headline: "Wellness",
      sub: "LLLT hair growth, clinically proven supplements.",
      cta: { label: "Explore Wellness", href: "/shop/wellness" },
      gradient: "from-emerald-500/20 to-green-500/20"
    },
    {
      key: "technology", 
      icon: Laptop,
      headline: "Cutting-Edge Tech",
      sub: "E-ink tablets, circadian-safe eyewear.",
      cta: { label: "Explore Tech", href: "/shop/technology" },
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      key: "fashion",
      icon: Shirt, 
      headline: "Sustainable Fashion",
      sub: "Bio-washed cotton. Effortless silhouettes.",
      cta: { label: "Explore Fashion", href: "/shop/fashion" },
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Curated by{" "}
            <span className="bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent">
              Category
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each category represents years of research, testing, and careful selection of only the most effective products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={category.key} className="group">
                <div className="glass-card hover:shadow-elevated transition-all duration-500 overflow-hidden">
                  <div className={`h-48 bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6`}>
                    <Icon className="w-16 h-16 text-primary" />
                  </div>
                  
                  <div className="p-6 pt-0">
                    <h3 className="font-heading text-2xl mb-3">{category.headline}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{category.sub}</p>
                    
                    <Button variant="outline" className="group/btn w-full">
                      {category.cta.label}
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

export default CategoryShowcase;