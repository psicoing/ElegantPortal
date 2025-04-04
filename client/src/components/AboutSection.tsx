import { Card, CardContent } from "@/components/ui/card";
import { CloudLightning, ShieldCheck, Cloud } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <CloudLightning className="h-8 w-8 text-primary" />,
    title: "Eficiencia",
    description: "Optimizamos cada proceso para ahorrarle tiempo y recursos."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-secondary-600" />,
    title: "Seguridad",
    description: "Protegemos su información con los más altos estándares de seguridad."
  },
  {
    icon: <Cloud className="h-8 w-8 text-accent" />,
    title: "Innovación",
    description: "Constantemente desarrollamos nuevas soluciones para adaptarnos a sus necesidades."
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
            Acerca de nuestra plataforma
          </h2>
          <p className="text-gray-600">
            Nuestra plataforma está diseñada para ofrecer servicios especializados que satisfacen necesidades específicas. 
            Le proporcionamos herramientas potentes y fáciles de usar para mejorar su experiencia y eficiencia.
          </p>
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
                  <h3 className="font-sans font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
