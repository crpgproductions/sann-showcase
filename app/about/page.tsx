import Accordion from "@/app/components/Accordion";
import PageSkeleton from "@/app/components/PageSkeleton";
import Timeline from "@/app/components/Timeline";

const experience = [
  {
    title: "College",
    description: "Ausbildung in Mediengestaltung oder was auch immer hier hingehört.",
    tags: ["HTML", "CSS", "PHP"],
  },
  {
    title: "Company One",
    description: "Was ich dort gemacht hab und was ich gelernt hab.",
    tags: ["React", "TypeScript", "Figma"],
  },
  {
    title: "Company Two",
    description: "Nächste Station, nächste Erfahrungen.",
    tags: ["Next.js", "Tailwind", "Node.js"],
  },
];

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