import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
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
            NFLOW - JOBDA
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Bienvenidos a un entorno pensado para cuidar tu salud mental y laboral. Además, te invitamos a descubrir nuestro servicio de empleo.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              onClick={scrollToServices}
              className="bg-white text-primary hover:shadow-lg transition transform hover:-translate-y-1 font-sans font-semibold px-8 py-3 rounded-lg"
            >
              Explorar servicios
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
