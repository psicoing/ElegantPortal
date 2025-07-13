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

    // Limpiar cualquier instancia previa del widget
    const existingWidget = document.getElementById('google_translate_element');
    if (existingWidget) {
      existingWidget.innerHTML = '';
    }

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