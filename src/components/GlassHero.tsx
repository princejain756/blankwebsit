import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Crown, Zap, Sparkles } from "lucide-react";

const GlassHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const heroProducts = [
    { name: "LLLT Hair Growth Cap Pro", tag: "FDA‑cleared", icon: Crown },
    { name: "Blue‑Light Glasses Lab‑Edition", tag: "Lab‑referenced", icon: Zap },
    { name: "E‑ink Note Pro", tag: "Research‑backed", icon: Sparkles }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-surface-1000 via-brand-50 to-surface-900">
      {/* Interactive Background Effects */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--brand-400) / 0.15), transparent)`,
        }}
      />
      
      {/* Floating Glass Shards */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-[sophisticated-float_8s_ease-in-out_infinite]">
          <div className="glass-card w-32 h-20 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-brand-500" />
          </div>
        </div>
        <div className="absolute bottom-32 right-20 animate-[sophisticated-float_6s_ease-in-out_infinite_-2s]">
          <div className="glass-card w-28 h-28 flex items-center justify-center">
            <Crown className="w-8 h-8 text-accent" />
          </div>
        </div>
        <div className="absolute top-1/2 right-10 animate-[sophisticated-float_10s_ease-in-out_infinite_-4s]">
          <div className="glass-card w-40 h-16 flex items-center justify-center">
            <Zap className="w-5 h-5 text-brand-600" />
          </div>
        </div>
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        {/* Reviews Banner */}
        <div className="glass-card inline-block mb-8">
          <div className="flex items-center gap-3 text-sm font-medium">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-warning text-warning" />
              ))}
            </div>
            <span className="text-warning font-semibold">4.9</span>
            <div className="w-px h-4 bg-border"></div>
            <span className="text-muted-foreground">2,500+ reviews</span>
            <div className="w-px h-4 bg-border"></div>
            <span className="text-success font-semibold">99% satisfaction</span>
          </div>
        </div>

        {/* Hero Headline */}
        <h1 className="font-display text-6xl md:text-8xl font-bold text-gradient mb-6 leading-[0.85] tracking-tight">
          Luxury that's scientifically earned.
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-4xl mx-auto font-light">
          Peer‑reviewed rigor. Boutique curation. Human concierge.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="group shadow-elevated">
            Shop the Proven Edit
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="lg" className="group glass-morphism">
            Ask the Founder →
            <Crown className="w-4 h-4 transition-transform group-hover:rotate-12" />
          </Button>
        </div>

        {/* Hero Product Reel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {heroProducts.map((product, index) => {
            const Icon = product.icon;
            return (
              <div key={index} className="glass-card group cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {product.tag}
                  </Badge>
                </div>
                <p className="text-sm font-medium text-foreground group-hover:text-brand-600 transition-colors">
                  {product.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GlassHero;