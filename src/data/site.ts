export const siteConfig = {
  name: "NextCode",
  description: "Creamos sitios y aplicaciones web que convierten ideas en experiencias digitales",
  tagline: "Soluciones digitales a tu medida",
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "521234567890",
    message: "Hola, me interesa conocer más sobre los servicios de NextCode para desarrollar mi sitio web.",
  },
  email: process.env.CONTACT_EMAIL || "contacto@nextcode.com",
  social: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  },
};

export const services = [
  {
    id: "landing",
    title: "Landing Pages",
    description: "Ideal para promociones, eventos, bodas y XV años",
    icon: "Smartphone",
    features: [
      "1 sola página optimizada",
      "Llamadas a la acción efectivas",
      "Diseño atractivo y moderno",
      "Optimizada para móviles",
      "Carga ultra rápida",
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "website",
    title: "Sitios Web Completos",
    description: "Para empresas y marcas personales que buscan presencia profesional",
    icon: "Globe",
    features: [
      "Múltiples secciones",
      "Galería, formularios y mapas",
      "SEO básico incluido",
      "Diseño responsivo",
      "Panel administrable (opcional)",
    ],
    color: "from-violet-500 to-purple-500",
  },
  {
    id: "webapp",
    title: "Aplicaciones Web",
    description: "Sistemas a medida para necesidades específicas de tu negocio",
    icon: "Code2",
    features: [
      "Sistemas personalizados",
      "Dashboards interactivos",
      "Formularios avanzados",
      "Integración con APIs",
      "Autenticación de usuarios",
    ],
    color: "from-pink-500 to-rose-500",
  },
];

export const features = [
  { icon: "Globe", title: "Dominio", description: "Tu dirección web única" },
  { icon: "Server", title: "Hosting", description: "Servidor rápido y confiable" },
  { icon: "Shield", title: "Certificado SSL", description: "Navegación segura" },
  { icon: "Headphones", title: "Soporte técnico", description: "Ayuda cuando la necesites" },
  { icon: "Smartphone", title: "Diseño responsive", description: "Perfecto en cualquier dispositivo" },
  { icon: "Zap", title: "Velocidad optimizada", description: "Carga rápida garantizada" },
];

export const portfolio = [
  {
    id: 1,
    title: "Real Estate MVP",
    type: "Aplicación Web",
    category: "webapp",
    image: "/real-state.png",
    description: "Plataforma inmobiliaria con búsqueda avanzada",
    url: "https://v0-real-estate-mvp-seven.vercel.app/",
  },
  {
    id: 2,
    title: "Quattro",
    type: "Sitio Web",
    category: "website",
    image: "/gq.png",
    description: "Sitio web corporativo profesional",
    url: "https://quattro.com.gt/",
  },
  {
    id: 3,
    title: "S4 Latam",
    type: "Sitio Web",
    category: "website",
    image: "/s4.png",
    description: "Plataforma de servicios empresariales",
    url: "https://s4latam.com/",
  },
  {
    id: 4,
    title: "Leguat",
    type: "Sitio Web",
    category: "website",
    image: "/leguat.png",
    description: "Sitio web de servicios legales",
    url: "https://leguat.com/",
  },
  {
    id: 5,
    title: "Indupra",
    type: "Sitio Web",
    category: "website",
    image: "/indupra.png",
    description: "Sitio web industrial y corporativo",
    url: "https://indupra.com/",
  },
  {
    id: 6,
    title: "Sherpasa",
    type: "Sitio Web",
    category: "website",
    image: "/sherpa.png",
    description: "Sitio web de servicios empresariales",
    url: "https://sherpasa.com/",
  },
];

export const benefits = [
  {
    icon: "Palette",
    title: "Diseño profesional",
    description: "Interfaces modernas y atractivas que reflejan la identidad de tu marca",
  },
  {
    icon: "Clock",
    title: "Entrega rápida",
    description: "Proyectos entregados en tiempo récord sin sacrificar la calidad",
  },
  {
    icon: "LifeBuoy",
    title: "Soporte continuo",
    description: "Te acompañamos después de la entrega para cualquier duda o mejora",
  },
  {
    icon: "ShieldCheck",
    title: "Seguridad y rendimiento",
    description: "Sitios optimizados, seguros y preparados para crecer contigo",
  },
];

export const projectTypes = [
  { value: "landing", label: "Landing Page" },
  { value: "website", label: "Sitio Web Completo" },
  { value: "webapp", label: "Aplicación Web" },
  { value: "other", label: "Otro" },
];
