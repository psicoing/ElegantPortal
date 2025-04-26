import { motion } from "framer-motion";
import { Radio, Image } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HobbiesSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Proyectos Culturales</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre nuestras pasiones más allá de los servicios profesionales. Espacios donde exploramos el arte y la comunicación.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {/* Radio Angrota Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
                <Radio className="h-24 w-24 text-white opacity-90" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Radio Angrota</h3>
                <p className="text-gray-600 mb-5">
                  Un espacio radiofónico donde exploramos conversaciones, música y sonidos que nos inspiran. 
                  Nuestra forma de compartir experiencias auditivas con la comunidad.
                </p>
                <div className="flex justify-center mt-4">
                  <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                    <a 
                      href="https://angrota.jobda.es/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white no-underline"
                    >
                      Visitar Radio Angrota
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
            
            {/* Galería Angrota Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center">
                <Image className="h-24 w-24 text-white opacity-90" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Galería Angrota</h3>
                <p className="text-gray-600 mb-5">
                  Un espacio dedicado al arte visual donde exhibimos obras que nos conmueven y nos hacen reflexionar.
                  Una ventana a expresiones artísticas contemporáneas.
                </p>
                <div className="flex justify-center mt-4">
                  <Button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
                    <a 
                      href="https://angrota.jobda.es/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white no-underline"
                    >
                      Visitar Galería Angrota
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}