"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Zap, Star, Crown, ArrowRight } from "lucide-react";

const plans = [
    {
        name: "Starter",
        price: "$799",
        period: "one-time",
        icon: Zap,
        description: "Perfect for small businesses and freelancers who need a clean, professional online presence.",
        color: "#0ea5e9",
        gradient: "from-sky-500 to-blue-600",
        bg: "rgba(14,165,233,0.08)",
        border: "rgba(14,165,233,0.2)",
        featured: false,
        cta: "Get Started",
        features: [
            "5-page custom website",
            "Mobile responsive design",
            "Basic SEO setup",
            "Contact form integration",
            "Google Analytics",
            "2 rounds of revisions",
            "7-day delivery",
            "30-day post-launch support",
        ],
        notIncluded: ["CMS / Blog", "E-commerce", "Custom animations", "Priority support"],
    },
    {
        name: "Business",
        price: "$2,499",
        period: "one-time",
        icon: Star,
        description: "Our most popular package for growing businesses ready to dominate their market online.",
        color: "#6366f1",
        gradient: "from-indigo-500 to-purple-600",
        bg: "rgba(99,102,241,0.1)",
        border: "rgba(99,102,241,0.4)",
        featured: true,
        cta: "Most Popular",
        features: [
            "10-page custom website",
            "Custom UI/UX design",
            "Full SEO optimization",
            "CMS / Blog integration",
            "Performance optimization",
            "Advanced animations",
            "Custom contact forms",
            "Unlimited revisions",
            "14-day delivery",
            "90-day priority support",
        ],
        notIncluded: ["E-commerce store", "Custom web app"],
    },
    {
        name: "Premium",
        price: "$5,999",
        period: "one-time",
        icon: Crown,
        description: "The complete solution for ambitious companies that demand the best without compromise.",
        color: "#8b5cf6",
        gradient: "from-purple-500 to-pink-600",
        bg: "rgba(139,92,246,0.08)",
        border: "rgba(139,92,246,0.2)",
        featured: false,
        cta: "Go Premium",
        features: [
            "Unlimited pages",
            "Custom brand identity",
            "E-commerce (up to 1000 products)",
            "Advanced SEO + Blog",
            "Performance-first architecture",
            "Custom animations & micro-interactions",
            "3rd party integrations",
            "Multi-language support",
            "21-day delivery",
            "6-month dedicated support",
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
            className={`pricing-card ${plan.featured ? "featured" : ""} relative`}
            style={{
                background: plan.featured
                    ? `linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.15))`
                    : plan.bg,
                border: `1px solid ${plan.border}`,
            }}
            whileHover={{ y: -8 }}
        >
            {/* Most popular badge */}
            {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div
                        className="px-5 py-1.5 rounded-full text-white text-xs font-bold"
                        style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
                    >
                        ✦ MOST POPULAR
                    </div>
                </div>
            )}

            {/* Shimmer for featured */}
            {plan.featured && (
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                    <div className="shimmer absolute inset-0" />
                </div>
            )}

            {/* Header */}
            <div className="flex items-start justify-between mb-6 relative z-10">
                <div>
                    <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                        style={{
                            background: `linear-gradient(135deg, ${plan.color}20, ${plan.color}10)`,
                            border: `1px solid ${plan.color}30`,
                        }}
                    >
                        <Icon size={22} style={{ color: plan.color }} />
                    </div>
                    <div className="text-white font-bold text-xl" style={{ fontFamily: "Poppins" }}>
                        {plan.name}
                    </div>
                </div>

                <div className="text-right">
                    <div className="text-white font-bold text-3xl" style={{ fontFamily: "Poppins" }}>
                        {plan.price}
                    </div>
                    <div className="text-white/40 text-sm">{plan.period}</div>
                </div>
            </div>

            {/* Description */}
            <p className="text-white/55 text-sm leading-relaxed mb-7 relative z-10">{plan.description}</p>

            {/* Divider */}
            <div
                className="h-px mb-6 relative z-10"
                style={{ background: `linear-gradient(90deg, ${plan.color}30, transparent)` }}
            />

            {/* Features */}
            <div className="space-y-3 mb-8 relative z-10">
                {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                        <Check size={16} style={{ color: plan.color }} className="flex-shrink-0" />
                        <span className="text-white/75 text-sm">{feature}</span>
                    </div>
                ))}
                {plan.notIncluded &&
                    plan.notIncluded.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 opacity-30">
                            <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                                <span className="text-white/50 text-xs">✕</span>
                            </div>
                            <span className="text-white/50 text-sm line-through">{feature}</span>
                        </div>
                    ))}
            </div>

            {/* CTA */}
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer border-none ${plan.featured
                        ? "btn-primary"
                        : "bg-transparent border text-white hover:bg-white/5"
                    }`}
                style={
                    !plan.featured
                        ? { borderColor: `${plan.color}40`, color: plan.color }
                        : {}
                }
            >
                {plan.cta} <ArrowRight size={16} />
            </motion.button>
        </motion.div>
    );
}

export default function PricingSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            {/* BG */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at 50% 100%, rgba(99,102,241,0.08) 0%, transparent 60%)",
                }}
            />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div ref={ref} className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="flex justify-center mb-4"
                    >
                        <div className="section-tag">✦ Pricing</div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                        Transparent Pricing,
                        <br />
                        <span className="gradient-text">Zero Surprises</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="text-white/55 text-lg max-w-xl mx-auto"
                    >
                        All plans include our quality guarantee. If you&apos;re not 100% satisfied,
                        we&apos;ll work until you are — no questions asked.
                    </motion.p>
                </div>

                {/* Plans */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
                    {plans.map((plan, index) => (
                        <PricingCard key={plan.name} plan={plan} index={index} />
                    ))}
                </div>

                {/* Money back */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/50 text-sm"
                >
                    <span className="flex items-center gap-2">
                        <span className="text-green-400">✓</span> 100% Satisfaction Guarantee
                    </span>
                    <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
                    <span className="flex items-center gap-2">
                        <span className="text-green-400">✓</span> No Hidden Fees
                    </span>
                    <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
                    <span className="flex items-center gap-2">
                        <span className="text-green-400">✓</span> Free Consultation Call
                    </span>
                    <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
                    <span className="flex items-center gap-2">
                        <span className="text-green-400">✓</span> Ongoing Support Included
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
