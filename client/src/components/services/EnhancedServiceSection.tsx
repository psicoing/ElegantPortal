import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";

// Iconos para cada servicio
import { 
  Briefcase, 
  Heart, 
  User, 
  Brain, 
  Code, 
  School, 
  Users
} from "lucide-react";

// Importamos las imágenes para las tarjetas principales
import jobdaImage from "@/assets/jobda-card.png";
import saludaliaImage from "@/assets/saludalia-card.png";
import empordajobsImage from "@/assets/empordajobs-card.png";
import nflowImage from "@/assets/nflow-card.png";
import appiaImage from "@/assets/appia-card.png";
import neuronMegImage from "@/assets/neuronmeg-card.png";

export function EnhancedServiceSection() {
  const { t } = useLanguage();

  // Definimos los datos de los servicios principales
  const mainServices = [
    {
      id: "jobda",
      title: "Jobda",
      icon: <Briefcase className="h-7 w-7 text-blue-500" />,
      color: "bg-blue-50 border-blue-100",
      iconBg: "bg-blue-100",
      textColor: "text-blue-700",
      description: t('enhanced.jobda.description'),
      features: [
        t('enhanced.jobda.feature1'),
        t('enhanced.jobda.feature2'),
        t('enhanced.jobda.feature3')
      ],
      url: "https://jobda.es",
      imageSrc: jobdaImage,
      longDescription: t('enhanced.jobda.long_description')
    },
    {
      id: "saludalia",
      title: "Saludalia",
      icon: <Heart className="h-7 w-7 text-emerald-500" />,
      color: "bg-emerald-50 border-emerald-100",
      iconBg: "bg-emerald-100",
      textColor: "text-emerald-700",
      description: t('enhanced.saludalia.description'),
      features: [
        t('enhanced.saludalia.feature1'),
        t('enhanced.saludalia.feature2'),
        t('enhanced.saludalia.feature3')
      ],
      url: "https://neuronmeg.jobda.es/join-team",
      imageSrc: saludaliaImage,
      longDescription: t('enhanced.saludalia.long_description')
    },
    {
      id: "empordajobs",
      title: "EmpordaJobs",
      icon: <User className="h-7 w-7 text-orange-500" />,
      color: "bg-orange-50 border-orange-100",
      iconBg: "bg-orange-100",
      textColor: "text-orange-700",
      description: t('enhanced.empordajobs.description'),
      features: [
        t('enhanced.empordajobs.feature1'),
        t('enhanced.empordajobs.feature2'),
        t('enhanced.empordajobs.feature3')
      ],
      url: "https://empordajobs.jobda.es",
      imageSrc: empordajobsImage,
      longDescription: t('enhanced.empordajobs.long_description')
    }
  ];

  // Definimos los servicios adicionales para la sección de áreas de acción
  const additionalServices = [
    {
      id: "psicologia",
      title: t('enhanced.areas.psychology.title'),
      icon: <Brain className="h-5 w-5 text-blue-500" />,
      description: t('enhanced.areas.psychology.description'),
    },
    {
      id: "nflow",
      title: "Nflow",
      icon: <Heart className="h-5 w-5 text-purple-500" />,
      description: t('enhanced.areas.nflow.description'),
    },
    {
      id: "jobdaSmall",
      title: "Jobda",
      icon: <Users className="h-5 w-5 text-blue-500" />,
      description: t('enhanced.areas.jobda.description'),
    },
    {
      id: "appia",
      title: "Appia",
      icon: <Code className="h-5 w-5 text-emerald-500" />,
      description: t('enhanced.areas.appia.description'),
    },
    {
      id: "neuronmeg",
      title: t('enhanced.areas.neuronmeg.title'),
      icon: <School className="h-5 w-5 text-red-500" />,
      description: t('enhanced.areas.neuronmeg.description'),
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Encabezado de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('enhanced.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('enhanced.subtitle')}
          </p>
        </motion.div>

        {/* Servicios principales */}
        <div className="grid gap-8 lg:grid-cols-3 mb-20">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`rounded-full p-2 ${service.iconBg}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={service.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-1 font-medium ${service.textColor} hover:underline`}
                >
                  {t('enhanced.visit_link')} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nuestra visión y áreas de acción */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Columna izquierda - Información general */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t('enhanced.company_info.title')}
            </h3>
            <div className="space-y-6 text-gray-600 ">
              <p>{t('enhanced.company_info.paragraph1')}</p>
              <p>{t('enhanced.company_info.paragraph2')}</p>
              <p>{t('enhanced.company_info.paragraph3')}</p>
              <p>{t('enhanced.company_info.paragraph4')}</p>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {t('enhanced.vision.title')}
              </h4>
              <p className="text-gray-600">
                {t('enhanced.vision.description')}
              </p>
            </div>
          </motion.div>

          {/* Columna derecha - Áreas de acción */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t('enhanced.areas.title')}
            </h3>
            <div className="space-y-6">
              {additionalServices.map((service, index) => (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="bg-gray-100 rounded-full p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{service.title}</h4>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Llamada a la acción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {t('enhanced.cta.title')}
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            {t('enhanced.cta.description')}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link 
              to="/investors"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              {t('enhanced.cta.investor_button')}
            </Link>
            <a
              href="mailto:empordajobs@gmail.com"
              className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 font-medium py-2 px-4 rounded-md transition-colors"
            >
              {t('enhanced.cta.contact_button')}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}