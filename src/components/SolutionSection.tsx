import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, FileCheck, DollarSign, Shield, BarChart3 } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Certified & Compliant Disposal",
      description: "Work only with government-certified recyclers meeting all regulatory standards",
    },
    {
      icon: FileCheck,
      title: "Transparent ESG/NAAC Reporting",
      description: "Automated digital certificates and detailed impact reports for compliance",
    },
    {
      icon: DollarSign,
      title: "Revenue Share for Institutions",
      description: "Monetize your e-waste with transparent valuation and revenue recovery",
    },
    {
      icon: BarChart3,
      title: "Digital Tracking",
      description: "Real-time tracking of every transaction from collection to recycling",
    },
  ];

  const processSteps = [
    { step: 1, title: "Institution", description: "Request pickup via platform" },
    { step: 2, title: "Collection", description: "Scheduled pickup service" },
    { step: 3, title: "Segregation", description: "Professional sorting & valuation" },
    { step: 4, title: "Recycling", description: "Certified plant processing" },
    { step: 5, title: "Reporting", description: "ESG certificates issued" },
    { step: 6, title: "Circular Loop", description: "Materials back in economy" },
  ];

  return (
    <section id="solution" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            How <span className="text-primary">Scrappify</span> Works
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A seamless, end-to-end solution for institutional e-waste management
          </p>
        </div>

        {/* Process Flow */}
        <div className="mb-20">
          <h3 className="font-heading text-2xl font-bold text-center mb-12">The Process</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {processSteps.map((item, index) => (
              <div key={item.step} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-3 flex items-center justify-center text-xl font-bold text-white">
                    {item.step}
                  </div>
                  <div className="font-heading font-semibold mb-2">{item.title}</div>
                  <div className="text-xs text-foreground/60">{item.description}</div>
                </Card>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-primary w-4 h-4 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-bold text-center mb-12">Features & Benefits</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">{feature.title}</h4>
                <p className="text-sm text-foreground/70">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Blue Ocean Strategy */}
        <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 animate-fade-in">
          <h3 className="font-heading text-2xl font-bold text-center mb-8">
            <span className="text-primary">Blue Ocean Strategy:</span> We're Different
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-4 text-lg">Traditional Competitors</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-foreground/70">
                  <div className="w-1.5 h-1.5 bg-muted rounded-full mt-2" />
                  Focus on residential/retail markets
                </li>
                <li className="flex items-start gap-2 text-foreground/70">
                  <div className="w-1.5 h-1.5 bg-muted rounded-full mt-2" />
                  Manual processes, limited tracking
                </li>
                <li className="flex items-start gap-2 text-foreground/70">
                  <div className="w-1.5 h-1.5 bg-muted rounded-full mt-2" />
                  No compliance-focused reporting
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Scrappify Advantage
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Institutional focus with network effects</span>
                </li>
                <li className="flex items-start gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Digital platform with full transparency</span>
                </li>
                <li className="flex items-start gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Built-in ESG and NAAC compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SolutionSection;
