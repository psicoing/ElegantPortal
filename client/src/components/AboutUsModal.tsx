import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, User, GraduationCap, Briefcase, Award, Mail, Phone, MapPin, Calendar } from "lucide-react";

export function AboutUsModal() {
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
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) {
    return (
      <button
        className="font-sans font-medium text-gray-800 hover:text-primary transition py-2 text-left w-full"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          openModal();
        }}
      >
        Nosotros
      </button>
    );
  }

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-xl">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <User className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Nosotros</h2>
              <p className="text-blue-100">Conoce nuestro equipo profesional</p>
            </div>
          </div>
          <button
            onClick={closeModal}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Director Profile */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-600 text-white rounded-full">
                <User className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Ramón Molons de San Román
                </h3>
                <p className="text-lg text-blue-600 font-medium mb-3">
                  NeuroIngeniero & Psicólogo Clínico
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-blue-600" />
                    <span>Colegiado Nº 7851 - Col. Psicólogos Barcelona</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span>56 años de edad</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span>Portbou, Cataluña, España</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <span>+34 660 45 21 36</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-blue-600" />
              <h4 className="text-xl font-semibold text-gray-900">Perfil Profesional</h4>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                <strong>Especialista en Neuroingeniería aplicada al bienestar y la salud laboral.</strong> 
                Mi formación en Psicología Clínica y Educativa, Ingeniería de Telecomunicaciones y 
                Biometría Matemática me permite diseñar sistemas neurocomputacionales, análisis de 
                redes neuronales y modulación de señales bioeléctricas para mejorar la salud mental 
                y el rendimiento organizacional.
              </p>
              <p className="mb-4">
                Actualmente, colaboro con <strong>NEURON MEG</strong>, desarrollando <em>Tickets Plusalud</em>, 
                una plataforma de evaluación neurofuncional y monitoreo de la salud mental mediante 
                inteligencia artificial. También participo en <strong>Empordajobs.eu</strong>, optimizando 
                la selección de talento a través de modelos neurocognitivos.
              </p>
              <p>
                Además, lidero el desarrollo de <strong>NFlow</strong>, un chatbot avanzado de psicología 
                de ayuda, diseñado para ofrecer soporte emocional, orientación en crisis y estrategias 
                de bienestar a adolescentes y adultos. Integrando neurociencia e inteligencia artificial, 
                NFlow representa un avance en la accesibilidad a la salud mental.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-blue-600" />
              <h4 className="text-xl font-semibold text-gray-900">Formación Académica</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900">Licenciatura en Psicología</h5>
                <p className="text-blue-600 font-medium">Universitat Autònoma de Barcelona</p>
                <p className="text-sm text-gray-600">Clínica y Educativa (1989-1993)</p>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900">Ingeniería de Telecomunicaciones</h5>
                <p className="text-blue-600 font-medium">Universitat Oberta de Catalunya</p>
                <p className="text-sm text-gray-600">Especialización en NeuroIngeniería (2010)</p>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900">Máster en Biomatemática</h5>
                <p className="text-blue-600 font-medium">Universitat de Barcelona</p>
                <p className="text-sm text-gray-600">Bioinformática y Biología Computacional (2020-2021)</p>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900">Postgrado en Psicología de la Salud</h5>
                <p className="text-blue-600 font-medium">Universitat de Girona</p>
                <p className="text-sm text-gray-600">Comportamiento y Clínica (1994-1995)</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-blue-600" />
              <h4 className="text-xl font-semibold text-gray-900">Experiencia Profesional</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-semibold text-gray-900">Director de Proyecto - NFLOW PSYCHOLOGY</h5>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Actual</span>
                </div>
                <p className="text-green-700 font-medium mb-1">Marzo 2025 - Presente</p>
                <p className="text-sm text-gray-600">Desarrollo de aplicación de apoyo en Psicología</p>
              </div>
              
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900">Psicólogo Clínico - INS NEURONMEG</h5>
                <p className="text-blue-600 font-medium mb-1">Septiembre 1994 - Marzo 2025 (30 años)</p>
                <p className="text-sm text-gray-600">Consulta de Psicología a domicilio en Portbou, Cataluña</p>
              </div>
              
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900">Investigador - NEURON MEG</h5>
                <p className="text-blue-600 font-medium mb-1">Octubre 2010 - Marzo 2025 (14 años)</p>
                <p className="text-sm text-gray-600">Investigación en neuroingeniería y sistemas neuronales</p>
              </div>
              
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900">Director de Ventas - EMPORDAJOBS SLU</h5>
                <p className="text-blue-600 font-medium mb-1">Noviembre 2016 - Enero 2024 (7 años)</p>
                <p className="text-sm text-gray-600">JOBDA, selección de personal para empresas y particulares</p>
              </div>
            </div>
          </div>

          {/* Recognitions */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-blue-600" />
              <h4 className="text-xl font-semibold text-gray-900">Reconocimientos</h4>
            </div>
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-amber-600" />
                <div>
                  <h5 className="font-semibold text-amber-800">Mejor Psicólogo - Doctoralia</h5>
                  <p className="text-sm text-amber-700">Reconocimiento por excelencia profesional</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-600 text-white p-6 rounded-xl">
            <h4 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <Mail className="h-6 w-6" />
              Información de Contacto Profesional
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <span>+34 660 45 21 36</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <span>empordajobs@gmail.com</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  <span>Portbou, Girona, España</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5" />
                  <span>Lunes a Viernes: 9:00 - 18:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-6 bg-gray-50 rounded-b-xl">
          <Button 
            onClick={closeModal}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Cerrar
          </Button>
        </div>
      </div>
    </div>
  );
}