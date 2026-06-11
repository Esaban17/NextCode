import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { siteConfig } from "@/data/site";

const siteUrl = "https://www.nextcodegt.com";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NextCode | Desarrollo Web Profesional",
    template: "%s | NextCode",
  },
  alternates: {
    canonical: "/",
  },
  description:
    "Creamos sitios y aplicaciones web que convierten ideas en experiencias digitales. Desarrollo web profesional para empresas, bodas, XV años y emprendedores.",
  keywords: [
    "desarrollo web",
    "sitios web",
    "aplicaciones web",
    "landing pages",
    "bodas",
    "XV años",
    "diseño web",
    "Next.js",
    "React",
    "desarrollo profesional",
  ],
  authors: [{ name: "NextCode" }],
  creator: "NextCode",
  publisher: "NextCode",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName: "NextCode",
    title: "NextCode | Desarrollo Web Profesional",
    description:
      "Creamos sitios y aplicaciones web que convierten ideas en experiencias digitales.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextCode | Desarrollo Web Profesional",
    description:
      "Creamos sitios y aplicaciones web que convierten ideas en experiencias digitales.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteUrl,
  description: siteConfig.description,
  email: siteConfig.email,
  slogan: siteConfig.tagline,
  areaServed: {
    "@type": "Country",
    name: "Guatemala",
  },
  knowsAbout: [
    "Desarrollo web",
    "Landing pages",
    "Sitios web",
    "Aplicaciones web",
    "Next.js",
    "React",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-background text-foreground`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
