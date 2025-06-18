import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { ContactModal } from "./ContactModal";
import { WorkWithUsModal } from "./WorkWithUsModal";
import { AntifraudeCommitment } from "./AntifraudeCommitment";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 relative overflow-hidden">
      {/* Accent elements - decorative dots and lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700"></div>
      <div className="absolute bottom-0 left-0 opacity-5">
        <div className="grid grid-cols-6 gap-4">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-blue-400"></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand column */}
          <div className="md:col-span-4">
            <div className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">
              NFLOW - JOBDA
            </div>
            <p className="text-gray-400 text-sm max-w-xs mb-5 leading-relaxed">
              Brindando soluciones innovadoras para mejorar su experiencia digital.
            </p>
            <div className="backdrop-blur-sm bg-gray-800/70 rounded-xl px-5 py-4 text-sm border border-gray-700/50 shadow-lg">
              <p className="text-white font-medium mb-2">EMPORDAJOBS SL B02701100</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <p>Portbou, Girona, España</p>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <p>+34 660 45 21 36</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <a 
                    href="mailto:empordajobs@gmail.com" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    empordajobs@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Spacer */}
          <div className="md:col-span-2"></div>
          
          {/* Links columns */}
          <div className="md:col-span-3">
            <h3 className="font-medium text-lg mb-4 relative inline-block">
              Servicios
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://mental-chat-ai-rmportbou.replit.app/" 
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-1 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-px bg-blue-400"></span>
                  <span>NFLOW</span>
                </a>
              </li>
              <li>
                <a 
                  href="/ai-apps" 
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-1 group"
                >
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-px bg-blue-400"></span>
                  <span>APPIA</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="font-medium text-lg mb-4 relative inline-block">
              Enlaces
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-1 group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-px bg-blue-400"></span>
                  <span>Servicios</span>
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-1 group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-px bg-blue-400"></span>
                  <span>Testimonios</span>
                </a>
              </li>
              <li>
                <WorkWithUsModal>
                  <button className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-1 group">
                    <span className="w-0 group-hover:w-2 transition-all duration-300 h-px bg-blue-400"></span>
                    <span>Trabaja con nosotros</span>
                  </button>
                </WorkWithUsModal>
              </li>
              <li>
                <ContactModal>
                  <button className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-1 group">
                    <span className="w-0 group-hover:w-2 transition-all duration-300 h-px bg-blue-400"></span>
                    <span>Contacto</span>
                  </button>
                </ContactModal>
              </li>
              <li>
                <a 
                  href="/privacy" 
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-1 group"
                >
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-px bg-blue-400"></span>
                  <span>Política de Privacidad</span>
                </a>
              </li>
              <li>
                <button 
                  onClick={() => window.openCookiePreferences?.()}
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-1 group cursor-pointer"
                >
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-px bg-blue-400"></span>
                  <span>Preferencias de Cookies</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Antifraud Commitment - Visible standalone section */}
        <div className="w-full mx-auto max-w-3xl py-4">
          <AntifraudeCommitment />
        </div>
        
        {/* Footer bottom */}
        <div className="mt-4 pt-6 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <p className="text-gray-500 text-sm mb-2">
              &copy; {new Date().getFullYear()} EMPORDAJOBS SL. Todos los derechos reservados.
            </p>
            <a 
              href="https://replit.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-400 text-xs transition-colors duration-200"
            >
              Powered by Replit
            </a>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-800/70 p-2 rounded-full hover:bg-blue-600/20 transition-colors hover:text-blue-400 text-gray-400 border border-gray-700/50">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-5 w-5" />
            </a>
            
            <a href="#" className="bg-gray-800/70 p-2 rounded-full hover:bg-blue-600/20 transition-colors hover:text-blue-400 text-gray-400 border border-gray-700/50">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </a>
            
            <a href="#" className="bg-gray-800/70 p-2 rounded-full hover:bg-blue-600/20 transition-colors hover:text-blue-400 text-gray-400 border border-gray-700/50">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
