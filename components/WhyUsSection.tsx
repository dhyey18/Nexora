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
            className="relative rounded-2xl p-6 group overflow-hidden cursor-pointer"
            style={{
                background: feature.bg,
                border: `1px solid ${feature.border}`,
                transition: "all 0.3s ease",
            }}
            whileHover={{ y: -4, scale: 1.01 }}
        >
            {/* Glow on hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                    background: `radial-gradient(circle at 50% 0%, ${feature.bg} 0%, transparent 100%)`,
                }}
            />

            <div className="relative z-10 flex items-start gap-4">
                {/* Icon */}
                <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: feature.bg, border: `1px solid ${feature.border}` }}
                >
                    <Icon size={22} style={{ color: feature.color }} />
                </div>

                <div className="flex-1">
                    <h3 className="text-white font-semibold text-base mb-2">{feature.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{feature.description}</p>
                </div>

                {/* Stat badge */}
                <div className="flex-shrink-0 text-right">
                    <div className="text-xl font-bold" style={{ color: feature.color, fontFamily: "Poppins" }}>
                        {feature.stat}
                    </div>
                    <div className="text-xs text-white/40">{feature.statLabel}</div>
                </div>
            </div>
        </motion.div>
    );
}

export default function WhyUsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section id="why-us" className="py-24 relative overflow-hidden">
            {/* Purple background glow */}
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)" }}
            />
            <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)" }}
            />

            <div className="max-w-6xl mx-auto px-4">
                <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left */}
                    <div className="lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            className="flex mb-5"
                        >
                            <div className="section-tag">✦ Why Choose Us</div>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                            style={{ fontFamily: "Poppins, sans-serif" }}
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
                            className="text-white/55 text-lg leading-relaxed mb-8"
                        >
                            We combine cutting-edge technology with proven design strategies to create websites
                            that don&apos;t just look good — they perform. Our websites are built to rank, convert,
                            and scale.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.3 }}
                            className="flex gap-4"
                        >
                            <div className="glass-card rounded-2xl p-5 flex-1 text-center">
                                <div className="text-3xl font-bold gradient-text mb-1" style={{ fontFamily: "Poppins" }}>150+</div>
                                <div className="text-white/50 text-sm">Websites Built</div>
                            </div>
                            <div className="glass-card rounded-2xl p-5 flex-1 text-center">
                                <div className="text-3xl font-bold gradient-text mb-1" style={{ fontFamily: "Poppins" }}>4yr+</div>
                                <div className="text-white/50 text-sm">Years of Experience</div>
                            </div>
                            <div className="glass-card rounded-2xl p-5 flex-1 text-center">
                                <div className="text-3xl font-bold gradient-text mb-1" style={{ fontFamily: "Poppins" }}>24/7</div>
                                <div className="text-white/50 text-sm">Support Available</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col gap-4">
                        {features.map((feature, index) => (
                            <FeatureCard key={feature.title} feature={feature} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
