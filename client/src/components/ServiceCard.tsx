import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  url: string;
  badgeText: string;
  variant: "primary" | "secondary";
}

export function ServiceCard({ 
  icon, 
  title, 
  description, 
  features, 
  url, 
  badgeText,
  variant 
}: ServiceCardProps) {
  const isPrimary = variant === "primary";
  
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      transition={{ duration: 0.3 }}
    >
      <Card className={`overflow-hidden shadow-lg border border-gray-100 ${isPrimary ? 'card-gradient-1' : 'card-gradient-2'}`}>
        <CardContent className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <div className={`${isPrimary ? 'bg-primary/10' : 'bg-secondary-100'} rounded-lg p-3`}>
              {icon}
            </div>
            <Badge variant={isPrimary ? "default" : "secondary"} className={`${isPrimary ? 'bg-primary/10 text-primary hover:bg-primary/20' : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'} rounded-full px-3 py-1 text-xs font-semibold`}>
              {badgeText}
            </Badge>
          </div>
          
          <h3 className="font-sans font-bold text-xl md:text-2xl text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          
          <div className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <Check className={`h-5 w-5 ${isPrimary ? 'text-primary' : 'text-secondary-500'} mr-3`} />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
          
          <Button 
            className={`w-full ${isPrimary 
              ? 'bg-primary hover:bg-primary/90' 
              : 'bg-secondary-600 hover:bg-secondary-700'} 
              text-white !important font-sans font-semibold text-center py-3 px-6 shadow-md transition transform hover:-translate-y-1`}
            asChild
          >
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-white">
              Acceder a {title}
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
