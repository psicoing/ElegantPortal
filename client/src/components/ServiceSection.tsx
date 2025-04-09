import { ServiceCard } from "@/components/ServiceCard";
import { motion } from "framer-motion";
import { MessageCircle, Briefcase, Code, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

// Importar las imágenes
import nflowTeensImage from "../assets/nflow_adolescentes.png";
import nflowDigitalImage from "../assets/nflow_terapia_digital.png";
import jobdaHealthImage from "../assets/jobda_salud_laboral.png";
import nflowFamiliarImage from "../assets/nflow_familiar.png";

export function ServiceSection() {
  const { t } = useLanguage();
  
  // Definir los servicios con sus traducciones
  const nflow = {
    icon: <MessageCircle className="h-8 w-8 text-primary" />,
    title: t('service.nflow.title'),
    description: t('service.nflow.description'),
    features: [
      t('service.nflow.feature1'),
      t('service.nflow.feature2'),
      t('service.nflow.feature3')
    ],
    url: "https://nflow.jobda.es/",
    badgeText: t('service.nflow.badge'),
    variant: "primary" as const,
    imageSrc: nflowDigitalImage
  };

  const jobda = {
    icon: <Briefcase className="h-8 w-8 text-secondary-600" />,
    title: t('service.jobda.title'),
    description: t('service.jobda.description'),
    features: [
      t('service.jobda.feature1'),
      t('service.jobda.feature2'),
      t('service.jobda.feature3')
    ],
    url: "https://ejobs.jobda.es/",
    badgeText: t('service.jobda.badge'),
    variant: "secondary" as const,
    imageSrc: jobdaHealthImage
  };

  const aiApps = {
    icon: <Sparkles className="h-8 w-8 text-accent" />,
    title: "Desarrollo de Apps con IA",
    description: "Aplicaciones inteligentes 100% a medida con integración real de IA para empresas innovadoras.",
    features: [
      "IA personalizada entrenada para tu negocio",
      "Backend con panel de control a medida",
      "De 8.400 a 15.000€ de inversión inicial"
    ],
    url: "/ai-apps",
    badgeText: "Innovación",
    variant: "primary" as const,
    imageSrc: undefined
  };

  const services = [nflow, jobda, aiApps];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-gray-600">
            {t('services.subtitle')}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                url={service.url}
                badgeText={service.badgeText}
                variant={service.variant}
                imageSrc={service.imageSrc}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
