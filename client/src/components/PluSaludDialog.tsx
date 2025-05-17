import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { CheckCircle2 } from "lucide-react";
import vrTherapyImage from "../assets/vr_therapy.svg";
import { Badge } from "@/components/ui/badge";

interface PluSaludDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function PluSaludDialog({ open, setOpen }: PluSaludDialogProps) {
  const { t } = useLanguage();
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[90vw] max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center space-x-2">
            <Badge className="bg-blue-600">
              {t('service.plusalud.badge')}
            </Badge>
            <span className="text-sm text-gray-500">
              XR Health
            </span>
          </div>
          <DialogTitle className="text-2xl mt-2">{t('service.plusalud.title')}</DialogTitle>
          <DialogDescription className="text-base">
            {t('service.plusalud.description')}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="rounded-lg overflow-hidden mb-6 bg-blue-50 p-4">
              <img 
                src={vrTherapyImage} 
                alt="Terapia con realidad virtual" 
                className="w-full h-auto object-cover"
              />
            </div>

            <h3 className="font-bold text-lg mb-3">
              Terapia de psicología
            </h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Descubre el futuro de la psicología con una terapia que combina comodidad e innovación tecnológica. Nuestras soluciones de realidad virtual ofrecen una nueva forma de acceder a la terapia de psicología, haciendo que la atención sea más accesible y eficaz.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-3">
              Tratamientos disponibles
            </h3>
            <div className="flex flex-wrap gap-1 sm:gap-2 mb-6">
              <Badge variant="outline" className="border-blue-500 text-blue-700 text-xs sm:text-sm whitespace-nowrap mb-1">Ansiedad Generalizada</Badge>
              <Badge variant="outline" className="border-blue-500 text-blue-700 text-xs sm:text-sm whitespace-nowrap mb-1">Ansiedad Social</Badge>
              <Badge variant="outline" className="border-blue-500 text-blue-700 text-xs sm:text-sm whitespace-nowrap mb-1">TEA</Badge>
              <Badge variant="outline" className="border-blue-500 text-blue-700 text-xs sm:text-sm whitespace-nowrap mb-1">TDAH</Badge>
              <Badge variant="outline" className="border-blue-500 text-blue-700 text-xs sm:text-sm whitespace-nowrap mb-1">Trastornos Adictivos</Badge>
              <Badge variant="outline" className="border-blue-500 text-blue-700 text-xs sm:text-sm whitespace-nowrap mb-1">TCA</Badge>
              <Badge variant="outline" className="border-blue-500 text-blue-700 text-xs sm:text-sm whitespace-nowrap mb-1">Bullying</Badge>
              <Badge variant="outline" className="border-blue-500 text-blue-700 text-xs sm:text-sm whitespace-nowrap mb-1">TOC</Badge>
              <Badge variant="outline" className="border-blue-500 text-blue-700 text-xs sm:text-sm whitespace-nowrap mb-1">TEPT</Badge>
              <Badge variant="outline" className="border-blue-500 text-blue-700 text-xs sm:text-sm whitespace-nowrap mb-1">Trauma</Badge>
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-3 sm:p-4">
                <h3 className="font-bold text-blue-700 mb-1 sm:mb-2 text-sm sm:text-base">
                  Recibe el visor de realidad virtual en tu domicilio
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  Utiliza el visor de RV durante las sesiones de telemedicina con tu terapeuta y para las tareas asignadas entre sesiones.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-3 sm:p-4">
                <h3 className="font-bold text-blue-700 mb-1 sm:mb-2 text-sm sm:text-base">
                  Plan de atención personalizado
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  Recibe un plan personalizado adaptado a tus necesidades y sigue tu evolución con tu terapeuta para asegurar una mejora continua.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between mt-4 sm:mt-6">
          <Button
            onClick={() => setOpen(false)}
            variant="outline"
            className="border-gray-300 text-xs sm:text-sm py-1 px-2 sm:px-4 h-8 sm:h-10"
          >
            Cerrar
          </Button>
          
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm py-1 px-2 sm:px-4 h-8 sm:h-10"
            asChild
          >
            <a href="#contact" onClick={() => setOpen(false)}>
              Encuentra un terapeuta
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}