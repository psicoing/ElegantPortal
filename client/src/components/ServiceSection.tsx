import { ServiceCard } from "@/components/ServiceCard";
import { HorizontalServiceCard } from "@/components/HorizontalServiceCard";
import { motion } from "framer-motion";
import { MessageCircle, Briefcase, Code, Sparkles, Brain, Home, Search, Building2, Heart, Headphones, Laptop, Radio, Terminal } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useState, ReactNode } from "react";
import { JobdaDialog } from "./JobdaDialog";
import { SinapsyDialog } from "./SinapsyDialog";
import { NeuronMegDialog } from "./NeuronMegDialog";
import { EmpordaJobsDialog } from "./EmpordaJobsDialog";
import { AppiaDialog } from "./AppiaDialog";
import { NflowDialog } from "./NflowDialog";
import { SaludaliaDialog } from "./SaludaliaDialog";
import { PluSaludDialog } from "./PluSaludDialog";

// Importar las imágenes
import nflowTeensImage from "../assets/nflow_adolescentes.png";
import nflowDigitalImage from "../assets/nflow_terapia_digital.png";
import jobdaHealthImage from "../assets/jobda_salud_laboral.png";
import nflowFamiliarImage from "../assets/nflow_familiar.png";
import aiAppsIconImage from "../assets/ai_apps_icon.png";
import sinapsyLogoImage from "../assets/sinapsy_logo.png";
import neuronMegImage from "../assets/neuronmeg_services.png";
import empordaJobsImage from "../assets/empordajobs.png";
import saludaliaMainImage from "../assets/saludalia/saludalia_main.png";
import saludaliaInfoImage from "../assets/saludalia/saludalia_info.png";
import plusaludVRImage from "../assets/plusalud_vr.svg";
import tecnoappImage from "../assets/tecnoapp.svg";
import telecosImage from "../assets/telecos.svg";
import cplusplusImage from "../assets/cplusplus.svg";

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
  const [saludaliaDialogOpen, setSaludaliaDialogOpen] = useState(false);
  
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

  const saludalia: ServiceItem = {
    icon: <Heart className="h-8 w-8 text-sky-600" />,
    title: t('service.saludalia.title'),
    description: t('service.saludalia.description'),
    features: [
      t('service.saludalia.feature1'),
      t('service.saludalia.feature2'),
      t('service.saludalia.feature3')
    ],
    url: "https://saludalia.jobda.es/",
    onClick: () => setSaludaliaDialogOpen(true),
    badgeText: t('service.saludalia.badge'),
    variant: "secondary",
    imageSrc: saludaliaMainImage
  };

  const [plusAludDialogOpen, setPluSaludDialogOpen] = useState(false);
  
  const ticketsPlusalud: ServiceItem = {
    icon: <Headphones className="h-8 w-8 text-purple-600" />,
    title: t('service.plusalud.title'),
    description: t('service.plusalud.description'),
    features: [
      t('service.plusalud.feature1'),
      t('service.plusalud.feature2'),
      t('service.plusalud.feature3')
    ],
    url: "#tickets-plusalud", // Se utilizará una ventana modal por ahora
    onClick: () => setPluSaludDialogOpen(true),
    badgeText: t('service.plusalud.badge'),
    variant: "primary",
    imageSrc: plusaludVRImage
  };

  const tecnoapp: ServiceItem = {
    icon: <Laptop className="h-8 w-8 text-blue-600" />,
    title: t('service.tecnoapp.title'),
    description: t('service.tecnoapp.description'),
    features: [
      t('service.tecnoapp.feature1'),
      t('service.tecnoapp.feature2'),
      t('service.tecnoapp.feature3')
    ],
    url: "#tecnoapp",
    badgeText: t('service.tecnoapp.badge'),
    variant: "secondary",
    imageSrc: tecnoappImage
  };

  const telecos: ServiceItem = {
    icon: <Radio className="h-8 w-8 text-blue-700" />,
    title: t('service.telecos.title'),
    description: t('service.telecos.description'),
    features: [
      t('service.telecos.feature1'),
      t('service.telecos.feature2'),
      t('service.telecos.feature3')
    ],
    url: "#telecos",
    badgeText: t('service.telecos.badge'),
    variant: "primary",
    imageSrc: telecosImage
  };

  const cplusplus: ServiceItem = {
    icon: <Terminal className="h-8 w-8 text-purple-700" />,
    title: t('service.cplusplus.title'),
    description: t('service.cplusplus.description'),
    features: [
      t('service.cplusplus.feature1'),
      t('service.cplusplus.feature2'),
      t('service.cplusplus.feature3')
    ],
    url: "#cplusplus",
    badgeText: t('service.cplusplus.badge'),
    variant: "secondary",
    imageSrc: cplusplusImage
  };

  const services = [jobda, nflow, sinapsy, neuronMeg, empordaJobs, saludalia, ticketsPlusalud, tecnoapp, telecos, cplusplus];

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
      <SaludaliaDialog open={saludaliaDialogOpen} setOpen={setSaludaliaDialogOpen} />
      <PluSaludDialog open={plusAludDialogOpen} setOpen={setPluSaludDialogOpen} />
    </>
  );
}