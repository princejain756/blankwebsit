import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, User, Heart, ShoppingBag } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const primaryNav = [
    { label: "Shop", href: "/shop" },
    { label: "Science", href: "/science" },
    { label: "Founder Concierge", href: "/founder" },
    { label: "Apps", href: "/apps" },
    { label: "Journal", href: "/journal" }
  ];

  const secondaryNav = [
    { icon: Search, href: "/search", label: "Search" },
    { icon: User, href: "/account", label: "Account" },
    { icon: Heart, href: "/saved", label: "Saved" },
    { icon: ShoppingBag, href: "/cart", label: "Cart" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="font-display text-2xl font-semibold">
              <span className="bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent">
                BLANK
              </span>
              <span className="text-muted-foreground font-body text-sm ml-2">by Prince Jain</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {primaryNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
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
                  className="hidden sm:flex"
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
          <div className="lg:hidden border-t border-border">
            <div className="py-4 space-y-2">
              {primaryNav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-lg transition-all"
                >
                  {item.label}
                </a>
              ))}
              
              <div className="flex items-center justify-around pt-4 border-t border-border mt-4">
                {secondaryNav.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Button key={item.label} variant="ghost" size="sm">
                      <Icon className="w-4 h-4 mr-2" />
                      {item.label}
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