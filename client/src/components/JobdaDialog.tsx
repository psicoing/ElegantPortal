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

interface JobdaDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function JobdaDialog({ open, setOpen }: JobdaDialogProps) {
  const { t } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[560px] overflow-y-auto max-h-[90vh]">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-bold text-center text-primary">
            {t('jobda.dialog.title')}
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600 mt-2">
            {t('jobda.dialog.description')}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-semibold text-primary mb-2">
              {t('jobda.dialog.section1.title')}
            </h3>
            <p className="text-gray-700">
              {t('jobda.dialog.section1.content')}
            </p>
          </section>
          
          <Separator />
          
          <section>
            <h3 className="text-lg font-semibold text-primary mb-2">
              {t('jobda.dialog.section2.title')}
            </h3>
            <p className="text-gray-700">
              {t('jobda.dialog.section2.content')}
            </p>
          </section>
          
          <Separator />
          
          <section>
            <h3 className="text-lg font-semibold text-primary mb-2">
              {t('jobda.dialog.section3.title')}
            </h3>
            <p className="text-gray-700">
              {t('jobda.dialog.section3.content')}
            </p>
          </section>
          
          <Separator />
          
          <section>
            <p className="text-gray-700 mb-4">
              {t('jobda.dialog.contact')}
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
          <Button onClick={() => setOpen(false)}>
            {t('rewards.close')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}