"use client";

import { useState } from "react";
import { GraduationCap, Building2 } from "lucide-react";

type IconType = React.ComponentType<{ className?: string }>;

const iconMap: Record<string, IconType> = {
    education: GraduationCap,
    work: Building2,
};

interface TimelineEntry {
    title: string;
    year?: string;
    description?: string;
    detail?: React.ReactNode;
    tags?: string[];
    icons?: string[];
    rightIcon?: string;
}

interface TimelineProps {
    items: TimelineEntry[];
}

export default function Timeline({ items }: TimelineProps) {
    const [active, setActive] = useState(0);
    const activeItem = items[active];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">

            {/* Left — timeline list */}
            <div className="flex flex-col">
                {items.map((item, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className="flex gap-6 group text-left cursor-pointer"
                    >
                        {/* Dot + line */}
                        <div className="flex flex-col items-center">
                            <div
                                className={`w-2 h-2 rounded-full mt-2 shrink-0 transition-colors ${active === i
                                        ? "bg-black dark:bg-white"
                                        : "bg-zinc-300 dark:bg-zinc-600"
                                    }`}
                            />
                            {i < items.length - 1 && (
                                <div className="w-px flex-1 bg-zinc-200 dark:bg-zinc-800 my-1" />
                            )}
                        </div>

                        {/* Text */}
                        <div
                            className={`flex flex-col gap-1 pb-10 transition-opacity ${active === i
                                    ? "opacity-100"
                                    : "opacity-70 group-hover:opacity-90"
                                }`}
                        >
                            <h3 className="flex items-center gap-2 font-medium text-black dark:text-white">
                                {item.icons?.map((key, idx) => {
                                    const Icon = iconMap[key];
                                    if (!Icon) return null;

                                    return (
                                        <span
                                            key={`${i}-icon-${key}-${idx}`}
                                            className="w-4 h-4 flex items-center justify-center"
                                        >
                                            <Icon />
                                        </span>
                                    );
                                })}

                                {item.title}
                            </h3>

                            <span className="text-xs text-zinc-500 dark:text-zinc-400">
                                {item.description}
                            </span>

                            {item.tags && item.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {item.tags.map((tag) => (
                                        <span
                                            key={`${i}-${tag}`}
                                            className="text-xs px-2 py-1 rounded-full border border-black/[.08] dark:border-white/[.08] text-zinc-500 dark:text-zinc-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </button>
                ))}
            </div>

            {/* Right — detail panel */}
            <div className="flex flex-col gap-6 pt-1">

                <div>
                    <h2 className="font-medium text-black dark:text-white text-xl">
                        {activeItem.title}
                    </h2>

                    <span className="text-sm text-zinc-400 dark:text-zinc-600">
                        {activeItem.year}
                    </span>
                </div>

                {activeItem.rightIcon && (
                    <div className="text-zinc-500 dark:text-zinc-400">
                        <span className="text-6xl leading-none">
                            {(() => {
                                const Icon = iconMap[activeItem.rightIcon];
                                return Icon ? <Icon /*size={96}*/ /> : null;
                            })()}
                        </span>
                    </div>
                )}

                <div className="text-sm text-zinc-500 dark:text-zinc-400 leading-7">
                    {activeItem.detail ?? activeItem.description}
                </div>

            </div>

        </div>
    );
}