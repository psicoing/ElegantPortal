import { motion } from "framer-motion";
import { ArrowLeft, Users, Shield, TrendingUp, CheckCircle, Euro, Calendar, Briefcase, Star, Zap, RefreshCw, Target, Award, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { useState } from "react";

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
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg">
                Solicitar Información
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Descargar Condiciones
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}