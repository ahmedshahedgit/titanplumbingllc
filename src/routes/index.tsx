import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { EmergencyBar } from "@/components/site/EmergencyBar";
import { ProblemSelector } from "@/components/site/ProblemSelector";
import { ServicesSlider } from "@/components/site/ServicesSlider";
import { TrustSection } from "@/components/site/TrustSection";
import { Projects } from "@/components/site/Projects";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { ReelCards } from "@/components/site/ReelCards";
import { TestimonialsColumns } from "@/components/site/TestimonialsColumns";
import { FinalCTA } from "@/components/site/FinalCTA";

const title = "Titan Plumbing, LLC — Plumber in El Paso, IL";
const description = "Reliable, affordable plumbing for El Paso, IL and surrounding communities. Licensed, insured, bonded. Call or text 309-260-0945.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <EmergencyBar />
      <ProblemSelector />
      <ServicesSlider />
      <TrustSection />
      <Projects />
      <BeforeAfter />
      <ReelCards />
      <TestimonialsColumns />
      <FinalCTA />
    </main>
  );
}
