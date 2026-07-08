"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { Monitor, FlaskConical, Brain, Gauge, LucideIcon, ChevronLeft, ChevronRight } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
    Monitor,
    FlaskConical,
    Brain,
    Gauge,
};

interface FocalItem {
    title: string;
    iconName: string;
    text?: React.ReactNode;
    tags?: string[];
}

interface FocalSlideshowProps {
    items: FocalItem[];
}

export default function FocalSlideshow({ items }: FocalSlideshowProps) {
    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState<"left" | "right">("right");
    const [animating, setAnimating] = useState(false);
    const touchStartX = useRef<number | null>(null);

    const goTo = useCallback((index: number, dir: "left" | "right") => {
        if (animating) return;
        setDirection(dir);
        setAnimating(true);
        setTimeout(() => {
            setActive(index);
            setAnimating(false);
        }, 200);
    }, [animating]);

    const prev = useCallback(() => goTo((active - 1 + items.length) % items.length, "left"), [active, goTo, items.length]);
    const next = useCallback(() => goTo((active + 1) % items.length, "right"), [active, goTo, items.length]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [prev, next]);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            diff > 0 ? next() : prev();
        }
        touchStartX.current = null;
    };

    const activeItem = items[active];
    const Icon = iconMap[activeItem.iconName];

    return (
        <div className="flex items-center gap-4 w-full lg:w-1/2 mx-auto">

            {/* Left arrow — hidden on mobile */}
            <button
                onClick={prev}
                className="hidden sm:flex shrink-0 w-12 h-12 items-center justify-center rounded-full border border-black/[.08] dark:border-white/[.08] text-zinc-400 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition-colors cursor-pointer"
            >
                <ChevronLeft size={24} />
            </button>

            {/* Card — swipeable on mobile */}
            <div
                className="flex-1 flex flex-col gap-6 p-8 rounded-2xl border border-black/[.08] dark:border-white/[.08]"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                style={{
                    opacity: animating ? 0 : 1,
                    transform: animating
                        ? `translateX(${direction === "right" ? "-20px" : "20px"})`
                        : "translateX(0)",
                    transition: "opacity 200ms ease, transform 200ms ease",
                }}
            >
                <div className="flex items-center gap-3">
                    {Icon && <Icon size={72} className="text-zinc-300 dark:text-zinc-600" />}
                    
                </div>
                {activeItem.text && (
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-7">
                        {activeItem.text}
                    </p>
                )}
                {activeItem.tags && activeItem.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {activeItem.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs px-2 py-1 rounded-full border border-black/[.08] dark:border-white/[.08] text-zinc-500 dark:text-zinc-400"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
                <div className="flex gap-2 mt-auto">
                    {items.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i, i > active ? "right" : "left")}
                            className={`w-1.5 h-1.5 rounded-full transition-colors cursor-pointer ${active === i ? "bg-black dark:bg-white" : "bg-zinc-300 dark:bg-zinc-600"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Right arrow — hidden on mobile */}
            <button
                onClick={next}
                className="hidden sm:flex shrink-0 w-12 h-12 items-center justify-center rounded-full border border-black/[.08] dark:border-white/[.08] text-zinc-400 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition-colors cursor-pointer"
            >
                <ChevronRight size={24} />
            </button>

        </div>
    );
}