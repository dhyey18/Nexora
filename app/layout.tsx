import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexora – We Build Modern Websites That Grow Your Business | Ahmedabad, India",
  description: "Premium web development agency based in Ahmedabad, India. We specialize in modern, high-performance websites for businesses — from startups to enterprises. Founded by Dhyey Patel & Manasvi Shah.",
  keywords: "web development, website design, SEO, modern websites, business website, agency, Ahmedabad, India, Gujarat",
  openGraph: {
    title: "Nexora – We Build Modern Websites That Grow Your Business | Ahmedabad, India",
    description: "Premium web development agency based in Ahmedabad, India specializing in modern, high-performance websites.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
