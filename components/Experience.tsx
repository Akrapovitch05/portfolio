"use client";

import { BentoCard } from "./BentoCard";
import { Briefcase, Truck, Package } from "lucide-react";

export const Experience = () => {
    return (
        <BentoCard className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-indigo-400" />
                Expérience & Soft Skills
            </h3>

            <div className="space-y-4">
                <div className="group/item p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
                            <Truck size={18} />
                        </div>
                        <div>
                            <h4 className="font-medium text-white text-sm">Logistique & Transport</h4>
                            <div className="text-xs text-zinc-500">Cogepart & Kuehne + Nagel</div>
                        </div>
                    </div>
                    <p className="text-xs text-zinc-400 pl-1 border-l-2 border-zinc-700">
                        Gestion de pression, respect des délais critiques.
                    </p>
                </div>

                <div className="group/item p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-green-500/20 text-green-400 rounded-lg">
                            <Package size={18} />
                        </div>
                        <div>
                            <h4 className="font-medium text-white text-sm">Rigueur Opérationnelle</h4>
                            <div className="text-xs text-zinc-500">Agent de transport</div>
                        </div>
                    </div>
                    <p className="text-xs text-zinc-400 pl-1 border-l-2 border-zinc-700">
                        Respect strict des protocoles de sécurité.
                    </p>
                </div>
            </div>
        </BentoCard>
    );
};
