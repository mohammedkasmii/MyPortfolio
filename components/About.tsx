"use client";

import { motion } from "framer-motion";
import { Copy, Server, Workflow, Zap, Globe } from "lucide-react";
import Image from "next/image";

export default function About() {
    const principles = [
        {
            icon: <Server className="text-blue-400" size={24} />,
            title: "Backend Architecture",
            description: "Designing robust, scalable, and secure backend systems that power mission-critical applications.",
        },
        {
            icon: <Workflow className="text-indigo-400" size={24} />,
            title: "Systems Thinking",
            description: "Deconstructing complex business requirements into modular, orchestrated microservices.",
        },
        {
            icon: <Zap className="text-emerald-400" size={24} />,
            title: "Performance Optimization",
            description: "Fine-tuning database queries, caching strategies, and memory management for low-latency APIs.",
        },
        {
            icon: <Copy className="text-purple-400" size={24} />,
            title: "Clean Code Mindset",
            description: "Committed to maintainability, solid modeling, and continuous learning in software engineering.",
        }
    ];

    return (
        <section id="about" className="py-24 px-6 lg:px-12 relative">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 flex flex-col md:flex-row gap-12 items-center"
                >
                    <div className="md:w-1/3 flex justify-center">
                        <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-slate-700/50 grayscale hover:grayscale-0 transition-all duration-500">
                            <Image
                                src="/MyPic.jpeg"
                                alt="Mohammed Kasmi"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                            Engineering Philosophy
                        </h2>
                        <div className="w-20 h-1 bg-blue-500 rounded-full mb-8" />

                        <p className="text-lg text-slate-300 leading-relaxed">
                            I approach software engineering with a focus on <strong className="text-white">scalable systems</strong> and <strong className="text-white">clean architecture</strong>.
                            My background in Distributed Systems and Microservices allows me to see the bigger picture while meticulously designing the APIs, database models, and internal
                            services that make products resilient. Whether I'm configuring Kafka streams or building RESTful Spring Boot applications, my goal is always to create maintainable,
                            high-performance infrastructure.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {principles.map((principle, index) => (
                        <motion.div
                            key={principle.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-8 group hover:border-blue-500/30 transition-colors"
                        >
                            <div className="p-3 bg-slate-800/50 w-fit rounded-lg border border-slate-700 mb-6 group-hover:scale-110 transition-transform">
                                {principle.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{principle.title}</h3>
                            <p className="text-slate-400 leading-relaxed">
                                {principle.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Spoken Languages Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-16 pt-10 border-t border-slate-800/50 flex flex-col md:flex-row items-center gap-6 justify-between"
                >
                    <div className="flex items-center gap-3">
                        <Globe className="text-blue-400" size={24} />
                        <h3 className="text-xl font-bold text-white">Spoken Languages</h3>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <div className="px-5 py-2.5 glass-card flex flex-col items-center justify-center min-w-[120px]">
                            <span className="text-white font-semibold">French</span>
                            <span className="text-blue-400 text-xs font-mono mt-1">FLUENT</span>
                        </div>
                        <div className="px-5 py-2.5 glass-card flex flex-col items-center justify-center min-w-[120px]">
                            <span className="text-white font-semibold">English</span>
                            <span className="text-blue-400 text-xs font-mono mt-1">FLUENT</span>
                        </div>
                        <div className="px-5 py-2.5 glass-card flex flex-col items-center justify-center min-w-[120px]">
                            <span className="text-white font-semibold">Arabic</span>
                            <span className="text-blue-400 text-xs font-mono mt-1">NATIVE</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
