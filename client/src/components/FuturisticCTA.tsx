import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { useState } from "react";

export function FuturisticCTA() {
  const { t } = useLanguage();
  
  return (
    <section className="py-16">
      <motion.div 
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden"
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
            className="max-w-2xl mx-auto text-lg md:text-xl text-blue-100 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {t('futuristic.subtitle')}
          </motion.p>
          
          {/* Botones con efecto hover */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a href="https://nflow.jobda.es/" className="group relative">
              <div className="absolute inset-0 bg-white bg-opacity-20 rounded-full blur group-hover:bg-opacity-30 transition-all duration-300"></div>
              <button className="relative px-6 py-2.5 bg-white bg-opacity-10 backdrop-blur-md rounded-full font-medium text-white border border-white/25 hover:bg-opacity-20 transition-all duration-300">
                {t('futuristic.nflow')}
              </button>
            </a>
            
            <a href="https://appia.jobda.es/" className="group relative">
              <div className="absolute inset-0 bg-black bg-opacity-70 rounded-full blur group-hover:bg-opacity-80 transition-all duration-300"></div>
              <button className="relative px-6 py-2.5 bg-black bg-opacity-80 backdrop-blur-md rounded-full font-medium text-white border border-white/25 hover:bg-opacity-90 transition-all duration-300">
                {t('futuristic.appia')}
              </button>
            </a>
            
            <a href="https://sinapsy.jobda.es/" className="group relative">
              <div className="absolute inset-0 bg-white bg-opacity-20 rounded-full blur group-hover:bg-opacity-30 transition-all duration-300"></div>
              <button className="relative px-6 py-2.5 bg-white bg-opacity-10 backdrop-blur-md rounded-full font-medium text-white border border-white/25 hover:bg-opacity-20 transition-all duration-300">
                {t('futuristic.sinapsy')}
              </button>
            </a>
            
            <a href="https://empordajobs.jobda.es/" className="group relative">
              <div className="absolute inset-0 bg-black bg-opacity-70 rounded-full blur group-hover:bg-opacity-80 transition-all duration-300"></div>
              <button className="relative px-6 py-2.5 bg-black bg-opacity-80 backdrop-blur-md rounded-full font-medium text-white border border-white/25 hover:bg-opacity-90 transition-all duration-300">
                {t('futuristic.empordajobs')}
              </button>
            </a>
            
            <a href="https://neuronmeg.jobda.es/" className="group relative">
              <div className="absolute inset-0 bg-white bg-opacity-20 rounded-full blur group-hover:bg-opacity-30 transition-all duration-300"></div>
              <button className="relative px-6 py-2.5 bg-white bg-opacity-10 backdrop-blur-md rounded-full font-medium text-white border border-white/25 hover:bg-opacity-20 transition-all duration-300">
                {t('futuristic.neuronmeg')}
              </button>
            </a>
            
            <a href="https://saludalia.jobda.es/" className="group relative">
              <div className="absolute inset-0 bg-white bg-opacity-20 rounded-full blur group-hover:bg-opacity-30 transition-all duration-300"></div>
              <button className="relative px-6 py-2.5 bg-white bg-opacity-10 backdrop-blur-md rounded-full font-medium text-white border border-white/25 hover:bg-opacity-20 transition-all duration-300">
                {t('futuristic.saludalia')}
              </button>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}