import { Card } from "@/components/ui/card";
import { Rocket, TrendingUp, Globe } from "lucide-react";

const RoadmapSection = () => {
  const phases = [
    {
      phase: "Alpha",
      icon: Rocket,
      title: "Punjab Launch",
      period: "Q1-Q2 2025",
      status: "In Progress",
      statusColor: "bg-primary text-primary-foreground",
      institutions: [
        "Plaksha University",
        "CGC Landran",
        "Punjab Agricultural University",
        "IIM Amritsar",
        "IIT Ropar",
      ],
      goals: [
        "30 tonnes e-waste processed",
        "₹2L contribution profit",
        "25+ institutions onboarded",
        "Prove unit economics",
      ],
    },
    {
      phase: "Beta",
      icon: TrendingUp,
      title: "North India Expansion",
      period: "Q3-Q4 2025",
      status: "Planned",
      statusColor: "bg-secondary text-secondary-foreground",
      institutions: ["Haryana colleges", "NCR universities", "Himachal institutions", "Jammu & Kashmir schools"],
      goals: [
        "150 tonnes processed",
        "100+ institutions onboarded",
        "₹10L+ revenue",
        "Expand recycler network",
      ],
    },
    {
      phase: "Scale",
      icon: Globe,
      title: "Pan-India Growth",
      period: "2026+",
      status: "Roadmap",
      statusColor: "bg-muted text-foreground",
      institutions: ["All major states", "Tier 1 & 2 cities", "Top 500 universities", "Large school networks"],
      goals: [
        "500+ rented warehouses",
        "5,000+ institutions",
        "1,000+ tonnes/month",
        "Market leadership",
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Roadmap</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            From pilot to pan-India leadership in institutional e-waste management
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {phases.map((phase, index) => (
            <Card
              key={phase.phase}
              className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Phase Header */}
                <div className="md:w-1/3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <phase.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-heading text-2xl font-bold">{phase.title}</div>
                      <div className="text-sm text-foreground/60">{phase.period}</div>
                    </div>
                  </div>
                  <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium ${phase.statusColor}`}>
                    {phase.status}
                  </div>
                </div>

                {/* Phase Details */}
                <div className="md:w-2/3 space-y-6">
                  {/* Institutions */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground/80">Target Institutions</h4>
                    <div className="flex flex-wrap gap-2">
                      {phase.institutions.map((inst) => (
                        <span
                          key={inst}
                          className="px-3 py-1 bg-primary/5 border border-primary/20 rounded-full text-sm text-foreground/70"
                        >
                          {inst}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Goals */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground/80">Key Goals</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {phase.goals.map((goal) => (
                        <div key={goal} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-foreground/70">{goal}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Timeline Visual */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-muted transform -translate-y-1/2" />
            <div className="relative flex justify-between">
              {phases.map((phase, index) => (
                <div key={phase.phase} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mb-3 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                    {index + 1}
                  </div>
                  <div className="font-heading font-semibold">{phase.phase}</div>
                  <div className="text-xs text-foreground/60">{phase.period}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
