import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { Link } from "wouter";

export function ParallaxHero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToServices = () => {
    const servicesSection = document.querySelector('#services-section');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ position: 'relative' }}
    >
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-blue-500/5 dark:from-slate-900/20 dark:via-transparent dark:to-blue-900/10 backdrop-blur-sm" />

      <motion.div
        className="container mx-auto px-4 md:px-6 text-center z-10"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Transformamos
            <br />
            <span className="text-foreground">el Futuro Digital</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Más de 32 años innovando en tecnología, salud mental y desarrollo humano.
          <br />
          <span className="text-primary font-semibold">Una plataforma. Infinitas posibilidades.</span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            onClick={scrollToServices}
          >
            Explorar Servicios
          </Button>
          <Link href="/investors">
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 hover:bg-primary/10 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Inversores
            </Button>
          </Link>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="animate-bounce hover:bg-transparent"
            onClick={scrollToServices}
          >
            <ChevronDown className="h-8 w-8 text-primary" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
    </section>
  );
}