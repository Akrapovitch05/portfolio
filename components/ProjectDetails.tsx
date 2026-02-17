"use client";

import { motion } from "framer-motion";
import { X, CheckCircle2, Server, Database, Smartphone, FileText, Globe, ArrowRight } from "lucide-react";
import NextImage from "next/image";
import { useEffect } from "react";

interface ProjectDetailsProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ProjectDetails = ({ isOpen, onClose }: ProjectDetailsProps) => {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl custom-scrollbar"
            >
                {/* Header Image / Gradient Placeholder */}
                <div className="h-48 w-full bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-sm z-10"
                    >
                        <X size={20} />
                    </button>

                    <div className="absolute bottom-6 left-6 md:left-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-medium backdrop-blur-md">
                            Mission Alternance
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">H Transport ERP</h2>
                    </div>
                </div>

                <div className="p-6 md:p-10 space-y-10">

                    {/* Introduction & Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-4">
                            <p className="text-lg text-zinc-300 leading-relaxed">
                                Conception et développement "from scratch" d'une solution ERP/CRM sur-mesure pour une société de transport en pleine croissance.
                                L'objectif : centraliser la gestion RH, la flotte de véhicules et la facturation pour remplacer les fichiers Excel.
                            </p>

                            <a
                                href="https://htrans.fr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors group"
                            >
                                <Globe size={18} />
                                Visiter htrans.fr
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                            <h4 className="text-sm font-uppercase text-zinc-500 tracking-wider mb-4">IMPACT DIRECT</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={18} />
                                    <span className="text-sm text-zinc-300"><strong className="text-white">-30%</strong> de temps administratif</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={18} />
                                    <span className="text-sm text-zinc-300">Zéro erreur de calcul paie</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={18} />
                                    <span className="text-sm text-zinc-300">Données centralisées (GDPR)</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Technical Deep Dive */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Server className="text-indigo-500" />
                            Architecture & Défis Techniques
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-5 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-indigo-500/20 transition-colors">
                                <div className="flex items-center gap-3 mb-3">
                                    <FileText className="text-blue-400" size={24} />
                                    <h4 className="font-semibold text-white">Signature Électronique</h4>
                                </div>
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    Implémentation d'un workflow complet avec <strong>FPDI</strong> : superposition de signatures manuscrites (Canvas HTML5) sur PDF originaux, horodatage et scellement du document final.
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-indigo-500/20 transition-colors">
                                <div className="flex items-center gap-3 mb-3">
                                    <Database className="text-yellow-400" size={24} />
                                    <h4 className="font-semibold text-white">Moteur de Paie</h4>
                                </div>
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    Système complexe gérant des barèmes variables et primes conditionnelles (Panier repas). Utilisation de <strong>Vues SQL</strong> pour pré-calculer les agrégats et garantir la rapidité du Dashboard.
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-indigo-500/20 transition-colors">
                                <div className="flex items-center gap-3 mb-3">
                                    <Smartphone className="text-green-400" size={24} />
                                    <h4 className="font-semibold text-white">Mobile First UX</h4>
                                </div>
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    Interface pensée pour les chauffeurs sur le terrain. Adaptation des formulaires <strong>EasyAdmin</strong> pour une utilisation tactile fluide et upload de photos en direct.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Gallery Placeholders */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6">Aperçu de l'interface</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Admin Dashboard - Full Width */}
                            <div className="md:col-span-2 aspect-video rounded-xl bg-zinc-800/50 border border-white/5 overflow-hidden relative group">
                                <NextImage
                                    src="/tableaudebordadmin.png"
                                    alt="Tableau de Bord Administrateur"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-4 left-4 text-white font-medium text-sm">Tableau de Bord - Vue Globale</div>
                            </div>

                            {/* Mobile View 1 */}
                            <div className="aspect-video rounded-xl bg-zinc-800/50 border border-white/5 overflow-hidden relative group">
                                <NextImage
                                    src="/saisiedetourneechauffeur.png"
                                    alt="Interface Saisie Chauffeur"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-4 left-4 text-white font-medium text-sm">Interface Chauffeur - Saisie</div>
                            </div>

                            {/* Mobile View 2 */}
                            <div className="aspect-video rounded-xl bg-zinc-800/50 border border-white/5 overflow-hidden relative group">
                                <NextImage
                                    src="/cotechauffeurdetailtourne.png"
                                    alt="Détail Tournée Chauffeur"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-4 left-4 text-white font-medium text-sm">Détail Tournée & Livraison</div>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </div>
    );
};
