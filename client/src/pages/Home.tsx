import { Header } from "@/components/Header";
import { ParallaxHero } from "@/components/ParallaxHero";
import { AboutSection } from "@/components/AboutSection";
import { ServiceSection } from "@/components/ServiceSection";
import { CategorySection } from "@/components/CategorySection";
import { FuturisticCTA } from "@/components/FuturisticCTA";
import { TestimonialSection } from "@/components/TestimonialSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { MobileMenu } from "@/components/MobileMenu";
import { RewardsSection } from "@/components/RewardsSection";
import { FounderTestimonial } from "@/components/FounderTestimonial";
import { HobbiesSection } from "@/components/HobbiesSection";
import { SimpleServiceCards } from "@/components/services/SimpleServiceCards";
import { ImpactStatsSection } from "@/components/ImpactStatsSection";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { ScrollProgress } from "@/components/ScrollProgress";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ModernEffects } from "@/components/ModernEffects";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <AnimatedBackground />
      <div className="relative z-10">
        <ScrollProgress />
        <Header toggleMobileMenu={toggleMobileMenu} />
        <MobileMenu isOpen={mobileMenuOpen} closeMobileMenu={closeMobileMenu} />
        <main>
          <ParallaxHero />
          <div id="services-section">
            <SimpleServiceCards />
          </div>
          <ImpactStatsSection />
          <ServiceSection />
          <CategorySection />
          <RewardsSection />
          <AboutSection />
          <FounderTestimonial />
          <TestimonialSection />
          <HobbiesSection />
          <div id="contact-section">
            <ContactSection />
          </div>
          <FuturisticCTA />
        </main>
        <FloatingActionButton />
        <Footer />
      </div>
    </div>
  );
}
