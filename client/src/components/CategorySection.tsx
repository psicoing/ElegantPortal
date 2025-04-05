import { motion } from "framer-motion";
import { School, Users, Building2, HeartPulse, GraduationCap, Briefcase } from "lucide-react";

const categories = [
  {
    icon: <School className="h-8 w-8 text-white" />,
    title: "Adolescentes",
    description: "Apoyo para gestionar emociones, estrés escolar y relaciones sociales"
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Padres y Madres",
    description: "Orientación para comprender y apoyar el desarrollo emocional de tus hijos"
  },
  {
    icon: <Building2 className="h-8 w-8 text-white" />,
    title: "Empresas",
    description: "Gestión de ofertas laborables y RASTREAJOBS de toda EU"
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-white" />,
    title: "Salud Laboral",
    description: "Soporte para el manejo del estrés, ansiedad y desafíos en el entorno profesional"
  }
];

export function CategorySection() {
  return (
    <section className="py-16 md:py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4" style={{
                  backgroundColor: index === 0 ? "#6C8EFF" : 
                                  index === 1 ? "#30C48D" : 
                                  index === 2 ? "#FFA83F" : 
                                  "#FF6B95"
                }}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-sm text-gray-300">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}