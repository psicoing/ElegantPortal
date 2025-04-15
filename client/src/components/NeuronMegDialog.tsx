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
import { PhoneCall, Mail, Home, HeartPulse, Users, Clock } from "lucide-react";

interface NeuronMegDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function NeuronMegDialog({ open, setOpen }: NeuronMegDialogProps) {
  const { t } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[560px] overflow-y-auto max-h-[90vh]">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-bold text-center text-primary">
            {t('neuronmeg.dialog.title')}
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600 mt-2">
            {t('neuronmeg.dialog.subtitle')}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <section>
            <p className="text-gray-700 font-medium">
              {t('neuronmeg.dialog.description')}
            </p>
          </section>
          
          <Separator />
          
          {/* Psicología Infantil a Domicilio */}
          <section>
            <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
              <Users className="h-5 w-5" /> {t('neuronmeg.dialog.children.title')}
            </h3>
            <p className="text-gray-700 mb-3">
              {t('neuronmeg.dialog.children.description')}
            </p>
            <div className="bg-gray-50 p-3 rounded-md">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <PhoneCall className="h-5 w-5 text-primary" />
                  <span className="text-gray-800">+34 660 45 21 36</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-gray-800">rmportbou@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Home className="h-5 w-5 text-primary" />
                  <span className="text-gray-800">{t('neuronmeg.dialog.coverage')}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2 italic">
              {t('neuronmeg.dialog.payment')}
            </p>
          </section>
          
          <Separator />
          
          {/* Psicología para Adultos a Domicilio */}
          <section>
            <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
              <HeartPulse className="h-5 w-5" /> {t('neuronmeg.dialog.adults.title')}
            </h3>
            <p className="text-gray-700 mb-3">
              {t('neuronmeg.dialog.adults.description')}
            </p>
            <div className="bg-gray-50 p-3 rounded-md">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <PhoneCall className="h-5 w-5 text-primary" />
                  <span className="text-gray-800">+34 660 45 21 36</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-gray-800">rmportbou@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Home className="h-5 w-5 text-primary" />
                  <span className="text-gray-800">{t('neuronmeg.dialog.coverage')}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2 italic">
              {t('neuronmeg.dialog.payment')}
            </p>
          </section>
          
          <Separator />
          
          {/* Psicología para Gente Mayor a Domicilio */}
          <section>
            <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
              <Clock className="h-5 w-5" /> {t('neuronmeg.dialog.elderly.title')}
            </h3>
            <p className="text-gray-700 mb-3">
              {t('neuronmeg.dialog.elderly.description')}
            </p>
            <div className="bg-gray-50 p-3 rounded-md">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <PhoneCall className="h-5 w-5 text-primary" />
                  <span className="text-gray-800">+34 660 45 21 36</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-gray-800">rmportbou@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Home className="h-5 w-5 text-primary" />
                  <span className="text-gray-800">{t('neuronmeg.dialog.coverage')}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2 italic">
              {t('neuronmeg.dialog.payment')}
            </p>
          </section>
        </div>
        
        <DialogFooter className="mt-6">
          <Button onClick={() => setOpen(false)}>
            {t('rewards.close')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}