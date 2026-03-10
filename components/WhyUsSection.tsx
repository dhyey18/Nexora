"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Palette, Search, Smartphone, Shield, TrendingUp } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Blazing Fast Performance",
        description:
            "We optimize every line of code to achieve sub-2-second load times. Fast sites rank higher and convert more.",
        stat: "< 2s",
        statLabel: "Avg Load Time",
        color: "#f59e0b",
        bg: "rgba(245,158,11,0.1)",
        border: "rgba(245,158,11,0.25)",
    },
    {
        icon: Palette,
        title: "Modern UI/UX Design",
        description:
            "Beautiful, intuitive interfaces crafted with the latest design trends. First impressions matter — we make them count.",
        stat: "98%",
        statLabel: "Satisfaction",
        color: "#6366f1",
        bg: "rgba(99,102,241,0.1)",
        border: "rgba(99,102,241,0.25)",
    },
    {
        icon: Search,
        title: "SEO Friendly Structure",
        description:
            "Every website we build is optimized for search engines from day one — semantic HTML, meta tags, schema markup.",
        stat: "3x",
        statLabel: "More Traffic",
        color: "#10b981",
        bg: "rgba(16,185,129,0.1)",
        border: "rgba(16,185,129,0.25)",
    },
    {
        icon: Smartphone,
        title: "Mobile-First Approach",
        description:
            "Over 60% of web traffic is mobile. We design and build mobile-first websites that look perfect on every screen.",
        stat: "60%",
        statLabel: "Mobile Traffic",
        color: "#0ea5e9",
        bg: "rgba(14,165,233,0.1)",
        border: "rgba(14,165,233,0.25)",
    },
    {
        icon: Shield,
        title: "Secure & Scalable",
        description:
            "Enterprise-grade security, SSL certificates, and scalable architecture that grows with your business needs.",
        stat: "99.9%",
        statLabel: "Uptime SLA",
        color: "#8b5cf6",
        bg: "rgba(139,92,246,0.1)",
        border: "rgba(139,92,246,0.25)",
    },
    {
        icon: TrendingUp,
        title: "Conversion Optimized",
        description:
            "Every element is strategically placed to guide visitors toward taking action — calls-to-action that actually convert.",
        stat: "40%",
        statLabel: "Better CVR",
        color: "#ec4899",
        bg: "rgba(236,72,153,0.1)",
        border: "rgba(236,72,153,0.25)",
    },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const Icon = feature.icon;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
            className="group"
            style={{
                position: "relative",
                borderRadius: 16,
                padding: "20px 24px",
                background: feature.bg,
                border: `1px solid ${feature.border}`,
                transition: "border-color 0.3s ease",
                overflow: "hidden",
                cursor: "pointer",
            }}
        >
            {/* Subtle glow on hover */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0,
                    transition: "opacity 0.5s ease",
                    background: `radial-gradient(circle at 50% 0%, ${feature.bg} 0%, transparent 100%)`,
                    pointerEvents: "none",
                }}
                className="group-hover:opacity-100"
            />

            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                }}
            >
                {/* Icon */}
                <div
                    style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        background: feature.bg,
                        border: `1px solid ${feature.border}`,
                    }}
                >
                    <Icon size={20} style={{ color: feature.color }} />
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                    <h3
                        style={{
                            color: "#f8fafc",
                            fontWeight: 600,
                            fontSize: 15,
                            marginBottom: 6,
                            lineHeight: 1.3,
                        }}
                    >
                        {feature.title}
                    </h3>
                    <p
                        style={{
                            color: "rgba(248,250,252,0.55)",
                            fontSize: 13,
                            lineHeight: 1.6,
                        }}
                    >
                        {feature.description}
                    </p>
                </div>

                {/* Stat badge */}
                <div style={{ flexShrink: 0, textAlign: "right" }}>
                    <div
                        style={{
                            fontSize: 20,
                            fontWeight: 700,
                            color: feature.color,
                            fontFamily: "Poppins, sans-serif",
                            lineHeight: 1.2,
                        }}
                    >
                        {feature.stat}
                    </div>
                    <div style={{ fontSize: 11, color: "rgba(248,250,252,0.4)", marginTop: 2 }}>
                        {feature.statLabel}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function WhyUsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section id="why-us" className="section" style={{ position: "relative", overflow: "hidden" }}>
            {/* Top/bottom accent lines */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 1,
                    background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 1,
                    background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)",
                }}
            />

            <div className="container">
                <div
                    ref={ref}
                    className="custom-grid lg-grid-cols-2"
                    style={{ gap: 48, alignItems: "flex-start" }}
                >
                    {/* Left */}
                    <div style={{ position: "sticky", top: 128 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            style={{ display: "flex", marginBottom: 20 }}
                        >
                            <div className="section-tag">✦ Why Choose Us</div>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.1 }}
                            style={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "clamp(1.875rem, 4vw, 3rem)",
                                fontWeight: 800,
                                marginBottom: 20,
                                color: "#f8fafc",
                                lineHeight: 1.15,
                            }}
                        >
                            We Don&apos;t Just Build
                            <br />
                            Websites — We Build
                            <br />
                            <span className="gradient-text">Growth Engines</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            style={{
                                color: "rgba(248,250,252,0.55)",
                                fontSize: 17,
                                lineHeight: 1.7,
                                marginBottom: 32,
                            }}
                        >
                            We combine cutting-edge technology with proven design strategies to create websites
                            that don&apos;t just look good — they perform. Our websites are built to rank, convert,
                            and scale.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.3 }}
                            style={{ display: "flex", gap: 12 }}
                        >
                            {[
                                { value: "150+", label: "Websites Built" },
                                { value: "4yr+", label: "Experience" },
                                { value: "24/7", label: "Support" },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="glass-card rounded-2xl"
                                    style={{ flex: 1, padding: "20px 12px", textAlign: "center" }}
                                >
                                    <div
                                        className="gradient-text"
                                        style={{
                                            fontSize: "1.6rem",
                                            fontWeight: 800,
                                            fontFamily: "Poppins, sans-serif",
                                            display: "block",
                                            marginBottom: 4,
                                        }}
                                    >
                                        {item.value}
                                    </div>
                                    <div style={{ color: "rgba(248,250,252,0.5)", fontSize: 12 }}>
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        {features.map((feature, index) => (
                            <FeatureCard key={feature.title} feature={feature} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
