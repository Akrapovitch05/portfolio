"use client";

import { BentoCard } from "./BentoCard";
import { Play } from "lucide-react";
import { useState } from "react";
import { VideoModal } from "./VideoModal";
import { AnimatePresence } from "framer-motion";

export const Vlogs = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <BentoCard
                className="relative group overflow-hidden cursor-pointer"
                onClick={() => setIsOpen(true)}
            >
                <div className="absolute inset-0 bg-red-600/10 group-hover:bg-red-600/20 transition-colors" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

                <div className="flex flex-col h-full justify-between z-10 relative">
                    <div className="flex justify-between items-start">
                        <div className="p-2 bg-red-600 rounded-lg text-white">
                            <Play size={20} fill="currentColor" />
                        </div>
                        <span className="px-2 py-1 rounded bg-black/50 text-xs text-white backdrop-blur-sm border border-white/10">
                            Chaîne YouTube
                        </span>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Soft Skills & Vlogs</h3>
                        <p className="text-zinc-400 text-sm">
                            Découvrez ma personnalité et mon quotidien en alternance.
                        </p>
                    </div>
                </div>

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg shadow-red-600/20">
                        <Play size={24} className="text-red-600 ml-1" fill="currentColor" />
                    </div>
                </div>
            </BentoCard>

            <AnimatePresence>
                {isOpen && (
                    <VideoModal
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                        videoId="lwWpW5IMO4s"
                    />
                )}
            </AnimatePresence>
        </>
    );
};
