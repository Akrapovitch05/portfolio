import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Akram Kibout | Concepteur Développeur Fullstack - Portfolio",
  description: "Portfolio d'Akram Kibout, étudiant en cycle ingénieur au CESI Lyon. Développeur Fullstack (Symfony/React) en recherche d'alternance pour 2026.",
  keywords: ["Akram Kibout", "Développeur Fullstack", "Symfony", "React", "Next.js", "Alternance", "Ingénieur", "CESI Lyon", "Portfolio"],
  authors: [{ name: "Akram Kibout" }],
  creator: "Akram Kibout",
  publisher: "Akram Kibout",
  robots: "index, follow",
  alternates: {
    canonical: "https://akramkibout.fr",
  },
  openGraph: {
    title: "Akram Kibout | Concepteur Développeur Fullstack",
    description: "Découvrez mes projets et mon parcours. Recherche d'alternance Ingénieur (3 ans) à partir de 2026.",
    url: "https://akramkibout.fr",
    siteName: "Akram Kibout Portfolio",
    locale: "fr_FR",
    type: "profile",
    images: [
      {
        url: "https://akramkibout.fr/me.jpg",
        width: 800,
        height: 800,
        alt: "Akram Kibout",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Akram Kibout",
  "jobTitle": "Concepteur Développeur",
  "url": "https://akramkibout.fr",
  "image": "https://akramkibout.fr/me.jpg",
  "sameAs": [
    "https://linkedin.com/in/AkramKibout",
    "https://github.com/Akrapovitch05"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "CESI Lyon"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lyon",
    "addressCountry": "FR"
  }
};

import { Spotlight } from "@/components/Spotlight";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-primary text-white selection:bg-indigo-500/30 overflow-x-hidden relative`}>
        <Spotlight />

        {/* Background Orbs */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
          <div className="absolute top-[40%] left-[40%] w-[20%] h-[20%] bg-blue-500/5 rounded-full blur-[100px] animate-pulse delay-2000" />
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {children}
      </body>
    </html>
  );
}
