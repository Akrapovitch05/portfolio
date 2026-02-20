"use client";

import { BentoCard } from "./BentoCard";
import {
    Code2, Database, Globe, Server, Layers, Terminal, Cpu, Braces, Box, X
} from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type TechItem = {
    icon: React.ElementType;
    label: string;
    desc: string;
    color: string;
    bg: string;
    details: {
        level: "Débutant" | "Intermédiaire" | "Avancé";
        levelPct: number;
        since: string;
        usedIn: string[];
        description: string;
        tags: string[];
    };
};

const categories: { title: string; items: TechItem[] }[] = [
    {
        title: "Frontend",
        items: [
            {
                icon: Globe,
                label: "React",
                desc: "Bibliothèque UI",
                color: "text-blue-400",
                bg: "bg-blue-400/10",
                details: {
                    level: "Avancé",
                    levelPct: 85,
                    since: "2023",
                    usedIn: ["Portfolio", "H TRANSPORT", "Projets CESI"],
                    description: "Bibliothèque JavaScript pour construire des interfaces utilisateur. J'utilise React avec hooks (useState, useEffect, useContext) et des patterns avancés comme les composants contrôlés et la gestion d'état.",
                    tags: ["Hooks", "JSX", "Context API", "SPA"],
                }
            },
            {
                icon: Layers,
                label: "Next.js",
                desc: "Framework React",
                color: "text-white",
                bg: "bg-white/10",
                details: {
                    level: "Avancé",
                    levelPct: 80,
                    since: "2024",
                    usedIn: ["Ce Portfolio", "Projets personnels"],
                    description: "Framework full-stack basé sur React. J'utilise le App Router, les Server Components, le rendu SSG/SSR, et les API Routes pour des applications performantes et SEO-friendly.",
                    tags: ["App Router", "SSR", "SSG", "API Routes"],
                }
            },
            {
                icon: Code2,
                label: "Tailwind",
                desc: "CSS Utility-First",
                color: "text-cyan-400",
                bg: "bg-cyan-400/10",
                details: {
                    level: "Avancé",
                    levelPct: 90,
                    since: "2023",
                    usedIn: ["Portfolio", "Interfaces web"],
                    description: "Framework CSS utility-first qui permet de styler rapidement sans quitter le HTML. Mon outil de prédilection pour créer des interfaces modernes, responsives et cohérentes.",
                    tags: ["Responsive", "Dark Mode", "Animations", "Custom Theme"],
                }
            },
            {
                icon: Braces,
                label: "TypeScript",
                desc: "Typage statique JS",
                color: "text-blue-500",
                bg: "bg-blue-600/10",
                details: {
                    level: "Intermédiaire",
                    levelPct: 70,
                    since: "2024",
                    usedIn: ["Portfolio", "APIs typées"],
                    description: "Superset de JavaScript qui ajoute le typage statique. Permet de détecter les erreurs à la compilation, d'améliorer l'autocomplétion et de rendre le code plus maintenable.",
                    tags: ["Types", "Interfaces", "Generics", "TSConfig"],
                }
            },
        ]
    },
    {
        title: "Backend",
        items: [
            {
                icon: Server,
                label: "Symfony",
                desc: "Framework PHP",
                color: "text-white",
                bg: "bg-black/20",
                details: {
                    level: "Avancé",
                    levelPct: 85,
                    since: "2023",
                    usedIn: ["H TRANSPORT (ERP)", "Projets CESI"],
                    description: "Framework PHP robuste et modulaire. J'ai développé un ERP complet avec Symfony : gestion des chauffeurs, tournées, paie, documents, et tableau de bord. Utilisation d'EasyAdmin, Doctrine ORM, et des EventListeners.",
                    tags: ["Doctrine ORM", "EasyAdmin", "Twig", "API Platform"],
                }
            },
            {
                icon: Database,
                label: "MySQL",
                desc: "Base de données",
                color: "text-orange-400",
                bg: "bg-orange-400/10",
                details: {
                    level: "Avancé",
                    levelPct: 80,
                    since: "2023",
                    usedIn: ["H TRANSPORT", "Tous les projets backend"],
                    description: "SGBD relationnel. Conception de schémas normalisés, requêtes optimisées, jointures complexes et migrations. Utilisé avec Doctrine pour une abstraction élégante en PHP.",
                    tags: ["SQL", "Jointures", "Migrations", "Indexes"],
                }
            },
            {
                icon: Box,
                label: "Node.js",
                desc: "Runtime JavaScript",
                color: "text-green-500",
                bg: "bg-green-500/10",
                details: {
                    level: "Intermédiaire",
                    levelPct: 60,
                    since: "2024",
                    usedIn: ["APIs REST", "Scripts automatisation"],
                    description: "Environnement d'exécution JavaScript côté serveur. Utilisé pour créer des APIs légères et des scripts d'automatisation. Souvent combiné avec Express.js.",
                    tags: ["Express", "REST API", "npm", "Async/Await"],
                }
            },
        ]
    },
    {
        title: "DevOps & Outils",
        items: [
            {
                icon: Terminal,
                label: "Docker",
                desc: "Conteneurisation",
                color: "text-blue-500",
                bg: "bg-blue-500/10",
                details: {
                    level: "Intermédiaire",
                    levelPct: 65,
                    since: "2024",
                    usedIn: ["Environnements de dev", "Déploiements"],
                    description: "Plateforme de conteneurisation permettant d'isoler les applications dans des conteneurs portables. Utilisé pour standardiser les environnements de développement et simplifier les déploiements.",
                    tags: ["Dockerfile", "docker-compose", "Images", "Volumes"],
                }
            },
            {
                icon: Globe,
                label: "Git",
                desc: "Versionning",
                color: "text-red-500",
                bg: "bg-red-500/10",
                details: {
                    level: "Avancé",
                    levelPct: 85,
                    since: "2022",
                    usedIn: ["Tous les projets", "GitHub", "CI/CD"],
                    description: "Système de contrôle de version distribué. Gestion des branches (GitFlow), pull requests, résolution de conflits et intégration avec GitHub Actions pour le CI/CD.",
                    tags: ["GitFlow", "Branches", "GitHub Actions", "CI/CD"],
                }
            },
        ]
    }
];

