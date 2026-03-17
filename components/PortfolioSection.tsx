"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";

const categories = ["All", "Restaurant", "Healthcare", "Startup", "Local Business", "Fashion"];

const projects = [
    {
        title: "Bistro Modern",
        category: "Restaurant",
        description: "Elegant restaurant website with online reservations, menu showcase, and food photography.",
        tech: ["Next.js", "Tailwind", "Stripe"],
        color: "linear-gradient(135deg, #f97316, #be123c)",
        metrics: { visits: "12K+/mo", conversion: "8.5%", rating: "4.9★" },
        gradient: "linear-gradient(135deg, rgba(249,115,22,0.85), rgba(225,29,72,0.85))",
    },
    {
        title: "VÔGE — Modern Clothing",
        category: "Fashion",
        description: "Luxury fashion brand website featuring the SS 2026 collection, lookbooks, new arrivals, and an immersive 'Where Style Meets Soul' shopping experience.",
        tech: ["Next.js", "Framer Motion", "Vercel"],
        color: "linear-gradient(135deg, #3b82f6, #6366f1)",
        metrics: { visits: "28K+/mo", conversion: "12%", rating: "5★" },
        gradient: "linear-gradient(135deg, rgba(59,130,246,0.85), rgba(99,102,241,0.85))",
        link: "https://voge-three.vercel.app/",
    },
    {
        title: "Urban Boutique",
        category: "Local Business",
        description: "Chic fashion boutique store with e-commerce capability, lookbooks, and loyalty program.",
        tech: ["Shopify", "Custom CSS", "SEO"],
        color: "linear-gradient(135deg, #ec4899, #8b5cf6)",
        metrics: { visits: "9K+/mo", conversion: "6.2%", rating: "4.8★" },
        gradient: "linear-gradient(135deg, rgba(236,72,153,0.85), rgba(139,92,246,0.85))",
    },
    {
        title: "MISO — Artisan Café & Kitchen",
        category: "Restaurant",
        description: "Farm-to-table artisan café with seasonal menus, online reservations, gallery, and a crafted dining experience — 'Craft. Culture. Coffee.'",
        tech: ["Next.js", "Tailwind CSS", "Vercel"],
        color: "linear-gradient(135deg, #10b981, #0d9488)",
        metrics: { visits: "7K+/mo", conversion: "9.1%", rating: "4.9★" },
        gradient: "linear-gradient(135deg, rgba(16,185,129,0.85), rgba(20,184,166,0.85))",
        link: "https://miso-6r4l.vercel.app/",
    },
    {
        title: "TechFounders Co.",
        category: "Startup",
        description: "Clean startup landing page with investor-ready design, product demo, and team presentation.",
        tech: ["Next.js", "TypeScript", "Vercel"],
        color: "linear-gradient(135deg, #0ea5e9, #2563eb)",
        metrics: { visits: "15K+/mo", conversion: "14%", rating: "5★" },
        gradient: "linear-gradient(135deg, rgba(14,165,233,0.85), rgba(37,99,235,0.85))",
    },
    {
        title: "HealthFirst Clinic — Dr. Arjun Mehta",
        category: "Healthcare",
        description: "A comprehensive healthcare clinic website featuring online appointment booking, specialist services showcase, and bilingual patient support.",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
        color: "linear-gradient(135deg, #06b6d4, #2563eb)",
        metrics: { visits: "5K+/mo", conversion: "15%", rating: "4.9★" },
        gradient: "linear-gradient(135deg, rgba(6,182,212,0.85), rgba(37,99,235,0.85))",
        link: "https://health-first-five.vercel.app/",
    },
];

