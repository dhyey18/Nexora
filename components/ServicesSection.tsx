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
        color: "#2D6A4F",
        colorLight: "rgba(45, 106, 79, 0.12)",
        colorBorder: "rgba(45, 106, 79, 0.3)",
        tags: ["React", "Next.js", "TypeScript"],
    },
    {
        icon: RefreshCw,
        title: "Business Website Redesign",
        description:
            "Transform your outdated website into a modern, conversion-optimized digital experience that impresses visitors.",
        color: "#7C3AED",
        colorLight: "rgba(124, 58, 237, 0.12)",
        colorBorder: "rgba(124, 58, 237, 0.28)",
        tags: ["UI/UX", "Figma", "Branding"],
    },
    {
        icon: TrendingUp,
        title: "SEO Optimization",
        description:
            "Rank higher on Google with our data-driven SEO strategies. Get found by customers actively searching for your services.",
        color: "#059669",
        colorLight: "rgba(5, 150, 105, 0.12)",
        colorBorder: "rgba(5, 150, 105, 0.28)",
        tags: ["On-Page SEO", "Schema", "Core Web Vitals"],
    },
    {
        icon: Zap,
        title: "Performance Optimization",
        description:
            "Lightning-fast page speeds that boost user retention and conversion rates. Optimize every millisecond that counts.",
        color: "#D97706",
        colorLight: "rgba(217, 119, 6, 0.12)",
        colorBorder: "rgba(217, 119, 6, 0.28)",
        tags: ["Web Vitals", "CDN", "Caching"],
    },
    {
        icon: ShoppingCart,
        title: "E-commerce Websites",
        description:
            "Powerful online stores with seamless checkout experiences, inventory management, and payment gateway integrations.",
        color: "#0284C7",
        colorLight: "rgba(2, 132, 199, 0.12)",
        colorBorder: "rgba(2, 132, 199, 0.28)",
        tags: ["Shopify", "WooCommerce", "Stripe"],
    },
    {
        icon: Layout,
        title: "Landing Pages",
        description:
            "High-converting landing pages engineered to turn visitors into leads and leads into loyal customers.",
        color: "#E11D48",
        colorLight: "rgba(225, 29, 72, 0.12)",
        colorBorder: "rgba(225, 29, 72, 0.28)",
        tags: ["A/B Testing", "CRO", "Analytics"],
    },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.15 });
    const Icon = service.icon;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 36 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.09 }}
            className="card-clean group"
            style={{
                padding: "26px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                height: "100%",
            }}
        >
            {/* Icon */}
            <div
                style={{
                    width: 46,
                    height: 46,
                    borderRadius: 11,
                    background: service.colorLight,
                    border: `1px solid ${service.colorBorder}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                    flexShrink: 0,
                    transition: "transform 0.25s ease",
                }}
                className="group-hover:scale-110"
            >
                <Icon size={21} style={{ color: service.color }} />
            </div>

            {/* Content */}
            <h3
                style={{
                    color: "var(--heading-color)",
                    fontWeight: 600,
                    fontSize: 16,
                    marginBottom: 10,
                    lineHeight: 1.35,
                }}
            >
                {service.title}
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.68, marginBottom: 18, flex: 1 }}>
                {service.description}
            </p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                {service.tags.map((tag) => (
                    <span
                        key={tag}
                        style={{
                            fontSize: 11,
                            padding: "3px 9px",
                            borderRadius: 100,
                            background: service.colorLight,
                            border: `1px solid ${service.colorBorder}`,
                            color: service.color,
                            fontWeight: 500,
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* CTA */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    color: "var(--primary-light)",
                    fontSize: 13,
                    fontWeight: 500,
                }}
            >
                Learn more <ArrowRight size={13} />
            </div>
        </motion.div>
    );
}

export default function ServicesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section id="services" className="section-alt">
            {/* Subtle bg accent */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    background:
                        "radial-gradient(ellipse at 50% 0%, rgba(var(--primary-rgb),0.09) 0%, transparent 60%)",
                }}
            />

            <div className="container" style={{ position: "relative", zIndex: 10 }}>
                {/* Header */}
                <div ref={ref} style={{ textAlign: "center", marginBottom: 56 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
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
                            fontSize: "clamp(1.875rem, 4vw, 2.875rem)",
                            fontWeight: 800,
                            marginBottom: 14,
                            color: "var(--heading-color)",
                            lineHeight: 1.15,
                            letterSpacing: "-0.015em",
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
                            fontSize: 16,
                            maxWidth: 520,
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
                        gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
                        gap: 20,
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
