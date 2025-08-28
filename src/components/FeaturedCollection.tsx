import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Brain, Leaf, Star } from "lucide-react";

const FeaturedCollection = () => {
  const collections = [
    {
      id: "wellness",
      icon: Zap,
      title: "Advanced Wellness",
      subtitle: "Science-backed vitality",
      description: "FDA-cleared devices and clinically proven supplements that deliver measurable results",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      badge: "FDA Cleared",
      badgeVariant: "success" as const,
      products: ["LLLT Hair Growth System", "Clinical-Grade Omega-3", "Circadian Optimizer"],
      cta: { label: "Explore Wellness", href: "/wellness" }
    },
    {
      id: "technology",
      icon: Brain,
      title: "Cutting-Edge Tech", 
      subtitle: "The future of productivity",
      description: "E-ink displays, blue-light optimization, and devices designed for peak cognitive performance",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      badge: "Research Backed",
      badgeVariant: "premium" as const,
      products: ["E-ink Tablet Pro", "Circadian Glasses", "Focus Enhancement Kit"],
      cta: { label: "Explore Tech", href: "/technology" }
    },
    {
      id: "fashion",
      icon: Leaf,
      title: "Conscious Fashion",
      subtitle: "Luxury meets sustainability", 
      description: "Bio-washed fabrics, zero-waste processes, and timeless designs that respect both style and planet",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      badge: "Eco Certified",
      badgeVariant: "success" as const,
      products: ["Signature Cotton Tees", "Merino Essentials", "Sustainable Denim"],
      cta: { label: "Explore Fashion", href: "/fashion" }
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-background to-pearl/20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="heading-section text-gradient mb-8">
            Curated Collections
          </h2>
          <p className="text-sophisticated text-muted-foreground max-w-3xl mx-auto">
            Three distinct categories, each representing years of research and careful selection of only the most effective, innovative products.
          </p>
        </div>

        <div className="space-y-16">
          {collections.map((collection, index) => {
            const Icon = collection.icon;
            const isReversed = index % 2 === 1;
            
            return (
              <div key={collection.id} className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
                {/* Content */}
                <div className="flex-1 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-electric/20 to-neon/20 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-electric" />
                    </div>
                    <Badge variant={collection.badgeVariant} className="text-sm px-4 py-2">
                      {collection.badge}
                    </Badge>
                  </div>
                  
                  <div>
                    <h3 className="text-5xl font-display font-bold text-foreground mb-3">
                      {collection.title}
                    </h3>
                    <p className="text-xl text-gold font-medium mb-6">
                      {collection.subtitle}
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {collection.description}
                    </p>
                  </div>

                  {/* Featured Products */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">Featured Products:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {collection.products.map((product) => (
                        <div key={product} className="luxury-card text-center py-4">
                          <p className="text-sm font-medium text-foreground">{product}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="primary" size="lg" className="group">
                    {collection.cta.label}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                  </Button>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <div className="luxury-card p-0 overflow-hidden">
                    <img 
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105"
                    />
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

export default FeaturedCollection;