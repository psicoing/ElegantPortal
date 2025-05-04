import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useLanguage } from "@/lib/language-context";

interface ServiceCardProps {
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

export function ServiceCard({ 
  icon, 
  title, 
  description, 
  features, 
  url, 
  badgeText,
  variant,
  imageSrc,
  onClick
}: ServiceCardProps) {
  const { t } = useLanguage();
  const isPrimary = variant === "primary";
  
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className={`overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col ${isPrimary ? 'card-gradient-1' : 'card-gradient-2'}`}>
        {imageSrc && (
          <div className="w-full h-64 overflow-hidden">
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <CardContent className="p-8 md:p-10 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-8">
            <div className={`${isPrimary ? 'bg-primary/10' : 'bg-secondary-100'} rounded-lg p-3`}>
              {icon}
            </div>
            <Badge variant={isPrimary ? "default" : "secondary"} className={`${isPrimary ? 'bg-primary/10 text-primary hover:bg-primary/20' : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'} rounded-full px-3 py-1 text-xs font-semibold`}>
              {badgeText}
            </Badge>
          </div>
          
          <h3 className="font-sans font-bold text-xl md:text-2xl text-gray-900 mb-5">{title}</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>
          
          <div className="space-y-4 mb-10 flex-grow">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <Check className={`h-5 w-5 ${isPrimary ? 'text-primary' : 'text-secondary-500'} mr-3 mt-1 flex-shrink-0`} />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-auto">
            {onClick ? (
              // Botón para mostrar diálogo (JOBDA o SINAPSY)
              <Button 
                className="w-full bg-primary hover:bg-primary/90 font-sans font-semibold text-center py-3 px-6 shadow-md transition transform hover:-translate-y-1"
                onClick={onClick}
                data-service={title === t('service.appia.title') ? 'appia' : 
                             title === t('service.sinapsy.title') ? 'sinapsy' : 
                             title === t('service.neuronmeg.title') ? 'neuronmeg' : 
                             title === t('service.empordajobs.title') ? 'empordajobs' : ''}
              >
                {title === t('service.appia.title') 
                  ? t('service.appia.button') 
                  : title === t('service.neuronmeg.title')
                    ? t('neuronmeg.button')
                    : title === t('service.empordajobs.title')
                      ? t('service.empordajobs.button')
                      : t('service.sinapsy.button')}
              </Button>
            ) : url.startsWith("/") ? (
              // Botón para rutas internas
              <Button 
                className="w-full bg-primary hover:bg-primary/90 font-sans font-semibold text-center py-3 px-6 shadow-md transition transform hover:-translate-y-1"
                asChild
              >
                <a href={url}>
                  Más información
                </a>
              </Button>
            ) : (
              // Botón para servicios externos
              <Button 
                className="w-full bg-primary hover:bg-primary/90 font-sans font-semibold text-center py-3 px-6 shadow-md transition transform hover:-translate-y-1"
                asChild
              >
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {title === t('service.nflow.title') 
                    ? t('service.nflow.button')
                    : title === t('service.neuronmeg.title') 
                      ? t('neuronmeg.button') 
                      : title === t('service.empordajobs.title')
                        ? t('service.empordajobs.button')
                        : title === t('service.sinapsy.title')
                          ? t('service.sinapsy.button')
                          : t('service.appia.button')}
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
