"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 lg:px-12 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto mb-6" />
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Currently open to backend engineering internships and junior distributed systems roles. Let's discuss architecture, scalable systems, and how I can add value to your engineering team.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-2 space-y-6"
                    >
                        <div className="glass-card p-6 flex items-center gap-4 group hover:border-blue-500/30 transition-colors">
                            <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg group-hover:scale-110 transition-transform">
                                <Mail size={24} />
                            </div>
                            <div>
                                <strong className="block text-slate-200 text-sm">Email</strong>
                                <a href="mailto:mohammedkasmi7603@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                                    mohammedkasmi7603@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="glass-card p-6 flex items-center gap-4 group hover:border-blue-500/30 transition-colors">
                            <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg group-hover:scale-110 transition-transform">
                                <Linkedin size={24} />
                            </div>
                            <div>
                                <strong className="block text-slate-200 text-sm">LinkedIn</strong>
                                <a href="https://www.linkedin.com/in/kasmi-mohammed/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                    linkedin.com/in/kasmi-mohammed
                                </a>
                            </div>
                        </div>

                        <div className="glass-card p-6 flex items-center gap-4 group hover:border-blue-500/30 transition-colors">
                            <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg group-hover:scale-110 transition-transform">
                                <Github size={24} />
                            </div>
                            <div>
                                <strong className="block text-slate-200 text-sm">GitHub</strong>
                                <a href="https://github.com/mohammedkasmii" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                    github.com/mohammedkasmii
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-3"
                    >
                        <form className="glass-card p-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                        placeholder="john@company.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                    placeholder="Engineering Opportunity"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                                    placeholder="Hello Mohammed, we are looking for a backend engineer..."
                                />
                            </div>

                            <button
                                type="button"
                                className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center justify-center gap-2 rounded-lg transition-colors focus:ring-4 focus:ring-blue-500/20"
                            >
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
