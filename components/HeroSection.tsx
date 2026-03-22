"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
    const handleScroll = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="hero"
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                background: "#000000",
            }}
        >
            {/* Background glows */}
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                {/* Main blue glow */}
                <div
                    className="pulse-glow"
                    style={{
                        position: "absolute",
                        top: "5%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 900,
                        height: 700,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(41,151,255,0.15) 0%, rgba(191,90,242,0.08) 35%, transparent 65%)",
                    }}
                />
                {/* Side accents */}
                <div style={{
                    position: "absolute",
                    top: "30%",
                    left: "-5%",
                    width: 400,
                    height: 400,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(41,151,255,0.06) 0%, transparent 70%)",
                }} />
                <div style={{
                    position: "absolute",
                    top: "20%",
                    right: "-5%",
                    width: 400,
                    height: 400,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(191,90,242,0.06) 0%, transparent 70%)",
                }} />
                {/* Subtle grid overlay */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.03,
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: "80px 80px",
                }} />
            </div>

            <div
                className="container"
                style={{
                    position: "relative",
                    zIndex: 10,
                    textAlign: "center",
                    paddingTop: "8rem",
                    paddingBottom: "4rem",
                }}
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: 28 }}
                >
                    <span
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            background: "rgba(41, 151, 255, 0.1)",
                            border: "1px solid rgba(41, 151, 255, 0.25)",
                            borderRadius: 980,
                            padding: "8px 18px",
                            fontSize: 13,
                            fontWeight: 500,
                            color: "#64D2FF",
                        }}
                    >
                        <Sparkles size={14} style={{ color: "#64D2FF" }} />
                        Web agency for modern businesses
                    </span>
                </motion.div>

                {/* Massive headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    style={{
                        fontSize: "clamp(2.75rem, 7vw, 5.5rem)",
                        fontWeight: 700,
                        lineHeight: 1.05,
                        marginBottom: 24,
                        color: "#FFFFFF",
                        letterSpacing: "-0.035em",
                        fontFamily: "Inter, SF Pro Display, sans-serif",
                    }}
                >
                    Build websites
                    <br />
                    that <span className="gradient-text">actually grow</span>
                    <br />
                    your business.
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    style={{
                        fontSize: "clamp(1.05rem, 1.8vw, 1.3rem)",
                        color: "#A1A1A6",
                        maxWidth: "36rem",
                        margin: "0 auto",
                        marginBottom: 44,
                        lineHeight: 1.55,
                        letterSpacing: "-0.01em",
                    }}
                >
                    Stunning design. Blazing performance. Real results.
                    <br />
                    From concept to launch in weeks, not months.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    style={{
                        display: "flex",
                        gap: 16,
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                        marginBottom: 80,
                    }}
                >
                    <button
                        onClick={() => handleScroll("contact")}
                        className="btn-pill"
                        style={{ padding: "15px 36px", fontSize: 17 }}
                    >
                        Get started
                        <ArrowRight size={18} />
                    </button>
                    <button
                        onClick={() => handleScroll("portfolio")}
                        className="btn-secondary"
                        style={{ padding: "14px 30px", fontSize: 17 }}
                    >
                        View our work
                    </button>
                </motion.div>

                {/* Stats ribbon */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "clamp(24px, 5vw, 56px)",
                        flexWrap: "wrap",
                    }}
                >
                    {[
                        { value: "50+", label: "Projects Delivered" },
                        { value: "98%", label: "Client Satisfaction" },
                        { value: "< 2s", label: "Avg. Load Time" },
                        { value: "3×", label: "Traffic Growth" },
                    ].map((stat) => (
                        <div key={stat.label} style={{ textAlign: "center" }}>
                            <div
                                className="gradient-text"
                                style={{
                                    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                                    fontWeight: 800,
                                    letterSpacing: "-0.04em",
                                    lineHeight: 1.1,
                                    marginBottom: 4,
                                }}
                            >
                                {stat.value}
                            </div>
                            <div style={{ color: "#6E6E73", fontSize: 13, fontWeight: 500 }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                style={{
                    position: "absolute",
                    bottom: 28,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 10,
                }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    style={{
                        width: 22,
                        height: 34,
                        borderRadius: 11,
                        border: "1.5px solid rgba(245,245,247,0.2)",
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: 8,
                    }}
                >
                    <div
                        style={{
                            width: 3,
                            height: 7,
                            borderRadius: 2,
                            background: "rgba(245,245,247,0.35)",
                        }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
