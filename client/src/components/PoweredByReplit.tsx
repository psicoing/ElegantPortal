import { motion } from "framer-motion";

export function PoweredByReplit() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex items-center justify-center space-x-3 py-4"
    >
      <div className="flex items-center space-x-2 bg-slate-900 rounded-lg px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Replit logo squares */}
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
          <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
        </div>
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
          <div className="w-2 h-2 bg-transparent"></div>
        </div>
        
        {/* Text */}
        <div className="flex items-center space-x-2 ml-2">
          <span className="text-white font-semibold text-sm">replit</span>
          <div className="w-px h-4 bg-slate-600"></div>
          <span className="text-slate-300 text-xs font-medium">powered by</span>
        </div>
      </div>
      
      <div className="text-xs text-slate-500 italic">
        Built with love on Replit
      </div>
    </motion.div>
  );
}