import { Navigation } from "@/shared/Navigation";
import { Footer } from "@/shared/Footer";
import { Hero, BentoGrid, Philosophy, CTA } from "./_ui";
import { Divider } from "@/platform/components/Divider";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Divider />
        <BentoGrid />
        <Philosophy />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
