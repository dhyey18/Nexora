"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Lightbulb, Code2, Rocket, CheckCircle2 } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: MessageSquare,
        title: "Discovery & Strategy",
        description: "Deep-dive consultation to understand your business, audience, and goals. A solid strategy is the foundation.",
        duration: "1-2 days",
        color: "#2997FF",
        deliverables: ["Business Analysis", "Competitor Research", "Project Roadmap", "Timeline & Quote"],
    },
    {
        number: "02",
        icon: Lightbulb,
        title: "Design & Prototyping",
        description: "Stunning wireframes and high-fidelity mockups in Figma. We collaborate until the design is perfect.",
        duration: "3-5 days",
        color: "#BF5AF2",
        deliverables: ["Style Guide", "Wireframes", "High-Fi Mockups", "Design Approval"],
    },
    {
        number: "03",
        icon: Code2,
        title: "Development",
        description: "Clean, optimized code with performance and accessibility as first-class priorities throughout.",
        duration: "7-14 days",
        color: "#30D158",
        deliverables: ["Responsive Website", "CMS Integration", "SEO Setup", "Performance Testing"],
    },
    {
        number: "04",
        icon: Rocket,
        title: "Launch & Growth",
        description: "Full deployment, DNS config, and post-launch monitoring. Ongoing support to keep you growing.",
        duration: "1-2 days",
        color: "#FF9F0A",
        deliverables: ["Live Deployment", "Analytics Setup", "Training Session", "30-day Support"],
    },
];

export default function ProcessSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section id="process" className="section-alt">
            <div className="container" style={{ maxWidth: "56rem" }}>
                {/* Header */}
                <div ref={ref} style={{ textAlign: "center", marginBottom: 64 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                    >
                        <div className="section-tag">Our Process</div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                            fontWeight: 700,
                            marginBottom: 14,
                            color: "#F5F5F7",
                            lineHeight: 1.08,
                            letterSpacing: "-0.03em",
                        }}
                    >
                        Simple, transparent &
                        <br />
                        <span className="gradient-text">proven process.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        style={{ color: "#A1A1A6", fontSize: 17, maxWidth: 440, margin: "0 auto", lineHeight: 1.55 }}
                    >
                        No surprises. No delays. Exceptional results, every time.
                    </motion.p>
                </div>

                {/* Steps */}
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 24 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                className="bento-card"
                                style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: 24,
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                {/* Step icon */}
                                <div style={{ flexShrink: 0, position: "relative" }}>
                                    <div
                                        style={{
                                            width: 52,
                                            height: 52,
                                            borderRadius: 16,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            background: `${step.color}12`,
                                            border: `1px solid ${step.color}22`,
                                        }}
                                    >
                                        <Icon size={22} style={{ color: step.color }} />
                                    </div>
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: -6,
                                            right: -6,
                                            width: 22,
                                            height: 22,
                                            borderRadius: 7,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            background: step.color,
                                            color: "#fff",
                                            fontSize: 10,
                                            fontWeight: 700,
                                            boxShadow: `0 2px 8px ${step.color}40`,
                                        }}
                                    >
                                        {index + 1}
                                    </div>
                                </div>

                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 10 }}>
                                        <h3 style={{ color: "#F5F5F7", fontWeight: 600, fontSize: 18, letterSpacing: "-0.02em" }}>
                                            {step.title}
                                        </h3>
                                        <span
                                            style={{
                                                fontSize: 12,
                                                fontWeight: 500,
                                                padding: "5px 14px",
                                                borderRadius: 980,
                                                background: `${step.color}12`,
                                                border: `1px solid ${step.color}22`,
                                                color: step.color,
                                            }}
                                        >
                                            ⏱ {step.duration}
                                        </span>
                                    </div>
                                    <p style={{ color: "#A1A1A6", fontSize: 14, lineHeight: 1.6, marginBottom: 18 }}>
                                        {step.description}
                                    </p>
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
                                        {step.deliverables.map((item) => (
                                            <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                                <CheckCircle2 size={13} style={{ color: step.color, flexShrink: 0 }} />
                                                <span style={{ color: "#A1A1A6", fontSize: 13 }}>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Watermark */}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: 12,
                                        right: 20,
                                        fontSize: 72,
                                        fontWeight: 800,
                                        opacity: 0.04,
                                        color: step.color,
                                        lineHeight: 1,
                                        pointerEvents: "none",
                                        letterSpacing: "-0.04em",
                                    }}
                                >
                                    {step.number}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
