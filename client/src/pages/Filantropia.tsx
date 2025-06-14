import { motion } from "framer-motion";
import { Heart, Brain, Users, Target, CheckCircle, ArrowRight, Mail, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";

export default function Filantropia() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const impactData = [
    {
      icon: Users,
      number: "10,000+",
      description: "Vidas impactadas anualmente",
      color: "text-blue-600"
    },
    {
      icon: Brain,
      number: "32 años",
      description: "De experiencia en salud mental",
      color: "text-purple-600"
    },
    {
      icon: Target,
      number: "95%",
      description: "Transparencia en uso de fondos",
      color: "text-green-600"
    }
  ];

  const benefits = [
    {
      title: "Transparencia Total",
      description: "Reportes detallados del uso de fondos cada trimestre",
      icon: CheckCircle
    },
    {
      title: "Reconocimiento Público",
      description: "Nombre en instalaciones y comunicaciones oficiales",
      icon: Heart
    },
    {
      title: "Beneficios Fiscales",
      description: "Deducciones según legislación vigente",
      icon: Target
    },
    {
      title: "Impacto Directo",
      description: "Visibilidad del cambio real en vidas humanas",
      icon: Users
    }
  ];

  const donationLevels = [
    {
      level: "Mecenas Fundador",
      amount: "€50,000+",
      benefits: [
        "Naming rights en sala principal",
        "Reuniones trimestrales con dirección",
        "Acceso exclusivo a investigaciones",
        "Invitación a eventos VIP",
        "Placa conmemorativa permanente"
      ],
      color: "from-purple-600 to-indigo-600",
      featured: true
    },
    {
      level: "Benefactor Institucional",
      amount: "€25,000+",
      benefits: [
        "Reconocimiento en publicaciones",
        "Acceso a informes de impacto",
        "Invitación a conferencias anuales",
        "Certificado de mecenazgo",
        "Newsletter exclusivo"
      ],
      color: "from-blue-600 to-cyan-600",
      featured: false
    },
    {
      level: "Colaborador Comprometido",
      amount: "€10,000+",
      benefits: [
        "Reconocimiento público",
        "Informes semestrales",
        "Acceso a eventos especiales",
        "Certificado de colaboración"
      ],
      color: "from-green-600 to-emerald-600",
      featured: false
    },
    {
      level: "Apoyo Solidario",
      amount: "€1,000+",
      benefits: [
        "Agradecimiento público",
        "Informes anuales",
        "Acceso a webinars",
        "Certificado de donación"
      ],
      color: "from-orange-500 to-red-500",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header toggleMobileMenu={toggleMobileMenu} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 text-lg py-2 px-4 bg-purple-100 text-purple-800 border-purple-200">
                INS NEURONMEG
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Una apuesta valiente por el futuro de la mente humana
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                ¿Y si el futuro de la salud mental no dependiera solo de hospitales, sino de centros vivos, 
                inteligentes y comprometidos con la neurociencia aplicada?
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6">
                  <Heart className="mr-2 h-5 w-5" />
                  Conviértete en Mecenas
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  <Brain className="mr-2 h-5 w-5" />
                  Conoce el Proyecto
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {impactData.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 mb-4`}>
                    <item.icon className={`h-8 w-8 ${item.color}`} />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{item.number}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Este instituto no es solo un proyecto. Es una necesidad social urgente.
              </h2>
              
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-xl">
                <p className="text-lg leading-relaxed mb-6">
                  Vivimos una época de <strong>colapso emocional silencioso</strong>: adolescentes con ansiedad crónica, 
                  trabajadores que ya no duermen, familias rotas por la incomprensión de trastornos que aún no tienen nombre.
                </p>
                <p className="text-lg leading-relaxed text-blue-600 dark:text-blue-400 font-medium">
                  Ante esta realidad, NEURONMEG ofrece un modelo esperanzador, basado en ciencia real, 
                  experiencia profesional y humanidad.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Philanthropists */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Por qué necesitamos a los filántropos?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Porque este sueño no puede sostenerse solo con subvenciones ni burocracia. 
                Requiere aliados valientes: personas, fundaciones o empresas que entiendan que 
                <span className="text-blue-600 font-medium"> invertir en salud mental no es un gasto, es una inversión transformadora para la sociedad.</span>
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="mx-auto w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full flex items-center justify-center mb-4">
                        <benefit.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Propose */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Qué proponemos?</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-white/20 dark:border-slate-700">
                  <CardHeader>
                    <CardTitle className="flex items-center text-slate-900 dark:text-slate-100">
                      <Target className="mr-3 h-6 w-6 text-purple-600 dark:text-purple-400" />
                      Centro de Referencia
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300">
                      La construcción física de un centro de referencia, diseñado para estimular no solo el trabajo clínico, 
                      sino la investigación real sobre frecuencia neuronal, neuroglía y modulación de estados emocionales.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-white/20 dark:border-slate-700">
                  <CardHeader>
                    <CardTitle className="flex items-center text-slate-900 dark:text-slate-100">
                      <Heart className="mr-3 h-6 w-6 text-red-600 dark:text-red-400" />
                      Sistema Autosostenible
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300">
                      Un sistema donde los pacientes pagan según sus posibilidades y el resto se equilibra 
                      con un fondo solidario financiado por donaciones.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-white/20 dark:border-slate-700">
                  <CardHeader>
                    <CardTitle className="flex items-center text-slate-900 dark:text-slate-100">
                      <Brain className="mr-3 h-6 w-6 text-blue-600 dark:text-blue-400" />
                      Implementación Tecnológica
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300">
                      El chatbot de ayuda emocional, la plataforma NFlow, los algoritmos Hucof, 
                      y la red de intervención domiciliaria.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-white/20 dark:border-slate-700">
                  <CardHeader>
                    <CardTitle className="flex items-center text-slate-900 dark:text-slate-100">
                      <Globe className="mr-3 h-6 w-6 text-green-600 dark:text-green-400" />
                      Observatorio Internacional
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300">
                      Formación de nuevos profesionales en el uso ético y humano de la inteligencia artificial 
                      aplicada a la salud.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Donation Levels */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Niveles de Colaboración</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Cada contribución marca la diferencia. Elige el nivel que mejor se adapte a tu visión de impacto.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {donationLevels.map((level, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className={`h-full ${level.featured ? 'ring-2 ring-purple-500 scale-105' : ''} hover:shadow-xl transition-all`}>
                    <CardHeader className="text-center">
                      <div className={`w-full h-2 bg-gradient-to-r ${level.color} rounded-t-lg mb-4`}></div>
                      {level.featured && (
                        <Badge className="mb-2 bg-purple-100 text-purple-800">
                          Recomendado
                        </Badge>
                      )}
                      <CardTitle className="text-xl">{level.level}</CardTitle>
                      <div className={`text-3xl font-bold bg-gradient-to-r ${level.color} bg-clip-text text-transparent`}>
                        {level.amount}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {level.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className={`w-full mt-6 bg-gradient-to-r ${level.color} hover:opacity-90`}>
                        Colaborar
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                INS NEURONMEG no busca caridad. Busca visión.
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Si tú también crees que la salud mental es la base de una sociedad justa, 
                ponte en contacto con nosotros. Este viaje necesita compañeros valientes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  <Mail className="mr-2 h-5 w-5" />
                  empordajobs@gmail.com
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600">
                  <Phone className="mr-2 h-5 w-5" />
                  +34 660 45 21 36
                </Button>
              </div>
              
              <p className="mt-8 text-lg opacity-75">
                <strong>Y, por supuesto, la certeza de estar en el lado correcto de la historia.</strong>
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}