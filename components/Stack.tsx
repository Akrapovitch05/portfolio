"use client";

import { BentoCard } from "./BentoCard";
import {
    Code2, Database, Globe, Server, Layers, Terminal, Cpu, Braces, Box
} from "lucide-react";

export const Stack = () => {
    const categories = [
        {
            title: "Frontend",
            items: [
                { icon: Globe, label: "React", desc: "Bibliothèque UI", color: "text-blue-400", bg: "bg-blue-400/10" },
                { icon: Layers, label: "Next.js", desc: "Framework React", color: "text-white", bg: "bg-white/10" },
                { icon: Code2, label: "Tailwind", desc: "CSS Utility", color: "text-cyan-400", bg: "bg-cyan-400/10" },
                { icon: Braces, label: "TypeScript", desc: "Typage JS", color: "text-blue-600", bg: "bg-blue-600/10" },
            ]
        },
        {
            title: "Backend",
            items: [
                { icon: Server, label: "Symfony", desc: "Framework PHP", color: "text-white", bg: "bg-black/20" },
                { icon: Database, label: "MySQL", desc: "Base de données", color: "text-orange-400", bg: "bg-orange-400/10" },
                { icon: Box, label: "Node.js", desc: "Runtime JS", color: "text-green-500", bg: "bg-green-500/10" },
            ]
        },
        {
            title: "DevOps & Outils",
            items: [
                { icon: Terminal, label: "Docker", desc: "Conteneurisation", color: "text-blue-500", bg: "bg-blue-500/10" },
                { icon: Globe, label: "Git", desc: "Versionning", color: "text-red-500", bg: "bg-red-500/10" },
            ]
        }
    ];

    return (
        <BentoCard colSpan={1} rowSpan={2} className="relative overflow-hidden group">
            {/* Background Icon & Decoration */}
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Layers className="w-48 h-48 text-zinc-500 -rotate-12 translate-x-10 -translate-y-10" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex flex-col gap-6 h-full z-10 relative">
                <div>
                    <h3 className="text-xl font-bold text-white mb-1">Stack Technique</h3>
                    <p className="text-zinc-400 text-sm">Mon arsenal technologique.</p>
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
                                    <div key={i} className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors group/item">
                                        <div className={`w-10 h-10 rounded-lg ${tech.bg} flex items-center justify-center shrink-0`}>
                                            <tech.icon size={20} className={`${tech.color}`} />
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-zinc-200 group-hover/item:text-white transition-colors">
                                                {tech.label}
                                            </div>
                                            <div className="text-xs text-zinc-500 group-hover/item:text-zinc-400 transition-colors">
                                                {tech.desc}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </BentoCard>
    );
};
