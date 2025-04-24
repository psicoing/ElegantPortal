import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ContactDialog } from "./ContactDialog";
import { InvestorsDialog } from "./InvestorsDialog";
import { LanguageSelector } from "./LanguageSelector";
import { useLanguage } from "@/lib/language-context";
import { Link } from "wouter";
import faroLogo from "@/assets/faro-logo.png";

interface HeaderProps {
  toggleMobileMenu: () => void;
}

export function Header({ toggleMobileMenu }: HeaderProps) {
  const { t } = useLanguage();
  
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
          <InvestorsDialog>
            <button className="font-sans font-medium text-blue-600 hover:text-blue-700 transition font-semibold">
              {t('nav.investors')}
            </button>
          </InvestorsDialog>
          <ContactDialog>
            <button className="font-sans font-medium text-gray-600 hover:text-primary transition">
              {t('nav.contact')}
            </button>
          </ContactDialog>
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
