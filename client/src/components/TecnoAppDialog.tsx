import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { CheckCircle2, Laptop, Cloud, Code } from "lucide-react";
import tecnoappImage from "../assets/tecnoapp.svg";

interface TecnoAppDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function TecnoAppDialog({ open, setOpen }: TecnoAppDialogProps) {
  const { t } = useLanguage();
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[625px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{t('service.tecnoapp.title')}</DialogTitle>
          <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm inline-flex items-center mt-2">
            <span>{t('service.tecnoapp.badge')}</span>
          </div>
        </DialogHeader>

        <div className="space-y-8 pt-4">
          <div>
            <h3 className="text-lg font-medium mb-3">¿Qué es TecnoApp?</h3>
            <p className="text-gray-600">
              TecnoApp es nuestra división especializada en el desarrollo de soluciones tecnológicas avanzadas para empresas y startups que buscan transformar sus procesos y servicios mediante la aplicación de tecnologías de vanguardia.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden">
            <img 
              src={tecnoappImage} 
              alt="TecnoApp" 
              className="w-full h-auto"
            />
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Nuestras soluciones incluyen:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Laptop className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium">Desarrollo multiplataforma:</span>
                  <p className="text-gray-600 text-sm">Aplicaciones que funcionan perfectamente en web, móvil y escritorio con una única base de código.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Cloud className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium">Integración IoT y Cloud:</span>
                  <p className="text-gray-600 text-sm">Conectamos dispositivos físicos con infraestructuras en la nube para crear ecosistemas de datos inteligentes.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Code className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium">Desarrollo a medida:</span>
                  <p className="text-gray-600 text-sm">Creamos soluciones personalizadas que se adaptan exactamente a las necesidades específicas de cada cliente.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-md font-medium mb-2">Tecnologías que utilizamos</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">React Native</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Flutter</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">AWS</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Google Cloud</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">IoT</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Machine Learning</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Blockchain</span>
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
            Solicitar información
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}