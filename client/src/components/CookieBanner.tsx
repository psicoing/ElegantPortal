import { useState, useEffect } from "react";
import { X, ChevronDown, ChevronUp, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Link } from "wouter";

interface CookiePreference {
  id: string;
  name: string;
  description: string;
  required: boolean;
  enabled: boolean;
}

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  
  // Función para permitir abrir el banner desde cualquier parte de la aplicación
  // Se puede llamar con: window.openCookiePreferences()
  useEffect(() => {
    window.openCookiePreferences = () => {
      setShowBanner(true);
      setShowPreferences(true);
    };
    
    return () => {
      delete window.openCookiePreferences;
    };
  }, []);

  const [preferences, setPreferences] = useState<CookiePreference[]>([
    {
      id: "necessary",
      name: "Cookies necesarias",
      description: "Estas cookies son esenciales para que el sitio web funcione correctamente y no pueden ser desactivadas.",
      required: true,
      enabled: true
    },
    {
      id: "preferences",
      name: "Cookies de preferencias",
      description: "Estas cookies permiten que el sitio web recuerde sus elecciones para ofrecerle características mejoradas y personalizadas.",
      required: false,
      enabled: false
    },
    {
      id: "analytics",
      name: "Cookies analíticas",
      description: "Estas cookies nos ayudan a entender cómo los visitantes interactúan con el sitio web, recopilando información anónima.",
      required: false,
      enabled: false
    },
    {
      id: "marketing",
      name: "Cookies de marketing",
      description: "Estas cookies se utilizan para seguir a los visitantes en los sitios web y mostrar anuncios relevantes.",
      required: false,
      enabled: false
    }
  ]);

  useEffect(() => {
    // Comprobar si el usuario ya ha tomado una decisión sobre las cookies
    const savedPreferences = localStorage.getItem("cookiePreferences");
    
    if (savedPreferences === null) {
      // Si no hay decisión previa, mostrar el banner después de un pequeño retraso
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      try {
        // Cargar preferencias guardadas
        const parsedPreferences = JSON.parse(savedPreferences);
        setPreferences(prev => 
          prev.map(pref => ({
            ...pref,
            enabled: pref.required || (parsedPreferences[pref.id] ?? false)
          }))
        );
      } catch (error) {
        console.error("Error al cargar preferencias de cookies:", error);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const updatedPreferences = preferences.map(pref => ({
      ...pref,
      enabled: true
    }));
    
    setPreferences(updatedPreferences);
    savePreferences(updatedPreferences);
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const updatedPreferences = preferences.map(pref => ({
      ...pref,
      enabled: pref.required
    }));
    
    setPreferences(updatedPreferences);
    savePreferences(updatedPreferences);
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
    setShowBanner(false);
  };

  const savePreferences = (prefs: CookiePreference[]) => {
    const preferencesObj = prefs.reduce((acc, pref) => {
      acc[pref.id] = pref.enabled;
      return acc;
    }, {} as Record<string, boolean>);
    
    localStorage.setItem("cookiePreferences", JSON.stringify(preferencesObj));
  };

  const togglePreference = (id: string) => {
    setPreferences(prev => 
      prev.map(pref => 
        pref.id === id && !pref.required 
          ? { ...pref, enabled: !pref.enabled } 
          : pref
      )
    );
  };

  const closeModal = () => {
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-0"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-white rounded-lg shadow-2xl border border-gray-100 md:rounded-t-none overflow-hidden">
              {/* Elemento decorativo */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700"></div>
              
              <div className="p-4 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="md:pr-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Su privacidad es importante</h3>
                    <p className="text-gray-600 mb-2 text-sm leading-relaxed">
                      Este sitio web utiliza cookies para garantizar que obtenga la mejor experiencia en nuestro sitio. Al hacer clic en "Aceptar todo", consiente el uso de cookies para análisis, contenido personalizado y publicidad.
                    </p>
                    <p className="text-gray-500 text-xs">
                      Puede cambiar sus preferencias en cualquier momento visitando nuestra <Link href="/privacy" className="text-blue-600 hover:underline">Política de Privacidad</Link>.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 md:items-center md:ml-auto">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button 
                        variant="outline" 
                        className="border-gray-200 text-gray-700 hover:bg-gray-50"
                        onClick={handleRejectAll}
                      >
                        Rechazar todo
                      </Button>
                      <Button 
                        onClick={handleAcceptAll} 
                        className="bg-primary hover:bg-primary/90 text-white"
                      >
                        Aceptar todo
                      </Button>
                    </div>
                    <Button
                      variant="link"
                      className="text-sm text-gray-600 hover:text-gray-900 p-0 h-auto font-normal flex items-center"
                      onClick={() => setShowPreferences(!showPreferences)}
                    >
                      {showPreferences ? (
                        <>
                          <ChevronUp className="h-4 w-4 mr-1" />
                          Ocultar preferencias
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-4 w-4 mr-1" />
                          Personalizar preferencias
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                <AnimatePresence>
                  {showPreferences && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 border-t border-gray-100 pt-4">
                        <div className="grid gap-4">
                          {preferences.map((pref) => (
                            <div key={pref.id} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                              <div className="flex items-center justify-between mb-1">
                                <div className="flex items-center">
                                  <h4 className="font-medium text-gray-900">{pref.name}</h4>
                                  {pref.required && (
                                    <span className="ml-2 text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">
                                      Requerido
                                    </span>
                                  )}
                                </div>
                                <Switch
                                  checked={pref.enabled}
                                  onCheckedChange={() => togglePreference(pref.id)}
                                  disabled={pref.required}
                                  className={pref.required ? "cursor-not-allowed" : ""}
                                />
                              </div>
                              <p className="text-sm text-gray-600">{pref.description}</p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 flex justify-end">
                          <Button 
                            onClick={handleSavePreferences}
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                          >
                            <Check className="h-4 w-4 mr-2" />
                            Guardar preferencias
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button 
                  onClick={closeModal} 
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Cerrar"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}