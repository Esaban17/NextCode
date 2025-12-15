"use client";

import { motion } from "framer-motion";
import { Palette, Clock, LifeBuoy, ShieldCheck } from "lucide-react";
import { benefits } from "@/data/site";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Palette,
  Clock,
  LifeBuoy,
  ShieldCheck,
};

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-card-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ¿Por qué elegir <span className="gradient-text">NextCode</span>?
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Nos diferenciamos por ofrecer soluciones completas que combinan
            diseño, tecnología y atención personalizada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon];
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-2xl bg-card-bg border border-card-border hover:border-primary/30 transition-all glow-hover"
              >
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {IconComponent && <IconComponent className="w-7 h-7 text-white" />}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-text-muted">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
