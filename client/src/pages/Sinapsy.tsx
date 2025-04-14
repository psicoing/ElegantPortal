import { useEffect } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileMenu } from "@/components/MobileMenu";
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Link } from "wouter";
import { CookieBanner } from "@/components/CookieBanner";

export default function Sinapsy() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header toggleMobileMenu={toggleMobileMenu} />
      <MobileMenu isOpen={isMobileMenuOpen} closeMobileMenu={closeMobileMenu} />
      
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">SINAPSY</h1>
            <h2 className="text-xl md:text-2xl font-semibold opacity-90">
              Revista digital de Psicología, Neurociencias y Salud para todos los públicos
            </h2>
          </div>
          
          <div className="p-6 md:p-8">
            <p className="text-gray-700 mb-6 text-lg">
              <strong className="text-blue-700">SINAPSY</strong> es una publicación independiente, técnica y humana a la vez. 
              Nace con el objetivo de acercar la psicología y la neurociencia al día a día de las personas, sin renunciar al rigor profesional.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-2xl text-blue-600 mr-2">🧠</span>
                  <span>Artículos accesibles para todo el mundo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl text-blue-600 mr-2">📚</span>
                  <span>Zona técnica central con contenido científico de alto nivel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl text-blue-600 mr-2">💬</span>
                  <span>Entrevistas, reflexiones clínicas y guías prácticas</span>
                </li>
              </ul>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-2xl text-blue-600 mr-2">👨‍⚕️</span>
                  <span>Colaboraciones con profesionales colegiados del ámbito de la salud</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl text-blue-600 mr-2">📥</span>
                  <span>Recursos descargables en cada número</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl text-blue-600 mr-2">📦</span>
                  <span>Disponible en formato digital, con proyección en papel para distribución selectiva</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 mb-8">
              Cada número de SINAPSY está estructurado para que cualquier lector pueda disfrutarlo, pero también para ofrecer contenidos que incluso revistas científicas valorarían.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-semibold mb-3 flex items-center text-blue-800">
                <span className="text-2xl mr-2">💡</span> ¿Quieres participar?
              </h3>
              <p className="text-gray-700 mb-4">
                Si eres profesional de la salud y estás colegiado/a, puedes enviar tus artículos para ser publicados. Contacta con nosotros:
              </p>

              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-xl text-blue-600 mr-2">📧</span>
                  <span>Correo: <a href="mailto:rmportbou@gmail.com" className="text-blue-600 hover:underline">rmportbou@gmail.com</a></span>
                </li>
                <li className="flex items-center">
                  <span className="text-xl text-blue-600 mr-2">📱</span>
                  <span>WhatsApp: <a href="tel:+34660452136" className="text-blue-600 hover:underline">660 45 21 36</a></span>
                </li>
                <li className="flex items-center">
                  <span className="text-xl text-blue-600 mr-2">🌐</span>
                  <span>Más información en: <a href="https://www.jobda.es" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.jobda.es</a></span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
              <p className="text-gray-700 mb-4">
                ➡️ Suscríbete por solo <strong className="text-blue-700">4,99 € al trimestre</strong> y accede a todos los contenidos de cada edición.
              </p>
              <p className="text-gray-800 font-medium text-lg">
                <strong className="text-blue-700">SINAPSY</strong> está hecha para pensar, para sentir, y para transformar.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Link href="/">
                <a className="inline-flex items-center text-blue-600 hover:text-blue-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Volver a la página principal
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <Toaster />
      <CookieBanner />
    </div>
  );
}