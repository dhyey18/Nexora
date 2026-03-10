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
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 animated-bg opacity-50 pointer-events-none" />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.15) 0%, transparent 60%)",
                }}
            />

            {/* Grid */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left — CTA text */}
                    <div>
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
                            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                            style={{ fontFamily: "Poppins, sans-serif" }}
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
                        >
                            Stop losing customers to competitors with better websites. Let&apos;s build you
                            something exceptional. Book a free consultation call — no strings attached.
                        </motion.p>

                        {/* Contact info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.3 }}
                            className="space-y-4 mb-8"
                        >
                            {[
                                { icon: Mail, label: "Email us", value: "hello@nexaweb.agency" },
                                { icon: Phone, label: "Call us", value: "+1 (555) 000-0000" },
                                { icon: MapPin, label: "We work with", value: "Clients worldwide 🌍" },
                                { icon: MessageCircle, label: "Response time", value: "Within 2 hours" },
                            ].map((item) => (
                                <div key={item.label} className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                                        <item.icon size={18} className="text-indigo-400" />
                                    </div>
                                    <div>
                                        <div className="text-white/40 text-xs">{item.label}</div>
                                        <div className="text-white text-sm font-medium">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Testimonial snippet */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.4 }}
                            className="glass rounded-2xl p-5 border border-indigo-500/20"
                        >
                            <p className="text-white/65 text-sm italic mb-3">
                                &ldquo;NexaWeb delivered our dream website in just 2 weeks. The results exceeded every expectation.&rdquo;
                            </p>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                                    SM
                                </div>
                                <span className="text-white/50 text-xs">Sarah M., CEO at LaunchPad SaaS</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right — Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="glass-card rounded-3xl p-8 border border-white/10">
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                >
                                    <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-6">
                                        <CheckCircle size={40} className="text-green-400" />
                                    </div>
                                    <h3 className="text-white font-bold text-2xl mb-3" style={{ fontFamily: "Poppins" }}>
                                        Message Sent! 🎉
                                    </h3>
                                    <p className="text-white/60 text-sm max-w-xs">
                                        Thank you for reaching out, {name}! We&apos;ll get back to you at{" "}
                                        <strong className="text-white">{email}</strong> within 2 hours.
                                    </p>
                                </motion.div>
                            ) : (
                                <>
                                    <h3 className="text-white font-bold text-2xl mb-2" style={{ fontFamily: "Poppins" }}>
                                        Start Your Project
                                    </h3>
                                    <p className="text-white/50 text-sm mb-6">Free consultation · No commitment</p>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        {/* Name + Email */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-white/60 text-xs mb-1.5 block">Full Name *</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    placeholder="John Smith"
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-indigo-500/60 transition-colors"
                                                    id="contact-name"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-white/60 text-xs mb-1.5 block">Email Address *</label>
                                                <input
                                                    type="email"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="john@company.com"
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-indigo-500/60 transition-colors"
                                                    id="contact-email"
                                                />
                                            </div>
                                        </div>

                                        {/* Service selector */}
                                        <div>
                                            <label className="text-white/60 text-xs mb-2 block">Service Needed</label>
                                            <div className="flex flex-wrap gap-2">
                                                {services.map((s) => (
                                                    <button
                                                        key={s}
                                                        type="button"
                                                        onClick={() => setSelectedService(s === selectedService ? null : s)}
                                                        className={`text-xs px-3 py-1.5 rounded-full border transition-all cursor-pointer ${selectedService === s
                                                                ? "bg-indigo-500/20 border-indigo-500/60 text-indigo-300"
                                                                : "bg-transparent border-white/15 text-white/50 hover:border-white/30"
                                                            }`}
                                                    >
                                                        {s}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Budget */}
                                        <div>
                                            <label className="text-white/60 text-xs mb-1.5 block">Budget Range</label>
                                            <select
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/80 text-sm focus:outline-none focus:border-indigo-500/60 transition-colors"
                                                style={{ background: "rgba(15,23,42, 0.8)" }}
                                                id="contact-budget"
                                            >
                                                <option value="">Select your budget</option>
                                                <option value="starter">$500 – $1,000 (Starter)</option>
                                                <option value="business">$1,000 – $3,000 (Business)</option>
                                                <option value="premium">$3,000 – $8,000 (Premium)</option>
                                                <option value="enterprise">$8,000+ (Enterprise)</option>
                                            </select>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className="text-white/60 text-xs mb-1.5 block">Tell us about your project</label>
                                            <textarea
                                                rows={3}
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                placeholder="Describe your business, goals, and what you're looking for..."
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-indigo-500/60 transition-colors resize-none"
                                                id="contact-message"
                                            />
                                        </div>

                                        {/* Submit */}
                                        <motion.button
                                            type="submit"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="btn-primary w-full justify-center py-4"
                                            id="contact-submit"
                                        >
                                            <Send size={16} />
                                            Send Message — It&apos;s Free
                                            <ArrowRight size={16} />
                                        </motion.button>

                                        <p className="text-white/30 text-xs text-center">
                                            🔒 We respect your privacy. No spam, ever.
                                        </p>
                                    </form>
                                </>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
