"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Lightbulb, Code2, Rocket, CheckCircle2 } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: MessageSquare,
        title: "Discovery & Strategy",
        description:
            "We start with a deep-dive consultation to understand your business, target audience, competitors, and goals. A solid strategy is the foundation of every successful website.",
        duration: "1-2 days",
        deliverables: ["Business Analysis", "Competitor Research", "Project Roadmap", "Timeline & Quote"],
        color: "var(--primary)",
        bg: "rgba(var(--primary-rgb),0.1)",
        border: "rgba(var(--primary-rgb),0.3)",
    },
    {
        number: "02",
        icon: Lightbulb,
        title: "Design & Prototyping",
        description:
            "Our designers craft stunning wireframes and high-fidelity mockups in Figma. We collaborate with you to refine the design until it perfectly captures your brand vision.",
        duration: "3-5 days",
        deliverables: ["Brand Style Guide", "Wireframes", "High-Fi Mockups", "Design Approval"],
        color: "var(--primary-light)",
        bg: "rgba(var(--primary-light-rgb),0.1)",
        border: "rgba(var(--primary-light-rgb),0.3)",
    },
    {
        number: "03",
        icon: Code2,
        title: "Development",
        description:
            "Our engineers bring the design to life using modern technologies. Clean, optimized code with performance and accessibility as first-class priorities throughout.",
        duration: "7-14 days",
        deliverables: ["Responsive Website", "CMS Integration", "SEO Setup", "Performance Testing"],
        color: "#0ea5e9",
        bg: "rgba(14,165,233,0.1)",
        border: "rgba(14,165,233,0.3)",
    },
    {
        number: "04",
        icon: Rocket,
        title: "Launch & Growth",
        description:
            "We handle the full deployment, DNS configuration, and post-launch monitoring. Then we provide ongoing support so your website keeps growing your business.",
        duration: "1-2 days",
        deliverables: ["Live Deployment", "Analytics Setup", "Training Session", "30-day Support"],
        color: "#10b981",
        bg: "rgba(16,185,129,0.1)",
        border: "rgba(16,185,129,0.3)",
    },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const Icon = step.icon;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, y: 20 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            style={{ position: "relative" }}
        >
            {/* Connector line */}
            {index < steps.length - 1 && (
                <div
                    className="md-block"
                    style={{
                        display: "none",
                        position: "absolute",
                        left: 32,
                        top: "100%",
                        width: 1,
                        height: 28,
                        background: `linear-gradient(180deg, ${step.color} 0%, transparent 100%)`,
                    }}
                />
            )}

            <div
                style={{
                    borderRadius: 20,
                    padding: "28px 32px",
                    background: step.bg,
                    border: `1px solid ${step.border}`,
                    transition: "box-shadow 0.3s ease",
                    cursor: "default",
                    position: "relative",
                    overflow: "hidden",
                }}
                className="group hover:shadow-2xl"
            >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                    {/* Step icon with number */}
                    <div style={{ flexShrink: 0, position: "relative" }}>
                        <div
                            style={{
                                width: 56,
                                height: 56,
                                borderRadius: 16,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: step.bg,
                                border: `1px solid ${step.border}`,
                            }}
                        >
                            <Icon size={24} style={{ color: step.color }} />
                        </div>
                        <div
                            style={{
                                position: "absolute",
                                top: -8,
                                right: -8,
                                width: 22,
                                height: 22,
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: step.color,
                                color: "#fff",
                                fontSize: 11,
                                fontWeight: 700,
                            }}
                        >
                            {index + 1}
                        </div>
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                        {/* Head */}
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: 12,
                                marginBottom: 12,
                            }}
                        >
                            <h3
                                style={{
                                    color: "var(--heading-color)",
                                    fontWeight: 700,
                                    fontSize: 18,
                                    fontFamily: "Poppins, sans-serif",
                                    lineHeight: 1.2,
                                }}
                            >
                                {step.title}
                            </h3>
                            <span
                                style={{
                                    fontSize: 11,
                                    fontWeight: 600,
                                    padding: "4px 12px",
                                    borderRadius: 100,
                                    background: step.bg,
                                    color: step.color,
                                    border: `1px solid ${step.border}`,
                                    whiteSpace: "nowrap",
                                }}
                            >
                                ⏱ {step.duration}
                            </span>
                        </div>

                        <p
                            style={{
                                color: "var(--text-secondary)",
                                fontSize: 14,
                                lineHeight: 1.65,
                                marginBottom: 20,
                            }}
                        >
                            {step.description}
                        </p>

                        {/* Deliverables */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gap: 8,
                            }}
                        >
                            {step.deliverables.map((item) => (
                                <div
                                    key={item}
                                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                                >
                                    <CheckCircle2
                                        size={13}
                                        style={{ color: step.color, flexShrink: 0 }}
                                    />
                                    <span
                                        style={{ color: "var(--text-secondary)", fontSize: 12 }}
                                    >
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Background step number watermark */}
                <div
                    style={{
                        position: "absolute",
                        top: 16,
                        right: 24,
                        fontSize: 72,
                        fontWeight: 900,
                        opacity: 0.06,
                        color: step.color,
                        fontFamily: "Poppins, sans-serif",
                        lineHeight: 1,
                        pointerEvents: "none",
                        userSelect: "none",
                    }}
                >
                    {step.number}
                </div>
            </div>
        </motion.div>
    );
}

export default function ProcessSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section id="process" className="section">
            {/* BG */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    background:
                        "radial-gradient(ellipse at 0% 60%, rgba(var(--primary-rgb),0.07) 0%, transparent 50%), radial-gradient(ellipse at 100% 40%, rgba(var(--primary-light-rgb),0.06) 0%, transparent 50%)",
                }}
            />

            <div
                className="container"
                style={{ position: "relative", zIndex: 10, maxWidth: "56rem" }}
            >
                {/* Header */}
                <div ref={ref} style={{ textAlign: "center", marginBottom: 56 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        style={{ display: "flex", justifyContent: "center" }}
                    >
                        <div className="section-tag">✦ Our Process</div>
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
                        Simple, Transparent &amp;
                        <br />
                        <span className="gradient-text">Proven Process</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        style={{
                            color: "var(--text-secondary)",
                            fontSize: 17,
                            maxWidth: 520,
                            margin: "0 auto",
                            lineHeight: 1.7,
                        }}
                    >
                        No surprises, no delays. Our battle-tested 4-step process delivers exceptional
                        results on time, every time.
                    </motion.p>
                </div>

                {/* Steps */}
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    {steps.map((step, index) => (
                        <StepCard key={step.title} step={step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
