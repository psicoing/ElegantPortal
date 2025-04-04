import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, ShieldCheck, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <MessageCircle className="h-8 w-8 text-primary" />,
    title: "NFLOW",
    description: "Asistencia emocional inteligente que optimiza su bienestar mental a través de conversaciones con IA."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-secondary-600" />,
    title: "Seguridad",
    description: "Protegemos su información con los más altos estándares para garantizar privacidad en ambos servicios."
  },
  {
    icon: <Briefcase className="h-8 w-8 text-accent" />,
    title: "JOBDA",
    description: "Plataforma de empleo que optimiza su búsqueda laboral conectándole con oportunidades relevantes."
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Nuestros Servicios Principales
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-50">
                <CardContent className="pt-6 pb-6 flex flex-col items-center text-center">
                  <div className={`rounded-full ${index === 0 ? 'bg-primary/10' : index === 1 ? 'bg-secondary-100' : 'bg-accent/20'} w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-sans font-semibold text-lg mb-2">
                    {index !== 1 ? (
                      <a 
                        href={index === 0 ? "https://mental-chat-ai-rmportbou.replit.app/" : "https://ejobs-spain-rmportbou.replit.app/"} 
                        className={`hover:underline ${index === 0 ? "text-primary" : "text-secondary-600"}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {feature.title}
                      </a>
                    ) : (
                      feature.title
                    )}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                  {index !== 1 && (
                    <a 
                      href={index === 0 ? "https://mental-chat-ai-rmportbou.replit.app/" : "https://ejobs-spain-rmportbou.replit.app/"} 
                      className={`mt-4 text-sm font-medium ${index === 0 ? "text-primary" : "text-secondary-600"} hover:underline`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {index === 0 ? "Acceder a NFLOW →" : "Acceder a JOBDA →"}
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
