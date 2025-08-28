import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Shop", href: "/shop" },
    { label: "Science", href: "/science" },
    { label: "Founder Concierge", href: "/founder" },
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
    <footer className="bg-surface-0 text-surface-1000 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display text-3xl font-bold text-gradient mb-4">
              BLANK
            </h3>
            <p className="text-surface-900 mb-6 max-w-md">
              Science‑forward premium e‑commerce. Research‑backed luxury essentials with transparent evidence and human concierge.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="font-heading text-lg font-semibold mb-3">Join the Proven Edit</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2 rounded-lg bg-surface-50 border border-surface-100 text-surface-0 placeholder:text-surface-100"
                />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-surface-900 hover:text-surface-1000 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Policies</h4>
            <div className="space-y-2">
              {policies.map((policy) => (
                <a
                  key={policy.label}
                  href={policy.href}
                  className="block text-surface-900 hover:text-surface-1000 transition-colors"
                >
                  {policy.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="border-t border-surface-100 pt-8 mb-8">
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-brand-400" />
              <span className="text-surface-900">hello@blank.cool</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-brand-400" />
              <span className="text-surface-900">+91-XXXXXXXXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-brand-400" />
              <span className="text-surface-900">WhatsApp Concierge</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-surface-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-surface-900 text-sm">
            © 2024 BLANK by Prince Jain. All rights reserved.
          </p>
          <p className="text-surface-900 text-xs">
            Information is for educational purposes; not a substitute for professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;