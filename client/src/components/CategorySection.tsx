import { motion } from "framer-motion";
import { School, Users, Building2, HeartPulse, GraduationCap, Briefcase } from "lucide-react";
import nflowAdolescenteImage from "../assets/nflow_adolescente_girl.png";
import nflowFamiliarImage from "../assets/nflow_familiar.png";
import nflowPadresMadresImage from "../assets/nflow_padres_madres.png";
import nflowSaludLaboralImage from "../assets/nflow_salud_laboral.png";
import jobdaEmpresasImage from "../assets/jobda_empresas.png";

const categories = [
  {
    icon: <School className="h-8 w-8 text-white" />,
    title: "Adolescentes",
    description: "Apoyo para gestionar emociones, estrés escolar y relaciones sociales",
    image: nflowAdolescenteImage,
    imageAlt: "NFLOW para adolescentes"
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Padres y Madres",
    description: "Orientación para comprender y apoyar el desarrollo emocional de tus hijos",
    image: nflowPadresMadresImage,
    imageAlt: "NFLOW Salud Mental Familiar"
  },
  {
    icon: <Building2 className="h-8 w-8 text-white" />,
    title: "Empresas",
    description: "Gestión de ofertas laborables y RASTREAJOBS de toda EU",
    image: jobdaEmpresasImage,
    imageAlt: "JOBDA Selección de Personal"
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-white" />,
    title: "Salud Laboral",
    description: "Soporte para el manejo del estrés, ansiedad y desafíos en el entorno profesional",
    image: nflowSaludLaboralImage,
    imageAlt: "NFLOW Salud Mental Laboral"
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Categorías de Servicios</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Nuestras soluciones están diseñadas para atender las necesidades específicas de diferentes grupos, 
              ofreciendo herramientas y recursos adaptados a cada situación.
            </p>
          </div>
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
                {category.image ? (
                  <div className="w-36 h-36 mb-6 flex items-center justify-center">
                    <img 
                      src={category.image} 
                      alt={category.imageAlt} 
                      className="rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4" style={{
                    backgroundColor: index === 0 ? "#6C8EFF" : 
                                    index === 1 ? "#30C48D" : 
                                    index === 2 ? "#FFA83F" : 
                                    "#FF6B95"
                  }}>
                    {category.icon}
                  </div>
                )}
                <h3 className="text-xl font-bold mb-3 mt-2">{category.title}</h3>
                <p className="text-sm text-gray-300 px-2">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}