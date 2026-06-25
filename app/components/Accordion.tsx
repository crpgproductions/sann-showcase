"use client";
import { Root, Item, Trigger, Content } from "@radix-ui/react-accordion";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <Root type="single" collapsible className="w-full divide-y divide-black/[.08] dark:divide-white/[.1]">
      {items.map((item, i) => (
        <Item key={i} value={`item-${i}`}>
          <Trigger className="group flex w-full items-center justify-between py-4 text-left font-medium text-zinc-900 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors cursor-pointer">
            {item.title}
            <span className="transition-transform duration-300 group-data-[state=open]:rotate-180">
              ↓
            </span>
          </Trigger>
          <Content className="w-full overflow-hidden text-sm text-zinc-500 dark:text-zinc-400 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <div className="pb-4">{item.content}</div>
          </Content>
        </Item>
      ))}
    </Root>
  );
}