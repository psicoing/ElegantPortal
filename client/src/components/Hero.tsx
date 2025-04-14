import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { Link } from "wouter";

export function Hero() {
  const { t } = useLanguage();
  
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="gradient-bg text-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            JOBDA
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('hero.title')}. {t('hero.subtitle')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button 
              onClick={scrollToServices}
              className="bg-white text-primary hover:shadow-lg transition transform hover:-translate-y-1 font-sans font-semibold px-8 py-3 rounded-lg"
            >
              {t('hero.cta')}
            </Button>
            
            <Link href="/sinapsy">
              <Button 
                className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white hover:shadow-lg transition transform hover:-translate-y-1 font-sans font-semibold px-8 py-3 rounded-lg"
              >
                Ir a SINAPSY
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
