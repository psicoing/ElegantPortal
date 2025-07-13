import { Globe, ChevronDown, ExternalLink } from "lucide-react";
import { useState } from "react";

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'ca', name: 'Catalan', nativeName: 'Català', flag: '🏴󠁥󠁳󠁣󠁴󠁿' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' }
];

export function SimpleLanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    setIsOpen(false);
    
    if (language.code !== 'es') {
      // Crear un enlace directo que funcione mejor
      const currentUrl = window.location.href;
      
      // Usar diferentes servicios de traducción según el idioma
      let translateUrl: string;
      
      // Para idiomas más comunes, usar Google Translate con parámetros específicos
      if (['en', 'fr', 'de', 'it', 'pt'].includes(language.code)) {
        translateUrl = `https://translate.google.com/website?sl=es&tl=${language.code}&hl=${language.code}&client=webapp&u=${encodeURIComponent(currentUrl)}`;
      } 
      // Para otros idiomas, usar el método estándar
      else {
        translateUrl = `https://translate.google.com/translate?sl=es&tl=${language.code}&u=${encodeURIComponent(currentUrl)}`;
      }
      
      // Mostrar diálogo de confirmación con información clara
      const modal = document.createElement('div');
      modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        font-family: Inter, sans-serif;
      `;
      
      modal.innerHTML = `
        <div style="
          background: white;
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          max-width: 400px;
          width: 90%;
          text-align: center;
        ">
          <div style="font-size: 24px; margin-bottom: 16px;">${language.flag}</div>
          <h3 style="margin: 0 0 12px 0; color: #1f2937; font-size: 18px; font-weight: 600;">
            Traducir a ${language.nativeName}
          </h3>
          <p style="margin: 0 0 20px 0; color: #6b7280; font-size: 14px; line-height: 1.5;">
            Se abrirá una nueva pestaña con la página traducida usando Google Translate.
          </p>
          <div style="display: flex; gap: 12px; justify-content: center;">
            <button id="cancelBtn" style="
              padding: 8px 16px;
              border: 1px solid #d1d5db;
              background: white;
              color: #374151;
              border-radius: 6px;
              cursor: pointer;
              font-size: 14px;
            ">Cancelar</button>
            <button id="translateBtn" style="
              padding: 8px 16px;
              background: #1e40af;
              color: white;
              border: none;
              border-radius: 6px;
              cursor: pointer;
              font-size: 14px;
              display: flex;
              align-items: center;
              gap: 6px;
            ">
              Traducir
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15,3 21,3 21,9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </button>
          </div>
        </div>
      `;
      
      document.body.appendChild(modal);
      
      // Event listeners
      const cancelBtn = modal.querySelector('#cancelBtn') as HTMLButtonElement;
      const translateBtn = modal.querySelector('#translateBtn') as HTMLButtonElement;
      
      cancelBtn.onclick = () => {
        document.body.removeChild(modal);
        setCurrentLanguage(languages[0]); // Reset to Spanish
      };
      
      translateBtn.onclick = () => {
        window.open(translateUrl, '_blank');
        document.body.removeChild(modal);
      };
      
      // Close on background click
      modal.onclick = (e) => {
        if (e.target === modal) {
          document.body.removeChild(modal);
          setCurrentLanguage(languages[0]);
        }
      };
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:text-blue-600 transition-colors bg-white rounded-md border border-gray-200 hover:border-blue-300 hover:shadow-sm"
        title="Seleccionar idioma"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLanguage.flag} {currentLanguage.nativeName}</span>
        <span className="sm:hidden">{currentLanguage.flag}</span>
        <ChevronDown className="h-3 w-3" />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
          <div className="p-2 border-b border-gray-100">
            <div className="text-xs text-gray-500 font-medium">Seleccionar idioma</div>
          </div>
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language)}
              className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center gap-3 ${
                currentLanguage.code === language.code 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-700'
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <div className="flex-1">
                <div className="font-medium text-sm">{language.nativeName}</div>
                <div className="text-xs text-gray-500">{language.name}</div>
              </div>
              {language.code !== 'es' && (
                <ExternalLink className="h-3 w-3 text-gray-400" />
              )}
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