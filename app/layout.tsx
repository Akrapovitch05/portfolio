import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Akram Kibout | Future Ingénieur - Portfolio",
  description: "Portfolio de Akram Kibout, Étudiant en Cycle Ingénieur Informatique au CESI Lyon. Développeur Fullstack (Symfony/React).",
  keywords: ["Akram Kibout", "Portfolio", "Développeur Fullstack", "Symfony", "React", "Alternance", "Ingénieur", "CESI Lyon"],
  openGraph: {
    title: "Akram Kibout | Future Ingénieur - Portfolio",
    description: "Découvrez mon portfolio : Projets Fullstack, Soft Skills & Vlogs. Recherche d'alternance 2026.",
    url: "https://akramkibout.fr",
    siteName: "Akram Kibout Portfolio",
    locale: "fr_FR",
    type: "website",
  },
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

        {children}
      </body>
    </html>
  );
}
