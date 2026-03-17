"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Zap, Star, Crown, ArrowRight } from "lucide-react";

const plans = [
    {
        name: "Starter",
        price: "₹18,999",
        period: "one-time",
        icon: Zap,
        description: "Perfect for small businesses, local shops, and freelancers who need a clean, professional online presence in the Indian market.",
        color: "#0ea5e9",
        gradient: "linear-gradient(135deg, #0ea5e9, #2563eb)",
        bg: "rgba(14,165,233,0.08)",
        border: "rgba(14,165,233,0.2)",
        featured: false,
        cta: "Get Started",
        features: [
            "5-page custom website",
            "Mobile responsive design",
            "Basic SEO setup",
            "Contact form + WhatsApp integration",
            "Google Analytics",
            "2 rounds of revisions",
            "10-day delivery",
            "15-day post-launch support",
        ],
        notIncluded: ["CMS / Blog", "E-commerce", "Custom animations", "Priority support"],
    },
    {
        name: "Business",
        price: "₹39,999",
        period: "one-time",
        icon: Star,
        description: "Our most popular package for growing Indian businesses ready to dominate their market online and stand out from the competition.",
        color: "#6366f1",
        gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
        bg: "rgba(99,102,241,0.1)",
        border: "rgba(99,102,241,0.4)",
        featured: true,
        cta: "Most Popular",
        features: [
            "10-page custom website",
            "Custom UI/UX design",
            "Full SEO optimization",
            "Performance optimization",
            "Advanced animations",
            "WhatsApp & contact forms",
            "5 revisions",
            "14-day delivery",
            "30-day priority support",
        ],
        notIncluded: ["E-commerce store", "Custom web app"],
    },
    {
        name: "Premium",
        price: "₹89,999",
        period: "one-time",
        icon: Crown,
        description: "The complete solution for ambitious Indian companies that demand the best — from e-commerce to multi-language support.",
        color: "#8b5cf6",
        gradient: "linear-gradient(135deg, #8b5cf6, #db2777)",
        bg: "rgba(139,92,246,0.08)",
        border: "rgba(139,92,246,0.2)",
        featured: false,
        cta: "Go Premium",
        features: [
            "Unlimited pages",
            "Custom brand identity",
            "Advanced SEO + Blog",
            "Performance-first architecture",
            "Custom animations & micro-interactions",
            "Payment gateway integration (UPI, Razorpay)",
            "Multi-language support (Hindi, English +)",
            "21-day delivery",
            "2-month dedicated support",
            "Monthly performance reports",
        ],
        notIncluded: [],
    },
];

function PricingCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const Icon = plan.icon;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -8 }}
            className="pricing-card"
            style={{
                background: plan.featured
                    ? "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.15))"
                    : plan.bg,
                border: `1px solid ${plan.border}`,
            }}
        >
            {/* Most popular badge */}
            {plan.featured && (
                <div
                    style={{
                        position: "absolute",
                        top: -16,
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 10,
                    }}
                >
                    <div
                        style={{
                            padding: "6px 20px",
                            borderRadius: 100,
                            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                            color: "#fff",
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            whiteSpace: "nowrap",
                        }}
                    >
                        ✦ MOST POPULAR
                    </div>
                </div>
            )}

            {/* Shimmer for featured */}
            {plan.featured && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: 24,
                        overflow: "hidden",
                        pointerEvents: "none",
                    }}
                >
                    <div className="shimmer" style={{ position: "absolute", inset: 0 }} />
                </div>
            )}

            {/* Header */}
            <div
                style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: 24,
                    position: "relative",
                    zIndex: 10,
                }}
            >
                <div>
                    <div
                        style={{
                            width: 44,
                            height: 44,
                            borderRadius: 12,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: 12,
                            background: `${plan.color}1a`,
                            border: `1px solid ${plan.color}30`,
                        }}
                    >
                        <Icon size={20} style={{ color: plan.color }} />
                    </div>
                    <div
                        style={{
                            color: "#f8fafc",
                            fontWeight: 700,
                            fontSize: 18,
                            fontFamily: "Poppins, sans-serif",
                        }}
                    >
                        {plan.name}
                    </div>
                </div>

                <div style={{ textAlign: "right" }}>
                    <div
                        style={{
                            color: "#f8fafc",
                            fontWeight: 700,
                            fontSize: 28,
                            fontFamily: "Poppins, sans-serif",
                            lineHeight: 1.2,
                        }}
                    >
                        {plan.price}
                    </div>
                    <div style={{ color: "rgba(248,250,252,0.4)", fontSize: 13 }}>{plan.period}</div>
                </div>
            </div>

            {/* Description */}
            <p
                style={{
                    color: "rgba(248,250,252,0.55)",
                    fontSize: 14,
                    lineHeight: 1.65,
                    marginBottom: 24,
                    position: "relative",
                    zIndex: 10,
                }}
            >
                {plan.description}
            </p>

            {/* Divider */}
            <div
                style={{
                    height: 1,
                    marginBottom: 24,
                    background: `linear-gradient(90deg, ${plan.color}40, transparent)`,
                    position: "relative",
                    zIndex: 10,
                }}
            />

            {/* Features */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    marginBottom: 28,
                    position: "relative",
                    zIndex: 10,
                }}
            >
                {plan.features.map((feature) => (
                    <div key={feature} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <Check size={15} style={{ color: plan.color, flexShrink: 0 }} />
                        <span style={{ color: "rgba(248,250,252,0.75)", fontSize: 13 }}>{feature}</span>
                    </div>
                ))}
                {plan.notIncluded &&
                    plan.notIncluded.map((feature) => (
                        <div
                            key={feature}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                opacity: 0.3,
                            }}
                        >
                            <div
                                style={{
                                    width: 15,
                                    height: 15,
                                    flexShrink: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 11,
                                    color: "rgba(248,250,252,0.5)",
                                }}
                            >
                                ✕
                            </div>
                            <span
                                style={{
                                    color: "rgba(248,250,252,0.5)",
                                    fontSize: 13,
                                    textDecoration: "line-through",
                                }}
                            >
                                {feature}
                            </span>
                        </div>
                    ))}
            </div>

            {/* CTA */}
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={
                    plan.featured
                        ? {
                            width: "100%",
                            padding: "14px 24px",
                            borderRadius: 12,
                            fontWeight: 600,
                            fontSize: 14,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 8,
                            cursor: "pointer",
                            border: "none",
                            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                            color: "#fff",
                            position: "relative",
                            zIndex: 10,
                            transition: "box-shadow 0.25s ease",
                        }
                        : {
                            width: "100%",
                            padding: "13px 24px",
                            borderRadius: 12,
                            fontWeight: 600,
                            fontSize: 14,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 8,
                            cursor: "pointer",
                            background: "transparent",
                            border: `1px solid ${plan.color}50`,
                            color: plan.color,
                            position: "relative",
                            zIndex: 10,
                            transition: "background 0.25s ease",
                        }
                }
                onMouseEnter={(e) => {
                    if (!plan.featured) {
                        (e.currentTarget as HTMLButtonElement).style.background = `${plan.color}15`;
                    } else {
                        (e.currentTarget as HTMLButtonElement).style.boxShadow =
                            "0 8px 30px rgba(99,102,241,0.5)";
                    }
                }}
                onMouseLeave={(e) => {
                    if (!plan.featured) {
                        (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                    } else {
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                    }
                }}
            >
                {plan.cta} <ArrowRight size={15} />
            </motion.button>
        </motion.div>
    );
}

export default function PricingSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section id="pricing" className="section">
            {/* BG */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    background:
                        "radial-gradient(ellipse at 50% 100%, rgba(99,102,241,0.08) 0%, transparent 60%)",
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
                        <div className="section-tag">✦ Pricing</div>
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
                            color: "#f8fafc",
                            lineHeight: 1.15,
                        }}
                    >
                        Transparent Pricing,
                        <br />
                        <span className="gradient-text">Zero Surprises</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        style={{
                            color: "rgba(248,250,252,0.55)",
                            fontSize: 17,
                            maxWidth: 520,
                            margin: "0 auto",
                            lineHeight: 1.7,
                        }}
                    >
                        All plans include our quality guarantee. If you&apos;re not 100% satisfied,
                        we&apos;ll work until you are — no questions asked.
                    </motion.p>
                </div>

                {/* Plans */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: 24,
                        alignItems: "start",
                    }}
                >
                    {plans.map((plan, index) => (
                        <PricingCard key={plan.name} plan={plan} index={index} />
                    ))}
                </div>

                {/* Money back */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    style={{
                        textAlign: "center",
                        marginTop: 48,
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "12px 24px",
                        color: "rgba(248,250,252,0.5)",
                        fontSize: 13,
                    }}
                >
                    {[
                        "100% Satisfaction Guarantee",
                        "No Hidden Fees",
                        "Free Consultation Call",
                        "Ongoing Support Included",
                    ].map((item, i) => (
                        <span key={item} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                            <span style={{ color: "#4ade80" }}>✓</span> {item}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
