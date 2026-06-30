import { Button } from "@/components/ui/button";
import { ArrowRight, Recycle, School, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-ewaste.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="E-Waste Circular Economy"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
            <Recycle className="w-4 h-4 animate-float" />
            <span>India's First Circular E-Waste Network</span>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
            One Step Solution for{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Institutional E-Waste
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto">
            Connecting educational institutions with certified recyclers through a compliant,
            transparent, and profitable ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-lg px-8 group"
            >
              Request Pickup
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("solution")}
              className="text-lg px-8 border-primary text-primary hover:bg-primary/10"
            >
              Learn More
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 animate-slide-up">
              <School className="w-10 h-10 text-primary mb-3 mx-auto" />
              <div className="font-heading text-3xl font-bold text-foreground mb-2">1.5M+</div>
              <div className="text-foreground/70">Institutions in India</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <TrendingUp className="w-10 h-10 text-secondary mb-3 mx-auto" />
              <div className="font-heading text-3xl font-bold text-foreground mb-2">₹13,000 Cr</div>
              <div className="text-foreground/70">Annual Market Opportunity</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Recycle className="w-10 h-10 text-primary mb-3 mx-auto" />
              <div className="font-heading text-3xl font-bold text-foreground mb-2">25+</div>
              <div className="text-foreground/70">Target Alpha Phase Institutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
