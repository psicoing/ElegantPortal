import { Button } from "@/components/ui/button";
import { Menu, Phone, User2, Users } from "lucide-react";
import { ContactModal } from "./ContactModal";
import { WorkWithUsModal } from "./WorkWithUsModal";
import { LanguageSelector } from "./LanguageSelector";
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
    <header className="w-full py-4 bg-white shadow-sm sticky top-0 z-30">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src={faroLogo} 
              alt="Logo Faro" 
              className="h-10 w-auto"
              style={{filter: "drop-shadow(0 0 2px rgba(0, 156, 255, 0.8))"}}
            />
          </Link>
        </div>
        
        <div className="flex items-center gap-2">
          {!isMobile && (
            <>

              <WorkWithUsModal
                variant="icon"
                icon={<User2 className="h-5 w-5" />}
                text="Trabaja con nosotros"
              />
              <ContactModal
                variant="icon"
                icon={<Phone className="h-5 w-5" />}
                text={t('nav.contact')}
              />
            </>
          )}
          <LanguageSelector />
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
