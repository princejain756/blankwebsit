import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, User, Heart, ShoppingBag } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const primaryNav = [
    { label: "Shop", href: "/shop" },
    { label: "Science", href: "/science" },
    { label: "Founder Concierge", href: "/founder" },
    { label: "Journal", href: "/journal" }
  ];

  const secondaryNav = [
    { icon: Search, href: "/search", label: "Search" },
    { icon: User, href: "/account", label: "Account" },
    { icon: Heart, href: "/saved", label: "Saved" },
    { icon: ShoppingBag, href: "/cart", label: "Cart" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer">
            <div>
              <h1 className="font-display text-2xl font-bold text-gradient">
                BLANK
              </h1>
              <p className="text-xs text-muted-foreground font-medium -mt-1">by Prince Jain</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {primaryNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-brand-600 transition-colors duration-200 py-2"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Secondary Actions */}
          <div className="flex items-center space-x-2">
            {secondaryNav.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.label}
                  variant="ghost"
                  size="icon"
                  className="hidden sm:flex hover:bg-brand-50"
                  title={item.label}
                  asChild
                >
                  <a href={item.href}>
                    <Icon className="w-5 h-5" />
                  </a>
                </Button>
              );
            })}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border backdrop-blur-xl">
            <div className="py-4 space-y-2">
              {primaryNav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-foreground hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              
              <div className="grid grid-cols-4 gap-2 pt-4 border-t border-border">
                {secondaryNav.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Button key={item.label} variant="outline" className="flex-col h-14 gap-2" asChild>
                      <a href={item.href}>
                        <Icon className="w-4 h-4" />
                        <span className="text-xs">{item.label}</span>
                      </a>
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

export default Navigation;