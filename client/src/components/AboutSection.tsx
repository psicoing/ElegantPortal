import { Brain, HeartHandshake, Puzzle, Users, Heart } from "lucide-react";
import { motion } from "framer-motion";
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
                Somos una plataforma multiservicio que integra tecnología, salud y conocimiento humano, con origen en el Empordà.
              </p>
              <p>
                Desde la innovación digital hasta la intervención clínica, nuestro grupo empresarial ofrece soluciones adaptadas, sostenibles y orientadas al bienestar y al desarrollo de personas y organizaciones.
              </p>
              <p>
                Comenzamos con herramientas tecnológicas de alto impacto: EmpordaJobs, nuestra app especializada en conectar empresas con talento local en las comarcas de Girona, mediante un sistema de análisis y filtrado inteligente de candidatos. Appia, creamos aplicaciones web y móviles basadas en inteligencia artificial, diseñadas para empresas que desean digitalizar sus procesos y optimizar recursos.
              </p>
              <p>
                Ampliamos nuestro ecosistema con otras soluciones clave: Jobda, plataforma de selección de personal inteligente que ayuda a encontrar el perfil más adecuado para cada empresa mediante algoritmos de evaluación avanzada. NFlow, inteligencia artificial aplicada al bienestar, la educación emocional y la gestión del conocimiento organizacional. Ofrecemos también formación en IA con enfoque práctico y humano. Saludalia, plataforma digital que conecta a pacientes con profesionales de la salud de todas las especialidades, fomentando el acceso a la atención sanitaria de forma sencilla y eficaz.
              </p>
              <p>
                Y en el corazón de todo, nuestra experiencia clínica: Instituto NeuronMeg, nuestro origen y núcleo fundacional, con más de 32 años de experiencia en psicología clínica, escolar y comunitaria. Desde nuestros inicios en el Empordà, hemos acompañado a personas, familias y comunidades educativas con una visión integradora que combina ciencia, sensibilidad humana y tecnología. Estamos colegiados en el Col·legi Oficial de Psicologia de Catalunya (nº 7851), lo que respalda un ejercicio profesional riguroso, ético y basado en la evidencia científica.
              </p>
              <p>
                A través de esta estructura multiservicio, combinamos conocimiento humano y tecnología avanzada para ofrecer soluciones que mejoran vidas, fortalecen decisiones y potencian el desarrollo integral de cada persona, organización o comunidad.
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

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg p-4 border border-amber-100">
              <div className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-full mr-4">
                  <Users className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-amber-900">{t('area.jobda')}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Aplicación especializada en selección de personal, ayudando a empresas a encontrar 
                    los mejores candidatos a través de análisis inteligente de perfiles y competencias.
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

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 border border-emerald-100">
              <div className="flex items-start">
                <div className="bg-emerald-100 p-2 rounded-full mr-4">
                  <Heart className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-900">{t('area.saludalia')}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {t('area.saludalia.description')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}