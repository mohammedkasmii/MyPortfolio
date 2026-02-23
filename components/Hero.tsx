"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Cpu, ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 lg:px-12 pt-20">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

            <div className="max-w-5xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col gap-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 w-fit text-sm font-medium">
                        <Terminal size={16} />
                        <span>Available for Opportunities</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                        Architecting <br />
                        <span className="text-gradient">Robust Systems.</span>
                    </h1>

                    <p className="text-lg lg:text-xl text-slate-400 max-w-xl leading-relaxed">
                        I'm <span className="text-white font-medium">Mohammed Kasmi</span>, a Software Engineer specializing in backend development, distributed architecture, and AI integration. Building scalable microservices that stand the test of time.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <Link
                            href="#projects"
                            className="group flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
                        >
                            View Projects
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a
                            href="/Mohammed-KASMI-CV.pdf"
                            target="_blank"
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-700 transition-colors border border-slate-700 hover:border-slate-600"
                        >
                            <Download size={18} />
                            Download CV
                        </a>
                    </div>
                </motion.div>

                {/* Technical Abstract Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                    className="hidden lg:flex justify-center relative"
                >
                    <div className="relative w-full aspect-square max-w-md">
                        <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full" />

                        <div className="glass-card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 flex flex-col items-center justify-center gap-6 z-20">
                            <Database size={48} className="text-blue-400" />
                            <div className="w-full px-8 space-y-3">
                                <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        className="h-full bg-blue-500"
                                    />
                                </div>
                                <div className="flex justify-between text-xs text-slate-400 font-mono">
                                    <span>STREAM: KAFKA</span>
                                    <span className="text-emerald-400">ACTIVE</span>
                                </div>
                            </div>
                        </div>

                        {/* Orbiting Elements */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border border-slate-700/50 rounded-full rounded-tr-none z-10"
                        >
                            <div className="absolute top-0 right-1/2 p-3 bg-slate-800 rounded-lg border border-slate-700 translate-x-1/2 -translate-y-1/2">
                                <Cpu size={24} className="text-indigo-400" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
