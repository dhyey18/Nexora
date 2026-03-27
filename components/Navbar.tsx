"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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
        const handleScroll = () => setScrolled(window.scrollY > 10);
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
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={scrolled ? "glass" : ""}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 50,
                    background: scrolled ? undefined : "transparent",
                    borderBottom: scrolled ? undefined : "none",
                    transition: "background 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease",
                }}
            >
                <div
                    style={{
                        maxWidth: "68rem",
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0 20px",
                        height: 52,
                    }}
                >
                    {/* Logo */}
                    <a
                        href="#"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            textDecoration: "none",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        <div
                            style={{
                                width: 28,
                                height: 28,
                                borderRadius: 8,
                                background: "linear-gradient(135deg, #2997FF, #BF5AF2)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#fff",
                                fontWeight: 800,
                                fontSize: 13,
                            }}
                        >
                            C
                        </div>
                        <span style={{
                            color: "var(--foreground)",
                            fontWeight: 600,
                            fontSize: 17,
                            fontFamily: "Inter, SF Pro Display, sans-serif",
                        }}>
                            Catalyq
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div style={{ display: "none", alignItems: "center", gap: 28 }} className="md-flex">
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

                    {/* Right side */}
                    <div style={{ display: "none", alignItems: "center", gap: 14 }} className="md-flex">
                        <ThemeToggle />
                        <button
                            onClick={() => handleNavClick("#contact")}
                            className="btn-pill"
                            style={{ padding: "8px 20px", fontSize: 13 }}
                        >
                            Get Started
                        </button>
                    </div>

                    {/* Mobile */}
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }} className="md-hidden">
                        <ThemeToggle />
                        <button
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: 6,
                                borderRadius: 8,
                                background: "transparent",
                                border: "none",
                                color: "var(--foreground)",
                                cursor: "pointer",
                            }}
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: "fixed",
                            top: 52,
                            left: 0,
                            right: 0,
                            zIndex: 40,
                            background: "var(--nav-bg)",
                            backdropFilter: "saturate(180%) blur(20px)",
                            WebkitBackdropFilter: "saturate(180%) blur(20px)",
                            borderBottom: "0.5px solid var(--border)",
                            padding: "12px 20px 20px",
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                            {navLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => handleNavClick(link.href)}
                                    style={{
                                        textAlign: "left",
                                        color: "var(--text-primary)",
                                        fontWeight: 400,
                                        fontSize: 15,
                                        padding: "14px 0",
                                        border: "none",
                                        borderBottom: "0.5px solid var(--border)",
                                        background: "transparent",
                                        cursor: "pointer",
                                        width: "100%",
                                    }}
                                >
                                    {link.label}
                                </button>
                            ))}
                            <div style={{ paddingTop: 16 }}>
                                <button
                                    onClick={() => handleNavClick("#contact")}
                                    className="btn-pill"
                                    style={{ width: "100%", justifyContent: "center" }}
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
