import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ContactDialog } from "./ContactDialog";

interface HeaderProps {
  toggleMobileMenu: () => void;
}

export function Header({ toggleMobileMenu }: HeaderProps) {
  return (
    <header className="w-full py-4 bg-white shadow-sm sticky top-0 z-30">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-primary font-sans">NFLOW - JOBDA</div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#acerca-de" className="font-sans font-medium text-gray-600 hover:text-primary transition">
            Acerca de
          </a>
          <a href="#services" className="font-sans font-medium text-gray-600 hover:text-primary transition">
            Servicios
          </a>
          <ContactDialog>
            <button className="font-sans font-medium text-gray-600 hover:text-primary transition">
              Contacto
            </button>
          </ContactDialog>
        </nav>
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
    </header>
  );
}
