import { Facebook, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-bold mb-2 font-sans">NFLOW - JOBDA</div>
            <p className="text-gray-400 text-sm max-w-xs mb-4">
              Brindando soluciones innovadoras para mejorar su experiencia digital.
            </p>
            <div className="bg-gray-800 rounded-lg px-4 py-3 text-sm">
              <p className="text-white font-semibold mb-1">EMPORDAJOBS SL B02701100</p>
              <p className="text-gray-400">Portbou, Girona, España</p>
              <p className="text-gray-400">+34 660 45 21 36</p>
              <a 
                href="mailto:empordajobs@gmail.com" 
                className="text-primary hover:underline"
              >
                empordajobs@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0">
            <div>
              <h3 className="font-sans font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://mental-chat-ai-rmportbou.replit.app/" 
                    className="text-gray-400 hover:text-white transition text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NFLOW
                  </a>
                </li>
                <li>
                  <a 
                    href="https://ejobs-spain-rmportbou.replit.app/" 
                    className="text-gray-400 hover:text-white transition text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    JOBDA
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-sans font-semibold mb-4">Enlaces</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition text-sm">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-400 hover:text-white transition text-sm">
                    Testimonios
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition text-sm">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} EMPORDAJOBS SL. Todos los derechos reservados.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
            
            <a href="#" className="text-gray-400 hover:text-white transition">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            
            <a href="#" className="text-gray-400 hover:text-white transition">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
