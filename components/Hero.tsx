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
            <BentoCard colSpan={2} rowSpan={1} className="relative group">
                <div className="w-full flex justify-end mb-2 md:absolute md:top-4 md:right-4 md:mb-0 z-20 animate-pulse">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                        Recherche Alternance (3 ans)
                    </span>
                </div>

                <div className="flex flex-col md:flex-row gap-6 z-10 h-full items-center md:items-start">
                    {/* Left: Identity */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left shrink-0">
                        <div
                            className="w-20 h-20 rounded-full border-2 border-white/10 overflow-hidden relative group-hover:border-indigo-500/50 transition-colors cursor-pointer mb-3"
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
                        <h1 className="text-2xl font-bold tracking-tight text-white leading-tight">
                            Akram Kibout
                        </h1>
                        <p className="text-indigo-400 font-medium text-sm">
                            Concepteur Développeur
                        </p>
                        <div className="flex items-center gap-1 text-zinc-500 text-xs mt-1">
                            <MapPin size={12} />
                            <span>Lyon, France</span>
                        </div>
                    </div>

                    {/* Right: Bio & Skills */}
                    <div className="flex flex-col justify-center h-full pt-2">
                        <p className="text-zinc-300 text-sm leading-relaxed mb-4 line-clamp-3">
                            Passionné par l'architecture logicielle. J'aime transformer des besoins complexes en solutions <span className="text-white font-semibold">robustes</span> et <span className="text-white font-semibold">élégantes</span>.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Rigueur", "Travail d'équipe", "Curiosité", "Autonomie"].map((skill) => (
                                <span key={skill} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-zinc-400">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Background decoration */}
                <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-500" />
                <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[10%] right-[5%] w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse" />
                    <div className="absolute bottom-[20%] left-[10%] w-48 h-48 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-700" />

                    {/* Abstract Tech Lines */}
                    <div className="absolute top-10 right-10 w-24 h-24 border border-white/5 rounded-lg rotate-12" />
                    <div className="absolute top-14 right-14 w-16 h-16 border border-white/5 rounded-lg -rotate-6" />
                </div>
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
