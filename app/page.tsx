import { BentoGrid } from "@/components/BentoGrid";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Stack } from "@/components/Stack";
import { Vlogs } from "@/components/Vlogs";
import { Experience } from "@/components/Experience";
import { Socials } from "@/components/Socials";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-7xl animate-fade-in space-y-8">
        <BentoGrid>
          {/* Bloc A: Identité */}
          <Hero />

          {/* Bloc B: Flagship Project */}
          <ProjectCard />

          {/* Bloc C: Stack Technique */}
          <Stack />

          {/* Bloc D: Vlogs */}
          <Vlogs />

          {/* Bloc E: Expérience */}
          <Experience />

          {/* Bloc F: Contact/Socials */}
          <Socials />

          {/* Bloc G: Contact Form */}
          <ContactForm />
        </BentoGrid>

        <footer className="text-center text-zinc-600 text-sm py-8">
          <p>© {new Date().getFullYear()} Akram Kibout. Construit avec Next.js & Tailwind.</p>
        </footer>
      </div>
    </main>
  );
}
