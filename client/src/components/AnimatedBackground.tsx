import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  direction: number;
}

export function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Generate particles
    const newParticles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 0.5 + 0.1,
        direction: Math.random() * Math.PI * 2,
      });
    }
    setParticles(newParticles);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-slate-900 dark:to-purple-950">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-blue-500/5 animate-pulse" />
      </div>

      {/* Floating Geometric Shapes */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.03" />
          </linearGradient>
        </defs>

        {/* Animated Circles */}
        <motion.circle
          cx="20%"
          cy="30%"
          r="60"
          fill="url(#gradient1)"
          animate={{
            cx: ["20%", "25%", "20%"],
            cy: ["30%", "35%", "30%"],
            r: [60, 80, 60],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.circle
          cx="80%"
          cy="20%"
          r="40"
          fill="url(#gradient2)"
          animate={{
            cx: ["80%", "75%", "80%"],
            cy: ["20%", "25%", "20%"],
            r: [40, 60, 40],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.circle
          cx="60%"
          cy="80%"
          r="50"
          fill="url(#gradient1)"
          animate={{
            cx: ["60%", "65%", "60%"],
            cy: ["80%", "75%", "80%"],
            r: [50, 70, 50],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Animated Polygons */}
        <motion.polygon
          points="10,150 40,120 70,150 40,180"
          fill="url(#gradient2)"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "40px 150px" }}
        />

        <motion.polygon
          points="200,80 230,50 260,80 230,110"
          fill="url(#gradient1)"
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "230px 80px" }}
        />
      </svg>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-300/10 dark:to-purple-300/10"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
          }}
          animate={{
            x: [0, Math.cos(particle.direction) * 100],
            y: [0, Math.sin(particle.direction) * 100],
            opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity],
          }}
          transition={{
            duration: 10 + particle.speed * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Mouse Interaction Effect */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/5 dark:to-blue-500/5 blur-xl"
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />

      {/* Flowing Wave Effect */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <motion.path
            d="M0,60 C150,100 300,0 450,35 C600,70 750,30 900,45 C1050,60 1200,20 1200,20 L1200,120 L0,120 Z"
            fill="url(#gradient1)"
            animate={{
              d: [
                "M0,60 C150,100 300,0 450,35 C600,70 750,30 900,45 C1050,60 1200,20 1200,20 L1200,120 L0,120 Z",
                "M0,80 C150,60 300,40 450,55 C600,50 750,70 900,65 C1050,40 1200,60 1200,60 L1200,120 L0,120 Z",
                "M0,60 C150,100 300,0 450,35 C600,70 750,30 900,45 C1050,60 1200,20 1200,20 L1200,120 L0,120 Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
    </div>
  );
}