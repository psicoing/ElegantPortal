import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

interface NewServiceDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  description: string;
  features: string[];
  badgeText: string;
  icon: React.ReactNode;
  targetUser: string;
  kpis: string[];
  slug: string;
}

export function NewServiceDialog({ 
  open, 
  setOpen, 
  title, 
  description, 
  features, 
  badgeText, 
  icon, 
  targetUser,
  kpis,
  slug
}: NewServiceDialogProps) {
  
  const serviceData = {
    "red-profesional-paneuropea": {
      detailedDescription: "Plataforma de networking profesional diseñada específicamente para el mercado laboral europeo. Permite a profesionales y empresas establecer conexiones estratégicas filtradas por ubicación, sector de actividad y nivel de experiencia.",
      benefits: [
        "Expansión de red de contactos internacional",
        "Acceso a oportunidades laborales europeas",
        "Colaboraciones comerciales transfronterizas",
        "Networking especializado por industria"
      ]
    },
    "ofertas-empleo-union-europea": {
      detailedDescription: "Plataforma integral que centraliza ofertas de empleo de toda la Unión Europea. Agrega vacantes de múltiples fuentes locales y permite a empresas publicar posiciones con alcance transnacional.",
      benefits: [
        "Acceso centralizado a ofertas europeas",
        "Alertas personalizadas automáticas",
        "Matching inteligente de perfiles",
        "Soporte para trabajo remoto e híbrido"
      ]
    },
    "movilidad-laboral-europea": {
      detailedDescription: "Plataforma especializada en facilitar la movilidad laboral dentro de la Unión Europea. Proporciona recursos prácticos sobre relocación, normativas laborales por países y badges de movilidad que certifican disponibilidad geográfica.",
      benefits: [
        "Información completa sobre relocación",
        "Asesoramiento legal y fiscal",
        "Conexión con empresas que relocalizan",
        "Cálculo de costes por ciudades"
      ]
    },
    "comunidades-sectoriales-europa": {
      detailedDescription: "Comunidades temáticas organizadas por hashtags sectoriales como #RemoteWorkEurope, #TechTalentBarcelona o #GreenTechEU. Facilita el intercambio de conocimiento, tendencias del mercado y networking especializado por industrias.",
      benefits: [
        "Networking especializado por sector",
        "Acceso a tendencias de la industria",
        "Participación en eventos temáticos",
        "Contenido curado por expertos"
      ]
    },
    "inteligencia-mercado-laboral-europeo": {
      detailedDescription: "Dashboard avanzado con análisis del mercado laboral europeo en tiempo real. Proporciona datos sobre demanda de perfiles, evolución de modalidades híbridas/remotas y flujos migratorios de talento entre países.",
      benefits: [
        "Decisiones basadas en datos reales",
        "Análisis de tendencias salariales",
        "Previsiones del mercado laboral",
        "Informes sectoriales especializados"
      ]
    }
  };

  const currentData = serviceData[slug as keyof typeof serviceData] || serviceData["red-profesional-paneuropea"];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-4">
            {icon}
            <div>
              <DialogTitle className="text-2xl font-bold text-left">
                {title}
              </DialogTitle>
              <DialogDescription className="text-left text-lg mt-2">
                {description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Badge */}
          <div className="flex justify-start">
            <Badge variant="outline" className="text-sm font-medium">
              {badgeText}
            </Badge>
          </div>

          {/* Detailed Description */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">Descripción del Servicio</h3>
              <p className="text-gray-600 leading-relaxed">
                {currentData.detailedDescription}
              </p>
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Características Principales</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Beneficios Clave</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Target Users */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">Usuarios Objetivo</h3>
              <p className="text-gray-600">{targetUser}</p>
            </CardContent>
          </Card>

          {/* KPIs */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Métricas Clave (KPIs)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {kpis.map((kpi, index) => (
                  <div key={index} className="bg-blue-50 p-3 rounded-lg text-center">
                    <span className="text-blue-700 font-medium">{kpi}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-3">¿Interesado en este servicio?</h3>
              <p className="text-gray-600 mb-4">
                Contacta con nuestro equipo para más información sobre {title}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="gap-2">
                  <Mail className="w-4 h-4" />
                  Contactar ahora
                </Button>
                <Button 
                  variant="outline" 
                  className="gap-2"
                  onClick={() => window.open('https://ejobs.jobda.es/linkeuro', '_blank')}
                >
                  Acceder a LINKEURO
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}