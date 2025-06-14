import { motion } from "framer-motion";
import { Brain, Users, Target, CheckCircle, ArrowRight, Building, Microscope, Heart, Globe, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { useState } from "react";

export default function ConoceProyecto() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projectPhases = [
    {
      phase: "Fase I",
      title: "Diseño y Planificación",
      duration: "6 meses",
      budget: "€2M",
      items: [
        "Diseño arquitectónico avanzado",
        "Estudios de viabilidad técnica",
        "Licencias y permisos",
        "Planificación tecnológica"
      ]
    },
    {
      phase: "Fase II", 
      title: "Construcción e Infraestructura",
      duration: "18 meses",
      budget: "€12M",
      items: [
        "Construcción del edificio principal",
        "Laboratorios especializados",
        "Infraestructura tecnológica",
        "Sistemas de seguridad avanzados"
      ]
    },
    {
      phase: "Fase III",
      title: "Equipamiento y Tecnología",
      duration: "12 meses", 
      budget: "€4M",
      items: [
        "Equipos de neuroimagen",
        "Sistemas de IA y computación",
        "Laboratorios de investigación",
        "Tecnología de realidad virtual"
      ]
    },
    {
      phase: "Fase IV",
      title: "Puesta en Marcha",
      duration: "6 meses",
      budget: "€2M",
      items: [
        "Contratación de personal especializado",
        "Programas de formación",
        "Certificaciones internacionales",
        "Inicio de operaciones"
      ]
    }
  ];

  const researchAreas = [
    {
      icon: Brain,
      title: "Neurociencia Cognitiva",
      description: "Investigación avanzada en procesos cognitivos y memoria",
      impact: "Nuevos tratamientos para demencia y Alzheimer"
    },
    {
      icon: Heart,
      title: "Salud Mental Digital",
      description: "Terapias asistidas por IA y realidad virtual",
      impact: "Acceso universal a tratamientos personalizados"
    },
    {
      icon: Microscope,
      title: "Neurotecnología",
      description: "Desarrollo de interfaces cerebro-computadora",
      impact: "Rehabilitación para lesiones neurológicas"
    },
    {
      icon: Users,
      title: "Psicología Social",
      description: "Impacto de la tecnología en el bienestar social",
      impact: "Sociedades más resilientes y empáticas"
    }
  ];

  const milestones = [
    {
      year: "2025",
      title: "Inicio del Proyecto",
      description: "Confirmación de financiación y inicio de fase I"
    },
    {
      year: "2026",
      title: "Primera Piedra",
      description: "Inicio de construcción del centro"
    },
    {
      year: "2027",
      title: "Equipamiento",
      description: "Instalación de tecnología avanzada"
    },
    {
      year: "2028",
      title: "Apertura",
      description: "Inauguración y primeros programas de investigación"
    },
    {
      year: "2030",
      title: "Impacto Global",
      description: "Reconocimiento internacional y expansión"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800" />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              <Building className="mr-2 h-4 w-4" />
              Instituto de Neurociencia del Futuro
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              INS NEURONMEG
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-4 opacity-90">
                Un Centro que Cambiará el Mundo
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-95">
              €20 millones de inversión para crear el centro de neurociencia más avanzado de Europa, 
              donde la tecnología y la humanidad se encuentran para revolucionar la salud mental.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:empordajobs@gmail.com">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6">
                  <Heart className="mr-2 h-5 w-5" />
                  Únete al Proyecto
                </Button>
              </a>
              <Link href="/filantropia">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Ver Mecenazgo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Una Visión Transformadora
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              INS NEURONMEG no es solo un centro de investigación. Es una apuesta valiente por el futuro de la mente humana, 
              donde convergen la neurociencia, la inteligencia artificial y la compasión humana.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200">
                ¿Por qué este proyecto es único?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">Enfoque Integral</p>
                    <p className="text-slate-600 dark:text-slate-300">Combinamos investigación, tratamiento y tecnología en un solo ecosistema.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">IA Ética</p>
                    <p className="text-slate-600 dark:text-slate-300">Desarrollamos inteligencia artificial centrada en el bienestar humano.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">Impacto Global</p>
                    <p className="text-slate-600 dark:text-slate-300">Nuestros avances beneficiarán a millones de personas en todo el mundo.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">Acceso Universal</p>
                    <p className="text-slate-600 dark:text-slate-300">Democratizamos el acceso a tratamientos de salud mental avanzados.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8"
            >
              <div className="text-center">
                <Brain className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200">
                  Impacto Esperado
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">1M+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Pacientes beneficiados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">50+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Investigadores</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">100+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Publicaciones científicas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">25+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Países colaboradores</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-800 dark:text-slate-200">
              Áreas de Investigación
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Cuatro pilares fundamentales que definirán el futuro de la neurociencia aplicada
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardHeader className="text-center">
                    <area.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle className="text-xl mb-2">{area.title}</CardTitle>
                    <CardDescription className="text-base">{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-1">Impacto Esperado:</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{area.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Phases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Fases del Proyecto
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Un plan meticuloso de 42 meses que garantiza la excelencia en cada etapa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-t-lg">
                    <div className="text-center">
                      <Badge className="bg-white/20 text-white border-white/30 mb-3">
                        {phase.phase}
                      </Badge>
                      <CardTitle className="text-xl mb-2">{phase.title}</CardTitle>
                      <div className="flex justify-between text-sm opacity-90">
                        <span>{phase.duration}</span>
                        <span className="font-bold">{phase.budget}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-600 dark:text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-800 dark:text-slate-200">
              Cronograma del Proyecto
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              De la visión a la realidad: hitos clave en el camino hacia la transformación
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-300 dark:bg-blue-700"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <div className={`text-center ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                        <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mb-2">
                          {milestone.year}
                        </Badge>
                        <CardTitle className="text-xl">{milestone.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-slate-300">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-900"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Sé Parte de la Historia
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-95">
              INS NEURONMEG no es solo un proyecto. Es una revolución silenciosa que transformará 
              cómo entendemos y tratamos la mente humana. El futuro comienza ahora.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:empordajobs@gmail.com">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6">
                  <Heart className="mr-2 h-5 w-5" />
                  Contactar Ahora
                </Button>
              </a>
              <Link href="/filantropia">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600">
                  <Globe className="mr-2 h-5 w-5" />
                  Ver Mecenazgo
                </Button>
              </Link>
            </div>
            
            <p className="mt-8 text-lg opacity-75">
              <strong>Porque el futuro de la humanidad merece nuestra mejor versión.</strong>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}