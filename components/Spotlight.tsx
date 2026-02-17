"use client";

import React, { useEffect, useState } from "react";

export const Spotlight = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setOpacity(1);
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseLeave = () => {
            setOpacity(0);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div
            className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
            style={{
                opacity,
                background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
            }}
        />
    );
};
