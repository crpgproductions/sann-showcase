"use client";

interface SectionBlockProps {
    title: string;
    children: React.ReactNode;
}

export default function SectionBlock({ title, children }: SectionBlockProps) {
    return (
        <section className="mb-12">
            <p className="text-sm uppercase tracking-widest text-zinc-800 dark:text-zinc-200 mb-8">
                {title}
            </p>

            <div className="my-6 w-full text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                {children}
            </div>
        </section>
    );
}