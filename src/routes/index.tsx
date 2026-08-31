import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/scorely/nav";
import { Hero } from "@/components/scorely/hero";
import { StatementStrip } from "@/components/scorely/marquee";
import { Skills } from "@/components/scorely/skills";
import { AITutor } from "@/components/scorely/ai-tutor";
import { Papers } from "@/components/scorely/papers";
import { WhatStays } from "@/components/scorely/what-stays";
import { BandJourney } from "@/components/scorely/band-journey";
import { HowItWorks } from "@/components/scorely/how-it-works";
import { WhyScorely } from "@/components/scorely/why-scorely";
import { FreeAccess } from "@/components/scorely/free-access";
import { ForWho } from "@/components/scorely/for-who";
import { FAQ } from "@/components/scorely/faq";
import { FinalCta, Footer } from "@/components/scorely/final-cta";

const title = "Scorely — Free IELTS Practice with AI Feedback";
const description =
  "Practise IELTS Speaking, Writing, Reading and Listening with realistic tasks, AI feedback and progress tracking. Academic or General Training, always free.";

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
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <StatementStrip />
        <Skills />
        <AITutor />
        <Papers />
        <WhatStays />
        <BandJourney />
        <HowItWorks />
        <WhyScorely />
        <ForWho />
        <FreeAccess />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
