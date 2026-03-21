"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Users, Globe, Award } from "lucide-react";

const stats = [
    { value: "2+", label: "Projects Delivered", icon: Globe },
    { value: "98%", label: "Client Satisfaction", icon: Star },
    { value: "2+", label: "Happy Clients", icon: Users },
    { value: "5★", label: "Average Rating", icon: Award },
];

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
                background: "var(--background)",
            }}
        >
            {/* Subtle background effects */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    overflow: "hidden",
                    pointerEvents: "none",
                }}
            >
                {/* Soft glow top-center */}
                <div
                    className="pulse-glow"
                    style={{
                        position: "absolute",
                        top: "-10%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 700,
                        height: 500,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(var(--primary-rgb),0.13) 0%, transparent 68%)",
                    }}
                />
                {/* Bottom-right accent */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "10%",
                        right: "5%",
                        width: 400,
                        height: 400,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(var(--primary-light-rgb),0.08) 0%, transparent 70%)",
                    }}
                />
                {/* Grid pattern */}
                <div className="grid-pattern absolute inset-0" />

                {/* Floating decorative dots */}
                <motion.div
                    animate={{ y: [-12, 12, -12] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: "absolute",
                        top: "20%",
                        right: "12%",
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "rgba(var(--primary-light-rgb),0.5)",
                    }}
                />
                <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: "absolute",
                        bottom: "28%",
                        left: "10%",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "rgba(var(--primary-rgb),0.6)",
                    }}
                />
                <motion.div
                    animate={{ y: [-8, 8, -8], x: [-5, 5, -5] }}
                    transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: "absolute",
                        top: "55%",
                        right: "18%",
                        width: 14,
                        height: 14,
                        borderRadius: 3,
                        border: "2px solid rgba(var(--primary-light-rgb),0.3)",
                    }}
                />
            </div>

            <div
                className="container relative"
                style={{
                    zIndex: 10,
                    textAlign: "center",
                    paddingTop: "7rem",
                    paddingBottom: "4rem",
                }}
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}
                >
                    <div className="section-tag">
                        <span
                            style={{
                                width: 7,
                                height: 7,
                                borderRadius: "50%",
                                background: "var(--primary-light)",
                                display: "inline-block",
                                animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                            }}
                        />
                        Trusted by businesses worldwide
                    </div>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.1 }}
                    style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "clamp(2.6rem, 6vw, 4.75rem)",
                        fontWeight: 800,
                        lineHeight: 1.1,
                        marginBottom: 22,
                        color: "var(--heading-color)",
                        letterSpacing: "-0.02em",
                    }}
                >
                    Turn Clicks Into Clients
                    <br />
                    With <span className="gradient-text">Better Websites</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.2 }}
                    style={{
                        fontSize: "clamp(1rem, 2vw, 1.15rem)",
                        color: "var(--text-secondary)",
                        maxWidth: "36rem",
                        margin: "0 auto",
                        marginBottom: 36,
                        lineHeight: 1.72,
                    }}
                >
                    Your online presence is your most powerful business asset. We craft stunning,
                    high-performance websites that attract customers, build trust, and drive real revenue growth.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.3 }}
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 14,
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: 60,
                    }}
                >
                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => handleScroll("contact")}
                        className="btn-primary"
                        style={{ padding: "14px 34px", fontSize: 15 }}
                        id="hero-get-started-btn"
                    >
                        Get Started Free <ArrowRight size={17} />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => handleScroll("portfolio")}
                        className="btn-secondary"
                        style={{ padding: "13px 34px", fontSize: 15 }}
                        id="hero-portfolio-btn"
                    >
                        View Portfolio
                    </motion.button>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 36 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, delay: 0.5 }}
                    className="custom-grid sm-grid-cols-2 md-grid-cols-4"
                    style={{ gap: 14, maxWidth: 720, margin: "0 auto" }}
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.45, delay: 0.6 + i * 0.08 }}
                            className="card-clean"
                            style={{
                                padding: "18px 14px",
                                textAlign: "center",
                                borderRadius: 12,
                            }}
                        >
                            <div
                                className="gradient-text"
                                style={{
                                    fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
                                    fontWeight: 800,
                                    fontFamily: "Poppins, sans-serif",
                                    marginBottom: 4,
                                    display: "block",
                                }}
                            >
                                {stat.value}
                            </div>
                            <div style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.3 }}>
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    style={{
                        position: "absolute",
                        bottom: 28,
                        left: "50%",
                        transform: "translateX(-50%)",
                    }}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{
                            width: 22,
                            height: 38,
                            borderRadius: 11,
                            border: "2px solid rgba(var(--foreground-rgb),0.2)",
                            display: "flex",
                            justifyContent: "center",
                            paddingTop: 7,
                        }}
                    >
                        <div
                            style={{
                                width: 3,
                                height: 7,
                                borderRadius: 2,
                                background: "rgba(var(--foreground-rgb),0.45)",
                            }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
