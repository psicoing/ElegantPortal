import { useEffect } from "react";
import { useLanguage } from "@/lib/language-context";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Separator } from "@/components/ui/separator";

export default function Projects() {
  const { t } = useLanguage();

  // Desplazarse al inicio de la página cuando se carga
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Encabezado */}
      <header className="relative bg-white shadow-sm py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center">
            <Link href="/">
              <Button variant="ghost" className="mr-4 group">
                <MoveLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
                {t('nav.about')}
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-primary">
              {t('nav.projects')}
            </h1>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            {t('projects.subtitle')}
          </p>

          {/* Proyecto HUCOF */}
          <Card className="mb-10 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-400 text-white">
              <CardTitle className="text-2xl">{t('projects.hucof.title')}</CardTitle>
              <CardDescription className="text-blue-100">
                {t('projects.hucof.description')}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p>
                  {t('projects.hucof.content1')}
                </p>
                <p>
                  {t('projects.hucof.content2')}
                </p>
                <p className="font-medium mt-6">
                  {t('projects.hucof.link_text')}
                </p>
                <div className="bg-blue-50 p-4 rounded-md">
                  <a 
                    href="https://drive.google.com/drive/folders/13TRIPYf4MDMVFV4q2OXosZkwjH13cwbU?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17.963l-5-5.367 1.41-1.532 3.59 3.518 7.58-7.636 1.42 1.55-9 9.467z" />
                    </svg>
                    {t('projects.hucof.folder')}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-12" />

          {/* Proyecto ARCO */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-700 to-blue-500 text-white">
              <CardTitle className="text-2xl">{t('projects.arco.title')}</CardTitle>
              <CardDescription className="text-blue-100">
                {t('projects.arco.description')}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p>
                  {t('projects.arco.content1')}
                </p>
                <p>
                  {t('projects.arco.content2')}
                </p>
                <p className="font-medium mt-6">
                  {t('projects.arco.link_text')}
                </p>
                <div className="bg-blue-50 p-4 rounded-md">
                  <a 
                    href="https://drive.google.com/drive/folders/13TRIPYf4MDMVFV4q2OXosZkwjH13cwbU?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17.963l-5-5.367 1.41-1.532 3.59 3.518 7.58-7.636 1.42 1.55-9 9.467z" />
                    </svg>
                    {t('projects.arco.folder')}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Pie de página */}
      <footer className="bg-gray-100 py-8 mt-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} EMPORDAJOBS SL B02701100 - {t('footer.rights')}
          </p>
          <div className="mt-4">
            <Link href="/">
              <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                {t('projects.footer')}
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}