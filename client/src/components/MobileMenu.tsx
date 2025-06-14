import { Button } from "@/components/ui/button";
import { 
  X,
  Info, 
  Briefcase, 
  Gift, 
  FolderKanban,
  Users,
  HandHelping,
  Mail
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { InvestorsModal } from "./InvestorsModal";
import { ContactModal } from "./ContactModal";
import { WorkWithUsModal } from "./WorkWithUsModal";
import { LanguageSelector } from "./LanguageSelector";
import { useLanguage } from "@/lib/language-context";
import { Link } from "wouter";
import faroLogo from "@/assets/faro-logo.png";

interface MobileMenuProps {
  isOpen: boolean;
  closeMobileMenu: () => void;
}

export function MobileMenu({ isOpen, closeMobileMenu }: MobileMenuProps) {
  const { t } = useLanguage();
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        closeMobileMenu();
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-white z-50 flex flex-col p-4 overflow-y-auto"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="flex items-center" onClick={() => closeMobileMenu()}>
              <img 
                src={faroLogo} 
                alt="Logo Faro" 
                className="h-10 w-auto"
                style={{filter: "drop-shadow(0 0 2px rgba(0, 156, 255, 0.8))"}}
              />
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={closeMobileMenu}
              aria-label="Cerrar menu"
            >
              <X className="h-6 w-6 text-gray-600" />
            </Button>
          </div>
          
          <nav className="flex flex-col space-y-4">
            <a 
              href="#acerca-de" 
              className="font-sans font-medium text-gray-800 hover:text-primary transition py-2 border-b border-gray-100 flex items-center gap-3"
              onClick={handleLinkClick}
            >
              <Info className="h-5 w-5 text-primary" />
              {t('nav.about')}
            </a>
            <a 
              href="#services" 
              className="font-sans font-medium text-gray-800 hover:text-primary transition py-2 border-b border-gray-100 flex items-center gap-3"
              onClick={handleLinkClick}
            >
              <Briefcase className="h-5 w-5 text-primary" />
              {t('nav.services')}
            </a>
            <a 
              href="#rewards" 
              className="font-sans font-medium text-gray-800 hover:text-primary transition py-2 border-b border-gray-100 flex items-center gap-3"
              onClick={handleLinkClick}
            >
              <Gift className="h-5 w-5 text-primary" />
              {t('nav.rewards')}
            </a>
            <Link href="/projects" 
              className="font-sans font-medium text-gray-800 hover:text-primary transition py-2 border-b border-gray-100 flex items-center gap-3"
              onClick={() => closeMobileMenu()}
            >
              <FolderKanban className="h-5 w-5 text-primary" />
              {t('nav.projects')}
            </Link>
            <Link href="/investors" 
              className="font-sans font-medium text-gray-800 hover:text-primary transition py-2 border-b border-gray-100 flex items-center gap-3"
              onClick={() => closeMobileMenu()}
            >
              <Users className="h-5 w-5 text-primary" />
              {t('nav.investors')}
            </Link>
            <div className="flex items-center gap-3 py-2 border-b border-gray-100">
              <HandHelping className="h-5 w-5 text-primary" />
              <WorkWithUsModal text="Trabaja con nosotros" />
            </div>
            <div className="flex items-center gap-3 py-2 border-b border-gray-100">
              <Mail className="h-5 w-5 text-primary" />
              <ContactModal text={t('nav.contact')} />
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
