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
        <p className="mt-4">So, oder ähnlich. Ich denke, die beste Möglichkeit etwas zu beweisen ist einfach zu zeigen was man kann.</p>
      </>
    },
    {
      title: "Was sind deine Spezialgebiete?",
      content: <>
        <p>Dies hier ist mein Spezialgebiet. Frontend. Dazu gehören <span className="font-semibold">Planung, technischer Aufbau, Testing, Wartung</span>, aber noch vieles mehr. Siehe Slideshow oben.</p>
        <p className="mt-4">Ich habe auch ein breites Know-How im Bereich Quality Assurance und war eine Zeit lang als
          QA-Manager aktiv.</p> 
        <p className="mt-4">Datenbanktechnik und Arbeiten am Backend sind etwas, das trotz Schwerpunkt auf das Frontend immer wieder dazugehören. Einer Karriere als Fullstack-Entwickler bin ich nicht abgeneigt.</p>
        <p className="mt-4">Was ich aber noch highlighten möchte ist das Thema <span className="font-semibold">Psychologie</span>. Ich bekomme oft gesagt, dass ich ein umfassendes Wissen über das menschliche
        Verhalten und Denkprozesse hätte. Und das bestätigt sich auch.</p>
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
        <p>Das kann natürlich nur die Zeit selbst zeigen. Im Großen und Ganzen fühle ich mich in dieser Sparte aber sehr gut aufgehoben. Ich werde mich hier auf jeden Fall noch vertiefen, und
          definitiv noch in den Bereichen Design, Full Stack, und KI weiter eintauchen, sowie moderne Webstandards an sich.
        </p>
      </>
    },
    { 
      title: "Wie stehst du KI gegenüber?",
      content: <>
        <p>Im Großen und Ganzen sehr positiv. Aber sie sollte ein Werkzeug sein, das unterstützt und assistiert, nicht generiert.
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
      title: "Entwicklung",
      iconName: "Monitor",
      text: `Frontend Entwicklung ist ein sich sehr rasch entwickelndes und immer wieder stark veränderndes Thema. Ich stelle sicher, dass ich mit den Trends gehe, oder ihnen möglichst noch einen
      Schritt voraus bin. Aber dabei behalte ich auch immer die Traditionen im Auge. Ich bin zusammen mit dem Internet großgeworden. Ich kenne seine Entwicklung wie meine Hosentasche. Und das kommt mir
      immer wieder zugute.`,
      tags: ["Web-Frameworks", "Softwarearchitektur", "Best Practices", "KI richtig nutzen"],
    },
    {
      title: "Testing",
      iconName: "FlaskConical",
      text: `Testing ist weit mehr als nur sicherzustellen, dass der Code läuft. Sicherheit, Geschwindigkeit, prüfen des Designs sowie der stetige Kontrolle aller gegebenen Anforderungen
      in beliebiger Version gehören dazu.`,
      tags: ["Sauberer Code", "Sicherheit", "Performance", "Accessibility"],
    },
    {
      title: "Planung",
      iconName: "Gauge",
      text: `Von der ersten Idee, bis zur Wartung und später potentiellen Überarbeitung. Ich baue Frontends so, dass sie robust sind und den aktuellen Anforderungen entsprechen, aber
      auch so dynamisch, dass sie sich jederzeit leicht wieder überarbeiten lassen.`,
      tags: ["End-to-End-Organisation", "Aufwandskalkulation"],
    },
    {
      title: "Psychologie & Design",
      iconName: "Brain",
      text: `Ich erkunde gerne die menschliche Natur und verstehe gut, was ein Nutzer erwartet. Ich weiß auch, wie unterschiedlich und manchmal auch ungeduldig Nutzer sein können. Das sehe
      ich als eine Herausforderung, die ich immer wieder gerne annehme.`,
      tags: ["UX", "Cognitive Load", "Erwartungshaltungen", "Impressionen"],
    }
  ];

  return (
    <PageSkeleton>

      <Headline title={"Über mich"}  />

      <SectionBlock title={"Meine Reise"} children={<>Man kann durchaus sagen, dass ich schon so einige Abenteuer erlebt habe. Hier erhalten Sie eine Übersicht über meine verschiedenen Stationen
        in meiner Karriere. Details können Sie dem Lebenslauf entnehmen.</>} className="mt-16 "/>
      <Timeline items={journey} />

      <SectionBlock title={"Schwerpunkte"} children={<>Ein Frontend aufzuziehen erscheint leicht in Zeiten von KI? Mag sein, aber für den Erfolg braucht es Expertise.</>} className="mt-6" />
      <FocalSlideshow items={focal} />


      <SectionBlock title={"FAQ"} children={<>Häufig gestellte Fragen beantworte ich hier direkt.</>} />
      <Accordion items={faq} />

    </PageSkeleton>
  );
}