const levelColors: Record<TechItem["details"]["level"], string> = {
    "Débutant": "bg-red-500",
    "Intermédiaire": "bg-yellow-500",
    "Avancé": "bg-green-500",
};

export const Stack = () => {
    const [selected, setSelected] = useState<TechItem | null>(null);

    return (
        <>
            <BentoCard colSpan={1} rowSpan={2} className="relative overflow-hidden group">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Layers className="w-48 h-48 text-zinc-500 -rotate-12 translate-x-10 -translate-y-10" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex flex-col gap-6 h-full z-10 relative">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Stack Technique</h3>
                        <p className="text-zinc-400 text-sm">Cliquez sur une techno pour les détails.</p>
                    </div>

                    <div className="space-y-6 overflow-y-auto pr-2 scrollbar-hide">
                        {categories.map((category, idx) => (
                            <div key={idx}>
                                <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-indigo-400" />
                                    {category.title}
                                </h4>
                                <div className="grid grid-cols-1 gap-2">
                                    {category.items.map((tech, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSelected(tech)}
                                            className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors group/item text-left w-full cursor-pointer"
                                        >
                                            <div className={`w-10 h-10 rounded-lg ${tech.bg} flex items-center justify-center shrink-0`}>
                                                <tech.icon size={20} className={`${tech.color}`} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-sm font-semibold text-zinc-200 group-hover/item:text-white transition-colors">
                                                    {tech.label}
                                                </div>
                                                <div className="text-xs text-zinc-500 group-hover/item:text-zinc-400 transition-colors">
                                                    {tech.desc}
                                                </div>
                                            </div>
                                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${levelColors[tech.details.level]}/20 ${tech.details.level === "Avancé" ? "text-green-400" : tech.details.level === "Intermédiaire" ? "text-yellow-400" : "text-red-400"}`}>
                                                {tech.details.level}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </BentoCard>

            {/* Tech Detail Modal */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelected(null)}
                    >
                        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

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
                                onClick={() => setSelected(null)}
                                className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>

                            {/* Header */}
                            <div className="flex items-center gap-4 mb-5">
                                <div className={`w-14 h-14 rounded-xl ${selected.bg} flex items-center justify-center shrink-0`}>
                                    <selected.icon size={28} className={selected.color} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-xl leading-tight">{selected.label}</h3>
                                    <p className="text-zinc-500 text-sm">{selected.desc} · depuis {selected.details.since}</p>
                                </div>
                            </div>

                            {/* Level bar */}
                            <div className="mb-5">
                                <div className="flex items-center justify-between mb-1.5">
                                    <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Niveau</span>
                                    <span className={`text-xs font-bold ${selected.details.level === "Avancé" ? "text-green-400" : selected.details.level === "Intermédiaire" ? "text-yellow-400" : "text-red-400"}`}>
                                        {selected.details.level} — {selected.details.levelPct}%
                                    </span>
                                </div>
                                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        className={`h-full rounded-full ${levelColors[selected.details.level]}`}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${selected.details.levelPct}%` }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                                {selected.details.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-5">
                                {selected.details.tags.map((tag) => (
                                    <span key={tag} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-zinc-400 font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Used in */}
                            <div className="pt-4 border-t border-white/5">
                                <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-2">Utilisé dans</p>
                                <div className="flex flex-wrap gap-2">
                                    {selected.details.usedIn.map((project) => (
                                        <span key={project} className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${selected.bg} ${selected.color}`}>
                                            {project}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
