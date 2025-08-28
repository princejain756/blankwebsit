import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Filter, Grid, List, Star, Heart, ShoppingBag } from "lucide-react";

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Products', count: 47 },
    { id: 'wellness', label: 'Wellness', count: 18 },
    { id: 'technology', label: 'Technology', count: 15 },
    { id: 'fashion', label: 'Fashion', count: 14 }
  ];

  const products = [
    {
      id: 1,
      name: "LLLT Hair Growth System Pro",
      category: "wellness",
      price: 34999,
      originalPrice: 39999,
      rating: 4.9,
      reviews: 432,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop",
      badges: ["FDA Cleared", "Best Seller"],
      description: "650-680nm diodes with automated session timing and dermatologist-approved protocols."
    },
    {
      id: 2,
      name: "E-ink Tablet Pro 10.3\"",
      category: "technology", 
      price: 29999,
      rating: 4.8,
      reviews: 287,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop",
      badges: ["Research Backed", "New"],
      description: "Carta display technology with weeks of battery life and WACOM pen support."
    },
    {
      id: 3,
      name: "Signature Biowash Tee",
      category: "fashion",
      price: 1499,
      rating: 4.7,
      reviews: 623,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
      badges: ["Eco Certified", "Organic"],
      description: "200 GSM enzyme-washed cotton with tailored drape and sustainable production."
    },
    {
      id: 4,
      name: "Clinical Omega-3 Complex",
      category: "wellness",
      price: 2499,
      rating: 4.9,
      reviews: 891,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
      badges: ["Clinically Proven", "Top Rated"],
      description: "Ultra-pure EPA/DHA with third-party testing and transparent COA documentation."
    },
    {
      id: 5,
      name: "Circadian Blue Light Glasses",
      category: "technology",
      price: 4999,
      rating: 4.6,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop", 
      badges: ["Science Backed"],
      description: "Precision-tuned filters based on circadian research with premium titanium frames."
    },
    {
      id: 6,
      name: "Merino Wool Essential Hoodie",
      category: "fashion",
      price: 5999,
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      badges: ["Sustainable", "Premium"],
      description: "Ethically sourced merino with temperature regulation and odor resistance."
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-pearl/20 to-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h1 className="heading-section text-gradient mb-6">
              The Collection
            </h1>
            <p className="text-sophisticated text-muted-foreground max-w-3xl mx-auto">
              Every product scientifically validated, personally tested by Prince, and backed by transparent research.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="py-8 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "primary" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="relative"
                >
                  {category.label}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              
              <div className="flex border border-border rounded-lg overflow-hidden">
                <Button
                  variant={viewMode === 'grid' ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-none"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="luxury-card hover:shadow-glow transition-all duration-500">
                  {/* Product Image */}
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.badges.map((badge) => (
                        <Badge key={badge} variant="premium" className="text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>

                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="luxury" size="icon" className="w-10 h-10">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-electric transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-muted-foreground'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-muted-foreground">({product.reviews})</span>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-display font-bold text-foreground">
                          ₹{product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      
                      <Button variant="primary" size="sm" className="group/btn">
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;