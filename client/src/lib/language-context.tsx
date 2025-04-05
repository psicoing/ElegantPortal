import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Definimos los idiomas soportados
export type Language = 'es' | 'ca' | 'en';

// Definimos la interfaz para el contexto de idioma
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

// Creamos el contexto con un valor por defecto
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Importación condicional para las traducciones
// Estas se implementarán más adelante
const translations: Record<Language, Record<string, string>> = {
  es: {
    // Español (idioma por defecto)
    'nav.about': 'Acerca de',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    
    'hero.title': 'Bienvenidos a un entorno pensado para cuidar tu salud mental y laboral',
    'hero.subtitle': 'Además, te invitamos a descubrir nuestro servicio de empleo.',
    'hero.cta': 'Descubre nuestros servicios',
    
    'category.adolescents': 'Adolescentes',
    'category.parents': 'Padres y madres',
    'category.companies': 'Empresas',
    'category.labor_health': 'Salud Laboral',
    
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones personalizadas para cada necesidad',

    'service.nflow.title': 'NFLOW',
    'service.nflow.description': 'Servicio de apoyo psicológico mediante IA, conectando profesionales con quienes necesitan orientación personalizada.',
    'service.nflow.feature1': 'Atención psicológica personalizada',
    'service.nflow.feature2': 'Asistente virtual 24/7',
    'service.nflow.feature3': 'Conexión con profesionales cualificados',
    'service.nflow.badge': 'Innovador',
    'service.nflow.button': 'Acceder a NFLOW',
    
    'service.jobda.title': 'JOBDA',
    'service.jobda.description': 'Plataforma de empleo integral que conecta candidatos con empresas, enfocada en el bienestar laboral y personal.',
    'service.jobda.feature1': 'Ofertas de empleo personalizadas',
    'service.jobda.feature2': 'Evaluación de entorno laboral',
    'service.jobda.feature3': 'Orientación profesional continua',
    'service.jobda.badge': 'Gratuito',
    'service.jobda.button': 'Buscar empleo en JOBDA',
    
    'about.title': '¿Quiénes somos?',
    'about.subtitle': 'Conoce nuestra historia y visión',
    'about.vision.title': 'Nuestra visión',
    'about.areas.title': 'Nuestras áreas de acción',
    
    'area.psychology': 'Psicología',
    'area.nflow': 'Nflow',
    'area.jobda': 'Jobda',
    'area.empordajobs': 'EmpordaJobs',
    'area.neuronmeg': 'Instituto NeuronMeg',
    
    'testimonials.title': 'Lo que dicen nuestros usuarios',
    'testimonials.subtitle': 'Experiencias reales de quienes confían en nosotros',
    
    'cta.title': '¿Listo para comenzar?',
    'cta.subtitle': 'Descubre cómo podemos ayudarte',
    'cta.button': 'Contáctanos ahora',
    
    'contact.title': 'Contacto',
    'contact.subtitle': 'Estamos aquí para ayudarte',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Correo electrónico',
    'contact.form.message': 'Mensaje',
    'contact.form.submit': 'Enviar mensaje',
    'contact.info.address': 'Dirección',
    'contact.info.phone': 'Teléfono',
    'contact.info.email': 'Email',
    
    'footer.rights': 'Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.cookies': 'Preferencias de Cookies',
    
    'cookies.title': 'Su privacidad es importante',
    'cookies.description': 'Este sitio web utiliza cookies para garantizar que obtenga la mejor experiencia en nuestro sitio. Al hacer clic en "Aceptar todo", consiente el uso de cookies para análisis, contenido personalizado y publicidad.',
    'cookies.privacy': 'Política de Privacidad',
    'cookies.accept_all': 'Aceptar todo',
    'cookies.reject_all': 'Rechazar todo',
    'cookies.customize': 'Personalizar preferencias',
    'cookies.hide': 'Ocultar preferencias',
    'cookies.save': 'Guardar preferencias',
  },
  
  ca: {
    // Catalán
    'nav.about': 'Sobre nosaltres',
    'nav.services': 'Serveis',
    'nav.contact': 'Contacte',
    
    'hero.title': 'Benvinguts a un entorn pensat per cuidar la teva salut mental i laboral',
    'hero.subtitle': 'A més, et convidem a descobrir el nostre servei d\'ocupació.',
    'hero.cta': 'Descobreix els nostres serveis',
    
    'category.adolescents': 'Adolescents',
    'category.parents': 'Pares i mares',
    'category.companies': 'Empreses',
    'category.labor_health': 'Salut Laboral',
    
    'services.title': 'Els nostres serveis',
    'services.subtitle': 'Solucions personalitzades per a cada necessitat',

    'service.nflow.title': 'NFLOW',
    'service.nflow.description': 'Servei de suport psicològic mitjançant IA, connectant professionals amb qui necessita orientació personalitzada.',
    'service.nflow.feature1': 'Atenció psicològica personalitzada',
    'service.nflow.feature2': 'Assistent virtual 24/7',
    'service.nflow.feature3': 'Connexió amb professionals qualificats',
    'service.nflow.badge': 'Innovador',
    'service.nflow.button': 'Accedir a NFLOW',
    
    'service.jobda.title': 'JOBDA',
    'service.jobda.description': 'Plataforma d\'ocupació integral que connecta candidats amb empreses, enfocada en el benestar laboral i personal.',
    'service.jobda.feature1': 'Ofertes de feina personalitzades',
    'service.jobda.feature2': 'Avaluació d\'entorn laboral',
    'service.jobda.feature3': 'Orientació professional contínua',
    'service.jobda.badge': 'Gratuït',
    'service.jobda.button': 'Buscar feina a JOBDA',
    
    'about.title': 'Qui som?',
    'about.subtitle': 'Coneix la nostra història i visió',
    'about.vision.title': 'La nostra visió',
    'about.areas.title': 'Les nostres àrees d\'acció',
    
    'area.psychology': 'Psicologia',
    'area.nflow': 'Nflow',
    'area.jobda': 'Jobda',
    'area.empordajobs': 'EmpordaJobs',
    'area.neuronmeg': 'Institut NeuronMeg',
    
    'testimonials.title': 'El que diuen els nostres usuaris',
    'testimonials.subtitle': 'Experiències reals dels que confien en nosaltres',
    
    'cta.title': 'Preparat per començar?',
    'cta.subtitle': 'Descobreix com podem ajudar-te',
    'cta.button': 'Contacta\'ns ara',
    
    'contact.title': 'Contacte',
    'contact.subtitle': 'Som aquí per ajudar-te',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Correu electrònic',
    'contact.form.message': 'Missatge',
    'contact.form.submit': 'Enviar missatge',
    'contact.info.address': 'Adreça',
    'contact.info.phone': 'Telèfon',
    'contact.info.email': 'Email',
    
    'footer.rights': 'Tots els drets reservats.',
    'footer.privacy': 'Política de Privacitat',
    'footer.cookies': 'Preferències de Cookies',
    
    'cookies.title': 'La teva privacitat és important',
    'cookies.description': 'Aquest lloc web utilitza cookies per garantir que obtingui la millor experiència al nostre lloc. En fer clic a "Acceptar tot", consenteix l\'ús de cookies per a anàlisi, contingut personalitzat i publicitat.',
    'cookies.privacy': 'Política de Privacitat',
    'cookies.accept_all': 'Acceptar tot',
    'cookies.reject_all': 'Rebutjar tot',
    'cookies.customize': 'Personalitzar preferències',
    'cookies.hide': 'Ocultar preferències',
    'cookies.save': 'Guardar preferències',
  },
  
  en: {
    // Inglés
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    'hero.title': 'Welcome to an environment designed to care for your mental and work health',
    'hero.subtitle': 'Additionally, we invite you to discover our employment service.',
    'hero.cta': 'Discover our services',
    
    'category.adolescents': 'Adolescents',
    'category.parents': 'Parents',
    'category.companies': 'Companies',
    'category.labor_health': 'Labor Health',
    
    'services.title': 'Our Services',
    'services.subtitle': 'Customized solutions for every need',

    'service.nflow.title': 'NFLOW',
    'service.nflow.description': 'Psychological support service using AI, connecting professionals with those who need personalized guidance.',
    'service.nflow.feature1': 'Personalized psychological care',
    'service.nflow.feature2': '24/7 virtual assistant',
    'service.nflow.feature3': 'Connection with qualified professionals',
    'service.nflow.badge': 'Innovative',
    'service.nflow.button': 'Access NFLOW',
    
    'service.jobda.title': 'JOBDA',
    'service.jobda.description': 'Comprehensive employment platform that connects candidates with companies, focused on work and personal wellbeing.',
    'service.jobda.feature1': 'Personalized job offers',
    'service.jobda.feature2': 'Work environment assessment',
    'service.jobda.feature3': 'Continuous professional guidance',
    'service.jobda.badge': 'Free',
    'service.jobda.button': 'Search jobs on JOBDA',
    
    'about.title': 'Who We Are',
    'about.subtitle': 'Learn about our history and vision',
    'about.vision.title': 'Our vision',
    'about.areas.title': 'Our areas of action',
    
    'area.psychology': 'Psychology',
    'area.nflow': 'Nflow',
    'area.jobda': 'Jobda',
    'area.empordajobs': 'EmpordaJobs',
    'area.neuronmeg': 'NeuronMeg Institute',
    
    'testimonials.title': 'What our users say',
    'testimonials.subtitle': 'Real experiences from those who trust us',
    
    'cta.title': 'Ready to start?',
    'cta.subtitle': 'Discover how we can help you',
    'cta.button': 'Contact us now',
    
    'contact.title': 'Contact',
    'contact.subtitle': 'We\'re here to help you',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send message',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookie Preferences',
    
    'cookies.title': 'Your privacy is important',
    'cookies.description': 'This website uses cookies to ensure you get the best experience on our site. By clicking "Accept All", you consent to the use of cookies for analytics, personalized content, and advertising.',
    'cookies.privacy': 'Privacy Policy',
    'cookies.accept_all': 'Accept All',
    'cookies.reject_all': 'Reject All',
    'cookies.customize': 'Customize Preferences',
    'cookies.hide': 'Hide Preferences',
    'cookies.save': 'Save Preferences',
  }
};

// Hook para usar el contexto de idioma
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Componente Provider que proporciona el contexto de idioma
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Estado para almacenar el idioma actual
  const [language, setLanguageState] = useState<Language>('es');

  // Efecto para cargar el idioma del localStorage al iniciar
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['es', 'ca', 'en'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Función para cambiar el idioma y guardarlo en localStorage
  const setLanguage = (newLanguage: Language) => {
    console.log(`Changing language to: ${newLanguage}`);
    localStorage.setItem('language', newLanguage);
    setLanguageState(newLanguage);
    // Forzar la recarga para actualizar todos los componentes con el nuevo idioma
    window.location.reload();
  };

  // Función para obtener la traducción de una clave
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  // Valor del contexto
  const value = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};