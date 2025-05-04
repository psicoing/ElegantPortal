import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { MessageCircle, Brain, Bot, Phone, Mail, ActivitySquare, Users, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface NflowDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function NflowDialog({ open, setOpen }: NflowDialogProps) {
  const { t } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[560px] overflow-y-auto max-h-[90vh]">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-bold text-center text-blue-600">
            NFLOW
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600 mt-2">
            Apoyo psicológico mediante IA, conectando profesionales con quienes necesitan orientación
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <section>
            <p className="text-gray-700 mb-3">
              NFLOW es un innovador servicio de psicología asistido por inteligencia artificial que conecta a profesionales cualificados con personas que necesitan apoyo emocional y psicológico personalizado.
            </p>
            <p className="text-gray-700">
              Nuestro sistema combina la calidez humana con la tecnología más avanzada para ofrecer una experiencia de acompañamiento única y adaptada a cada usuario.
            </p>
          </section>
          
          <Separator />
          
          <section>
            <h3 className="text-lg font-semibold text-blue-600 mb-3">
              Características principales
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MessageCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-800">Atención psicológica personalizada</p>
                  <p className="text-sm text-gray-600">Adaptada a tus necesidades específicas y estilo de comunicación.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Bot className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-800">Asistente virtual 24/7</p>
                  <p className="text-sm text-gray-600">Acceso permanente a tu asistente personal entrenado con nuestro protocolo.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Brain className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-800">Respaldo científico</p>
                  <p className="text-sm text-gray-600">Tecnología basada en investigación neurocientífica y psicológica de vanguardia.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-800">Conexión con profesionales cualificados</p>
                  <p className="text-sm text-gray-600">Acceso a psicólogos certificados cuando necesites una intervención humana.</p>
                </div>
              </div>
            </div>
          </section>
          
          <Separator />
          
          <section className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-700 mb-3 flex items-center">
              <Heart className="h-5 w-5 mr-2" /> ¿Para quién es NFLOW?
            </h3>
            <ul className="space-y-2 ml-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-700">Personas que buscan apoyo emocional continuo</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-700">Quienes desean mejorar su bienestar mental diario</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-700">Profesionales con alto nivel de estrés</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-700">Estudiantes que necesitan gestionar la ansiedad</span>
              </li>
            </ul>
          </section>
          
          <section className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-indigo-700 mb-2 flex items-center">
              <ActivitySquare className="h-5 w-5 mr-2" /> Plan de suscripción
            </h3>
            <p className="text-gray-700 mb-3">
              Por solo <span className="font-semibold">14,99€ al mes</span>, obtén acceso ilimitado a NFLOW y conecta con nuestros profesionales cuando lo necesites.
            </p>
            <p className="text-sm text-indigo-600 font-medium">
              Prueba gratuita de 7 días disponible para nuevos usuarios.
            </p>
          </section>
          
          <Separator />
          
          <section>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Contacto
            </h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-600" />
                <span className="text-gray-700">+34 660 45 21 36</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-600" />
                <span className="text-gray-700">empordajobs@gmail.com</span>
              </div>
            </div>
          </section>
        </div>
        
        <DialogFooter className="mt-6">
          <div className="flex flex-col sm:flex-row gap-2 w-full justify-between items-center">
            <a href="https://nflow.jobda.es/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button type="button" variant="default" className="w-full">
                Acceder a NFLOW
              </Button>
            </a>
            <Button onClick={() => setOpen(false)} className="w-full sm:w-auto">
              Cerrar
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}