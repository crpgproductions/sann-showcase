"use client";
import Image from "next/image";
import { useEffect } from "react";

interface ImageModalProps {
    src: string;
    onClose: () => void;
}

export default function ImageModal({ src, onClose }: ImageModalProps) {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <div className="relative w-[95vw] max-w-[1400px] h-[90vh] rounded-2xl overflow-hidden">
                <Image
                    src={src}
                    alt="Preview"
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                />
            </div>
            <button
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors text-sm"
                onClick={onClose}
            >
                ✕ Schließen
            </button>
        </div>
    );
}