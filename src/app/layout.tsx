import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nextcode.com"),
  title: {
    default: "NextCode | Desarrollo Web Profesional",
    template: "%s | NextCode",
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
    url: "https://nextcode.com",
    siteName: "NextCode",
    title: "NextCode | Desarrollo Web Profesional",
    description:
      "Creamos sitios y aplicaciones web que convierten ideas en experiencias digitales.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NextCode - Desarrollo Web Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextCode | Desarrollo Web Profesional",
    description:
      "Creamos sitios y aplicaciones web que convierten ideas en experiencias digitales.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-background text-foreground`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
