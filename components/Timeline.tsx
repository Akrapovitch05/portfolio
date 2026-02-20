"use client";

import { BentoCard } from "./BentoCard";
import { GraduationCap, BookOpen, Rocket, School, Award, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Timeline = () => {
    const steps = [
        {
            year: "2020 - 2023",
            title: "Baccalauréat Général",
            school: "Cité Scolaire Internationale - Lyon",
            description: "Spécialités Scientifiques. Obtention du Baccalauréat avec mention.",
            icon: School,
            color: "bg-blue-500",
            textColor: "text-blue-400"
        },
        {
            year: "2023 - 2026",
            title: "Concepteur Développeur d'Applications (Bac+3)",
            school: "CESI Lyon",
            description: "Apprentissage par Projets (PBL) : Résolution de problèmes concrets en autonomie, simulant la réalité en entreprise. Développement d'une rigueur professionnelle et d'une capacité d'adaptation rapide.",
            logo: "/logo_cesi_banner.jpg", // Use new banner logo
            color: "bg-indigo-500",
            textColor: "text-indigo-400",
            current: true
        },
        {
            year: "2026 - 2029",
            title: "Manager en Architecture et Systèmes Logiciels (Bac+5)",
            school: "CESI Lyon - Programme Grande École",
            description: "Cycle Ingénieur en alternance. Objectif : Devenir un expert technique capable de piloter des projets d'envergure. Recherche d'une alternance de 3 ans pour construire une relation de confiance durable.",
            logo: "/logo_cesi_banner.jpg", // Use new banner logo
            color: "bg-purple-500",
            textColor: "text-purple-400",
            highlight: true
        },
        {
            year: "Futur",
            title: "CDI - Ingénieur Fullstack",
            school: "Votre Entreprise ?",
            description: "L'objectif final : Transformer l'alternance en CDI. Je ne cherche pas juste un contrat d'apprentissage, mais une entreprise où m'investir sur le long terme et évoluer ensemble.",
            icon: Rocket,
            color: "bg-green-500",
            textColor: "text-green-400"
        }
    ];

    return (
        <BentoCard colSpan={3} className="relative overflow-hidden">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-lg">
                    <Award size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">Mon Parcours & Ambitions</h2>
            </div>

            <div className="relative border-l-2 border-zinc-800 ml-3 md:ml-6 space-y-12 pb-4">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Timeline Dot */}
                        <div className={`absolute -left-[9px] top-0 w-5 h-5 rounded-full border-4 border-[#0a0a0a] ${step.color} ${step.current ? 'animate-pulse' : ''}`} />

                        <div className="flex flex-col md:flex-row gap-2 md:items-center mb-2">
                            <span className={`text-sm font-bold ${step.textColor} px-3 py-1 rounded-full bg-white/5 w-fit border border-white/5`}>
                                {step.year}
                            </span>
                            <h3 className="text-lg font-bold text-white">{step.title}</h3>
                        </div>

                        <div className="text-zinc-300 font-medium mb-2 flex items-center gap-2">
                            {/* Logic to show logo OR icon */}
                            {step.logo ? (
                                <div className="relative w-24 h-8 shrink-0 bg-white/90 rounded px-1">
                                    <Image
                                        src={step.logo}
                                        alt={step.school}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ) : (
                                step.icon && <step.icon size={16} className={step.textColor} />
                            )}
                            {/* Only show text if no logo, or maybe show text next to logo? Let's hide text if logo present for cleaner look, OR keep both. Let's keep both for clarity but make layout flexible */}
                            {!step.logo && <span>{step.school}</span>}
                        </div>

                        <p className="text-zinc-400 text-sm leading-relaxed max-w-3xl mt-2">
                            {step.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 p-32 bg-indigo-600/5 rounded-full blur-3xl -z-10" />
        </BentoCard>
    );
};
