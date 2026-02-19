"use client";

import { BentoCard } from "./BentoCard";
import { Briefcase, FileText, Calendar, GraduationCap } from "lucide-react";
import Image from "next/image";

export const RecruiterInfo = () => {
    return (
        <BentoCard colSpan={2} className="relative overflow-hidden group">
            <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg">
                    <Briefcase size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">Informations Entreprise</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {/* Information Details */}
                <div className="space-y-4">
                    <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                        <h3 className="text-emerald-400 font-semibold mb-2 flex items-center gap-2">
                            <GraduationCap size={18} />
                            Codes & Contrat
                        </h3>
                        <div className="space-y-2 text-sm text-zinc-300">
                            <div className="flex justify-between">
                                <span className="text-zinc-500">Code Diplôme:</span>
                                <span className="font-mono text-white">17032628</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-zinc-500">Code RNCP:</span>
                                <span className="font-mono text-white">40612</span>
                            </div>
                            <div className="flex justify-between border-t border-white/5 pt-2 mt-2">
                                <span className="text-zinc-500">Coût Formation:</span>
                                <span className="font-medium text-white">11 000€ / an</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-zinc-500">Volume Horaire:</span>
                                <span className="font-medium text-white">1799h (Total)</span>
                            </div>
                        </div>
                    </div>

                    <a
                        href="/programme_cesi.pdf"
                        target="_blank"
                        className="flex items-center gap-3 p-3 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/20 transition-all group/link"
                    >
                        <FileText size={20} />
                        <span className="font-medium">Télécharger le Programme</span>
                    </a>
                </div>

                {/* Calendar Preview */}
                <div className="relative group/calendar cursor-pointer overflow-hidden rounded-xl border border-white/10 min-h-[200px] md:min-h-0">
                    <a href="/calendrier_fisa.pdf" target="_blank" className="block w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 flex items-end p-4">
                            <div className="text-white">
                                <div className="flex items-center gap-2 mb-1 text-emerald-400">
                                    <Calendar size={16} />
                                    <span className="text-xs font-bold uppercase tracking-wider">Calendrier</span>
                                </div>
                                <p className="text-sm font-medium">Voir le planning d'alternance 2026-2029</p>
                            </div>
                        </div>
                        <Image
                            src="/calendrier_fisa.png"
                            alt="Calendrier d'alternance"
                            fill
                            className="object-cover transition-transform duration-500 group-hover/calendar:scale-110 opacity-60 group-hover/calendar:opacity-80"
                        />
                    </a>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -z-0 pointer-events-none" />
        </BentoCard>
    );
};
