"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "CEO",
        company: "LaunchPad SaaS",
        avatar: "SM",
        rating: 5,
        text: "NexaWeb transformed our online presence completely. Our new website loads 4x faster, looks absolutely stunning, and our conversion rate went from 2% to 11% in just 3 months. Best investment we've made.",
        highlight: "conversion rate went from 2% to 11%",
        color: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    },
    {
        name: "Marco Romano",
        role: "Owner",
        company: "Bistro Modern Restaurant",
        avatar: "MR",
        rating: 5,
        text: "We were losing customers to competitors with better websites. NexaWeb designed us something beautiful, and now 40% of our reservations come through the website. The ROI is incredible.",
        highlight: "40% of reservations come through the website",
        color: "linear-gradient(135deg, #f97316, #be123c)",
    },
    {
        name: "Priya Nair",
        role: "Founder",
        company: "TechFounders Co.",
        avatar: "PN",
        rating: 5,
        text: "The team at NexaWeb understood our vision immediately. They delivered a world-class startup website that impresses investors and has helped us raise our seed round. Absolutely exceptional work.",
        highlight: "helped us raise our seed round",
        color: "linear-gradient(135deg, #0ea5e9, #2563eb)",
    },
    {
        name: "David Chen",
        role: "Marketing Director",
        company: "UrbanBoutique Fashion",
        avatar: "DC",
        rating: 5,
        text: "From our first call to launch day was just 3 weeks. The turnaround is unmatched, and so is the quality. Our new e-commerce site drove $50K in revenue in the first month alone.",
        highlight: "$50K in revenue in the first month",
        color: "linear-gradient(135deg, #ec4899, #8b5cf6)",
    },
    {
        name: "Jennifer Walsh",
        role: "Owner",
        company: "Prime Properties Real Estate",
        avatar: "JW",
        rating: 5,
        text: "Our old website was embarrassing. Now prospects tell us our site was the reason they chose us over competitors. NexaWeb's attention to detail is extraordinary — every pixel is perfect.",
        highlight: "every pixel is perfect",
        color: "linear-gradient(135deg, #10b981, #0d9488)",
    },
    {
        name: "Alex Thompson",
        role: "Co-Founder",
        company: "GreenLeaf Café",
        avatar: "AT",
        rating: 5,
        text: "Partnering with NexaWeb was a game-changer. The online ordering system they built increased our average order value by 25%. Customer feedback on the website has been overwhelmingly positive.",
        highlight: "increased our average order value by 25%",
        color: "linear-gradient(135deg, #eab308, #22c55e)",
    },
];

function TestimonialCard({ review, index }: { review: typeof testimonials[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const boldify = (text: string, highlight: string) => {
        const parts = text.split(highlight);
        if (parts.length < 2) return text;
        return (
            <>
                {parts[0]}
                <strong style={{ color: "#f8fafc", fontWeight: 600 }}>{highlight}</strong>
                {parts[1]}
            </>
        );
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            className="testimonial-card"
        >
            {/* Quote icon */}
            <div style={{ position: "absolute", top: 24, right: 24 }}>
                <Quote size={26} style={{ color: "rgba(99,102,241,0.2)" }} />
            </div>

            {/* Stars */}
            <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
                {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={14} style={{ color: "#facc15", fill: "#facc15" }} />
                ))}
            </div>

            {/* Text */}
            <p style={{ color: "rgba(248,250,252,0.7)", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
                &ldquo;{boldify(review.text, review.highlight)}&rdquo;
            </p>

            {/* Author */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: review.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontSize: 13,
                        fontWeight: 700,
                        flexShrink: 0,
                    }}
                >
                    {review.avatar}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ color: "#f8fafc", fontWeight: 600, fontSize: 14 }}>{review.name}</div>
                    <div style={{ color: "rgba(248,250,252,0.45)", fontSize: 12 }}>
                        {review.role}, {review.company}
                    </div>
                </div>
                <div
                    style={{
                        width: 30,
                        height: 30,
                        borderRadius: 8,
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <span style={{ color: "#4ade80", fontSize: 12, fontWeight: 600 }}>✓</span>
                </div>
            </div>
        </motion.div>
    );
}

export default function TestimonialsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section id="testimonials" className="section">
            {/* BG */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    background:
                        "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.08) 0%, transparent 50%)",
                }}
            />

            <div className="container" style={{ position: "relative", zIndex: 10 }}>
                {/* Header */}
                <div ref={ref} style={{ textAlign: "center", marginBottom: 64 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        style={{ display: "flex", justifyContent: "center" }}
                    >
                        <div className="section-tag">✦ Client Love</div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "clamp(1.875rem, 4vw, 3rem)",
                            fontWeight: 800,
                            marginBottom: 16,
                            color: "#f8fafc",
                            lineHeight: 1.15,
                        }}
                    >
                        Don&apos;t Take Our Word
                        <br />
                        <span className="gradient-text">Take Theirs</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        style={{
                            color: "rgba(248,250,252,0.55)",
                            fontSize: 17,
                            maxWidth: 520,
                            margin: "0 auto",
                            marginBottom: 24,
                            lineHeight: 1.7,
                        }}
                    >
                        Real results from real businesses who trusted us with their online presence.
                    </motion.p>

                    {/* Overall rating */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.3 }}
                        style={{ display: "flex", justifyContent: "center" }}
                    >
                        <div
                            className="glass"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 12,
                                borderRadius: 16,
                                padding: "12px 24px",
                            }}
                        >
                            <div style={{ display: "flex", gap: 4 }}>
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} size={17} style={{ color: "#facc15", fill: "#facc15" }} />
                                ))}
                            </div>
                            <span style={{ color: "#f8fafc", fontWeight: 700, fontSize: 17 }}>5.0</span>
                            <span style={{ color: "rgba(248,250,252,0.5)", fontSize: 13 }}>
                                from 50+ verified reviews
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: 24,
                    }}
                >
                    {testimonials.map((review, index) => (
                        <TestimonialCard key={review.name} review={review} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
