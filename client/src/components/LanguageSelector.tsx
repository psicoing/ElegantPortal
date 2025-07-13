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
    
    // Implementar traducción automática usando diferentes métodos
    if (language.code !== 'es') {
      // Método 1: Intentar usar Google Translate elemento si está disponible
      if (window.google?.translate) {
        try {
          // Crear el elemento de traducción dinámicamente
          const translateDiv = document.createElement('div');
          translateDiv.id = 'google_translate_element_temp';
          translateDiv.style.display = 'none';
          document.body.appendChild(translateDiv);
          
          new window.google.translate.TranslateElement({
            pageLanguage: 'es',
            includedLanguages: language.code,
            autoDisplay: false,
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
          }, 'google_translate_element_temp');
          
          // Activar la traducción automáticamente
          setTimeout(() => {
            const select = translateDiv.querySelector('select') as HTMLSelectElement;
            if (select) {
              select.value = language.code;
              select.dispatchEvent(new Event('change', { bubbles: true }));
              console.log(`Traduciendo página a ${language.nativeName}`);
            }
          }, 500);
          
          return;
        } catch (error) {
          console.log('Error con Google Translate widget, usando método alternativo');
        }
      }
      
      // Método 2: Usar la URL de Google Translate en la misma ventana
      const currentUrl = window.location.href;
      const translateUrl = `https://translate.google.com/translate?sl=es&tl=${language.code}&u=${encodeURIComponent(currentUrl)}`;
      
      // Preguntar al usuario si quiere traducir
      const confirmed = confirm(`¿Desea traducir esta página a ${language.nativeName}?`);
      if (confirmed) {
        window.location.href = translateUrl;
      } else {
        // Resetear al idioma español si cancela
        setCurrentLanguage(languages[0]);
      }
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