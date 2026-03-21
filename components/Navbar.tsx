"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

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
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 50,
                    padding: "14px 16px",
                }}
            >
                <div
                    style={{
                        maxWidth: "72rem",
                        margin: "0 auto",
                        borderRadius: 20,
                        transition: "all 0.5s ease",
                        background: scrolled ? "var(--nav-bg)" : "transparent",
                        backdropFilter: scrolled ? "blur(20px)" : "none",
                        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
                        border: scrolled ? "1px solid var(--border)" : "1px solid transparent",
                        boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.4)" : "none",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "10px 24px",
                        }}
                    >
                        {/* Logo */}
                        <motion.a
                            href="#"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                color: "var(--heading-color)",
                                fontWeight: 700,
                                fontSize: 19,
                                textDecoration: "none",
                            }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div
                                style={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: 8,
                                    background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Zap size={16} color="#fff" />
                            </div>
                            <span style={{ fontFamily: "Poppins, sans-serif" }}>
                                Cata<span className="gradient-text">lyq</span>
                            </span>
                        </motion.a>

                        {/* Desktop Nav */}
                        <div style={{ display: "none", alignItems: "center", gap: 32 }} className="md-flex">
                            {navLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => handleNavClick(link.href)}
                                    className="nav-link"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>

                        {/* CTA + Theme Toggle */}
                        <div style={{ display: "none", alignItems: "center", gap: 12 }} className="md-flex">
                            <ThemeToggle />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleNavClick("#contact")}
                                className="btn-primary"
                                style={{ padding: "10px 22px", fontSize: 14 }}
                            >
                                Get Started
                            </motion.button>
                        </div>

                        {/* Mobile: Theme toggle + hamburger */}
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }} className="md-hidden">
                            <ThemeToggle />
                            <button
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: 8,
                                    borderRadius: 10,
                                    background: "var(--glass)",
                                    border: "1px solid var(--border)",
                                    color: "var(--foreground)",
                                    cursor: "pointer",
                                }}
                                onClick={() => setMobileOpen(!mobileOpen)}
                                id="mobile-menu-toggle"
                                aria-label="Toggle mobile menu"
                            >
                                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
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
                        style={{
                            position: "fixed",
                            top: 90,
                            left: 16,
                            right: 16,
                            zIndex: 40,
                            borderRadius: 20,
                            background: "var(--nav-bg)",
                            backdropFilter: "blur(20px)",
                            WebkitBackdropFilter: "blur(20px)",
                            border: "1px solid var(--border)",
                            boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
                            padding: 24,
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                            {navLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => handleNavClick(link.href)}
                                    style={{
                                        textAlign: "left",
                                        color: "var(--text-primary)",
                                        fontWeight: 500,
                                        fontSize: 16,
                                        padding: "10px 14px",
                                        borderRadius: 12,
                                        border: "none",
                                        background: "transparent",
                                        cursor: "pointer",
                                        transition: "background 0.2s, color 0.2s",
                                        width: "100%",
                                    }}
                                    onMouseEnter={(e) => {
                                        const el = e.currentTarget as HTMLButtonElement;
                                        el.style.background = `rgba(var(--primary-rgb), 0.1)`;
                                        el.style.color = "var(--foreground)";
                                    }}
                                    onMouseLeave={(e) => {
                                        const el = e.currentTarget as HTMLButtonElement;
                                        el.style.background = "transparent";
                                        el.style.color = "var(--text-primary)";
                                    }}
                                >
                                    {link.label}
                                </button>
                            ))}
                            <div
                                style={{
                                    paddingTop: 12,
                                    marginTop: 8,
                                    borderTop: "1px solid var(--border)",
                                }}
                            >
                                <button
                                    onClick={() => handleNavClick("#contact")}
                                    className="btn-primary"
                                    style={{ width: "100%", padding: "13px 24px", justifyContent: "center" }}
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
