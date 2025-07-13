import { Globe } from "lucide-react";
import { useEffect, useState } from "react";

export function GoogleTranslateWidget() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Añadir estilos personalizados solo una vez
    if (!document.querySelector('#google-translate-styles')) {
      const style = document.createElement('style');
      style.id = 'google-translate-styles';
      style.textContent = `
        .goog-te-gadget {
          font-family: Inter, sans-serif !important;
        }
        .goog-te-gadget-simple {
          background-color: transparent !important;
          border: none !important;
          font-size: 12px !important;
          display: inline-block !important;
          padding: 0 !important;
          margin: 0 !important;
        }
        .goog-te-gadget-simple .goog-te-menu-value {
          color: #374151 !important;
          font-family: Inter, sans-serif !important;
          font-size: 12px !important;
          padding: 4px 8px !important;
          margin: 0 !important;
        }
        .goog-te-gadget-simple .goog-te-menu-value:hover {
          color: #1E40AF !important;
        }
        .goog-te-gadget-simple .goog-te-menu-value span:first-child {
          display: none !important;
        }
        .goog-te-menu-frame {
          z-index: 999999 !important;
        }
        .goog-logo-link {
          display: none !important;
        }
        .goog-te-gadget .goog-te-combo {
          font-family: Inter, sans-serif !important;
          font-size: 12px !important;
          background-color: white !important;
          border: 1px solid #D1D5DB !important;
          border-radius: 6px !important;
          padding: 4px 8px !important;
          color: #374151 !important;
          min-width: 120px !important;
        }
        .goog-te-gadget .goog-te-combo:hover {
          border-color: #1E40AF !important;
        }
        .goog-te-banner-frame {
          display: none !important;
        }
        body {
          top: 0px !important;
        }
        #goog-gt-tt {
          display: none !important;
        }
        .goog-te-balloon-frame {
          display: none !important;
        }
      `;
      document.head.appendChild(style);
    }

    // Verificar si el widget se carga
    const checkWidget = setInterval(() => {
      const widgets = document.getElementsByClassName('google-translate-widget');
      for (let i = 0; i < widgets.length; i++) {
        if (widgets[i].hasChildNodes()) {
          console.log('Google Translate widget cargado exitosamente');
          setIsLoaded(true);
          clearInterval(checkWidget);
          break;
        }
      }
    }, 500);

    // Limpiar interval después de 10 segundos
    setTimeout(() => {
      clearInterval(checkWidget);
      if (!isLoaded) {
        console.log('Google Translate no se cargó en 10 segundos');
      }
    }, 10000);

    return () => {
      clearInterval(checkWidget);
    };
  }, []);

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-gray-600" />
      <div className="google-translate-widget inline-block">
        {!isLoaded && (
          <span className="text-xs text-gray-400">Cargando...</span>
        )}
      </div>
    </div>
  );
}