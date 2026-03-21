"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Palette, Search, Smartphone, Shield, TrendingUp, CheckCircle2 } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Blazing Fast Performance",
        description:
            "We optimize every line of code to achieve sub-2-second load times. Fast sites rank higher and convert more.",
        stat: "< 2s",
        statLabel: "Avg Load Time",
        color: "#D97706",
    },
    {
        icon: Palette,
        title: "Modern UI/UX Design",
        description:
            "Beautiful, intuitive interfaces crafted with the latest design trends. First impressions matter — we make them count.",
        stat: "98%",
        statLabel: "Satisfaction",
        color: "#2D6A4F",
    },
    {
        icon: Search,
        title: "SEO Friendly Structure",
        description:
            "Every website we build is optimized for search engines from day one — semantic HTML, meta tags, schema markup.",
        stat: "3x",
        statLabel: "More Traffic",
        color: "#059669",
    },
    {
        icon: Smartphone,
        title: "Mobile-First Approach",
        description:
            "Over 60% of web traffic is mobile. We design and build mobile-first websites that look perfect on every screen.",
        stat: "60%",
        statLabel: "Mobile Traffic",
        color: "#0284C7",
    },
    {
        icon: Shield,
        title: "Secure & Scalable",
        description:
            "Enterprise-grade security, SSL certificates, and scalable architecture that grows with your business needs.",
        stat: "99.9%",
        statLabel: "Uptime SLA",
        color: "#7C3AED",
    },
    {
        icon: TrendingUp,
        title: "Conversion Optimized",
        description:
            "Every element is strategically placed to guide visitors toward taking action — calls-to-action that actually convert.",
        stat: "40%",
        statLabel: "Better CVR",
        color: "#E11D48",
    },
];

function FeatureRow({ feature, index }: { feature: typeof features[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.25 });
    const Icon = feature.icon;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 16,
                padding: "18px 20px",
                borderRadius: 14,
                border: "1px solid var(--border)",
                background: "var(--card-bg)",
                transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
                cursor: "pointer",
            }}
            whileHover={{
                y: -2,
            }}
        >
            {/* Check icon */}
            <CheckCircle2
                size={18}
                style={{ color: feature.color, flexShrink: 0, marginTop: 1 }}
            />

            <div style={{ flex: 1, minWidth: 0 }}>
                <h3
                    style={{
                        color: "var(--heading-color)",
                        fontWeight: 600,
                        fontSize: 15,
                        marginBottom: 4,
                        lineHeight: 1.3,
                    }}
                >
                    {feature.title}
                </h3>
                <p
                    style={{
                        color: "var(--text-secondary)",
                        fontSize: 13,
                        lineHeight: 1.6,
                    }}
                >
                    {feature.description}
                </p>
            </div>

            {/* Stat */}
            <div style={{ flexShrink: 0, textAlign: "right" }}>
                <div
                    style={{
                        fontSize: 18,
                        fontWeight: 700,
                        color: feature.color,
                        fontFamily: "Poppins, sans-serif",
                        lineHeight: 1.2,
                    }}
                >
                    {feature.stat}
                </div>
                <div style={{ fontSize: 11, color: "var(--text-tertiary)", marginTop: 1 }}>
                    {feature.statLabel}
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
            {/* Top border */}
            <div className="divider-gradient" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
            {/* Bottom border */}
            <div className="divider-gradient" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />

            {/* Subtle glow */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    right: 0,
                    width: 360,
                    height: 360,
                    borderRadius: "50%",
                    transform: "translateY(-50%)",
                    background: "radial-gradient(circle, rgba(var(--primary-rgb),0.07) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div className="container">
                <div
                    ref={ref}
                    className="custom-grid lg-grid-cols-2"
                    style={{ gap: "48px 64px", alignItems: "flex-start" }}
                >
                    {/* Left — sticky heading */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -24 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            style={{ marginBottom: 18 }}
                        >
                            <div className="section-tag">✦ Why Choose Us</div>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, x: -24 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.1 }}
                            style={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "clamp(1.875rem, 4vw, 2.875rem)",
                                fontWeight: 800,
                                marginBottom: 18,
                                color: "var(--heading-color)",
                                lineHeight: 1.15,
                                letterSpacing: "-0.015em",
                            }}
                        >
                            We Don&apos;t Just Build Websites
                            <br />
                            — We Build{" "}
                            <span className="gradient-text">Growth Engines</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -24 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            style={{
                                color: "var(--text-secondary)",
                                fontSize: 16,
                                lineHeight: 1.72,
                                marginBottom: 36,
                            }}
                        >
                            We combine cutting-edge technology with proven design strategies to create websites
                            that don&apos;t just look good — they perform. Our websites are built to rank, convert,
                            and scale.
                        </motion.p>

                        {/* Mini stat cards */}
                        <motion.div
                            initial={{ opacity: 0, x: -24 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.3 }}
                            className="custom-grid sm-grid-cols-3"
                            style={{ gap: 12 }}
                        >
                            {[
                                { value: "2+", label: "Websites Built" },
                                { value: "4yr+", label: "Experience" },
                                { value: "24/7", label: "Support" },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="card-clean"
                                    style={{ padding: "16px 10px", textAlign: "center", borderRadius: 12 }}
                                >
                                    <div
                                        className="gradient-text"
                                        style={{
                                            fontSize: "clamp(1.2rem, 4vw, 1.55rem)",
                                            fontWeight: 800,
                                            fontFamily: "Poppins, sans-serif",
                                            display: "block",
                                            marginBottom: 3,
                                        }}
                                    >
                                        {item.value}
                                    </div>
                                    <div style={{ color: "var(--text-secondary)", fontSize: 12, lineHeight: 1.3 }}>
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right — feature rows */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        {features.map((feature, index) => (
                            <FeatureRow key={feature.title} feature={feature} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
