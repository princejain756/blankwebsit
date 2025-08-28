import { Shield, FileText, MessageCircle, Zap } from "lucide-react";

const TrustBar = () => {
  const trustItems = [
    {
      icon: Shield,
      text: "30-day results or free consult"
    },
    {
      icon: FileText,
      text: "COA & study links on every product"
    },
    {
      icon: MessageCircle,
      text: "Founder concierge: real human, not a bot"
    },
    {
      icon: Zap,
      text: "Fast Pan-India shipping & easy returns"
    }
  ];

  return (
    <section className="py-12 bg-accent/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="glass-card text-center">
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-medium text-foreground">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;