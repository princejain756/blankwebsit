import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import productLLLT from "@/assets/product-lllt.jpg";
import productTech from "@/assets/product-tech.jpg";
import productFashion from "@/assets/product-fashion.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Premium glassmorphism background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-50/80 via-transparent to-background/80"></div>
      </div>
      
      {/* Floating Glass Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-20 left-10 glass-card w-32 h-32 animate-float"></div>
        <div className="absolute bottom-32 right-20 glass-card w-24 h-24 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-10 glass-card w-40 h-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        {/* Trust Banner */}
        <div className="glass-card inline-block mb-8">
          <div className="flex items-center gap-2 text-sm font-medium">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-muted-foreground">4.9</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">2,500+ reviews</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">99% satisfaction</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
          Luxury that's{" "}
          <span className="bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent">
            scientifically earned
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-body">
          Peer-reviewed rigor. Boutique curation. One-to-one founder care.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button variant="hero" size="xl" className="group">
            Shop the Proven Edit
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="glass" size="xl">
            Ask Prince Anything →
          </Button>
        </div>

        {/* Product Reel */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* LLLT Product */}
          <div className="group">
            <div className="glass-card p-6 hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img 
                  src={productLLLT} 
                  alt="LLLT Hair Growth Cap Pro"
                  className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                />
                <Badge variant="premium" className="absolute top-3 left-3">
                  FDA-cleared
                </Badge>
              </div>
              <h3 className="font-heading text-lg mb-2">LLLT Hair Growth Cap Pro</h3>
              <p className="text-sm text-muted-foreground mb-3">
                650–680nm diodes with auto session timer
              </p>
              <p className="font-semibold text-primary">₹34,999</p>
            </div>
          </div>

          {/* Tech Product */}
          <div className="group">
            <div className="glass-card p-6 hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img 
                  src={productTech} 
                  alt="E-ink Paper Pro"
                  className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                />
                <Badge variant="glass" className="absolute top-3 left-3">
                  Research-backed
                </Badge>
              </div>
              <h3 className="font-heading text-lg mb-2">E-ink Paper Pro</h3>
              <p className="text-sm text-muted-foreground mb-3">
                10.3" Carta display with weeks-long battery
              </p>
              <p className="font-semibold text-primary">₹29,999</p>
            </div>
          </div>

          {/* Fashion Product */}
          <div className="group">
            <div className="glass-card p-6 hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img 
                  src={productFashion} 
                  alt="Signature Biowash Tee"
                  className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                />
                <Badge variant="success" className="absolute top-3 left-3">
                  Eco
                </Badge>
              </div>
              <h3 className="font-heading text-lg mb-2">Signature Biowash Tee</h3>
              <p className="text-sm text-muted-foreground mb-3">
                200 GSM enzyme-washed cotton
              </p>
              <p className="font-semibold text-primary">₹1,499</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;