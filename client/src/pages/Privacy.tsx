import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Privacy() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header toggleMobileMenu={toggleMobileMenu} />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 group">
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              <span>Volver a inicio</span>
            </Link>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Política de Privacidad y Cookies</h1>
            
            <div className="prose prose-blue max-w-none">
              <p className="text-gray-600 mb-6">
                Última actualización: {new Date().toLocaleDateString('es-ES', {day: 'numeric', month: 'long', year: 'numeric'})}
              </p>
              
              <h2>Introducción</h2>
              <p>
                EMPORDAJOBS SL (en adelante, "nosotros", "nuestro" o "la Compañía") respeta su privacidad y se compromete a proteger sus datos personales. Esta política de privacidad le informará sobre cómo cuidamos sus datos personales cuando visita nuestro sitio web y le informará sobre sus derechos de privacidad y cómo la ley le protege.
              </p>
              
              <h2>Datos que recopilamos</h2>
              <p>
                Cuando utiliza nuestro sitio web, podemos recopilar los siguientes tipos de información:
              </p>
              <ul>
                <li>Información de identidad: nombre, apellidos, nombre de usuario.</li>
                <li>Información de contacto: dirección de correo electrónico, número de teléfono, dirección.</li>
                <li>Información técnica: dirección IP, tipo y versión del navegador, zona horaria y ubicación, tipos y versiones de complementos del navegador, sistema operativo y plataforma.</li>
                <li>Información de uso: información sobre cómo utiliza nuestro sitio web y servicios.</li>
              </ul>
              
              <h2>Cómo utilizamos sus datos</h2>
              <p>
                Utilizamos la información que recopilamos de diversas formas, incluyendo:
              </p>
              <ul>
                <li>Proporcionar, operar y mantener nuestro sitio web.</li>
                <li>Mejorar, personalizar y ampliar nuestro sitio web.</li>
                <li>Comprender y analizar cómo utiliza nuestro sitio web.</li>
                <li>Desarrollar nuevos productos, servicios, características y funcionalidades.</li>
                <li>Comunicarnos con usted para proporcionar actualizaciones y otra información relacionada con el sitio web.</li>
                <li>Enviar correos electrónicos de marketing (puede optar por no recibir nuestros correos electrónicos de marketing).</li>
                <li>Encontrar y prevenir el fraude.</li>
              </ul>
              
              <h2>Cookies</h2>
              <p>
                Utilizamos cookies y tecnologías similares de seguimiento para rastrear la actividad en nuestro sitio web y mantener cierta información. Las cookies son archivos con una pequeña cantidad de datos que pueden incluir un identificador único anónimo.
              </p>
              <p>
                Las cookies se envían a su navegador desde un sitio web y se almacenan en su dispositivo. Otras tecnologías de seguimiento también se utilizan, como balizas, etiquetas y scripts para recopilar y rastrear información y mejorar y analizar nuestro sitio web.
              </p>
              
              <h3>Tipos de cookies que utilizamos:</h3>
              <ul>
                <li><strong>Cookies necesarias:</strong> Son esenciales para que el sitio web funcione correctamente.</li>
                <li><strong>Cookies de preferencias:</strong> Permiten que el sitio web recuerde sus elecciones para ofrecerle características mejoradas y personalizadas.</li>
                <li><strong>Cookies estadísticas:</strong> Nos ayudan a entender cómo los visitantes interactúan con el sitio web.</li>
                <li><strong>Cookies de marketing:</strong> Se utilizan para seguir a los visitantes en los sitios web y mostrar anuncios relevantes.</li>
              </ul>
              
              <p>
                Puede instruir a su navegador para que rechace todas las cookies o para que le avise cuando se envía una cookie. Sin embargo, si no acepta cookies, es posible que no pueda utilizar algunas partes de nuestro sitio web.
              </p>
              
              <h2>Conservación de datos</h2>
              <p>
                Conservaremos sus datos personales solo durante el tiempo necesario para los fines establecidos en esta política de privacidad, a menos que la ley exija o permita un período de retención más largo.
              </p>
              
              <h2>Sus derechos</h2>
              <p>
                Si usted es residente del Espacio Económico Europeo (EEE), tiene ciertos derechos de protección de datos. Queremos asegurarnos de que está plenamente consciente de todos sus derechos de protección de datos. Cada usuario tiene los siguientes derechos:
              </p>
              <ul>
                <li><strong>Derecho de acceso:</strong> Tiene derecho a solicitar copias de sus datos personales.</li>
                <li><strong>Derecho de rectificación:</strong> Tiene derecho a solicitar que corrijamos cualquier información que crea que es inexacta. También tiene derecho a solicitar que completemos la información que crea que está incompleta.</li>
                <li><strong>Derecho de supresión:</strong> Tiene derecho a solicitar que borremos sus datos personales, bajo ciertas condiciones.</li>
                <li><strong>Derecho a restringir el procesamiento:</strong> Tiene derecho a solicitar que restrinjamos el procesamiento de sus datos personales, bajo ciertas condiciones.</li>
                <li><strong>Derecho a objetar el procesamiento:</strong> Tiene derecho a objetar nuestro procesamiento de sus datos personales, bajo ciertas condiciones.</li>
                <li><strong>Derecho a la portabilidad de datos:</strong> Tiene derecho a solicitar que transfiramos los datos que hemos recopilado a otra organización, o directamente a usted, bajo ciertas condiciones.</li>
              </ul>
              
              <h2>Cambios a esta política</h2>
              <p>
                Podemos actualizar nuestra política de privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva política de privacidad en esta página.
              </p>
              
              <h2>Contacto</h2>
              <p>
                Si tiene alguna pregunta sobre esta política de privacidad, puede contactarnos:
              </p>
              <ul>
                <li>Por correo electrónico: empordajobs@gmail.com</li>
                <li>Por teléfono: +34 660 45 21 36</li>
                <li>Por correo postal: Portbou, Girona, España</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}