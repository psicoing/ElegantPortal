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
    'nav.rewards': 'Premios',
    'nav.projects': 'Proyectos',
    
    'founderTitle': 'Fundador y Director Ejecutivo',
    'founderQuote': 'Con NFLOW y APPIA, mi objetivo es ofrecer soluciones innovadoras que integren salud mental y desarrollo laboral, alineadas con los principios de la normativa ISO 45003, centrada en el bienestar psicológico en el entorno de trabajo. NFLOW actúa como un recurso digital de apoyo emocional continuo, mientras que APPIA permite a cada organización desarrollar su propia inteligencia artificial personalizada, generando entornos altamente digitalizados y adaptativos, capaces de responder a los nuevos desafíos del ámbito corporativo.',
    'founderName': 'Ramón Molons de San Román',
    'founderRole': 'CEO y Fundador de EmpordaJobs SL',
    'founderProfession': 'Psicólogo Clínico y Neuroingeniero en Telecomunicaciones',
    'founderAlt': 'Foto de Ramón Molons de San Román, CEO',
    
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
    'service.jobda.badge': 'Calidad empleo',
    'service.jobda.button': 'Buscar empleo en JOBDA',
    
    'rewards.title': '¡Gana premios reales solo por formar parte!',
    'rewards.subtitle': 'Haz clic aquí o descubre el globo flotante con nuestros premios.',
    'rewards.milestones': 'Premios por hitos de usuarios activos mensuales:',
    'rewards.discover': 'Fecha sorteos',
    'rewards.details': 'La fecha de los sorteos estará determinada por la cantidad de suscriptores alcanzada. Una vez se llegue a la cuota establecida para cada sorteo, se realizará un sorteo notarial en la Notaría del Teatro Jardín de Figueres (Girona), mediante un programa aleatorio y en presencia del notario. Puedes consultar más información sobre la notaría en su web oficial: www.notariajardi.org.\n\nLa lista de ganadores se publicará en este mismo cuadro, a través de un botón habilitado con el nombre "Ganadores", donde se podrá consultar el sorteo y los premiados correspondientes a cada categoría.',
    'rewards.winners': 'Ganadores',
    'rewards.close': 'Cerrar',
    'rewards.back': 'Volver',
    'rewards.no_winners_yet': 'Aún no hay ganadores. Los sorteos comenzarán cuando se alcancen los hitos de usuarios activos.',
    'rewards.iphones': 'Sorteamos 10 iPhones entre toda la comunidad.',
    'rewards.tesla': 'Sorteamos 1 Tesla.',
    'rewards.house1': 'Sorteamos una casa en Palamós (Girona, España).',
    'rewards.house2': 'Sorteamos una casa ecológica de madera de Tu Casa Eco, para que la pongas donde tú quieras.',
    'rewards.users': 'usuarios activos',
    'rewards.footer': 'Sigue invitando, creciendo y soñando. Estamos más cerca de los premios gracias a ti.',
    
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
    
    'projects.title': 'Proyectos de Investigación y Desarrollo',
    'projects.subtitle': 'Nuestro compromiso con la innovación y el desarrollo científico nos lleva a investigar constantemente nuevas formas de mejorar la salud mental y el bienestar. A continuación, presentamos nuestros proyectos de investigación en curso.',
    'projects.hucof.title': 'Proyecto HUCOF',
    'projects.hucof.description': 'Nueva teoría sobre seres vivos y su relación con el entorno',
    'projects.hucof.content1': 'El proyecto HUCOF desarrolla una teoría innovadora sobre los seres vivos y su relación con el entorno. Esta investigación propone nuevas perspectivas sobre cómo interactuamos con nuestro ambiente y cómo esto afecta nuestra salud mental y física.',
    'projects.hucof.content2': 'La teoría HUCOF explora la interconexión entre las personas y su entorno desde una perspectiva holística, considerando aspectos biológicos, psicológicos y sociales.',
    'projects.hucof.link_text': 'Para acceder a la documentación completa del proyecto HUCOF, visite:',
    'projects.hucof.folder': 'Carpeta de Google Drive - Proyecto HUCOF',
    'projects.arco.title': 'Proyecto ARCO',
    'projects.arco.description': 'Aplicaciones neurofeedback para mejora de la salud mental',
    'projects.arco.content1': 'El Proyecto ARCO investiga y desarrolla aplicaciones avanzadas de neurofeedback para mejorar la salud mental y el bienestar cognitivo. Este innovador enfoque utiliza tecnología de vanguardia para ayudar a las personas a optimizar su funcionamiento cerebral.',
    'projects.arco.content2': 'Nuestro equipo está desarrollando protocolos específicos de neurofeedback que pueden aplicarse en diversas áreas, desde el tratamiento del estrés y la ansiedad hasta la mejora del rendimiento cognitivo y la concentración.',
    'projects.arco.link_text': 'Para acceder a la documentación completa del Proyecto ARCO, visite:',
    'projects.arco.folder': 'Carpeta de Google Drive - Proyecto ARCO',
    'projects.footer': 'Volver a la página principal',
  },
  
  ca: {
    // Catalán
    'nav.about': 'Sobre nosaltres',
    'nav.services': 'Serveis',
    'nav.contact': 'Contacte',
    'nav.rewards': 'Premis',
    'nav.projects': 'Projectes',
    
    'founderTitle': 'Fundador i Director Executiu',
    'founderQuote': 'Amb NFLOW i APPIA, el meu objectiu és oferir solucions innovadores que integrin salut mental i desenvolupament laboral, alineades amb els principis de la normativa ISO 45003, centrada en el benestar psicològic en l\'entorn de treball. NFLOW actua com un recurs digital de suport emocional continu, mentre que APPIA permet a cada organització desenvolupar la seva pròpia intel·ligència artificial personalitzada, generant entorns altament digitalitzats i adaptatius, capaços de respondre als nous desafiaments de l\'àmbit corporatiu.',
    'founderName': 'Ramón Molons de San Román',
    'founderRole': 'CEO i Fundador d\'EmpordaJobs SL',
    'founderProfession': 'Psicòleg Clínic i Neuroenginyer en Telecomunicacions',
    'founderAlt': 'Foto de Ramón Molons de San Román, CEO',
    
    'rewards.users': 'usuaris actius',
    
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
    'service.jobda.badge': 'Qualitat ocupació',
    'service.jobda.button': 'Buscar feina a JOBDA',
    
    'rewards.title': 'Guanya premis reals només per formar part!',
    'rewards.subtitle': 'Fes clic aquí o descobreix el globus flotant amb els nostres premis.',
    'rewards.milestones': 'Premis per fites d\'usuaris actius mensuals:',
    'rewards.discover': 'Data sortejos',
    'rewards.details': 'La data dels sortejos estarà determinada per la quantitat de subscriptors assolida. Un cop s\'arribi a la quota establerta per a cada sorteig, es realitzarà un sorteig notarial a la Notaria del Teatre Jardí de Figueres (Girona), mitjançant un programa aleatori i en presència del notari. Pots consultar més informació sobre la notària al seu web oficial: www.notariajardi.org.\n\nLa llista de guanyadors es publicarà en aquest mateix quadre, a través d\'un botó habilitat amb el nom "Guanyadors", on es podrà consultar el sorteig i els premiats corresponents a cada categoria.',
    'rewards.winners': 'Guanyadors',
    'rewards.close': 'Tancar',
    'rewards.back': 'Tornar',
    'rewards.no_winners_yet': 'Encara no hi ha guanyadors. Els sortejos començaran quan s\'assoleixin les fites d\'usuaris actius.',
    'rewards.iphones': 'Sortegem 10 iPhones entre tota la comunitat.',
    'rewards.tesla': 'Sortegem 1 Tesla.',
    'rewards.house1': 'Sortegem una casa a Palamós (Girona, Espanya).',
    'rewards.house2': 'Sortegem una casa ecològica de fusta de Tu Casa Eco, perquè la posis on tu vulguis.',
    'rewards.footer': 'Segueix convidant, creixent i somiant. Estem més a prop dels premis gràcies a tu.',
    
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
    
    'projects.title': 'Projectes de Recerca i Desenvolupament',
    'projects.subtitle': 'El nostre compromís amb la innovació i el desenvolupament científic ens porta a investigar constantment noves formes de millorar la salut mental i el benestar. A continuació, presentem els nostres projectes de recerca en curs.',
    'projects.hucof.title': 'Projecte HUCOF',
    'projects.hucof.description': 'Nova teoria sobre éssers vius i la seva relació amb l\'entorn',
    'projects.hucof.content1': 'El projecte HUCOF desenvolupa una teoria innovadora sobre els éssers vius i la seva relació amb l\'entorn. Aquesta investigació proposa noves perspectives sobre com interactuem amb el nostre ambient i com això afecta la nostra salut mental i física.',
    'projects.hucof.content2': 'La teoria HUCOF explora la interconnexió entre les persones i el seu entorn des d\'una perspectiva holística, considerant aspectes biològics, psicològics i socials.',
    'projects.hucof.link_text': 'Per accedir a la documentació completa del projecte HUCOF, visiteu:',
    'projects.hucof.folder': 'Carpeta de Google Drive - Projecte HUCOF',
    'projects.arco.title': 'Projecte ARCO',
    'projects.arco.description': 'Aplicacions neurofeedback per a millora de la salut mental',
    'projects.arco.content1': 'El Projecte ARCO investiga i desenvolupa aplicacions avançades de neurofeedback per millorar la salut mental i el benestar cognitiu. Aquest innovador enfocament utilitza tecnologia d\'avantguarda per ajudar les persones a optimitzar el seu funcionament cerebral.',
    'projects.arco.content2': 'El nostre equip està desenvolupant protocols específics de neurofeedback que poden aplicar-se en diverses àrees, des del tractament de l\'estrès i l\'ansietat fins a la millora del rendiment cognitiu i la concentració.',
    'projects.arco.link_text': 'Per accedir a la documentació completa del Projecte ARCO, visiteu:',
    'projects.arco.folder': 'Carpeta de Google Drive - Projecte ARCO',
    'projects.footer': 'Tornar a la pàgina principal',
  },
  
  en: {
    // Inglés
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.rewards': 'Rewards',
    'nav.projects': 'Projects',
    
    'founderTitle': 'Founder and Chief Executive Officer',
    'founderQuote': 'With NFLOW and APPIA, my goal is to offer innovative solutions that integrate mental health and labor development, aligned with the principles of the ISO 45003 standard, focused on psychological well-being in the work environment. NFLOW acts as a digital resource for continuous emotional support, while APPIA allows each organization to develop its own personalized artificial intelligence, generating highly digitized and adaptive environments, capable of responding to new corporate challenges.',
    'founderName': 'Ramón Molons de San Román',
    'founderRole': 'CEO and Founder of EmpordaJobs SL',
    'founderProfession': 'Clinical Psychologist and Telecommunication Neuroengineer',
    'founderAlt': 'Photo of Ramón Molons de San Román, CEO',
    
    'rewards.users': 'active users',
    
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
    'service.jobda.badge': 'Quality employment',
    'service.jobda.button': 'Search jobs on JOBDA',
    
    'rewards.title': 'Win real prizes just for being part of it!',
    'rewards.subtitle': 'Click here or discover the floating balloon with our prizes.',
    'rewards.milestones': 'Prizes for monthly active user milestones:',
    'rewards.discover': 'Draw dates',
    'rewards.details': 'The date of the draws will be determined by the number of subscribers reached. Once the established quota for each draw is reached, a notarial draw will be held at the Teatro Jardín Notary in Figueres (Girona), using a random program and in the presence of the notary. You can find more information about the notary on their official website: www.notariajardi.org.\n\nThe list of winners will be published in this same box, through a button enabled with the name "Winners", where you can check the draw and the winners corresponding to each category.',
    'rewards.winners': 'Winners',
    'rewards.close': 'Close',
    'rewards.back': 'Back',
    'rewards.no_winners_yet': 'There are no winners yet. The draws will begin when the active user milestones are reached.',
    'rewards.iphones': 'We raffle 10 iPhones among the entire community.',
    'rewards.tesla': 'We raffle 1 Tesla.',
    'rewards.house1': 'We raffle a house in Palamós (Girona, Spain).',
    'rewards.house2': 'We raffle an ecological wooden house from Tu Casa Eco, so you can put it wherever you want.',
    'rewards.footer': 'Keep inviting, growing and dreaming. We are closer to the prizes thanks to you.',
    
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
    
    'projects.title': 'Research and Development Projects',
    'projects.subtitle': 'Our commitment to innovation and scientific development leads us to constantly investigate new ways to improve mental health and wellbeing. Below, we present our ongoing research projects.',
    'projects.hucof.title': 'HUCOF Project',
    'projects.hucof.description': 'New theory about living beings and their relationship with the environment',
    'projects.hucof.content1': 'The HUCOF project develops an innovative theory about living beings and their relationship with the environment. This research proposes new perspectives on how we interact with our environment and how this affects our mental and physical health.',
    'projects.hucof.content2': 'The HUCOF theory explores the interconnection between people and their environment from a holistic perspective, considering biological, psychological, and social aspects.',
    'projects.hucof.link_text': 'To access the complete documentation of the HUCOF project, visit:',
    'projects.hucof.folder': 'Google Drive Folder - HUCOF Project',
    'projects.arco.title': 'ARCO Project',
    'projects.arco.description': 'Neurofeedback applications for mental health improvement',
    'projects.arco.content1': 'The ARCO Project researches and develops advanced neurofeedback applications to improve mental health and cognitive wellbeing. This innovative approach uses cutting-edge technology to help people optimize their brain functioning.',
    'projects.arco.content2': 'Our team is developing specific neurofeedback protocols that can be applied in various areas, from stress and anxiety treatment to improving cognitive performance and concentration.',
    'projects.arco.link_text': 'To access the complete documentation of the ARCO Project, visit:',
    'projects.arco.folder': 'Google Drive Folder - ARCO Project',
    'projects.footer': 'Return to main page',
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