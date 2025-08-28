import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Shop", href: "/shop" },
    { label: "Science", href: "/science" },
    { label: "Founder Concierge", href: "/founder" },
    { label: "Apps", href: "/apps" },
    { label: "Journal", href: "/journal" },
    { label: "Support", href: "/support" }
  ];

  const policies = [
    { label: "Shipping", href: "/policies/shipping" },
    { label: "Returns", href: "/policies/returns" },
    { label: "Warranty", href: "/policies/warranty" },
    { label: "Privacy", href: "/policies/privacy" },
    { label: "Terms", href: "/policies/terms" }
  ];

  return (
    <footer className="bg-neutral-0 text-neutral-1000 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-3xl mb-4">
              <span className="bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent">
                BLANK
              </span>
              <span className="text-neutral-600 font-body text-lg ml-2">by Prince Jain</span>
            </h3>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Science × Curation × You<br />
              Research-backed luxury essentials with transparent science and founder concierge.
            </p>
            
            <div className="space-y-4">
              <h4 className="font-heading text-lg">Join the Proven Edit</h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="your@email.com" 
                  className="bg-neutral-100 border-neutral-200 text-neutral-0"
                />
                <Button variant="default">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-neutral-600 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Policies */}
          <div>
            <h4 className="font-heading text-lg mb-4">Contact</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-neutral-600">hello@blank.cool</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-neutral-600">+91-XXXXXXXXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span className="text-sm text-neutral-600">WhatsApp Chat</span>
              </div>
            </div>
            
            <h5 className="font-medium mb-2">Policies</h5>
            <ul className="space-y-1">
              {policies.map((policy) => (
                <li key={policy.label}>
                  <a 
                    href={policy.href}
                    className="text-sm text-neutral-600 hover:text-primary transition-colors"
                  >
                    {policy.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-600">
              © 2024 BLANK by Prince Jain. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-neutral-600">Made with 💜 in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;