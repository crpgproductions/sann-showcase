"use client";

interface HeadlineProps {
    title: string;
    className?: string;
}

export default function SectionBlock({ title, className }: HeadlineProps) {
    return (
        
        <h1 className={`max-w-xs text-3xl font-light leading-10 tracking-tight text-black dark:text-zinc-50 ${className}` }>
            {title}
      </h1>
    );
}