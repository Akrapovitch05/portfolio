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
          {/* Row 1-2: Hero (2x2) + Stack (1x2) */}
          <Hero />
          <Stack />

          {/* Row 3: Flagship Project (2x1) + Vlogs (1x1) */}
          <ProjectCard />
          <Vlogs />

          {/* Row 4: Timeline (3x1) */}
          <Timeline />

          {/* Row 5-6: Contact (2x2) + Experience (1x1) + Socials (1x1) */}
          <ContactForm />

          <Experience />
          <Socials />
          {/* Wait, Experience and Socials are separate BentoCards. 
              If ContactForm is 2x2, we can just place Experience and Socials after it. 
              The grid auto-flow will handle it:
              - ContactForm takes (0,0)-(1,1) in the 2x2 subgrid of available space.
              - Experience takes (2,0).
              - Socials takes (2,1).
              So I should NOT wrap them in a div, just list them.
          */}
        </BentoGrid>

        <footer className="text-center text-zinc-600 text-sm py-8">
          <p>© {new Date().getFullYear()} Akram Kibout. Construit avec Next.js & Tailwind.</p>
        </footer>
      </div>
    </main>
  );
}
