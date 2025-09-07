import { Header } from "@/components/Header";
import { ParallaxHero } from "@/components/ParallaxHero";
import { AboutSection } from "@/components/AboutSection";
import { ServiceSection } from "@/components/ServiceSection";
import { CategorySection } from "@/components/CategorySection";

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
import { DynamicQuoteSystem } from "@/components/DynamicQuoteSystem";
import { BrandOriginSection } from "@/components/BrandOriginSection";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Brain } from "lucide-react";
import jobdaVideo from "../assets/jobda-video.mp4";
import nflowVideo from "../assets/nflow-video.mp4";

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
          
          {/* Tarjeta con video NFLOW */}
          <section className="py-8 bg-gray-50">
            <motion.div 
              className="container mx-auto px-4 md:px-6 max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-black rounded-lg shadow-xl border border-gray-800 overflow-hidden">
                <div className="flex h-full">
                  <div className="w-56 md:w-72 overflow-hidden">
                    <video 
                      src={nflowVideo} 
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <Brain className="h-6 w-6 text-orange-400 mr-3" />
                      <h3 className="font-sans font-bold text-xl md:text-2xl text-orange-300">
                        NFLOW - Un Psicólogo en tu Bolsillo
                      </h3>
                    </div>
                    <p className="text-orange-200 mb-6 leading-relaxed text-lg">
                      Nuestras soluciones están diseñadas para atender las necesidades específicas de diferentes grupos, ofreciendo herramientas y recursos adaptados a cada situación psicológica.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        <span className="text-orange-100">Terapia digital personalizada</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                        <span className="text-orange-100">Apoyo psicológico 24/7</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-orange-300 rounded-full mr-3"></div>
                        <span className="text-orange-100">Herramientas adaptadas por grupos</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
          
          <div id="services-section">
            <SimpleServiceCards />
          </div>
          <ImpactStatsSection />
          <ServiceSection />
          {/* Tarjeta con video JOBDA - Antes de NFLOW */}
          <section className="py-8 bg-gray-50">
            <motion.div 
              className="container mx-auto px-4 md:px-6 max-w-4xl mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-black rounded-lg shadow-xl border border-gray-800 overflow-hidden">
                <div className="flex h-full">
                  <div className="w-56 md:w-72 overflow-hidden">
                    <video 
                      src={jobdaVideo} 
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <Sparkles className="h-6 w-6 text-orange-400 mr-3" />
                      <h3 className="font-sans font-bold text-xl md:text-2xl text-orange-300">
                        JOBDA Innovation & Connection
                      </h3>
                    </div>
                    <p className="text-orange-200 mb-6 leading-relaxed text-lg">
                      Descubre cómo JOBDA está revolucionando el ecosistema digital con soluciones innovadoras que conectan talento, tecnología y oportunidades en una plataforma multiservicios única.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        <span className="text-orange-100">Plataforma multiservicios integrada</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                        <span className="text-orange-100">Tecnología de vanguardia con IA</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-orange-300 rounded-full mr-3"></div>
                        <span className="text-orange-100">Conexión global de profesionales</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <CategorySection />
          <DynamicQuoteSystem />
          <RewardsSection />
          <AboutSection />
          <FounderTestimonial />
          <TestimonialSection />
          <HobbiesSection />
          <div id="contact-section">
            <ContactSection />
          </div>
          <BrandOriginSection />
        </main>
        <FloatingActionButton />
        <Footer />
      </div>
    </div>
  );
}
