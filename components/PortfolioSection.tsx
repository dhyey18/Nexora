"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";

const categories = ["All", "Restaurant", "Startup", "Local Business", "SaaS"];

const projects = [
    {
        title: "Bistro Modern",
        category: "Restaurant",
        description: "Elegant restaurant website with online reservations, menu showcase, and food photography.",
        tech: ["Next.js", "Tailwind", "Stripe"],
        color: "from-orange-500 to-rose-600",
        metrics: { visits: "12K+/mo", conversion: "8.5%", rating: "4.9★" },
        gradient: "linear-gradient(135deg, rgba(249,115,22,0.8), rgba(225,29,72,0.8))",
    },
    {
        title: "LaunchPad SaaS",
        category: "SaaS",
        description: "Full-featured SaaS marketing site with pricing, feature showcase, and seamless trial signup flow.",
        tech: ["React", "Framer", "Analytics"],
        color: "from-blue-500 to-indigo-600",
        metrics: { visits: "28K+/mo", conversion: "12%", rating: "5★" },
        gradient: "linear-gradient(135deg, rgba(59,130,246,0.8), rgba(99,102,241,0.8))",
    },
    {
        title: "Urban Boutique",
        category: "Local Business",
        description: "Chic fashion boutique store with e-commerce capability, lookbooks, and loyalty program.",
        tech: ["Shopify", "Custom CSS", "SEO"],
        color: "from-pink-500 to-purple-600",
        metrics: { visits: "9K+/mo", conversion: "6.2%", rating: "4.8★" },
        gradient: "linear-gradient(135deg, rgba(236,72,153,0.8), rgba(139,92,246,0.8))",
    },
    {
        title: "GreenLeaf Café",
        category: "Restaurant",
        description: "Farm-to-table café with online ordering, catering inquiries, and event booking system.",
        tech: ["Next.js", "Sanity CMS", "Maps API"],
        color: "from-emerald-500 to-teal-600",
        metrics: { visits: "7K+/mo", conversion: "9.1%", rating: "4.9★" },
        gradient: "linear-gradient(135deg, rgba(16,185,129,0.8), rgba(20,184,166,0.8))",
    },
    {
        title: "TechFounders Co.",
        category: "Startup",
        description: "Clean startup landing page with investor-ready design, product demo, and team presentation.",
        tech: ["Next.js", "TypeScript", "Vercel"],
        color: "from-sky-500 to-blue-600",
        metrics: { visits: "15K+/mo", conversion: "14%", rating: "5★" },
        gradient: "linear-gradient(135deg, rgba(14,165,233,0.8), rgba(37,99,235,0.8))",
    },
    {
        title: "Prime Properties",
        category: "Local Business",
        description: "Real estate agency website with property listings, virtual tours, and mortgage calculator.",
        tech: ["React", "Google Maps", "Mailchimp"],
        color: "from-yellow-500 to-amber-600",
        metrics: { visits: "6K+/mo", conversion: "7.8%", rating: "4.7★" },
        gradient: "linear-gradient(135deg, rgba(234,179,8,0.8), rgba(245,158,11,0.8))",
    },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative rounded-2xl overflow-hidden cursor-pointer group"
            style={{ aspectRatio: "4/3" }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
        >
            {/* Background gradient */}
            <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{ background: project.gradient }}
            />

            {/* Pattern overlay */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `repeating-linear-gradient(
            45deg,
            rgba(255,255,255,0.1) 0px,
            rgba(255,255,255,0.1) 1px,
            transparent 1px,
            transparent 20px
          )`,
                }}
            />

            {/* Mock UI elements */}
            <div className="absolute inset-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 flex flex-col p-4">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-400/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                    <div className="w-3 h-3 rounded-full bg-green-400/70" />
                    <div className="flex-1 bg-white/10 rounded-full h-4 ml-2" />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                    <div className="h-8 bg-white/10 rounded-lg" />
                    <div className="h-4 bg-white/8 rounded w-3/4" />
                    <div className="h-4 bg-white/8 rounded w-1/2" />
                    <div className="flex-1" />
                    <div className="flex gap-2">
                        <div className={`h-8 flex-1 rounded-lg bg-gradient-to-r ${project.color} opacity-60`} />
                        <div className="h-8 w-16 rounded-lg bg-white/10" />
                    </div>
                </div>
            </div>

            {/* Category badge */}
            <div className="absolute top-4 left-4 z-10">
                <span className="text-xs text-white font-medium px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/20">
                    {project.category}
                </span>
            </div>

            {/* Hover overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col justify-end p-6 z-10"
            >
                <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">{project.description}</p>

                {/* Metrics */}
                <div className="flex gap-3 mb-4">
                    <div className="flex-1 text-center bg-white/10 rounded-lg py-2">
                        <div className="text-white font-semibold text-sm">{project.metrics.visits}</div>
                        <div className="text-white/50 text-xs">Visits</div>
                    </div>
                    <div className="flex-1 text-center bg-white/10 rounded-lg py-2">
                        <div className="text-white font-semibold text-sm">{project.metrics.conversion}</div>
                        <div className="text-white/50 text-xs">CVR</div>
                    </div>
                    <div className="flex-1 text-center bg-white/10 rounded-lg py-2">
                        <div className="text-white font-semibold text-sm">{project.metrics.rating}</div>
                        <div className="text-white/50 text-xs">Rating</div>
                    </div>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/15 text-white/80">
                            {t}
                        </span>
                    ))}
                </div>

                <button className="mt-4 flex items-center gap-2 text-white text-sm font-medium hover:text-indigo-300 transition-colors bg-transparent border-none cursor-pointer">
                    <ExternalLink size={14} /> View Case Study
                </button>
            </motion.div>
        </motion.div>
    );
}

export default function PortfolioSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const [active, setActive] = useState("All");

    const filtered =
        active === "All" ? projects : projects.filter((p) => p.category === active);

    return (
        <section id="portfolio" className="py-24 relative">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.05) 0%, transparent 60%)",
                }}
            />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div ref={ref} className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="flex justify-center mb-4"
                    >
                        <div className="section-tag">✦ Our Work</div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                        Websites We&apos;re
                        <br />
                        <span className="gradient-text">Proud to Show Off</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="text-white/55 text-lg max-w-xl mx-auto mb-8"
                    >
                        Every project is a unique story of business transformation. Here are some of our favorites.
                    </motion.p>

                    {/* Filter tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-2"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer border ${active === cat
                                        ? "bg-indigo-600 border-indigo-500 text-white"
                                        : "bg-transparent border-white/15 text-white/60 hover:border-white/30 hover:text-white/80"
                                    }`}
                            >
                                <Layers size={12} className="inline mr-1.5 opacity-60" />
                                {cat}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filtered.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <button className="btn-secondary">
                        View All Projects →
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
