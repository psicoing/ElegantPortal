import { useState } from 'react';
import { X, Smartphone } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

interface JobdaPWADialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function JobdaPWADialog({ isOpen, onClose }: JobdaPWADialogProps) {
  const { language } = useLanguage();

  const content = {
    es: {
      title: "Cómo instalar JOBDA",
      subtitle: "En tu móvil como una app real",
      androidTitle: "Android (Chrome)",
      androidSteps: [
        "Abre el menú de Chrome (3 puntos arriba a la derecha)",
        'Busca "Añadir a pantalla de inicio" o "Instalar aplicación"',
        'Pulsa "Instalar" o "Añadir"'
      ],
      iosTitle: "iPhone (Safari)",
      iosSteps: [
        'Pulsa el botón de "Compartir" (cuadrado con flecha)',
        'Busca "Añadir a pantalla de inicio"',
        'Escribe "JOBDA" como nombre y pulsa "Añadir"'
      ],
      readyTitle: "¡Listo para usar!",
      readyFeatures: [
        "Aparecerá el icono de JOBDA en tu pantalla",
        "Se abrirá como una app independiente",
        "Acceso instantáneo a ofertas de trabajo y servicios"
      ],
      button: "¡Entendido! Voy a instalarlo"
    },
    ca: {
      title: "Com instal·lar JOBDA",
      subtitle: "Al teu mòbil com una app real",
      androidTitle: "Android (Chrome)",
      androidSteps: [
        "Obre el menú de Chrome (3 punts a dalt a la dreta)",
        'Busca "Afegir a pantalla d\'inici" o "Instal·lar aplicació"',
        'Pulsa "Instal·lar" o "Afegir"'
      ],
      iosTitle: "iPhone (Safari)",
      iosSteps: [
        'Pulsa el botó de "Compartir" (quadrat amb fletxa)',
        'Busca "Afegir a pantalla d\'inici"',
        'Escriu "JOBDA" com a nom i pulsa "Afegir"'
      ],
      readyTitle: "¡Llest per usar!",
      readyFeatures: [
        "Apareixerà la icona de JOBDA a la teva pantalla",
        "S'obrirà com una app independent",
        "Accés instantani a ofertes de feina i serveis"
      ],
      button: "¡Entès! Vaig a instal·lar-ho"
    },
    en: {
      title: "How to install JOBDA",
      subtitle: "On your mobile as a real app",
      androidTitle: "Android (Chrome)",
      androidSteps: [
        "Open Chrome menu (3 dots at top right)",
        'Look for "Add to home screen" or "Install app"',
        'Tap "Install" or "Add"'
      ],
      iosTitle: "iPhone (Safari)",
      iosSteps: [
        'Tap the "Share" button (square with arrow)',
        'Look for "Add to Home Screen"',
        'Type "JOBDA" as name and tap "Add"'
      ],
      readyTitle: "Ready to use!",
      readyFeatures: [
        "JOBDA icon will appear on your screen",
        "It will open as an independent app",
        "Instant access to job offers and services"
      ],
      button: "Understood! I'm going to install it"
    }
  };

  const currentContent = content[language];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-[10000] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-2">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">{currentContent.title}</h2>
              <p className="text-gray-600 text-sm">{currentContent.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Android Section */}
          <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🤖</span>
              <h3 className="font-bold text-green-800">{currentContent.androidTitle}</h3>
            </div>
            <div className="space-y-2">
              {currentContent.androidSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <span className="text-green-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* iOS Section */}
          <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🍎</span>
              <h3 className="font-bold text-blue-800">{currentContent.iosTitle}</h3>
            </div>
            <div className="space-y-2">
              {currentContent.iosSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <span className="text-blue-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ready Section */}
          <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🎉</span>
              <h3 className="font-bold text-purple-800">{currentContent.readyTitle}</h3>
            </div>
            <div className="space-y-2">
              {currentContent.readyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-yellow-500 mt-1">⭐</span>
                  <span className="text-purple-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Button */}
        <div className="p-6 border-t">
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            {currentContent.button}
          </button>
        </div>
      </div>
    </div>
  );
}