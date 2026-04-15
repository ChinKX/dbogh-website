import { Hero, BentoGrid, Philosophy, CTA } from "./_ui";
import { Divider } from "@/platform/components/Divider";

export default function Home() {
  return (
    <main>
      <Hero />
      <Divider />
      <BentoGrid />
      <Philosophy />
      <CTA />
    </main>
  );
}
