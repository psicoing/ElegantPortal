import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export function CTASection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-5xl mx-auto bg-gradient-to-r from-primary to-secondary-600 rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-8 md:p-12 text-white text-center">
            <h2 className="font-sans text-2xl md:text-3xl font-bold mb-4">{t('cta.title')}</h2>
            <p className="mb-8 opacity-90 max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  className="bg-white text-primary hover:bg-white/90 font-sans font-semibold rounded-lg"
                  asChild
                >
                  <a href="https://mental-chat-ai-rmportbou.replit.app/" target="_blank" rel="noopener noreferrer" className="text-primary">
                    {t('service.nflow.button')}
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  variant="outline"
                  className="border-2 border-black bg-black hover:bg-gray-800 font-sans font-semibold rounded-lg"
                  asChild
                >
                  <a 
                    href="https://appia.jobda.es/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white"
                    style={{ color: 'white' }}
                  >
                    <span className="text-white">{t('service.appia.button')}</span>
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  className="bg-white text-primary hover:bg-white/90 font-sans font-semibold rounded-lg"
                  asChild
                >
                  <a href="https://sinapsy.jobda.es/" target="_blank" rel="noopener noreferrer" className="text-primary">
                    {t('service.sinapsy.button')}
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  variant="outline"
                  className="border-2 border-black bg-black hover:bg-gray-800 font-sans font-semibold rounded-lg"
                  asChild
                >
                  <a
                    href="https://empordajobs.jobda.es/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white"
                    style={{ color: 'white' }}
                  >
                    <span className="text-white">{t('service.empordajobs.button')}</span>
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  className="bg-white text-primary hover:bg-white/90 font-sans font-semibold rounded-lg"
                  asChild
                >
                  <a href="https://neuronmeg.jobda.es/external" target="_blank" rel="noopener noreferrer" className="text-primary">
                    {t('neuronmeg.button')}
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
