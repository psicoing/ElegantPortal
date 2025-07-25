import { motion } from "framer-motion";
import { ArrowLeft, Users, Shield, TrendingUp, CheckCircle, Euro, Calendar, Briefcase, Star, Zap, RefreshCw, Target, Award, Handshake, Settings, Brain, Heart, DollarSign, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";

export default function Partners() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const benefits = [
    {
      icon: Target,
      title: "Licencia exclusiva en tu zona o sector",
      description: "Según disponibilidad, tendrás exclusividad territorial o sectorial",
      color: "text-blue-600"
    },
    {
      icon: Award,
      title: "Acceso a herramientas comerciales",
      description: "Formativas y técnicas para maximizar tu rendimiento",
      color: "text-green-600"
    },
    {
      icon: Users,
      title: "Acompañamiento directo",
      description: "Por parte del equipo central de JOBDA",
      color: "text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Comisiones sin límite",
      description: "Por cada cliente que traigas a la plataforma",
      color: "text-orange-600"
    },
    {
      icon: RefreshCw,
      title: "Renovación preferente",
      description: "Si los resultados son positivos",
      color: "text-teal-600"
    }
  ];

  const requirements = [
    {
      icon: CheckCircle,
      title: "Resultados mínimos",
      description: "Ventas o impacto social demostrable",
      color: "text-green-600"
    },
    {
      icon: Shield,
      title: "Sin incidencias",
      description: "Legales, éticas ni contractuales",
      color: "text-blue-600"
    }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Header toggleMobileMenu={toggleMobileMenu} />
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 mb-6">
        <Link href="/">
          <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors bg-white px-4 py-2 rounded-lg shadow-sm border">
            <ArrowLeft size={20} />
            Volver
          </button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Handshake className="h-8 w-8 text-primary" />
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                Nueva Política de Partners
              </h1>
            </div>
            <div className="flex items-center justify-center gap-4 mb-6">
              <Badge className="bg-primary text-white">JOBDA</Badge>
              <Badge className="bg-purple-100 text-purple-800">NFlow</Badge>
              <Badge className="bg-green-100 text-green-800">Saludalia</Badge>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">
              Licencia de Explotación Comercial
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Autónomos con visión. Sin jefes. Sin oficinas. Sin promesas vacías. Solo resultados.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Si quieres formar parte de una red profesional seria, ética y sostenible, este es tu modelo:
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is being a Partner Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="mb-12 border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Briefcase className="h-8 w-8 text-primary" />
                  ¿Qué es ser Partner?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Un partner es un <strong>profesional autónomo</strong> que adquiere el derecho a explotar comercialmente 
                  JOBDA, NFlow o Saludalia como parte de su actividad habitual, <strong>sin dedicación exclusiva</strong>.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Main Pricing Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden mb-12">
              {/* Gradient Header */}
              <div className="bg-gradient-to-r from-primary via-blue-600 to-indigo-600 px-8 py-12 text-white relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <Euro className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Precio Único: 2.500 €
                  </h2>
                  <div className="text-xl md:text-2xl font-medium text-blue-100 mb-2">
                    / anual
                  </div>
                  <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                    Inversión completa que incluye todo lo necesario
                  </p>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="px-8 py-12">
                <div className="grid md:grid-cols-2 gap-8">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                    >
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${
                        index === 0 ? 'from-blue-500 to-blue-600' :
                        index === 1 ? 'from-green-500 to-green-600' :
                        index === 2 ? 'from-purple-500 to-purple-600' :
                        index === 3 ? 'from-orange-500 to-orange-600' :
                        'from-teal-500 to-teal-600'
                      } flex items-center justify-center shadow-lg`}>
                        <benefit.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="px-8 pb-8">
                <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-6 text-center border border-primary/20">
                  <p className="text-lg font-semibold text-gray-900 mb-2">
                    ¿Todo incluido sin sorpresas?
                  </p>
                  <p className="text-gray-600">
                    Sí, una sola inversión anual que cubre licencia, herramientas, formación y soporte completo
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Renewal Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <RefreshCw className="h-8 w-8 text-green-600" />
                  ¿Qué pasa al cabo de un año?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Tu licencia se puede <strong>renovar automáticamente, sin ningún pago adicional</strong>, si:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {requirements.map((requirement, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                        <requirement.icon className={`h-6 w-6 ${requirement.color} flex-shrink-0 mt-1`} />
                        <div>
                          <h4 className="font-semibold text-gray-900">{requirement.title}</h4>
                          <p className="text-gray-600">{requirement.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-gray-700">
                    <strong>En caso contrario,</strong> se abre de nuevo la zona a otros candidatos.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Commission Structure Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Estructura de Comisiones
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sistema transparente y automático para NFLOW y SALUDALIA
            </p>
          </motion.div>

          {/* Commission Overview */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-3">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">60% para ti</h3>
                  <p className="text-gray-600">Ingresos directos automáticos</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Recibes automáticamente el <strong>60% de todos los pagos</strong> realizados por 
                usuarios en tus servicios NFLOW y SALUDALIA, sin gestiones adicionales.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">40% plataforma</h3>
                  <p className="text-gray-600">Infraestructura y soporte</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                El <strong>40% restante</strong> cubre infraestructura técnica, procesamiento de pagos, 
                desarrollo, marketing y soporte completo del sistema.
              </p>
            </motion.div>
          </div>

          {/* Revenue Examples */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* NFLOW Examples */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-3">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">NFLOW - Ingresos Anuales</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
                  <div>
                    <span className="font-semibold text-gray-900">Plan Básico</span>
                    <p className="text-sm text-gray-600">2,99€/mes × 60%</p>
                  </div>
                  <span className="text-lg font-bold text-purple-600">21,48€/año</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
                  <div>
                    <span className="font-semibold text-gray-900">Plan Pro</span>
                    <p className="text-sm text-gray-600">5,99€/mes × 60%</p>
                  </div>
                  <span className="text-lg font-bold text-purple-600">43,08€/año</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
                  <div>
                    <span className="font-semibold text-gray-900">Plan Premium</span>
                    <p className="text-sm text-gray-600">7,99€/mes × 60%</p>
                  </div>
                  <span className="text-lg font-bold text-purple-600">57,48€/año</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl border-2 border-purple-300">
                  <div>
                    <span className="font-semibold text-gray-900">Plan Anual Total</span>
                    <p className="text-sm text-gray-600">49€/año × 60%</p>
                  </div>
                  <span className="text-xl font-bold text-purple-700">29,40€/año</span>
                </div>
              </div>
            </motion.div>

            {/* SALUDALIA Examples */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-3">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">SALUDALIA - Ingresos Anuales</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
                  <div>
                    <span className="font-semibold text-gray-900">Plan Básico</span>
                    <p className="text-sm text-gray-600">9,99€/trimestre × 60%</p>
                  </div>
                  <span className="text-lg font-bold text-green-600">23,96€/año</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
                  <div>
                    <span className="font-semibold text-gray-900">Plan Avanzado</span>
                    <p className="text-sm text-gray-600">15,99€/trimestre × 60%</p>
                  </div>
                  <span className="text-lg font-bold text-green-600">38,36€/año</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
                  <div>
                    <span className="font-semibold text-gray-900">Plan Premium</span>
                    <p className="text-sm text-gray-600">19,99€/trimestre × 60%</p>
                  </div>
                  <span className="text-lg font-bold text-green-600">47,96€/año</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-100 to-green-200 rounded-xl border-2 border-green-300">
                  <div>
                    <span className="font-semibold text-gray-900">Plan Pro APP</span>
                    <p className="text-sm text-gray-600">75€/mes × 60%</p>
                  </div>
                  <span className="text-xl font-bold text-green-700">540€/año</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Ventajas del Sistema Automático</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8" />
                  </div>
                  <h4 className="font-semibold mb-2">Sin Gestiones</h4>
                  <p className="text-blue-100 text-sm">Todo automático, sin facturación manual ni atención directa</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-8 w-8" />
                  </div>
                  <h4 className="font-semibold mb-2">Pagos Directos</h4>
                  <p className="text-blue-100 text-sm">Transferencias automáticas del 60% de cada suscripción</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8" />
                  </div>
                  <h4 className="font-semibold mb-2">Escalable</h4>
                  <p className="text-blue-100 text-sm">Ingresos proporcionales al uso real de tus servicios</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para ser Partner?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Únete a nuestra red de profesionales y comienza tu camino hacia la independencia comercial
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactModal variant="button" text="Solicitar Información">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg">
                  Solicitar Información
                </Button>
              </ContactModal>
              <ContactModal variant="button" text="Descargar Condiciones">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  Descargar Condiciones
                </Button>
              </ContactModal>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}