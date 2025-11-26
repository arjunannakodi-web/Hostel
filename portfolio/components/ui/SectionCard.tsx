import React from "react";
import { motion } from "framer-motion";

interface SectionCardProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export const SectionCard: React.FC<SectionCardProps> = ({ title, children, className = "" }) => {
    return (
        <div className={`bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-6 border border-slate-100 ${className}`}>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2 border-slate-200 uppercase tracking-wide">
                {title}
            </h2>
            <div className="space-y-4">{children}</div>
        </div>
    );
};
