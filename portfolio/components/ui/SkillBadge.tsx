import React from "react";

interface SkillBadgeProps {
    name: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ name }) => {
    return (
        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mr-2 mb-2 hover:bg-blue-200 transition-colors">
            {name}
        </span>
    );
};
