import Accordion from "@/app/components/Accordion";
import PageSkeleton from "@/app/components/PageSkeleton";
import Timeline from "@/app/components/Timeline";
import Headline from "../components/Headline";
import SectionBlock from "../components/SectionBlock";
import FocalSlideshow from "@/app/components/FocalSlideshow";
import { Monitor, FlaskConical, Brain, Gauge } from "lucide-react";

const journey = [
  {
    title: "Schule",
    detail: <><p>A</p></>,
    icons: ["education"],
    rightIcon: "education",
  },
  {
    title: "Elektrotechnik",
    detail: <><p>B</p></>,
    icons: ["education"],
    rightIcon: "education",
  },
  {
    title: "Ausbildung zum Bürokaufmann",
    detail: <><p>C</p></>,
    icons: ["education", "work"],
    rightIcon: "education",
  },
  {
    title: "Büroassistenz",
    description: "im Familienbetrieb",
    detail: <><p>D</p></>,
    icons: ["work"],
    rightIcon: "work",
    tags: ["X"],
  },
  {
    title: "Studium",
    description: "Medieninformatik",
    detail: <><p>E</p></>,
    icons: ["education"],
    rightIcon: "education",
    tags: ["X"],
  },
  {
    title: "Frontend-Entwicklung",
    detail: <><p>F</p></>,
    icons: ["work"],
    rightIcon: "work",
    tags: ["X"],
  }
];

export default function About() {

  const faq = [
    {
      title: "Was ist deine Devise?",
      content: <>
        <p>&quot;Reden ist Silber, <span className="line-through">schweigen</span> zeigen ist Gold.&quot;</p>
        <p>So, oder ähnlich. Ich denke, die beste Möglichkeit etwas zu beweisen ist einfach zu zeigen was man kann.</p>
      </>
    },
    {
      title: "Was sind deine Spezialgebiete?",
      content: <>
        <p>Dies hier ist mein Spezialgebiet. Frontend. Dazu gehören <span className="font-semibold">Planung, technischer Aufbau, Testing, Wartung</span>.</p>
        <p className="mt-4">Quality Assurance. <span className="font-semibold">Unit Tests, Integration Tests, etc.</span></p>
        <p className="mt-4">Doch ein Datenbanktechnik, Backend, Design</p>
        <p className="mt-4">Psychologie</p>
        <p className="mt-4">Handicap = Vorteil (eigene Umstände)</p>
      </>
    },
    {
      title: "Welche Frameworks bevorzugst du?",
      content: <>
        <p>Ich liebe Vue mit Quasar, sowie React mit Next.js. Ich bin aber offen, jederzeit etwas Neues zu lernen - das ist für mich eine Selbstverständlichkeit.</p>
      </>
    },
    {
      title: "Wo siehst du dich in der Zukunft?",
      content: <>
        <p className="mt-4">Das kann natürlich nur die Zeit selbst zeigen. Im Großen und Ganzen fühle ich mich in dieser Sparte aber sehr gut aufgehoben. Ich werde mich hier auf jeden Fall noch vertiefen, und
          definitiv noch in den Bereichen Design, Full Stack, und KI weiter eintauchen, sowie moderne Webstandards an sich.
        </p>
      </>
    },
    { 
      title: "Wie stehst du KI gegenüber?",
      content: <>
        <p className="mt-4">Im Großen und Ganzen sehr positiv. Aber sie sollte ein Werkzeug sein, das unterstützt und assistiert, nicht generiert.
          Meine Arbeitsweise hat sich seit dem Aufkommen von KI sehr geändert. Ich bin deutlich effizienter geworden, sowohl was Planung, Programmierung und Überprüfung angeht, aber auch KI selbst.</p>
        <p className="mt-4">Der Job des Frontend-Entwicklers bleibt unerlässlich. Trotz KI braucht es immer noch eine Person, die versteht, wie das Web und die Technologien dahinter funktionieren - und natürlich
          auch, wie man KI selbst möglichst effizient einsetzt. Nur so lassen sich Projekte robust und vernünftig aufbaut. 
        </p>
      </>
    },
    {
      title: "Kaffee oder Tee?",
      content: <>
        <p>Beides. Aber bitte ohne Zucker.</p>
      </>
    },
  ];

  const focal = [
    {
      iconName: "Monitor",
      text: "Frontend Development ist meine Kernkompetenz.",
      tags: ["React", "Next.js", "Tailwind"],
    },
    {
      iconName: "FlaskConical",
      text: "Testing ist kein Afterthought.",
      tags: ["Vitest", "Playwright"],
    },
    {
      iconName: "Brain",
      text: "Psychologie fließt in jede UX-Entscheidung ein.",
      tags: ["UX", "Cognitive Load"],
    },
    {
      iconName: "Gauge",
      text: "Performance ist ein Feature.",
      tags: ["Core Web Vitals", "Lighthouse"],
    },
  ];

  return (
    <PageSkeleton>

      <Headline title={"Über mich"}  />

      <SectionBlock title={"Meine Reise"} children={<>AAAA</>} className="mt-16 "/>
      <Timeline items={journey} />

      <SectionBlock title={"Schwerpunkte"} children={<>BBBB</>} className="mt-6" />
      <FocalSlideshow items={focal} />


      <SectionBlock title={"FAQ"} children={<>Häufig gestellte Fragen beantworte ich hier direkt.</>} />
      <Accordion items={faq} />

    </PageSkeleton>
  );
}