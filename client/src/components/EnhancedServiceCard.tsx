import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { ReactNode } from "react";

interface EnhancedServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  url: string;
  badgeText: string;
  variant: "primary" | "secondary";
  imageSrc?: string;
  onClick?: () => void;
}

export function EnhancedServiceCard({ 
  icon, 
  title, 
  description, 
  features, 
  url, 
  badgeText, 
  variant, 
  imageSrc,
  onClick 
}: EnhancedServiceCardProps) {
  const isPrimary = variant === "primary";

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full group"
    >
      <Card className={`overflow-hidden shadow-xl border-2 border-transparent h-full flex flex-col relative
        ${isPrimary ? 'card-gradient-1 hover:border-primary/50' : 'card-gradient-2 hover:border-blue-300/50'}
        transition-all duration-500 hover:shadow-2xl`}>
        
        {/* Floating badge */}
        <div className="absolute top-4 right-4 z-10">
          <Badge 
            className={`${
              badgeText === "Anti-edadismo" || badgeText === "Anti-ageism" || badgeText === "Anti-edatisme" 
                ? 'anti-ageism-badge' 
                : isPrimary 
                  ? 'bg-primary/20 text-primary border-primary/30 backdrop-blur-sm' 
                  : 'bg-blue-500/20 text-blue-600 border-blue-300/30 backdrop-blur-sm'
            } rounded-full px-3 py-1 text-xs font-semibold shadow-lg`}
          >
            {badgeText}
          </Badge>
        </div>

        {/* Premium glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {imageSrc && (
          <div className="relative w-full h-64 overflow-hidden">
            <motion.img 
              src={imageSrc} 
              alt={title} 
              loading="lazy"
              className="w-full h-full object-cover object-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        )}

        <CardContent className="p-8 md:p-10 flex flex-col flex-grow relative">
          <div className="flex justify-between items-start mb-8">
            <motion.div 
              className={`${isPrimary ? 'bg-primary/15' : 'bg-blue-500/15'} rounded-xl p-4 shadow-lg`}
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              {icon}
            </motion.div>
          </div>
          
          <motion.h3 
            className="font-sans font-bold text-xl md:text-2xl text-foreground mb-5 group-hover:text-primary transition-colors duration-300"
            layoutId={`title-${title}`}
          >
            {title}
          </motion.h3>
          
          <p className="text-muted-foreground mb-8 leading-relaxed">
            {description}
          </p>
          
          <div className="space-y-4 mb-10 flex-grow">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Check className={`h-5 w-5 ${isPrimary ? 'text-primary' : 'text-blue-500'} mr-3 mt-1 flex-shrink-0`} />
                </motion.div>
                <span className="text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-auto"
          >
            <Button 
              className={`w-full py-6 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 group/btn
                ${isPrimary 
                  ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary/25 hover:shadow-primary/40' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/25 hover:shadow-blue-600/40'
                } hover:shadow-xl transform hover:-translate-y-1`}
              onClick={onClick}
            >
              <span className="flex items-center justify-center gap-2">
                Explorar {title}
                <motion.div
                  className="group-hover/btn:translate-x-1 transition-transform duration-300"
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </span>
            </Button>
          </motion.div>

          {/* Sparkle effect on hover */}
          <motion.div
            className="absolute top-4 left-4 opacity-0 group-hover:opacity-100"
            animate={{ 
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <Sparkles className="h-4 w-4 text-primary" />
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}