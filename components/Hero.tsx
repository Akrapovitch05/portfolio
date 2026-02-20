"use client";

import { BentoCard } from "./BentoCard";
import Image from "next/image";
import { MapPin, X, GraduationCap, Code2, Database, Globe, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { ImageModal } from "./ImageModal";
import { AnimatePresence, motion } from "framer-motion";

export const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCdaOpen, setIsCdaOpen] = useState(false);

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
                        <p
                            className="text-indigo-400 font-medium text-sm cursor-pointer hover:text-indigo-300 hover:underline underline-offset-2 decoration-dotted transition-colors"
                            onClick={() => setIsCdaOpen(true)}
                            title="En savoir plus"
                        >
                            Concepteur Développeur ✦
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

            {/* CDA Info Modal */}
            <AnimatePresence>
                {isCdaOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCdaOpen(false)}
                    >
                        {/* Backdrop */}
                        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

                        {/* Modal */}
                        <motion.div
                            className="relative bg-[#111] border border-white/10 rounded-2xl p-6 max-w-md w-full shadow-2xl z-10"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close */}
                            <button
                                onClick={() => setIsCdaOpen(false)}
                                className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>

                            {/* Header */}
                            <div className="flex items-center gap-3 mb-5">
                                <div className="p-2.5 bg-indigo-500/20 rounded-xl">
                                    <GraduationCap size={22} className="text-indigo-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-base leading-tight">Concepteur Développeur d&apos;Applications</h3>
                                    <p className="text-indigo-400 text-xs font-medium">Titre RNCP Niveau 6 · Bac+3</p>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                                Le <span className="text-white font-semibold">CDA</span> est un titre professionnel de niveau Bac+3 reconnu par l&apos;État (RNCP n°31678). Il forme des développeurs capables de concevoir, développer et déployer des applications logicielles complètes, du frontend au backend.
                            </p>

                            {/* Key skills */}
                            <div className="space-y-2.5 mb-5">
                                <p className="text-zinc-500 text-xs uppercase tracking-wider font-semibold">Compétences clés</p>
                                {[
                                    { icon: Code2, label: "Développement Frontend & Backend", color: "text-blue-400" },
                                    { icon: Database, label: "Conception & gestion de bases de données", color: "text-green-400" },
                                    { icon: Globe, label: "Architecture logicielle & API REST", color: "text-purple-400" },
                                    { icon: CheckCircle2, label: "Méthodes Agile / Gestion de projet", color: "text-indigo-400" },
                                ].map(({ icon: Icon, label, color }) => (
                                    <div key={label} className="flex items-center gap-2.5">
                                        <Icon size={15} className={color} />
                                        <span className="text-zinc-300 text-sm">{label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Footer info */}
                            <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs text-zinc-500">
                                <span>📍 CESI École d&apos;Ingénieurs — Lyon</span>
                                <span className="text-indigo-400 font-semibold">2023 → 2026</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
