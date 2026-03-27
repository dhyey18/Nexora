"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";

const footerLinks = {
    Services: [
        { label: "Website Development", href: "#services" },
        { label: "Business Redesign", href: "#services" },
        { label: "SEO Optimization", href: "#services" },
        { label: "E-Commerce", href: "#services" },
        { label: "Landing Pages", href: "#services" },
    ],
    Company: [
        { label: "Portfolio", href: "#portfolio" },
        { label: "Process", href: "#process" },
        { label: "Pricing", href: "#pricing" },
        { label: "About Us", href: "#" },
        { label: "Blog", href: "#" },
    ],
    Support: [
        { label: "Contact", href: "#contact" },
        { label: "FAQ", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
    ],
};

const FOOTER_PARTICLES = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    x: Math.random() * 92,   // cap at 92% so dots never bleed past right edge
    y: Math.random() * 90,
    size: Math.random() * 2 + 0.6,
    duration: Math.random() * 12 + 10,
    delay: Math.random() * 6,
    opacity: Math.random() * 0.2 + 0.05,
    color: i % 2 === 0 ? "41,151,255" : "191,90,242",
}));

export default function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const handleNav = (href: string) => {
        if (href.startsWith("#")) {
            document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer
            style={{
                position: "relative",
                background: "var(--background)",
                borderTop: "1px solid var(--border)",
                paddingTop: 56,
                paddingBottom: 24,
                overflow: "hidden",
                maxWidth: "100vw",
                boxSizing: "border-box",
            }}
        >
            {/* Particles */}
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
                {FOOTER_PARTICLES.map((p) => (
                    <motion.div
                        key={p.id}
                        style={{
                            position: "absolute",
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            width: p.size,
                            height: p.size,
                            borderRadius: "50%",
                            background: `rgba(${p.color}, ${p.opacity})`,
                            boxShadow: `0 0 ${p.size * 4}px rgba(${p.color}, ${p.opacity * 0.5})`,
                        }}
                        animate={{
                            y: [0, -24, 0],
                            opacity: [p.opacity, p.opacity * 2.5, p.opacity],
                        }}
                        transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
                    />
                ))}
                {/* Ambient glow — percentage-based so they never overflow on any screen */}
                <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: "absolute",
                        top: "30%",
                        left: "5%",
                        width: "40%",
                        maxWidth: 360,
                        aspectRatio: "2/1",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(41,151,255,0.05) 0%, transparent 70%)",
                    }}
                />
                <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                    style={{
                        position: "absolute",
                        bottom: "10%",
                        right: "5%",
                        width: "30%",
                        maxWidth: 280,
                        aspectRatio: "2/1",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(191,90,242,0.05) 0%, transparent 70%)",
                    }}
                />
            </div>

            <div className="container" ref={ref} style={{ position: "relative", zIndex: 1 }}>
                {/* Animated top divider */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        height: 1,
                        marginBottom: 48,
                        background: "linear-gradient(90deg, transparent, rgba(41,151,255,0.4), rgba(191,90,242,0.4), transparent)",
                        transformOrigin: "left",
                    }}
                />

                {/* Links grid — mobile: single col, tablet+: footer layout */}
                <div
                    className="custom-grid md-grid-footer"
                    style={{ gap: "40px 32px", marginBottom: 48 }}
                >
                    {/* Brand column */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Logo with rotating border */}
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                            <div style={{ position: "relative", padding: "1.5px", borderRadius: 9, overflow: "hidden", flexShrink: 0 }}>
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                    style={{
                                        position: "absolute",
                                        width: "300%",
                                        height: "300%",
                                        top: "-100%",
                                        left: "-100%",
                                        background: "conic-gradient(from 0deg, transparent 25%, rgba(41,151,255,0.9) 45%, rgba(191,90,242,0.85) 60%, transparent 75%)",
                                    }}
                                />
                                <div
                                    style={{
                                        position: "relative",
                                        width: 28,
                                        height: 28,
                                        borderRadius: 7,
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
                            </div>
                            <span style={{ color: "var(--heading-color)", fontWeight: 600, fontSize: 17, letterSpacing: "-0.02em" }}>
                                Catalyq
                            </span>
                        </div>

                        <p style={{ color: "var(--text-secondary)", fontSize: 13, lineHeight: 1.65, marginBottom: 24, maxWidth: 260 }}>
                            We build modern, high-performance websites that help businesses grow their online presence and drive real results.
                        </p>

                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            <motion.div
                                whileHover={{ x: 3 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                style={{ display: "flex", alignItems: "center", gap: 10 }}
                            >
                                <MapPin size={13} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} />
                                <span style={{ color: "var(--text-tertiary)", fontSize: 13 }}>Ahmedabad, Gujarat, India</span>
                            </motion.div>
                            <motion.div
                                whileHover={{ x: 3 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                style={{ display: "flex", alignItems: "center", gap: 10 }}
                            >
                                <Phone size={13} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} />
                                <span style={{ color: "var(--text-tertiary)", fontSize: 13 }}>+91 94291 84788</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([category, links], colIdx) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 24 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 + colIdx * 0.08 }}
                        >
                            <div style={{
                                color: "var(--heading-color)",
                                fontWeight: 600,
                                fontSize: 12,
                                marginBottom: 18,
                                textTransform: "uppercase",
                                letterSpacing: "0.07em",
                            }}>
                                {category}
                            </div>
                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                                {links.map((link, i) => (
                                    <motion.li
                                        key={link.label}
                                        initial={{ opacity: 0, x: -8 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.4, delay: 0.2 + colIdx * 0.08 + i * 0.04 }}
                                    >
                                        <motion.a
                                            href={link.href}
                                            onClick={(e) => {
                                                if (link.href.startsWith("#")) {
                                                    e.preventDefault();
                                                    handleNav(link.href);
                                                }
                                            }}
                                            style={{
                                                color: "var(--text-tertiary)",
                                                fontSize: 13,
                                                textDecoration: "none",
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: 4,
                                            }}
                                            whileHover={{ color: "var(--foreground)", x: 3 }}
                                            transition={{ duration: 0.15 }}
                                        >
                                            {link.label}
                                        </motion.a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    style={{
                        borderTop: "1px solid var(--border)",
                        paddingTop: 20,
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 12,
                    }}
                >
                    <p style={{ color: "var(--text-tertiary)", fontSize: 12 }}>
                        Copyright © 2026 Catalyq. All rights reserved.
                    </p>
                    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                        {["Privacy Policy", "Terms of Use", "Legal"].map((item) => (
                            <motion.a
                                key={item}
                                href="#"
                                style={{ color: "var(--text-tertiary)", fontSize: 12, textDecoration: "none" }}
                                whileHover={{ color: "var(--text-secondary)" }}
                                transition={{ duration: 0.15 }}
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
