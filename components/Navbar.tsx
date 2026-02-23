"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Tech Stack", href: "#stack" },
        { name: "Systems", href: "#projects" },
        { name: "Education", href: "#education" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-[#0b0f19]/80 backdrop-blur-md border-b border-slate-800/50 py-4"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-12 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <Terminal size={24} className="text-blue-500 group-hover:text-blue-400 transition-colors" />
                    <span className="font-bold text-white tracking-tight hidden sm:block">M<span className="text-slate-500">.</span>Kasmi</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <Link
                    href="#contact"
                    className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-lg transition-colors border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                >
                    Contact Me
                </Link>
            </div>
        </motion.nav>
    );
}
