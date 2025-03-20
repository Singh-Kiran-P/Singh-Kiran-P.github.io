import { HeroSection } from "@/components/hero-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { AchievementsSection } from "@/components/achievements-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { CollaborateSection } from "@/components/collaborate-section"
import { ContactSection } from "@/components/contact-section"
import { ParticleBackground } from "@/components/particle-background"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="relative w-full">
        <ParticleBackground />
        <HeroSection />
      </div>
      <AboutSection />
      <ExpertiseSection />
      <AchievementsSection />
      <ProjectsSection />
      <CollaborateSection />
      <ContactSection />
    </main>
  )
}

