import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { CheckCircle2, Radio, Wifi, Network } from "lucide-react";
import telecosImage from "../assets/telecos.svg";

interface TelecosDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function TelecosDialog({ open, setOpen }: TelecosDialogProps) {
  const { t } = useLanguage();
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[625px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{t('service.telecos.title')}</DialogTitle>
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm inline-flex items-center mt-2">
            <span>{t('service.telecos.badge')}</span>
          </div>
        </DialogHeader>

        <div className="space-y-8 pt-4">
          <div>
            <h3 className="text-lg font-medium mb-3">¿Qué ofrecemos en Telecos?</h3>
            <p className="text-gray-600">
              Nuestra división de telecomunicaciones ofrece servicios profesionales para empresas y particulares, proporcionando soluciones integrales de comunicación, infraestructura de red y sistemas de transmisión adaptados a las necesidades específicas de cada cliente.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden">
            <img 
              src={telecosImage} 
              alt="Servicios de Telecomunicaciones" 
              className="w-full h-auto"
            />
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Principales servicios:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Network className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium">Redes de comunicación:</span>
                  <p className="text-gray-600 text-sm">Diseño, implementación y gestión de redes corporativas y domésticas con soporte para voz, datos y multimedia.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Radio className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium">Sistemas de transmisión:</span>
                  <p className="text-gray-600 text-sm">Soluciones de transmisión de datos por cable, fibra óptica y tecnologías inalámbricas optimizadas para máximo rendimiento.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Wifi className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium">Infraestructura técnica:</span>
                  <p className="text-gray-600 text-sm">Instalación y mantenimiento de equipamiento de telecomunicaciones, desde antenas hasta centros de datos.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-md font-medium mb-2">Sectores que atendemos</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Empresas</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Organismos públicos</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Centros educativos</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Residencial</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Sector sanitario</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Industria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <Button
            onClick={() => setOpen(false)}
            variant="outline"
          >
            Cerrar
          </Button>
          
          <Button
            className="bg-blue-600 hover:bg-blue-700"
          >
            Contactar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}