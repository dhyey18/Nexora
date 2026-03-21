"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
    Globe,
    RefreshCw,
    TrendingUp,
    Zap,
    ShoppingCart,
    Layout,
    ArrowRight,
} from "lucide-react";

const services = [
    {
        icon: Globe,
        title: "Website Development",
        description:
            "Custom-built, pixel-perfect websites tailored to your brand and business goals. Fast, secure, and built on modern tech.",
        gradient: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
        glow: "rgba(var(--primary-rgb),0.25)",
        tags: ["React", "Next.js", "TypeScript"],
    },
    {
        icon: RefreshCw,
        title: "Business Website Redesign",
        description:
            "Transform your outdated website into a modern, conversion-optimized digital experience that impresses visitors.",
        gradient: "linear-gradient(135deg, #a855f7, #db2777)",
        glow: "rgba(168,85,247,0.25)",
        tags: ["UI/UX", "Figma", "Branding"],
    },
    {
        icon: TrendingUp,
        title: "SEO Optimization",
        description:
            "Rank higher on Google with our data-driven SEO strategies. Get found by customers actively searching for your services.",
        gradient: "linear-gradient(135deg, #22c55e, #059669)",
        glow: "rgba(16,185,129,0.25)",
        tags: ["On-Page SEO", "Schema", "Core Web Vitals"],
    },
    {
        icon: Zap,
        title: "Performance Optimization",
        description:
            "Lightning-fast page speeds that boost user retention and conversion rates. Optimize every millisecond that counts.",
        gradient: "linear-gradient(135deg, #eab308, #f97316)",
        glow: "rgba(245,158,11,0.25)",
        tags: ["Web Vitals", "CDN", "Caching"],
    },
    {
        icon: ShoppingCart,
        title: "E-commerce Websites",
        description:
            "Powerful online stores with seamless checkout experiences, inventory management, and payment gateway integrations.",
        gradient: "linear-gradient(135deg, #0ea5e9, #0891b2)",
        glow: "rgba(14,165,233,0.25)",
        tags: ["Shopify", "WooCommerce", "Stripe"],
    },
    {
        icon: Layout,
        title: "Landing Pages",
        description:
            "High-converting landing pages engineered to turn visitors into leads and leads into loyal customers.",
        gradient: "linear-gradient(135deg, #f43f5e, #dc2626)",
        glow: "rgba(244,63,94,0.25)",
        tags: ["A/B Testing", "CRO", "Analytics"],
    },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const Icon = service.icon;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-2xl group"
            style={{
                padding: "28px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                height: "100%",
            }}
        >
            {/* Hover glow */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0,
                    transition: "opacity 0.5s ease",
                    background: `radial-gradient(circle at center, ${service.glow} 0%, transparent 70%)`,
                    borderRadius: "inherit",
                    pointerEvents: "none",
                }}
                className="group-hover:opacity-100"
            />

            {/* Icon */}
            <div
                style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: service.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                    flexShrink: 0,
                    transition: "transform 0.3s ease",
                }}
                className="group-hover:scale-110"
            >
                <Icon size={22} color="#ffffff" />
            </div>

            {/* Content */}
            <h3
                style={{
                    color: "var(--heading-color)",
                    fontWeight: 600,
                    fontSize: 17,
                    marginBottom: 10,
                    lineHeight: 1.3,
                }}
            >
                {service.title}
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.65, marginBottom: 16 }}>
                {service.description}
            </p>

            {/* Tags */}
            <div style={{ flex: 1 }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
                    {service.tags.map((tag) => (
                        <span
                            key={tag}
                            style={{
                                fontSize: 11,
                                padding: "4px 10px",
                                borderRadius: 100,
                                background: "var(--glass)",
                                border: "1px solid var(--border)",
                                color: "var(--text-secondary)",
                                fontWeight: 500,
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    color: "var(--primary-light)",
                    fontSize: 13,
                    fontWeight: 500,
                    transition: "gap 0.2s ease",
                }}
                className="group-hover:gap-2"
            >
                Learn more{" "}
                <ArrowRight
                    size={14}
                    style={{ transition: "transform 0.2s ease" }}
                    className="group-hover:translate-x-1"
                />
            </div>

            {/* Corner decoration */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 96,
                    height: 96,
                    borderBottomLeftRadius: "100%",
                    opacity: 0.1,
                    background: service.gradient,
                    pointerEvents: "none",
                }}
            />
        </motion.div>
    );
}

export default function ServicesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section id="services" className="section">
            {/* Background */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    background:
                        "radial-gradient(ellipse at 50% 50%, rgba(var(--primary-rgb),0.07) 0%, transparent 70%)",
                }}
            />

            <div className="container" style={{ position: "relative", zIndex: 10 }}>
                {/* Header */}
                <div ref={ref} style={{ textAlign: "center", marginBottom: 64 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        style={{ display: "flex", justifyContent: "center" }}
                    >
                        <div className="section-tag">✦ Our Services</div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "clamp(1.875rem, 4vw, 3rem)",
                            fontWeight: 800,
                            marginBottom: 16,
                            color: "var(--heading-color)",
                            lineHeight: 1.15,
                        }}
                    >
                        Everything You Need to
                        <br />
                        <span className="gradient-text">Dominate Online</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        style={{
                            color: "var(--text-secondary)",
                            fontSize: 17,
                            maxWidth: 560,
                            margin: "0 auto",
                            lineHeight: 1.7,
                        }}
                    >
                        From initial concept to launch and beyond, we provide end-to-end web solutions
                        that make your business stand out in a crowded digital landscape.
                    </motion.p>
                </div>

                {/* Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: 24,
                    }}
                >
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
