import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-secondary-600 rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-8 md:p-12 text-white text-center">
            <h2 className="font-sans text-2xl md:text-3xl font-bold mb-4">¿Listo para empezar?</h2>
            <p className="mb-8 opacity-90 max-w-2xl mx-auto">
              Seleccione el servicio que mejor se adapte a sus necesidades actuales y comience a experimentar los beneficios de nuestras soluciones especializadas.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  className="bg-white text-primary hover:bg-white/90 font-sans font-semibold rounded-lg"
                  asChild
                >
                  <a href="https://mental-chat-ai-rmportbou.replit.app/" target="_blank" rel="noopener noreferrer" className="text-primary">
                    Ir a NFLOW
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 font-sans font-semibold rounded-lg"
                  asChild
                >
                  <a href="https://ejobs-spain-rmportbou.replit.app/" target="_blank" rel="noopener noreferrer" className="text-white">
                    Ir a JOBDA
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
