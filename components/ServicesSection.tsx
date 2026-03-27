"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    Globe,
    RefreshCw,
    TrendingUp,
    Zap,
    ShoppingCart,
} from "lucide-react";

const services = [
    {
        icon: Globe,
        title: "Website Development",
        description: "Custom-built, pixel-perfect websites tailored to your brand. Fast, secure, and built on modern frameworks.",
        tags: ["React", "Next.js", "TypeScript"],
        color: "#2997FF",
    },
    {
        icon: RefreshCw,
        title: "Business Redesign",
        description: "Transform your outdated site into a modern, conversion-optimized digital experience that drives growth.",
        tags: ["UI/UX", "Figma", "Branding"],
        color: "#BF5AF2",
    },
    {
        icon: TrendingUp,
        title: "SEO Optimization",
        description: "Rank higher on Google with data-driven SEO strategies. Schema markup, Core Web Vitals, and content optimization.",
        tags: ["On-Page", "Schema", "Analytics"],
        color: "#30D158",
    },
    {
        icon: Zap,
        title: "Performance",
        description: "Lightning-fast page speeds that boost retention, improve SEO rankings, and increase your conversion rate.",
        tags: ["Web Vitals", "CDN", "Caching"],
        color: "#FF9F0A",
    },
    {
        icon: ShoppingCart,
        title: "E-Commerce",
        description: "Powerful online stores with seamless checkout, inventory management, and payment gateway integration.",
        tags: ["Shopify", "Stripe", "UPI"],
        color: "#FF375F",
    },
];

export default function ServicesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section id="services" className="section-alt">
            <div className="container" style={{ position: "relative", zIndex: 10 }}>
                {/* Header */}
                <div ref={ref} style={{ textAlign: "center", marginBottom: 56 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                    >
                        <div className="section-tag">Our Services</div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                            fontWeight: 700,
                            marginBottom: 14,
                            color: "var(--heading-color)",
                            lineHeight: 1.08,
                            letterSpacing: "-0.03em",
                        }}
                    >
                        Everything you need to
                        <br />
                        <span className="gradient-text">dominate online.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        style={{
                            color: "var(--text-secondary)",
                            fontSize: 17,
                            maxWidth: 460,
                            margin: "0 auto",
                            lineHeight: 1.55,
                        }}
                    >
                        End-to-end web solutions designed to make your business stand out and grow.
                    </motion.p>
                </div>

                {/* Bento grid — 2 large + 3 small */}
                <div style={{ display: "grid", gap: 12 }}>
                    {/* Top: 2 large */}
                    <div className="custom-grid lg-grid-cols-2" style={{ gap: 12 }}>
                        {services.slice(0, 2).map((service, i) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.15 + i * 0.1 }}
                                    className="bento-card"
                                    style={{ cursor: "pointer" }}
                                >
                                    {/* Subtle colored glow */}
                                    <div style={{
                                        position: "absolute",
                                        top: -40,
                                        right: -40,
                                        width: 200,
                                        height: 200,
                                        borderRadius: "50%",
                                        background: `radial-gradient(circle, ${service.color}10 0%, transparent 70%)`,
                                        pointerEvents: "none",
                                    }} />

                                    <div
                                        style={{
                                            width: 48,
                                            height: 48,
                                            borderRadius: 14,
                                            background: `${service.color}14`,
                                            border: `1px solid ${service.color}20`,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginBottom: 20,
                                        }}
                                    >
                                        <Icon size={22} style={{ color: service.color }} />
                                    </div>
                                    <h3
                                        style={{
                                            color: "var(--heading-color)",
                                            fontWeight: 600,
                                            fontSize: 22,
                                            marginBottom: 10,
                                            letterSpacing: "-0.02em",
                                        }}
                                    >
                                        {service.title}
                                    </h3>
                                    <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.6, marginBottom: 20 }}>
                                        {service.description}
                                    </p>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                                        {service.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                style={{
                                                    fontSize: 12,
                                                    padding: "5px 12px",
                                                    borderRadius: 980,
                                                    background: "rgba(var(--foreground-rgb), 0.05)",
                                                    border: "1px solid rgba(var(--foreground-rgb), 0.08)",
                                                    color: "var(--text-secondary)",
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Bottom: 3 small */}
                    <div className="custom-grid lg-grid-cols-3" style={{ gap: 12 }}>
                        {services.slice(2).map((service, i) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.35 + i * 0.08 }}
                                    className="bento-card"
                                    style={{ cursor: "pointer" }}
                                >
                                    <div
                                        style={{
                                            width: 42,
                                            height: 42,
                                            borderRadius: 12,
                                            background: `${service.color}14`,
                                            border: `1px solid ${service.color}20`,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginBottom: 16,
                                        }}
                                    >
                                        <Icon size={18} style={{ color: service.color }} />
                                    </div>
                                    <h3
                                        style={{
                                            color: "var(--heading-color)",
                                            fontWeight: 600,
                                            fontSize: 17,
                                            marginBottom: 8,
                                            letterSpacing: "-0.02em",
                                        }}
                                    >
                                        {service.title}
                                    </h3>
                                    <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.55 }}>
                                        {service.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
