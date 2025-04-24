import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServiceSection } from "@/components/ServiceSection";
import { CategorySection } from "@/components/CategorySection";
import { CTASection } from "@/components/CTASection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { MobileMenu } from "@/components/MobileMenu";
import { RewardsSection } from "@/components/RewardsSection";
import { FounderTestimonial } from "@/components/FounderTestimonial";
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
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Header toggleMobileMenu={toggleMobileMenu} />
      <MobileMenu isOpen={mobileMenuOpen} closeMobileMenu={closeMobileMenu} />
      <main>
        <Hero />
        <ServiceSection />
        <CategorySection />
        <RewardsSection />
        <AboutSection />
        <FounderTestimonial />
        <TestimonialSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
