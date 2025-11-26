import React from "react";
import { LucideIcon } from "lucide-react";

interface ContactItemProps {
    icon: LucideIcon;
    text: string;
    href?: string;
}

export const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, text, href }) => {
    const content = (
        <div className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors">
            <Icon size={16} />
            <span>{text}</span>
        </div>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer">
                {content}
            </a>
        );
    }

    return content;
};
