"use client";

import { motion } from "framer-motion";
import { Code2, MessageCircle, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card-bg border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <motion.a
              href="#inicio"
              className="flex items-center gap-2 text-xl font-bold"
              whileHover={{ scale: 1.05 }}
            >
              <Code2 className="w-8 h-8 text-primary" />
              <span className="gradient-text">{siteConfig.name}</span>
            </motion.a>
            <p className="text-text-muted">{siteConfig.tagline}</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {["Inicio", "Servicios", "Portafolio", "Contacto"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-text-muted hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contacto</h3>
            <div className="space-y-3">
              <motion.a
                href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(siteConfig.whatsapp.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </motion.a>
              <motion.a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5" />
                <span>{siteConfig.email}</span>
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              {[
                { icon: Instagram, href: siteConfig.social.instagram },
                { icon: Facebook, href: siteConfig.social.facebook },
                { icon: Linkedin, href: siteConfig.social.linkedin },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-card-border text-text-muted hover:text-primary hover:bg-primary/10 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-card-border text-center text-text-muted text-sm">
          <p>© {currentYear} {siteConfig.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
