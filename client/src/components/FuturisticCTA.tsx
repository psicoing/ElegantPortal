import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { useState } from "react";

export function FuturisticCTA() {
  const { t } = useLanguage();
  
  // Estructura para organizar los servicios por categorías
  const mainServices = [
    { 
      name: t('futuristic.nflow'), 
      url: "https://nflow.jobda.es/", 
      variant: "blue-light",
      icon: "psychological"
    },
    { 
      name: t('futuristic.appia'), 
      url: "https://appia.jobda.es/", 
      variant: "dark",
      icon: "technology"
    },
    { 
      name: t('futuristic.sinapsy'), 
      url: "https://sinapsy.jobda.es/", 
      variant: "blue-light",
      icon: "publication" 
    },
  ];
  
  const jobServices = [
    { 
      name: t('futuristic.empordajobs'), 
      url: "https://empordajobs.jobda.es/", 
      variant: "dark",
      icon: "jobs"
    },
    { 
      name: "Acceder a PluSalud", 
      url: "https://plusalud.jobda.es/", 
      variant: "purple",
      icon: "therapy"  
    },
  ];
  
  const healthServices = [
    { 
      name: t('futuristic.neuronmeg'), 
      url: "https://neuronmeg.jobda.es/", 
      variant: "blue-light",
      icon: "psychology" 
    },
    { 
      name: t('futuristic.saludalia'), 
      url: "https://saludalia.jobda.es/", 
      variant: "emerald",
      icon: "health" 
    },
  ];
  
  const techServices = [
    { 
      name: "Acceder a TecnoApp", 
      url: "https://tecnoapp.jobda.es/", 
      variant: "blue", 
      icon: "app"
    },
    { 
      name: "Acceder a Telecos", 
      url: "https://telecos.jobda.es/", 
      variant: "blue-dark",
      icon: "telecom" 
    },
    { 
      name: "Acceder a C++", 
      url: "https://cplusplus.jobda.es/", 
      variant: "purple-dark",
      icon: "code" 
    },
  ];
  
  // Función para obtener la clase de estilo según la variante
  const getButtonStyle = (variant) => {
    switch(variant) {
      case 'blue-light':
        return "bg-white bg-opacity-10 border-white/25 hover:bg-opacity-20";
      case 'dark':
        return "bg-black bg-opacity-80 border-white/25 hover:bg-opacity-90";
      case 'purple':
        return "bg-purple-500 bg-opacity-20 border-white/25 hover:bg-opacity-30";
      case 'blue':
        return "bg-blue-500 bg-opacity-20 border-white/25 hover:bg-opacity-30";
      case 'blue-dark':
        return "bg-blue-700 bg-opacity-20 border-white/25 hover:bg-opacity-30";
      case 'purple-dark':
        return "bg-purple-700 bg-opacity-20 border-white/25 hover:bg-opacity-30";
      case 'emerald':
        return "bg-gradient-to-r from-emerald-500/40 to-teal-500/40 border-white/30 hover:border-white/50 shadow-lg shadow-emerald-500/20";
      default:
        return "bg-white bg-opacity-10 border-white/25 hover:bg-opacity-20";
    }
  };
  
  const getBackgroundStyle = (variant) => {
    switch(variant) {
      case 'blue-light':
        return "bg-white bg-opacity-20 group-hover:bg-opacity-30";
      case 'dark':
        return "bg-black bg-opacity-70 group-hover:bg-opacity-80";
      case 'purple':
        return "bg-purple-500 bg-opacity-40 group-hover:bg-opacity-50";
      case 'blue':
        return "bg-blue-500 bg-opacity-40 group-hover:bg-opacity-50";
      case 'blue-dark':
        return "bg-blue-700 bg-opacity-40 group-hover:bg-opacity-50";
      case 'purple-dark':
        return "bg-purple-700 bg-opacity-40 group-hover:bg-opacity-50";
      case 'emerald':
        return "bg-emerald-500 bg-opacity-40 group-hover:bg-opacity-60";
      default:
        return "bg-white bg-opacity-20 group-hover:bg-opacity-30";
    }
  };
  
  // Componente para renderizar un botón de servicio
  const ServiceButton = ({ service }) => (
    <a href={service.url} className="group relative">
      <div className={`absolute inset-0 ${getBackgroundStyle(service.variant)} rounded-full blur-md transition-all duration-300`}></div>
      <button className={`relative px-6 py-2.5 ${getButtonStyle(service.variant)} backdrop-blur-md rounded-full font-medium text-white border transition-all duration-300`}>
        {service.name}
      </button>
    </a>
  );
  
  return (
    <section className="py-20">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Fondo con efecto de gradiente animado */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-[url('/src/assets/grid-pattern.svg')] opacity-20"></div>
          
          {/* Formas geométricas flotantes */}
          <motion.div 
            className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-300 opacity-20 blur-xl"
            animate={{ 
              x: [0, 20, 0],
              y: [0, -15, 0] 
            }}
            transition={{ 
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-indigo-400 opacity-20 blur-xl"
            animate={{ 
              x: [0, -30, 0],
              y: [0, 20, 0] 
            }}
            transition={{ 
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-white opacity-5 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 15,
              ease: "easeInOut"
            }}
          />
        </div>
        
        {/* Contenido superpuesto */}
        <div className="relative py-16 sm:py-24 px-8 text-center text-white z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('futuristic.title')}
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-lg md:text-xl text-blue-100 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {t('futuristic.subtitle')}
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* Servicios principales */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-white font-semibold text-lg border-b border-white/20 pb-2 mb-4">
                Servicios principales
              </h3>
              <div className="flex flex-col space-y-3">
                {mainServices.map((service, index) => (
                  <ServiceButton key={`main-${index}`} service={service} />
                ))}
              </div>
            </motion.div>
            
            {/* Servicios de empleo */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-white font-semibold text-lg border-b border-white/20 pb-2 mb-4">
                Empleo y formación
              </h3>
              <div className="flex flex-col space-y-3">
                {jobServices.map((service, index) => (
                  <ServiceButton key={`job-${index}`} service={service} />
                ))}
              </div>
            </motion.div>
            
            {/* Servicios de salud */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h3 className="text-white font-semibold text-lg border-b border-white/20 pb-2 mb-4">
                Salud y bienestar
              </h3>
              <div className="flex flex-col space-y-3">
                {healthServices.map((service, index) => (
                  <ServiceButton key={`health-${index}`} service={service} />
                ))}
              </div>
            </motion.div>
            
            {/* Servicios tecnológicos */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h3 className="text-white font-semibold text-lg border-b border-white/20 pb-2 mb-4">
                Tecnología
              </h3>
              <div className="flex flex-col space-y-3">
                {techServices.map((service, index) => (
                  <ServiceButton key={`tech-${index}`} service={service} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}