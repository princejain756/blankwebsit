import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Zap, Leaf } from "lucide-react";
import productWellness from "@/assets/product-lllt.jpg";
import productTech from "@/assets/product-tech.jpg";
import productFashion from "@/assets/product-fashion.jpg";

const CategoryShowcase = () => {
  const categories = [
    {
      key: "wellness",
      icon: Heart,
      headline: "Wellness",
      sub: "LLLT hair growth, clinically proven supplements.",
      image: productWellness,
      cta: { label: "Explore Wellness", href: "/shop/wellness" }
    },
    {
      key: "tech",
      icon: Zap,
      headline: "Cutting‑Edge Tech",
      sub: "E‑ink tools, circadian‑safe eyewear.",
      image: productTech,
      cta: { label: "Explore Tech", href: "/shop/tech" }
    },
    {
      key: "wear",
      icon: Leaf,
      headline: "Sustainable Wear",
      sub: "Bio‑washed cotton, eco materials.",
      image: productFashion,
      cta: { label: "Explore Wear", href: "/shop/wear" }
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Curated Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every product category backed by research and selected for impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="group bg-white rounded-2xl border border-surface-100 hover:border-brand-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.headline}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground">
                      {category.headline}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {category.sub}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group/btn hover:bg-brand-50 hover:border-brand-300 transition-all duration-300"
                    asChild
                  >
                    <a href={category.cta.href}>
                      {category.cta.label}
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </a>
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

export default CategoryShowcase;