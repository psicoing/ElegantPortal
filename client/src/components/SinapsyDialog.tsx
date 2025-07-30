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
import { PhoneCall, Mail, Globe, Brain, Book, Download, Users, FileText } from "lucide-react";

interface SinapsyDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function SinapsyDialog({ open, setOpen }: SinapsyDialogProps) {
  const { t } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[560px] overflow-y-auto max-h-[90vh]">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-bold text-center text-primary">
            SINAPSY
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600 mt-2">
            {t('sinapsy.dialog.subtitle')}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <section>
            <p className="text-gray-700 font-medium">
              <strong>SINAPSY</strong> es una publicación independiente, técnica y humana a la vez. 
              Nace con el objetivo de acercar la psicología y la neurociencia al día a día de las personas, sin renunciar al rigor profesional.
            </p>
          </section>
          
          <Separator />
          
          <section>
            <h3 className="text-lg font-semibold text-primary mb-2">
              {t('sinapsy.dialog.features')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Brain className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-700">Artículos accesibles para todo el mundo</span>
              </div>
              <div className="flex items-start space-x-3">
                <Book className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-700">Zona técnica central con contenido científico de alto nivel</span>
              </div>
              <div className="flex items-start space-x-3">
                <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-700">Entrevistas, reflexiones clínicas y guías prácticas</span>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-700">Colaboraciones con profesionales colegiados del ámbito de la salud</span>
              </div>
              <div className="flex items-start space-x-3">
                <Download className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-700">Recursos descargables en cada número</span>
              </div>
            </div>
          </section>
          
          <Separator />
          
          <section>
            <h3 className="text-lg font-semibold text-primary mb-2">
              {t('sinapsy.dialog.participate')}
            </h3>
            <p className="text-gray-700 mb-3">
              Si eres profesional de la salud y estás colegiado/a, puedes enviar tus artículos para ser publicados. Contacta con nosotros:
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-800">rmportbou@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneCall className="h-5 w-5 text-primary" />
                <span className="text-gray-800">+34 660 45 21 36</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-gray-800">www.jobda.es</span>
              </div>
            </div>
          </section>
          
          <Separator />
          
          <section>
            <p className="text-gray-700 mb-2">
              Suscríbete por solo 4,99 € al trimestre y accede a todos los contenidos de cada edición.
            </p>
            <p className="text-gray-700 font-medium">
              <strong>SINAPSY</strong> está hecha para pensar, para sentir, y para transformar.
            </p>
          </section>
        </div>
        
        <DialogFooter className="mt-6">
          <div className="flex flex-col sm:flex-row gap-2 w-full justify-between items-center">
            <a href="https://sinapsy.jobda.es/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button type="button" variant="default" className="w-full">
                {t('sinapsy.dialog.visit_website')}
              </Button>
            </a>
            <div className="flex gap-2 w-full sm:w-auto">
              <Button onClick={() => setOpen(false)} className="w-full sm:w-auto">
                {t('rewards.close')}
              </Button>
              <Button variant="outline" onClick={() => setOpen(false)} className="w-full sm:w-auto">
                {t('sinapsy.dialog.subscribe')}
              </Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}