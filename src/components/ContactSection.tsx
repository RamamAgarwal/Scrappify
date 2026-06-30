import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    institutionName: "",
    contactPerson: "",
    email: "",
    phone: "",
    location: "",
    ewasteVolume: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Request Submitted!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      institutionName: "",
      contactPerson: "",
      email: "",
      phone: "",
      location: "",
      ewasteVolume: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Partner With <span className="text-primary">Us</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Join our circular revolution. Request a pickup or become an investor/recycler partner.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="lg:col-span-2 p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up">
            <h3 className="font-heading text-2xl font-bold mb-6">Request Pickup</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Institution Name *</label>
                  <Input
                    required
                    name="institutionName"
                    value={formData.institutionName}
                    onChange={handleChange}
                    placeholder="e.g., Punjab University"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Contact Person *</label>
                  <Input
                    required
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Location *</label>
                  <Input
                    required
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City, State"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Approx. E-Waste Volume</label>
                  <Input
                    name="ewasteVolume"
                    value={formData.ewasteVolume}
                    onChange={handleChange}
                    placeholder="e.g., 500 kg"
                    className="bg-background"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your requirements..."
                  rows={4}
                  className="bg-background"
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                <Send className="mr-2 w-5 h-5" />
                Submit Request
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Email Us</h4>
                  <a
                    href="mailto:hello@scrappify.in"
                    className="text-primary hover:underline"
                  >
                    hello@scrappify.in
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Location</h4>
                  <p className="text-foreground/70 text-sm">
                    Pilot Region:<br />
                    Punjab & North India
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <h4 className="font-heading font-bold mb-3">For Investors & Recyclers</h4>
              <p className="text-sm text-foreground/70 mb-4">
                Interested in partnering with us? Let's discuss how we can work together to build 
                India's circular e-waste economy.
              </p>
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary/10"
                onClick={() => window.location.href = "mailto:hello@scrappify.in?subject=Partnership Inquiry"}
              >
                Partner with Us
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
