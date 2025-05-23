import { ServiceCard } from "@/components/ServiceCard";
import { motion } from "framer-motion";
import { MessageCircle, Briefcase, Code, Sparkles, Brain, Home, Search, Building2 } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useState, ReactNode } from "react";
import { JobdaDialog } from "./JobdaDialog";
import { SinapsyDialog } from "./SinapsyDialog";
import { NeuronMegDialog } from "./NeuronMegDialog";
import { EmpordaJobsDialog } from "./EmpordaJobsDialog";
import { AppiaDialog } from "./AppiaDialog";
import { NflowDialog } from "./NflowDialog";

// Importar las imágenes
import nflowTeensImage from "../assets/nflow_adolescentes.png";
import nflowDigitalImage from "../assets/nflow_terapia_digital.png";
import jobdaHealthImage from "../assets/jobda_salud_laboral.png";
import nflowFamiliarImage from "../assets/nflow_familiar.png";
import aiAppsIconImage from "../assets/ai_apps_icon.png";
import sinapsyLogoImage from "../assets/sinapsy_logo.png";
import neuronMegImage from "../assets/neuronmeg_services.png";
import empordaJobsImage from "../assets/empordajobs.png";

// Definir la interfaz para los servicios
interface ServiceItem {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  url: string;
  badgeText: string;
  variant: "primary" | "secondary";
  imageSrc: string;
  onClick?: () => void;
}

export function ServiceSection() {
  const { t } = useLanguage();
  const [jobdaDialogOpen, setJobdaDialogOpen] = useState(false);
  const [sinapsyDialogOpen, setSinapsyDialogOpen] = useState(false);
  const [neuronMegDialogOpen, setNeuronMegDialogOpen] = useState(false);
  const [empordaJobsDialogOpen, setEmpordaJobsDialogOpen] = useState(false);
  const [appiaDialogOpen, setAppiaDialogOpen] = useState(false);
  const [nflowDialogOpen, setNflowDialogOpen] = useState(false);
  
  // Definir los servicios con sus traducciones
  const nflow: ServiceItem = {
    icon: <MessageCircle className="h-8 w-8 text-primary" />,
    title: t('service.nflow.title'),
    description: t('service.nflow.description'),
    features: [
      t('service.nflow.feature1'),
      t('service.nflow.feature2'),
      t('service.nflow.feature3')
    ],
    url: "https://nflow.jobda.es/",
    onClick: () => setNflowDialogOpen(true),
    badgeText: t('service.nflow.badge'),
    variant: "primary",
    imageSrc: nflowDigitalImage
  };

  const jobda: ServiceItem = {
    icon: <Sparkles className="h-8 w-8 text-accent" />,
    title: t('service.appia.title'),
    description: t('service.appia.description'),
    features: [
      t('service.appia.feature1'),
      t('service.appia.feature2'),
      t('service.appia.feature3')
    ],
    url: "https://appia.jobda.es/",
    onClick: () => setAppiaDialogOpen(true),
    badgeText: t('service.appia.badge'),
    variant: "primary",
    imageSrc: aiAppsIconImage
  };
  
  const sinapsy: ServiceItem = {
    icon: <Brain className="h-8 w-8 text-blue-500" />,
    title: t('service.sinapsy.title'),
    description: t('service.sinapsy.description'),
    features: [
      t('service.sinapsy.feature1'),
      t('service.sinapsy.feature2'),
      t('service.sinapsy.feature3')
    ],
    url: "https://sinapsy.jobda.es/",
    onClick: () => setSinapsyDialogOpen(true),
    badgeText: t('service.sinapsy.badge'),
    variant: "secondary",
    imageSrc: sinapsyLogoImage
  };
  
  const neuronMeg: ServiceItem = {
    icon: <Home className="h-8 w-8 text-green-600" />,
    title: t('service.neuronmeg.title'),
    description: t('service.neuronmeg.description'),
    features: [
      t('service.neuronmeg.feature1'),
      t('service.neuronmeg.feature2'),
      t('service.neuronmeg.feature3')
    ],
    url: "https://neuronmeg.jobda.es/",
    onClick: () => setNeuronMegDialogOpen(true),
    badgeText: t('neuronmeg.badge'),
    variant: "secondary",
    imageSrc: neuronMegImage
  };
  
  const empordaJobs: ServiceItem = {
    icon: <Building2 className="h-8 w-8 text-emerald-600" />,
    title: t('service.empordajobs.title'),
    description: t('service.empordajobs.description'),
    features: [
      t('service.empordajobs.feature1'),
      t('service.empordajobs.feature2'),
      t('service.empordajobs.feature3'),
      t('service.empordajobs.feature4')
    ],
    url: "https://empordajobs.jobda.es/",
    onClick: () => setEmpordaJobsDialogOpen(true),
    badgeText: t('service.empordajobs.badge'),
    variant: "primary",
    imageSrc: empordaJobsImage
  };

  const services = [jobda, nflow, sinapsy, neuronMeg, empordaJobs];

  return (
    <>
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                id={service.title === t('service.appia.title') ? 'appia-section' : ''}
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
                  onClick={service.onClick}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <JobdaDialog open={jobdaDialogOpen} setOpen={setJobdaDialogOpen} />
      <SinapsyDialog open={sinapsyDialogOpen} setOpen={setSinapsyDialogOpen} />
      <NeuronMegDialog open={neuronMegDialogOpen} setOpen={setNeuronMegDialogOpen} />
      <EmpordaJobsDialog open={empordaJobsDialogOpen} setOpen={setEmpordaJobsDialogOpen} />
      <AppiaDialog open={appiaDialogOpen} setOpen={setAppiaDialogOpen} />
      <NflowDialog open={nflowDialogOpen} setOpen={setNflowDialogOpen} />
    </>
  );
}