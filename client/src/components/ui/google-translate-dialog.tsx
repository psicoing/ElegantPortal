import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Chrome, Smartphone, X } from "lucide-react";

interface GoogleTranslateDialogProps {
  trigger?: React.ReactNode;
  buttonText?: string;
  size?: "default" | "sm" | "lg";
}

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