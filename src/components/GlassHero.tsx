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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-surface-0 via-surface-50 to-surface-100">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--brand-500)) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, hsl(var(--accent)) 0%, transparent 50%)`
        }} />
      </div>
      
      {/* Interactive Mouse Effect */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--brand-500) / 0.1), transparent)`,
        }}
      />
      
      {/* Elegant Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-[sophisticated-float_8s_ease-in-out_infinite]">
          <div className="w-24 h-24 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-brand-400" />
          </div>
        </div>
        <div className="absolute bottom-32 right-20 animate-[sophisticated-float_6s_ease-in-out_infinite_-2s]">
          <div className="w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
            <Crown className="w-7 h-7 text-brand-600" />
          </div>
        </div>
        <div className="absolute top-1/2 right-10 animate-[sophisticated-float_10s_ease-in-out_infinite_-4s]">
          <div className="w-28 h-14 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
            <Zap className="w-5 h-5 text-accent" />
          </div>
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-warning text-warning" />
            ))}
          </div>
          <span className="text-sm font-semibold text-foreground">4.9</span>
          <div className="w-px h-4 bg-border"></div>
          <span className="text-sm text-muted-foreground">2,500+ reviews</span>
          <div className="w-px h-4 bg-border"></div>
          <span className="text-sm font-semibold text-success">99% satisfaction</span>
        </div>

        {/* Hero Headline */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-[0.9] tracking-tight">
          Luxury that's{" "}
          <span className="relative">
            <span className="text-gradient">scientifically</span>
          </span>{" "}
          earned.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Peer‑reviewed rigor. Boutique curation. Human concierge.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Button size="lg" className="group h-12 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            Shop the Proven Edit
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="group h-12 px-8 text-base font-semibold bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            Ask the Founder
            <Crown className="w-4 h-4 ml-2 transition-transform group-hover:rotate-12" />
          </Button>
        </div>

        {/* Hero Product Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {heroProducts.map((product, index) => {
            const Icon = product.icon;
            return (
              <div key={index} className="group p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs font-medium px-3 py-1 bg-white/20 border-white/20">
                    {product.tag}
                  </Badge>
                </div>
                <p className="text-sm font-medium text-foreground group-hover:text-brand-600 transition-colors text-left">
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