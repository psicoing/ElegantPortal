import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ModernEffects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Aurora Borealis Effect */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 70%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Light Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 blur-xl"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 120, 0],
          scale: [1, 1.2, 0.8, 1],
          opacity: [0.3, 0.7, 0.4, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400/20 to-blue-600/20 blur-xl"
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 60, -100, 0],
          scale: [0.8, 1.3, 0.9, 0.8],
          opacity: [0.4, 0.6, 0.3, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-3/4 w-20 h-20 rounded-full bg-gradient-to-br from-violet-400/20 to-pink-600/20 blur-xl"
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 100, -70, 0],
          scale: [1.1, 0.7, 1.4, 1.1],
          opacity: [0.2, 0.8, 0.3, 0.2],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Geometric Patterns */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <linearGradient id="geometricGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="rgb(147, 51, 234)" stopOpacity="0.05" />
            <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#grid)" className="text-primary/5" />
        
        {/* Animated hexagons */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "50% 50%" }}
        >
          <polygon
            points="200,100 240,130 240,190 200,220 160,190 160,130"
            fill="url(#geometricGradient)"
            opacity="0.3"
          />
          <polygon
            points="400,300 440,330 440,390 400,420 360,390 360,330"
            fill="url(#geometricGradient)"
            opacity="0.2"
          />
          <polygon
            points="800,200 840,230 840,290 800,320 760,290 760,230"
            fill="url(#geometricGradient)"
            opacity="0.25"
          />
        </motion.g>
      </svg>

      {/* Flowing Energy Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        <motion.path
          d="M0,200 Q200,150 400,200 T800,200"
          stroke="url(#energyGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.path
          d="M0,400 Q300,350 600,400 T1200,400"
          stroke="url(#energyGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </svg>

      {/* Subtle Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-multiply dark:mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}