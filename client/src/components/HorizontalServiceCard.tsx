import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useLanguage } from "@/lib/language-context";

interface HorizontalServiceCardProps {
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

export function HorizontalServiceCard({ 
  icon, 
  title, 
  description, 
  features, 
  url, 
  badgeText,
  variant,
  imageSrc,
  onClick
}: HorizontalServiceCardProps) {
  const { t } = useLanguage();
  const isPrimary = variant === "primary";
  
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <Card className={`overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row ${isPrimary ? 'card-gradient-1' : 'card-gradient-2'}`}>
        {imageSrc && (
          <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
            <img 
              src={imageSrc} 
              alt={title} 
              loading="lazy"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <CardContent className="p-8 md:p-10 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-8">
            <div className={`${isPrimary ? 'bg-primary/10' : 'bg-secondary-100'} rounded-lg p-3`}>
              {icon}
            </div>
            <Badge 
              variant={isPrimary ? "default" : "secondary"} 
              className={`${
                badgeText === "Anti-edadismo" || badgeText === "Anti-ageism" || badgeText === "Anti-edatisme" 
                  ? 'anti-ageism-badge' 
                  : isPrimary 
                    ? 'bg-primary/10 text-primary hover:bg-primary/20' 
                    : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
              } rounded-full px-3 py-1 text-xs font-semibold`}
              data-badge={badgeText === "Anti-edadismo" || badgeText === "Anti-ageism" || badgeText === "Anti-edatisme" ? "anti-ageism" : "standard"}
            >
              {badgeText}
            </Badge>
          </div>
          
          <h3 className="font-sans font-bold text-xl md:text-2xl text-gray-900 mb-5">{title}</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-10 flex-grow">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <Check className={`h-5 w-5 ${isPrimary ? 'text-primary' : 'text-secondary-500'} mr-3 mt-1 flex-shrink-0`} />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-auto">
            {onClick ? (
              // Botón para mostrar diálogo
              <Button 
                className="w-full md:w-auto bg-primary hover:bg-primary/90 font-sans font-semibold text-center py-3 px-6 shadow-md transition transform hover:-translate-y-1"
                onClick={onClick}
              >
                {t('common.more_info')}
              </Button>
            ) : url.startsWith("/") ? (
              // Botón para rutas internas
              <Button 
                className="w-full md:w-auto bg-primary hover:bg-primary/90 font-sans font-semibold text-center py-3 px-6 shadow-md transition transform hover:-translate-y-1"
                asChild
              >
                <a href={url}>
                  {t('common.more_info')}
                </a>
              </Button>
            ) : (
              // Botón para servicios externos
              <Button 
                className="w-full md:w-auto bg-primary hover:bg-primary/90 font-sans font-semibold text-center py-3 px-6 shadow-md transition transform hover:-translate-y-1"
                asChild
              >
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {t('common.more_info')}
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}