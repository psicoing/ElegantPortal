import { useState, useEffect } from 'react';
import { X, Smartphone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';

export function PWABanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const { language } = useLanguage();

  const content = {
    es: {
      title: "¡Ponme en tu móvil!",
      subtitle: "Accede más rápido a JOBDA",
      installButton: "Instalar App",
      instructionsButton: "Ver Instrucciones",
      feature1: "Acceso directo desde tu pantalla de inicio",
      feature2: "Funciona sin conexión para consultas rápidas",
      feature3: "Notificaciones de nuevas oportunidades",
      iosInstructions: "1. Pulsa el botón de 'Compartir' (cuadrado con flecha)\\n2. Busca 'Añadir a pantalla de inicio'\\n3. Escribe 'JOBDA' como nombre y pulsa 'Añadir'",
      androidInstructions: "1. Abre el menú de Chrome (3 puntos arriba a la derecha)\\n2. Busca 'Añadir a pantalla de inicio' o 'Instalar aplicación'\\n3. Pulsa 'Instalar' o 'Añadir'"
    },
    ca: {
      title: "¡Posa'm al teu mòbil!",
      subtitle: "Accedeix més ràpid a JOBDA",
      installButton: "Instal·lar App",
      instructionsButton: "Veure Instruccions",
      feature1: "Accés directe des de la pantalla d'inici",
      feature2: "Funciona sense connexió per consultes ràpides",
      feature3: "Notificacions de noves oportunitats",
      iosInstructions: "1. Pulsa el botó de 'Compartir' (quadrat amb fletxa)\\n2. Busca 'Afegir a pantalla d'inici'\\n3. Escriu 'JOBDA' com a nom i pulsa 'Afegir'",
      androidInstructions: "1. Obre el menú de Chrome (3 punts a dalt a la dreta)\\n2. Busca 'Afegir a pantalla d'inici' o 'Instal·lar aplicació'\\n3. Pulsa 'Instal·lar' o 'Afegir'"
    },
    en: {
      title: "Add me to your phone!",
      subtitle: "Get faster access to JOBDA",
      installButton: "Install App",
      instructionsButton: "View Instructions",
      feature1: "Direct access from your home screen",
      feature2: "Works offline for quick queries",
      feature3: "Notifications for new opportunities",
      iosInstructions: "1. Tap the 'Share' button (square with arrow)\\n2. Look for 'Add to Home Screen'\\n3. Type 'JOBDA' as name and tap 'Add'",
      androidInstructions: "1. Open Chrome menu (3 dots at top right)\\n2. Look for 'Add to home screen' or 'Install app'\\n3. Tap 'Install' or 'Add'"
    }
  };

  const currentContent = content[language];

  useEffect(() => {
    // Detectar si es móvil o pantalla pequeña
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    
    // Verificar si ya está instalado
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    
    // Verificar si ya se ha cerrado antes
    const wasClosed = localStorage.getItem('pwa-banner-closed');
    
    // Mostrar siempre en móviles y también en desktop para testing
    if (!isStandalone && !wasClosed) {
      setIsVisible(true);
    }

    // Escuchar el evento beforeinstallprompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsVisible(false);
      }
      setDeferredPrompt(null);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('pwa-banner-closed', 'true');
  };

  const showInstructions = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    let instructions = "";
    let platform = "";
    
    if (isIOS || isSafari) {
      instructions = currentContent.iosInstructions;
      platform = "🍎 iPhone (Safari)";
    } else {
      instructions = currentContent.androidInstructions;
      platform = "🤖 Android (Chrome)";
    }
    
    // Usar alert temporal hasta que se resuelva el problema con el DOM
    alert(`📱 Cómo instalar JOBDA\n\n${platform}\n\n${instructions.replace(/\\n/g, '\n')}`);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white shadow-xl rounded-xl animate-in slide-in-from-left duration-500 border border-white/20">
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-400 text-purple-800 rounded-lg p-2 font-bold text-xs">
              GRATIS
            </div>
            <Button
              onClick={handleClose}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 p-1 rounded-lg ml-auto"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-white/20 rounded-lg p-2 flex-shrink-0">
            <Smartphone className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-base">{currentContent.title}</h3>
            <p className="text-xs text-white/90">{currentContent.subtitle}</p>
          </div>
        </div>

        {/* Features list */}
        <div className="space-y-1 mb-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-yellow-300">⭐</span>
            <span>{currentContent.feature1}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-300">⭐</span>
            <span>{currentContent.feature2}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-300">⭐</span>
            <span>{currentContent.feature3}</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          {deferredPrompt ? (
            <Button
              onClick={handleInstall}
              className="bg-white text-purple-700 hover:bg-white/90 font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm w-full"
            >
              <Download className="w-4 h-4 mr-2" />
              {currentContent.installButton}
            </Button>
          ) : (
            <button
              onClick={(e) => {
                console.log("Click en botón instrucciones");
                e.preventDefault();
                e.stopPropagation();
                try {
                  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
                  const message = isIOS 
                    ? "📱 iPhone (Safari):\n\n1. Pulsa el botón 'Compartir' (cuadrado con flecha)\n2. Busca 'Añadir a pantalla de inicio'\n3. Escribe 'JOBDA' como nombre y pulsa 'Añadir'"
                    : "📱 Android (Chrome):\n\n1. Abre el menú de Chrome (3 puntos arriba a la derecha)\n2. Busca 'Añadir a pantalla de inicio' o 'Instalar aplicación'\n3. Pulsa 'Instalar' o 'Añadir'";
                  
                  console.log("Mostrando instrucciones:", message);
                  window.alert("Cómo instalar JOBDA\n\n" + message);
                } catch (error) {
                  console.error("Error al mostrar instrucciones:", error);
                  window.alert("Error al mostrar instrucciones");
                }
              }}
              style={{
                background: 'rgba(255,255,255,0.2)',
                border: '1px solid rgba(255,255,255,0.3)',
                color: 'white',
                fontWeight: '600',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '14px',
                width: '100%',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.2)';
              }}
            >
              {currentContent.instructionsButton}
            </button>
          )}
        </div>
      </div>
      
      {/* Efecto de brillo animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-pulse rounded-xl" 
           style={{ animationDuration: '4s' }} />
    </div>
  );
}