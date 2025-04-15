import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, Home, MapPin } from "lucide-react";
import neuronMegServicesImage from "../assets/neuronmeg_services.png";

interface NeuronMegDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function NeuronMegDialog({ open, setOpen }: NeuronMegDialogProps) {
  const { t } = useLanguage();
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {t('neuronmeg.dialog.title')}
          </DialogTitle>
          <DialogDescription className="text-center text-lg">
            {t('neuronmeg.dialog.subtitle')}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mb-6 flex justify-center">
          <img 
            src={neuronMegServicesImage} 
            alt="NeuronMeg - Servicios de psicología a domicilio" 
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>
        
        <div className="mt-4 space-y-6">
          {/* Descripción general del servicio */}
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="mb-3">
              {t('neuronmeg.dialog.description')}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span>{t('neuronmeg.dialog.coverage')}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('neuronmeg.dialog.payment')}
            </p>
          </div>
          
          <Separator />
          
          {/* Servicios para niños */}
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-indigo-100 p-2 rounded-full">
                <Home className="h-5 w-5 text-indigo-600" />
              </div>
              <h3 className="text-lg font-medium">{t('neuronmeg.dialog.children.title')}</h3>
            </div>
            <p className="text-gray-600 mb-3">{t('neuronmeg.dialog.children.description')}</p>
          </div>
          
          {/* Servicios para adultos */}
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-emerald-100 p-2 rounded-full">
                <Home className="h-5 w-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-medium">{t('neuronmeg.dialog.adults.title')}</h3>
            </div>
            <p className="text-gray-600 mb-3">{t('neuronmeg.dialog.adults.description')}</p>
          </div>
          
          {/* Servicios para personas mayores */}
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <Home className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-medium">{t('neuronmeg.dialog.elderly.title')}</h3>
            </div>
            <p className="text-gray-600 mb-3">{t('neuronmeg.dialog.elderly.description')}</p>
          </div>
          
          <Separator />
          
          {/* Información de contacto */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-3 text-center">{t('neuronmeg.dialog.contact.title')}</h3>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>+34 660 45 21 36</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>empordajobs@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>rmportbou@gmail.com</span>
              </div>
            </div>
            
            <p className="mt-4 text-sm text-center text-muted-foreground">
              Grupo empresarial EmpordaJobs SL B02701100
            </p>
          </div>
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row sm:justify-between">
          <Badge variant="outline" className="mb-2 sm:mb-0">
            {t('neuronmeg.badge')}
          </Badge>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              {t('neuronmeg.dialog.close')}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}