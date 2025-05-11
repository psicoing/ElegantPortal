import { CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";

// Iconos para cada servicio
import { 
  Briefcase, 
  Heart, 
  User 
} from "lucide-react";

export function SimpleServiceCards() {
  const { t } = useLanguage();

  const services = [
    {
      id: "jobda",
      title: "Jobda",
      icon: <Briefcase className="h-7 w-7 text-blue-500" />,
      description: t('simple.jobda.description'),
      features: [
        t('simple.jobda.feature1'),
        t('simple.jobda.feature2'),
        t('simple.jobda.feature3')
      ],
      url: "https://jobda.es",
      textColor: "text-blue-600",
      linkText: t('simple.visit_link')
    },
    {
      id: "saludalia",
      title: "Saludalia",
      icon: <Heart className="h-7 w-7 text-emerald-500" />,
      description: t('simple.saludalia.description'),
      features: [
        t('simple.saludalia.feature1'),
        t('simple.saludalia.feature2'),
        t('simple.saludalia.feature3')
      ],
      url: "https://neuronmeg.jobda.es/join-team",
      textColor: "text-emerald-600",
      linkText: t('simple.visit_link')
    },
    {
      id: "empordajobs",
      title: "EmpordaJobs",
      icon: <User className="h-7 w-7 text-orange-500" />,
      description: t('simple.empordajobs.description'),
      features: [
        t('simple.empordajobs.feature1'),
        t('simple.empordajobs.feature2'),
        t('simple.empordajobs.feature3')
      ],
      url: "https://empordajobs.jobda.es",
      textColor: "text-orange-600",
      linkText: t('simple.visit_link')
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('simple.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('simple.subtitle')}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-gray-100">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href={service.url}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-1 font-medium ${service.textColor} hover:underline`}
              >
                {service.linkText} <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}