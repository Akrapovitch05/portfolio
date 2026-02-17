"use client";

import { BentoCard } from "./BentoCard";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { ImageModal } from "./ImageModal";
import { AnimatePresence } from "framer-motion";

export const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <BentoCard colSpan={2} rowSpan={2} className="relative group">
                <div className="absolute top-4 right-4 animate-pulse">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                        Recherche Alternance - Cycle Ingénieur (3 ans)
                    </span>
                </div>

                <div className="mt-8 flex flex-col gap-6 z-10 h-full">
                    <div className="flex items-start justify-between">
                        <div
                            className="w-24 h-24 rounded-full border-2 border-white/10 overflow-hidden relative shrink-0 group-hover:border-indigo-500/50 transition-colors cursor-pointer"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <Image
                                src="/me.jpg"
                                alt="Akram Kibout"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                priority
                            />
                        </div>

                        <div className="flex flex-col items-end text-right">
                            <div className="flex items-center gap-2 text-zinc-500 text-sm mb-2">
                                <MapPin size={16} />
                                <span>Lyon 7, France</span>
                            </div>
                            <h1 className="text-3xl font-bold tracking-tight text-white mb-1">
                                Akram Kibout
                            </h1>
                            <p className="text-indigo-400 font-medium text-lg">
                                Concepteur Développeur
                            </p>
                            <p className="text-zinc-500 text-sm">
                                @ CESI Lyon
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4 max-w-lg">
                        <p className="text-zinc-300 leading-relaxed">
                            Passionné par l'architecture logicielle et le développement fullstack.
                            J'aime transformer des besoins complexes en solutions <span className="text-white font-semibold">robustes</span> et <span className="text-white font-semibold">élégantes</span>.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Rigueur", "Travail d'équipe", "Curiosité", "Autonomie"].map((skill) => (
                                <span key={skill} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Background decoration */}
                <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-500" />
            </BentoCard>

            <AnimatePresence>
                {isModalOpen && (
                    <ImageModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        imageSrc="/me.jpg"
                        altText="Akram Kibout"
                    />
                )}
            </AnimatePresence>
        </>
    );
};
