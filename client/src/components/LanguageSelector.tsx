import { useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Language, useLanguage } from "@/lib/language-context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "es", name: "Español" },
    { code: "ca", name: "Català" },
    { code: "en", name: "English" },
  ];

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-1 px-2 font-normal"
          aria-label="Cambiar idioma"
        >
          <Globe className="h-4 w-4" />
          <span className="sr-only md:not-sr-only md:inline-block">
            {languages.find((lang) => lang.code === language)?.name}
          </span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={`flex items-center justify-between ${
              lang.code === language ? "bg-gray-50" : ""
            }`}
            onClick={() => setLanguage(lang.code as Language)}
          >
            <span>{lang.name}</span>
            {lang.code === language && <Check className="h-4 w-4 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}