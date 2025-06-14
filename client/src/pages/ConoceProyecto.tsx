import { motion } from "framer-motion";
import { Brain, CheckCircle, ArrowRight, Building, Microscope, Heart, Waves, Home, Settings, Mail, Users, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import projectImage from "@assets/WhatsApp Image 2025-06-13 at 14.28.54_1749892038710.jpeg";

export default function ConoceProyecto() {
  const buildingFloors = [
    {
      floor: "Planta 1",
      title: "Laboratorios de neurofrecuencia y salud mental",
      icon: Microscope,
      description: "Un espacio vivo donde psicólogos, neuroingenieros y especialistas colaboran en tiempo real",
      features: [
        "Laboratorios ARCO de análisis de frecuencias cerebrales",
        "Cabinas de exploración sensorial",
        "Espacios de atención psicológica integrativa",
        "Zonas de formación para nuevos profesionales"
      ],
      highlight: "Aquí no habrá batas blancas sin alma: habrá ciencia con ética y emoción"
    },
    {
      floor: "Planta 2",
      title: "Residencia para la gente mayor de Portbou",
      icon: Home,
      description: "Un hogar digno para que los mayores del pueblo puedan pasar sus últimos años de vida en su tierra",
      features: [
        "Residencia exclusiva para personas mayores de Portbou",
        "Cuidados especializados en un entorno familiar",
        "Conexión con la comunidad local y sus tradiciones",
        "Vistas al mar y cercanía a sus lugares de toda la vida"
      ],
      highlight: "Envejecer con dignidad en el pueblo de siempre"
    },
    {
      floor: "Planta 3",
      title: "Gestión, dirección y alma administrativa",
      icon: Settings,
      description: "Oficinas pensadas no como un despacho burocrático, sino como el centro de decisiones humanas",
      features: [
        "Gestión de fondos con transparencia total",
        "Diseño de políticas de impacto social",
        "Relación con entidades filantrópicas, universidades y organizaciones internacionales",
        "Coordinación de proyectos de investigación"
      ],
      highlight: "Donde cada decisión se toma pensando en el impacto humano"
    }
  ];

  const poolTherapies = [
    {
      title: "Terapias acuáticas",
      description: "Rehabilitación neurológica en ambiente marino",
      icon: Heart
    },
    {
      title: "Estimulación sensorial",
      description: "Neurofeedback en entorno salino natural",
      icon: Brain
    },
    {
      title: "Reflexión y meditación",
      description: "Neuroplasticidad en calma oceánica",
      icon: Waves
    }
  ];

  const projectValues = [
    { label: "Ética", description: "Cada decisión guiada por principios humanos" },
    { label: "Sostenible", description: "Respeto por el entorno de Portbou" },
    { label: "Científica", description: "Rigor en cada investigación" },
    { label: "Emocional", description: "La ciencia al servicio del corazón" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Header />
      
      {/* Project Image */}
      <section className="pt-40 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src={projectImage} 
              alt="INS NEURONMEG - Vista del proyecto en Portbou"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
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
              Portbou, Girona
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              INS NEURONMEG
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-4 opacity-90">
                Una catedral moderna para la neurociencia
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-95">
              En el corazón de Portbou, entre acantilados, arte, viento y frontera, nace un proyecto único. 
              No será solo un edificio. Será una declaración de principios.
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
              Portbou: El Lugar Perfecto
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Una institución de vanguardia dedicada al estudio del cerebro, al acompañamiento emocional, 
              y a la innovación en salud mental y neurofrecuencias, abierta a la ciencia, la ciudadanía y el mar.
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
                ¿Por qué Portbou?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">Ubicación Estratégica</p>
                    <p className="text-slate-600 dark:text-slate-300">Situado al lado del puerto, con acceso directo a las costas del Mediterráneo. Capitanía del Estado nos avala con los permisos para su construcción.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">Entre Fronteras</p>
                    <p className="text-slate-600 dark:text-slate-300">Portbou, pueblo fronterizo entre España y Francia, símbolo de conexión y encuentro entre culturas y conocimientos.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">Entorno Natural Único</p>
                    <p className="text-slate-600 dark:text-slate-300">Los acantilados, el viento marino y la tranquilidad costera crean el ambiente perfecto para la sanación y la investigación.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">Comunidad Arraigada</p>
                    <p className="text-slate-600 dark:text-slate-300">Un pueblo con historia, donde los mayores pueden envejecer en su tierra natal, rodeados del mar que siempre han conocido.</p>
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
                <Building className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200">
                  Portbou en Cifras
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">Costa</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Mediterráneo como aliado terapéutico</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">Puerto</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Acceso marítimo directo</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">Frontera</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Conexión España-Francia</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">Historia</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Pueblo con tradición marinera</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-800/20 rounded-2xl p-8">
              <p className="text-lg text-blue-700 dark:text-blue-300 italic leading-relaxed">
                "En Portbou, donde el Mediterráneo besa los acantilados y la historia abraza el futuro, 
                construiremos un faro de esperanza para la neurociencia. Con el aval de Capitanía del Estado 
                para su construcción, este proyecto cuenta con el respaldo oficial necesario para convertirse en realidad."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Building Structure */}
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
              Estructura del Edificio
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Tres plantas diseñadas para la excelencia científica y el bienestar humano
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {buildingFloors.map((floor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardHeader className="text-center bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-t-lg">
                    <floor.icon className="h-12 w-12 mx-auto mb-4" />
                    <Badge className="bg-white/20 text-white border-white/30 mb-3">
                      {floor.floor}
                    </Badge>
                    <CardTitle className="text-xl mb-2">{floor.title}</CardTitle>
                    <CardDescription className="text-blue-100">{floor.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3 mb-4">
                      {floor.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-600 dark:text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <p className="text-sm text-blue-700 dark:text-blue-300 italic">"{floor.highlight}"</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pool Section */}
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
              Un Símbolo: La Piscina Abierta al Mar
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              En lugar de cautiverio animal, un homenaje a la libertad: una piscina natural abierta, 
              sin cetáceos encerrados, donde el agua de mar y el cuerpo humano se encuentren en calma.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {poolTherapies.map((therapy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardHeader>
                    <therapy.icon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <CardTitle className="text-xl">{therapy.title}</CardTitle>
                    <CardDescription className="text-base">{therapy.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8">
              <p className="text-lg text-blue-700 dark:text-blue-300 italic">
                "Una metáfora líquida de nuestra filosofía: mente libre, cuerpo libre."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Values */}
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
              Valores del Proyecto
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Los cuatro pilares que sostienen nuestra visión del futuro
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-blue-600 mb-4">{value.label}</CardTitle>
                    <CardDescription className="text-base">{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Team */}
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
              🏛️ Dirección Arquitectónica y Asesoría Jurídica
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              El INS NEURONMEG se sustenta en un equipo profesional altamente cualificado, que garantiza 
              tanto la excelencia en el diseño del espacio como la solidez legal del proyecto.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Architectural Design */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-t-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Building className="h-8 w-8" />
                    <Badge className="bg-white/20 text-white border-white/30">
                      🏗️ Diseño Arquitectónico
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl mb-3">FLO – TARRUELLA Arquitectes</CardTitle>
                  <CardDescription className="text-blue-100">
                    Reconocido por su enfoque integrador entre naturaleza, salud y arquitectura
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-600 dark:text-slate-300">
                        <strong>Accesibilidad universal:</strong> Diseño adaptado para todas las personas
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-600 dark:text-slate-300">
                        <strong>Sostenibilidad ambiental:</strong> Respeto por el entorno de Portbou
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-600 dark:text-slate-300">
                        <strong>Bienestar psicosensorial:</strong> Espacios diseñados para la sanación
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-600 dark:text-slate-300">
                        <strong>Tecnología ARCO:</strong> Adaptación específica para entorno clínico innovador
                      </p>
                    </div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mt-6">
                    <p className="text-sm text-blue-700 dark:text-blue-300 italic">
                      "El emplazamiento en Portbou será respetado como un valor paisajístico y terapéutico, 
                      integrando luz, mar y silencio como elementos arquitectónicos activos."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Legal Advisory */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-br from-slate-600 to-slate-700 text-white rounded-t-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Scale className="h-8 w-8" />
                    <Badge className="bg-white/20 text-white border-white/30">
                      ⚖️ Asesoría Jurídica
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl mb-3">Hernández – Hospital Abogados</CardTitle>
                  <CardDescription className="text-slate-100">
                    Especialistas en derecho sanitario, propiedad horizontal y regulación de centros asistenciales
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-600 dark:text-slate-300">
                        <strong>Estructura jurídica transparente:</strong> Marco legal claro y estable
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-600 dark:text-slate-300">
                        <strong>Seguridad del proyecto:</strong> Fase de construcción y operativa diaria
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-600 dark:text-slate-300">
                        <strong>Cumplimiento normativo:</strong> Regulación integral de centros asistenciales
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-600 dark:text-slate-300">
                        <strong>Viabilidad institucional:</strong> Respaldo jurídico para innovación clínica
                      </p>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900/20 rounded-lg p-4 mt-6">
                    <p className="text-sm text-slate-700 dark:text-slate-300 italic">
                      "Esta colaboración legal asegura el cumplimiento normativo integral y la viabilidad 
                      institucional del INS NEURONMEG como modelo de innovación clínica con respaldo jurídico."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
              Llamamiento a la Filantropía con Propósito
            </h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto opacity-95 leading-relaxed">
              Este proyecto no es un capricho, es una necesidad histórica. Pedimos apoyo a quienes creen 
              que la salud mental no debe quedarse atrás, a quienes desean construir un legado con impacto duradero.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="mailto:empordajobs@gmail.com">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6">
                  <Mail className="mr-2 h-5 w-5" />
                  Contactar Ahora
                </Button>
              </a>
              <Link href="/filantropia">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600">
                  <Heart className="mr-2 h-5 w-5" />
                  Ver Mecenazgo
                </Button>
              </Link>
            </div>
            
            <p className="text-lg opacity-75 italic">
              <strong>INS NEURONMEG: donde la neurociencia deja de ser un lujo de laboratorio y se convierte en un derecho humano.</strong>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}