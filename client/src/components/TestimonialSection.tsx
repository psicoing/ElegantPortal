import { TestimonialCard } from "@/components/TestimonialCard";
import { motion } from "framer-motion";

const testimonials = [
  {
    initials: "OG",
    name: "Olympia Group",
    role: "Empresa Cliente",
    comment: "Siempre han seleccionado con mucha profesionalidad de EJOBS. Su dedicación y calidad en la búsqueda de candidatos es excepcional.",
    rating: 5,
    color: "primary"
  },
  {
    initials: "GP",
    name: "García de Pou",
    role: "Empresa Cliente",
    comment: "Nos impresionó su manera de trabajar y dedicación en la búsqueda de perfiles. El nivel de compromiso y profesionalidad es destacable.",
    rating: 5,
    color: "secondary"
  },
  {
    initials: "GP",
    name: "Mercedes Benz",
    role: "Empresa Cliente",
    comment: "Siempre dispuestos hasta encontrar el candidato ideal. Su persistencia y profesionalidad en el proceso de selección es admirable.",
    rating: 5,
    color: "accent"
  },
  {
    initials: "ME",
    name: "Molí de l'Escala",
    role: "Empresa Cliente",
    comment: "Nos encontró a un cocinero que vivía al lado del hotel, increíble. Muy dedicado a su trabajo y con gran atención al detalle.",
    rating: 5,
    color: "primary"
  },
  {
    initials: "PG",
    name: "Piscinas Gemil",
    role: "Empresa Cliente",
    comment: "Nos encontró el personal que faltaba y con unas condiciones justas. Buen profesional con gran capacidad de gestión.",
    rating: 5,
    color: "secondary"
  },
  {
    initials: "AT",
    name: "Airtem",
    role: "Empresa Cliente",
    comment: "Profesional desde un principio, no acaba el trabajo hasta encontrar el perfil que se le solicitó. Muy perseverante.",
    rating: 5,
    color: "accent"
  }
];

export function TestimonialSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Casos Reales de Éxito
          </h2>
          <p className="text-gray-600">
            Empresas que confían en EJOBS para encontrar el talento que necesitan.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard 
                initials={testimonial.initials}
                name={testimonial.name}
                role={testimonial.role}
                comment={testimonial.comment}
                rating={testimonial.rating}
                color={testimonial.color as "primary" | "secondary" | "accent"}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
