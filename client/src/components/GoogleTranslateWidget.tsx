import { Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Declaración de tipos para window.google
declare global {
  interface Window {
    google?: {
      translate: {
        TranslateElement: {
          new(options: any, element: HTMLElement): void;
          InlineLayout: {
            SIMPLE: number;
          };
        };
      };
    };
  }
}

export function GoogleTranslateWidget() {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const initAttempted = useRef(false);

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

    // Función para inicializar el widget directamente
    const initializeWidget = () => {
      if (!containerRef.current || initAttempted.current || isLoaded) return;
      
      const checkAndInit = () => {
        if (window.google?.translate && !initAttempted.current) {
          try {
            initAttempted.current = true;
            console.log('Inicializando widget Google Translate directamente');
            
            new window.google.translate.TranslateElement({
              pageLanguage: 'es',
              includedLanguages: 'es,ca,en,fr,de,it,pt,ru,zh,ja,ar',
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false
            }, containerRef.current);
            
            setIsLoaded(true);
            console.log('Widget inicializado correctamente');
          } catch (error) {
            console.error('Error creando widget:', error);
            initAttempted.current = false; // Permitir reintentos
          }
        }
      };
      
      // Intentar inmediatamente
      checkAndInit();
      
      // Si no funciona, reintentar cada 1 segundo hasta 10 intentos
      let attempts = 0;
      const retryInterval = setInterval(() => {
        attempts++;
        if (window.google?.translate && !initAttempted.current) {
          checkAndInit();
          clearInterval(retryInterval);
        } else if (attempts >= 10) {
          console.log('No se pudo inicializar Google Translate después de 10 intentos');
          clearInterval(retryInterval);
        }
      }, 1000);
      
      return () => clearInterval(retryInterval);
    };

    // Inicializar después de un pequeño delay para dar tiempo a que se cargue el script
    const timer = setTimeout(initializeWidget, 500);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-gray-600" />
      <div 
        ref={containerRef}
        className="inline-block min-w-[100px]"
      >
        {!isLoaded && (
          <span className="text-xs text-gray-400">Traducir</span>
        )}
      </div>
    </div>
  );
}