"use client";

import React, { useEffect, useRef } from "react";

export const Spotlight = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!divRef.current) return;

            // Cancel previous frame if it exists to avoid stacking
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }

            // Schedule update for the next frame
            rafRef.current = requestAnimationFrame(() => {
                if (divRef.current) {
                    divRef.current.style.opacity = "1";
                    divRef.current.style.setProperty("--x", `${e.clientX}px`);
                    divRef.current.style.setProperty("--y", `${e.clientY}px`);
                }
            });
        };

        const handleMouseLeave = () => {
            if (divRef.current) {
                divRef.current.style.opacity = "0";
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <div
            ref={divRef}
            className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-0 will-change-[opacity,background]"
            style={{
                background: `radial-gradient(600px circle at var(--x, 0px) var(--y, 0px), rgba(99, 102, 241, 0.15), transparent 40%)`,
            }}
        />
    );
};
