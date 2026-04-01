"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Send, Mail, MessageCircle, Phone, MapPin, CheckCircle } from "lucide-react";

const WA_NUMBER = "919323830436";
const WA_MESSAGE = "Hi! I'm interested in your web development services. Can we connect?";

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
                                color: "var(--heading-color)",
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
                                color: "var(--text-secondary)",
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
                                { icon: Mail, label: "Email us", value: "pateldhyey64@gmail.com", color: "#2997FF", href: "mailto:pateldhyey64@gmail.com" },
                                { icon: Phone, label: "Call us", value: "+91 94291 84788 / +91 93238 30436", color: "#30D158", href: "tel:+919429184788" },
                                { icon: MapPin, label: "Based in", value: "Prahlad Nagar, Ahmedabad, Gujarat 380015", color: "#FF9F0A", href: null },
                                { icon: MessageCircle, label: "Response time", value: "Within 2 hours", color: "#BF5AF2", href: null },
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
                                        <div style={{ color: "var(--text-tertiary)", fontSize: 12, marginBottom: 2 }}>{item.label}</div>
                                        {item.href ? (
                                            <a href={item.href} style={{ color: "var(--heading-color)", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>
                                                {item.value}
                                            </a>
                                        ) : (
                                            <div style={{ color: "var(--heading-color)", fontSize: 14, fontWeight: 500 }}>{item.value}</div>
                                        )}
                                    </div>
                                </div>
                            ))}

                            {/* WhatsApp */}
                            <a
                                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 14,
                                    textDecoration: "none",
                                    padding: "14px 18px",
                                    borderRadius: 14,
                                    background: "rgba(37,211,102,0.07)",
                                    border: "1px solid rgba(37,211,102,0.2)",
                                    transition: "background 0.2s ease, border-color 0.2s ease",
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(37,211,102,0.13)";
                                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(37,211,102,0.4)";
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(37,211,102,0.07)";
                                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(37,211,102,0.2)";
                                }}
                            >
                                <div style={{ width: 40, height: 40, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(37,211,102,0.15)", border: "1px solid rgba(37,211,102,0.25)", flexShrink: 0 }}>
                                    <svg viewBox="0 0 32 32" width="18" height="18" fill="#25D366">
                                        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.649 4.823 1.785 6.845L2 30l7.355-1.766A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.47 11.47 0 01-5.859-1.607l-.42-.25-4.362 1.048 1.068-4.253-.274-.436A11.45 11.45 0 014.5 16C4.5 9.596 9.596 4.5 16 4.5S27.5 9.596 27.5 16 22.404 27.5 16 27.5zm6.29-8.61c-.345-.173-2.04-1.006-2.356-1.12-.316-.115-.546-.173-.776.173-.23.345-.89 1.12-1.09 1.35-.2.23-.4.26-.745.087-.345-.173-1.456-.537-2.774-1.713-1.025-.915-1.717-2.044-1.917-2.39-.2-.344-.021-.53.15-.702.154-.154.345-.4.518-.6.173-.2.23-.345.345-.575.115-.23.058-.432-.029-.605-.087-.173-.776-1.87-1.063-2.561-.28-.672-.564-.58-.776-.591l-.662-.012c-.23 0-.604.086-.92.432-.316.346-1.207 1.18-1.207 2.876s1.236 3.338 1.408 3.568c.173.23 2.432 3.713 5.893 5.209.824.356 1.467.569 1.968.728.827.263 1.58.226 2.175.137.663-.1 2.04-.833 2.327-1.637.287-.804.287-1.493.2-1.637-.086-.144-.316-.23-.66-.403z" />
                                    </svg>
                                </div>
                                <div>
                                    <div style={{ color: "var(--text-tertiary)", fontSize: 12, marginBottom: 2 }}>WhatsApp us</div>
                                    <div style={{ color: "#25D366", fontSize: 14, fontWeight: 600 }}>Chat now — instant reply</div>
                                </div>
                                <div style={{ marginLeft: "auto", color: "#25D366", opacity: 0.6 }}>
                                    <svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor">
                                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                    </svg>
                                </div>
                            </a>
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
                                        <h3 style={{ color: "var(--heading-color)", fontWeight: 700, fontSize: 22, marginBottom: 8 }}>
                                            Message Sent! 🎉
                                        </h3>
                                        <p style={{ color: "var(--text-secondary)", fontSize: 14, maxWidth: 280, lineHeight: 1.55 }}>
                                            Thank you, {name}! We&apos;ll get back to you at <strong style={{ color: "var(--heading-color)" }}>{email}</strong> within 2 hours.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <>
                                        <h3
                                            style={{
                                                fontWeight: 700,
                                                fontSize: 22,
                                                marginBottom: 6,
                                                color: "var(--heading-color)",
                                                letterSpacing: "-0.02em",
                                            }}
                                        >
                                            Start Your Project
                                        </h3>
                                        <p style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 28 }}>
                                            Free consultation · No commitment
                                        </p>

                                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                                            <div className="custom-grid sm-grid-cols-2" style={{ gap: 16 }}>
                                                <div>
                                                    <label style={{ display: "block", fontSize: 11, marginBottom: 8, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-secondary)" }}>
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
                                                    <label style={{ display: "block", fontSize: 11, marginBottom: 8, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-secondary)" }}>
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
                                                <label style={{ display: "block", fontSize: 11, marginBottom: 10, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-secondary)" }}>
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
                                                                border: `1px solid ${selectedService === s ? "var(--primary)" : "rgba(var(--foreground-rgb),0.1)"}`,
                                                                background: selectedService === s ? "rgba(var(--primary-rgb),0.12)" : "rgba(var(--foreground-rgb),0.04)",
                                                                color: selectedService === s ? "var(--primary)" : "var(--text-secondary)",
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
                                                <label style={{ display: "block", fontSize: 11, marginBottom: 8, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-secondary)" }}>
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
                                                <label style={{ display: "block", fontSize: 11, marginBottom: 8, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-secondary)" }}>
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

                                            <p style={{ textAlign: "center", color: "var(--text-tertiary)", fontSize: 11 }}>
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
