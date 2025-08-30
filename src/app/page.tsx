import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  SkillsSection,
  ContactSection
} from '@/sections';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}