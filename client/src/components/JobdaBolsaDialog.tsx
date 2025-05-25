import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Shield, Users, Search, Activity, Eye } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import img8882 from "@assets/IMG_8882.png";
import img8883 from "@assets/IMG_8883.png";
import img8884 from "@assets/IMG_8884.png";
import img8885 from "@assets/IMG_8885.png";
import img8886 from "@assets/IMG_8886.png";
import img8887 from "@assets/IMG_8887.png";
import img8888 from "@assets/IMG_8888.png";
import img8890 from "@assets/IMG_8890.png";
import img8891 from "@assets/IMG_8891.png";
import img8892 from "@assets/IMG_8892.png";
import img8893 from "@assets/IMG_8893.png";
import img8880 from "@assets/IMG_8880.png";

interface JobdaBolsaDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function JobdaBolsaDialog({ open, onOpenChange }: JobdaBolsaDialogProps) {
  const { t } = useLanguage();

  const content = {
    es: {
      title: "JOBDA - Bolsa de Talento",
      subtitle: "La Primera Bolsa de Talento Humano",
      description: "Descubre, evalúa y conecta con profesionales verificados por IA. Cada talento cotiza en tiempo real según su valor de mercado.",
      features: [
        {
          icon: TrendingUp,
          title: "Coeficientes en Tiempo Real",
          description: "Valores que fluctúan según rendimiento, demanda y validación IA",
          color: "text-orange-600"
        },
        {
          icon: Shield,
          title: "Validación PROM",
          description: "Perfiles verificados con análisis psicométrico de inteligencia artificial",
          color: "text-green-600"
        },
        {
          icon: Users,
          title: "Estados Dinámicos",
          description: "Libre, Ocupado, Disponible - Seguimiento en tiempo real",
          color: "text-yellow-600"
        },
        {
          icon: Search,
          title: "Búsqueda Inteligente",
          description: "Filtros avanzados por sector, coeficiente y disponibilidad",
          color: "text-red-600"
        },
        {
          icon: Activity,
          title: "Dashboard Profesional",
          description: "Vista completa del sistema de bolsa de valores para talento humano",
          color: "text-blue-600"
        },
        {
          icon: Eye,
          title: "Seguimiento de Talento",
          description: "Las empresas pueden seguir profesionales favoritos y ver evolución",
          color: "text-purple-600"
        }
      ],
      mainConcept: "Concepto Principal",
      conceptText: "JOBDA funciona como una bolsa de valores, pero en vez de acciones, se cotiza el talento humano. La puntuación de cada persona se basa en datos verificables, con capas psicométricas de IA, y su disponibilidad se monitoriza en tiempo real.",
      impact: "Impacto Esperado",
      impactText: "Democratización del talento, contratación por méritos y eficiencia total en los procesos de selección.",
      techFeatures: "Características Técnicas",
      interfaceType: "Interfaz tipo Nasdaq/Bloomberg",
      realTimeUpdates: "Actualizaciones dinámicas en tiempo real",
      aiValidation: "Validación por IA con sistema PROM",
      professionalStates: "Sistema de estados profesionales independientes"
    },
    ca: {
      title: "JOBDA - Borsa de Talent",
      subtitle: "La Primera Borsa de Talent Humà",
      description: "Descobreix, avalua i connecta amb professionals verificats per IA. Cada talent cotitza en temps real segons el seu valor de mercat.",
      features: [
        {
          icon: TrendingUp,
          title: "Coeficients en Temps Real",
          description: "Valors que fluctuen segons rendiment, demanda i validació IA",
          color: "text-orange-600"
        },
        {
          icon: Shield,
          title: "Validació PROM",
          description: "Perfils verificats amb anàlisi psicomètric d'intel·ligència artificial",
          color: "text-green-600"
        },
        {
          icon: Users,
          title: "Estats Dinàmics",
          description: "Lliure, Ocupat, Disponible - Seguiment en temps real",
          color: "text-yellow-600"
        },
        {
          icon: Search,
          title: "Cerca Intel·ligent",
          description: "Filtres avançats per sector, coeficient i disponibilitat",
          color: "text-red-600"
        },
        {
          icon: Activity,
          title: "Dashboard Professional",
          description: "Vista completa del sistema de borsa de valors per talent humà",
          color: "text-blue-600"
        },
        {
          icon: Eye,
          title: "Seguiment de Talent",
          description: "Les empreses poden seguir professionals favorits i veure evolució",
          color: "text-purple-600"
        }
      ],
      mainConcept: "Concepte Principal",
      conceptText: "JOBDA funciona com una borsa de valors, però en lloc d'accions, es cotitza el talent humà. La puntuació de cada persona es basa en dades verificables, amb capes psicomètriques d'IA, i la seva disponibilitat es monitoritza en temps real.",
      impact: "Impacte Esperat",
      impactText: "Democratització del talent, contractació per mèrits i eficiència total en els processos de selecció.",
      techFeatures: "Característiques Tècniques",
      interfaceType: "Interfície tipus Nasdaq/Bloomberg",
      realTimeUpdates: "Actualitzacions dinàmiques en temps real",
      aiValidation: "Validació per IA amb sistema PROM",
      professionalStates: "Sistema d'estats professionals independents"
    },
    en: {
      title: "JOBDA - Talent Exchange",
      subtitle: "The First Human Talent Stock Exchange",
      description: "Discover, evaluate and connect with AI-verified professionals. Each talent is quoted in real time according to their market value.",
      features: [
        {
          icon: TrendingUp,
          title: "Real-Time Coefficients",
          description: "Values that fluctuate based on performance, demand and AI validation",
          color: "text-orange-600"
        },
        {
          icon: Shield,
          title: "PROM Validation",
          description: "Verified profiles with artificial intelligence psychometric analysis",
          color: "text-green-600"
        },
        {
          icon: Users,
          title: "Dynamic States",
          description: "Free, Busy, Available - Real-time tracking",
          color: "text-yellow-600"
        },
        {
          icon: Search,
          title: "Smart Search",
          description: "Advanced filters by sector, coefficient and availability",
          color: "text-red-600"
        },
        {
          icon: Activity,
          title: "Professional Dashboard",
          description: "Complete view of the stock exchange system for human talent",
          color: "text-blue-600"
        },
        {
          icon: Eye,
          title: "Talent Tracking",
          description: "Companies can follow favorite professionals and see evolution",
          color: "text-purple-600"
        }
      ],
      mainConcept: "Main Concept",
      conceptText: "JOBDA works like a stock exchange, but instead of stocks, human talent is traded. Each person's score is based on verifiable data, with AI psychometric layers, and their availability is monitored in real time.",
      impact: "Expected Impact",
      impactText: "Democratization of talent, merit-based hiring and total efficiency in selection processes.",
      techFeatures: "Technical Features",
      interfaceType: "Nasdaq/Bloomberg type interface",
      realTimeUpdates: "Dynamic real-time updates",
      aiValidation: "AI validation with PROM system",
      professionalStates: "Independent professional states system"
    }
  };

