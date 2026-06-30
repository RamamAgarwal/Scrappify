import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Target, MapPin } from "lucide-react";

const MarketSection = () => {
  return (
    <section id="market" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-primary">₹5.27 Billion</span> Opportunity
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            India's institutional e-waste management market is growing exponentially
          </p>
        </div>

        {/* Market Growth */}
        <Card className="p-8 md:p-12 bg-gradient-to-br from-secondary/10 to-primary/10 border-border/50 mb-12 animate-slide-up">
          <div className="flex items-center justify-center gap-3 mb-8">
            <TrendingUp className="w-10 h-10 text-primary" />
            <h3 className="font-heading text-3xl font-bold">Market Growth Projection</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold font-heading text-secondary mb-2">$1.5B</div>
              <div className="text-lg font-medium mb-1">2025</div>
              <div className="text-sm text-foreground/60">Current Market Size</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-6xl text-primary animate-float">→</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold font-heading text-primary mb-2">$5.27B</div>
              <div className="text-lg font-medium mb-1">2035</div>
              <div className="text-sm text-foreground/60">Projected Market Size</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="font-semibold text-primary">252% Growth Over 10 Years</span>
            </div>
          </div>

          <p className="text-center text-sm text-foreground/60 mt-6">
            Source: Market Research Future (2025)
          </p>
        </Card>

        {/* TAM-SAM-SOM */}
        <div>
          <h3 className="font-heading text-3xl font-bold text-center mb-12">
            Our Market Strategy
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* TAM */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all animate-slide-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground/60">TAM</div>
                  <div className="font-heading text-xl font-bold">Total Available Market</div>
                </div>
              </div>
              <div className="text-4xl font-bold font-heading text-secondary mb-3">1.53M</div>
              <p className="text-foreground/70 mb-4">Educational institutions across India</p>
              <div className="pt-4 border-t border-border/50">
                <div className="text-sm text-foreground/60">Coverage: Pan India</div>
              </div>
            </Card>

            {/* SAM */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground/60">SAM</div>
                  <div className="font-heading text-xl font-bold">Serviceable Available Market</div>
                </div>
              </div>
              <div className="text-4xl font-bold font-heading text-primary mb-3">150K</div>
              <p className="text-foreground/70 mb-4">Institutions in North India region</p>
              <div className="pt-4 border-t border-border/50">
                <div className="text-sm text-foreground/60">Coverage: Punjab, Haryana, NCR, HP</div>
              </div>
            </Card>

            {/* SOM */}
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-primary/80">SOM</div>
                  <div className="font-heading text-xl font-bold">Serviceable Obtainable Market</div>
                </div>
              </div>
              <div className="text-4xl font-bold font-heading text-primary mb-3">3,000</div>
              <p className="text-foreground/70 mb-4">Pilot phase target institutions</p>
              <div className="pt-4 border-t border-primary/30">
                <div className="text-sm font-medium text-primary">Alpha Phase: Punjab Focus</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
