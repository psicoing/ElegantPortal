import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { CheckCircle2, Terminal, GitBranch, Code } from "lucide-react";
import cplusplusImage from "../assets/cplusplus.svg";

interface CPlusPlusDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function CPlusPlusDialog({ open, setOpen }: CPlusPlusDialogProps) {
  const { t } = useLanguage();
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[625px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{t('service.cplusplus.title')}</DialogTitle>
          <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-md text-sm inline-flex items-center mt-2">
            <span>{t('service.cplusplus.badge')}</span>
          </div>
        </DialogHeader>

        <div className="space-y-8 pt-4">
          <div>
            <h3 className="text-lg font-medium mb-3">Desarrollo en C++</h3>
            <p className="text-gray-600">
              Nuestra división de desarrollo en C++ ofrece soluciones de software de alto rendimiento para aplicaciones que requieren velocidad, eficiencia y control preciso sobre los recursos del sistema. Ideal para software crítico donde el rendimiento es fundamental.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden">
            <img 
              src={cplusplusImage} 
              alt="C++ Development" 
              className="w-full h-auto"
            />
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Especialidades de desarrollo:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Terminal className="h-5 w-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium">Software a medida:</span>
                  <p className="text-gray-600 text-sm">Desarrollo de aplicaciones completamente personalizadas que se ajustan perfectamente a los requisitos específicos de cada proyecto.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Code className="h-5 w-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium">Optimización de código:</span>
                  <p className="text-gray-600 text-sm">Mejoramos el rendimiento de aplicaciones existentes, reduciendo el uso de memoria y acelerando el tiempo de ejecución.</p>
                </div>
              </li>
              <li className="flex items-start">
                <GitBranch className="h-5 w-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium">Aplicaciones multiplataforma:</span>
                  <p className="text-gray-600 text-sm">Desarrollo de software que funciona en múltiples sistemas operativos manteniendo un alto rendimiento en cada plataforma.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-md font-medium mb-2">Áreas de aplicación</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Videojuegos</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Software financiero</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Sistemas embebidos</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Simulaciones científicas</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Procesamiento de imágenes</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Aplicaciones en tiempo real</span>
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
            className="bg-purple-600 hover:bg-purple-700"
          >
            Solicitar presupuesto
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}