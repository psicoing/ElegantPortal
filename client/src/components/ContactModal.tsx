import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Building, Clock, X } from "lucide-react";
import { motion } from "framer-motion";

export function ContactModal({ text = "Contacto" }: { text?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Controladores para abrir/cerrar modal
  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  // Manejar clics fuera del modal para cerrarlo
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Utilidades para contacto
  const handleCallPhone = () => {
    window.location.href = "tel:+34660452136";
  };
  
  const handleSendEmail = () => {
    window.location.href = "mailto:empordajobs@gmail.com";
  };
  
  // Animaciones
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 }
    })
  };

  // Tecla Escape para cerrar el modal
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
      // Asegurarnos de restaurar overflow al desmontar
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <button
        className="font-sans font-medium text-gray-800 hover:text-primary transition py-2 text-left w-full border-b border-gray-100"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          openModal();
        }}
      >
        {text}
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 transition-all"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto transform transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-6">
              {/* Botón para cerrar */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Cerrar"
              >
                <X size={24} />
              </button>

              {/* Encabezado */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
                  Información de Contacto
                </h2>
                <p className="text-gray-600">
                  Estamos aquí para responder a sus consultas y brindarle asistencia.
                </p>
              </div>

              {/* Contenido */}
              <div className="relative mt-4 p-5 rounded-xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 shadow-md overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-blue-100 -translate-y-1/2 translate-x-1/2 blur-xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-indigo-100 translate-y-1/2 -translate-x-1/2 blur-xl opacity-50"></div>
                
                <div className="relative">
                  <div className="text-center mb-5">
                    <div className="bg-blue-100 inline-block p-3 rounded-lg mb-2">
                      <Building className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-800">EMPORDAJOBS SL</h3>
                    <p className="text-xs text-gray-500">CIF: B02701100</p>
                  </div>
                
                  <div className="space-y-4">
                    <motion.div 
                      className="flex items-center gap-3 p-3 rounded-lg transition-colors border border-transparent hover:border-blue-100 hover:bg-blue-50"
                      custom={0}
                      initial="hidden"
                      animate="visible"
                      variants={itemVariants}
                    >
                      <div className="bg-blue-100 p-2 rounded-full">
                        <MapPin className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Ubicación</p>
                        <p className="text-sm text-gray-600">Portbou, Girona, España</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-blue-100 hover:bg-blue-50"
                      onClick={handleCallPhone}
                      custom={1}
                      initial="hidden"
                      animate="visible"
                      variants={itemVariants}
                    >
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Phone className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Teléfono</p>
                        <p className="text-sm text-blue-600">+34 660 45 21 36</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-blue-100 hover:bg-blue-50"
                      onClick={handleSendEmail}
                      custom={2}
                      initial="hidden"
                      animate="visible"
                      variants={itemVariants}
                    >
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Mail className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Email</p>
                        <p className="text-sm text-blue-600">empordajobs@gmail.com</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center gap-3 p-3 rounded-lg transition-colors border border-transparent hover:border-blue-100 hover:bg-blue-50"
                      custom={3}
                      initial="hidden"
                      animate="visible"
                      variants={itemVariants}
                    >
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Horario</p>
                        <p className="text-sm text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={handleCallPhone}
                  className="w-full sm:w-auto border-blue-200 text-blue-700 hover:bg-blue-50"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Llamar
                </Button>
                
                <Button 
                  type="button" 
                  onClick={handleSendEmail}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Enviar email
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}