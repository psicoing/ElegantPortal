import { Bookmark, Brain, Globe, HeartHandshake, Puzzle, Users } from "lucide-react";
import { motion } from "framer-motion";
import nflowFamiliarImage from "../assets/nflow_familiar.png";
import nflowRobotAIImage from "../assets/nflow_robot_ai.png";
import { useLanguage } from "@/lib/language-context";

export function AboutSection() {
  const { t } = useLanguage();
  
  return (
    <section id="acerca-de" className="py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('about.title')}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-600 leading-relaxed mb-8">
              {t('about.subtitle')}
            </p>
            <div className="max-w-md mx-auto">
              <img 
                src={nflowFamiliarImage} 
                alt="NFLOW Salud Mental Familiar" 
                className="rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105 mb-4"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Columna principal con la historia */}
          <motion.div 
            className="lg:col-span-3 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="prose prose-lg max-w-none">
              <p>
                Nflow nace como evolución del Instituto NeuronMeg, un centro con más de 32 años 
                de experiencia en psicología clínica y escolar. Desde su origen en el Empordà, 
                NeuronMeg ha acompañado a personas, familias y comunidades educativas con una 
                mirada integradora que combina ciencia, tecnología y sensibilidad humana.
              </p>
              <p>
                Estamos colegiados en el Col·legi Oficial de Psicologia de Catalunya con el número 7851, 
                lo que garantiza un ejercicio profesional riguroso, ético y basado en la evidencia científica.
              </p>
              <p>
                Además, Appia representa nuestra división especializada en el desarrollo de aplicaciones web 
                y móviles con inteligencia artificial. Creamos soluciones tecnológicas personalizadas para 
                empresas que buscan transformar digitalmente sus procesos, con un enfoque en la usabilidad,
                la eficiencia y el impacto real en los resultados de negocio.
              </p>
              <p>
                Actualmente, como Nflow, ampliamos nuestra acción profesional hacia la formación en 
                inteligencia artificial para empresas y empleados, el desarrollo de IAs personalizadas 
                y la implementación de modelos organizacionales que promueven el bienestar psicológico. 
                Paralelamente, seguimos ofreciendo servicios de atención y acompañamiento dirigidos a 
                adolescentes, familias y adultos, con una mirada clínica, educativa y social. También 
                mantenemos nuestros servicios de selección gratuitos a empresas y candidatos.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('about.vision.title')}</h3>
              <p className="text-gray-700">
                Unimos el conocimiento humano con la tecnología avanzada para ofrecer soluciones adaptadas, 
                eficientes y sostenibles. Trabajamos para que cada persona, organización o comunidad tenga 
                acceso a herramientas que mejoren su bienestar, fortalezcan sus decisiones y potencien su desarrollo.
              </p>
            </div>
          </motion.div>

          {/* Columna con áreas de acción */}
          <motion.div 
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">{t('about.areas.title')}</h3>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900">{t('area.psychology')}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Continuamos el legado clínico del Instituto NeuronMeg, ofreciendo intervención 
                    psicológica en contextos escolares, familiares, individuales y comunitarios.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-100">
              <div className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-full mr-4">
                  <Brain className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-purple-900">{t('area.nflow')}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Unidad de desarrollo en inteligencia artificial aplicada al bienestar,
                    la educación y la gestión del conocimiento organizacional.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-lg p-4 border border-emerald-100">
              <div className="flex items-start">
                <div className="bg-emerald-100 p-2 rounded-full mr-4">
                  <Puzzle className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-900">{t('area.appia')}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Servicio especializado en desarrollo de aplicaciones web y móviles con inteligencia artificial
                    para empresas que buscan digitalizar y optimizar sus procesos. 
                    Grupo empresarial EmpordaJobs SL B02701100.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-4 border border-indigo-100">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-4">
                  <Bookmark className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-indigo-900">RASTREAJOBS</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Sistema de búsqueda inteligente de ofertas de empleo basado en tecnología APPIA,
                    que ayuda a candidatos a encontrar oportunidades laborales adecuadas a su perfil.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-lg p-4 border border-rose-100">
              <div className="flex items-start">
                <div className="bg-rose-100 p-2 rounded-full mr-4">
                  <HeartHandshake className="h-5 w-5 text-rose-600" />
                </div>
                <div>
                  <h4 className="font-bold text-rose-900">{t('area.neuronmeg')}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Nuestro origen y núcleo clínico. Especializado en psicología escolar, clínica y 
                    comunitaria, con una vocación pública que se mantiene viva.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Imagen de NFLOW Robot IA al final de la sección */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8"></div>
          <div className="max-w-xs mx-auto">
            <img 
              src={nflowRobotAIImage} 
              alt="NFLOW Salud Mental para Adolescentes y Adultos" 
              className="rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105 mb-6"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <p className="text-gray-600 mt-8 font-medium">
              Colegiado-7851 · Colegio de Psicólogos de Catalunya
            </p>
            <a 
              href="/ai-apps" 
              className="text-blue-600 font-semibold mt-4 inline-block hover:text-blue-800 transition-colors"
            >
              APPIA · Desarrollo de apps inteligentes
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}