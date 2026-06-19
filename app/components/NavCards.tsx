"use client";
import Link from "next/link";

const cards = [
  {
    name: "Über mich",
    href: "/about",
    description: "Wer ich bin und was mich antreibt.",
  },
  {
    name: "Projekte",
    href: "/projects",
    description: "Was ich gebaut habe.",
  },
];

export default function NavCards() {
  return (
    <div className="flex flex-wrap gap-4">
      {cards.map((card) => (
        <Link
          key={card.name}
          href={card.href}
          className="group relative overflow-hidden rounded-2xl border border-black/[.08] dark:border-white/[.1] bg-white dark:bg-zinc-900 px-6 py-5 w-48 shadow-sm transition-shadow hover:shadow-md"
        >
          {/* Background scale effect */}
          <div className="absolute inset-0 bg-black/[.03] dark:bg-white/[.03] scale-95 rounded-2xl transition-transform duration-300 group-hover:scale-100" />

          <div className="relative">
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
              {card.name}
            </h2>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {card.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}