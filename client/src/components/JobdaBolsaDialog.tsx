import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Shield, Users, Search, Activity, Eye } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import ptalent01 from "@assets/PTALENT01.png";
import ptalent02 from "@assets/PTALENT02.png";
import talentpoolImg1 from "@assets/image_1748158850691.png";
import talentpoolImg2 from "@assets/image_1748158906944.png";

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
              src={ptalent01} 
              alt="TALENTPOOL Main Interface" 
              className="rounded-xl shadow-lg max-w-4xl w-full"
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <img src={ptalent02} alt="Vista Previa del Dashboard" className="rounded-lg shadow-lg w-full" />
                <p className="text-sm text-center text-gray-600">Vista Previa del Dashboard</p>
              </div>
              
              <div className="space-y-4">
                <img src={talentpoolImg1} alt="Funcionalidades Principales" className="rounded-lg shadow-lg w-full" />
                <p className="text-sm text-center text-gray-600">Funcionalidades Principales</p>
              </div>
            </div>

            {/* Dashboard Completo */}
            <div className="flex justify-center">
              <div className="space-y-4 max-w-4xl w-full">
                <img src={talentpoolImg2} alt="Dashboard Completo TALENTPOOL" className="rounded-lg shadow-lg w-full" />
                <p className="text-sm text-center text-gray-600">Dashboard Completo con Análisis por Sectores</p>
              </div>
            </div>
          </div>

          {/* Main Concept */}
          <Card className="bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-orange-800 mb-6">
                Concepto General
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                JOBDA no es solo una bolsa de empleo. Es la primera <strong>Bolsa de Talento Humano</strong>, construida con la lógica de una bolsa de valores, donde los candidatos no solo se listan, sino que <strong>cotizan</strong>. Cada persona se presenta como un activo profesional dinámico, con un valor numérico de bolsa, que fluctúa en función de múltiples factores.
              </p>
              
              <h4 className="text-xl font-semibold text-orange-700 mb-4">
                🏢 Interfaz tipo bolsa de valores
              </h4>
              <ul className="text-gray-700 mb-6 space-y-2 ml-4">
                <li>• Estética tipo Bloomberg / Nasdaq, adaptada a sectores laborales</li>
                <li>• Paneles por sector (salud, construcción, tecnología, hostelería, etc.)</li>
                <li>• Visualización en tiempo real de coeficiente de bolsa, estado del profesional y evolución del valor</li>
                <li>• Ranking de los más destacados por área profesional</li>
              </ul>

              <h4 className="text-xl font-semibold text-orange-700 mb-4">
                📊 Coeficiente de Bolsa: calculado sobre 250 variables
              </h4>
              <p className="text-gray-700 mb-4">
                Cada persona recibe un <strong>valor numérico único</strong>, generado por un algoritmo propietario diseñado por JOBDA. Este algoritmo analiza más de <strong>250 variables</strong> entre las que se incluyen:
              </p>
              <ul className="text-gray-700 mb-6 space-y-2 ml-4">
                <li>• Formación y titulaciones oficiales</li>
                <li>• Trayectoria laboral y experiencia específica por sector</li>
                <li>• Continuidad en el empleo y nivel salarial histórico (nóminas verificadas)</li>
                <li>• Certificados, premios, publicaciones o menciones</li>
                <li>• Capacidad de adaptación medida por IA psicométrica</li>
                <li>• Tiempo de respuesta, actitud en entrevistas, pruebas técnicas</li>
              </ul>

              <h4 className="text-xl font-semibold text-orange-700 mb-4">
                🤖 Validación psicométrica con PROM de IA avanzada
              </h4>
              <p className="text-gray-700 mb-4">
                El sistema incluye un módulo exclusivo de evaluación por videocámara, donde la persona realiza una prueba <strong>PROM (Perfil de Respuesta y Observación Modular)</strong>. La inteligencia artificial detecta si el candidato responde de forma genuina, analiza expresiones, pausas, microgestos, tono y contenido, comparando patrones con modelos entrenados por expertos en psicología laboral.
              </p>

              <h4 className="text-xl font-semibold text-orange-700 mb-4">
                🔄 Estados laborales cruzados
              </h4>
              <p className="text-gray-700 mb-6">
                Cada usuario tiene <strong>3 estados independientes</strong>: <em>Libre</em> (no trabaja actualmente), <em>Ocupado</em> (está trabajando), y <em>Disponible</em> (abierto a propuestas). Esto permite detectar personas ocupadas pero disponibles, o libres pero no disponibles.
              </p>

              <h4 className="text-xl font-semibold text-orange-700 mb-4">
                💼 Para empresas: búsqueda avanzada tipo inversores
              </h4>
              <p className="text-gray-700 mb-6">
                Las empresas buscan por sector, ubicación, coeficiente mínimo y estado. Ven perfiles como <strong>"acciones"</strong>: valor actual, tendencia, rendimiento histórico. Pueden hacer seguimiento de candidatos y recibir alertas si cambian de estado o suben de valor.
              </p>

              <div className="bg-orange-100 border-l-4 border-orange-500 p-4 rounded">
                <h5 className="font-semibold text-orange-800 mb-2">Resumen</h5>
                <p className="text-orange-700 text-sm">
                  JOBDA crea la primera infraestructura de inversión en talento humano. No se postulan CVs, se invierte en valor. Todo perfil humano tiene un precio, una tendencia y una disponibilidad. Y ese valor está validado por datos duros, por trayectoria… y por inteligencia artificial.
                </p>
              </div>
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