import { motion } from "framer-motion";

export function BrandOriginSection() {
  return (
    <section className="py-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-blue-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Grupo <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">JOBDA</span>
          </h2>
          
          {/* Compact Timeline */}
          <div className="flex justify-center items-center gap-4 md:gap-8 mb-6">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-12 h-12 flex items-center justify-center mb-2 mx-auto">
                <span className="text-lg font-bold text-blue-600 dark:text-blue-400">2016</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300">Autónomo</p>
            </div>
            
            <div className="text-gray-400">→</div>
            
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 rounded-full w-12 h-12 flex items-center justify-center mb-2 mx-auto">
                <span className="text-lg font-bold text-green-600 dark:text-green-400">2020</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300">EMPORDAJOBS</p>
            </div>
            
            <div className="text-gray-400">→</div>
            
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-12 h-12 flex items-center justify-center mb-2 mx-auto">
                <span className="text-lg font-bold text-purple-600 dark:text-purple-400">2025</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300">JOBDA</p>
            </div>
          </div>
          
          {/* Compact Visual explanation */}
          <div className="flex flex-col items-center space-y-4">
            {/* Original name breakdown */}
            <div className="text-2xl md:text-3xl font-bold">
              <span className="text-emerald-600">EMPOR</span>
              <span className="text-blue-600">DA</span>
              <span className="text-purple-600">JOBS</span>
            </div>
            
            {/* Simplified breakdown */}
            <div className="flex items-center gap-2 text-xl md:text-2xl font-bold">
              <span className="text-purple-600 border-2 border-purple-200 bg-purple-50 px-2 py-1 rounded">JOB</span>
              <span className="text-gray-400">+</span>
              <span className="text-blue-600 border-2 border-blue-200 bg-blue-50 px-2 py-1 rounded">DA</span>
              <span className="text-gray-400">=</span>
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">JOBDA</span>
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-300 max-w-lg mx-auto mt-4">
              De nuestra experiencia tecnológica (JOB) y nuestra identidad del Empordà (DA), 
              nació JOBDA: plataforma de tecnología y multiservicios digitales.
            </p>
          </div>
          
          {/* Evolution Box */}
          <motion.div 
            className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg border border-blue-200 dark:border-blue-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                15
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 text-center">
              Evolución Tecnológica
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 text-center leading-relaxed">
              JOBDA recoge los inicios de EMPORDAJOBS pero ha evolucionado hacia una 
              <span className="font-semibold text-blue-600 dark:text-blue-400"> plataforma integral</span> que 
              ofrece <span className="font-semibold text-purple-600 dark:text-purple-400">15 servicios tecnológicos</span> 
              especializados en salud mental, inteligencia artificial, desarrollo de aplicaciones y soluciones digitales innovadoras.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}