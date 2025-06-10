import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { useState } from "react";
import { JobdaDialog } from "./JobdaDialog";
import { SinapsyDialog } from "./SinapsyDialog";
import { NeuronMegDialog } from "./NeuronMegDialog";
import { EmpordaJobsDialog } from "./EmpordaJobsDialog";
import { AppiaDialog } from "./AppiaDialog";
import { NflowDialog } from "./NflowDialog";
import { SaludaliaDialog } from "./SaludaliaDialog";
import { PluSaludDialog } from "./PluSaludDialog";
import { TecnoAppDialog } from "./TecnoAppDialog";
import { TelecosDialog } from "./TelecosDialog";
import { CPlusPlusDialog } from "./CPlusPlusDialog";

// Definir la interfaz para el servicio
interface Service {
  name: string;
  onClick: () => void;
  variant: string;
  icon: string;
}

export function FuturisticCTA() {
  const { t } = useLanguage();
  
  // Estados para controlar los diálogos
  const [nflowDialogOpen, setNflowDialogOpen] = useState(false);
  const [appiaDialogOpen, setAppiaDialogOpen] = useState(false);
  const [sinapsyDialogOpen, setSinapsyDialogOpen] = useState(false);
  const [empordaJobsDialogOpen, setEmpordaJobsDialogOpen] = useState(false);
  const [neuronMegDialogOpen, setNeuronMegDialogOpen] = useState(false);
  const [saludaliaDialogOpen, setSaludaliaDialogOpen] = useState(false);
  const [plusAludDialogOpen, setPluSaludDialogOpen] = useState(false);
  const [tecnoAppDialogOpen, setTecnoAppDialogOpen] = useState(false);
  const [telecosDialogOpen, setTelecosDialogOpen] = useState(false);
  const [cplusplusDialogOpen, setCplusplusDialogOpen] = useState(false);

  // Estructura para organizar los servicios por categorías
  const mainServices: Service[] = [
    { 
      name: t('futuristic.nflow'), 
      onClick: () => window.open('https://nflow.biz/', '_blank'), 
      variant: "blue-light",
      icon: "psychological"
    },
    { 
      name: t('futuristic.appia'), 
      onClick: () => setAppiaDialogOpen(true), 
      variant: "dark",
      icon: "technology"
    },
    { 
      name: t('futuristic.sinapsy'), 
      onClick: () => setSinapsyDialogOpen(true), 
      variant: "blue-light",
      icon: "publication" 
    },
  ];
  
  const jobServices: Service[] = [
    { 
      name: t('futuristic.empordajobs'), 
      onClick: () => window.open('https://ejobs.jobda.es/', '_blank'), 
      variant: "dark",
      icon: "jobs"
    },
    { 
      name: "Acceder a PluSalud", 
      onClick: () => setPluSaludDialogOpen(true), 
      variant: "purple",
      icon: "therapy"  
    },
  ];
  
  const healthServices: Service[] = [
    { 
      name: t('futuristic.neuronmeg'), 
      onClick: () => setNeuronMegDialogOpen(true), 
      variant: "blue-light",
      icon: "psychology" 
    },
    { 
      name: t('futuristic.saludalia'), 
      onClick: () => setSaludaliaDialogOpen(true), 
      variant: "emerald",
      icon: "health" 
    },
  ];
  
  const techServices: Service[] = [
    { 
      name: "Acceder a TecnoApp", 
      onClick: () => setTecnoAppDialogOpen(true), 
      variant: "blue", 
      icon: "app"
    },
    { 
      name: "Acceder a Telecos", 
      onClick: () => setTelecosDialogOpen(true), 
      variant: "blue-dark",
      icon: "telecom" 
    },
    { 
      name: "Acceder a C++", 
      onClick: () => setCplusplusDialogOpen(true), 
      variant: "purple-dark",
      icon: "code" 
    },
  ];
  
  // Función para obtener la clase de estilo según la variante
  const getButtonStyle = (variant: string): string => {
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
  
  const getBackgroundStyle = (variant: string): string => {
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
  const ServiceButton = ({ service }: { service: Service }) => (
    <div className="group relative cursor-pointer" onClick={service.onClick}>
      <div className={`absolute inset-0 ${getBackgroundStyle(service.variant)} rounded-full blur-md transition-all duration-300`}></div>
      <button className={`relative px-6 py-2.5 ${getButtonStyle(service.variant)} backdrop-blur-md rounded-full font-medium text-white border transition-all duration-300 w-full`}>
        {service.name}
      </button>
    </div>
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
      
      {/* Diálogos para cada servicio */}
      <JobdaDialog open={appiaDialogOpen} setOpen={setAppiaDialogOpen} />
      <SinapsyDialog open={sinapsyDialogOpen} setOpen={setSinapsyDialogOpen} />
      <NeuronMegDialog open={neuronMegDialogOpen} setOpen={setNeuronMegDialogOpen} />
      <EmpordaJobsDialog open={empordaJobsDialogOpen} setOpen={setEmpordaJobsDialogOpen} />
      <AppiaDialog open={appiaDialogOpen} setOpen={setAppiaDialogOpen} />
      <NflowDialog open={nflowDialogOpen} setOpen={setNflowDialogOpen} />
      <SaludaliaDialog open={saludaliaDialogOpen} setOpen={setSaludaliaDialogOpen} />
      <PluSaludDialog open={plusAludDialogOpen} setOpen={setPluSaludDialogOpen} />
      <TecnoAppDialog open={tecnoAppDialogOpen} setOpen={setTecnoAppDialogOpen} />
      <TelecosDialog open={telecosDialogOpen} setOpen={setTelecosDialogOpen} />
      <CPlusPlusDialog open={cplusplusDialogOpen} setOpen={setCplusplusDialogOpen} />
    </section>
  );
}