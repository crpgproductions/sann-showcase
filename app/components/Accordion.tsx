"use client";
import * as Accordion from "@radix-ui/react-accordion";

const items = [
  { title: "Was mach ich?", content: "Ich bau Sachen im Web." },
  { title: "Womit?", content: "Next.js, TypeScript, Tailwind." },
  { title: "Warum?", content: "Weil's Spaß macht." },
  { title: "Für wen?", content: "Für alle möglichen Leute." },
  { title: "Kontakt?", content: "Schreib mir einfach." },
];

export default function AnimatedAccordion() {
  return (
    <Accordion.Root type="single" collapsible className="w-full max-w-lg divide-y divide-black/[.08] dark:divide-white/[.1]">
      {items.map((item, i) => (
        <Accordion.Item key={i} value={`item-${i}`}>
          <Accordion.Trigger className="group flex w-full items-center justify-between py-4 text-left font-medium text-zinc-900 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
            {item.title}
            <span className="transition-transform duration-300 group-data-[state=open]:rotate-180">
              ↓
            </span>
          </Accordion.Trigger>
          <Accordion.Content className="overflow-hidden text-sm text-zinc-500 dark:text-zinc-400 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <div className="pb-4">{item.content}</div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}