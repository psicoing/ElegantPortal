import { motion } from "framer-motion";
import { StatCounter } from "./StatsCounter";
import { useLanguage } from "@/lib/language-context";

export function ImpactStatsSection() {
  const { t } = useLanguage();

  const stats = [
    {
      end: 15,
      label: t('stats.services') || "Servicios Integrados"
    },
    {
      end: 32,
      label: t('stats.experience') || "Años de Experiencia"
    },
    {
      end: 95,
      suffix: "%",
      label: t('stats.satisfaction') || "Satisfacción del Cliente"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-blue-50/50 dark:from-primary/10 dark:via-background dark:to-blue-950/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestro Impacto en Números
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Más de tres décadas transformando vidas a través de la tecnología y la innovación
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <StatCounter
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
                duration={2.5}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}