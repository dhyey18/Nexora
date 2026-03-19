"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Send, Mail, MessageCircle, Phone, MapPin, CheckCircle } from "lucide-react";

const services = [
    "Website Development",
    "Business Redesign",
    "SEO Optimization",
    "E-commerce Store",
    "Landing Page",
    "Performance Optimization",
];

export default function CTASection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!name || !email) return;
        setSubmitted(true);
    };

    return (
        <section id="contact" className="section relative">
            {/* Animated background */}
            <div className="animated-bg absolute inset-0 opacity-50 pointer-events-none" />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.15) 0%, transparent 60%)",
                }}
            />

            {/* Grid */}
            <div className="grid-pattern absolute inset-0 pointer-events-none" />

            <div className="container relative z-10">
                <div
                    ref={ref}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
                        gap: "4rem",
                        alignItems: "start",
                    }}
                >
                    {/* Left — CTA text */}
                    <div style={{ maxWidth: 600 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            className="flex mb-5"
                        >
                            <div className="section-tag">✦ Get In Touch</div>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.1 }}
                            className="font-bold mb-6 leading-tight text-white"
                            style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
                        >
                            Ready to Transform
                            <br />
                            Your <span className="gradient-text">Online Presence?</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className="text-white/60 text-lg leading-relaxed mb-10"
                            style={{ maxWidth: 520 }}
                        >
                            Stop losing customers to competitors with better websites. Let&apos;s build you
                            something exceptional. Book a free consultation call — no strings attached.
                        </motion.p>
                        <br />
                        {/* Contact info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.3 }}
                            className="space-y-8 mb-8"
                        >
                            {[
                                { icon: Mail, label: "Email us", value: "pateldhyey64@gmail.com" },
                                { icon: Phone, label: "Call us", value: "+91 94291 84788 / +91 93238 30436" },
                                { icon: MapPin, label: "Based in", value: "Prahlad Nagar, Ahmedabad, Gujarat 380015" },
                                { icon: MessageCircle, label: "Response time", value: "Within 2 hours" },
                            ].map((item) => (
                                <div key={item.label} className="flex items-center gap-4">
                                    <div
                                        className="flex-shrink-0 flex items-center justify-center"
                                        style={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: 12,
                                            background: "rgba(99,102,241,0.1)",
                                            border: "1px solid rgba(99,102,241,0.2)",
                                        }}
                                    >
                                        <item.icon size={17} style={{ color: "#818cf8" }} />
                                    </div>
                                    <div>
                                        <div className="text-white/40 text-xs mb-0.5">{item.label}</div>
                                        <div className="text-white text-sm font-medium">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                        <br />
                        {/* Testimonial snippet */}
                        {/* <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.4 }}
                            className="glass rounded-2xl p-5 mt-10"
                            style={{ borderColor: "rgba(99,102,241,0.2)" }}
                        >
                            <p className="text-white/65 text-sm italic mb-3 leading-relaxed">
                                &ldquo;Catalyq delivered our dream website in just 2 weeks. The results
                                exceeded every expectation.&rdquo;
                            </p>
                            <div className="flex items-center gap-3">
                                <div
                                    className="flex-center text-white text-xs font-bold flex-shrink-0"
                                    style={{
                                        width: 32,
                                        height: 32,
                                        borderRadius: "50%",
                                        background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                    }}
                                >
                                    SM
                                </div>
                                <span className="text-white/50 text-xs">Sarah M., CEO at LaunchPad SaaS</span>
                            </div>
                        </motion.div> */}
                    </div>

                    {/* Right — Form */}
                    <div style={{ width: "100%" }}>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            style={{ width: "100%" }}
                        >
                            <div className="glass-card" style={{ borderRadius: "1.5rem", padding: "clamp(1.5rem, 5vw, 2.5rem)" }}>
                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center justify-center py-12 text-center"
                                    >
                                        <div
                                            className="flex-center mb-6"
                                            style={{
                                                width: 80,
                                                height: 80,
                                                borderRadius: "50%",
                                                background: "rgba(16,185,129,0.15)",
                                                border: "1px solid rgba(16,185,129,0.3)",
                                            }}
                                        >
                                            <CheckCircle size={38} style={{ color: "#34d399" }} />
                                        </div>
                                        <h3
                                            className="text-white font-bold text-2xl mb-3"
                                            style={{ fontFamily: "Poppins" }}
                                        >
                                            Message Sent! 🎉
                                        </h3>
                                        <p className="text-white/60 text-sm max-w-xs leading-relaxed">
                                            Thank you for reaching out, {name}! We&apos;ll get back to you at{" "}
                                            <strong className="text-white">{email}</strong> within 2 hours.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <>
                                        <h3
                                            className="text-white font-bold text-2xl mb-1"
                                            style={{ fontFamily: "Poppins" }}
                                        >
                                            Start Your Project
                                        </h3>
                                        <p className="text-white/50 text-sm mb-6">
                                            Free consultation · No commitment
                                        </p>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            {/* Name + Email */}
                                            <div className="custom-grid sm-grid-cols-2" style={{ gap: 12 }}>
                                                <div>
                                                    <label className="block text-white/55 text-xs mb-1.5 font-medium">
                                                        Full Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        placeholder="Your Name"
                                                        className="form-input"
                                                        id="contact-name"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-white/55 text-xs mb-1.5 font-medium">
                                                        Email Address *
                                                    </label>
                                                    <input
                                                        type="email"
                                                        required
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        placeholder="you@company.com"
                                                        className="form-input"
                                                        id="contact-email"
                                                    />
                                                </div>
                                            </div>

                                            {/* Service selector */}
                                            <div>
                                                <label className="block text-white/55 text-xs mb-2 font-medium">
                                                    Service Needed
                                                </label>
                                                <div className="flex flex-wrap gap-2">
                                                    {services.map((s) => (
                                                        <button
                                                            key={s}
                                                            type="button"
                                                            onClick={() =>
                                                                setSelectedService(s === selectedService ? null : s)
                                                            }
                                                            style={{
                                                                fontSize: 13,
                                                                padding: "8px 14px",
                                                                borderRadius: 100,
                                                                border: `1px solid ${selectedService === s
                                                                    ? "rgba(99,102,241,0.6)"
                                                                    : "rgba(255,255,255,0.14)"
                                                                    }`,
                                                                background:
                                                                    selectedService === s
                                                                        ? "rgba(99,102,241,0.18)"
                                                                        : "transparent",
                                                                color:
                                                                    selectedService === s
                                                                        ? "#a5b4fc"
                                                                        : "rgba(255,255,255,0.5)",
                                                                cursor: "pointer",
                                                                transition: "all 0.2s ease",
                                                                fontWeight: 500,
                                                            }}
                                                        >
                                                            {s}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Budget */}
                                            <div>
                                                <label className="block text-white/55 text-xs mb-1.5 font-medium">
                                                    Budget Range
                                                </label>
                                                <select
                                                    className="form-input"
                                                    id="contact-budget"
                                                    style={{ background: "rgba(15,23,42,0.9)", cursor: "pointer" }}
                                                >
                                                    <option value="">Select your budget</option>
                                                    <option value="starter">₹10,000 – ₹20,000 (Starter)</option>
                                                    <option value="business">₹20,000 – ₹50,000 (Business)</option>
                                                    <option value="premium">₹50,000 – ₹1,00,000 (Premium)</option>
                                                    <option value="enterprise">₹1,00,000+ (Enterprise)</option>
                                                </select>
                                            </div>

                                            {/* Message */}
                                            <div>
                                                <label className="block text-white/55 text-xs mb-1.5 font-medium">
                                                    Tell us about your project
                                                </label>
                                                <textarea
                                                    rows={3}
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    placeholder="Describe your business, goals, and what you're looking for..."
                                                    className="form-input"
                                                    style={{ resize: "none" }}
                                                    id="contact-message"
                                                />
                                            </div>

                                            {/* Submit */}
                                            <motion.button
                                                type="submit"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="btn-primary w-full"
                                                style={{ padding: "15px 32px" }}
                                                id="contact-submit"
                                            >
                                                <Send size={16} />
                                                Send Message — It&apos;s Free
                                                <ArrowRight size={16} />
                                            </motion.button>

                                            <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                                                🔒 We respect your privacy. No spam, ever.
                                            </p>
                                        </form>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
