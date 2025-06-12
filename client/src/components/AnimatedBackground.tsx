import { motion } from "framer-motion";

export function AnimatedBackground() {

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Simple Animated Gradient Background */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
            "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1))",
            "linear-gradient(225deg, rgba(147, 51, 234, 0.1), rgba(16, 185, 129, 0.1))",
            "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 blur-2xl"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 120, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-to-br from-emerald-400/20 to-blue-600/20 blur-2xl"
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 60, -100, 0],
          scale: [0.8, 1.3, 0.9, 0.8],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-violet-400/20 to-pink-600/20 blur-xl"
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 100, -70, 0],
          scale: [1.1, 0.7, 1.4, 1.1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 right-1/3 w-20 h-20 border border-blue-300/30 rotate-45"
        animate={{
          rotate: [45, 225, 405],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}