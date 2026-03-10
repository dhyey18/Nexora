"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
            >
                <div
                    className={`max-w-6xl mx-auto rounded-2xl transition-all duration-500 ${scrolled
                            ? "bg-[rgba(2,8,23,0.85)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                            : "bg-transparent"
                        }`}
                >
                    <div className="flex items-center justify-between px-6 py-3">
                        {/* Logo */}
                        <motion.a
                            href="#"
                            className="flex items-center gap-2 text-white font-bold text-xl"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                <Zap size={16} className="text-white" />
                            </div>
                            <span style={{ fontFamily: "Poppins, sans-serif" }}>
                                Nexa<span className="gradient-text">Web</span>
                            </span>
                        </motion.a>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => handleNavClick(link.href)}
                                    className="nav-link bg-transparent border-none cursor-pointer"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="hidden md:flex items-center gap-3">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleNavClick("#contact")}
                                className="btn-primary text-sm py-2.5 px-6"
                            >
                                Get Started
                            </motion.button>
                        </div>

                        {/* Mobile hamburger */}
                        <button
                            className="md:hidden text-white p-2 rounded-lg bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)]"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            id="mobile-menu-toggle"
                            aria-label="Toggle mobile menu"
                        >
                            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-24 left-4 right-4 z-40 rounded-2xl bg-[rgba(2,8,23,0.95)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] shadow-2xl p-6"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => handleNavClick(link.href)}
                                    className="text-left text-white/80 font-medium text-base py-2 px-3 rounded-xl hover:bg-[rgba(99,102,241,0.1)] hover:text-white transition-all border-none bg-transparent cursor-pointer"
                                >
                                    {link.label}
                                </button>
                            ))}
                            <div className="pt-2 border-t border-[rgba(255,255,255,0.08)]">
                                <button
                                    onClick={() => handleNavClick("#contact")}
                                    className="btn-primary w-full justify-center text-sm"
                                >
                                    Get Started →
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
