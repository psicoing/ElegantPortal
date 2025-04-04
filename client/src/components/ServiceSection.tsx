import { ServiceCard } from "@/components/ServiceCard";
import { motion } from "framer-motion";
import { MessageCircle, Briefcase } from "lucide-react";

export function ServiceSection() {
  const services = [
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: "NFLOW",
      description: "Una innovadora plataforma de chat basada en inteligencia artificial diseñada para proporcionar apoyo emocional y mental. NFLOW combina tecnología avanzada con un enfoque humano para ofrecer conversaciones significativas y apoyo personalizado.",
      features: [
        "Asistencia emocional personalizada",
        "Conversaciones naturales con IA",
        "Disponible 24/7 para ayudarte"
      ],
      url: "https://mental-chat-ai-rmportbou.replit.app/",
      badgeText: "IA",
      variant: "primary"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-secondary-600" />,
      title: "JOBDA",
      description: "Una completa plataforma de búsqueda de empleo y gestión de oportunidades laborales. JOBDA conecta a talentosos profesionales con empresas de primer nivel, facilitando el proceso de contratación con herramientas intuitivas y efectivas.",
      features: [
        "Ofertas de empleo actualizadas",
        "Herramientas de gestión de candidaturas",
        "Conexión directa con empresas"
      ],
      url: "https://ejobs-spain-rmportbou.replit.app/",
      badgeText: "Empleo",
      variant: "secondary"
    }
  ];

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
            Nuestros Servicios
          </h2>
          <p className="text-gray-600">
            Descubra nuestras soluciones especializadas diseñadas para satisfacer sus necesidades específicas.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
