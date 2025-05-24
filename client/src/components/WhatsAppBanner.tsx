import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone, Mail, HelpCircle, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";

export function WhatsAppBanner() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showMiniChat, setShowMiniChat] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  // Preguntas frecuentes y respuestas automáticas
  const faqData: Record<string, { question: string; answer: string }> = {
    "servicios": {
      question: "¿Qué servicios ofrecen?",
      answer: "Ofrecemos servicios de psicología (NFLOW, NeuronMeg), desarrollo tecnológico (APPIA, TecnoApp), empleo (Empordà Jobs), salud (Saludalia, PluSalud), telecomunicaciones (Telecos) y programación (C++)."
    },
    "precios": {
      question: "¿Cuáles son sus precios?",
      answer: "NFLOW: 2.99€/mes | Empordà Jobs: 1200€/oferta | Otros servicios: Consulta personalizada. Contáctanos para presupuestos específicos."
    },
    "contacto": {
      question: "¿Cómo puedo contactarlos?",
      answer: "📞 +34 660 45 21 36\n📧 empordajobs@gmail.com\n📧 rmportbou@gmail.com\n📍 Girona, España"
    },
    "nflow": {
      question: "¿Qué es NFLOW?",
      answer: "NFLOW es nuestra app de apoyo psicológico con IA. Conecta profesionales con usuarios que necesitan orientación personalizada. Solo 2.99€/mes."
    },
    "trabajo": {
      question: "¿Buscan colaboradores?",
      answer: "¡Sí! Buscamos freelancers con comisión del 20%. Contáctanos por WhatsApp para más detalles sobre cómo trabajar con nosotros."
    }
  };

  const phoneNumber = "+34660452136";
  
  const openWhatsApp = (message = "") => {
    const baseMessage = `¡Hola! Me interesa conocer más sobre los servicios de JOBDA. ${message}`;
    const encodedMessage = encodeURIComponent(baseMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const QuickOptions = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      className="absolute bottom-16 right-0 bg-white rounded-xl shadow-xl border p-4 w-80 z-50"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-800">¿Cómo podemos ayudarte?</h3>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>
      </div>

      <div className="space-y-2">
        <Button
          onClick={() => openWhatsApp()}
          className="w-full bg-green-500 hover:bg-green-600 text-white justify-start"
        >
          <MessageCircle size={16} className="mr-2" />
          Chat directo por WhatsApp
        </Button>

        <Button
          onClick={() => setShowMiniChat(true)}
          variant="outline"
          className="w-full justify-start border-blue-200 hover:bg-blue-50"
        >
          <HelpCircle size={16} className="mr-2" />
          Preguntas frecuentes
        </Button>

        <Button
          onClick={() => openWhatsApp("Me gustaría conocer los precios de sus servicios.")}
          variant="outline"
          className="w-full justify-start border-purple-200 hover:bg-purple-50"
        >
          <DollarSign size={16} className="mr-2" />
          Consultar precios
        </Button>

        <Button
          onClick={() => openWhatsApp("Estoy interesado en trabajar como freelancer con ustedes.")}
          variant="outline"
          className="w-full justify-start border-amber-200 hover:bg-amber-50"
        >
          <Phone size={16} className="mr-2" />
          Trabaja con nosotros
        </Button>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100">
        <p className="text-xs text-gray-500 text-center">
          📞 +34 660 45 21 36 | 📧 empordajobs@gmail.com
        </p>
      </div>
    </motion.div>
  );

  const MiniChat = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      className="absolute bottom-16 right-0 bg-white rounded-xl shadow-xl border w-96 max-h-96 overflow-hidden z-50"
    >
      <div className="bg-green-500 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <MessageCircle size={20} className="mr-2" />
          <span className="font-semibold">Asistente JOBDA</span>
        </div>
        <button 
          onClick={() => {
            setShowMiniChat(false);
            setSelectedQuestion(null);
          }}
          className="text-white hover:text-gray-200"
        >
          <X size={20} />
        </button>
      </div>

      <div className="p-4 max-h-80 overflow-y-auto">
        {!selectedQuestion ? (
          <div>
            <div className="mb-4">
              <div className="bg-gray-100 rounded-lg p-3 mb-3">
                <p className="text-sm text-gray-700">
                  ¡Hola! Soy el asistente virtual de JOBDA. Selecciona una pregunta:
                </p>
              </div>
            </div>
            
            <div className="space-y-2">
              {Object.entries(faqData).map(([key, data]) => (
                <button
                  key={key}
                  onClick={() => setSelectedQuestion(key)}
                  className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors"
                >
                  <span className="text-sm font-medium text-gray-800">
                    {data.question}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100">
              <Button
                onClick={() => openWhatsApp("Tengo una consulta específica que no está en las preguntas frecuentes.")}
                className="w-full bg-green-500 hover:bg-green-600 text-white"
                size="sm"
              >
                <MessageCircle size={14} className="mr-2" />
                Hacer otra consulta
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <div className="bg-blue-50 rounded-lg p-3 mb-3">
                <p className="text-sm font-medium text-blue-800">
                  {faqData[selectedQuestion].question}
                </p>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-3">
                <p className="text-sm text-gray-700 whitespace-pre-line">
                  {faqData[selectedQuestion].answer}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={() => setSelectedQuestion(null)}
                variant="outline"
                size="sm"
                className="flex-1"
              >
                ← Volver
              </Button>
              <Button
                onClick={() => openWhatsApp(`Me interesa saber más sobre: ${faqData[selectedQuestion].question}`)}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                size="sm"
              >
                <MessageCircle size={14} className="mr-1" />
                Contactar
              </Button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && !showMiniChat && <QuickOptions />}
        {showMiniChat && <MiniChat />}
      </AnimatePresence>

      {/* Botón principal flotante */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <MessageCircle size={24} />
        )}
        
        {/* Badge de notificación */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            !
          </span>
        )}
      </motion.button>

      {/* Tooltip */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap"
        >
          ¿Necesitas ayuda? ¡Escríbenos!
          <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
        </motion.div>
      )}
    </div>
  );
}