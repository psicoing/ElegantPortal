import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Chrome, Smartphone, X } from "lucide-react";

interface GoogleTranslateDialogProps {
  trigger?: React.ReactNode;
  buttonText?: string;
  size?: "default" | "sm" | "lg";
}

const translations = {
  es: {
    title: "Traducir página",
    subtitle: "Usa Google Translate integrado en tu navegador",
    whyTitle: "¿Por qué usar Google Translate del navegador?",
    advantages: [
      "Traducción instantánea sin recargar",
      "Conserva el diseño original", 
      "Más de 100 idiomas disponibles",
      "Funciona en todos los sitios web"
    ],
    desktopTitle: "En Chrome, Edge o Brave",
    desktopSteps: [
      {
        title: "Clic derecho en cualquier parte de la página",
        subtitle: "Aparecerá un menú contextual"
      },
      {
        title: "Selecciona \"Traducir a [tu idioma]\"",
        subtitle: "O busca la opción \"Translate to...\""
      },
      {
        title: "¡Listo! La página se traduce automáticamente",
        subtitle: "Puedes cambiar el idioma desde la barra de traducción"
      }
    ],
    mobileTitle: "En dispositivos móviles",
    mobileSteps: [
      {
        title: "Toca los tres puntos (⋮) en tu navegador",
        subtitle: "Usualmente en la esquina superior derecha"
      },
      {
        title: "Busca \"Traducir\" en el menú",
        subtitle: "Puede aparecer como \"Translate\" o un ícono 🌐"
      },
      {
        title: "Selecciona tu idioma preferido",
        subtitle: "La página se traducirá al instante"
      }
    ],
    tipTitle: "Tip profesional",
    tipText: "Una vez activado, Google Translate recordará tu preferencia y traducirá automáticamente todas las páginas en español a tu idioma.",
    buttonText: "Entendido, activar traducción"
  },
  en: {
    title: "Translate page",
    subtitle: "Use Google Translate built into your browser",
    whyTitle: "Why use browser's Google Translate?",
    advantages: [
      "Instant translation without reload",
      "Preserves original design",
      "100+ languages available", 
      "Works on all websites"
    ],
    desktopTitle: "In Chrome, Edge or Brave",
    desktopSteps: [
      {
        title: "Right-click anywhere on the page",
        subtitle: "A context menu will appear"
      },
      {
        title: "Select \"Translate to [your language]\"",
        subtitle: "Or look for \"Translate to...\" option"
      },
      {
        title: "Done! The page translates automatically",
        subtitle: "You can change language from the translation bar"
      }
    ],
    mobileTitle: "On mobile devices",
    mobileSteps: [
      {
        title: "Tap the three dots (⋮) in your browser",
        subtitle: "Usually in the top right corner"
      },
      {
        title: "Look for \"Translate\" in the menu",
        subtitle: "May appear as \"Translate\" or a 🌐 icon"
      },
      {
        title: "Select your preferred language",
        subtitle: "The page will translate instantly"
      }
    ],
    tipTitle: "Pro tip",
    tipText: "Once activated, Google Translate will remember your preference and automatically translate all Spanish pages to your language.",
    buttonText: "Got it, activate translation"
  },
  fr: {
    title: "Traduire la page",
    subtitle: "Utilisez Google Translate intégré à votre navigateur",
    whyTitle: "Pourquoi utiliser Google Translate du navigateur?",
    advantages: [
      "Traduction instantanée sans rechargement",
      "Conserve le design original",
      "Plus de 100 langues disponibles",
      "Fonctionne sur tous les sites web"
    ],
    desktopTitle: "Dans Chrome, Edge ou Brave",
    desktopSteps: [
      {
        title: "Clic droit n'importe où sur la page",
        subtitle: "Un menu contextuel apparaîtra"
      },
      {
        title: "Sélectionnez \"Traduire vers [votre langue]\"",
        subtitle: "Ou cherchez l'option \"Translate to...\""
      },
      {
        title: "Terminé! La page se traduit automatiquement",
        subtitle: "Vous pouvez changer la langue depuis la barre de traduction"
      }
    ],
    mobileTitle: "Sur appareils mobiles",
    mobileSteps: [
      {
        title: "Touchez les trois points (⋮) dans votre navigateur",
        subtitle: "Habituellement dans le coin supérieur droit"
      },
      {
        title: "Cherchez \"Traduire\" dans le menu",
        subtitle: "Peut apparaître comme \"Translate\" ou une icône 🌐"
      },
      {
        title: "Sélectionnez votre langue préférée",
        subtitle: "La page se traduira instantanément"
      }
    ],
    tipTitle: "Conseil professionnel",
    tipText: "Une fois activé, Google Translate se souviendra de votre préférence et traduira automatiquement toutes les pages en espagnol vers votre langue.",
    buttonText: "Compris, activer la traduction"
  }
};

