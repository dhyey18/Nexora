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
        <section id="contact" className="section-dark">
            <div className="container" style={{ position: "relative", zIndex: 10 }}>
                <div
                    ref={ref}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
                        gap: "4rem",
                        alignItems: "start",
                    }}
                >
                    {/* Left */}
                    <div style={{ maxWidth: 540 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                        >
                            <div className="section-tag">Get In Touch</div>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.1 }}
                            style={{
                                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                                fontWeight: 700,
                                marginBottom: 16,
                                color: "#F5F5F7",
                                lineHeight: 1.08,
                                letterSpacing: "-0.03em",
                            }}
                        >
                            Ready to transform your
                            <br />
                            <span className="gradient-text">online presence?</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            style={{
                                color: "#A1A1A6",
                                fontSize: 17,
                                maxWidth: 460,
                                lineHeight: 1.55,
                                marginBottom: 40,
                            }}
                        >
                            Book a free consultation — no strings attached.
                        </motion.p>

                        {/* Contact info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.3 }}
                            style={{ display: "flex", flexDirection: "column", gap: 20 }}
                        >
                            {[
                                { icon: Mail, label: "Email us", value: "pateldhyey64@gmail.com", color: "#2997FF" },
                                { icon: Phone, label: "Call us", value: "+91 94291 84788 / +91 93238 30436", color: "#30D158" },
                                { icon: MapPin, label: "Based in", value: "Prahlad Nagar, Ahmedabad, Gujarat 380015", color: "#FF9F0A" },
                                { icon: MessageCircle, label: "Response time", value: "Within 2 hours", color: "#BF5AF2" },
                            ].map((item) => (
                                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                                    <div
                                        style={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: 12,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            background: `${item.color}12`,
                                            border: `1px solid ${item.color}20`,
                                            flexShrink: 0,
                                        }}
                                    >
                                        <item.icon size={17} style={{ color: item.color }} />
                                    </div>
                                    <div>
                                        <div style={{ color: "#6E6E73", fontSize: 12, marginBottom: 2 }}>{item.label}</div>
                                        <div style={{ color: "#F5F5F7", fontSize: 14, fontWeight: 500 }}>{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right — Form */}
                    <div style={{ width: "100%" }}>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                        >
                            <div
                                className="bento-card"
                                style={{ cursor: "default" }}
                            >
                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            padding: "48px 0",
                                            textAlign: "center",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 72,
                                                height: 72,
                                                borderRadius: "50%",
                                                background: "rgba(48,209,88,0.1)",
                                                border: "1px solid rgba(48,209,88,0.2)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                marginBottom: 20,
                                            }}
                                        >
                                            <CheckCircle size={32} style={{ color: "#30D158" }} />
                                        </div>
                                        <h3 style={{ color: "#F5F5F7", fontWeight: 700, fontSize: 22, marginBottom: 8 }}>
                                            Message Sent! 🎉
                                        </h3>
                                        <p style={{ color: "#A1A1A6", fontSize: 14, maxWidth: 280, lineHeight: 1.55 }}>
                                            Thank you, {name}! We&apos;ll get back to you at <strong style={{ color: "#F5F5F7" }}>{email}</strong> within 2 hours.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <>
                                        <h3
                                            style={{
                                                fontWeight: 700,
                                                fontSize: 22,
                                                marginBottom: 6,
                                                color: "#F5F5F7",
                                                letterSpacing: "-0.02em",
                                            }}
                                        >
                                            Start Your Project
                                        </h3>
                                        <p style={{ color: "#A1A1A6", fontSize: 14, marginBottom: 28 }}>
                                            Free consultation · No commitment
                                        </p>

                                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                                            <div className="custom-grid sm-grid-cols-2" style={{ gap: 16 }}>
                                                <div>
                                                    <label style={{ display: "block", fontSize: 11, marginBottom: 8, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em", color: "#A1A1A6" }}>
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
                                                    <label style={{ display: "block", fontSize: 11, marginBottom: 8, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em", color: "#A1A1A6" }}>
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

                                            {/* Service pills */}
                                            <div>
                                                <label style={{ display: "block", fontSize: 11, marginBottom: 10, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em", color: "#A1A1A6" }}>
                                                    Service Needed
                                                </label>
                                                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                                                    {services.map((s) => (
                                                        <button
                                                            key={s}
                                                            type="button"
                                                            onClick={() => setSelectedService(s === selectedService ? null : s)}
                                                            style={{
                                                                fontSize: 12,
                                                                padding: "7px 14px",
                                                                borderRadius: 980,
                                                                border: `1px solid ${selectedService === s ? "#2997FF" : "rgba(255,255,255,0.08)"}`,
                                                                background: selectedService === s ? "rgba(41,151,255,0.12)" : "rgba(255,255,255,0.03)",
                                                                color: selectedService === s ? "#64D2FF" : "#A1A1A6",
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
                                                <label style={{ display: "block", fontSize: 11, marginBottom: 8, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em", color: "#A1A1A6" }}>
                                                    Budget Range
                                                </label>
                                                <select className="form-input" id="contact-budget" style={{ cursor: "pointer" }}>
                                                    <option value="">Select your budget</option>
                                                    <option value="starter">₹10,000 – ₹20,000 (Starter)</option>
                                                    <option value="business">₹20,000 – ₹50,000 (Business)</option>
                                                    <option value="premium">₹50,000 – ₹1,00,000 (Premium)</option>
                                                    <option value="enterprise">₹1,00,000+ (Enterprise)</option>
                                                </select>
                                            </div>

                                            {/* Message */}
                                            <div>
                                                <label style={{ display: "block", fontSize: 11, marginBottom: 8, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em", color: "#A1A1A6" }}>
                                                    Tell us about your project
                                                </label>
                                                <textarea
                                                    rows={4}
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    placeholder="Describe your business, goals, and what you're looking for..."
                                                    className="form-input"
                                                    style={{ resize: "none" }}
                                                    id="contact-message"
                                                />
                                            </div>

                                            <motion.button
                                                type="submit"
                                                whileHover={{ scale: 1.01 }}
                                                whileTap={{ scale: 0.99 }}
                                                className="btn-pill"
                                                style={{ width: "100%", justifyContent: "center", padding: "14px 28px", fontSize: 16 }}
                                                id="contact-submit"
                                            >
                                                <Send size={16} />
                                                Send Message — It&apos;s Free
                                                <ArrowRight size={16} />
                                            </motion.button>

                                            <p style={{ textAlign: "center", color: "#6E6E73", fontSize: 11 }}>
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
