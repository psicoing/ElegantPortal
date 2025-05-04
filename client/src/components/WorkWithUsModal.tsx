import { useState, useEffect, useRef, ReactNode } from "react";
import { Link } from "wouter";
import { X, User2 } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface WorkWithUsModalProps {
  children?: ReactNode;
  text?: string;
  variant?: "menu" | "button" | "icon";
  icon?: ReactNode;
}

export function WorkWithUsModal({
  children,
  text = "Trabaja con nosotros",
  variant = "menu",
  icon = <User2 className="h-4 w-4" />
}: WorkWithUsModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  let trigger;
  if (children) {
    trigger = (
      <div onClick={() => setIsOpen(true)}>
        {children}
      </div>
    );
  } else if (variant === "menu") {
    trigger = (
      <button
        className="font-sans font-medium text-gray-800 hover:text-primary transition py-2 border-b border-gray-100"
        onClick={() => setIsOpen(true)}
      >
        {text}
      </button>
    );
  } else if (variant === "button") {
    trigger = (
      <button
        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
        onClick={() => setIsOpen(true)}
      >
        {icon}
        <span>{text}</span>
      </button>
    );
  } else if (variant === "icon") {
    trigger = (
      <button
        className="p-2 text-gray-600 hover:text-primary transition-colors"
        onClick={() => setIsOpen(true)}
        aria-label={text}
      >
        {icon}
      </button>
    );
  }

  return (
    <>
      {trigger}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div
            ref={modalRef}
            className={`bg-white rounded-lg shadow-xl max-h-[90vh] overflow-y-auto ${
              isMobile ? "w-full max-w-[95%] mx-auto" : "w-full max-w-4xl"
            }`}
          >
            <div className="sticky top-0 z-10 bg-white p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800">Trabaja con nosotros</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                aria-label="Cerrar"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <section>
                <h3 className="text-lg font-semibold mb-3 text-primary">¿Quieres formar parte de nuestro equipo?</h3>
                <p className="text-gray-600 mb-6">
                  En JOBDA buscamos colaboradores que compartan nuestra visión y quieran formar parte de un proyecto innovador en el ámbito de la transformación digital y las aplicaciones de IA.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-100">
                  <h4 className="font-medium text-blue-800 mb-2">Modelo de colaboración freelance</h4>
                  <p className="text-gray-700 mb-4">
                    Trabajamos con un modelo de colaboración freelance basado en comisiones del 25% sobre las ventas generadas.
                  </p>
                  <ul className="space-y-2 list-disc pl-6 text-gray-700">
                    <li>Sin horarios fijos ni exclusividad</li>
                    <li>Comisiones directas del 25% por cada venta</li>
                    <li>Apoyo técnico y comercial completo</li>
                    <li>Formación en nuestras soluciones tecnológicas</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Ejemplo de comisiones</h4>
                  <p className="text-gray-600 mb-4">Venta de un servicio de EMPORDÀ JOBS por 1.800€:</p>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-3">
                    <span className="text-gray-700">Venta al cliente</span>
                    <span className="font-semibold text-primary">1.800€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Tu comisión (25%)</span>
                    <span className="font-semibold text-green-600">450€</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-primary">¿Quieres calcular tu potencial de ganancias?</h3>
                <p className="text-gray-600 mb-4">
                  Utiliza nuestra calculadora para estimar cuánto podrías ganar según tus objetivos de ventas.
                </p>
                
                <div className="flex justify-center mb-8">
                  <Link href="/trabajo-comisiones-calculadora" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Ir a la calculadora de comisiones
                  </Link>
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-primary">¿Cómo empezar?</h3>
                <p className="text-gray-600 mb-4">
                  Si estás interesado en colaborar con nosotros, contáctanos y te proporcionaremos toda la información necesaria para comenzar.
                </p>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3">Contacto para colaboradores</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-600 mb-1">Email:</p>
                      <a href="mailto:empordajobs@gmail.com" className="text-blue-600 hover:underline">
                        empordajobs@gmail.com
                      </a>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Teléfono:</p>
                      <a href="tel:+34660452136" className="text-blue-600 hover:underline">
                        +34 660 45 21 36
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}