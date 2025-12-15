# NextCode - Sitio Web MVP

Sitio web profesional para NextCode, empresa dedicada al desarrollo de sitios web y aplicaciones web.

## Tecnologías

- **Framework**: Next.js 16 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 4
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Deploy**: Vercel

## Estructura del Proyecto

```
src/
├── app/
│   ├── api/
│   │   └── contact/          # API para formulario de contacto
│   ├── globals.css           # Estilos globales
│   ├── layout.tsx            # Layout principal
│   ├── page.tsx              # Página principal
│   └── sitemap.ts            # Generador de sitemap
├── components/
│   ├── Header.tsx            # Navegación
│   ├── Hero.tsx              # Sección hero
│   ├── Benefits.tsx          # Beneficios
│   ├── Services.tsx          # Servicios
│   ├── Includes.tsx          # ¿Qué incluye?
│   ├── Portfolio.tsx         # Portafolio
│   ├── Contact.tsx           # Formulario de contacto
│   └── Footer.tsx            # Pie de página
├── data/
│   └── site.ts               # Configuración del sitio
└── lib/                      # Utilidades
```

## Configuración

1. Clonar el repositorio
2. Copiar `.env.example` a `.env.local`
3. Configurar las variables de entorno
4. Instalar dependencias: `npm install`
5. Ejecutar en desarrollo: `npm run dev`

## Variables de Entorno

```env
RESEND_API_KEY=           # API key de Resend para emails
CONTACT_EMAIL=            # Email para recibir contactos
NEXT_PUBLIC_WHATSAPP_NUMBER=  # Número de WhatsApp
NEXT_PUBLIC_SITE_URL=     # URL del sitio
```

## Personalización

### Información del sitio

Editar `src/data/site.ts` para actualizar:
- Nombre y descripción
- Número de WhatsApp
- Email de contacto
- Servicios ofrecidos
- Proyectos del portafolio
- Redes sociales

### Estilos

Los colores principales se definen en `src/app/globals.css`:
- `--primary`: Azul/violeta principal
- `--secondary`: Violeta secundario
- `--accent`: Cyan de acento

## Despliegue en Vercel

1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Deploy automático con cada push

## Comandos

```bash
npm run dev      # Desarrollo
npm run build    # Compilar para producción
npm run start    # Servidor de producción
npm run lint     # Verificar código
```

## Licencia

Todos los derechos reservados - NextCode
