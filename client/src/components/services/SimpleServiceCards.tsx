import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";

// Iconos para cada servicio
import { 
  Briefcase, 
  Code, 
  Brain 
} from "lucide-react";

export function SimpleServiceCards() {
  const { t } = useLanguage();

  const services = [
    {
      id: "jobda",
      title: t('simple.jobda.title'),
      icon: <Briefcase className="h-7 w-7 text-blue-500" />,
      description: t('simple.jobda.description'),
      features: [
        t('simple.jobda.feature1'),
        t('simple.jobda.feature2'),
        t('simple.jobda.feature3')
      ],
      bgColor: "bg-blue-50 border-blue-100"
    },
    {
      id: "appia",
      title: t('simple.appia.title'),
      icon: <Code className="h-7 w-7 text-emerald-500" />,
      description: t('simple.appia.description'),
      features: [
        t('simple.appia.feature1'),
        t('simple.appia.feature2'),
        t('simple.appia.feature3')
      ],
      bgColor: "bg-emerald-50 border-emerald-100"
    },
    {
      id: "nflow",
      title: t('simple.nflow.title'),
      icon: <Brain className="h-7 w-7 text-purple-500" />,
      description: t('simple.nflow.description'),
      features: [
        t('simple.nflow.feature1'),
        t('simple.nflow.feature2'),
        t('simple.nflow.feature3')
      ],
      bgColor: "bg-purple-50 border-purple-100"
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
              className={`rounded-lg shadow-sm border p-6 ${service.bgColor}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-gray-100">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}