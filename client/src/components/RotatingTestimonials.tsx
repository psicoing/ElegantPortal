import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  service: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María González",
    role: "HR Director",
    company: "TechCorp S.A.",
    content: "NFLOW ha transformado completamente nuestro enfoque de bienestar laboral. La plataforma de apoyo emocional ha reducido el estrés del equipo en un 40% y mejorado la productividad significativamente.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b37c?w=150&h=150&fit=crop&crop=face",
    service: "NFLOW",
    location: "Barcelona, España"
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "CEO",
    company: "StartupInnovation",
    content: "JOBDA nos permitió encontrar el talento perfecto para nuestro equipo. La valoración psicométrica y el coeficiente de valor objetivo han sido fundamentales para nuestro crecimiento.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    service: "JOBDA",
    location: "Madrid, España"
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Psicóloga Clínica",
    company: "Centro Bienestar",
    content: "SINAPSY ha revolucionado mi práctica profesional. Las herramientas de diagnóstico y seguimiento me permiten ofrecer un tratamiento más personalizado y efectivo a mis pacientes.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    service: "SINAPSY",
    location: "Valencia, España"
  },
  {
    id: 4,
    name: "David López",
    role: "CTO",
    company: "DigitalSolutions",
    content: "Los servicios de TECNOAPP han sido excepcionales. Su equipo desarrolló una aplicación móvil que superó todas nuestras expectativas en rendimiento y diseño.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    service: "TECNOAPP",
    location: "Sevilla, España"
  },
  {
    id: 5,
    name: "Laura Sánchez",
    role: "Directora Médica",
    company: "Clínica Salud Integral",
    content: "SALUDALIA ha optimizado nuestros procesos de gestión médica. La plataforma es intuitiva y ha mejorado significativamente la experiencia de nuestros pacientes.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    service: "SALUDALIA",
    location: "Bilbao, España"
  },
  {
    id: 6,
    name: "Roberto Torres",
    role: "Gerente de RRHH",
    company: "InnovateTech",
    content: "EJOBS nos conectó con profesionales excepcionales. La plataforma facilitó todo el proceso de selección y encontramos candidatos que se adaptaron perfectamente a nuestra cultura empresarial.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    service: "EJOBS",
    location: "Zaragoza, España"
  }
];

const serviceCategories = [
  { key: "all", label: "Todos los Servicios" },
  { key: "NFLOW", label: "NFLOW" },
  { key: "JOBDA", label: "JOBDA" },
  { key: "SINAPSY", label: "SINAPSY" },
  { key: "TECNOAPP", label: "TECNOAPP" },
  { key: "SALUDALIA", label: "SALUDALIA" },
  { key: "EJOBS", label: "EJOBS" }
];

export function RotatingTestimonials() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const filteredTestimonials = activeFilter === "all" 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.service === activeFilter);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= filteredTestimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [filteredTestimonials.length, isAutoPlaying]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= filteredTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? filteredTestimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  if (filteredTestimonials.length === 0) return null;

  const currentTestimonial = filteredTestimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo nuestros servicios han transformado organizaciones y vidas profesionales
          </p>
        </motion.div>

        {/* Service Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {serviceCategories.map((category) => (
            <Button
              key={category.key}
              variant={activeFilter === category.key ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(category.key)}
              className="transition-all duration-300 hover:scale-105"
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeFilter}-${currentIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-slate-700"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <Quote className="w-12 h-12 text-primary/30" />
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl md:text-2xl text-center text-foreground leading-relaxed mb-8 font-medium">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                <div className="flex gap-1">
                  {renderStars(currentTestimonial.rating)}
                </div>
              </div>

              {/* Author Info */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-primary/20"
                  loading="lazy"
                />
                <div className="text-center md:text-left">
                  <h4 className="font-bold text-lg text-foreground">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-primary font-medium">
                    {currentTestimonial.role}
                  </p>
                  <p className="text-muted-foreground">
                    {currentTestimonial.company}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {currentTestimonial.location}
                  </p>
                </div>
              </div>

              {/* Service Badge */}
              <div className="flex justify-center mt-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                  {currentTestimonial.service}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 gap-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {filteredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary scale-125"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>

        {/* Statistics Summary */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Clientes Satisfechos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Valoración Media</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">32+</div>
            <div className="text-muted-foreground">Años de Experiencia</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}