interface TimelineEntry {
    title: string;
    description: string;
    tags?: string[];
}

interface TimelineProps {
    items: TimelineEntry[];
}



export default function Timeline({ items }: TimelineProps) {
    return (
        <div className="w-full flex flex-col">
            {items.map((item, i) => (
                <div key={i} className="flex gap-8 group">
                    {/* Line + dot */}
                    <div className="flex flex-col items-center">
                        <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-600 mt-1 shrink-0" />
                        {i < items.length - 1 && (
                            <div className="w-px flex-1 bg-zinc-200 dark:bg-zinc-800 my-1" />
                        )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-2 pb-10">
                        <h3 className="font-medium text-black dark:text-white">
                            {item.title}
                        </h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-6">
                            {item.description}
                        </p>
                        {item.tags && item.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-1">
                                {item.tags.map((tag) => (
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
                </div>
            ))}
        </div>
    );
}