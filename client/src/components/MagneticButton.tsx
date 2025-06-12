import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

export function MagneticButton({ children, className, onClick, variant = "default", size = "default" }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      style={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
    >
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={`${className} transition-all duration-300 hover:shadow-xl`}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        onClick={onClick}
      >
        {children}
      </Button>
    </motion.div>
  );
}