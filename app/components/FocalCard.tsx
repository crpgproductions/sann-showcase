import { ReactNode } from "react";

interface FocalCardProps {
    icon: ReactNode;
    text?: ReactNode;
    tags?: string[];
}

export default function FocalCard({ icon, text, tags }: FocalCardProps) {
    return (
        <div className="flex flex-col gap-6 p-8 rounded-2xl border border-black/[.08] dark:border-white/[.08] w-full">
            <span className="text-zinc-300 dark:text-zinc-600" style={{ fontSize: 72, lineHeight: 1 }}>
                {icon}
            </span>
            {text && (
                <div className="text-sm text-zinc-500 dark:text-zinc-400 leading-7">
                    {text}
                </div>
            )}
            {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded-full border border-black/[.08] dark:border-white/[.08] text-zinc-500 dark:text-zinc-400"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}