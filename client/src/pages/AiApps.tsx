import { useLanguage } from "@/lib/language-context";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { MobileMenu } from "@/components/MobileMenu";
import { ArrowLeft, Mail, ExternalLink } from "lucide-react";
import aiAppsIconImage from "../assets/ai_apps_icon.png";
import { Link } from "wouter";

export default function AiApps() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header toggleMobileMenu={toggleMobileMenu} />
      <MobileMenu isOpen={isMobileMenuOpen} closeMobileMenu={closeMobileMenu} />
      
      <main className="flex-1 py-12 md:py-16">
        <div className="container max-w-4xl mx-auto px-4 md:px-6">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center text-primary hover:underline mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('common.back_to_home')}
            </Link>
            
            <div className="mb-8 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <img 
                  src={aiAppsIconImage} 
                  alt="Appia - Aplicaciones Inteligentes con IA" 
                  className="max-w-full rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  🚀 Appia: Aplicaciones Inteligentes con IA
                </h1>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 mb-4">
                    APPIA desarrolla apps inteligentes con IA para empresas que buscan ir más allá en su transformación digital.
                  </p>
                  <p className="text-gray-700">
                    Creamos soluciones reales, no plantillas. Aplicaciones que integran IA, base de datos, automatización y paneles de control. Adaptadas a tu sector, a tus flujos de trabajo, y sobre todo, a tus objetivos.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Características principales</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">🧠</span>
                    <span>IA personalizada y entrenada para tu negocio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">📊</span>
                    <span>Base de datos robusta y escalable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🧩</span>
                    <span>Backend con panel interno de gestión</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">📱</span>
                    <span>Webapp o app móvil (según necesidad)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🔐</span>
                    <span>Seguridad y privacidad garantizadas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🛠️</span>
                    <span>Soporte técnico profesional</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Costes reales de una app profesional con IA</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2">🔹</span>
                    <span>Desarrollo inicial completo: entre <strong>6.000 y 12.000 €</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🔹</span>
                    <span>Infraestructura anual (hosting, tokens IA, BBDD): <strong>1.200 – 2.000 €</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🔹</span>
                    <span>Mantenimiento y soporte técnico: desde <strong>1.200 €/año</strong></span>
                  </li>
                </ul>
                <div className="mt-6 p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium">🎯 Inversión total primer año: entre <strong>8.400 y 15.000 €</strong>, según la complejidad y el volumen de uso.</p>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">👨‍💻 Ideal para:</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-medium">Consultoras y despachos</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-medium">Clínicas y servicios de salud</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-medium">Empresas que necesitan herramientas internas con IA</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-medium">Negocios que quieren destacar y automatizar procesos clave</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-md">
              <h2 className="text-xl font-bold mb-4">Desarrollo rápido y efectivo</h2>
              <p className="mb-2">📲 En solo 30 días puedes tener tu primera versión funcionando.</p>
              <p>📩 Te preparamos un prototipo funcional en 48h tras conocer tu idea.</p>
            </div>
            
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-6">¿Listo para comenzar?</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg" size="lg">
                  <a href="https://neuro-consulta-rmportbou.replit.app/" target="_blank" rel="noopener noreferrer" className="text-white">
                    Acceder a APPIA
                  </a>
                </Button>
              </div>
              
              <h3 className="text-xl font-bold mb-4">¿Hablamos?</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="outline" className="w-full sm:w-auto flex items-center gap-2" size="lg">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:empordajobs@gmail.com" className="text-primary">
                    empordajobs@gmail.com
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="text-sm text-gray-500">
              <p className="mb-2">
                #InteligenciaArtificial #IA #apps #automatizacion #tecnologia #innovacion #transformaciondigital #appia #empresastech
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}