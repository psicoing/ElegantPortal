import { useLanguage } from "@/lib/language-context";
import profilePhoto from "../assets/profile-photo.png";

export function FounderTestimonial() {
  const { t } = useLanguage();
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-tr from-blue-700 to-blue-500 py-8">
      {/* Fondo con diseño abstracto */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-20 w-40 h-40 rounded-full bg-white opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-white opacity-10"></div>
        <div className="absolute top-40 right-40 w-20 h-20 rounded-full bg-white opacity-10"></div>
        <div className="absolute bottom-40 left-40 w-32 h-32 rounded-full bg-white opacity-10"></div>
        <div className="absolute -bottom-10 left-1/2 w-80 h-80 rounded-full bg-white opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              {t("founderTitle")}
            </h2>
            <div className="relative">
              <blockquote className="text-xs md:text-sm text-white leading-tight mb-2 max-w-2xl">
                <span className="absolute -top-2 -left-1 text-2xl text-white opacity-20">"</span>
                {t("founderQuote")}
                <span className="absolute -bottom-3 -right-1 text-2xl text-white opacity-20">"</span>
              </blockquote>
            </div>
            <div className="text-white">
              <p className="font-medium text-sm">{t("founderName")}</p>
              <p className="text-blue-100 text-xs">{t("founderRole")}</p>
              <p className="text-blue-100 mt-0.5 italic text-xs">{t("founderProfession")}</p>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src={profilePhoto} 
                  alt={t("founderAlt")} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 font-bold">
                CEO
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}