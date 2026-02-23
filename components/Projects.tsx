"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, GitMerge, Database, Server } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "Medical Microservices System (PFA)",
            role: "Lead Backend Developer",
            problem: "Monolithic medical records were unscalable and struggled with concurrent large imaging data processing.",
            architecture: "Event-driven Microservices using Spring Boot & Kafka",
            features: [
                "Independent services for Patients, Appointments, and Analyses.",
                "Asynchronous event streaming with Kafka for service decoupling.",
                "Integrated Python AI module for automated medical image analysis.",
                "Containerized infrastructure with Docker and centralized SQL Server."
            ],
            tech: ["Spring Boot", "Kafka", "Docker", "Python (AI)", "SQL Server"],
            github: "#",
            featured: true
        },
        {
            title: "Academic Management Platform",
            role: "Full-Stack Engineer",
            problem: "University administration needed a centralized system to track student interactions and manage courses across departments.",
            architecture: "N-Tier Distributed Architecture",
            features: [
                "Comprehensive user administration and hierarchical role management.",
                "Real-time student interaction tracking utilizing Firebase.",
                "Statistical dashboard generated from aggregated operational data."
            ],
            tech: ["C++ (Qt)", "Java", "PHP", "SQL Server", "Firebase"],
            github: "#",
            featured: false
        },
        {
            title: "HR Archive Management System",
            role: "Backend Intern @ SBTX",
            problem: "Manual HR archiving was causing massive operational bottlenecks and data loss risks.",
            architecture: "MVC with Automated Task Scheduling",
            features: [
                "Optimized digital archiving flow reducing retrieval time by 80%.",
                "Automated background task processing for periodic data audits.",
                "Designed normalized MySQL database resolving data redundancy."
            ],
            tech: ["Laravel", "PHP", "MySQL", "Task Scheduling"],
            github: "#",
            featured: false
        },
        {
            title: "Distributed Backend & Object-Oriented APIs",
            role: "Backend Architecture",
            problem: "Demonstrating clean architecture boundaries and structured API designs for general scalable use.",
            architecture: "Clean Architecture / Hexagonal",
            features: [
                "Implementation of rigorous RESTful principles.",
                "JWT-based role authentication and authorization middleware.",
                "Strict separation of concerns across Data, Domain, and Service layers."
            ],
            tech: ["REST APIs", "Clean Architecture", "JWT", "Design Patterns"],
            github: "#",
            featured: false
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 lg:px-12 relative">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                        System Case Studies
                    </h2>
                    <div className="w-20 h-1 bg-purple-500 rounded-full mb-6" />
                    <p className="text-slate-400 max-w-2xl text-lg">
                        A selection of complex backend architectures and distributed systems I've engineered.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`glass-card p-8 md:p-10 relative overflow-hidden ${project.featured ? "border-blue-500/30 ring-1 ring-blue-500/20" : ""
                                }`}
                        >
                            {project.featured && (
                                <div className="absolute top-0 right-0 px-4 py-1.5 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-bl-lg border-b border-l border-blue-500/20">
                                    FEATURED SYSTEM
                                </div>
                            )}

                            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                                <div className="flex-1 space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-blue-400 font-mono text-sm">{project.role}</p>
                                    </div>

                                    <div className="space-y-4 text-slate-300">
                                        <div>
                                            <strong className="text-slate-100 flex items-center gap-2 mb-1">
                                                <Database size={16} className="text-slate-400" />
                                                The Problem
                                            </strong>
                                            <p className="text-sm leading-relaxed text-slate-400">{project.problem}</p>
                                        </div>
                                        <div>
                                            <strong className="text-slate-100 flex items-center gap-2 mb-1">
                                                <Server size={16} className="text-slate-400" />
                                                Architecture
                                            </strong>
                                            <p className="text-sm leading-relaxed text-slate-400 font-mono bg-slate-800/50 p-2 rounded-md border border-slate-700 w-fit">
                                                {project.architecture}
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <strong className="text-slate-100 text-sm mb-3 block">Key Engineering Features:</strong>
                                        <ul className="space-y-2">
                                            {project.features.map((feature, i) => (
                                                <li key={i} className="flex gap-3 text-sm text-slate-300">
                                                    <GitMerge size={16} className="text-indigo-400 shrink-0 mt-0.5" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="lg:w-1/3 flex flex-col justify-between space-y-6 lg:border-l lg:border-slate-800 lg:pl-8">
                                    <div>
                                        <strong className="text-slate-100 text-sm mb-3 block">Technologies Used:</strong>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map(tech => (
                                                <span key={tech} className="px-2.5 py-1 bg-slate-800/80 text-xs text-slate-300 rounded border border-slate-700">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3 pt-6"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
