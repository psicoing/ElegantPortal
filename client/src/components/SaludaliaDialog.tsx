import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";

interface SaludaliaDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function SaludaliaDialog({ open, setOpen }: SaludaliaDialogProps) {
  const { t } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[625px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">SALUDALIA</DialogTitle>
          <div className="bg-sky-100 text-sky-700 px-3 py-1 rounded-md text-sm inline-flex items-center mt-2">
            <span>{t('service.saludalia.badge')}</span>
          </div>
        </DialogHeader>

        <div className="space-y-8 pt-4">
          <div>
            <h3 className="text-lg font-medium mb-3">{t('service.saludalia.description')}</h3>
            <p className="text-gray-600">
              SALUDALIA es un servicio integral de salud que combina la atención médica tradicional con las últimas innovaciones en telemedicina y seguimiento personalizado.
            </p>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-2">Servicios principales</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-sky-100 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>Medicina preventiva personalizada</span>
              </li>
              <li className="flex items-start">
                <div className="bg-sky-100 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>Consultas presenciales y telemedicina avanzada</span>
              </li>
              <li className="flex items-start">
                <div className="bg-sky-100 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>Seguimiento personalizado con tecnología de vanguardia</span>
              </li>
              <li className="flex items-start">
                <div className="bg-sky-100 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>Integración de servicios de salud física y mental</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-2">Nuestra filosofía</h4>
            <p className="text-gray-600 mb-4">
              En SALUDALIA entendemos la salud como un estado completo de bienestar físico, mental y social. Nuestro enfoque integra las últimas tecnologías médicas con un trato humano y cercano.
            </p>
            <p className="text-gray-600">
              Cada paciente recibe un plan de cuidado personalizado que evoluciona con sus necesidades, apoyado por un equipo multidisciplinar de profesionales.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <a
                href="https://saludalia.jobda.es"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visitar SALUDALIA
              </a>
            </Button>
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
            >
              {t('empordajobs.dialog.close')}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}