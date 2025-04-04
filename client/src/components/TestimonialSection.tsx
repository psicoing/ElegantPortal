import { TestimonialCard } from "@/components/TestimonialCard";
import { motion } from "framer-motion";

const testimonials = [
  {
    initials: "AL",
    name: "Ana López",
    role: "Usuario de NFLOW",
    comment: "NFLOW me ha ayudado a gestionar mejor mis emociones. Las conversaciones son sorprendentemente naturales y me siento escuchada.",
    rating: 5,
    color: "primary"
  },
  {
    initials: "MR",
    name: "Miguel Rodríguez",
    role: "Usuario de JOBDA",
    comment: "Gracias a JOBDA pude encontrar mi empleo actual. La plataforma es intuitiva y las ofertas están muy bien organizadas por sectores.",
    rating: 5,
    color: "secondary"
  },
  {
    initials: "CG",
    name: "Carmen García",
    role: "Usuaria de ambos servicios",
    comment: "He utilizado tanto NFLOW como JOBDA. Ambas plataformas son excelentes, con interfaces limpias y funciones que realmente facilitan mi día a día.",
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
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-gray-600">
            Descubra las experiencias de quienes ya utilizan nuestros servicios.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                color={testimonial.color}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
