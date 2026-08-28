import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/scorely/nav";
import { Hero } from "@/components/scorely/hero";
import { StatementStrip } from "@/components/scorely/marquee";
import { Skills } from "@/components/scorely/skills";
import { AITutor } from "@/components/scorely/ai-tutor";

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
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <StatementStrip />
        <Skills />
        <AITutor />
      </main>
    </div>
  );
}
