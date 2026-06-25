import Accordion from "@/app/components/Accordion";
import PageSkeleton from "@/app/components/PageSkeleton";

export default function About() {

  const faq = [
    { title: "Was mach ich?", content: "Ich bau Sachen im Web." },
    { title: "Womit?", content: "Next.js, TypeScript, Tailwind." },
    { title: "Warum?", content: "Weil's Spaß macht." },
    { title: "Für wen?", content: "Für alle möglichen Leute." },
    { title: "Kontakt?", content: "Schreib mir einfach." },
  ];

  return (
    <PageSkeleton>

      <Accordion items={faq} />

    </PageSkeleton>
  );
}