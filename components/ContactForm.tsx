"use client";

import { BentoCard } from "./BentoCard";
import { Mail, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export const ContactForm = () => {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xnjbvkle", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <BentoCard colSpan={2} className="relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                        <Mail size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Me Contacter</h3>
                </div>

                {status === "success" ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-green-500/10 rounded-2xl border border-green-500/20">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 text-white shadow-lg shadow-green-500/20">
                            <CheckCircle size={32} />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">Message Envoyé !</h4>
                        <p className="text-zinc-400">Merci de m'avoir contacté. Je vous répondrai dans les plus brefs délais.</p>
                        <button
                            onClick={() => setStatus("idle")}
                            className="mt-6 px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors text-sm font-medium"
                        >
                            Envoyer un autre message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex-1 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label htmlFor="name" className="text-xs font-medium text-zinc-500 uppercase tracking-wider ml-1">Nom</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    placeholder="Votre Nom"
                                    className="w-full px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 text-white placeholder-zinc-600 transition-all"
                                />
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="email" className="text-xs font-medium text-zinc-500 uppercase tracking-wider ml-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    placeholder="votre@email.com"
                                    className="w-full px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 text-white placeholder-zinc-600 transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="message" className="text-xs font-medium text-zinc-500 uppercase tracking-wider ml-1">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                required
                                rows={4}
                                placeholder="Bonjour, je suis intéressé par votre profil..."
                                className="w-full px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 text-white placeholder-zinc-600 transition-all resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "submitting"}
                            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 group"
                        >
                            {status === "submitting" ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    <span>Envoyer le message</span>
                                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                        {status === "error" && (
                            <p className="text-red-400 text-xs text-center">Une erreur est survenue. Veuillez réessayer.</p>
                        )}
                    </form>
                )}
            </div>
        </BentoCard>
    );
};
