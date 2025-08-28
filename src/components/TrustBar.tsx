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
    <section className="py-12 bg-white border-t border-surface-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-4 text-center md:text-left justify-center md:justify-start">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-sm flex-shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-foreground leading-tight">
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