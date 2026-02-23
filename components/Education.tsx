"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="py-24 px-6 lg:px-12 border-y border-slate-800/50 bg-slate-900/20">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                        Education
                    </h2>
                    <div className="w-20 h-1 bg-emerald-500 rounded-full" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="glass-card p-8 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                        <GraduationCap size={120} className="text-emerald-500" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start justify-between relative z-10">
                        <div className="space-y-4">
                            <div className="inline-flex items-center justify-center p-3 bg-slate-800 rounded-lg border border-slate-700">
                                <GraduationCap className="text-emerald-400" size={24} />
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white leading-tight">Engineering Cycle</h3>
                                <p className="text-emerald-400 font-medium text-lg mt-1">Full-Stack Digital Development</p>
                                <div className="flex flex-col sm:flex-row gap-4 mt-4 text-slate-400 text-sm">
                                    <span className="flex items-center gap-2">
                                        <MapPin size={16} /> EHEI (Ecole des Hautes Etudes d'Ingénierie)
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Calendar size={16} /> 4th Year Student
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/3 bg-slate-800/50 p-5 rounded-lg border border-slate-700">
                            <strong className="text-slate-200 text-sm block mb-3">Core Areas of Study:</strong>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    Distributed Systems
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    Advanced Database Management
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    Software Architecture
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    Containerization & DevOps
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass-card p-8 mt-6 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                        <GraduationCap size={120} className="text-emerald-500/50" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start justify-between relative z-10">
                        <div className="space-y-4">
                            <div className="inline-flex items-center justify-center p-3 bg-slate-800 rounded-lg border border-slate-700">
                                <GraduationCap className="text-emerald-400" size={24} />
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white leading-tight">Technicien Spécialisé</h3>
                                <p className="text-emerald-400 font-medium text-lg mt-1">Développement Web & Mobile</p>
                                <div className="flex flex-col sm:flex-row gap-4 mt-4 text-slate-400 text-sm">
                                    <span className="flex items-center gap-2">
                                        <MapPin size={16} /> ISTA - Lazaret
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Calendar size={16} /> 2022 - 2024
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/3 bg-slate-800/50 p-5 rounded-lg border border-slate-700">
                            <strong className="text-slate-200 text-sm block mb-3">Core Areas of Study:</strong>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    Web Applications
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    Relational Databases
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    Algorithmics
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
