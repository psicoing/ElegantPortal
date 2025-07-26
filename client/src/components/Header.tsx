import { Button } from "@/components/ui/button";
import { Menu, Phone, Handshake, Users } from "lucide-react";
import { ContactModal } from "./ContactModal";

import { GoogleTranslateDialog } from "./ui/google-translate-dialog";
import { ThemeToggle } from "./ThemeToggle";
import { useLanguage } from "@/lib/language-context";
import { Link } from "wouter";
import faroLogo from "@/assets/faro-logo.png";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeaderProps {
  toggleMobileMenu: () => void;
}

export function Header({ toggleMobileMenu }: HeaderProps) {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  return (
    <header className="w-full py-4 bg-background border-b border-border shadow-sm sticky top-0 z-30 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src={faroLogo} 
              alt="Logo Faro" 
              loading="lazy"
              className="h-10 w-auto"
              style={{filter: "drop-shadow(0 0 2px rgba(0, 156, 255, 0.8))"}}
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent leading-tight">
                JOBDA
              </span>
              <span className="text-xs text-muted-foreground -mt-1">
                Plataforma Multiservicios
              </span>
              <div className="flex items-center gap-1 -mt-0.5">
                <span className="text-[10px] text-gray-400">Powered by</span>
                <div className="flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[10px] font-medium text-indigo-600">Replit</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="flex items-center gap-2">
          {!isMobile && (
            <>

              <Link href="/partners">
                <Button variant="ghost" size="icon" className="hover:bg-primary/10" title="Partners">
                  <Handshake className="h-5 w-5" />
                </Button>
              </Link>
              <ContactModal
                variant="icon"
                icon={<Phone className="h-5 w-5" />}
                text={t('nav.contact')}
              />
            </>
          )}
          <ThemeToggle />
          <GoogleTranslateDialog buttonText="Idiomas" size="sm" />
          <Button 
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </Button>
        </div>
      </div>
    </header>
  );
}
