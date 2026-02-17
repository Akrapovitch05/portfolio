"use client";

import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface BentoCardProps {
    children: ReactNode;
    className?: string;
    colSpan?: 1 | 2 | 3;
    rowSpan?: 1 | 2;
    href?: string;
    onClick?: () => void;
}

export const BentoCard = ({
    children,
    className,
    colSpan = 1,
    rowSpan = 1,
    href,
    onClick,
}: BentoCardProps) => {
    const Component = href ? motion.a : motion.div;

    return (
        <Component
            href={href}
            onClick={onClick}
            className={cn(
                "glass-panel p-6 flex flex-col justify-between hover-effect overflow-hidden relative group",
                colSpan === 2 ? "md:col-span-2" : colSpan === 3 ? "md:col-span-3" : "md:col-span-1",
                rowSpan === 2 ? "md:row-span-2" : "md:row-span-1",
                className
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
        >
            {children}
        </Component>
    );
};
