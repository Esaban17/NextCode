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
    title: "Elegance Bodas",
    type: "Landing Page",
    category: "landing",
    image: "/portfolio/wedding.jpg",
    description: "Landing page para organizadores de bodas",
  },
  {
    id: 2,
    title: "TechStart",
    type: "Sitio Web",
    category: "website",
    image: "/portfolio/tech.jpg",
    description: "Sitio web corporativo para startup tecnológica",
  },
  {
    id: 3,
    title: "FitTrack Pro",
    type: "Aplicación Web",
    category: "webapp",
    image: "/portfolio/fitness.jpg",
    description: "Dashboard de seguimiento de entrenamientos",
  },
  {
    id: 4,
    title: "Dulce XV",
    type: "Landing Page",
    category: "landing",
    image: "/portfolio/quince.jpg",
    description: "Invitación digital para XV años",
  },
  {
    id: 5,
    title: "Legal Solutions",
    type: "Sitio Web",
    category: "website",
    image: "/portfolio/legal.jpg",
    description: "Sitio web para despacho de abogados",
  },
  {
    id: 6,
    title: "Inventory Hub",
    type: "Aplicación Web",
    category: "webapp",
    image: "/portfolio/inventory.jpg",
    description: "Sistema de gestión de inventarios",
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
