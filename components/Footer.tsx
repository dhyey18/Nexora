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
                borderTop: "1px solid var(--border)",
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
                        "radial-gradient(ellipse at 50% 0%, rgba(var(--primary-rgb),0.07) 0%, transparent 50%)",
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
                                    background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
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
                                    color: "var(--heading-color)",
                                    fontWeight: 700,
                                    fontSize: 19,
                                    fontFamily: "Poppins, sans-serif",
                                }}
                            >
                                Cata<span className="gradient-text">lyq</span>
                            </span>
                        </div>
                        <p
                            style={{
                                color: "var(--text-secondary)",
                                fontSize: 14,
                                lineHeight: 1.7,
                                marginBottom: 12,
                                maxWidth: 280,
                            }}
                        >
                            We build modern, high-performance websites that help businesses grow their online
                            presence and drive real revenue results.
                        </p>
                        <p
                            style={{
                                color: "var(--text-tertiary)",
                                fontSize: 13,
                                lineHeight: 1.7,
                                marginBottom: 8,
                                maxWidth: 280,
                            }}
                        >
                            📍 Prahlad Nagar, Ahmedabad, Gujarat 380015
                        </p>
                        <p
                            style={{
                                color: "var(--text-tertiary)",
                                fontSize: 13,
                                lineHeight: 1.7,
                                marginBottom: 8,
                                maxWidth: 280,
                            }}
                        >
                            📞 +91 94291 84788 &nbsp;|&nbsp; +91 93238 30436
                        </p>
                        <p
                            style={{
                                color: "var(--text-tertiary)",
                                fontSize: 13,
                                lineHeight: 1.7,
                                marginBottom: 24,
                                maxWidth: 280,
                            }}
                        >
                            Founded by <strong style={{ color: "var(--text-secondary)" }}>Dhyey Patel</strong> &amp; <strong style={{ color: "var(--text-secondary)" }}>Manasvi Shah</strong>
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
                                        background: "var(--glass)",
                                        border: "1px solid var(--border)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "var(--text-secondary)",
                                        textDecoration: "none",
                                        transition: "color 0.2s, border-color 0.2s, background 0.2s",
                                    }}
                                    onMouseEnter={(e) => {
                                        const el = e.currentTarget as HTMLAnchorElement;
                                        el.style.color = "var(--foreground)";
                                        el.style.borderColor = "rgba(var(--primary-rgb),0.4)";
                                        el.style.background = "rgba(var(--primary-rgb),0.1)";
                                    }}
                                    onMouseLeave={(e) => {
                                        const el = e.currentTarget as HTMLAnchorElement;
                                        el.style.color = "var(--text-secondary)";
                                        el.style.borderColor = "var(--border)";
                                        el.style.background = "var(--glass)";
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
                                background: "rgba(var(--primary-light-rgb),0.1)",
                                border: "1px solid rgba(var(--primary-light-rgb),0.25)",
                                borderRadius: 100,
                                padding: "6px 14px",
                            }}
                        >
                            <span
                                style={{
                                    width: 8,
                                    height: 8,
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

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <div
                                style={{
                                    color: "var(--heading-color)",
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
                                                color: "var(--text-tertiary)",
                                                fontSize: 14,
                                                textDecoration: "none",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 4,
                                                transition: "color 0.2s",
                                            }}
                                            onMouseEnter={(e) => {
                                                (e.currentTarget as HTMLAnchorElement).style.color = "var(--foreground)";
                                            }}
                                            onMouseLeave={(e) => {
                                                (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-tertiary)";
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
                        background: "linear-gradient(135deg, rgba(var(--primary-rgb),0.15), rgba(var(--primary-light-rgb),0.1))",
                        border: "1px solid rgba(var(--primary-rgb),0.3)",
                    }}
                >
                    <div>
                        <div
                            style={{
                                color: "var(--heading-color)",
                                fontWeight: 700,
                                fontSize: 18,
                                marginBottom: 4,
                                fontFamily: "Poppins, sans-serif",
                            }}
                        >
                            Ready to upgrade your website?
                        </div>
                        <div style={{ color: "var(--text-secondary)", fontSize: 14 }}>
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
                        borderTop: "1px solid var(--border)",
                    }}
                >
                    <p style={{ color: "var(--text-tertiary)", fontSize: 13 }}>
                        © 2026 Catalyq. All rights reserved. Built with ❤️ from Ahmedabad, India.
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                        {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                style={{
                                    color: "var(--text-tertiary)",
                                    fontSize: 13,
                                    textDecoration: "none",
                                    transition: "color 0.2s",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-tertiary)";
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
