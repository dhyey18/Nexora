"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
    Globe,
    RefreshCw,
    TrendingUp,
    Zap,
    ShoppingCart,
    Layout,
    ArrowRight,
} from "lucide-react";

const services = [
    {
        icon: Globe,
        title: "Website Development",
        description:
            "Custom-built, pixel-perfect websites tailored to your brand and business goals. Fast, secure, and built on modern tech.",
        color: "from-indigo-500 to-blue-600",
        glow: "rgba(99,102,241,0.25)",
        tags: ["React", "Next.js", "TypeScript"],
    },
    {
        icon: RefreshCw,
        title: "Business Website Redesign",
        description:
            "Transform your outdated website into a modern, conversion-optimized digital experience that impresses visitors.",
        color: "from-purple-500 to-pink-600",
        glow: "rgba(168,85,247,0.25)",
        tags: ["UI/UX", "Figma", "Branding"],
    },
    {
        icon: TrendingUp,
        title: "SEO Optimization",
        description:
            "Rank higher on Google with our data-driven SEO strategies. Get found by customers actively searching for your services.",
        color: "from-green-500 to-emerald-600",
        glow: "rgba(16,185,129,0.25)",
        tags: ["On-Page SEO", "Schema", "Core Web Vitals"],
    },
    {
        icon: Zap,
        title: "Performance Optimization",
        description:
            "Lightning-fast page speeds that boost user retention and conversion rates. Optimize every millisecond that counts.",
        color: "from-yellow-500 to-orange-500",
        glow: "rgba(245,158,11,0.25)",
        tags: ["Web Vitals", "CDN", "Caching"],
    },
    {
        icon: ShoppingCart,
        title: "E-commerce Websites",
        description:
            "Powerful online stores with seamless checkout experiences, inventory management, and payment gateway integrations.",
        color: "from-sky-500 to-cyan-600",
        glow: "rgba(14,165,233,0.25)",
        tags: ["Shopify", "WooCommerce", "Stripe"],
    },
    {
        icon: Layout,
        title: "Landing Pages",
        description:
            "High-converting landing pages engineered to turn visitors into leads and leads into loyal customers.",
        color: "from-rose-500 to-red-600",
        glow: "rgba(244,63,94,0.25)",
        tags: ["A/B Testing", "CRO", "Analytics"],
    },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const Icon = service.icon;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-2xl p-6 group relative overflow-hidden cursor-pointer"
            style={{ "--glow-color": service.glow } as React.CSSProperties}
        >
            {/* Hover glow */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{
                    background: `radial-gradient(circle at center, ${service.glow} 0%, transparent 70%)`,
                }}
            />

            {/* Icon */}
            <div
                className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
            >
                <Icon size={24} className="text-white" />
            </div>

            {/* Content */}
            <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-white transition-colors">
                {service.title}
            </h3>
            <p className="text-white/55 text-sm leading-relaxed mb-4">{service.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-1 text-indigo-400 text-sm font-medium group-hover:gap-2 transition-all">
                Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>

            {/* Corner decoration */}
            <div
                className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10 bg-gradient-to-br ${service.color}`}
            />
        </motion.div>
    );
}

export default function ServicesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section id="services" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "800px",
                        height: "400px",
                        background: "radial-gradient(ellipse at center, rgba(99,102,241,0.07) 0%, transparent 70%)",
                    }}
                />
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div ref={ref} className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="flex justify-center mb-4"
                    >
                        <div className="section-tag">✦ Our Services</div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                        Everything You Need to
                        <br />
                        <span className="gradient-text">Dominate Online</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="text-white/55 text-lg max-w-xl mx-auto"
                    >
                        From initial concept to launch and beyond, we provide end-to-end web solutions
                        that make your business stand out in a crowded digital landscape.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
