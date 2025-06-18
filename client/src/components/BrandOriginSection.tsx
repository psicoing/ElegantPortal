import { motion } from "framer-motion";

export function BrandOriginSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            El Origen de <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">JOBDA</span>
          </h2>
          
          {/* Timeline */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-3 mx-auto">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2016</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Inicio como autónomo</p>
              </div>
              
              <div className="hidden md:block text-gray-400">→</div>
              
              <div className="text-center">
                <div className="bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mb-3 mx-auto">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">2020</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">EMPORDAJOBS<br/>se convierte en empresa</p>
              </div>
              
              <div className="hidden md:block text-gray-400">→</div>
              
              <div className="text-center">
                <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mb-3 mx-auto">
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">2025</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Evolución hacia<br/>matriz JOBDA</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              La marca JOBDA nace de la evolución creativa de nuestra empresa matriz:
            </p>
            
            {/* Visual explanation */}
            <div className="flex flex-col items-center space-y-8">
              {/* Original name */}
              <motion.div 
                className="text-4xl md:text-6xl font-bold"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span className="text-emerald-600">EMPOR</span>
                <span className="text-blue-600">DA</span>
                <span className="text-purple-600">JOBS</span>
              </motion.div>
              
              {/* Arrow */}
              <motion.div 
                className="text-3xl text-gray-400"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                ↓
              </motion.div>
              
              {/* Breakdown */}
              <motion.div 
                className="flex flex-wrap justify-center items-center gap-4 text-2xl md:text-4xl font-bold"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center">
                  <span className="text-purple-600 border-2 border-purple-200 bg-purple-50 px-3 py-2 rounded-lg">JOB</span>
                  <span className="text-gray-400 mx-2">+</span>
                  <span className="text-blue-600 border-2 border-blue-200 bg-blue-50 px-3 py-2 rounded-lg">DA</span>
                </div>
              </motion.div>
              
              {/* Arrow */}
              <motion.div 
                className="text-3xl text-gray-400"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.0 }}
              >
                ↓
              </motion.div>
              
              {/* Final result */}
              <motion.div 
                className="text-5xl md:text-7xl font-bold"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-blue-800 bg-clip-text text-transparent">
                  JOBDA
                </span>
              </motion.div>
            </div>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mt-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              Así nació <strong>JOBDA</strong>: combinando "JOB" de nuestra especialidad en empleo 
              y "DA" de nuestra identidad del Empordà, creando una marca que representa 
              innovación, trabajo y territorio.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}