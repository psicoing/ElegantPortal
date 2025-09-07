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
  videoSrc?: string;
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
  videoSrc,
  onClick
}: ServiceCardProps) {
  const { t } = useLanguage();
  const isPrimary = variant === "primary";
  
  console.log('ServiceCard render:', { title, videoSrc, imageSrc });
  
  if (videoSrc) {
    // Layout con video a la izquierda
    return (
      <motion.div
        whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        transition={{ duration: 0.3 }}
        className="h-full"
      >
        <Card className={`overflow-hidden shadow-lg border border-gray-100 h-full flex ${isPrimary ? 'card-gradient-1' : 'card-gradient-2'}`}>
          <div className="w-32 md:w-40 h-full overflow-hidden">
            <video 
              src={videoSrc} 
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
              onError={(e) => console.error('Video error:', e)}
              onLoadStart={() => console.log('Video loading:', videoSrc)}
            />
          </div>
          <div className="flex-1">
            <CardContent className="p-4 md:p-6 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className={`${isPrimary ? 'bg-primary/10' : 'bg-secondary-100'} rounded-lg p-2`}>
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
                  } rounded-full px-2 py-1 text-xs font-semibold`}
                  data-badge={badgeText === "Anti-edadismo" || badgeText === "Anti-ageism" || badgeText === "Anti-edatisme" ? "anti-ageism" : "standard"}
                >
                  {badgeText}
                </Badge>
              </div>
              
              <h3 className="font-sans font-bold text-base md:text-lg text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground mb-3 leading-relaxed text-xs">{description}</p>
              
              <div className="space-y-2 mb-4 flex-grow">
                {features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className={`h-4 w-4 ${isPrimary ? 'text-primary' : 'text-secondary-500'} mr-2 mt-0.5 flex-shrink-0`} />
                    <span className="text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-auto">
                {onClick ? (
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 font-sans font-semibold text-center py-2 px-4 shadow-md transition transform hover:-translate-y-1 text-sm"
                    onClick={onClick}
                    data-service={title === t('service.appia.title') ? 'appia' : 
                                 title === t('service.sinapsy.title') ? 'sinapsy' : 
                                 title === t('service.neuronmeg.title') ? 'neuronmeg' : 
                                 title === t('service.empordajobs.title') ? 'empordajobs' : ''}
                  >
                    {t('common.more_info')}
                  </Button>
                ) : url.startsWith("/") ? (
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 font-sans font-semibold text-center py-2 px-4 shadow-md transition transform hover:-translate-y-1 text-sm"
                    asChild
                  >
                    <a href={url}>
                      {t('common.more_info')}
                    </a>
                  </Button>
                ) : (
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 font-sans font-semibold text-center py-2 px-4 shadow-md transition transform hover:-translate-y-1 text-sm"
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
          </div>
        </Card>
      </motion.div>
    );
  }
  
  // Layout normal con imagen arriba o sin imagen
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
          
          <h3 className="font-sans font-bold text-xl md:text-2xl text-foreground mb-5">{title}</h3>
          <p className="text-muted-foreground mb-8 leading-relaxed">{description}</p>
          
          <div className="space-y-4 mb-10 flex-grow">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <Check className={`h-5 w-5 ${isPrimary ? 'text-primary' : 'text-secondary-500'} mr-3 mt-1 flex-shrink-0`} />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-auto">
            {onClick ? (
              <Button 
                className="w-full bg-primary hover:bg-primary/90 font-sans font-semibold text-center py-3 px-6 shadow-md transition transform hover:-translate-y-1"
                onClick={onClick}
                data-service={title === t('service.appia.title') ? 'appia' : 
                             title === t('service.sinapsy.title') ? 'sinapsy' : 
                             title === t('service.neuronmeg.title') ? 'neuronmeg' : 
                             title === t('service.empordajobs.title') ? 'empordajobs' : ''}
              >
                {t('common.more_info')}
              </Button>
            ) : url.startsWith("/") ? (
              <Button 
                className="w-full bg-primary hover:bg-primary/90 font-sans font-semibold text-center py-3 px-6 shadow-md transition transform hover:-translate-y-1"
                asChild
              >
                <a href={url}>
                  {t('common.more_info')}
                </a>
              </Button>
            ) : (
              <Button 
                className="w-full bg-primary hover:bg-primary/90 font-sans font-semibold text-center py-3 px-6 shadow-md transition transform hover:-translate-y-1"
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