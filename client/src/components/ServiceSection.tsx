import { ServiceCard } from "@/components/ServiceCard";
import { motion } from "framer-motion";
import { MessageCircle, Briefcase, Code, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

// Importar las imágenes
import nflowTeensImage from "../assets/nflow_adolescentes.png";
import nflowDigitalImage from "../assets/nflow_terapia_digital.png";
import jobdaHealthImage from "../assets/jobda_salud_laboral.png";
import nflowFamiliarImage from "../assets/nflow_familiar.png";
import aiAppsIconImage from "../assets/ai_apps_icon.png";

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

  const aiApps = {
    icon: <Sparkles className="h-8 w-8 text-accent" />,
    title: t('service.appia.title'),
    description: t('service.appia.description'),
    features: [
      t('service.appia.feature1'),
      t('service.appia.feature2'),
      t('service.appia.feature3')
    ],
    url: "/ai-apps",
    badgeText: t('service.appia.badge'),
    variant: "primary" as const,
    imageSrc: aiAppsIconImage
  };

  const services = [nflow, aiApps];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="mx-auto text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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