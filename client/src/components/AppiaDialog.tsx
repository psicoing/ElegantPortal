import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/lib/language-context";
import { PhoneCall, Mail } from "lucide-react";

interface AppiaDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function AppiaDialog({ open, setOpen }: AppiaDialogProps) {
  const { t } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[560px] overflow-y-auto max-h-[90vh]">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-bold text-center text-primary">
            🚀 Appia: Aplicaciones Inteligentes con IA
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600 mt-2">
            Desarrollo de aplicaciones web y móviles con inteligencia artificial
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-semibold text-primary mb-2">
              Características principales
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">🧠</span>
                <span>IA personalizada y entrenada para tu negocio</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📊</span>
                <span>Base de datos robusta y escalable</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🧩</span>
                <span>Backend con panel interno de gestión</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📱</span>
                <span>Webapp o app móvil (según necesidad)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🔐</span>
                <span>Seguridad y privacidad garantizadas</span>
              </li>
            </ul>
          </section>
          
          <Separator />
          
          <section>
            <h3 className="text-lg font-semibold text-primary mb-2">
              Costes reales de una app profesional con IA
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2">🔹</span>
                <span>Desarrollo inicial completo: entre <strong>6.000 y 12.000 €</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🔹</span>
                <span>Infraestructura anual (hosting, tokens IA, BBDD): <strong>1.200 – 2.000 €</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🔹</span>
                <span>Mantenimiento y soporte técnico: desde <strong>1.200 €/año</strong></span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="font-medium">🎯 Inversión total primer año: entre <strong>8.400 y 15.000 €</strong>, según la complejidad y el volumen de uso.</p>
            </div>
          </section>
          
          <Separator />
          
          <section>
            <h3 className="text-lg font-semibold text-primary mb-2">
              Desarrollo rápido y efectivo
            </h3>
            <p className="text-gray-700 mb-2">📲 En solo 30 días puedes tener tu primera versión funcionando.</p>
            <p className="text-gray-700">📩 Te preparamos un prototipo funcional en 48h tras conocer tu idea.</p>
          </section>
          
          <Separator />
          
          <section>
            <p className="text-gray-700 mb-4">
              Para más información sobre nuestros servicios de desarrollo tecnológico, contáctanos en:
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <PhoneCall className="h-5 w-5 text-primary" />
                <span className="text-gray-800">+34 660 45 21 36</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-800">empordajobs@gmail.com</span>
              </div>
            </div>
          </section>
        </div>
        
        <DialogFooter className="mt-6">
          <div className="flex flex-col sm:flex-row gap-2 w-full justify-between items-center">
            <Button type="button" variant="default" className="w-full sm:w-auto">
              <a href="https://neuro-consulta-rmportbou.replit.app/" target="_blank" rel="noopener noreferrer" onClick={() => {
                setOpen(false);
              }}>
                Ver más detalles
              </a>
            </Button>
            <Button onClick={() => setOpen(false)} className="w-full sm:w-auto">
              {t('rewards.close')}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}