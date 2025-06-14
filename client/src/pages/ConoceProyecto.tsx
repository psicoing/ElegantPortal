import { motion } from "framer-motion";
import { Brain, CheckCircle, ArrowRight, Building, Microscope, Heart, Waves, Home, Settings, Mail } from "lucide-react";
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
      title: "Residencia para investigadores y visitantes",
      icon: Home,
      description: "Portbou no solo recibirá conocimiento, también lo acogerá",
      features: [
        "Residencia temporal para personas de la zona en tratamiento intensivo",
        "Hogar para investigadores invitados y estudiantes en prácticas",
        "Lugar de encuentro multicultural entre ciencia, salud y comunidad",
        "Un puente entre el saber y el vivir, con vistas al mar y al futuro"
      ],
      highlight: "Donde la hospitalidad se encuentra con la innovación"
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
              Una Institución de Vanguardia
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Una institución de vanguardia dedicada al estudio del cerebro, al acompañamiento emocional, 
              y a la innovación en salud mental y neurofrecuencias, abierta a la ciencia, la ciudadanía y el mar.
            </p>
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