import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ContactDialog } from "./ContactDialog";
import { LanguageSelector } from "./LanguageSelector";
import { useLanguage } from "@/lib/language-context";
import { Link } from "wouter";

interface HeaderProps {
  toggleMobileMenu: () => void;
}

export function Header({ toggleMobileMenu }: HeaderProps) {
  const { t } = useLanguage();
  
  return (
    <header className="w-full py-4 bg-white shadow-sm sticky top-0 z-30">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-primary font-sans">NFLOW - JOBDA</div>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#acerca-de" className="font-sans font-medium text-gray-600 hover:text-primary transition">
            {t('nav.about')}
          </a>
          <a href="#services" className="font-sans font-medium text-gray-600 hover:text-primary transition">
            {t('nav.services')}
          </a>
          <a href="#rewards" className="font-sans font-medium text-gray-600 hover:text-primary transition">
            {t('nav.rewards')}
          </a>
          <Link href="/projects" className="font-sans font-medium text-gray-600 hover:text-primary transition">
            {t('nav.projects')}
          </Link>
          <ContactDialog>
            <button className="font-sans font-medium text-gray-600 hover:text-primary transition">
              {t('nav.contact')}
            </button>
          </ContactDialog>
          <LanguageSelector />
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSelector />
          <Button 
            variant="ghost"
            size="icon"
            className="md:hidden"
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
