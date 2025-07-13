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

    // Función para inicializar el widget con verificaciones más robustas
    const initializeWidget = () => {
      let attempts = 0;
      const maxAttempts = 15;
      
      const tryInit = () => {
        attempts++;
        console.log(`Intento de inicialización ${attempts}/${maxAttempts}`);
        console.log('Container ref:', !!containerRef.current);
        console.log('Google API:', !!window.google?.translate);
        console.log('Ya inicializado:', initAttempted.current);
        
        if (!containerRef.current) {
          console.log('Container ref no disponible, reintentando...');
          if (attempts < maxAttempts) {
            setTimeout(tryInit, 500);
          }
          return;
        }
        
        if (!window.google?.translate) {
          console.log('Google Translate API no disponible, reintentando...');
          if (attempts < maxAttempts) {
            setTimeout(tryInit, 500);
          }
          return;
        }
        
        if (initAttempted.current) {
          console.log('Ya se intentó inicializar');
          return;
        }
        
        try {
          initAttempted.current = true;
          console.log('Creando TranslateElement en:', containerRef.current);
          
          // Limpiar el contenedor antes de crear el widget
          containerRef.current.innerHTML = '';
          
          new window.google.translate.TranslateElement({
            pageLanguage: 'es',
            includedLanguages: 'es,ca,en,fr,de,it,pt,ru,zh,ja,ar',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
          }, containerRef.current);
          
          // Verificar que se creó correctamente
          setTimeout(() => {
            const hasChildren = containerRef.current?.children.length > 0;
            const hasGoogleElements = containerRef.current?.querySelector('[class*="goog"]');
            
            console.log('Verificando widget:', {
              hasChildren,
              hasGoogleElements: !!hasGoogleElements,
              innerHTML: containerRef.current?.innerHTML?.substring(0, 100)
            });
            
            if (hasChildren || hasGoogleElements) {
              console.log('Widget creado exitosamente');
              setIsLoaded(true);
            } else {
              console.log('Widget no se creó, reintentando...');
              initAttempted.current = false;
              if (attempts < maxAttempts) {
                setTimeout(tryInit, 1000);
              } else {
                console.log('Max intentos alcanzados. Puede ser una limitación del entorno de desarrollo.');
                // Mostrar fallback para desarrollo
                setIsLoaded(true);
              }
            }
          }, 1000);
          
        } catch (error) {
          console.error('Error creando widget:', error);
          initAttempted.current = false;
          if (attempts < maxAttempts) {
            setTimeout(tryInit, 1000);
          }
        }
      };
      
      // Empezar el proceso después de un pequeño delay
      setTimeout(tryInit, 100);
    };

    // Inicializar el widget
    initializeWidget();
    
    // Cleanup function
    return () => {
      // No cleanup needed ya que los timeouts se auto-limpian
    };
  }, []);

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-gray-600" />
      <div 
        ref={containerRef}
        className="inline-block min-w-[120px] relative"
        style={{ position: 'relative' }}
      >
        {!isLoaded && (
          <span className="text-xs text-gray-400">Traducir</span>
        )}
      </div>
    </div>
  );
}