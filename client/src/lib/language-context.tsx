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
    'common.more_info': 'Más datos',
    
    'nav.about': 'Acerca de',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    'nav.rewards': 'Premios',
    'nav.projects': 'Proyectos',
    'nav.investors': 'Inversores',
    
    'founderTitle': 'Fundador y Director Ejecutivo',
    'founderQuote': 'Con NFLOW y APPIA, mi objetivo es ofrecer soluciones innovadoras que integren salud mental y desarrollo laboral, alineadas con los principios de la normativa ISO 45003, centrada en el bienestar psicológico en el entorno de trabajo. NFLOW actúa como un recurso digital de apoyo emocional continuo, mientras que APPIA permite a cada organización desarrollar su propia inteligencia artificial personalizada, generando entornos altamente digitalizados y adaptativos, capaces de responder a los nuevos desafíos del ámbito corporativo.',
    'founderName': 'Ramón Molons de San Román',
    'founderRole': 'CEO y Fundador de EmpordaJobs SL',
    'founderProfession': 'Psicólogo Clínico y Neuroingeniero en Telecomunicaciones',
    'founderAlt': 'Foto de Ramón Molons de San Román, CEO',
    
    'hero.title': 'Bienvenidos a nuestra plataforma de servicios',
    'hero.subtitle': 'Escoge aquel que necesites',
    'hero.cta': 'Explorar servicios',
    
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
    'service.nflow.button': 'Ir a NFLOW',
    
    'service.appia.title': 'APPIA',
    'service.appia.description': 'Servicio especializado en desarrollo de aplicaciones web y móviles con inteligencia artificial para empresas que buscan digitalizar sus procesos.',
    'service.appia.feature1': 'Soluciones tecnológicas personalizadas',
    'service.appia.feature2': 'Desarrollo web y móvil con IA',
    'service.appia.feature3': 'Transformación digital para empresas',
    'service.appia.badge': 'Innovación tecnológica',
    'service.appia.button': 'Acceder a APPIA',
    
    'service.sinapsy.title': 'SINAPSY',
    'service.sinapsy.description': 'Revista digital de Psicología, Neurociencias y Salud que acerca estos campos al día a día de las personas, con rigor profesional.',
    'service.sinapsy.feature1': 'Artículos accesibles para todos los públicos',
    'service.sinapsy.feature2': 'Contenido científico de alto nivel',
    'service.sinapsy.feature3': 'Entrevistas y recursos descargables',
    'service.sinapsy.badge': 'Neurociencia y Psicología',
    'service.sinapsy.button': 'Acceder a SINAPSY',
    'nflow.button.explore': 'Explorar NFLOW',
    
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
    'area.appia': 'Appia',
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
    
    'jobda.dialog.title': 'JOBDA - Innovación Tecnológica',
    'jobda.dialog.description': 'JOBDA es un servicio especializado en el desarrollo de aplicaciones web y móviles con inteligencia artificial para empresas que buscan digitalizar y optimizar sus procesos.',
    'jobda.dialog.section1.title': 'Transformación Digital',
    'jobda.dialog.section1.content': 'Ofrecemos soluciones tecnológicas personalizadas que permiten a las empresas transformar sus procesos y adaptarse a la era digital. Nuestra tecnología se integra perfectamente con los sistemas existentes, permitiendo una transición fluida.',
    'jobda.dialog.section2.title': 'Desarrollo con IA',
    'jobda.dialog.section2.content': 'Implementamos inteligencia artificial avanzada en todas nuestras soluciones, permitiendo a las empresas automatizar procesos, analizar datos y obtener insights valiosos para la toma de decisiones estratégicas.',
    'jobda.dialog.section3.title': 'Servicios a Medida',
    'jobda.dialog.section3.content': 'Cada solución es diseñada específicamente para atender las necesidades particulares de cada cliente, garantizando resultados óptimos y una experiencia de usuario excepcional.',
    'jobda.dialog.contact': 'Para más información sobre nuestros servicios de desarrollo tecnológico, contáctanos en:',
    'jobda.dialog.go_to_appia': 'Acceder a Appia',
    
    'sinapsy.dialog.subtitle': 'Revista digital de Psicología, Neurociencias y Salud para todos los públicos',
    'sinapsy.dialog.features': 'Características',
    'sinapsy.dialog.participate': '¿Quieres participar?',
    'sinapsy.dialog.subscribe': 'Suscribirme',
    'sinapsy.dialog.visit_website': 'Visitar sitio web',
    
    'neuronmeg.dialog.title': 'Servicios de Psicología a Domicilio – NeuronMeg',
    'neuronmeg.dialog.subtitle': 'Atención psicológica especializada en la comodidad de tu hogar',
    'neuronmeg.dialog.description': 'NeuronMeg ofrece servicios de psicología a domicilio para diferentes edades y necesidades en Girona y el Alt Empordà.',
    'neuronmeg.dialog.coverage': 'Figueres, Roses, Castelló d\'Empúries, Llançà, y otras localidades del Alt Empordà',
    'neuronmeg.dialog.payment': 'Antes de la visita, es necesario realizar un abono mediante un enlace que se proporcionará y enviar copia del DNI y tarjeta sanitaria como medida de seguridad.',
    
    'neuronmeg.dialog.children.title': 'Psicología Infantil a Domicilio',
    'neuronmeg.dialog.children.description': 'Ofrecemos atención psicológica especializada para niños en su hogar en la zona de Girona y el Alt Empordà. Para concertar una cita, puedes hacerlo por teléfono o email.',
    
    'neuronmeg.dialog.adults.title': 'Psicología para Adultos a Domicilio',
    'neuronmeg.dialog.adults.description': 'Realizamos sesiones psicológicas para adultos en su propio domicilio en Girona y el Alt Empordà. Para agendar la cita, contáctanos por teléfono o correo electrónico.',
    
    'neuronmeg.dialog.elderly.title': 'Psicología para Gente Mayor a Domicilio',
    'neuronmeg.dialog.elderly.description': 'Brindamos apoyo psicológico especializado a personas mayores en la comodidad de su hogar en Girona y el Alt Empordà. Para reservar una cita, contacta por teléfono o email.',
    'neuronmeg.dialog.contact.title': 'Información de contacto',
    'neuronmeg.dialog.close': 'Cerrar',
    'neuronmeg.dialog.visit_website': 'Visitar sitio web',
    
    'neuronmeg.button': 'Acceder a NeuronMeg',
    'neuronmeg.badge': 'Atención a domicilio',
    'service.neuronmeg.title': 'NEURONMEG',
    'service.neuronmeg.description': 'Servicios de psicología a domicilio para diferentes edades y necesidades en Girona y el Alt Empordà.',
    'service.neuronmeg.feature1': 'Psicología infantil especializada',
    'service.neuronmeg.feature2': 'Atención a adultos y personas mayores',
    'service.neuronmeg.feature3': 'Profesionales cualificados a domicilio',
    
    'service.empordajobs.title': 'EJOBS',
    'service.empordajobs.description': 'Ofertas de trabajo en el Alt i Baix Empordà, provincia de Girona. Encuentra empleo cerca de ti con facilidad.',
    'service.empordajobs.feature1': 'Empleos locales en la provincia',
    'service.empordajobs.feature2': 'Búsqueda por localidad',
    'service.empordajobs.feature3': 'Actualizaciones recientes de ofertas',
    'service.empordajobs.feature4': 'Ofertas a partir de 1200 €',
    'service.empordajobs.badge': 'Empleo local',
    
    'service.saludalia.title': 'SALUDALIA',
    'service.saludalia.description': 'Servicios integrales de salud con atención personalizada. Cuidamos de tu bienestar físico y mental.',
    'service.saludalia.feature1': 'Especialistas en medicina preventiva',
    'service.saludalia.feature2': 'Consultas presenciales y telemedicina',
    'service.saludalia.feature3': 'Seguimiento personalizado',
    'service.saludalia.badge': 'Salud integral',
    'service.empordajobs.button': 'Acceder a Empordà Jobs',
    
    'empordajobs.dialog.status': 'En desarrollo',
    'empordajobs.dialog.subtitle': 'Portal de empleo especializado en la comarca del Empordà',
    'empordajobs.dialog.description.title': 'Descripción del servicio',
    'empordajobs.dialog.description.content': 'EMPORDÀ JOBS es un portal de empleo especializado en ofertas de trabajo en la región del Alt i Baix Empordà, provincia de Girona. Ofrece una plataforma completa para conectar a empresas locales con candidatos cualificados.',
    'empordajobs.dialog.features.title': 'Características principales',
    'empordajobs.dialog.features.item1': 'Gestión total de candidatos para empresas',
    'empordajobs.dialog.features.item2': 'Análisis con IA integrada para seleccionar los mejores candidatos',
    'empordajobs.dialog.features.item3': 'Evaluación de competencias mediante títulos académicos o experiencia laboral',
    'empordajobs.dialog.features.item4': 'Sistema de recomendaciones basado en valoraciones de empresas anteriores',
    'empordajobs.dialog.pricing.title': 'Precios',
    'empordajobs.dialog.pricing.content': 'Nuestro servicio premium incluye la gestión completa del proceso de selección:',
    'empordajobs.dialog.pricing.per_offer': 'Por oferta de trabajo publicada',
    'empordajobs.dialog.visit_button': 'Ir a Empordà Jobs',
    'empordajobs.dialog.close': 'Cerrar',
    
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

    'investors.title': 'Inversores',
    'investors.subtitle': 'Tu Intranet',
    'investors.tab.overview': 'Visión general',
    'investors.tab.options': 'Opciones de inversión',
    'investors.tab.contact': 'Contacto',
    
    'investors.what_is': '¿Qué es NFlow?',
    'investors.chatbot_description': 'Un asistente emocional que responde en cualquier idioma, orienta con rigor y ofrece contenido adaptado a adolescentes, madres, padres y adultos.',
    'investors.price_info': 'Funciona por suscripción mensual: 2,99 €/usuario, sin personal ni gastos variables.',
    'investors.tech_info': 'Código propio. IA integrada. Listo para escalar.',
    
    'investors.company_info': 'Grupo empresarial ya constituido',
    'investors.company_description': 'Este proyecto forma parte de EmpordaJobs SL – B02701100.',
    'investors.company_legal': 'La estructura legal ya existe. El producto también.',
    
    'investors.investment_info': 'Inversión inicial: ya hecha',
    'investors.development_cost': 'Desarrollar NFlow costaría más de 70.000 € en mercado.',
    'investors.founder_funded': 'Todo ha sido financiado directamente por mí como fundador.',
    'investors.seeking_boost': 'Ahora buscamos impulso, no arranque.',
    
    'investors.projection_title': 'Proyección a 12 meses',
    'investors.projection_users': 'Con 30.000 usuarios → +1M €/año',
    'investors.market_size': 'Mercado objetivo en España: hasta 400.000 usuarios',
    'investors.scalability': 'Escalable sin costes operativos por usuario',
    
    'investors.see_options': 'Ver opciones de inversión',
    'investors.most_popular': 'Popular',
    'investors.private_contract': 'Contrato privado',
    'investors.no_notary': 'Sin notaría',
    'investors.min_shares_safe': 'Participaciones desde 75 €',
    'investors.min_amount_safe': 'Mínimo: 500 € (≈6–7 participaciones)',
    'investors.select_safe': 'Seleccionar esta opción',
    
    'investors.notarial': 'Notarial (escritura pública)',
    'investors.min_shares_notarial': 'Participaciones desde 150 €',
    'investors.min_amount_notarial': 'Mínimo: 20 participaciones (3.000 €)',
    'investors.full_rights': 'Derechos societarios plenos',
    'investors.select_notarial': 'Seleccionar esta opción',
    
    'investors.transparency': 'Transparencia total para los inversores',
    'investors.transparency_description': 'Todos los inversores tendrán acceso directo a la base de datos SQL Users, donde podrán ver:',
    'investors.real_time_users': 'Altas de usuarios en tiempo real',
    'investors.confirmed_payments': 'Pagos confirmados',
    'investors.revenue_tracking': 'Recaudación bruta, neta y evolución',
    
    'investors.back': 'Volver',
    'investors.next': 'Siguiente',
    
    'investors.contact_title': '¿Quieres recibir el dossier inversor o ver la demo?',
    'investors.email_instructions': 'Envía un email para recibir más información',
    'investors.website_info': 'Visita nuestra web para más información',
    'investors.final_note': 'No vendemos humo. Hemos invertido tiempo, dinero y conocimiento. Y si esto despega, cada participación puede multiplicar su valor por 20 o más.',
    'investors.back_to_overview': 'Volver al resumen',
  },
  
  ca: {
    // Catalán
    'common.more_info': 'Més dades',
    
    'nav.about': 'Sobre nosaltres',
    'nav.services': 'Serveis',
    'nav.contact': 'Contacte',
    'nav.rewards': 'Premis',
    'nav.projects': 'Projectes',
    'nav.investors': 'Inversors',
    
    'founderTitle': 'Fundador i Director Executiu',
    'founderQuote': 'Amb NFLOW i APPIA, el meu objectiu és oferir solucions innovadores que integrin salut mental i desenvolupament laboral, alineades amb els principis de la normativa ISO 45003, centrada en el benestar psicològic en l\'entorn de treball. NFLOW actua com un recurs digital de suport emocional continu, mentre que APPIA permet a cada organització desenvolupar la seva pròpia intel·ligència artificial personalitzada, generant entorns altament digitalitzats i adaptatius, capaços de respondre als nous desafiaments de l\'àmbit corporatiu.',
    'founderName': 'Ramón Molons de San Román',
    'founderRole': 'CEO i Fundador d\'EmpordaJobs SL',
    'founderProfession': 'Psicòleg Clínic i Neuroenginyer en Telecomunicacions',
    'founderAlt': 'Foto de Ramón Molons de San Román, CEO',
    
    'rewards.users': 'usuaris actius',
    
    'hero.title': 'Benvinguts a la nostra plataforma de serveis',
    'hero.subtitle': 'Escull aquell que necessitis',
    'hero.cta': 'Explorar serveis',
    
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
    'service.nflow.button': 'Anar a NFLOW',
    
    'service.appia.title': 'APPIA',
    'service.appia.description': 'Servei especialitzat en desenvolupament d\'aplicacions web i mòbils amb intel·ligència artificial per a empreses que busquen digitalitzar els seus processos.',
    'service.appia.feature1': 'Solucions tecnològiques personalitzades',
    'service.appia.feature2': 'Desenvolupament web i mòbil amb IA',
    'service.appia.feature3': 'Transformació digital per a empreses',
    'service.appia.badge': 'Innovació tecnològica',
    'service.appia.button': 'Més informació',
    
    'service.sinapsy.title': 'SINAPSY',
    'service.sinapsy.description': 'Revista digital de Psicologia, Neurociències i Salut que apropa aquests camps al dia a dia de les persones, amb rigor professional.',
    'service.sinapsy.feature1': 'Articles accessibles per a tots els públics',
    'service.sinapsy.feature2': 'Contingut científic d\'alt nivell',
    'service.sinapsy.feature3': 'Entrevistes i recursos descarregables',
    'service.sinapsy.badge': 'Neurociència i Psicologia',
    'service.sinapsy.button': 'Explorar SINAPSY',
    'nflow.button.explore': 'Accedir a NFLOW',
    
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
    'area.appia': 'Appia',
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
    
    'jobda.dialog.title': 'JOBDA - Innovació Tecnològica',
    'jobda.dialog.description': 'JOBDA és un servei especialitzat en el desenvolupament d\'aplicacions web i mòbils amb intel·ligència artificial per a empreses que busquen digitalitzar i optimitzar els seus processos.',
    'jobda.dialog.section1.title': 'Transformació Digital',
    'jobda.dialog.section1.content': 'Oferim solucions tecnològiques personalitzades que permeten a les empreses transformar els seus processos i adaptar-se a l\'era digital. La nostra tecnologia s\'integra perfectament amb els sistemes existents, permetent una transició fluida.',
    'jobda.dialog.section2.title': 'Desenvolupament amb IA',
    'jobda.dialog.section2.content': 'Implementem intel·ligència artificial avançada en totes les nostres solucions, permetent a les empreses automatitzar processos, analitzar dades i obtenir insights valuosos per a la presa de decisions estratègiques.',
    'jobda.dialog.section3.title': 'Serveis a Mida',
    'jobda.dialog.section3.content': 'Cada solució és dissenyada específicament per atendre les necessitats particulars de cada client, garantint resultats òptims i una experiència d\'usuari excepcional.',
    'jobda.dialog.contact': 'Per a més informació sobre els nostres serveis de desenvolupament tecnològic, contacta\'ns a:',
    'jobda.dialog.go_to_appia': 'Anar a Appia',
    
    'sinapsy.dialog.subtitle': 'Revista digital de Psicologia, Neurociències i Salut per a tots els públics',
    'sinapsy.dialog.features': 'Característiques',
    'sinapsy.dialog.participate': 'Vols participar?',
    'sinapsy.dialog.subscribe': 'Subscriure\'m',
    'sinapsy.dialog.visit_website': 'Visitar lloc web',
    
    'neuronmeg.dialog.title': 'Serveis de Psicologia a Domicili – NeuronMeg',
    'neuronmeg.dialog.subtitle': 'Atenció psicològica especialitzada a la comoditat de la teva llar',
    'neuronmeg.dialog.description': 'NeuronMeg ofereix serveis de psicologia a domicili per a diferents edats i necessitats a Girona i l\'Alt Empordà.',
    'neuronmeg.dialog.coverage': 'Figueres, Roses, Castelló d\'Empúries, Llançà i altres localitats de l\'Alt Empordà',
    'neuronmeg.dialog.payment': 'Abans de la visita, cal realitzar un abonament mitjançant un enllaç que es proporcionarà i enviar còpia del DNI i targeta sanitària com a mesura de seguretat.',
    
    'neuronmeg.dialog.children.title': 'Psicologia Infantil a Domicili',
    'neuronmeg.dialog.children.description': 'Oferim atenció psicològica especialitzada per a nens a la seva llar a la zona de Girona i l\'Alt Empordà. Per concertar una cita, pots fer-ho per telèfon o email.',
    
    'neuronmeg.dialog.adults.title': 'Psicologia per a Adults a Domicili',
    'neuronmeg.dialog.adults.description': 'Realitzem sessions psicològiques per a adults al seu propi domicili a Girona i l\'Alt Empordà. Per agendar la cita, contacta\'ns per telèfon o correu electrònic.',
    
    'neuronmeg.dialog.elderly.title': 'Psicologia per a Gent Gran a Domicili',
    'neuronmeg.dialog.elderly.description': 'Brindem suport psicològic especialitzat a persones grans a la comoditat de la seva llar a Girona i l\'Alt Empordà. Per reservar una cita, contacta per telèfon o email.',
    'neuronmeg.dialog.contact.title': 'Informació de contacte',
    'neuronmeg.dialog.close': 'Tancar',
    'neuronmeg.dialog.visit_website': 'Visitar lloc web',
    
    'neuronmeg.button': 'Anar Ins NeuronMeg',
    'neuronmeg.badge': 'Atenció a domicili',
    'service.neuronmeg.title': 'NEURONMEG',
    'service.neuronmeg.description': 'Serveis de psicologia a domicili per a diferents edats i necessitats a Girona i l\'Alt Empordà.',
    'service.neuronmeg.feature1': 'Psicologia infantil especialitzada',
    'service.neuronmeg.feature2': 'Atenció a adults i gent gran',
    'service.neuronmeg.feature3': 'Professionals qualificats a domicili',
    
    'service.empordajobs.title': 'EJOBS',
    'service.empordajobs.description': 'Ofertes de feina a l\'Alt i Baix Empordà, província de Girona. Troba feina a prop teu amb facilitat.',
    'service.empordajobs.feature1': 'Feines locals a la província',
    'service.empordajobs.feature2': 'Cerca per localitat',
    'service.empordajobs.feature3': 'Actualitzacions recents d\'ofertes',
    'service.empordajobs.feature4': 'Ofertes a partir de 1200 €',
    'service.empordajobs.badge': 'Feina local',
    
    'service.saludalia.title': 'SALUDALIA',
    'service.saludalia.description': 'Serveis integrals de salut amb atenció personalitzada. Cuidem del teu benestar físic i mental.',
    'service.saludalia.feature1': 'Especialistes en medicina preventiva',
    'service.saludalia.feature2': 'Consultes presencials i telemedicina',
    'service.saludalia.feature3': 'Seguiment personalitzat',
    'service.saludalia.badge': 'Salut integral',
    'service.empordajobs.button': 'Anar a Empordà Jobs',
    
    'empordajobs.dialog.status': 'En desenvolupament',
    'empordajobs.dialog.subtitle': 'Portal d\'ocupació especialitzat a la comarca de l\'Empordà',
    'empordajobs.dialog.description.title': 'Descripció del servei',
    'empordajobs.dialog.description.content': 'EMPORDÀ JOBS és un portal d\'ocupació especialitzat en ofertes de feina a la regió de l\'Alt i Baix Empordà, província de Girona. Ofereix una plataforma completa per connectar empreses locals amb candidats qualificats.',
    'empordajobs.dialog.features.title': 'Característiques principals',
    'empordajobs.dialog.features.item1': 'Gestió total de candidats per a empreses',
    'empordajobs.dialog.features.item2': 'Anàlisi amb IA integrada per seleccionar els millors candidats',
    'empordajobs.dialog.features.item3': 'Avaluació de competències mitjançant títols acadèmics o experiència laboral',
    'empordajobs.dialog.features.item4': 'Sistema de recomanacions basat en valoracions d\'empreses anteriors',
    'empordajobs.dialog.pricing.title': 'Preus',
    'empordajobs.dialog.pricing.content': 'El nostre servei prèmium inclou la gestió completa del procés de selecció:',
    'empordajobs.dialog.pricing.per_offer': 'Per oferta de feina publicada',
    'empordajobs.dialog.visit_button': 'Anar a Empordà Jobs',
    'empordajobs.dialog.close': 'Tancar',
    
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
    
    'investors.title': 'Inversors',
    'investors.subtitle': 'La teva Intranet',
    'investors.tab.overview': 'Visió general',
    'investors.tab.options': 'Opcions d\'inversió',
    'investors.tab.contact': 'Contacte',
  },
  
  en: {
    // Inglés
    'common.more_info': 'More data',
    
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.rewards': 'Rewards',
    'nav.projects': 'Projects',
    'nav.investors': 'Investors',
    
    'investors.title': 'Investors',
    'investors.subtitle': 'Your Intranet',
    'investors.tab.overview': 'Overview',
    'investors.tab.options': 'Investment Options',
    'investors.tab.contact': 'Contact',
    
    'founderTitle': 'Founder and Chief Executive Officer',
    'founderQuote': 'With NFLOW and APPIA, my goal is to offer innovative solutions that integrate mental health and labor development, aligned with the principles of the ISO 45003 standard, focused on psychological well-being in the work environment. NFLOW acts as a digital resource for continuous emotional support, while APPIA allows each organization to develop its own personalized artificial intelligence, generating highly digitized and adaptive environments, capable of responding to new corporate challenges.',
    'founderName': 'Ramón Molons de San Román',
    'founderRole': 'CEO and Founder of EmpordaJobs SL',
    'founderProfession': 'Clinical Psychologist and Telecommunication Neuroengineer',
    'founderAlt': 'Photo of Ramón Molons de San Román, CEO',
    
    'rewards.users': 'active users',
    
    'hero.title': 'Welcome to our services platform',
    'hero.subtitle': 'Choose the one you need',
    'hero.cta': 'Explore our services',
    
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
    'service.nflow.button': 'Go to NFLOW',
    
    'service.appia.title': 'APPIA',
    'service.appia.description': 'Specialized service in the development of web and mobile applications with artificial intelligence for companies looking to digitize and optimize their processes.',
    'service.appia.feature1': 'Personalized technological solutions',
    'service.appia.feature2': 'Web and mobile development with AI',
    'service.appia.feature3': 'Digital transformation for businesses',
    'service.appia.badge': 'Technological innovation',
    'service.appia.button': 'More information',
    
    'service.sinapsy.title': 'SINAPSY',
    'service.sinapsy.description': 'Digital Magazine of Psychology, Neuroscience and Health that brings these fields to people\'s everyday lives, with professional rigor.',
    'service.sinapsy.feature1': 'Articles accessible to all audiences',
    'service.sinapsy.feature2': 'High-level scientific content',
    'service.sinapsy.feature3': 'Interviews and downloadable resources',
    'service.sinapsy.badge': 'Neuroscience & Psychology',
    'service.sinapsy.button': 'Explore SINAPSY',
    'nflow.button.explore': 'Explore NFLOW',
    
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
    'area.appia': 'Appia',
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
    
    'jobda.dialog.title': 'JOBDA - Technological Innovation',
    'jobda.dialog.description': 'JOBDA is a specialized service in the development of web and mobile applications with artificial intelligence for companies looking to digitize and optimize their processes.',
    'jobda.dialog.section1.title': 'Digital Transformation',
    'jobda.dialog.section1.content': 'We offer personalized technological solutions that allow companies to transform their processes and adapt to the digital era. Our technology integrates perfectly with existing systems, allowing a smooth transition.',
    'jobda.dialog.section2.title': 'AI Development',
    'jobda.dialog.section2.content': 'We implement advanced artificial intelligence in all our solutions, allowing companies to automate processes, analyze data and obtain valuable insights for strategic decision making.',
    'jobda.dialog.section3.title': 'Tailored Services',
    'jobda.dialog.section3.content': 'Each solution is specifically designed to meet the particular needs of each client, ensuring optimal results and an exceptional user experience.',
    'jobda.dialog.contact': 'For more information about our technological development services, contact us at:',
    'jobda.dialog.go_to_appia': 'Go to Appia',
    
    'sinapsy.dialog.subtitle': 'Digital Magazine of Psychology, Neuroscience and Health for all audiences',
    'sinapsy.dialog.features': 'Features',
    'sinapsy.dialog.participate': 'Want to participate?',
    'sinapsy.dialog.subscribe': 'Subscribe',
    'sinapsy.dialog.visit_website': 'Visit website',
    
    'neuronmeg.dialog.title': 'Psychology Home Services – NeuronMeg',
    'neuronmeg.dialog.subtitle': 'Specialized psychological care in the comfort of your home',
    'neuronmeg.dialog.description': 'NeuronMeg offers home psychology services for different ages and needs in Girona and Alt Empordà.',
    'neuronmeg.dialog.coverage': 'Figueres, Roses, Castelló d\'Empúries, Llançà, and other locations in Alt Empordà',
    'neuronmeg.dialog.payment': 'Before the visit, it is necessary to make a payment through a link that will be provided and to send a copy of your ID and health card as a security measure.',
    
    'neuronmeg.dialog.children.title': 'Child Psychology at Home',
    'neuronmeg.dialog.children.description': 'We offer specialized psychological care for children in their home in the Girona and Alt Empordà area. To make an appointment, you can do so by phone or email.',
    
    'neuronmeg.dialog.adults.title': 'Adult Psychology at Home',
    'neuronmeg.dialog.adults.description': 'We conduct psychological sessions for adults in their own home in Girona and Alt Empordà. To schedule an appointment, contact us by phone or email.',
    
    'neuronmeg.dialog.elderly.title': 'Elderly Psychology at Home',
    'neuronmeg.dialog.elderly.description': 'We provide specialized psychological support for older people in the comfort of their home in Girona and Alt Empordà. To book an appointment, contact us by phone or email.',
    'neuronmeg.dialog.contact.title': 'Contact Information',
    'neuronmeg.dialog.close': 'Close',
    'neuronmeg.dialog.visit_website': 'Visit website',
    
    'neuronmeg.button': 'Go Ins NeuronMeg',
    'neuronmeg.badge': 'Home care',
    'service.neuronmeg.title': 'NEURONMEG',
    'service.neuronmeg.description': 'Home psychology services for different ages and needs in Girona and Alt Empordà.',
    'service.neuronmeg.feature1': 'Specialized child psychology',
    'service.neuronmeg.feature2': 'Adult and elderly care',
    'service.neuronmeg.feature3': 'Qualified professionals at home',
    
    'service.empordajobs.title': 'EJOBS',
    'service.empordajobs.description': 'Job offers in Alt i Baix Empordà, Girona province. Find employment near you with ease.',
    'service.empordajobs.feature1': 'Local jobs in the province',
    'service.empordajobs.feature2': 'Search by location',
    'service.empordajobs.feature3': 'Recent job offer updates',
    'service.empordajobs.feature4': 'Job offers from 1200 €',
    'service.empordajobs.badge': 'Local employment',
    
    'service.saludalia.title': 'SALUDALIA',
    'service.saludalia.description': 'Comprehensive health services with personalized care. We take care of your physical and mental well-being.',
    'service.saludalia.feature1': 'Specialists in preventive medicine',
    'service.saludalia.feature2': 'In-person consultations and telemedicine',
    'service.saludalia.feature3': 'Personalized follow-up',
    'service.saludalia.badge': 'Comprehensive health',
    'service.empordajobs.button': 'Go to Empordà Jobs',
    
    'empordajobs.dialog.status': 'Under development',
    'empordajobs.dialog.subtitle': 'Employment portal specialized in the Empordà region',
    'empordajobs.dialog.description.title': 'Service Description',
    'empordajobs.dialog.description.content': 'EMPORDÀ JOBS is an employment portal specialized in job offers in the Alt i Baix Empordà region, Girona province. It offers a complete platform to connect local businesses with qualified candidates.',
    'empordajobs.dialog.features.title': 'Main Features',
    'empordajobs.dialog.features.item1': 'Total candidate management for companies',
    'empordajobs.dialog.features.item2': 'Integrated AI analysis to select the best candidates',
    'empordajobs.dialog.features.item3': 'Skills assessment through academic qualifications or work experience',
    'empordajobs.dialog.features.item4': 'Recommendation system based on ratings from previous employers',
    'empordajobs.dialog.pricing.title': 'Pricing',
    'empordajobs.dialog.pricing.content': 'Our premium service includes complete management of the selection process:',
    'empordajobs.dialog.pricing.per_offer': 'Per published job offer',
    'empordajobs.dialog.visit_button': 'Go to Empordà Jobs',
    'empordajobs.dialog.close': 'Close',
    
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