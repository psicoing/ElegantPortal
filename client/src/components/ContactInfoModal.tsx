import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, Phone, Mail, Clock, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

interface ContactInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactInfoModal({ isOpen, onClose }: ContactInfoModalProps) {
  const { t } = useLanguage();

  const handleCall = () => {
    window.open("tel:+34660452136", "_self");
  };

  const handleEmail = () => {
    window.open("mailto:jobda@jobda.es?subject=Consulta de Inversión", "_self");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px] p-0">
        <div className="relative bg-white rounded-lg">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <DialogTitle className="text-xl font-semibold text-blue-600">
              {t('contact.modal.title')}
            </DialogTitle>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-gray-600 text-center mb-6">
              {t('contact.modal.subtitle')}
            </p>

            {/* Company Info */}
            <div className="bg-blue-50 rounded-lg p-4 mb-6 text-center">
              <Building2 className="mx-auto mb-2 text-blue-600" size={24} />
              <h3 className="font-semibold text-gray-900">EMPORDAJOBS SL</h3>
              <p className="text-sm text-gray-600">CIF: B02701100</p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-gray-900">{t('contact.modal.location')}</h4>
                  <p className="text-gray-600">Portbou, Girona, España</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-gray-900">{t('contact.modal.phone')}</h4>
                  <p className="text-blue-600 cursor-pointer hover:underline" onClick={handleCall}>
                    +34 660 45 21 36
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-gray-900">{t('contact.modal.email')}</h4>
                  <p className="text-blue-600 cursor-pointer hover:underline" onClick={handleEmail}>
                    jobda@jobda.es
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-gray-900">{t('contact.modal.schedule')}</h4>
                  <p className="text-gray-600">{t('contact.modal.schedule_hours')}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              <Button
                variant="outline"
                className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={handleCall}
              >
                <Phone size={16} className="mr-2" />
                {t('contact.modal.call')}
              </Button>
              <Button
                className="flex-1 bg-blue-600 hover:bg-blue-700"
                onClick={handleEmail}
              >
                <Mail size={16} className="mr-2" />
                {t('contact.modal.send_email')}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}