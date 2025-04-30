import { Shield, MapPin, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function AntifraudeCommitment() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-8 border-t border-gray-800/50 py-3">
      <div 
        className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-[90px] opacity-100'} overflow-hidden`}
      >
        <div className="bg-gradient-to-b from-gray-800/60 to-gray-900/80 border border-gray-700/50 rounded-xl p-5 shadow-lg backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-5 w-5 text-yellow-400" />
            <h3 className="text-xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
              Compromiso Antifraude y Transparencia
            </h3>
          </div>
          
          <div className="space-y-5 text-sm">
            <p className="text-gray-300 leading-relaxed">
              En <span className="text-red-400 font-medium">Jobda.es</span>, liderada por Ramón Molons de San Román, ofrecemos servicios 
              profesionales con la máxima seriedad y confianza. Somos una empresa registrada 
              con NIF <span className="font-medium text-blue-300">B02701100</span> y nuestro director está colegiado con el número <span className="font-medium text-blue-300">7851</span> en el 
              Colegio de Psicólogos de Catalunya.
            </p>
            
            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-800/30">
              <div className="font-medium mb-2 text-gray-200">Nos desplazamos a empresas o domicilios para atender tus necesidades de manera personalizada. Disponemos de despachos profesionales en:</div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-pink-500"></div>
                  <span>Avenida Marigane 28, 4A, Portbou, CP 17497</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-pink-500"></div>
                  <span>Ciutat Planas 15, Figueres, CP 17600</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-red-400" />
                  <span>Contáctanos:</span>
                  <a 
                    href="https://jobda.es" 
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    jobda.es
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <div className="bg-green-400/20 p-1 rounded mt-0.5">
                  <div className="h-2.5 w-2.5 bg-green-500 rounded-sm"></div>
                </div>
                <p className="text-gray-300">Proporcionamos datos básicos de contacto y enviamos un código de protección mediante el encriptado de WhatsApp para garantizar la seguridad de la llamada.</p>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="bg-green-400/20 p-1 rounded mt-0.5">
                  <div className="h-2.5 w-2.5 bg-green-500 rounded-sm"></div>
                </div>
                <p className="text-gray-300">Servicios presenciales y desplazamientos a tu ubicación.</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Este aviso refleja nuestro compromiso con la <span className="font-medium text-blue-300">transparencia</span> y la lucha contra el 
              fraude, protegiendo tus intereses y combatiendo el marketing negativo en redes 
              sociales.
            </p>
            
            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-800/30 mt-4">
              <div className="font-semibold text-center text-gray-200 mb-2">Sistema de Seguridad Avanzado</div>
              <p className="text-gray-300 mb-2 text-sm">
                Utilizamos tecnología de IA y videollamada para verificar la identidad de nuestro director 
                mediante DNI y foto dinámica, garantizando que hablas directamente con Ramón Molons 
                de San Román, director de Jobda.
              </p>
              <p className="text-gray-300 text-sm">
                Implementamos preguntas de seguridad personalizadas para validar la autenticidad de 
                nuestras comunicaciones, asegurando una experiencia confiable y segura.
              </p>
            </div>
            
            <div className="flex justify-center mt-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
                <div className="text-sm">
                  <span className="text-gray-400">Consulta nuestra </span>
                  <a 
                    href="/privacy" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Política de Privacidad
                  </a>
                  <span className="text-gray-400"> para más detalles sobre nuestras medidas antifraude.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center -mt-1">
        <Button 
          variant={isExpanded ? "ghost" : "default"} 
          className={`text-sm ${isExpanded ? 'text-gray-400 hover:text-blue-400' : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white'} transition-colors focus:ring-0 focus:ring-offset-0`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Mostrar menos' : 'Ver certificado antifraude'}
          {!isExpanded && <Shield className="ml-2 h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
}