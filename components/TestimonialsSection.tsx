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
        color: "from-indigo-500 to-purple-600",
    },
    {
        name: "Marco Romano",
        role: "Owner",
        company: "Bistro Modern Restaurant",
        avatar: "MR",
        rating: 5,
        text: "We were losing customers to competitors with better websites. NexaWeb designed us something beautiful, and now 40% of our reservations come through the website. The ROI is incredible.",
        highlight: "40% of reservations come through the website",
        color: "from-orange-500 to-rose-600",
    },
    {
        name: "Priya Nair",
        role: "Founder",
        company: "TechFounders Co.",
        avatar: "PN",
        rating: 5,
        text: "The team at NexaWeb understood our vision immediately. They delivered a world-class startup website that impresses investors and has helped us raise our seed round. Absolutely exceptional work.",
        highlight: "helped us raise our seed round",
        color: "from-sky-500 to-blue-600",
    },
    {
        name: "David Chen",
        role: "Marketing Director",
        company: "UrbanBoutique Fashion",
        avatar: "DC",
        rating: 5,
        text: "From our first call to launch day was just 3 weeks. The turnaround is unmatched, and so is the quality. Our new e-commerce site drove $50K in revenue in the first month alone.",
        highlight: "$50K in revenue in the first month",
        color: "from-pink-500 to-purple-600",
    },
    {
        name: "Jennifer Walsh",
        role: "Owner",
        company: "Prime Properties Real Estate",
        avatar: "JW",
        rating: 5,
        text: "Our old website was embarrassing. Now prospects tell us our site was the reason they chose us over competitors. NexaWeb's attention to detail is extraordinary — every pixel is perfect.",
        highlight: "every pixel is perfect",
        color: "from-emerald-500 to-teal-600",
    },
    {
        name: "Alex Thompson",
        role: "Co-Founder",
        company: "GreenLeaf Café",
        avatar: "AT",
        rating: 5,
        text: "Partnering with NexaWeb was a game-changer. The online ordering system they built increased our average order value by 25%. Customer feedback on the website has been overwhelmingly positive.",
        highlight: "increased our average order value by 25%",
        color: "from-yellow-500 to-green-600",
    },
];

function TestimonialCard({ review, index }: { review: typeof testimonials[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    // Highlight specific text in the review
    const boldify = (text: string, highlight: string) => {
        const parts = text.split(highlight);
        if (parts.length < 2) return text;
        return (
            <>
                {parts[0]}
                <strong className="text-white font-semibold">{highlight}</strong>
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
            className="testimonial-card relative"
        >
            {/* Quote icon */}
            <div className="absolute top-6 right-6">
                <Quote size={28} className="text-indigo-500/20" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
            </div>

            {/* Text */}
            <p className="text-white/70 text-sm leading-relaxed mb-6">
                &ldquo;{boldify(review.text, review.highlight)}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
                <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                >
                    {review.avatar}
                </div>
                <div>
                    <div className="text-white font-semibold text-sm">{review.name}</div>
                    <div className="text-white/45 text-xs">
                        {review.role}, {review.company}
                    </div>
                </div>
                <div className="ml-auto">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center">
                        <span className="text-xs text-green-400">✓</span>
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
        <section id="testimonials" className="py-24 relative overflow-hidden">
            {/* BG */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.08) 0%, transparent 50%)",
                }}
            />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div ref={ref} className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="flex justify-center mb-4"
                    >
                        <div className="section-tag">✦ Client Love</div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                        Don&apos;t Take Our Word
                        <br />
                        <span className="gradient-text">Take Theirs</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="text-white/55 text-lg max-w-xl mx-auto mb-6"
                    >
                        Real results from real businesses who trusted us with their online presence.
                    </motion.p>

                    {/* Overall rating */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-3 glass rounded-2xl px-6 py-3"
                    >
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                            ))}
                        </div>
                        <span className="text-white font-bold text-lg">5.0</span>
                        <span className="text-white/50 text-sm">from 50+ verified reviews</span>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((review, index) => (
                        <TestimonialCard key={review.name} review={review} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
