import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Sparkles, Zap, Crown } from "lucide-react";

const SophisticatedHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient">
      {/* Interactive Background Effects */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--electric) / 0.1), transparent)`,
        }}
      />
      
      {/* Floating Sophisticated Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 float-element">
          <div className="luxury-card w-40 h-24 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-electric" />
          </div>
        </div>
        <div className="absolute bottom-32 right-20 float-element">
          <div className="luxury-card w-32 h-32 flex items-center justify-center">
            <Crown className="w-10 h-10 text-gold" />
          </div>
        </div>
        <div className="absolute top-1/2 right-10 float-element">
          <div className="luxury-card w-48 h-16 flex items-center justify-center">
            <Zap className="w-6 h-6 text-neon" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 text-center">
        {/* Premium Trust Indicator */}
        <div className="luxury-card inline-block mb-12">
          <div className="flex items-center gap-4 text-sm font-medium">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-gold font-semibold">4.9</span>
            <div className="w-px h-4 bg-border"></div>
            <span className="text-muted-foreground">2,500+ verified reviews</span>
            <div className="w-px h-4 bg-border"></div>
            <span className="text-emerald font-semibold">99% satisfaction</span>
          </div>
        </div>

        {/* Hero Headline - Ultra Sophisticated */}
        <h1 className="heading-hero text-gradient mb-8 leading-[0.85] tracking-tight">
          Where Science Meets
          <br />
          <span className="text-gold">Luxury</span>
        </h1>

        {/* Refined Subheadline */}
        <p className="text-sophisticated text-muted-foreground mb-4 max-w-4xl mx-auto font-light">
          Peer-reviewed research. Artisanal curation. Personal founder involvement.
        </p>
        
        <p className="text-lg text-muted-foreground/80 mb-12 max-w-3xl mx-auto">
          Every product at BLANK is scientifically validated, luxuriously crafted, and personally vetted by Prince Jain.
        </p>

        {/* Sophisticated CTA Section */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <Button variant="primary" size="xl" className="group shadow-glow">
            Explore the Collection
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
          </Button>
          <Button variant="luxury" size="xl" className="group">
            Speak with Prince
            <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-12" />
          </Button>
        </div>

        {/* Elegant Stats Bar */}
        <div className="luxury-card max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-gradient mb-2">2,500+</div>
              <div className="text-sm text-muted-foreground">Satisfied Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-gold mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-emerald mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Scientific Studies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-neon mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Founder Response</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SophisticatedHero;