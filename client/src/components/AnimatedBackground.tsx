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

      {/* Complex SVG Shapes */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="complexGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.4" />
            <stop offset="50%" stopColor="rgb(147, 51, 234)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="complexGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Complex Hexagon */}
        <motion.polygon
          points="300,100 360,130 360,190 300,220 240,190 240,130"
          fill="url(#complexGradient1)"
          filter="url(#glow)"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "300px 160px" }}
        />

        {/* Nested Hexagons */}
        <motion.g
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "700px 300px" }}
        >
          <polygon
            points="700,250 730,265 730,295 700,310 670,295 670,265"
            fill="url(#complexGradient2)"
            filter="url(#glow)"
          />
          <polygon
            points="700,270 720,280 720,300 700,310 680,300 680,280"
            fill="url(#complexGradient1)"
            opacity="0.7"
          />
        </motion.g>

        {/* Star Shape */}
        <motion.polygon
          points="800,200 810,230 840,230 818,248 828,278 800,260 772,278 782,248 760,230 790,230"
          fill="url(#complexGradient1)"
          filter="url(#glow)"
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "800px 239px" }}
        />

        {/* Complex Wave Pattern */}
        <motion.path
          d="M0,400 Q100,350 200,400 T400,400 Q500,350 600,400 T800,400 Q900,350 1000,400 T1200,400"
          stroke="url(#complexGradient2)"
          strokeWidth="3"
          fill="none"
          filter="url(#glow)"
          animate={{
            d: [
              "M0,400 Q100,350 200,400 T400,400 Q500,350 600,400 T800,400 Q900,350 1000,400 T1200,400",
              "M0,420 Q100,370 200,420 T400,420 Q500,370 600,420 T800,420 Q900,370 1000,420 T1200,420",
              "M0,400 Q100,350 200,400 T400,400 Q500,350 600,400 T800,400 Q900,350 1000,400 T1200,400",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Spiral */}
        <motion.path
          d="M500,500 Q520,480 540,500 Q560,520 540,540 Q520,560 500,540 Q480,520 500,500"
          stroke="url(#complexGradient1)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "520px 520px" }}
        />

        {/* Complex Grid Pattern */}
        <motion.g
          opacity="0.3"
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <line x1="100" y1="100" x2="200" y2="150" stroke="url(#complexGradient1)" strokeWidth="1" />
          <line x1="200" y1="150" x2="150" y2="250" stroke="url(#complexGradient2)" strokeWidth="1" />
          <line x1="150" y1="250" x2="250" y2="300" stroke="url(#complexGradient1)" strokeWidth="1" />
          <line x1="250" y1="300" x2="200" y2="200" stroke="url(#complexGradient2)" strokeWidth="1" />
          <circle cx="175" cy="200" r="3" fill="url(#complexGradient1)" />
          <circle cx="225" cy="225" r="2" fill="url(#complexGradient2)" />
        </motion.g>

        {/* Morphing Shape */}
        <motion.path
          fill="url(#complexGradient2)"
          filter="url(#glow)"
          animate={{
            d: [
              "M100,600 Q150,550 200,600 Q250,650 300,600 Q350,550 400,600 Q350,650 300,700 Q250,750 200,700 Q150,650 100,600",
              "M120,620 Q170,570 220,620 Q270,670 320,620 Q370,570 420,620 Q370,670 320,720 Q270,770 220,720 Q170,670 120,620",
              "M100,600 Q150,550 200,600 Q250,650 300,600 Q350,550 400,600 Q350,650 300,700 Q250,750 200,700 Q150,650 100,600",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* 3D-like Geometric Elements */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-24 h-24"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 180],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 transform rotate-45 border border-blue-300/40 backdrop-blur-sm" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-gradient-conic from-blue-400/30 via-purple-500/30 to-emerald-400/30 rounded-full"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
          borderRadius: ["50%", "30%", "50%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}