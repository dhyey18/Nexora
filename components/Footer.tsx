"use client";

import { motion } from "framer-motion";
import { Zap, Twitter, Linkedin, Instagram, Github, ArrowUpRight } from "lucide-react";

const footerLinks = {
    Company: [
        { label: "About Us", href: "#" },
        { label: "Our Team", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Blog", href: "#" },
    ],
    Services: [
        { label: "Website Development", href: "#services" },
        { label: "Business Redesign", href: "#services" },
        { label: "SEO Optimization", href: "#services" },
        { label: "E-commerce", href: "#services" },
        { label: "Landing Pages", href: "#services" },
    ],
    Resources: [
        { label: "Portfolio", href: "#portfolio" },
        { label: "Process", href: "#process" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#" },
        { label: "Privacy Policy", href: "#" },
    ],
};

const socials = [
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },
];

export default function Footer() {
    return (
        <footer className="relative border-t border-white/[0.07] overflow-hidden pt-20 pb-8">
            {/* Background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.07) 0%, transparent 50%)",
                }}
            />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                {/* Main grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                <Zap size={18} className="text-white" />
                            </div>
                            <span className="text-white font-bold text-xl" style={{ fontFamily: "Poppins, sans-serif" }}>
                                Nexa<span className="gradient-text">Web</span>
                            </span>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
                            We build modern, high-performance websites that help businesses grow their online
                            presence and drive real revenue results.
                        </p>

                        {/* Social links */}
                        <div className="flex gap-3">
                            {socials.map(({ icon: Icon, label, href }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-colors"
                                >
                                    <Icon size={16} />
                                </motion.a>
                            ))}
                        </div>

                        {/* Status badge */}
                        <div className="mt-6 inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1.5">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-green-400 text-xs font-medium">Accepting new projects</span>
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <div className="text-white font-semibold text-sm mb-4">{category}</div>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            onClick={(e) => {
                                                if (link.href.startsWith("#")) {
                                                    e.preventDefault();
                                                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                                                }
                                            }}
                                            className="text-white/45 text-sm hover:text-white transition-colors group flex items-center gap-1"
                                        >
                                            {link.label}
                                            <ArrowUpRight
                                                size={10}
                                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                                            />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* CTA bar */}
                <div
                    className="rounded-2xl p-6 md:p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-4"
                    style={{
                        background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))",
                        border: "1px solid rgba(99,102,241,0.3)",
                    }}
                >
                    <div>
                        <div className="text-white font-bold text-lg md:text-xl mb-1" style={{ fontFamily: "Poppins" }}>
                            Ready to upgrade your website?
                        </div>
                        <div className="text-white/55 text-sm">
                            Free consultation call · No commitment required
                        </div>
                    </div>
                    <motion.a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary whitespace-nowrap"
                    >
                        Get Started Free →
                    </motion.a>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 border-t border-white/[0.07]">
                    <p className="text-white/30 text-xs">
                        © 2026 NexaWeb. All rights reserved. Built with ❤️ and lots of coffee.
                    </p>
                    <div className="flex items-center gap-6 text-white/30 text-xs">
                        <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white/60 transition-colors">Cookie Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
