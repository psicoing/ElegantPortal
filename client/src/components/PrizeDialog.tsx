import React from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

interface PrizeDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function PrizeDialog({ open, setOpen }: PrizeDialogProps) {
  const { t } = useLanguage();
  
  // Estado para mostrar la vista de ganadores o detalles
  const [showWinners, setShowWinners] = React.useState(false);
  
  // Reiniciar la vista al cerrar el diálogo
  React.useEffect(() => {
    if (!open) {
      setShowWinners(false);
    }
  }, [open]);
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[600px] bg-gradient-to-b from-white to-blue-50">
        <DialogHeader>
          <DialogTitle className="flex items-center text-xl font-bold text-primary">
            <Trophy className="mr-2 h-6 w-6" />
            {showWinners ? t('rewards.winners') : t('rewards.discover')}
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          {showWinners ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-gray-700"
            >
              <div className="bg-blue-50 p-4 rounded-lg mb-4 text-center">
                <p className="italic">{t('rewards.no_winners_yet')}</p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-gray-700 whitespace-pre-line"
            >
              {t('rewards.details')}
            </motion.div>
          )}
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-6">
          {!showWinners && (
            <Button
              variant="outline"
              onClick={() => setShowWinners(true)}
              className="sm:mr-auto"
            >
              {t('rewards.winners')}
            </Button>
          )}
          
          {showWinners && (
            <Button
              variant="outline"
              onClick={() => setShowWinners(false)}
              className="sm:mr-auto"
            >
              {t('rewards.back')}
            </Button>
          )}
          
          <Button onClick={() => setOpen(false)}>
            {t('rewards.close')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}