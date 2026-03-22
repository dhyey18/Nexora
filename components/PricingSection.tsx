"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Sparkles, Zap, Crown, ArrowRight } from "lucide-react";

const plans = [
    {
        name: "Starter",
        price: "₹15,000",
        period: "one-time",
        tagline: "Perfect for small businesses getting started online.",
        icon: Zap,
        featured: false,
        color: "#30D158",
        features: [
            "Single-page responsive website",
            "Mobile-first design",
            "Basic SEO setup",
            "Contact form integration",
            "Google Analytics setup",
            "2 rounds of revisions",
            "7-day delivery",
        ],
        cta: "Get Started",
    },
    {
        name: "Business",
        price: "₹35,000",
        period: "one-time",
        tagline: "The smart choice for growing businesses.",
        icon: Sparkles,
        featured: true,
        color: "#2997FF",
        features: [
            "Multi-page website (up to 7)",
            "Custom UI/UX design in Figma",
            "Advanced SEO optimization",
            "Blog / CMS integration",
            "WhatsApp / chat integration",
            "Performance optimization",
            "5 rounds of revisions",
            "14-day delivery",
            "30-day post-launch support",
        ],
        cta: "Get Started",
    },
    {
        name: "Premium",
        price: "₹75,000",
        period: "one-time",
        tagline: "Full-scale digital transformation for serious brands.",
        icon: Crown,
        featured: false,
        color: "#BF5AF2",
        features: [
            "Unlimited pages",
            "Premium design & animations",
            "E-commerce / booking system",
            "Custom CMS dashboard",
            "Advanced analytics & tracking",
            "Speed & Core Web Vitals audit",
            "Priority support — 90 days",
            "Unlimited revisions",
            "21-day delivery",
        ],
        cta: "Get Started",
    },
];

function PricingCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const Icon = plan.icon;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 36 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={plan.featured ? "gradient-border pricing-card" : "pricing-card"}
            style={{
                background: plan.featured ? "var(--card-bg-solid)" : undefined,
            }}
        >
            {/* Popular badge */}
            {plan.featured && (
                <div
                    style={{
                        position: "absolute",
                        top: -1,
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
                        color: "#fff",
                        fontSize: 11,
                        fontWeight: 600,
                        padding: "5px 16px",
                        borderRadius: "0 0 12px 12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                    }}
                >
                    Most Popular
                </div>
            )}

            {/* Icon + Plan name */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, marginTop: plan.featured ? 12 : 0 }}>
                <div
                    style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: `${plan.color}14`,
                        border: `1px solid ${plan.color}22`,
                    }}
                >
                    <Icon size={17} style={{ color: plan.color }} />
                </div>
                <span style={{ color: "var(--foreground)", fontWeight: 600, fontSize: 16 }}>
                    {plan.name}
                </span>
            </div>

            {/* Price */}
            <div style={{ marginBottom: 6 }}>
                <span style={{ fontSize: 40, fontWeight: 700, color: "var(--foreground)", letterSpacing: "-0.04em" }}>
                    {plan.price}
                </span>
                <span style={{ color: "var(--text-tertiary)", fontSize: 14, marginLeft: 6 }}>
                    {plan.period}
                </span>
            </div>

            <p style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 28, lineHeight: 1.5 }}>
                {plan.tagline}
            </p>

            {/* CTA */}
            <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className={plan.featured ? "btn-pill" : "btn-outline"}
                style={{ width: "100%", justifyContent: "center", marginBottom: 28, padding: "13px 24px" }}
            >
                {plan.cta}
                <ArrowRight size={15} />
            </button>

            {/* Features */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {plan.features.map((feature) => (
                    <div key={feature} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                        <div style={{
                            width: 18,
                            height: 18,
                            borderRadius: 6,
                            background: `${plan.color}14`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            marginTop: 1,
                        }}>
                            <Check size={11} style={{ color: plan.color }} />
                        </div>
                        <span style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.45 }}>{feature}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

export default function PricingSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section id="pricing" className="section-dark">
            <div className="container">
                <div ref={ref} style={{ textAlign: "center", marginBottom: 52 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                    >
                        <div className="section-tag">Pricing</div>
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
                        Simple pricing.
                        <br />
                        <span className="gradient-text">Exceptional value.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        style={{ color: "#A1A1A6", fontSize: 17, maxWidth: 440, margin: "0 auto", lineHeight: 1.55 }}
                    >
                        No hidden fees. No surprises. Pay once, own forever.
                    </motion.p>
                </div>

                <div
                    className="custom-grid lg-grid-cols-3"
                    style={{ gap: 12, maxWidth: "60rem", margin: "0 auto", alignItems: "stretch" }}
                >
                    {plans.map((plan, index) => (
                        <PricingCard key={plan.name} plan={plan} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
