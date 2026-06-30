import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SolutionSection from "@/components/SolutionSection";
import MarketSection from "@/components/MarketSection";
import RoadmapSection from "@/components/RoadmapSection";
import ImpactSection from "@/components/ImpactSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SolutionSection />
        <MarketSection />
        <RoadmapSection />
        <ImpactSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