  const currentContent = content['es']; // Usar español por defecto

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
            {currentContent.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              {currentContent.subtitle}
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {currentContent.description}
            </p>
          </div>

          {/* Main Image */}
          <div className="flex justify-center">
            <img 
              src={img8882} 
              alt="JOBDA Main Interface" 
              className="rounded-xl shadow-lg max-w-sm w-full"
            />
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentContent.features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <feature.icon className={`w-12 h-12 mx-auto mb-4 ${feature.color}`} />
                  <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Screenshot Gallery */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center text-gray-800">
              {currentContent.techFeatures}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <img src={img8883} alt="Real-time Coefficients" className="rounded-lg shadow-md w-full" />
                <p className="text-sm text-center text-gray-600">{currentContent.interfaceType}</p>
              </div>
              
              <div className="space-y-2">
                <img src={img8884} alt="Dynamic States" className="rounded-lg shadow-md w-full" />
                <p className="text-sm text-center text-gray-600">{currentContent.realTimeUpdates}</p>
              </div>
              
              <div className="space-y-2">
                <img src={img8885} alt="Smart Search" className="rounded-lg shadow-md w-full" />
                <p className="text-sm text-center text-gray-600">{currentContent.aiValidation}</p>
              </div>
              
              <div className="space-y-2">
                <img src={img8886} alt="Dashboard Overview" className="rounded-lg shadow-md w-full" />
                <p className="text-sm text-center text-gray-600">{currentContent.professionalStates}</p>
              </div>
              
              <div className="space-y-2">
                <img src={img8887} alt="Professional Rankings" className="rounded-lg shadow-md w-full" />
                <p className="text-sm text-center text-gray-600">Rankings Profesionales</p>
              </div>
              
              <div className="space-y-2">
                <img src={img8888} alt="Sector Analysis" className="rounded-lg shadow-md w-full" />
                <p className="text-sm text-center text-gray-600">Análisis por Sectores</p>
              </div>
            </div>

            {/* Additional Screenshots */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <img src={img8890} alt="Professional Profiles" className="rounded-lg shadow-md w-full" />
                <p className="text-sm text-center text-gray-600">Perfiles Profesionales</p>
              </div>
              
              <div className="space-y-2">
                <img src={img8891} alt="Talent Search" className="rounded-lg shadow-md w-full" />
                <p className="text-sm text-center text-gray-600">Búsqueda de Talento</p>
              </div>
            </div>

            {/* Activity Screenshots */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <img src={img8892} alt="Activity Tracking" className="rounded-lg shadow-md w-full" />
                <p className="text-sm text-center text-gray-600">Seguimiento de Actividad</p>
              </div>
              
              <div className="space-y-2">
                <img src={img8893} alt="Professional Updates" className="rounded-lg shadow-md w-full" />
                <p className="text-sm text-center text-gray-600">Actualizaciones Profesionales</p>
              </div>
              
              <div className="space-y-2">
                <img src={img8880} alt="Market Overview" className="rounded-lg shadow-md w-full" />
                <p className="text-sm text-center text-gray-600">Vista General del Mercado</p>
              </div>
            </div>
          </div>

          {/* Main Concept */}
          <Card className="bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-700">
                {currentContent.mainConcept}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {currentContent.conceptText}
              </p>
            </CardContent>
          </Card>

          {/* Impact */}
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">
                {currentContent.impact}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {currentContent.impactText}
              </p>
            </CardContent>
          </Card>

          {/* Status Badges */}
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200">
              Bolsa de Talento
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
              Validación IA
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200">
              Tiempo Real
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
              Sistema PROM
            </Badge>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}