export function GoogleTranslateDialog({ 
  trigger, 
  buttonText = "Idiomas", 
  size = "default" 
}: GoogleTranslateDialogProps) {
  const [open, setOpen] = useState(false);

  const defaultTrigger = (
    <Button
      variant="outline"
      size={size}
      onClick={() => setOpen(true)}
      className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-300"
    >
      <Globe className="h-4 w-4" />
      <span className="hidden sm:inline">{buttonText}</span>
    </Button>
  );

  if (!open) {
    return (
      <div onClick={() => setOpen(true)}>
        {trigger || defaultTrigger}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Globe className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Traducir página
              </h2>
              <p className="text-sm text-gray-600">
                Usa Google Translate integrado en tu navegador
              </p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Ventajas */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">¿Por qué usar Google Translate del navegador?</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Traducción instantánea sin recargar</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Conserva el diseño original</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Más de 100 idiomas disponibles</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Funciona en todos los sitios web</span>
              </div>
            </div>
          </div>

          {/* Instrucciones para Desktop */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Chrome className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-semibold">En Chrome, Edge o Brave</h3>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">1</span>
                <div>
                  <p className="font-medium">Clic derecho en cualquier parte de la página</p>
                  <p className="text-sm text-gray-600">Aparecerá un menú contextual</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">2</span>
                <div>
                  <p className="font-medium">Selecciona "Traducir a [tu idioma]"</p>
                  <p className="text-sm text-gray-600">O busca la opción "Translate to..."</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">3</span>
                <div>
                  <p className="font-medium">¡Listo! La página se traduce automáticamente</p>
                  <p className="text-sm text-gray-600">Puedes cambiar el idioma desde la barra de traducción</p>
                </div>
              </div>
            </div>
          </div>

          {/* Instrucciones para Mobile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Smartphone className="h-6 w-6 text-green-600" />
              <h3 className="text-lg font-semibold">En dispositivos móviles</h3>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg space-y-3">
              <div className="flex items-start gap-3">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">1</span>
                <div>
                  <p className="font-medium">Toca los tres puntos (⋮) en tu navegador</p>
                  <p className="text-sm text-gray-600">Usualmente en la esquina superior derecha</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">2</span>
                <div>
                  <p className="font-medium">Busca "Traducir" en el menú</p>
                  <p className="text-sm text-gray-600">Puede aparecer como "Translate" o un ícono 🌐</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">3</span>
                <div>
                  <p className="font-medium">Selecciona tu idioma preferido</p>
                  <p className="text-sm text-gray-600">La página se traducirá al instante</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tip adicional */}
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <span className="text-amber-600">💡</span>
              <div>
                <p className="font-medium text-amber-800">Tip profesional</p>
                <p className="text-sm text-amber-700">
                  Una vez activado, Google Translate recordará tu preferencia y traducirá 
                  automáticamente todas las páginas en español a tu idioma.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-6">
          <Button 
            onClick={() => setOpen(false)}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Entendido, activar traducción
          </Button>
        </div>
      </div>
    </div>
  );
}