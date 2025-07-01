import { motion } from "framer-motion";
import { ArrowLeft, Users, Shield, TrendingUp, CheckCircle, Euro, Calendar, Filter, Building, Heart, Stethoscope, Wrench, Megaphone, Calculator } from "lucide-react";
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

  const plans = [
    {
      name: "Básico",
      price: "€9.99",
      period: "trimestre",
      commission: "€3.99",
      color: "bg-green-500",
      needed: "1,130 médicos"
    },
    {
      name: "Avanzado", 
      price: "€15.99",
      period: "trimestre",
      commission: "€6.39", 
      color: "bg-blue-500",
      needed: "705 médicos"
    },
    {
      name: "Premium",
      price: "€19.99", 
      period: "trimestre",
      commission: "€7.99",
      color: "bg-purple-500",
      needed: "564 médicos"
    },
    {
      name: "Pro APP",
      price: "€75",
      period: "mes", 
      commission: "€30",
      color: "bg-orange-500",
      needed: "50 médicos",
      highlight: true
    }
  ];

  const professionalProfiles = [
    {
      title: "Profesionales Sanitarios",
      description: "Médicos, enfermeros, fisioterapeutas",
      icon: Stethoscope,
      color: "text-green-600"
    },
    {
      title: "Comerciales Experimentados", 
      description: "Vendedores, representantes",
      icon: TrendingUp,
      color: "text-blue-600"
    },
    {
      title: "Consultores",
      description: "Asesores, freelancers", 
      icon: Users,
      color: "text-purple-600"
    },
    {
      title: "Ex-Directivos",
      description: "Ejecutivos en transición",
      icon: Building,
      color: "text-orange-600"
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
            <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">
              Anti-edadismo
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Partners
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Únete a nuestra red de partners profesionales y forma parte de la revolución digital en salud
            </p>
          </motion.div>
        </div>
      </section>

      {/* Anti-ageism Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Compromiso Social: La experiencia no caduca
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              En Saludalia creemos que la edad es un valor, no una barrera para todos los profesionales
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">2.5M+</div>
              <p className="text-gray-600">Profesionales mayores de 50 años en España</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">45.000+</div>
              <p className="text-gray-600">Empleos potenciales disponibles</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">€15B</div>
              <p className="text-gray-600">Pérdida económica anual por desperdicio de talento senior</p>
            </motion.div>
          </div>

          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-2xl">¿Qué es el edadismo?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                El edadismo es la discriminación por razón de edad. Puede afectar a jóvenes y mayores, pero es especialmente prevalente hacia personas de edad avanzada en todos los ámbitos laborales.
              </p>
              <p className="text-gray-600">
                Esta forma de discriminación no solo es injusta, sino que además desperdicia el talento, la experiencia y la sabiduría acumulada de profesionales altamente cualificados de todas las industrias.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What is a Partner Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿Qué es un Partner Comercial?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Un partner comercial es una persona (o empresa) que trabaja de forma independiente para Saludalia, buscando médicos que se suscriban a la plataforma. No es empleado ni forma parte del equipo sanitario. Es simplemente alguien que consigue altas y cobra una comisión por cada una.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Colaborador externo independiente</h3>
                <p className="text-gray-600">Sin horarios fijos ni jefe</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Gestiona su propia actividad</h3>
                <p className="text-gray-600">Inversión de compromiso requerida</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Euro className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Comisiones por resultados</h3>
                <p className="text-gray-600">Contrato mercantil de colaboración</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Commission Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Modelo de Comisiones (40% Facturación)
            </h2>
            <p className="text-xl text-gray-600">
              Como Partner Profesional, recibes el 40% de toda la facturación bruta generada
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className={`relative ${plan.highlight ? 'ring-2 ring-orange-500 ring-offset-2' : ''}`}>
                  <CardHeader className="text-center">
                    <div className={`w-12 h-12 rounded-lg ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                      <span className="text-white font-bold text-lg">
                        {plan.name === "Básico" ? "🟢" : plan.name === "Avanzado" ? "🔵" : plan.name === "Premium" ? "🟣" : "🟠"}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                    <CardDescription>
                      <span className="text-2xl font-bold">{plan.price}</span>/{plan.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-lg font-semibold text-green-600 mb-2">
                      {plan.commission}
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      cada {plan.period === "mes" ? "mes" : "3 meses"}
                    </p>
                    <div className="text-xs text-gray-500">
                      Para €1,500/mes: {plan.needed}
                    </div>
                    {plan.highlight && (
                      <Badge className="mt-2 bg-orange-100 text-orange-800">
                        Estrategia Óptima
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="bg-orange-50 border-orange-200">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-orange-600" />
                Estrategia Óptima: Plan Pro APP
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Solo necesitas 50 clientes activos para alcanzar €1,500/mes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Modelo ideal para partners con acceso a redes médicas profesionales
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Ingresos recurrentes y estables de €30 por médico cada mes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Mucho más sostenible que los modelos de alto volumen
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Investment Policy */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nueva Política de Inversión para Partners
            </h2>
            <p className="text-xl text-gray-600">
              Requisitos de compromiso para garantizar la seriedad y trazabilidad de la colaboración
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Euro className="h-6 w-6 text-blue-600" />
                  Opción SAFE
                </CardTitle>
                <CardDescription>Modelo sin intervención notarial</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600 mb-2">€8,000</div>
                <p className="text-gray-600">2 × €4,000</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-green-600" />
                  Opción Notarial
                </CardTitle>
                <CardDescription>Participaciones notariales</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-2">€10,000</div>
                <p className="text-gray-600">2 × €5,000</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-6 w-6 text-blue-600" />
                Derechos de Recompra (12 meses)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">A los 12 meses, cualquier partner podrá:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Vender sus participaciones al propio Grupo JOBDA al precio acordado
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  O bien, venderlas a terceros al precio que considere oportuno
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-800">
                <Filter className="h-6 w-6" />
                Política de Filtrado
              </CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="text-lg font-medium text-red-800 italic">
                "Aquí no caben ni los oportunistas, ni los tibios, ni los falsos aliados."
              </blockquote>
              <p className="text-red-700 mt-4">
                Esta medida garantiza que trabajemos únicamente con partners comprometidos con el proyecto a largo plazo.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Professional Profiles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Perfiles Profesionales Ideales
            </h2>
            <p className="text-xl text-gray-600">
              Buscamos partners de diversos sectores profesionales
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {professionalProfiles.map((profile, index) => (
              <motion.div
                key={profile.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <profile.icon className={`h-12 w-12 mx-auto mb-4 ${profile.color}`} />
                    <h3 className="text-lg font-semibold mb-2">{profile.title}</h3>
                    <p className="text-gray-600">{profile.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿Por qué este modelo es diferente?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Trabajo ético</h3>
                <p className="text-gray-600">Sin productos dudosos, con inversión de compromiso. Ingresos reales desde el primer contrato.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Inclusivo</h3>
                <p className="text-gray-600">Diseñado especialmente para personas víctimas del edadismo o discriminación laboral.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Escalable</h3>
                <p className="text-gray-600">Límite de contratos que garantiza que miles de personas puedan participar.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Una oportunidad real, sin trampas
            </h2>
            <blockquote className="text-xl md:text-2xl italic mb-8 max-w-4xl mx-auto">
              "Tú marcas el ritmo. Nosotros ponemos la estructura. Que puedas vivir de tu trabajo ayudando a los que ayudan."
            </blockquote>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Acceder al Panel Partner
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Conoce más sobre nuestro compromiso
              </Button>
            </div>
            <div className="mt-8 space-y-2">
              <p className="text-lg">📞 34660452136</p>
              <p className="text-lg">✉️ jobda@jobda.es</p>
              <p className="text-sm opacity-90">Oportunidad internacional - Expansión en toda Europa</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}