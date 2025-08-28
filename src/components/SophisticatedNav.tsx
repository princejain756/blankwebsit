import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, User, Heart, ShoppingBag, Crown } from "lucide-react";

const SophisticatedNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const primaryNav = [
    { label: "Collection", href: "/shop" },
    { label: "Science", href: "/science" },
    { label: "Prince", href: "/founder" },
    { label: "Apps", href: "/apps" },
    { label: "Journal", href: "/journal" }
  ];

  const secondaryNav = [
    { icon: Search, href: "/search", label: "Search" },
    { icon: User, href: "/account", label: "Account" },
    { icon: Heart, href: "/saved", label: "Wishlist" },
    { icon: ShoppingBag, href: "/cart", label: "Cart" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Sophisticated Logo */}
          <div className="flex items-center group cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric to-neon flex items-center justify-center">
                <Crown className="w-5 h-5 text-snow" />
              </div>
              <div>
                <h1 className="font-display text-2xl font-bold text-gradient">
                  BLANK
                </h1>
                <p className="text-xs text-muted-foreground font-medium -mt-1">by Prince Jain</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {primaryNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link text-base font-medium text-foreground hover:text-electric transition-all duration-300 py-2"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Secondary Actions */}
          <div className="flex items-center space-x-3">
            {secondaryNav.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.label}
                  variant="ghost"
                  size="icon"
                  className="hidden sm:flex micro-bounce"
                  title={item.label}
                >
                  <Icon className="w-5 h-5" />
                </Button>
              );
            })}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden micro-bounce"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Sophisticated Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 backdrop-blur-xl">
            <div className="py-6 space-y-4">
              {primaryNav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-lg font-medium text-foreground hover:text-electric hover:bg-electric/5 rounded-xl transition-all duration-300"
                >
                  {item.label}
                </a>
              ))}
              
              <div className="grid grid-cols-4 gap-3 pt-6 border-t border-white/10">
                {secondaryNav.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Button key={item.label} variant="luxury" className="flex-col h-16 gap-2">
                      <Icon className="w-5 h-5" />
                      <span className="text-xs">{item.label}</span>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default SophisticatedNav;