import { Globe } from "lucide-react";
import { useEffect } from "react";

// Declaraciones de tipos para Google Translate
declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: {
          new(options: any, elementId: string): void;
          InlineLayout: {
            SIMPLE: number;
          };
        };
      };
    };
    googleTranslateElementInit: () => void;
  }
}

export function GoogleTranslateWidget() {
  useEffect(() => {
    // Añadir estilos personalizados para el widget de Google Translate
    const style = document.createElement('style');
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
      #google_translate_element {
        display: inline-block !important;
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

    // Función para inicializar Google Translate cuando esté disponible
    const initGoogleTranslate = () => {
      console.log('Intentando inicializar Google Translate...');
      console.log('window.google existe:', !!window.google);
      console.log('window.google.translate existe:', !!(window.google && window.google.translate));
      
      if (window.google && window.google.translate) {
        try {
          const existingWidget = document.getElementById('google_translate_element');
          console.log('Elemento widget encontrado:', !!existingWidget);
          console.log('Widget tiene hijos:', existingWidget?.hasChildNodes());
          
          if (existingWidget && !existingWidget.hasChildNodes()) {
            console.log('Creando TranslateElement...');
            new window.google.translate.TranslateElement({
              pageLanguage: 'es',
              includedLanguages: 'es,ca,en,fr,de,it,pt,ru,zh,ja,ar',
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false
            }, 'google_translate_element');
            console.log('TranslateElement creado exitosamente');
          }
        } catch (error) {
          console.error('Error inicializando Google Translate:', error);
        }
      } else {
        console.log('Google Translate no está listo, reintentando...');
        // Reintentar en 100ms si Google Translate no está listo
        setTimeout(initGoogleTranslate, 100);
      }
    };

    // Inicializar después de un pequeño delay para asegurar que el DOM esté listo
    setTimeout(initGoogleTranslate, 1000);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-gray-600" />
      <div id="google_translate_element" className="inline-block"></div>
    </div>
  );
}