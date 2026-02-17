"use client";

import { BentoCard } from "./BentoCard";
import { Linkedin, Github, Mail, FileText } from "lucide-react";

export const Socials = () => {
    const socials = [
        { icon: Linkedin, href: "https://linkedin.com/in/AkramKibout", label: "LinkedIn", color: "bg-[#0077b5]" },
        { icon: Github, href: "https://github.com/Akrapovitch05", label: "GitHub", color: "bg-[#333]" },
        { icon: Mail, href: "mailto:akramkibout@gmail.com", label: "Email", color: "bg-red-500" },
        // CV Button handled separately for specific styling, or added here
    ];

    return (
        <BentoCard colSpan={2} className="grid grid-cols-4 gap-4 place-items-center">
            {socials.map((social, index) => (
                <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full h-full flex items-center justify-center rounded-2xl ${social.color} text-white hover:opacity-90 transition-opacity hover:scale-105 shadow-lg group`}
                >
                    <social.icon size={24} className="group-hover:scale-110 transition-transform" />
                </a>
            ))}
            <a
                href="/cv.pdf"
                download="CV_Akram_Kibout.pdf"
                className="w-full h-full flex flex-col items-center justify-center rounded-2xl bg-indigo-600 text-white hover:opacity-90 transition-opacity hover:scale-105 shadow-lg group gap-1 cursor-pointer"
            >
                <FileText size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold">CV</span>
            </a>
        </BentoCard>
    );
};
