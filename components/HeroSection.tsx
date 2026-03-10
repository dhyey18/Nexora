"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Users, Globe, Award } from "lucide-react";

const stats = [
    { value: "150+", label: "Projects Delivered", icon: Globe },
    { value: "98%", label: "Client Satisfaction", icon: Star },
    { value: "50+", label: "Happy Clients", icon: Users },
    { value: "5★", label: "Average Rating", icon: Award },
];

export default function HeroSection() {
    const handleScroll = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden animated-bg stars-bg">
            {/* Background glow orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pulse-glow"
                    style={{
                        background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
                    }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full pulse-glow"
                    style={{
                        background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
                        animationDelay: "2s",
                    }}
                />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 60%)",
                    }}
                />

                {/* Floating geometric shapes */}
                <motion.div
                    animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 right-20 w-16 h-16 rounded-xl border border-indigo-500/20 bg-indigo-500/5"
                />
                <motion.div
                    animate={{ y: [20, -20, 20], rotate: [360, 180, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-32 left-16 w-10 h-10 rounded-full border border-purple-500/30 bg-purple-500/5"
                />
                <motion.div
                    animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/3 right-12 w-6 h-6 rounded-full bg-sky-400/30"
                />
                <motion.div
                    animate={{ y: [10, -10, 10], x: [10, -10, 10] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/3 left-1/4 w-4 h-4 rounded-sm border border-indigo-400/40"
                    style={{ transform: "rotate(45deg)" }}
                />

                {/* Grid lines */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 text-center pt-24 pb-16">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-8"
                >
                    <div className="section-tag">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Trusted by 50+ businesses worldwide
                    </div>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                >
                    We Build{" "}
                    <span className="gradient-text">Modern Websites</span>
                    <br />
                    That Grow Your Business
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Your online presence is your most powerful business asset. We craft stunning,
                    high-performance websites that attract customers, build trust, and drive real revenue growth.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleScroll("contact")}
                        className="btn-primary text-base px-8 py-4"
                        id="hero-get-started-btn"
                    >
                        Get Started Free <ArrowRight size={18} />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleScroll("portfolio")}
                        className="btn-secondary text-base px-8 py-4"
                        id="hero-portfolio-btn"
                    >
                        <Play size={16} className="fill-white" />
                        View Portfolio
                    </motion.button>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                            className="glass-card rounded-2xl p-4 text-center"
                        >
                            <div className="text-2xl md:text-3xl font-bold gradient-text mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                                {stat.value}
                            </div>
                            <div className="text-xs md:text-sm text-white/50">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
                    >
                        <div className="w-1 h-2 rounded-full bg-white/50" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
