"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Timer, Palette, Search, Smartphone, Shield, BarChart3 } from "lucide-react";

const features = [
    {
        icon: Timer,
        number: "< 2s",
        title: "Blazing Fast Performance",
        description: "We optimize every line of code. Sub-2-second load times mean higher rankings and more conversions.",
        color: "#2997FF",
    },
    {
        icon: Palette,
        number: "98%",
        title: "Modern UI/UX Design",
        description: "Beautiful interfaces crafted with the latest design trends. First impressions matter — we make them count.",
        color: "#BF5AF2",
    },
    {
        icon: Search,
        number: "3×",
        title: "SEO-First Architecture",
        description: "Every site is built for search engines from day one — semantic HTML, schema markup, performance.",
        color: "#30D158",
    },
    {
        icon: Smartphone,
        number: "60%",
        title: "Mobile-First Approach",
        description: "Over 60% of web traffic is mobile. We build mobile-first websites that look perfect on every screen.",
        color: "#FF9F0A",
    },
    {
        icon: Shield,
        number: "99.9%",
        title: "Enterprise-Grade Security",
        description: "SSL certificates, DDoS protection, and scalable architecture that grows with your business.",
        color: "#FF375F",
    },
    {
        icon: BarChart3,
        number: "40%",
        title: "Conversion Optimized",
        description: "Strategic CTAs, A/B-tested layouts, and data-driven decisions that turn visitors into revenue.",
        color: "#64D2FF",
    },
];

export default function WhyUsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section id="why-us" className="section-dark">
            <div className="container">
                {/* Header */}
                <div ref={ref} style={{ textAlign: "center", marginBottom: 64 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                    >
                        <div className="section-tag">Why Catalyq</div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                            fontWeight: 700,
                            color: "#F5F5F7",
                            lineHeight: 1.08,
                            letterSpacing: "-0.03em",
                            marginBottom: 16,
                        }}
                    >
                        Not just websites.
                        <br />
                        <span className="gradient-text">Growth engines.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        style={{
                            color: "#A1A1A6",
                            fontSize: 17,
                            maxWidth: 460,
                            margin: "0 auto",
                            lineHeight: 1.55,
                        }}
                    >
                        We combine cutting-edge technology with proven design strategies to deliver measurable results.
                    </motion.p>
                </div>

                {/* Feature grid */}
                <div className="custom-grid md-grid-cols-2 lg-grid-cols-3" style={{ gap: 12 }}>
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.15 + index * 0.07 }}
                                className="bento-card"
                                style={{ cursor: "default" }}
                            >
                                {/* Icon + Number row */}
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                                    <div
                                        style={{
                                            width: 44,
                                            height: 44,
                                            borderRadius: 13,
                                            background: `${feature.color}12`,
                                            border: `1px solid ${feature.color}20`,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Icon size={20} style={{ color: feature.color }} />
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "clamp(1.5rem, 3vw, 2rem)",
                                            fontWeight: 800,
                                            letterSpacing: "-0.04em",
                                            color: feature.color,
                                            lineHeight: 1,
                                        }}
                                    >
                                        {feature.number}
                                    </div>
                                </div>

                                <h3
                                    style={{
                                        color: "#F5F5F7",
                                        fontWeight: 600,
                                        fontSize: 17,
                                        marginBottom: 8,
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    {feature.title}
                                </h3>
                                <p style={{ color: "#A1A1A6", fontSize: 14, lineHeight: 1.6 }}>
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
