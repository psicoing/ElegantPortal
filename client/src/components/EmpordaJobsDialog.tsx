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
import { Badge } from "@/components/ui/badge";

interface EmpordaJobsDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function EmpordaJobsDialog({ open, setOpen }: EmpordaJobsDialogProps) {
  const { t } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            EMPORDÀ JOBS
          </DialogTitle>

          <DialogDescription className="text-center text-lg pt-2">
            {t('empordajobs.dialog.subtitle')}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <section className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {t('empordajobs.dialog.description.title')}
            </h3>
            <p className="text-gray-700 mb-4">
              {t('empordajobs.dialog.description.content')}
            </p>
          </section>

          <section className="bg-blue-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">
              {t('empordajobs.dialog.features.title')}
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>{t('empordajobs.dialog.features.item1')}</li>
              <li>{t('empordajobs.dialog.features.item2')}</li>
              <li>{t('empordajobs.dialog.features.item3')}</li>
              <li>{t('empordajobs.dialog.features.item4')}</li>
            </ul>
          </section>

          <section className="bg-emerald-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-emerald-800">
              {t('empordajobs.dialog.pricing.title')}
            </h3>
            <p className="text-gray-700 mb-2">
              {t('empordajobs.dialog.pricing.content')}
            </p>
            <div className="bg-white p-4 rounded-md border border-emerald-200 shadow-sm">
              <div className="flex justify-between items-center">
                <span className="font-medium">{t('empordajobs.dialog.pricing.per_offer')}</span>
                <span className="text-xl font-bold text-emerald-700">1200 €</span>
              </div>
            </div>
          </section>
        </div>

        <DialogFooter className="mt-6">
          <div className="flex flex-col sm:flex-row gap-2 w-full justify-between items-center">
            <a href="https://ejobs.jobda.es/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button type="button" variant="default" className="w-full">
                {t('empordajobs.dialog.visit_button')}
              </Button>
            </a>
            <div className="flex gap-2 w-full sm:w-auto">
              <Button onClick={() => setOpen(false)} className="w-full sm:w-auto">
                {t('empordajobs.dialog.close')}
              </Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}