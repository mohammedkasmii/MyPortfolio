"use client";

import { Terminal } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 px-6 lg:px-12 border-t border-slate-800 bg-[#06090e]">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-slate-400">
                    <Terminal size={18} className="text-blue-500" />
                    <span className="font-semibold text-slate-300">Mohammed Kasmi</span>
                </div>

                <p className="text-sm text-slate-500 text-center md:text-left">
                    &copy; {currentYear} All rights reserved. Designed & Built by Mohammed Kasmi.
                </p>

                <div className="text-sm font-mono text-slate-600">
                    STATUS: <span className="text-emerald-500">SYSTEM_ONLINE</span>
                </div>
            </div>
        </footer>
    );
}
