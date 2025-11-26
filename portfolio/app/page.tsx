"use client";

import React from "react";
import { Phone, Mail, MapPin, Download } from "lucide-react";
import { motion } from "framer-motion";
import { SectionCard } from "@/components/ui/SectionCard";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { ContactItem } from "@/components/ui/ContactItem";

export default function Home() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-900">
            <div className="max-w-5xl mx-auto space-y-8">
                {/* Header Section */}
                <motion.header
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center md:text-left relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full -mr-32 -mt-32 opacity-50 blur-3xl"></div>
                    <div className="relative z-10">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-2">
                            PAWAN R
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-600 font-medium mb-6">
                            Computer Technology Student
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 text-sm md:text-base">
                            <ContactItem icon={Phone} text="+91 97901 46356" href="tel:+919790146356" />
                            <ContactItem icon={Mail} text="pawansindhuramadass@gmail.com" href="mailto:pawansindhuramadass@gmail.com" />
                            <ContactItem icon={MapPin} text="Tiruppur - 641652" />
                        </div>
                    </div>
                </motion.header>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-12 gap-8"
                >
                    {/* Left Column (Sidebar style) */}
                    <div className="md:col-span-4 space-y-8">
                        <motion.div variants={itemVariants}>
                            <SectionCard title="Technical Skills">
                                <div className="mb-4">
                                    <h3 className="font-semibold text-slate-700 mb-2">Programming Languages</h3>
                                    <div className="flex flex-wrap">
                                        {["C", "Python", "PHP", "SQL"].map(skill => <SkillBadge key={skill} name={skill} />)}
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h3 className="font-semibold text-slate-700 mb-2">Web Technologies</h3>
                                    <div className="flex flex-wrap">
                                        {["HTML", "CSS", "WAMP"].map(skill => <SkillBadge key={skill} name={skill} />)}
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h3 className="font-semibold text-slate-700 mb-2">Database & Data Tools</h3>
                                    <div className="flex flex-wrap">
                                        {["MySQL", "Weka"].map(skill => <SkillBadge key={skill} name={skill} />)}
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h3 className="font-semibold text-slate-700 mb-2">Data Visualization</h3>
                                    <div className="flex flex-wrap">
                                        {["Tableau", "Power BI"].map(skill => <SkillBadge key={skill} name={skill} />)}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-700 mb-2">Design Tools</h3>
                                    <div className="flex flex-wrap">
                                        {["Adobe Photoshop", "Canva", "Figma"].map(skill => <SkillBadge key={skill} name={skill} />)}
                                    </div>
                                </div>
                            </SectionCard>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <SectionCard title="Certifications">
                                <ul className="space-y-3 text-slate-600">
                                    <li className="flex items-start">
                                        <span className="mr-2 text-blue-500">•</span>
                                        <span>Multimedia & Technology</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-blue-500">•</span>
                                        <span>NPTEL Developing Soft Skills & Personality - 72%</span>
                                    </li>
                                </ul>
                            </SectionCard>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <SectionCard title="Languages Known">
                                <ul className="space-y-2 text-slate-600">
                                    <li><span className="font-medium text-slate-800">English</span> (R, W, S)</li>
                                    <li><span className="font-medium text-slate-800">Tamil</span> (R, W, S)</li>
                                    <li><span className="font-medium text-slate-800">Malayalam</span> (S)</li>
                                    <li><span className="font-medium text-slate-800">Hindi</span> (W, R)</li>
                                </ul>
                            </SectionCard>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <SectionCard title="Hobbies">
                                <ul className="space-y-2 text-slate-600">
                                    <li>• Typing (Average WPM: 65)</li>
                                    <li>• Gaming (Strategy Games)</li>
                                    <li>• Photography (Landscape & Urban)</li>
                                    <li>• Sports (Cricket, Football, Volleyball)</li>
                                </ul>
                            </SectionCard>
                        </motion.div>
                    </div>

                    {/* Right Column (Main Content) */}
                    <div className="md:col-span-8 space-y-8">
                        <motion.div variants={itemVariants}>
                            <SectionCard title="Career Objective">
                                <p className="text-slate-600 leading-relaxed">
                                    Aspiring to begin my journey as a software professional where I can apply my technical skills, learn continuously, and contribute to building efficient and meaningful digital solutions.
                                </p>
                            </SectionCard>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <SectionCard title="Education">
                                <div className="space-y-6">
                                    <div className="flex flex-col sm:flex-row justify-between sm:items-start">
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-800">PSG College of Arts and Science</h3>
                                            <p className="text-slate-500">Aggregate: 80%</p>
                                        </div>
                                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">2022 - 2025</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row justify-between sm:items-start">
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-800">M S Vidyalaya Matric Higher Secondary School</h3>
                                            <p className="text-slate-500">HSC Aggregate: 78.67%</p>
                                        </div>
                                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">2021 - 2022</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row justify-between sm:items-start">
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-800">Tirupur Public Matriculation School</h3>
                                            <p className="text-slate-500">SSLC Aggregate: 98.4%</p>
                                        </div>
                                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">2019 - 2020</span>
                                    </div>
                                </div>
                            </SectionCard>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <SectionCard title="Projects">
                                <div className="space-y-8">
                                    <div>
                                        <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2">
                                            <h3 className="text-lg font-bold text-slate-800">Food Bridge System</h3>
                                            <span className="text-sm text-slate-500">Feb 2025 - May 2025</span>
                                        </div>
                                        <p className="text-sm text-slate-500 mb-2">Role: Developer | Tools: PHP, MySQL, HTML, CSS, Javascript</p>
                                        <p className="text-slate-600">
                                            Built a donation platform aimed at minimizing food wastage by allowing users to list and manage surplus food online.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2">
                                            <h3 className="text-lg font-bold text-slate-800">E-Commerce Platform</h3>
                                            <span className="text-sm text-slate-500">Jan 2024 - Mar 2024</span>
                                        </div>
                                        <p className="text-sm text-slate-500 mb-2">Role: Developer | Tools: PHP, MySQL, HTML, CSS, Javascript</p>
                                        <p className="text-slate-600">
                                            Developed an online shopping platform with product listing, cart, and order features to simulate basic e-commerce functionality.
                                        </p>
                                    </div>
                                </div>
                            </SectionCard>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <SectionCard title="Internship">
                                <div className="space-y-8">
                                    <div>
                                        <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2">
                                            <h3 className="text-lg font-bold text-slate-800">Aculer Media</h3>
                                            <span className="text-sm text-slate-500">Feb 2025 - May 2025</span>
                                        </div>
                                        <p className="text-sm text-slate-500 mb-2">Role: Web Development Intern</p>
                                        <ul className="list-disc list-inside text-slate-600 space-y-1">
                                            <li>Assisted in maintaining and updating website front-end using HTML, CSS, and JavaScript.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2">
                                            <h3 className="text-lg font-bold text-slate-800">Litz Tech</h3>
                                            <span className="text-sm text-slate-500">Jan 2024 - Mar 2025</span>
                                        </div>
                                        <p className="text-sm text-slate-500 mb-2">Role: Web Development Intern</p>
                                        <ul className="list-disc list-inside text-slate-600 space-y-1">
                                            <li>Gained practical exposure to front-end development tasks in a live project environment.</li>
                                        </ul>
                                    </div>
                                </div>
                            </SectionCard>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.footer
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-slate-500 text-sm mt-12 pb-8"
                >
                    <div className="mb-4">
                        <h3 className="font-bold text-slate-700 uppercase mb-2">Declaration</h3>
                        <p>I, Pawan R, hereby declare that the information provided in this resume is true to the best of my knowledge and belief.</p>
                    </div>
                    <p>© {new Date().getFullYear()} Pawan R. All rights reserved.</p>
                </motion.footer>
            </div>
        </main>
    );
}
