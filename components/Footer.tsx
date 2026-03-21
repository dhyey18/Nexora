"use client";

import { motion } from "framer-motion";
import { Zap, Twitter, Linkedin, Instagram, Github, MapPin, Phone, ArrowRight } from "lucide-react";

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
    const handleNav = (href: string) => {
        if (href.startsWith("#")) {
            document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer
            style={{
                position: "relative",
                background: "#071210",
                overflow: "hidden",
                paddingTop: 72,
                paddingBottom: 32,
            }}
        >
            {/* Top border accent */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 1,
                    background: "linear-gradient(90deg, transparent, rgba(var(--primary-light-rgb),0.4), transparent)",
                }}
            />

            {/* Subtle top glow */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 600,
                    height: 200,
                    pointerEvents: "none",
                    background: "radial-gradient(ellipse at 50% 0%, rgba(var(--primary-rgb),0.1) 0%, transparent 70%)",
                }}
            />

            <div className="container" style={{ position: "relative", zIndex: 10 }}>
                {/* Main grid: Brand + 3 columns */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(min(180px, 100%), 1fr))",
                        gap: "40px 32px",
                        marginBottom: 60,
                    }}
                >
                    {/* Brand column */}
                    <div style={{ minWidth: 260, gridColumn: "span min(2, 100%)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 14 }}>
                            <div
                                style={{
                                    width: 34,
                                    height: 34,
                                    borderRadius: 9,
                                    background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                }}
                            >
                                <Zap size={16} color="#fff" />
                            </div>
                            <span
                                style={{
                                    color: "#ffffff",
                                    fontWeight: 700,
                                    fontSize: 18,
                                    fontFamily: "Poppins, sans-serif",
                                }}
                            >
                                Cata<span className="gradient-text">lyq</span>
                            </span>
                        </div>
                        <p
                            style={{
                                color: "rgba(255,255,255,0.52)",
                                fontSize: 14,
                                lineHeight: 1.72,
                                marginBottom: 16,
                                maxWidth: 270,
                            }}
                        >
                            We build modern, high-performance websites that help businesses grow their online
                            presence and drive real revenue results.
                        </p>

                        {/* Contact info */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <MapPin size={13} style={{ color: "var(--primary-light)", flexShrink: 0 }} />
                                <span style={{ color: "rgba(255,255,255,0.42)", fontSize: 13 }}>
                                    Prahlad Nagar, Ahmedabad, Gujarat 380015
                                </span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <Phone size={13} style={{ color: "var(--primary-light)", flexShrink: 0 }} />
                                <span style={{ color: "rgba(255,255,255,0.42)", fontSize: 13 }}>
                                    +91 94291 84788 · +91 93238 30436
                                </span>
                            </div>
                        </div>

                        {/* Social links */}
                        <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
                            {socials.map(({ icon: Icon, label, href }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    whileHover={{ y: -3, scale: 1.08 }}
                                    style={{
                                        width: 34,
                                        height: 34,
                                        borderRadius: 9,
                                        background: "rgba(255,255,255,0.06)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "rgba(255,255,255,0.5)",
                                        textDecoration: "none",
                                        transition: "color 0.2s, border-color 0.2s, background 0.2s",
                                    }}
                                    onMouseEnter={(e) => {
                                        const el = e.currentTarget as HTMLAnchorElement;
                                        el.style.color = "var(--primary-light)";
                                        el.style.borderColor = "rgba(var(--primary-light-rgb),0.35)";
                                        el.style.background = "rgba(var(--primary-rgb),0.12)";
                                    }}
                                    onMouseLeave={(e) => {
                                        const el = e.currentTarget as HTMLAnchorElement;
                                        el.style.color = "rgba(255,255,255,0.5)";
                                        el.style.borderColor = "rgba(255,255,255,0.1)";
                                        el.style.background = "rgba(255,255,255,0.06)";
                                    }}
                                >
                                    <Icon size={14} />
                                </motion.a>
                            ))}
                        </div>

                        {/* Status badge */}
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 7,
                                background: "rgba(var(--primary-rgb),0.15)",
                                border: "1px solid rgba(var(--primary-light-rgb),0.25)",
                                borderRadius: 100,
                                padding: "5px 13px",
                            }}
                        >
                            <span
                                style={{
                                    width: 7,
                                    height: 7,
                                    borderRadius: "50%",
                                    background: "var(--primary-light)",
                                    display: "inline-block",
                                    animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                                }}
                            />
                            <span style={{ color: "var(--primary-light)", fontSize: 12, fontWeight: 500 }}>
                                Accepting new projects
                            </span>
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <div
                                style={{
                                    color: "#ffffff",
                                    fontWeight: 600,
                                    fontSize: 12,
                                    marginBottom: 16,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.08em",
                                }}
                            >
                                {category}
                            </div>
                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 11 }}>
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            onClick={(e) => {
                                                if (link.href.startsWith("#")) {
                                                    e.preventDefault();
                                                    handleNav(link.href);
                                                }
                                            }}
                                            style={{
                                                color: "rgba(255,255,255,0.42)",
                                                fontSize: 14,
                                                textDecoration: "none",
                                                transition: "color 0.2s",
                                            }}
                                            onMouseEnter={(e) => {
                                                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.82)";
                                            }}
                                            onMouseLeave={(e) => {
                                                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.42)";
                                            }}
                                        >
                                            {link.label}
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
                        borderRadius: 16,
                        padding: "28px 32px",
                        marginBottom: 36,
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 20,
                        background: "linear-gradient(135deg, rgba(var(--primary-rgb),0.2), rgba(var(--primary-light-rgb),0.12))",
                        border: "1px solid rgba(var(--primary-light-rgb),0.2)",
                    }}
                >
                    <div>
                        <div
                            style={{
                                color: "#ffffff",
                                fontWeight: 700,
                                fontSize: 17,
                                marginBottom: 4,
                                fontFamily: "Poppins, sans-serif",
                            }}
                        >
                            Ready to upgrade your website?
                        </div>
                        <div style={{ color: "rgba(255,255,255,0.52)", fontSize: 14 }}>
                            Free consultation call · No commitment required
                        </div>
                    </div>
                    <motion.a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="btn-primary"
                        style={{ whiteSpace: "nowrap" }}
                    >
                        Get Started Free <ArrowRight size={16} />
                    </motion.a>
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 10,
                        paddingTop: 20,
                        borderTop: "1px solid rgba(255,255,255,0.08)",
                    }}
                >
                    <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>
                        © 2026 Catalyq. All rights reserved. Built with ❤️ from Ahmedabad, India.
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                        {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                style={{
                                    color: "rgba(255,255,255,0.3)",
                                    fontSize: 13,
                                    textDecoration: "none",
                                    transition: "color 0.2s",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.3)";
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
