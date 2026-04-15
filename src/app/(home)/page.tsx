import {
  Hero,
  BentoGrid,
  Philosophy,
  CTA,
  ExperiencePreview,
  ProjectsPreview,
  AboutPreview,
} from "./_ui";
import { Divider } from "@/platform/components/Divider";

export default function Home() {
  return (
    <main>
      <Hero />
      <Divider />
      <BentoGrid />
      <ExperiencePreview />
      <ProjectsPreview />
      <AboutPreview />
      <Philosophy />
      <CTA />
    </main>
  );
}
