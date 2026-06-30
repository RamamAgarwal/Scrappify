import { Card } from "@/components/ui/card";
import { Recycle, Building2, Leaf, Award } from "lucide-react";
import { useEffect, useState } from "react";

const ImpactSection = () => {
  const [counters, setCounters] = useState({
    ewaste: 0,
    institutions: 0,
    co2: 0,
    certificates: 0,
  });

  useEffect(() => {
    const targets = {
      ewaste: 30,
      institutions: 25,
      co2: 45,
      certificates: 25,
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounters((prev) => {
        const next = { ...prev };
        let allComplete = true;

        Object.keys(targets).forEach((key) => {
          const target = targets[key as keyof typeof targets];
          const current = prev[key as keyof typeof prev];
          if (current < target) {
            next[key as keyof typeof next] = Math.min(
              current + Math.ceil(target / steps),
              target
            );
            allComplete = false;
          }
        });

        if (allComplete) clearInterval(timer);
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const impactCards = [
    {
      icon: Recycle,
      value: counters.ewaste,
      unit: "tonnes",
      label: "E-Waste Processed (Target)",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Building2,
      value: counters.institutions,
      unit: "+",
      label: "Institutions Onboarded (Target)",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Leaf,
      value: counters.co2,
      unit: "kg",
      label: "CO₂ Saved (Est.)",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Award,
      value: counters.certificates,
      unit: "+",
      label: "Certificates to be Issued",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
  ];

  return (
    <section id="impact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Impact</span> Dashboard
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Real-time metrics from our Alpha Phase targets
          </p>
        </div>

        {/* Impact Counters */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactCards.map((card, index) => (
            <Card
              key={card.label}
              className="p-8 bg-card/50 backdrop-blur-sm border-border/50 text-center hover:border-primary/50 transition-all animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`p-4 ${card.bgColor} rounded-full w-fit mx-auto mb-4`}>
                <card.icon className={`w-8 h-8 ${card.color}`} />
              </div>
              <div className="font-heading text-5xl font-bold mb-2">
                <span className={card.color}>{card.value}</span>
                <span className="text-2xl text-foreground/60 ml-1">{card.unit}</span>
              </div>
              <div className="text-sm text-foreground/70">{card.label}</div>
            </Card>
          ))}
        </div>

        {/* Impact Stories */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 animate-slide-up">
            <h3 className="font-heading text-2xl font-bold mb-4 text-primary">
              Turning Waste into Value
            </h3>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Every institution that partners with Scrappify doesn't just dispose of e-waste responsibly—they 
              actively contribute to a circular economy while earning revenue and meeting compliance requirements.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <Recycle className="w-5 h-5" />
              <span>Building a sustainable future, one institution at a time</span>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-heading text-2xl font-bold mb-4 text-secondary">
              Environmental Impact
            </h3>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Every recycled motherboard saves approximately 1.5kg of CO₂ emissions. Our network-based approach 
              ensures maximum environmental benefit while maintaining complete transparency.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-secondary">
              <Leaf className="w-5 h-5" />
              <span>Certified processes, measurable environmental benefits</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
