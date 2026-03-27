"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Aarav Mehta",
        role: "Founder",
        company: "ScaleUp Studios, Mumbai",
        avatar: "AM",
        avatarColor: "#2997FF",
        rating: 5,
        text: "Catalyq transformed our online presence completely. Our new website loads 4x faster, looks absolutely stunning, and our conversion rate went from 2% to 11% in just 3 months. Best investment we've made.",
        highlight: "conversion rate went from 2% to 11%",
    },
    {
        name: "Rohan Kapoor",
        role: "Owner",
        company: "Spice Route Kitchen, Delhi",
        avatar: "RK",
        avatarColor: "#30D158",
        rating: 5,
        text: "We were losing customers to competitors with better websites. Catalyq designed us something beautiful, and now 40% of our reservations come through the website. The ROI is incredible.",
        highlight: "40% of reservations come through the website",
    },
    {
        name: "Priya Nair",
        role: "Co-Founder",
        company: "TechFounders Co., Bangalore",
        avatar: "PN",
        avatarColor: "#BF5AF2",
        rating: 5,
        text: "The team at Catalyq understood our vision immediately. They delivered a world-class startup website that impresses investors and has helped us raise our seed round. Absolutely exceptional work.",
        highlight: "helped us raise our seed round",
    },
    {
        name: "Ananya Sharma",
        role: "Marketing Head",
        company: "UrbanBoutique Fashion, Jaipur",
        avatar: "AS",
        avatarColor: "#FF9F0A",
        rating: 5,
        text: "From our first call to launch day was just 3 weeks. The turnaround is unmatched, and so is the quality. Our new e-commerce site drove ₹40L in revenue in the first month alone.",
        highlight: "₹40L in revenue in the first month",
    },
    {
        name: "Vikram Desai",
        role: "Director",
        company: "Prime Properties, Ahmedabad",
        avatar: "VD",
        avatarColor: "#FF375F",
        rating: 5,
        text: "Our old website was embarrassing. Now prospects tell us our site was the reason they chose us over competitors. Catalyq's attention to detail is extraordinary — every pixel is perfect.",
        highlight: "every pixel is perfect",
    },
    {
        name: "Sneha Iyer",
        role: "Owner",
        company: "MISO Artisan Café, Ahmedabad",
        avatar: "SI",
        avatarColor: "#64D2FF",
        rating: 5,
        text: "Partnering with Catalyq was a game-changer. The online ordering system they built increased our average order value by 25%. Customer feedback on the website has been overwhelmingly positive.",
        highlight: "increased our average order value by 25%",
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
                <strong style={{ color: "var(--foreground)", fontWeight: 600 }}>{highlight}</strong>
                {parts[1]}
            </>
        );
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
            className="testimonial-card"
        >
            {/* Quote icon */}
            <div style={{ position: "absolute", top: 24, right: 28 }}>
                <Quote size={24} style={{ color: `${review.avatarColor}20`, fill: `${review.avatarColor}15` }} />
            </div>

            {/* Stars */}
            <div style={{ display: "flex", gap: 3, marginBottom: 18 }}>
                {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={14} style={{ color: "#facc15", fill: "#facc15" }} />
                ))}
            </div>

            {/* Text */}
            <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
                &ldquo;{boldify(review.text, review.highlight)}&rdquo;
            </p>

            {/* Author */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, borderTop: "1px solid var(--border)", paddingTop: 18 }}>
                <div
                    style={{
                        width: 38,
                        height: 38,
                        borderRadius: 10,
                        background: `${review.avatarColor}18`,
                        border: `1px solid ${review.avatarColor}25`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: review.avatarColor,
                        fontSize: 13,
                        fontWeight: 700,
                        flexShrink: 0,
                    }}
                >
                    {review.avatar}
                </div>
                <div>
                    <div style={{ color: "var(--foreground)", fontWeight: 600, fontSize: 14 }}>{review.name}</div>
                    <div style={{ color: "var(--text-tertiary)", fontSize: 12 }}>
                        {review.role}, {review.company}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function TestimonialsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section id="testimonials" className="section-alt">
            <div className="container" style={{ position: "relative", zIndex: 10 }}>
                <div ref={ref} style={{ textAlign: "center", marginBottom: 52 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                    >
                        <div className="section-tag">Client Love</div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                            fontWeight: 700,
                            marginBottom: 14,
                            color: "var(--heading-color)",
                            lineHeight: 1.08,
                            letterSpacing: "-0.03em",
                        }}
                    >
                        Don&apos;t take our word.
                        <br />
                        <span className="gradient-text">Take theirs.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        style={{ color: "var(--text-secondary)", fontSize: 17, maxWidth: 460, margin: "0 auto", lineHeight: 1.55 }}
                    >
                        Real results from real businesses who trusted us with their online presence.
                    </motion.p>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: 12,
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
