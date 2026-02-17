"use client";

import { BentoCard } from "./BentoCard";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { ProjectDetails } from "./ProjectDetails";
import { AnimatePresence } from "framer-motion";

export const ProjectCard = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <BentoCard colSpan={2} className="relative overflow-hidden cursor-pointer" onClick={() => setIsOpen(true)}>
                <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-6 h-6 text-white" />
                </div>

                <div className="flex flex-col h-full z-10">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium">
                                Flagship Project
                            </div>
                            <h2 className="text-2xl font-bold text-white">ERP de Logistique - H Transport</h2>
                            <p className="text-zinc-400 mt-1">Digitalisation Globale & Gestion de Flotte</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-zinc-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                ERP/CRM développé from scratch
                            </div>
                            <div className="flex items-center gap-2 text-sm text-zinc-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                Signature électronique & Paie complexe
                            </div>
                            <div className="flex items-center gap-2 text-sm text-zinc-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                Optimisation : -30% de temps administratif
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 content-start">
                            <span className="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-300 border border-zinc-700">Symfony 6.4</span>
                            <span className="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-300 border border-zinc-700">EasyAdmin 4</span>
                            <span className="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-300 border border-zinc-700">Docker</span>
                            <span className="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-300 border border-zinc-700">SQL</span>
                        </div>
                    </div>

                    <button
                        onClick={(e) => { e.stopPropagation(); setIsOpen(true); }}
                        className="mt-auto self-start px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
                    >
                        Lire l'étude de cas
                    </button>
                </div>

                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </BentoCard>

            <AnimatePresence>
                {isOpen && (
                    <ProjectDetails isOpen={isOpen} onClose={() => setIsOpen(false)} />
                )}
            </AnimatePresence>
        </>
    );
};

