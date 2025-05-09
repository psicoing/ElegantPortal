import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import saludaliaInfoImage from "../assets/saludalia/saludalia_info.png";

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
            <h3 className="text-lg font-medium mb-3">¿Qué es Saludalia?</h3>
            <p className="text-gray-600">
              Saludalia es una plataforma abierta y flexible diseñada para dar visibilidad a profesionales de la salud, independientemente de su especialidad o ubicación.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden">
            <img 
              src={saludaliaInfoImage} 
              alt="Información de Saludalia" 
              className="w-full h-auto"
            />
          </div>

          <div>
            <h4 className="text-md font-semibold mb-2">Beneficios de unirte</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-sky-100 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>Promocionamos tu perfil en nuestro portal para conectar con pacientes de toda España</span>
              </li>
              <li className="flex items-start">
                <div className="bg-sky-100 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>Sin controles ni supervisores - Respetamos tu autonomía profesional</span>
              </li>
              <li className="flex items-start">
                <div className="bg-sky-100 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>Participación en un foro privado opcional para compartir conocimientos</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-2">Precios</h4>
            <div className="bg-sky-50 p-4 rounded-lg">
              <div className="text-center">
                <span className="text-3xl font-bold text-sky-700">9,99€</span>
                <span className="text-gray-600 ml-1">/ mes</span>
              </div>
              <p className="text-center text-gray-600 mt-2">Por solo 9.99 € al mes, sin comisiones por consulta</p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-2">¡Apertura oficial!</h4>
            <p className="text-gray-700">Candidaturas abiertas: 1 de Junio de 2025</p>
            <p className="text-gray-700">Primeros 100 perfiles sin cuota de alta</p>
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