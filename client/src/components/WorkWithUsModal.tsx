import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, ChevronRight, FileText, Calculator, CheckCircle, Users, BarChart } from "lucide-react";
import { motion } from "framer-motion";

interface WorkWithUsModalProps {
  children?: React.ReactNode;
  text?: string;
  variant?: "menu" | "button" | "icon";
  icon?: React.ReactNode;
}

export function WorkWithUsModal({
  children,
  text = "Trabaja con nosotros",
  variant = "menu",
  icon
}: WorkWithUsModalProps) {
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

  // Renderizar trigger según el tipo
  const renderTrigger = () => {
    if (children) {
      // Si el hijo es un elemento de React y podemos clonarlo
      if (React.isValidElement(children)) {
        const childProps: any = {
          onClick: (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            openModal();
          }
        };
        return React.cloneElement(children, childProps);
      }
      // Si no es un elemento válido, simplemente retornamos los children
      return children;
    }

    if (variant === "menu") {
      return (
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
      );
    }

    if (variant === "icon" && icon) {
      return (
        <button 
          className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            openModal();
          }}
        >
          {icon}
        </button>
      );
    }

    // default button
    return (
      <Button 
        type="button" 
        className="bg-primary hover:bg-primary/90 text-white font-sans font-semibold rounded-lg py-3 px-6 shadow-md transition"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          openModal();
        }}
      >
        {text}
      </Button>
    );
  };

  return (
    <>
      {renderTrigger()}

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 transition-all"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transform transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-6 md:p-8">
              {/* Botón para cerrar */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Cerrar"
              >
                <X size={24} />
              </button>

              {/* Encabezado */}
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
                  Trabaja con Nosotros
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Forma parte de nuestro equipo de profesionales independientes y desarrolla tu carrera como comercial o colaborador en cualquiera de nuestros servicios.
                </p>
              </div>

              {/* Contenido principal */}
              <div className="space-y-6">
                {/* Sección de contrato mercantil */}
                <div className="rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-transparent p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg shrink-0">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Condiciones de Colaboración</h3>
                      <p className="text-gray-700 mb-4">
                        Las colaboraciones se realizan mediante contrato mercantil, lo que requiere que el colaborador disponga de alta como autónomo vigente, que será verificada antes de iniciar la relación. Este modelo ofrece flexibilidad y ventajas tanto para el colaborador como para nuestra empresa.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sección de opciones */}
                <div className="rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-transparent p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg shrink-0">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Áreas de Colaboración</h3>
                      <p className="text-gray-700 mb-4">
                        Ofrecemos múltiples opciones para colaborar con nosotros en cualquiera de nuestros servicios como JOBDA, NFLOW, EmpordàJobs, Appia, Sinapsy o NeuronMeg. Puedes consultar más detalles sobre cada uno en nuestra sección de servicios.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                        <div className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Representación comercial</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Consultoría técnica</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Desarrollo de aplicaciones</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Psicología y salud mental</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sistema de comisiones */}
                <div className="rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-transparent p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg shrink-0">
                      <Calculator className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Sistema de Comisiones</h3>
                      <p className="text-gray-700 mb-4">
                        Para los comerciales, facilitamos un enlace específico que permite realizar un seguimiento en tiempo real de ventas y comisiones. La compensación será un 20% del valor de venta (IVA incluido).
                      </p>
                      
                      <div className="bg-white border border-blue-200 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Ejemplo de comisión por venta:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex justify-between">
                            <span>Venta al cliente (con IVA):</span>
                            <span className="font-semibold">1.800 €</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Comisión del comercial (20%):</span>
                            <span className="font-semibold">360 €</span>
                          </li>
                          <li className="flex justify-between">
                            <span>IVA (21%):</span>
                            <span className="font-semibold">+75,60 €</span>
                          </li>
                          <li className="flex justify-between">
                            <span>IRPF (15%):</span>
                            <span className="font-semibold">-54 €</span>
                          </li>
                          <li className="flex justify-between border-t border-gray-200 pt-2 font-semibold text-blue-700">
                            <span>Total a recibir:</span>
                            <span>381,60 €</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-center mt-4">
                        <Button
                          className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
                          onClick={() => window.open('/trabajo-comisiones-calculadora', '_blank')}
                        >
                          Ver detalles del sistema de comisiones
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Beneficios de colaborar */}
                <div className="rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-transparent p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg shrink-0">
                      <BarChart className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Beneficios de Colaborar con Nosotros</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                          <h4 className="font-semibold text-gray-800 mb-2">Flexibilidad</h4>
                          <p className="text-sm text-gray-600">
                            Trabaja a tu ritmo, gestiona tu tiempo y organízate según tus necesidades.
                          </p>
                        </div>
                        
                        <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                          <h4 className="font-semibold text-gray-800 mb-2">Crecimiento Profesional</h4>
                          <p className="text-sm text-gray-600">
                            Acceso a formación continua y oportunidades en múltiples sectores tecnológicos.
                          </p>
                        </div>
                        
                        <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                          <h4 className="font-semibold text-gray-800 mb-2">Comisiones Competitivas</h4>
                          <p className="text-sm text-gray-600">
                            20% sobre el valor total de las ventas con un sistema transparente de seguimiento.
                          </p>
                        </div>
                        
                        <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                          <h4 className="font-semibold text-gray-800 mb-2">Soporte Continuo</h4>
                          <p className="text-sm text-gray-600">
                            Equipo de soporte para ayudarte con cualquier duda técnica o administrativa.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  ¿Interesado en formar parte de nuestro equipo?
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-blue-200 text-blue-700 hover:bg-blue-50"
                    onClick={() => window.open('https://forms.gle/1DJY5GKbUZ8RYjRd6', '_blank')}
                  >
                    Más información
                  </Button>
                  
                  <Button
                    type="button"
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.open('https://forms.gle/1DJY5GKbUZ8RYjRd6', '_blank')}
                  >
                    Solicitar colaboración
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}