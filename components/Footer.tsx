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
        <footer
            style={{
                position: "relative",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                overflow: "hidden",
                paddingTop: 80,
                paddingBottom: 32,
            }}
        >
            {/* Background */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    background:
                        "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.07) 0%, transparent 50%)",
                }}
            />

            <div className="container" style={{ position: "relative", zIndex: 10 }}>
                {/* Main grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(min(160px, 100%), 1fr))",
                        gap: 40,
                        marginBottom: 64,
                    }}
                >
                    {/* Brand */}
                    <div style={{ minWidth: 280, gridColumn: "span min(2, 100%)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                            <div
                                style={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: 10,
                                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                }}
                            >
                                <Zap size={17} color="#fff" />
                            </div>
                            <span
                                style={{
                                    color: "#f8fafc",
                                    fontWeight: 700,
                                    fontSize: 19,
                                    fontFamily: "Poppins, sans-serif",
                                }}
                            >
                                Nexa<span className="gradient-text">Web</span>
                            </span>
                        </div>
                        <p
                            style={{
                                color: "rgba(248,250,252,0.5)",
                                fontSize: 14,
                                lineHeight: 1.7,
                                marginBottom: 24,
                                maxWidth: 280,
                            }}
                        >
                            We build modern, high-performance websites that help businesses grow their online
                            presence and drive real revenue results.
                        </p>

                        {/* Social links */}
                        <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
                            {socials.map(({ icon: Icon, label, href }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    style={{
                                        width: 36,
                                        height: 36,
                                        borderRadius: 10,
                                        background: "rgba(255,255,255,0.05)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "rgba(248,250,252,0.5)",
                                        textDecoration: "none",
                                        transition: "color 0.2s, border-color 0.2s, background 0.2s",
                                    }}
                                    onMouseEnter={(e) => {
                                        const el = e.currentTarget as HTMLAnchorElement;
                                        el.style.color = "#f8fafc";
                                        el.style.borderColor = "rgba(99,102,241,0.4)";
                                        el.style.background = "rgba(99,102,241,0.1)";
                                    }}
                                    onMouseLeave={(e) => {
                                        const el = e.currentTarget as HTMLAnchorElement;
                                        el.style.color = "rgba(248,250,252,0.5)";
                                        el.style.borderColor = "rgba(255,255,255,0.1)";
                                        el.style.background = "rgba(255,255,255,0.05)";
                                    }}
                                >
                                    <Icon size={15} />
                                </motion.a>
                            ))}
                        </div>

                        {/* Status badge */}
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                background: "rgba(16,185,129,0.1)",
                                border: "1px solid rgba(16,185,129,0.25)",
                                borderRadius: 100,
                                padding: "6px 14px",
                            }}
                        >
                            <span
                                style={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: "50%",
                                    background: "#4ade80",
                                    display: "inline-block",
                                    animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                                }}
                            />
                            <span style={{ color: "#4ade80", fontSize: 12, fontWeight: 500 }}>
                                Accepting new projects
                            </span>
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <div
                                style={{
                                    color: "#f8fafc",
                                    fontWeight: 600,
                                    fontSize: 13,
                                    marginBottom: 16,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.06em",
                                }}
                            >
                                {category}
                            </div>
                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            onClick={(e) => {
                                                if (link.href.startsWith("#")) {
                                                    e.preventDefault();
                                                    document
                                                        .querySelector(link.href)
                                                        ?.scrollIntoView({ behavior: "smooth" });
                                                }
                                            }}
                                            style={{
                                                color: "rgba(248,250,252,0.45)",
                                                fontSize: 14,
                                                textDecoration: "none",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 4,
                                                transition: "color 0.2s",
                                            }}
                                            onMouseEnter={(e) => {
                                                (e.currentTarget as HTMLAnchorElement).style.color = "#f8fafc";
                                            }}
                                            onMouseLeave={(e) => {
                                                (e.currentTarget as HTMLAnchorElement).style.color =
                                                    "rgba(248,250,252,0.45)";
                                            }}
                                        >
                                            {link.label}
                                            <ArrowUpRight
                                                size={10}
                                                style={{ opacity: 0, transition: "opacity 0.2s" }}
                                                className="group-hover:opacity-100"
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
                    style={{
                        borderRadius: 20,
                        padding: "28px 32px",
                        marginBottom: 40,
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 20,
                        background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))",
                        border: "1px solid rgba(99,102,241,0.3)",
                    }}
                >
                    <div>
                        <div
                            style={{
                                color: "#f8fafc",
                                fontWeight: 700,
                                fontSize: 18,
                                marginBottom: 4,
                                fontFamily: "Poppins, sans-serif",
                            }}
                        >
                            Ready to upgrade your website?
                        </div>
                        <div style={{ color: "rgba(248,250,252,0.55)", fontSize: 14 }}>
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
                        className="btn-primary"
                        style={{ whiteSpace: "nowrap" }}
                    >
                        Get Started Free →
                    </motion.a>
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 12,
                        paddingTop: 24,
                        borderTop: "1px solid rgba(255,255,255,0.07)",
                    }}
                >
                    <p style={{ color: "rgba(248,250,252,0.3)", fontSize: 13 }}>
                        © 2026 NexaWeb. All rights reserved. Built with ❤️ and lots of coffee.
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                        {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                style={{
                                    color: "rgba(248,250,252,0.3)",
                                    fontSize: 13,
                                    textDecoration: "none",
                                    transition: "color 0.2s",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.color =
                                        "rgba(248,250,252,0.6)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.color =
                                        "rgba(248,250,252,0.3)";
                                }}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
