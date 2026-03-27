"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";

const categories = ["All", "Restaurant", "Healthcare", "Wellness", "Interior Design", "Fashion"];

const projects = [
    {
        title: "VÔGE — Modern Clothing",
        category: "Fashion",
        description: "Luxury fashion brand website featuring the SS 2026 collection with an immersive shopping experience.",
        tech: ["Next.js", "Framer Motion", "Vercel"],
        gradient: "linear-gradient(135deg, #3b82f6, #6366f1)",
        metrics: { visits: "28K+/mo", conversion: "12%", rating: "5★" },
        link: "https://voge-three.vercel.app/",
    },
    {
        title: "MISO — Artisan Café",
        category: "Restaurant",
        description: "Farm-to-table artisan café with seasonal menus and online reservations.",
        tech: ["Next.js", "Tailwind CSS", "Vercel"],
        gradient: "linear-gradient(135deg, #10b981, #14b8a6)",
        metrics: { visits: "7K+/mo", conversion: "9.1%", rating: "4.9★" },
        link: "https://miso-6r4l.vercel.app/",
    },
    {
        title: "HealthFirst Clinic",
        category: "Healthcare",
        description: "Comprehensive healthcare clinic with online appointment booking and bilingual support.",
        tech: ["Next.js", "Tailwind", "Framer Motion"],
        gradient: "linear-gradient(135deg, #06b6d4, #2563eb)",
        metrics: { visits: "5K+/mo", conversion: "15%", rating: "4.9★" },
        link: "https://health-first-five.vercel.app/",
    },
    {
        title: "Aura Luxe Salon",
        category: "Wellness",
        description: "Premium beauty salon website with appointment booking and service showcase.",
        tech: ["Next.js", "Framer Motion", "Tailwind"],
        gradient: "linear-gradient(135deg, #ec4899, #d946ef)",
        metrics: { visits: "8K+/mo", conversion: "11%", rating: "5★" },
        link: "https://aura-luxe-two.vercel.app/",
    },
    {
        title: "Elara Voss Interiors",
        category: "Interior Design",
        description: "Premium interior design studio focusing on residential and hospitality projects.",
        tech: ["Next.js", "Vercel", "Framer Motion"],
        gradient: "linear-gradient(135deg, #d4a373, #a98467)",
        metrics: { visits: "14K+/mo", conversion: "15%", rating: "5★" },
        link: "https://interiordesigner-alpha.vercel.app/",
    },
    {
        title: "Aria Chen Studio",
        category: "Interior Design",
        description: "Sophisticated portfolio with minimalist aesthetic and immersive visual storytelling.",
        tech: ["Next.js", "Framer Motion", "Tailwind"],
        gradient: "linear-gradient(135deg, #6b7280, #374151)",
        metrics: { visits: "4K+/mo", conversion: "18%", rating: "5★" },
        link: "https://designer-protfolio.vercel.app/#work",
    },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 36 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                cursor: "pointer",
                aspectRatio: "4/3",
            }}
            onClick={() => {
                if (window.innerWidth < 1024) setHovered(!hovered);
            }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
        >
            {/* BG gradient */}
            <div style={{ position: "absolute", inset: 0, background: project.gradient }} />

            {/* Pattern */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.08,
                    backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 24px)`,
                }}
            />

            {/* Mock browser */}
            <div
                style={{
                    position: "absolute",
                    inset: 20,
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(4px)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    display: "flex",
                    flexDirection: "column",
                    padding: 16,
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 14 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(248,113,113,0.8)" }} />
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(250,204,21,0.8)" }} />
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(74,222,128,0.8)" }} />
                    <div style={{ flex: 1, height: 14, borderRadius: 100, background: "rgba(255,255,255,0.12)", marginLeft: 6 }} />
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{ height: 30, background: "rgba(255,255,255,0.12)", borderRadius: 8, width: "60%" }} />
                    <div style={{ height: 14, background: "rgba(255,255,255,0.08)", borderRadius: 6, width: "80%" }} />
                    <div style={{ height: 14, background: "rgba(255,255,255,0.08)", borderRadius: 6, width: "55%" }} />
                    <div style={{ marginTop: "auto", height: 32, background: "rgba(255,255,255,0.1)", borderRadius: 8, width: "40%" }} />
                </div>
            </div>

            {/* Category pill */}
            <div style={{ position: "absolute", top: 16, left: 16, zIndex: 10 }}>
                <span
                    style={{
                        fontSize: 11,
                        color: "#fff",
                        fontWeight: 600,
                        padding: "5px 14px",
                        borderRadius: 980,
                        background: "rgba(0,0,0,0.35)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.1)",
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
                onClick={(e) => {
                    if (project.link && hovered && window.innerWidth < 1024) {
                        e.stopPropagation();
                        window.open(project.link, "_blank", "noopener,noreferrer");
                    }
                }}
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.85)",
                    backdropFilter: "blur(8px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: 28,
                    zIndex: 10,
                    pointerEvents: hovered ? "auto" : "none",
                }}
            >
                <h3 style={{ color: "#fff", fontWeight: 600, fontSize: 19, marginBottom: 8, letterSpacing: "-0.02em" }}>
                    {project.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 16, lineHeight: 1.55 }}>
                    {project.description}
                </p>

                {/* Metrics */}
                <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
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
                                background: "rgba(255,255,255,0.06)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                borderRadius: 10,
                                padding: "8px 4px",
                            }}
                        >
                            <div style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>{m.val}</div>
                            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>{m.lbl}</div>
                        </div>
                    ))}
                </div>

                {/* Tech */}
                <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
                    {project.tech.map((t) => (
                        <span key={t} style={{
                            fontSize: 11,
                            padding: "4px 10px",
                            borderRadius: 980,
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "rgba(255,255,255,0.6)",
                            fontWeight: 500,
                        }}>
                            {t}
                        </span>
                    ))}
                </div>

                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            color: "#2997FF",
                            fontSize: 14,
                            fontWeight: 500,
                            textDecoration: "none",
                        }}
                    >
                        View live site
                        <ExternalLink size={13} />
                    </a>
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
        <section id="portfolio" className="section-light">
            <div className="container" style={{ position: "relative", zIndex: 10 }}>
                <div ref={ref} style={{ textAlign: "center", marginBottom: 48 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                    >
                        <div className="section-tag">Our Work</div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                            fontWeight: 700,
                            marginBottom: 14,
                            color: "var(--heading-color)",
                            lineHeight: 1.08,
                            letterSpacing: "-0.03em",
                        }}
                    >
                        Websites we&apos;re
                        <br />
                        <span className="gradient-text">proud to show off.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        style={{ color: "var(--text-secondary)", fontSize: 17, maxWidth: 440, margin: "0 auto 28px", lineHeight: 1.55 }}
                    >
                        Every project is a unique story of business transformation.
                    </motion.p>

                    {/* Filter pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 }}
                        style={{
                            display: "inline-flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            gap: 6,
                            background: "rgba(var(--foreground-rgb), 0.04)",
                            border: "1px solid rgba(var(--foreground-rgb), 0.06)",
                            borderRadius: 980,
                            padding: 4,
                        }}
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                style={{
                                    padding: "7px 16px",
                                    borderRadius: 980,
                                    fontSize: 13,
                                    fontWeight: 500,
                                    cursor: "pointer",
                                    border: "none",
                                    background: active === cat ? "var(--primary)" : "transparent",
                                    color: active === cat ? "#fff" : "var(--text-secondary)",
                                    transition: "all 0.25s ease",
                                    boxShadow: active === cat ? "0 2px 8px rgba(var(--primary-rgb), 0.3)" : "none",
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    layout
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: 12,
                    }}
                >
                    {filtered.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    style={{ textAlign: "center", marginTop: 48 }}
                >
                    <button className="btn-outline">View All Projects</button>
                </motion.div>
            </div>
        </section>
    );
}
