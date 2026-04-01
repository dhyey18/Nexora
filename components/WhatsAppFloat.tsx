"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const WA_NUMBER = "919429184788";
const WA_MESSAGE = "Hi! I'm interested in your web development services. Can we connect?";

export default function WhatsAppFloat() {
    const [hovered, setHovered] = useState(false);

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            style={{
                position: "fixed",
                bottom: 28,
                right: 28,
                zIndex: 999,
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "#25D366",
                borderRadius: 980,
                padding: hovered ? "13px 20px 13px 16px" : "13px 16px",
                boxShadow: "0 4px 24px rgba(37,211,102,0.4), 0 2px 8px rgba(0,0,0,0.2)",
                textDecoration: "none",
                overflow: "hidden",
                transition: "padding 0.3s cubic-bezier(0.22,1,0.36,1)",
            }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Pulse ring */}
            <motion.span
                animate={{ scale: [1, 1.9, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 980,
                    background: "rgba(37,211,102,0.35)",
                    pointerEvents: "none",
                }}
            />

            {/* WhatsApp SVG icon */}
            <svg
                viewBox="0 0 32 32"
                width="22"
                height="22"
                fill="white"
                style={{ flexShrink: 0, position: "relative" }}
            >
                <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.649 4.823 1.785 6.845L2 30l7.355-1.766A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.47 11.47 0 01-5.859-1.607l-.42-.25-4.362 1.048 1.068-4.253-.274-.436A11.45 11.45 0 014.5 16C4.5 9.596 9.596 4.5 16 4.5S27.5 9.596 27.5 16 22.404 27.5 16 27.5zm6.29-8.61c-.345-.173-2.04-1.006-2.356-1.12-.316-.115-.546-.173-.776.173-.23.345-.89 1.12-1.09 1.35-.2.23-.4.26-.745.087-.345-.173-1.456-.537-2.774-1.713-1.025-.915-1.717-2.044-1.917-2.39-.2-.344-.021-.53.15-.702.154-.154.345-.4.518-.6.173-.2.23-.345.345-.575.115-.23.058-.432-.029-.605-.087-.173-.776-1.87-1.063-2.561-.28-.672-.564-.58-.776-.591l-.662-.012c-.23 0-.604.086-.92.432-.316.346-1.207 1.18-1.207 2.876s1.236 3.338 1.408 3.568c.173.23 2.432 3.713 5.893 5.209.824.356 1.467.569 1.968.728.827.263 1.58.226 2.175.137.663-.1 2.04-.833 2.327-1.637.287-.804.287-1.493.2-1.637-.086-.144-.316-.23-.66-.403z" />
            </svg>

            {/* Label — slides in on hover */}
            <AnimatePresence>
                {hovered && (
                    <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{
                            color: "#fff",
                            fontSize: 14,
                            fontWeight: 600,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            position: "relative",
                        }}
                    >
                        Chat on WhatsApp
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.a>
    );
}
