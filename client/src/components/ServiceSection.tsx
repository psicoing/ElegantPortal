import { ServiceCard } from "@/components/ServiceCard";
import { HorizontalServiceCard } from "@/components/HorizontalServiceCard";
import { motion } from "framer-motion";
import { MessageCircle, Briefcase, Code, Sparkles, Brain, Home, Search, Building2, Heart, Headphones, Laptop, Radio, Terminal, TrendingUp, Monitor, Stethoscope, HardHat, Megaphone, DollarSign, Globe2, MapPin, Hash } from "lucide-react";
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
import { TecnoAppDialog } from "./TecnoAppDialog";
import { TelecosDialog } from "./TelecosDialog";
import { CPlusPlusDialog } from "./CPlusPlusDialog";
import { JobdaBolsaDialog } from "./JobdaBolsaDialog";
import { NewServiceDialog } from "./NewServiceDialog";

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
import ptalent01 from "@assets/PTALENT01.png";
import ptalent02 from "@assets/PTALENT02.png";
import linkEuroIcon from "../assets/linkeuro-icon.svg";

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
  const [redProfesionalDialogOpen, setRedProfesionalDialogOpen] = useState(false);
  const [ofertasEmpleoDialogOpen, setOfertasEmpleoDialogOpen] = useState(false);
  const [movilidadLaboralDialogOpen, setMovilidadLaboralDialogOpen] = useState(false);
  const [comunidadesSectorialesDialogOpen, setComunidadesSectorialesDialogOpen] = useState(false);
  const [inteligenciaMercadoDialogOpen, setInteligenciaMercadoDialogOpen] = useState(false);
  
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
    url: "https://neuro-consulta-rmportbou.replit.app/",
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
    url: "https://ejobs.jobda.es/",
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
  const [tecnoAppDialogOpen, setTecnoAppDialogOpen] = useState(false);
  const [telecosDialogOpen, setTelecosDialogOpen] = useState(false);
  const [cplusplusDialogOpen, setCplusplusDialogOpen] = useState(false);
  const [jobdaBolsaDialogOpen, setJobdaBolsaDialogOpen] = useState(false);
  
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
    onClick: () => setTecnoAppDialogOpen(true),
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
    onClick: () => setTelecosDialogOpen(true),
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
    onClick: () => setCplusplusDialogOpen(true),
    badgeText: t('service.cplusplus.badge'),
    variant: "secondary",
    imageSrc: cplusplusImage
  };

  // TALENTPOOL por sectores
  const talentpoolTech: ServiceItem = {
    icon: <Monitor className="h-8 w-8 text-blue-600" />,
    title: "TALENTPOOL Tech",
    description: "Bolsa especializada en profesionales de tecnología y desarrollo",
    features: [
      "Desarrolladores Full-Stack",
      "Especialistas en IA y ML",
      "DevOps y Cloud Engineers",
      "UI/UX Designers"
    ],
    url: "https://jobda-employee-portal-rmportbou.replit.app/",
    onClick: () => setJobdaBolsaDialogOpen(true),
    badgeText: "Anti-edadismo",
    variant: "primary",
    imageSrc: ptalent01
  };

  const talentpoolMed: ServiceItem = {
    icon: <Stethoscope className="h-8 w-8 text-green-600" />,
    title: "TALENTPOOL Med",
    description: "Red de profesionales sanitarios y médicos especialistas",
    features: [
      "Médicos especialistas",
      "Enfermería cualificada",
      "Terapeutas y fisios",
      "Personal sanitario"
    ],
    url: "https://jobda-employee-portal-rmportbou.replit.app/",
    onClick: () => setJobdaBolsaDialogOpen(true),
    badgeText: "Anti-edadismo",
    variant: "secondary",
    imageSrc: ptalent01
  };

  const talentpoolBuild: ServiceItem = {
    icon: <HardHat className="h-8 w-8 text-orange-600" />,
    title: "TALENTPOOL Build",
    description: "Profesionales de construcción e ingeniería civil",
    features: [
      "Ingenieros civiles",
      "Arquitectos y aparejadores",
      "Oficios especializados",
      "Project Managers"
    ],
    url: "https://jobda-employee-portal-rmportbou.replit.app/",
    onClick: () => setJobdaBolsaDialogOpen(true),
    badgeText: "Anti-edadismo",
    variant: "primary",
    imageSrc: ptalent01
  };

  const talentpoolMarketing: ServiceItem = {
    icon: <Megaphone className="h-8 w-8 text-purple-600" />,
    title: "TALENTPOOL Marketing",
    description: "Expertos en marketing digital y comunicación",
    features: [
      "Marketing digital",
      "Social media managers",
      "Content creators",
      "Growth hackers"
    ],
    url: "https://jobda-employee-portal-rmportbou.replit.app/",
    onClick: () => setJobdaBolsaDialogOpen(true),
    badgeText: "Anti-edadismo",
    variant: "secondary",
    imageSrc: ptalent01
  };

  const talentpoolFinance: ServiceItem = {
    icon: <DollarSign className="h-8 w-8 text-emerald-600" />,
    title: "TALENTPOOL Finance",
    description: "Profesionales financieros y de gestión empresarial",
    features: [
      "Analistas financieros",
      "Controllers y CFOs",
      "Asesores fiscales",
      "Risk managers"
    ],
    url: "https://jobda-employee-portal-rmportbou.replit.app/",
    onClick: () => setJobdaBolsaDialogOpen(true),
    badgeText: "Anti-edadismo",
    variant: "primary",
    imageSrc: ptalent01
  };

  // Nuevos servicios europeos
  const redProfesionalPaneuropea: ServiceItem = {
    icon: <Globe2 className="h-8 w-8 text-blue-600" />,
    title: "Red Profesional Paneuropea",
    description: "Conexiones cualificadas por país, ciudad y sector en toda Europa",
    features: [
      "Directorio profesional por países europeos",
      "Filtros avanzados por sector",
      "Sistema de recomendaciones basado en experiencia",
      "Mensajería directa entre profesionales",
      "Eventos de networking locales"
    ],
    url: "/contacto",
    onClick: () => setRedProfesionalDialogOpen(true),
    badgeText: "Europa",
    variant: "primary",
    imageSrc: linkEuroIcon
  };

  const ofertasEmpleoUE: ServiceItem = {
    icon: <Briefcase className="h-8 w-8 text-green-600" />,
    title: "Ofertas y Publicación de Empleo UE",
    description: "Agregador de vacantes locales y remotas con alertas inteligentes",
    features: [
      "Agregación de ofertas de 27 países UE",
      "Publicación directa para empresas",
      "Alertas personalizadas por criterios",
      "Matching automático candidato-vacante",
      "Filtros por modalidad trabajo"
    ],
    url: "/contacto",
    onClick: () => setOfertasEmpleoDialogOpen(true),
    badgeText: "Vacantes",
    variant: "secondary",
    imageSrc: linkEuroIcon
  };

  const movilidadLaboralUE: ServiceItem = {
    icon: <MapPin className="h-8 w-8 text-orange-600" />,
    title: "Movilidad Laboral en la UE",
    description: "Recursos y visibilidad para profesionales con disponibilidad transnacional",
    features: [
      "Badges de disponibilidad por países",
      "Guías de relocación y trámites",
      "Calculadora de salarios por ciudades",
      "Red de empresas con relocación",
      "Asesoría fiscal internacional"
    ],
    url: "/contacto",
    onClick: () => setMovilidadLaboralDialogOpen(true),
    badgeText: "Movilidad",
    variant: "primary",
    imageSrc: linkEuroIcon
  };

  const comunidadesSectoriales: ServiceItem = {
    icon: <Hash className="h-8 w-8 text-purple-600" />,
    title: "Tendencias y Comunidades Sectoriales",
    description: "Hashtags y grupos especializados para engagement sectorial",
    features: [
      "Comunidades por hashtags sectoriales",
      "Feed de noticias por industria",
      "Eventos y webinars temáticos",
      "Rankings de influencers por sector",
      "Contenido curado por expertos"
    ],
    url: "/contacto",
    onClick: () => setComunidadesSectorialesDialogOpen(true),
    badgeText: "Comunidades",
    variant: "secondary",
    imageSrc: linkEuroIcon
  };

  const inteligenciaMercadoLaboral: ServiceItem = {
    icon: <TrendingUp className="h-8 w-8 text-cyan-600" />,
    title: "Inteligencia del Mercado Laboral Europeo",
    description: "Panel con datos de demanda, modalidades híbridas y flujos de talento",
    features: [
      "Dashboard interactivo con métricas",
      "Análisis de demanda por skills",
      "Tendencias modalidades híbridas",
      "Mapas de flujos talento",
      "Informes sectoriales descargables"
    ],
    url: "/contacto",
    onClick: () => setInteligenciaMercadoDialogOpen(true),
    badgeText: "Inteligencia",
    variant: "primary",
    imageSrc: linkEuroIcon
  };

  const services = [jobda, nflow, sinapsy, neuronMeg, empordaJobs, saludalia, ticketsPlusalud, tecnoapp, telecos, cplusplus, talentpoolTech, talentpoolMed, talentpoolBuild, talentpoolMarketing, talentpoolFinance, redProfesionalPaneuropea, ofertasEmpleoUE, movilidadLaboralUE, comunidadesSectoriales, inteligenciaMercadoLaboral];

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
      <TecnoAppDialog open={tecnoAppDialogOpen} setOpen={setTecnoAppDialogOpen} />
      <TelecosDialog open={telecosDialogOpen} setOpen={setTelecosDialogOpen} />
      <CPlusPlusDialog open={cplusplusDialogOpen} setOpen={setCplusplusDialogOpen} />
      <JobdaBolsaDialog open={jobdaBolsaDialogOpen} onOpenChange={setJobdaBolsaDialogOpen} />
      
      {/* Nuevos servicios europeos */}
      <NewServiceDialog 
        open={redProfesionalDialogOpen}
        setOpen={setRedProfesionalDialogOpen}
        title="Red Profesional Paneuropea"
        description="Conexiones cualificadas por país, ciudad y sector en toda Europa"
        features={[
          "Directorio profesional por países europeos",
          "Filtros avanzados por sector", 
          "Sistema de recomendaciones basado en experiencia",
          "Mensajería directa entre profesionales",
          "Eventos de networking locales"
        ]}
        badgeText="Europa"
        icon={<Globe2 className="h-8 w-8 text-blue-600" />}
        targetUser="Profesional senior tech, consultor internacional, HR manager europeo"
        kpis={["Conexiones generadas por mes", "Tasa de respuesta a mensajes", "Profesionales activos por país"]}
        slug="red-profesional-paneuropea"
      />
      
      <NewServiceDialog 
        open={ofertasEmpleoDialogOpen}
        setOpen={setOfertasEmpleoDialogOpen}
        title="Ofertas y Publicación de Empleo UE"
        description="Agregador de vacantes locales y remotas con alertas inteligentes"
        features={[
          "Agregación de ofertas de 27 países UE",
          "Publicación directa para empresas",
          "Alertas personalizadas por criterios",
          "Matching automático candidato-vacante",
          "Filtros por modalidad trabajo"
        ]}
        badgeText="Vacantes"
        icon={<Briefcase className="h-8 w-8 text-green-600" />}
        targetUser="Candidato junior/senior, PYME europea, departamento RRHH multinacional"
        kpis={["Ofertas publicadas semanalmente", "Tiempo medio hasta primera respuesta", "Tasa de éxito en matching"]}
        slug="ofertas-empleo-union-europea"
      />
      
      <NewServiceDialog 
        open={movilidadLaboralDialogOpen}
        setOpen={setMovilidadLaboralDialogOpen}
        title="Movilidad Laboral en la UE"
        description="Recursos y visibilidad para profesionales con disponibilidad transnacional"
        features={[
          "Badges de disponibilidad por países",
          "Guías de relocación y trámites",
          "Calculadora de salarios por ciudades",
          "Red de empresas con relocación",
          "Asesoría fiscal internacional"
        ]}
        badgeText="Movilidad"
        icon={<MapPin className="h-8 w-8 text-orange-600" />}
        targetUser="Desarrollador remoto, consultor internacional, profesional healthcare móvil"
        kpis={["Relocaciones exitosas completadas", "Tiempo medio proceso relocación", "Satisfacción candidatos reubicados"]}
        slug="movilidad-laboral-europea"
      />
      
      <NewServiceDialog 
        open={comunidadesSectorialesDialogOpen}
        setOpen={setComunidadesSectorialesDialogOpen}
        title="Tendencias y Comunidades Sectoriales"
        description="Hashtags y grupos especializados para engagement sectorial"
        features={[
          "Comunidades por hashtags sectoriales",
          "Feed de noticias por industria",
          "Eventos y webinars temáticos",
          "Rankings de influencers por sector",
          "Contenido curado por expertos"
        ]}
        badgeText="Comunidades"
        icon={<Hash className="h-8 w-8 text-purple-600" />}
        targetUser="Profesional tech Barcelona, experto sostenibilidad, freelancer digital europeo"
        kpis={["Engagement mensual por comunidad", "Crecimiento de miembros activos", "Contenido compartido semanalmente"]}
        slug="comunidades-sectoriales-europa"
      />
      
      <NewServiceDialog 
        open={inteligenciaMercadoDialogOpen}
        setOpen={setInteligenciaMercadoDialogOpen}
        title="Inteligencia del Mercado Laboral Europeo"
        description="Panel con datos de demanda, modalidades híbridas y flujos de talento"
        features={[
          "Dashboard interactivo con métricas",
          "Análisis de demanda por skills",
          "Tendencias modalidades híbridas",
          "Mapas de flujos talento",
          "Informes sectoriales descargables"
        ]}
        badgeText="Inteligencia"
        icon={<TrendingUp className="h-8 w-8 text-cyan-600" />}
        targetUser="Director RRHH multinacional, head hunter europeo, consultor estratégico"
        kpis={["Precisión predicciones mercado laboral", "Usuarios activos dashboard mensual", "Descargas informes sectoriales"]}
        slug="inteligencia-mercado-laboral-europeo"
      />
    </>
  );
}