"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
    altText: string;
}

export const ImageModal = ({ isOpen, onClose, imageSrc, altText }: ImageModalProps) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4" onClick={onClose}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center p-2"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50 backdrop-blur-sm"
                >
                    <X size={24} />
                </button>

                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                    <Image
                        src={imageSrc}
                        alt={altText}
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </motion.div>
        </div>
    );
};
