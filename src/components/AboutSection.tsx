import { Card } from "@/components/ui/card";
import { AlertCircle, Target, Users } from "lucide-react";

const AboutSection = () => {
  const team = [
    { name: "Yatharth", role: "Co-Founder" },
    { name: "Akshat", role: "Co-Founder" },
    { name: "Ramam", role: "Co-Founder" },
    { name: "Sahil", role: "Co-Founder" },
    { name: "Shubham", role: "Co-Founder" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Scrappify</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            We're on a mission to formalize e-waste management in India's educational sector
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Problem Statement */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-destructive/10 rounded-lg">
                <AlertCircle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold mb-2">The Problem</h3>
                <p className="text-foreground/70 leading-relaxed">
                  <strong className="text-destructive">72% of urban</strong> and{" "}
                  <strong className="text-destructive">80% of rural</strong> institutions lack proper e-waste disposal systems.
                </p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-muted/30 rounded-lg border-l-4 border-destructive">
              <p className="text-foreground/80 italic">
                "India's informal e-waste market handles 70% of electronic waste without proper regulation, 
                creating environmental and health hazards."
              </p>
            </div>
          </Card>

          {/* Our Mission */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold mb-2">Our Mission</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Build India's first digital bridge between educational institutions and certified e-waste recyclers, 
                  making compliance simple, transparent, and profitable.
                </p>
              </div>
            </div>
            <ul className="space-y-3 mt-6">
              <li className="flex items-center gap-2 text-foreground/80">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Formalize the informal e-waste market
              </li>
              <li className="flex items-center gap-2 text-foreground/80">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Simplify ESG and NAAC compliance
              </li>
              <li className="flex items-center gap-2 text-foreground/80">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Create value for institutions
              </li>
            </ul>
          </Card>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Users className="w-8 h-8 text-primary" />
            <h3 className="font-heading text-3xl font-bold">Our Team</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {team.map((member, index) => (
              <Card
                key={member.name}
                className="p-6 bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-3 flex items-center justify-center text-2xl font-bold text-white">
                  {member.name[0]}
                </div>
                <div className="font-heading font-semibold text-lg">{member.name}</div>
                <div className="text-sm text-foreground/60">{member.role}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
