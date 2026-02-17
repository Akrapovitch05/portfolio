import { BentoGrid } from "@/components/BentoGrid";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Stack } from "@/components/Stack";
import { Vlogs } from "@/components/Vlogs";
import { Experience } from "@/components/Experience";
import { Socials } from "@/components/Socials";
import { ContactForm } from "@/components/ContactForm";

import { Timeline } from "@/components/Timeline";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-7xl animate-fade-in space-y-8">
        <BentoGrid>
          {/* Row 1: Hero (2x1) + Stack (1x2 starts) */}
          <Hero />
          <Stack />

          {/* Row 2: Project (2x1) + Stack (ends) */}
          <ProjectCard />

          {/* Row 3: Timeline (3x1) */}
          <Timeline />

          {/* Row 4: Contact (2x1) + Vlogs (1x1) */}
          <ContactForm />
          <Vlogs />

          {/* Row 5: Socials (2x1) + Experience (1x1) */}
          <Socials />
          <Experience />
        </BentoGrid>

        <footer className="text-center text-zinc-600 text-sm py-8">
          <p>© {new Date().getFullYear()} Akram Kibout. Construit avec Next.js & Tailwind.</p>
        </footer>
      </div>
    </main>
  );
}
