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
        color: "#6366f1",
        bg: "rgba(99,102,241,0.1)",
        border: "rgba(99,102,241,0.3)",
    },
    {
        number: "02",
        icon: Lightbulb,
        title: "Design & Prototyping",
        description:
            "Our designers craft stunning wireframes and high-fidelity mockups in Figma. We collaborate with you to refine the design until it perfectly captures your brand vision.",
        duration: "3-5 days",
        deliverables: ["Brand Style Guide", "Wireframes", "High-Fi Mockups", "Design Approval"],
        color: "#8b5cf6",
        bg: "rgba(139,92,246,0.1)",
        border: "rgba(139,92,246,0.3)",
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
            className="relative"
        >
            {/* Connector line */}
            {index < steps.length - 1 && (
                <div
                    className="absolute left-8 top-full w-[1px] h-12 hidden md:block"
                    style={{
                        background: `linear-gradient(180deg, ${step.color} 0%, transparent 100%)`,
                    }}
                />
            )}

            <div
                className="rounded-2xl p-6 md:p-8 group hover:shadow-2xl transition-all duration-300 cursor-default"
                style={{
                    background: step.bg,
                    border: `1px solid ${step.border}`,
                }}
            >
                <div className="flex items-start gap-5">
                    {/* Step icon with number */}
                    <div className="flex-shrink-0 relative">
                        <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center"
                            style={{ background: step.bg, border: `1px solid ${step.border}` }}
                        >
                            <Icon size={26} style={{ color: step.color }} />
                        </div>
                        <div
                            className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                            style={{ background: step.color }}
                        >
                            {index + 1}
                        </div>
                    </div>

                    <div className="flex-1">
                        {/* Head */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                            <h3 className="text-white font-bold text-xl" style={{ fontFamily: "Poppins, sans-serif" }}>
                                {step.title}
                            </h3>
                            <span
                                className="text-xs font-medium px-3 py-1 rounded-full"
                                style={{ background: step.bg, color: step.color, border: `1px solid ${step.border}` }}
                            >
                                ⏱ {step.duration}
                            </span>
                        </div>

                        <p className="text-white/60 text-sm leading-relaxed mb-5">{step.description}</p>

                        {/* Deliverables */}
                        <div className="grid grid-cols-2 gap-2">
                            {step.deliverables.map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <CheckCircle2 size={14} style={{ color: step.color }} className="flex-shrink-0" />
                                    <span className="text-white/65 text-xs">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Background step number */}
                <div
                    className="absolute top-4 right-6 text-7xl font-black opacity-5 pointer-events-none select-none"
                    style={{ color: step.color, fontFamily: "Poppins" }}
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
        <section id="process" className="py-24 relative overflow-hidden">
            {/* BG */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at 0% 50%, rgba(99,102,241,0.06) 0%, transparent 50%), radial-gradient(ellipse at 100% 50%, rgba(14,165,233,0.06) 0%, transparent 50%)",
                }}
            />

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div ref={ref} className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="flex justify-center mb-4"
                    >
                        <div className="section-tag">✦ Our Process</div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                        Simple, Transparent &amp;
                        <br />
                        <span className="gradient-text">Proven Process</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="text-white/55 text-lg max-w-xl mx-auto"
                    >
                        No surprises, no delays. Our battle-tested 4-step process delivers exceptional
                        results on time, every time.
                    </motion.p>
                </div>

                {/* Steps */}
                <div className="flex flex-col gap-6">
                    {steps.map((step, index) => (
                        <StepCard key={step.title} step={step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
