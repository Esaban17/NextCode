"use client";

import { motion } from "framer-motion";
import { Globe, Server, Shield, Headphones, Smartphone, Zap } from "lucide-react";
import { features } from "@/data/site";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Server,
  Shield,
  Headphones,
  Smartphone,
  Zap,
};

export default function Includes() {
  return (
    <section id="incluye" className="py-24 bg-card-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ¿Qué <span className="gradient-text">incluye</span>?
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Todos nuestros proyectos incluyen todo lo necesario para que tu
            presencia digital sea profesional y efectiva.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group flex flex-col items-center text-center p-6 rounded-2xl bg-card-bg border border-card-border hover:border-primary/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  {IconComponent && (
                    <IconComponent className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                  )}
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-muted">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 rounded-3xl gradient-bg text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-2">
            Todo incluido, sin costos ocultos
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto">
            Cada proyecto incluye dominio, hosting, SSL, soporte y optimización.
            Tú solo preocúpate por hacer crecer tu negocio.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
