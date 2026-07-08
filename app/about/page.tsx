import Accordion from "@/app/components/Accordion";
import PageSkeleton from "@/app/components/PageSkeleton";
import Timeline from "@/app/components/Timeline";
import Headline from "../components/Headline";
import SectionBlock from "../components/SectionBlock";
import FocalSlideshow from "@/app/components/FocalSlideshow";

const journey = [
  {
    title: "Schule",
    detail: <><p>Der Schulunterricht machte mir Spaß und fiel mir leicht. Meine schulische Laufbahn würde ich dennoch nicht als einfach bezeichnen, denn es gab verschiedene
      Hürden und Herausforderungen, welche nichts mit dem Schulunterricht zu tun hatten, die die Sache ein wenig fordernd machten. Doch ich habe es gemeistert und einen
      erfolgreichen Abschluss vorzuweisen.</p></>,
    icons: ["education"],
    iconRight: "school",
  },
  {
    title: "Elektrotechnik",
    description: "Berufsschule",
    detail: <><p>Im Leben muss man experimentieren, und man weiß nicht immer sofort, was einem liegt, oder nicht. Eine Karriere als Elektrotechniker erschien mir damals interessant, doch
    schon nach einigen Monaten in der Berufsschule merkte ich, dass mir das Thema gar nicht liegt.</p>
      <p className="mt-4">Es ist völlig normal, dass man da auch mal scheitert. Wichtig ist, das aber zu erkennen
      und dann entsprechend schnell zu adaptieren. Entsprechend brach ich dann die Berufsschule zum ersten Halbjahr ab, und vollzog direkt einen Quereinstieg zum Bürokaufmann.</p></>,
    icons: ["education"],
    iconRight: "circuit",
  },
  {
    title: "Ausbildung zum Bürokaufmann",
    description: "Duales System",
    detail: <><p>Die Ausbildung zum Bürokaufmann gefiel mir sehr gut. Ich arbeitete im dualen System und schloss die Ausbildung erfolgreich ab. Direkt danach begang ich meine Vollzeitarbeit im Familienbetrieb.</p></>,
    icons: ["education", "work"],
    iconRight: "office",
  },
  {
    title: "Büroassistenz",
    description: "im Familienbetrieb",
    detail: <><p>Ich komme aus einer Maurermeisterfamilie, und wir hatten einen Betrieb, der schlüsselfertige Häuser baute. Viele denken, im Familienbetrieb zu arbeiten macht
      die Dinge einfach. Das kann ich nicht behaupten. Ich musste schnell Verantwortung übernehmen, und auch Aufgaben übernehmen, die über mein eigentliches Feld hinausgingen. Darunter auch Architektur und Marketing.</p>
      <p className="mt-4">Da gerade eben auch im Internet die Vermarktung zunehmend an Bedeutung gewann, sah ich hier eine gewisse Chance. Ich baute die Firmenwebseite, damals noch ganz klassisch mit HTML4. Spätestens da war
        mir klar, was mein Spezialgebiet ist.</p>
      <p className="mt-4">Ich arbeitete noch einige Jahre im Familienbetrieb, doch in der Mitte meiner 20er machte ich mir dann endlich einen kleinen Wunsch wahr: Informatik studieren.</p></>,
    icons: ["work"],
    iconRight: "business",
    tags: ["Schriftverkehr", "Verträge aufsetzen", "Telefondienst", "Firmenwebsite bauen"],
  },
  {
    title: "Studium",
    description: "Fachhochschule, Medieninformatik (B.Sc.)",
    detail: <><p>Ich studierte Medieninformatik an der THM Friedberg. Zuvor musste ich jedoch noch das Fachabitur nachholen, welches ich im einjährigen Schnelldurchlauf in der Form B vollzog.</p>
      <p className="mt-4">Das Leben an der Hochschule war für mich durchaus ein Sprung in eine andere Welt. Die Module waren sehr unterschiedlich, und auch komplex, genauso wie die ganze Hochschulkultur an sich.
        Doch ich hatte ein klares Ziel und auch einen klaren Weg vor Augen, und so meisterte ich auch das.</p>
      <p className="mt-4">Meine Bachelorarbeit befasste sich mit dem Thema Qualitätssicherung für moderne Webanwendungen. Daher mein Expertise im Bereich QA.</p></>,
    icons: ["education"],
    iconRight: "study",
  },
  {
    title: "Frontend-Entwicklung",
    description: "In zwei Unternehmen derselben Firmengruppe",
    detail: <><p>Es dauerte nicht lange, bis ich direkt nach meinem Studium dann auch eine Arbeitsstelle gefunden hatte. Als Junior-Frontendentwickler gab es immer noch eine gewisse Lernkurve, doch mein
      bis dahin schon recht umfassendes Wissen wurde sehr geschätzt. Schon ein paar Jahre später wurde ich dann Lead-Frontendentwickler im Schwesterunternehmen.</p></>,
    icons: ["work"],
    iconRight: "frontend",
    tags: ["Themes für Shopware-Shops erstellen/anpassen", "Erstellung eines Frontends für eine IPAAS"],
  }
];

