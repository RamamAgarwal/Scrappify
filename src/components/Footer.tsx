import { Recycle, Mail, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Recycle className="w-8 h-8 text-primary" />
              <span className="font-heading text-2xl font-bold">Scrappify</span>
            </div>
            <p className="text-sm text-secondary-foreground/70">
              Smart. Sustainable. Circular.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("solution")}
                  className="text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  Our Solution
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("roadmap")}
                  className="text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  Roadmap
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("impact")}
                  className="text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  Impact
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  E-Waste Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  ESG Compliance
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  NAAC Standards
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@scrappify.in"
                className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@scrappify.in
              </a>
              <div className="flex gap-3 pt-2">
                <a
                  href="#"
                  className="p-2 bg-secondary-foreground/10 rounded-lg hover:bg-primary/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-secondary-foreground/10 rounded-lg hover:bg-primary/20 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
            <p>© {currentYear} Scrappify. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
