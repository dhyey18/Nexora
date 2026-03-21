"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Users, Globe, Award } from "lucide-react";

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
            className="animated-bg stars-bg"
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
            }}
        >
            {/* Background glow orbs */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    overflow: "hidden",
                    pointerEvents: "none",
                }}
            >
                <div
                    className="pulse-glow"
                    style={{
                        position: "absolute",
                        top: "25%",
                        left: "25%",
                        width: 600,
                        height: 600,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(var(--primary-rgb),0.15) 0%, transparent 70%)",
                    }}
                />
                <div
                    className="pulse-glow"
                    style={{
                        position: "absolute",
                        bottom: "25%",
                        right: "25%",
                        width: 500,
                        height: 500,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(var(--primary-light-rgb),0.12) 0%, transparent 70%)",
                        animationDelay: "2s",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 800,
                        height: 800,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(var(--accent-rgb),0.06) 0%, transparent 60%)",
                    }}
                />

                {/* Floating geometric shapes */}
                <motion.div
                    animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: "absolute",
                        top: 80,
                        right: 80,
                        width: 64,
                        height: 64,
                        borderRadius: 12,
                        border: "1px solid rgba(var(--primary-rgb),0.2)",
                        background: "rgba(var(--primary-rgb),0.05)",
                    }}
                />
                <motion.div
                    animate={{ y: [20, -20, 20], rotate: [360, 180, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: "absolute",
                        bottom: 128,
                        left: 64,
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        border: "1px solid rgba(var(--primary-light-rgb),0.3)",
                        background: "rgba(var(--primary-light-rgb),0.05)",
                    }}
                />
                <motion.div
                    animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: "absolute",
                        top: "33%",
                        right: 48,
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        background: "rgba(var(--accent-rgb),0.3)",
                    }}
                />
                <motion.div
                    animate={{ y: [10, -10, 10], x: [10, -10, 10] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: "absolute",
                        bottom: "33%",
                        left: "25%",
                        width: 16,
                        height: 16,
                        borderRadius: 2,
                        border: "1px solid rgba(var(--primary-rgb),0.4)",
                        transform: "rotate(45deg)",
                    }}
                />

                {/* Grid lines */}
                <div className="grid-pattern absolute inset-0" />
            </div>

            <div
                className="container relative"
                style={{
                    zIndex: 10,
                    textAlign: "center",
                    paddingTop: "6rem",
                    paddingBottom: "4rem",
                }}
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}
                >
                    <div className="section-tag">
                        <span
                            style={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                background: "var(--primary-light)",
                                display: "inline-block",
                                animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                            }}
                        />
                        Trusted by 2+ businesses worldwide
                    </div>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                        fontWeight: 800,
                        lineHeight: 1.1,
                        marginBottom: 24,
                        color: "var(--heading-color)",
                    }}
                >
                    Turn Clicks Into Clients
                    <br />
                    With <span className="gradient-text">Better Websites</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    style={{
                        fontSize: "clamp(1rem, 2vw, 1.2rem)",
                        color: "var(--text-secondary)",
                        maxWidth: "38rem",
                        margin: "0 auto",
                        marginBottom: 40,
                        lineHeight: 1.7,
                    }}
                >
                    Your online presence is your most powerful business asset. We craft stunning,
                    high-performance websites that attract customers, build trust, and drive real revenue growth.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 16,
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: 64,
                    }}
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleScroll("contact")}
                        className="btn-primary"
                        style={{ padding: "15px 36px", fontSize: 16 }}
                        id="hero-get-started-btn"
                    >
                        Get Started Free <ArrowRight size={18} />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleScroll("portfolio")}
                        className="btn-secondary"
                        style={{ padding: "14px 36px", fontSize: 16 }}
                        id="hero-portfolio-btn"
                    >
                        <Play size={16} style={{ fill: "currentColor" }} />
                        View Portfolio
                    </motion.button>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="custom-grid sm-grid-cols-2 md-grid-cols-4"
                    style={{ gap: 16, maxWidth: 768, margin: "0 auto" }}
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                            className="glass-card rounded-2xl"
                            style={{ padding: "20px 16px", textAlign: "center" }}
                        >
                            <div
                                className="gradient-text"
                                style={{
                                    fontSize: "clamp(1.4rem, 3vw, 1.875rem)",
                                    fontWeight: 800,
                                    fontFamily: "Poppins, sans-serif",
                                    marginBottom: 4,
                                    display: "block",
                                }}
                            >
                                {stat.value}
                            </div>
                            <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>
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
                        bottom: 32,
                        left: "50%",
                        transform: "translateX(-50%)",
                    }}
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{
                            width: 24,
                            height: 40,
                            borderRadius: 12,
                            border: "2px solid rgba(var(--foreground-rgb),0.2)",
                            display: "flex",
                            justifyContent: "center",
                            paddingTop: 8,
                        }}
                    >
                        <div
                            style={{
                                width: 4,
                                height: 8,
                                borderRadius: 2,
                                background: "rgba(var(--foreground-rgb),0.5)",
                            }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
