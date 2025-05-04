import { CreditCard, Lightbulb, LineChart, Lock, Mail, ScrollText, Users, Globe, CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { useState, useEffect } from "react";

export function InvestorsModal() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  // Controladores para abrir/cerrar modal
  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
    // Retrasar el reseteo de la pestaña para que no se vea el cambio durante la transición
    setTimeout(() => setActiveTab("overview"), 300);
  };

  // Manejar clics fuera del modal para cerrarlo
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Tecla Escape para cerrar el modal
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
      // Asegurarnos de restaurar overflow al desmontar
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Renderizar botón de inversores en el menú móvil
  return (
    <>
      <button
        className="font-sans font-medium text-blue-600 hover:text-blue-700 transition py-2 text-left w-full border-b border-gray-100 font-semibold"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          openModal();
        }}
      >
        {t('nav.investors')}
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 transition-all"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-6">
              {/* Botón para cerrar */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Cerrar"
              >
                <X size={24} />
              </button>

              {/* Encabezado */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">{t('investors.title')}</h2>
                <p className="text-gray-600">{t('investors.subtitle')}</p>
              </div>

              {/* Pestañas */}
              <div className="mb-6">
                <div className="flex border-b">
                  <button
                    className={`flex-1 py-2 px-4 text-center ${
                      activeTab === "overview"
                        ? "border-b-2 border-blue-600 text-blue-600 font-medium"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab("overview")}
                  >
                    {t('investors.tab.overview')}
                  </button>
                  <button
                    className={`flex-1 py-2 px-4 text-center ${
                      activeTab === "options"
                        ? "border-b-2 border-blue-600 text-blue-600 font-medium"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab("options")}
                  >
                    {t('investors.tab.options')}
                  </button>
                  <button
                    className={`flex-1 py-2 px-4 text-center ${
                      activeTab === "contact"
                        ? "border-b-2 border-blue-600 text-blue-600 font-medium"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab("contact")}
                  >
                    {t('investors.tab.contact')}
                  </button>
                </div>
              </div>

              {/* Contenido de las pestañas */}
              <div className="mt-4">
                {/* Pestaña de resumen */}
                {activeTab === "overview" && (
                  <div className="space-y-4">
                    <div className="grid gap-4">
                      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                        <h3 className="font-semibold text-blue-900 flex items-center gap-2 mb-2">
                          <Lightbulb size={18} className="text-blue-500" />
                          {t('investors.what_is')}
                        </h3>
                        <p className="text-sm text-gray-700">
                          {t('investors.chatbot_description')}
                        </p>
                        <p className="text-sm font-medium text-blue-700 mt-1">
                          {t('investors.price_info')}
                        </p>
                        <p className="text-sm text-gray-700 mt-1">
                          {t('investors.tech_info')}
                        </p>
                      </div>

                      <div className="bg-purple-50 border border-purple-100 rounded-lg p-4">
                        <h3 className="font-semibold text-purple-900 flex items-center gap-2 mb-2">
                          <LineChart size={18} className="text-purple-500" />
                          {t('investors.projection_title')}
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-purple-500 mt-0.5">📈</span>
                            {t('investors.projection_users')}
                          </li>
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-purple-500 mt-0.5">🌍</span>
                            {t('investors.market_size')}
                          </li>
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-purple-500 mt-0.5">⚙️</span>
                            {t('investors.scalability')}
                          </li>
                        </ul>
                      </div>

                      <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                        <h3 className="font-semibold text-green-900 flex items-center gap-2 mb-2">
                          <CheckCircle2 size={18} className="text-green-500" />
                          {t('investors.company_info')}
                        </h3>
                        <p className="text-sm text-gray-700">
                          {t('investors.company_description')}
                        </p>
                        <p className="text-sm font-medium text-green-700 mt-1">
                          {t('investors.company_legal')}
                        </p>
                      </div>

                      <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
                        <h3 className="font-semibold text-amber-900 flex items-center gap-2 mb-2">
                          <CreditCard size={18} className="text-amber-500" />
                          {t('investors.investment_info')}
                        </h3>
                        <p className="text-sm text-gray-700">
                          {t('investors.development_cost')}
                        </p>
                        <p className="text-sm text-gray-700 mt-1">
                          {t('investors.founder_funded')}
                        </p>
                        <p className="text-sm font-medium text-amber-700 mt-1">
                          {t('investors.seeking_boost')}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center mt-4">
                      <Button
                        onClick={() => setActiveTab("options")}
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                      >
                        {t('investors.see_options')}
                      </Button>
                    </div>
                  </div>
                )}

                {/* Pestaña de opciones */}
                {activeTab === "options" && (
                  <div className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-6 bg-blue-500 text-white text-xs flex items-center justify-center transform rotate-45 translate-y-2 translate-x-6">
                          {t('investors.most_popular')}
                        </div>
                        <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                          <Lock size={18} className="text-blue-600" />
                          SAFE ({t('investors.private_contract')})
                        </h3>
                        <ul className="space-y-3 mt-4">
                          <li className="flex items-start gap-2 text-sm">
                            <span className="text-blue-500 font-bold">🔒</span>
                            <span>{t('investors.no_notary')}</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm">
                            <span className="text-blue-500 font-bold">💶</span>
                            <span>{t('investors.min_shares_safe')}</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm">
                            <span className="text-blue-500 font-bold">📦</span>
                            <span>{t('investors.min_amount_safe')}</span>
                          </li>
                        </ul>
                        <div className="mt-6">
                          <Button
                            onClick={() => setActiveTab("contact")}
                            className="w-full bg-blue-600 hover:bg-blue-700"
                          >
                            {t('investors.select_safe')}
                          </Button>
                        </div>
                      </div>

                      <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-5">
                        <h3 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
                          <ScrollText size={18} className="text-indigo-600" />
                          {t('investors.notarial')}
                        </h3>
                        <ul className="space-y-3 mt-4">
                          <li className="flex items-start gap-2 text-sm">
                            <span className="text-indigo-500 font-bold">📜</span>
                            <span>{t('investors.min_shares_notarial')}</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm">
                            <span className="text-indigo-500 font-bold">📊</span>
                            <span>{t('investors.min_amount_notarial')}</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm">
                            <span className="text-indigo-500 font-bold">✅</span>
                            <span>{t('investors.full_rights')}</span>
                          </li>
                        </ul>
                        <div className="mt-6">
                          <Button
                            onClick={() => setActiveTab("contact")}
                            variant="outline"
                            className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                          >
                            {t('investors.select_notarial')}
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4 mt-4">
                      <h3 className="font-semibold text-emerald-900 flex items-center gap-2 mb-2">
                        <Users size={18} className="text-emerald-500" />
                        {t('investors.transparency')}
                      </h3>
                      <p className="text-sm text-gray-700">
                        {t('investors.transparency_description')}
                      </p>
                      <ul className="space-y-1 mt-2">
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-emerald-500 mt-0.5">👥</span>
                          {t('investors.real_time_users')}
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-emerald-500 mt-0.5">💳</span>
                          {t('investors.confirmed_payments')}
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-emerald-500 mt-0.5">📈</span>
                          {t('investors.revenue_tracking')}
                        </li>
                      </ul>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button onClick={() => setActiveTab("overview")} variant="outline">
                        {t('investors.back')}
                      </Button>
                      <Button onClick={() => setActiveTab("contact")} variant="default">
                        {t('investors.next')}
                      </Button>
                    </div>
                  </div>
                )}

                {/* Pestaña de contacto */}
                {activeTab === "contact" && (
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 border border-purple-100">
                      <h3 className="font-bold text-xl text-center text-indigo-900 mb-4">
                        {t('investors.contact_title')}
                      </h3>

                      <div className="grid gap-4 max-w-md mx-auto">
                        <div className="flex items-center gap-3">
                          <div className="bg-indigo-100 p-2 rounded-full">
                            <Mail className="h-5 w-5 text-indigo-600" />
                          </div>
                          <div>
                            <p className="font-medium">rmportbou@gmail.com</p>
                            <p className="text-sm text-gray-500">
                              {t('investors.email_instructions')}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="bg-indigo-100 p-2 rounded-full">
                            <Globe className="h-5 w-5 text-indigo-600" />
                          </div>
                          <div>
                            <p className="font-medium">www.jobda.es</p>
                            <p className="text-sm text-gray-500">
                              {t('investors.website_info')}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 mt-2">
                          <div className="bg-indigo-100 p-2 rounded-full mt-1">
                            <Users className="h-5 w-5 text-indigo-600" />
                          </div>
                          <div>
                            <p className="font-medium">
                              Ramon Molons – CEO & Neuroingeniero
                            </p>
                            <p className="text-sm">EmpordaJobs SL – B02701100</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600 italic mb-4">
                          {t('investors.final_note')}
                        </p>
                        <Button
                          onClick={() => setActiveTab("overview")}
                          variant="outline"
                          className="mx-auto"
                        >
                          {t('investors.back_to_overview')}
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}