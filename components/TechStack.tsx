"use client";

import { motion } from "framer-motion";

export default function TechStack() {
    const generateDelay = (index: number) => index * 0.05;

    const stackCategories = [
        {
            title: "Languages",
            skills: ["Java", "C++", "PHP", "JavaScript", "C#"],
        },
        {
            title: "Backend Frameworks",
            skills: ["Spring Boot", "Symfony", "ASP.NET", "Laravel"],
        },
        {
            title: "Frontend",
            skills: ["React", "Next.js"],
        },
        {
            title: "Databases",
            skills: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB"],
        },
        {
            title: "DevOps & Tools",
            skills: ["Docker", "Kafka", "Git", "MinIO", "JUnit", "Firebase"],
        },
    ];

    return (
        <section id="stack" className="py-24 px-6 lg:px-12 bg-slate-900/40 border-y border-slate-800/50">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                        Technical Stack
                    </h2>
                    <div className="w-20 h-1 bg-indigo-500 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stackCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                            className="glass-card p-6"
                        >
                            <h3 className="text-lg font-semibold text-slate-200 mb-6 font-mono border-b border-slate-700/50 pb-3">
                // {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.2 + generateDelay(skillIndex) }}
                                        className="px-3 py-1.5 bg-slate-800 text-slate-300 text-sm rounded-md border border-slate-700 hover:border-slate-500 hover:text-white transition-colors cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
