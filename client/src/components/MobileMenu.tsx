import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  closeMobileMenu: () => void;
}

export function MobileMenu({ isOpen, closeMobileMenu }: MobileMenuProps) {
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
            <div className="text-xl font-bold text-primary font-sans">NFLOW - JOBDA</div>
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
              href="#about" 
              className="font-sans font-medium text-gray-800 hover:text-primary transition py-2 border-b border-gray-100"
              onClick={handleLinkClick}
            >
              Acerca de
            </a>
            <a 
              href="#services" 
              className="font-sans font-medium text-gray-800 hover:text-primary transition py-2 border-b border-gray-100"
              onClick={handleLinkClick}
            >
              Servicios
            </a>
            <a 
              href="#contact" 
              className="font-sans font-medium text-gray-800 hover:text-primary transition py-2"
              onClick={handleLinkClick}
            >
              Contacto
            </a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
