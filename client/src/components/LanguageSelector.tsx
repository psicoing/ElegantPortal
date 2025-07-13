import { Globe, ChevronDown } from "lucide-react";
import { useState } from "react";

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

const languages: Language[] = [
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'ca', name: 'Catalan', nativeName: 'Català' },
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' }
];

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]); // Default to Spanish

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    setIsOpen(false);
    
    // Intentar usar Google Translate si está disponible
    if (window.google?.translate) {
      try {
        const frame = document.querySelector('.goog-te-menu-frame') as HTMLIFrameElement;
        if (frame && frame.contentDocument) {
          const languageOption = frame.contentDocument.querySelector(`[value="${language.code}"]`) as HTMLElement;
          languageOption?.click();
        }
      } catch (error) {
        console.log('Google Translate no disponible, usando selector personalizado');
      }
    }
    
    // Traducción básica usando Google Translate URL (fallback)
    if (language.code !== 'es') {
      const translateUrl = `https://translate.google.com/translate?sl=es&tl=${language.code}&u=${encodeURIComponent(window.location.href)}`;
      
      // Solo mostrar la opción al usuario en lugar de redirigir automáticamente
      console.log(`Para traducir a ${language.nativeName}, visite: ${translateUrl}`);
      
      // Mostrar notificación al usuario
      const notification = document.createElement('div');
      notification.innerHTML = `
        <div style="
          position: fixed;
          top: 20px;
          right: 20px;
          background: #1E40AF;
          color: white;
          padding: 12px 16px;
          border-radius: 8px;
          z-index: 10000;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          font-family: Inter, sans-serif;
          font-size: 14px;
          max-width: 300px;
        ">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span>🌐</span>
            <div>
              <div style="font-weight: 600;">Traducción a ${language.nativeName}</div>
              <div style="opacity: 0.9; font-size: 12px;">Haga clic aquí para traducir la página</div>
            </div>
          </div>
        </div>
      `;
      
      notification.style.cursor = 'pointer';
      notification.onclick = () => {
        window.open(translateUrl, '_blank');
        document.body.removeChild(notification);
      };
      
      document.body.appendChild(notification);
      
      // Auto-eliminar después de 5 segundos
      setTimeout(() => {
        if (notification.parentNode) {
          document.body.removeChild(notification);
        }
      }, 5000);
    }
  };

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

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:text-blue-600 transition-colors bg-white rounded-md border border-gray-200 hover:border-blue-300"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLanguage.nativeName}</span>
        <span className="sm:hidden">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown className="h-3 w-3" />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language)}
              className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                currentLanguage.code === language.code 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-700'
              }`}
            >
              <div className="font-medium">{language.nativeName}</div>
              <div className="text-xs text-gray-500">{language.name}</div>
            </button>
          ))}
        </div>
      )}

      {/* Overlay para cerrar el dropdown */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}