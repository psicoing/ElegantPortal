import { useState } from "react";
import { X, Globe, Brain, Newspaper, Home, Briefcase, Heart, Gamepad2, Laptop, Radio, Code, Users, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface ServicesModalProps {
  children: React.ReactNode;
}

export function ServicesModal({ children }: ServicesModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const services = [
    {
      name: "APPIA",
      icon: <Globe className="h-6 w-6" />,
      title: "Soluciones tecnológicas inteligentes",
      description: "Desarrollo web y móvil con IA, digitalización de procesos, proyectos a medida para empresas que quieren diferenciarse",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "NFLOW",
      icon: <Brain className="h-6 w-6" />,
      title: "Apoyo psicológico y bienestar digital",
      description: "Asistente virtual 24/7 con IA, orientación psicológica personalizada, conexión directa con profesionales",
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "SINAPSY",
      icon: <Newspaper className="h-6 w-6" />,
      title: "Tu revista de Psicología y Neurociencias",
      description: "Artículos y entrevistas de alto nivel para todos, recursos descargables, ciencia y salud mental accesible",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "NEURONMEG",
      icon: <Home className="h-6 w-6" />,
      title: "Psicología a domicilio en Girona y Alt Empordà",
      description: "Atención profesional para todas las edades, especialistas en psicología infantil y mayores, servicio personalizado en tu hogar",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "EJOBS",
      icon: <Briefcase className="h-6 w-6" />,
      title: "Empleo local, fácil y actualizado",
      description: "Ofertas de trabajo en Alt y Baix Empordà, búsqueda por localidad, empleos desde 1.200 €/mes",
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "SALUDALIA",
      icon: <Heart className="h-6 w-6" />,
      title: "Salud integral y anti-edadismo",
      description: "Medicina preventiva, consultas presenciales y online, seguimiento personalizado y sin prejuicios",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "TICKETS PLUSALUD",
      icon: <Gamepad2 className="h-6 w-6" />,
      title: "Terapia avanzada con realidad virtual",
      description: "Tratamiento presencial y online con RV, planes personalizados y seguimiento profesional, innovación para la salud mental",
      color: "from-violet-500 to-purple-500"
    },
    {
      name: "TECNOAPP",
      icon: <Laptop className="h-6 w-6" />,
      title: "Soluciones digitales de vanguardia",
      description: "Apps multiplataforma, integración IoT, Cloud y tecnologías emergentes, ideal para empresas innovadoras y startups",
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "TELECOS",
      icon: <Radio className="h-6 w-6" />,
      title: "Telecomunicaciones para empresas y particulares",
      description: "Redes y sistemas de comunicación, infraestructura técnica y soporte, conectividad fiable y eficiente",
      color: "from-teal-500 to-cyan-500"
    },
    {
      name: "C++",
      icon: <Code className="h-6 w-6" />,
      title: "Software de alto rendimiento",
      description: "Desarrollo y optimización a medida, aplicaciones seguras y multiplataforma, soluciones avanzadas",
      color: "from-slate-500 to-gray-500"
    },
    {
      name: "TALENTPOOL",
      icon: <Users className="h-6 w-6" />,
      title: "Red de Talento para cada sector",
      description: "Tech, Med, Build, Marketing, Finance: desarrolladores, médicos, ingenieros, marketers, analistas financieros...",
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "PARTNERS",
      icon: <Handshake className="h-6 w-6" />,
      title: "Programa de Partners JOBDA",
      description: "Este servicio abarca tres aplicaciones principales: NFLOW (apoyo psicológico), SALUDALIA (salud integral) y EJOBS (empleo local). Colaboración comercial con licencias exclusivas y comisiones del 60%",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <>
      <div onClick={openModal} className="cursor-pointer">
        {children}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={handleBackdropClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-primary to-blue-600 text-white rounded-t-xl">
                <div className="flex items-center gap-3">
                  <Globe className="h-6 w-6" />
                  <div>
                    <h2 className="text-2xl font-bold">Grupo JOBDA</h2>
                    <p className="text-blue-100">Innovación, Salud y Talento al Servicio de tu Empresa</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-6">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    🚀 Lideramos la transformación digital, el bienestar y la empleabilidad con soluciones de alto impacto, 
                    tecnología puntera y equipos profesionales. Descubre todo lo que JOBDA puede ofrecerte:
                  </p>
                </div>

                {/* Services Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.name}
                      className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4`}>
                        {service.icon}
                      </div>
                      <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
                        {service.name}
                      </h3>
                      <h4 className="font-semibold text-primary mb-2">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-lg border border-primary/20">
                  <p className="text-center text-lg font-semibold text-primary">
                    Con JOBDA, digitaliza, cuida y potencia tu empresa. 
                    <br />
                    <span className="text-gray-700 dark:text-gray-300">
                      Todo lo que tu organización necesita, en un solo grupo.
                    </span>
                  </p>
                </div>

                {/* Close Button */}
                <div className="flex justify-center mt-6">
                  <Button
                    onClick={closeModal}
                    className="px-8 py-2 bg-primary hover:bg-primary/90"
                  >
                    Cerrar
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}