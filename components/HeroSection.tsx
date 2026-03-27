"use client";

import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

const ROTATING_PHRASES = [
    "actually grow",
    "convert faster",
    "rank higher",
    "impress clients",
    "stand out online",
];

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 0.8,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 6,
    opacity: Math.random() * 0.35 + 0.08,
    color: i % 3 === 0 ? "41,151,255" : i % 3 === 1 ? "191,90,242" : "100,210,255",
}));

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const started = useRef(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const duration = 1800;
                    const start = performance.now();
                    const tick = (now: number) => {
                        const p = Math.min((now - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - p, 3);
                        setCount(Math.floor(eased * target));
                        if (p < 1) requestAnimationFrame(tick);
                        else setCount(target);
                    };
                    requestAnimationFrame(tick);
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [target]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function HeroSection() {
    const [phraseIndex, setPhraseIndex] = useState(0);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 30, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 30, damping: 20 });
    const leftX = useMotionValue(0);
    const leftSpringX = useSpring(leftX, { stiffness: 20, damping: 15 });

    const handleScroll = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 60);
        mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 40);
    }, [mouseX, mouseY]);

    // Cycle rotating phrases
    useEffect(() => {
        const id = setInterval(() => {
            setPhraseIndex((i) => (i + 1) % ROTATING_PHRASES.length);
        }, 2400);
        return () => clearInterval(id);
    }, []);

    const stats = [
        { target: 2, suffix: "+", label: "Projects Delivered" },
        { target: 98, suffix: "%", label: "Client Satisfaction" },
        { target: 2, suffix: "s", label: "Avg. Load Time", prefix: "< " },
        { target: 3, suffix: "×", label: "Traffic Growth" },
    ];

    return (
        <section
            id="hero"
            onMouseMove={handleMouseMove}
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
            {/* ── Particles ── */}
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}>
                {PARTICLES.map((p) => (
                    <motion.div
                        key={p.id}
                        style={{
                            position: "absolute",
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            width: p.size,
                            height: p.size,
                            borderRadius: "50%",
                            background: `rgba(${p.color}, ${p.opacity})`,
                            boxShadow: `0 0 ${p.size * 3}px rgba(${p.color}, ${p.opacity * 0.6})`,
                        }}
                        animate={{
                            y: [0, -40, 0],
                            x: [0, Math.sin(p.id) * 16, 0],
                            opacity: [p.opacity, p.opacity * 2.5, p.opacity],
                            scale: [1, 1.4, 1],
                        }}
                        transition={{
                            duration: p.duration,
                            delay: p.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* ── Background glows (mouse-parallax) ── */}
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}>
                {/* Primary glow */}
                <motion.div
                    className="pulse-glow"
                    style={{
                        position: "absolute",
                        top: "5%",
                        left: "50%",
                        width: 900,
                        height: 700,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(41,151,255,0.18) 0%, rgba(191,90,242,0.09) 35%, transparent 65%)",
                        x: springX,
                        y: springY,
                        translateX: "-50%",
                    }}
                />
                {/* Left accent */}
                <motion.div
                    style={{
                        position: "absolute",
                        top: "30%",
                        left: "-5%",
                        width: 500,
                        height: 500,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(41,151,255,0.07) 0%, transparent 70%)",
                        x: leftSpringX,
                    }}
                />
                {/* Right accent */}
                <motion.div
                    style={{
                        position: "absolute",
                        top: "15%",
                        right: "-5%",
                        width: 500,
                        height: 500,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(191,90,242,0.07) 0%, transparent 70%)",
                    }}
                />
                {/* Bottom glow */}
                <motion.div
                    animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.1, 1] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    style={{
                        position: "absolute",
                        bottom: "-10%",
                        left: "20%",
                        width: 600,
                        height: 300,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(100,210,255,0.06) 0%, transparent 70%)",
                    }}
                />
                {/* Grid */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.025,
                    backgroundImage: `
                        linear-gradient(rgba(var(--foreground-rgb),0.6) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(var(--foreground-rgb),0.6) 1px, transparent 1px)
                    `,
                    backgroundSize: "80px 80px",
                }} />
            </div>

            {/* ── Content ── */}
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
                {/* Badge — rotating conic-gradient border */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: 32 }}
                >
                    <div style={{ position: "relative", display: "inline-block", padding: "1.5px", borderRadius: 980, overflow: "hidden" }}>
                        {/* Rotating gradient ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            style={{
                                position: "absolute",
                                width: "300%",
                                height: "300%",
                                top: "-100%",
                                left: "-100%",
                                background: "conic-gradient(from 0deg, transparent 20%, rgba(41,151,255,0.9) 38%, rgba(191,90,242,0.85) 54%, rgba(100,210,255,0.9) 66%, transparent 80%)",
                            }}
                        />
                        {/* Inner pill */}
                        <span
                            style={{
                                position: "relative",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                background: "var(--background)",
                                borderRadius: 980,
                                padding: "8px 18px",
                                fontSize: 13,
                                fontWeight: 500,
                                color: "var(--primary-light)",
                            }}
                        >
                            <Sparkles size={14} style={{ color: "var(--primary-light)" }} />
                            Web agency for modern businesses
                        </span>
                    </div>
                </motion.div>

                {/* Headline with rotating word */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    style={{
                        fontSize: "clamp(2.75rem, 7vw, 5.5rem)",
                        fontWeight: 700,
                        lineHeight: 1.05,
                        marginBottom: 24,
                        color: "var(--heading-color)",
                        letterSpacing: "-0.035em",
                        fontFamily: "Inter, SF Pro Display, sans-serif",
                    }}
                >
                    Build websites
                    <br />
                    that{" "}
                    <span style={{ display: "inline-block", position: "relative" }}>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={phraseIndex}
                                className="gradient-text"
                                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -24, filter: "blur(8px)" }}
                                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                style={{ display: "inline-block" }}
                            >
                                {ROTATING_PHRASES[phraseIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </span>
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
                        color: "var(--text-secondary)",
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
                    <motion.button
                        onClick={() => handleScroll("contact")}
                        className="btn-pill"
                        style={{ padding: "15px 36px", fontSize: 17, position: "relative", overflow: "hidden" }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        {/* Shimmer sweep */}
                        <motion.span
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)",
                                backgroundSize: "200% 100%",
                            }}
                            animate={{ backgroundPosition: ["-200% 0", "200% 0"] }}
                            transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.5 }}
                        />
                        Get started
                        <ArrowRight size={18} />
                    </motion.button>
                    <motion.button
                        onClick={() => handleScroll("portfolio")}
                        className="btn-secondary"
                        style={{ padding: "14px 30px", fontSize: 17 }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        View our work
                    </motion.button>
                </motion.div>

                {/* Stats ribbon — count-up */}
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
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            style={{ textAlign: "center" }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.08 }}
                        >
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
                                {stat.prefix}
                                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                            </div>
                            <div style={{ color: "var(--text-tertiary)", fontSize: 13, fontWeight: 500 }}>
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                style={{
                    position: "absolute",
                    bottom: 28,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                }}
            >
                <motion.span
                    animate={{ opacity: [0.4, 0.9, 0.4] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    style={{ fontSize: 10, letterSpacing: "0.1em", color: "var(--text-tertiary)", textTransform: "uppercase" }}
                >
                    Scroll
                </motion.span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    style={{
                        width: 22,
                        height: 34,
                        borderRadius: 11,
                        border: "1.5px solid rgba(var(--foreground-rgb),0.2)",
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
                            background: "rgba(var(--foreground-rgb),0.35)",
                        }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
