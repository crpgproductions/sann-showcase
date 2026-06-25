"use client";

interface SectionBlockProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export default function SectionBlock({ title, children, className }: SectionBlockProps) {
    return (
        <section className={`${className}`}>
            <p className="uppercase tracking-widest text-zinc-800 dark:text-zinc-200">
                {title}
            </p>

            <div className="my-6 w-full text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                {children}
            </div>
        </section>
    );
}