"use client";

import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

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

export default function Footer() {
    const handleNav = (href: string) => {
        if (href.startsWith("#")) {
            document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer
            style={{
                background: "var(--background)",
                borderTop: "1px solid var(--border)",
                paddingTop: 56,
                paddingBottom: 24,
            }}
        >
            <div className="container">
                {/* Links grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1.5fr repeat(3, 1fr)",
                        gap: "48px 32px",
                        marginBottom: 48,
                    }}
                    className="custom-grid md-grid-cols-4"
                >
                    {/* Brand */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
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
                                color: "var(--heading-color)",
                                fontWeight: 600,
                                fontSize: 17,
                                letterSpacing: "-0.02em",
                            }}>
                                Catalyq
                            </span>
                        </div>
                        <p
                            style={{
                                color: "var(--text-secondary)",
                                fontSize: 13,
                                lineHeight: 1.65,
                                marginBottom: 24,
                                maxWidth: 260,
                            }}
                        >
                            We build modern, high-performance websites that help businesses grow their online presence and drive real results.
                        </p>

                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                <MapPin size={13} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} />
                                <span style={{ color: "var(--text-tertiary)", fontSize: 13 }}>
                                    Ahmedabad, Gujarat, India
                                </span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                <Phone size={13} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} />
                                <span style={{ color: "var(--text-tertiary)", fontSize: 13 }}>
                                    +91 94291 84788
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <div
                                style={{
                                    color: "var(--heading-color)",
                                    fontWeight: 600,
                                    fontSize: 12,
                                    marginBottom: 18,
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
                                                    handleNav(link.href);
                                                }
                                            }}
                                            style={{
                                                color: "var(--text-tertiary)",
                                                fontSize: 13,
                                                textDecoration: "none",
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
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div
                    style={{
                        borderTop: "1px solid var(--border)",
                        paddingTop: 20,
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 8,
                    }}
                >
                    <p style={{ color: "var(--text-tertiary)", fontSize: 12 }}>
                        Copyright © 2026 Catalyq. All rights reserved.
                    </p>
                    <div style={{ display: "flex", gap: 20 }}>
                        {["Privacy Policy", "Terms of Use", "Legal"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                style={{
                                    color: "var(--text-tertiary)",
                                    fontSize: 12,
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