export default function About() {

  const faq = [
    {
      title: "Was ist deine Devise?",
      content: <>
        <p>&quot;Reden ist Silber, <span className="line-through">schweigen</span> zeigen ist Gold.&quot;</p>
        <p className="mt-4">So oder ähnlich. Ich denke, die beste Möglichkeit, etwas zu beweisen, ist einfach zu zeigen, was man kann.</p>
      </>
    },
    {
      title: "Was sind deine Spezialgebiete?",
      content: <>
        <p>Dies hier ist mein Spezialgebiet. Frontend. Dazu gehören <span className="font-semibold">Planung, technischer Aufbau, Testing, Wartung</span>, aber noch vieles mehr. Siehe Slideshow oben.</p>
        <p className="mt-4">Ich habe auch ein breites Know-How im Bereich Quality Assurance und war eine Zeit lang als <span className="font-semibold">QA-Manager</span> aktiv.</p> 
        <p className="mt-4">Datenbanktechnik und Arbeiten am Backend sind etwas, das trotz Schwerpunkt auf das Frontend immer wieder dazugehören. Einer Karriere als Fullstack-Entwickler bin ich nicht abgeneigt.</p>
        <p className="mt-4">Was ich aber noch highlighten möchte ist das Thema <span className="font-semibold">Psychologie</span>. Ich bekomme oft gesagt, dass ich ein umfassendes Wissen über das menschliche
        Verhalten und Denkprozesse hätte. Und das bestätigt sich auch.</p>
        <p className="mt-4">Neu hinzugekommen ist natürlich auch alles, was mit <span className="font-semibold">KI</span> zu tun hat.</p>
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
      text: <><span className="font-semibold">Frontend Entwicklung</span> ist ein sich sehr rasch entwickelndes und immer wieder stark veränderndes Thema. Ich stelle sicher, dass ich mit den Trends gehe, oder ihnen möglichst noch einen
      Schritt voraus bin. Aber dabei behalte ich auch immer die Traditionen im Auge. Ich bin zusammen mit dem Internet großgeworden. Ich kenne seine Entwicklung wie meine Hosentasche. Und das kommt mir
        immer wieder zugute.</>,
      tags: ["Web-Frameworks", "Softwarearchitektur", "Best Practices", "KI richtig nutzen"],
    },
    {
      title: "Testing",
      iconName: "FlaskConical",
      text: <><span className="font-semibold">Testing</span> ist weit mehr als nur sicherzustellen, dass der Code läuft. Sicherheit, Geschwindigkeit, prüfen des Designs sowie der stetige Kontrolle aller gegebenen Anforderungen
      in beliebiger Version gehören dazu.</>,
      tags: ["Sauberer Code", "Sicherheit", "Performance", "Accessibility"],
    },
    {
      title: "Planung",
      iconName: "Gauge",
      text: <>Von der ersten Idee, bis zur Wartung und später potentiellen Überarbeitung. Ich baue Frontends so, dass sie robust sind und den aktuellen Anforderungen entsprechen, aber
      auch so dynamisch, dass sie sich jederzeit leicht wieder überarbeiten lassen.</>,
      tags: ["End-to-End-Organisation", "Aufwandskalkulation"],
    },
    {
      title: "Psychologie & Design",
      iconName: "Brain",
      text: <>Ich erkunde gerne die menschliche Natur und verstehe gut, was ein Nutzer erwartet. Ich weiß auch, wie unterschiedlich und manchmal auch ungeduldig Nutzer sein können. Das sehe
      ich als eine Herausforderung, die ich immer wieder gerne annehme.</>,
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


      <SectionBlock title={"FAQ"} children={<>Häufig gestellte Fragen beantworte ich hier direkt.</>} className="mt-16 " />
      <Accordion items={faq} />

    </PageSkeleton>
  );
}