function ProjectCard({ project, index }: { project: typeof projects[0] & { link?: string }; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                cursor: "pointer",
                aspectRatio: "4/3",
            }}
            className="group"
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
        >
            {/* Background gradient */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: project.gradient,
                    transition: "transform 0.7s ease",
                }}
                className="group-hover:scale-110"
            />

            {/* Pattern overlay */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.15,
                    backgroundImage: `repeating-linear-gradient(
                        45deg,
                        rgba(255,255,255,0.12) 0px,
                        rgba(255,255,255,0.12) 1px,
                        transparent 1px,
                        transparent 20px
                    )`,
                }}
            />

            {/* Mock UI elements */}
            <div
                style={{
                    position: "absolute",
                    inset: 16,
                    borderRadius: 12,
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(4px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    display: "flex",
                    flexDirection: "column",
                    padding: 16,
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(248,113,113,0.7)" }} />
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(250,204,21,0.7)" }} />
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(74,222,128,0.7)" }} />
                    <div style={{ flex: 1, height: 12, borderRadius: 100, background: "rgba(255,255,255,0.12)", marginLeft: 6 }} />
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{ height: 28, background: "rgba(255,255,255,0.12)", borderRadius: 8 }} />
                    <div style={{ height: 14, background: "rgba(255,255,255,0.08)", borderRadius: 6, width: "75%" }} />
                    <div style={{ height: 14, background: "rgba(255,255,255,0.08)", borderRadius: 6, width: "50%" }} />
                    <div style={{ flex: 1 }} />
                    <div style={{ display: "flex", gap: 8 }}>
                        <div
                            style={{
                                height: 28,
                                flex: 1,
                                borderRadius: 8,
                                background: project.color,
                                opacity: 0.7,
                            }}
                        />
                        <div style={{ height: 28, width: 56, borderRadius: 8, background: "rgba(255,255,255,0.12)" }} />
                    </div>
                </div>
            </div>

            {/* Category badge */}
            <div style={{ position: "absolute", top: 16, left: 16, zIndex: 10 }}>
                <span
                    style={{
                        fontSize: 11,
                        color: "#fff",
                        fontWeight: 600,
                        padding: "5px 12px",
                        borderRadius: 100,
                        background: "rgba(0,0,0,0.35)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.2)",
                    }}
                >
                    {project.category}
                </span>
            </div>

            {/* Hover overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.75)",
                    backdropFilter: "blur(4px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: 24,
                    zIndex: 10,
                }}
            >
                <h3
                    style={{
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: 18,
                        marginBottom: 8,
                        fontFamily: "Poppins, sans-serif",
                    }}
                >
                    {project.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, marginBottom: 16, lineHeight: 1.6 }}>
                    {project.description}
                </p>

                {/* Metrics */}
                <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
                    {[
                        { val: project.metrics.visits, lbl: "Visits" },
                        { val: project.metrics.conversion, lbl: "CVR" },
                        { val: project.metrics.rating, lbl: "Rating" },
                    ].map((m) => (
                        <div
                            key={m.lbl}
                            style={{
                                flex: 1,
                                textAlign: "center",
                                background: "rgba(255,255,255,0.1)",
                                borderRadius: 10,
                                padding: "8px 4px",
                            }}
                        >
                            <div style={{ color: "#fff", fontWeight: 600, fontSize: 13 }}>{m.val}</div>
                            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11 }}>{m.lbl}</div>
                        </div>
                    ))}
                </div>

                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            style={{
                                fontSize: 11,
                                padding: "4px 10px",
                                borderRadius: 100,
                                background: "rgba(255,255,255,0.15)",
                                color: "rgba(255,255,255,0.85)",
                                fontWeight: 500,
                            }}
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {project.link ? (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            color: "#fff",
                            fontSize: 13,
                            fontWeight: 500,
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            padding: 0,
                            transition: "color 0.2s",
                            textDecoration: "none",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#a5b4fc")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                    >
                        <ExternalLink size={13} /> View Live Site
                    </a>
                ) : (
                    <button
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            color: "#fff",
                            fontSize: 13,
                            fontWeight: 500,
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            padding: 0,
                            transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#a5b4fc")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                    >
                        <ExternalLink size={13} /> View Case Study
                    </button>
                )}
            </motion.div>
        </motion.div>
    );
}

export default function PortfolioSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const [active, setActive] = useState("All");

    const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

    return (
        <section id="portfolio" className="section">
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    background: "radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.05) 0%, transparent 60%)",
                }}
            />

            <div className="container" style={{ position: "relative", zIndex: 10 }}>
                {/* Header */}
                <div ref={ref} style={{ textAlign: "center", marginBottom: 48 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        style={{ display: "flex", justifyContent: "center" }}
                    >
                        <div className="section-tag">✦ Our Work</div>
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
                        Websites We&apos;re
                        <br />
                        <span className="gradient-text">Proud to Show Off</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        style={{
                            color: "rgba(248,250,252,0.55)",
                            fontSize: 17,
                            maxWidth: 560,
                            margin: "0 auto",
                            marginBottom: 32,
                            lineHeight: 1.7,
                        }}
                    >
                        Every project is a unique story of business transformation. Here are some of our favorites.
                    </motion.p>

                    {/* Filter tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 }}
                        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8 }}
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                style={{
                                    padding: "8px 18px",
                                    borderRadius: 100,
                                    fontSize: 13,
                                    fontWeight: 500,
                                    cursor: "pointer",
                                    border: `1px solid ${active === cat ? "#6366f1" : "rgba(255,255,255,0.15)"}`,
                                    background: active === cat ? "#6366f1" : "transparent",
                                    color: active === cat ? "#fff" : "rgba(255,255,255,0.6)",
                                    transition: "all 0.2s ease",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6,
                                }}
                            >
                                <Layers size={11} style={{ opacity: 0.7 }} />
                                {cat}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: 24,
                    }}
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
                    style={{ textAlign: "center", marginTop: 48 }}
                >
                    <button className="btn-secondary">View All Projects →</button>
                </motion.div>
            </div>
        </section>
    );
}
