import { Shield, FileText, MessageCircle, Truck } from "lucide-react";

const TrustBar = () => {
  const trustItems = [
    {
      icon: FileText,
      text: "COA & study links on every PDP"
    },
    {
      icon: Shield,
      text: "30‑day results‑or‑consult"
    },
    {
      icon: Truck,
      text: "Fast shipping & easy returns"
    },
    {
      icon: MessageCircle,
      text: "Founder concierge: real human, not a bot"
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-r from-surface-50 to-brand-50 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-3 text-center md:text-left justify-center md:justify-start">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-brand-600" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;