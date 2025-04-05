import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ContactDialog } from "./ContactDialog";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            ¿Tienes alguna pregunta?
          </h2>
          <p className="text-gray-600">
            Estamos aquí para ayudarte. No dudes en ponerte en contacto con nosotros.
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="text-center">
              <p className="text-gray-700 mb-6">
                Haz clic en el botón de contacto para ver nuestra información de contacto detallada.
              </p>
            </div>
            
            <ContactDialog>
              <Button 
                type="button" 
                className="bg-primary hover:bg-primary/90 text-white font-sans font-semibold rounded-lg py-3 px-6 shadow-md transition"
              >
                Información de contacto
              </Button>
            </ContactDialog>

            <div className="w-full max-w-sm mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <ContactDialog>
                  <button className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
                    <Mail className="w-6 h-6" />
                  </button>
                </ContactDialog>
                <p className="mt-2 text-sm text-gray-600">Email</p>
              </div>
              
              <div className="text-center">
                <ContactDialog>
                  <button className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
                    <Phone className="w-6 h-6" />
                  </button>
                </ContactDialog>
                <p className="mt-2 text-sm text-gray-600">Teléfono</p>
              </div>
              
              <div className="text-center">
                <ContactDialog>
                  <button className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
                    <MapPin className="w-6 h-6" />
                  </button>
                </ContactDialog>
                <p className="mt-2 text-sm text-gray-600">Ubicación</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
