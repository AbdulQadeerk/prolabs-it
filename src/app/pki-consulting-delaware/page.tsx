"use client";

import {
    ShieldCheck,
    Lock,
    Key,
    Shield,
    Database,
    Zap,
    Users,
    CheckCircle2,
    ArrowRight,
    TrendingUp,
    Server,
    Globe,
    FileCheck,
    Cpu,
    BookOpen,
    Verified,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const keyCapabilities = [
    {
        title: "Digital Certificate Management",
        desc: "Secure certificate lifecycle management for individuals, devices, and entities in any network environment.",
        icon: <Verified size={24} />,
    },
    {
        title: "Secure Key Generation",
        desc: "High-security key generation and distribution systems that establish robust trust foundations.",
        icon: <Key size={24} />,
    },
    {
        title: "Identity Verification",
        desc: "Robust verification processes to ensure entities are who they claim to be across insecure networks.",
        icon: <Users size={24} />,
    },
    {
        title: "HSM Integration",
        desc: "Specialized expertise in Hardware Security Modules (HSMs) – the high-security heart of PKI.",
        icon: <Cpu size={24} />,
    },
    {
        title: "Trusted Communication",
        desc: "Enabling secure encryption and authentication to protect sensitive data over public infrastructure.",
        icon: <TrendingUp size={24} />,
    },
    {
        title: "Compliance Mastery",
        desc: "Designing PKI solutions aligned with government, transport, and critical national infrastructure standards.",
        icon: <ShieldCheck size={24} />,
    },
];

const pkiServices = [
    {
        title: "PKI Consulting Services",
        desc: "Professional guidance, analysis, and strategy to modernize your security infrastructure.",
        icon: <ShieldCheck size={22} />,
    },
    {
        title: "Professional Implementation",
        desc: "Expert build and deployment of customized PKI solutions tailored to your unique requirements.",
        icon: <Server size={22} />,
    },
    {
        title: "PKI Review Services",
        desc: "Comprehensive assessment of current certificate usage and systems to identify vulnerabilities.",
        icon: <FileCheck size={22} />,
    },
    {
        title: "Security Training",
        desc: "Equipping your staff with the knowledge needed for proper use and handling of PKI assets.",
        icon: <BookOpen size={22} />,
    },
];

const differentiators = [
    "End-to-end support: scoping, design, building, and deploying",
    "Active users of our own PKI for client-ready reliability",
    "Expertise in best-of-breed suppliers and HSM hardware",
    "Proven track record with government and critical infrastructure",
    "Tailored solutions that optimize existing resources beyond standards",
];

const faqItems = [
    {
        question: "What is a PKI consultant?",
        answer:
            "A PKI (Public Key Infrastructure) consultant is an expert who specializes in designing, implementing, and managing secure communication systems. They provide organizations with tailored solutions to protect digital assets and communications using digital certificates and public-key cryptography.",
    },
    {
        question: "What services does a PKI provide?",
        answer:
            "A PKI provides essential security services including digital certificate management, secure key generation and distribution, identity verification for devices and individuals, and encrypted communication tunnels across both private and public networks.",
    },
    {
        question: "What is PKI, and how does it work?",
        answer:
            "Public Key Infrastructure is a system of software, hardware, and policies that enables secure communication. It uses public-key cryptography – specifically pairs of public and private keys – to encrypt data, authenticate users, and ensure the integrity of digital communications.",
    },
    {
        question: "What is the importance of HSMs in PKI?",
        answer:
            "Hardware Security Modules (HSMs) are dedicated physical devices that manage and safeguard digital keys. They are the 'root of trust' in a PKI solution, providing the highest level of tamper-resistant security for session keys and digital signatures.",
    },
];

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } },
};

export default function PkiConsultingPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <main className="sv-page sv-pki">
            {/* ═══ SECTION 1 — HERO BAND ═══ */}
            <section className="sv-hero-band">
                <div className="container">
                    <nav className="sv-breadcrumb">
                        <Link href="/">Home</Link>
                        <span className="sep">/</span>
                        <span>Pages</span>
                        <span className="sep">/</span>
                        <span className="active">PKI Consulting</span>
                    </nav>
                    <h1 className="sv-hero-h1">PKI Consulting</h1>
                </div>
            </section>

            {/* ═══ SECTION 2 — HERO CONTENT ═══ */}
            <section className="sv-hero-section">
                <div className="container">
                    <div className="sv-hero-grid">
                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="sv-hero-content"
                            style={{ paddingRight: "20px" }}
                        >
                            <motion.h2 variants={fadeInUp} className="sv-display-h2" style={{ lineHeight: "1.2", marginBottom: "20px" }}>
                                Trusted Communication: The Power of PKI
                            </motion.h2>

                            <motion.p variants={fadeInUp} className="sv-body-text" style={{ fontSize: "1.15rem", marginBottom: "35px", lineHeight: "1.6" }}>
                                PKI Solutions: Providing Trust and Security for the Digital World. Modernize your infrastructure
                                with expert-led guidance, analysis, and implementation.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="sv-hero-btn-wrap" style={{ gap: "16px", flexWrap: "wrap", marginBottom: "40px" }}>
                                <Link href="/contact" className="sv-btn-primary" style={{ padding: "18px 40px" }}>
                                    Get a Free 30-Minute Consultation <ArrowRight size={18} />
                                </Link>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="sv-meta-tags" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                                <span className="sv-tag">Delaware PKI Experts</span>
                                <span className="sv-tag">HSM Integration</span>
                                <span className="sv-tag">Digital Certificate Security</span>
                                <span className="sv-tag">Cryptographic Consulting</span>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="sv-hero-image"
                        >
                            <div className="sv-image-frame" style={{ borderRadius: "32px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.08)" }}>
                                <Image
                                    src="/pki_hero_dashboard_1772536428647.png"
                                    alt="PKI Consulting Hero"
                                    width={1200}
                                    height={800}
                                    priority
                                    style={{ width: "100%", height: "auto", display: "block", maxHeight: "450px", objectFit: "cover", objectPosition: "center" }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 3 — UNIQUE CAPABILITIES ═══ */}
            <section className="sv-section-info" style={{ background: "#fff" }}>
                <div className="container">
                    <div className="sv-info-grid" style={{ alignItems: "stretch" }}>
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="sv-info-card">
                            <h2 className="sv-h2" style={{ marginBottom: "24px" }}>What distinguishes Professional Labs?</h2>
                            <p className="sv-p" style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "var(--sv-gray)" }}>
                                We are not just consultants; we are active users of our own PKI. This unique position allows us to
                                deliver solutions with unmatched reliability and end-to-end support, from initial design to
                                final deployment.
                            </p>
                            <div style={{ marginTop: "32px", display: "flex", gap: "24px" }}>
                                <div style={{ borderLeft: "4px solid var(--sv-accent)", paddingLeft: "15px" }}>
                                    <h4 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--sv-ink)" }}>15+</h4>
                                    <span style={{ fontSize: "0.85rem", color: "var(--sv-gray)" }}>Years Track Record</span>
                                </div>
                                <div style={{ borderLeft: "4px solid var(--sv-ink)", paddingLeft: "15px" }}>
                                    <h4 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--sv-ink)" }}>HSM</h4>
                                    <span style={{ fontSize: "0.85rem", color: "var(--sv-gray)" }}>Experts</span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="sv-focus-box"
                            style={{ background: "var(--sv-bg)", padding: "40px", borderRadius: "32px", display: "flex", flexDirection: "column", gap: "20px", width: "100%", margin: "0", alignItems: "flex-start" }}
                        >
                            <h4 className="sv-h4" style={{ marginBottom: "0" }}>Our Process</h4>
                            <p className="sv-p" style={{ fontSize: "0.95rem" }}>
                                We collaborate to assess your certificates and capture requirements, designing a custom,
                                <strong> ready-for-installation</strong> PKI solution.
                            </p>
                            <ul className="sv-check-list-pill" style={{ marginTop: "0" }}>
                                <li>Current Capacity Assessment</li>
                                <li>Future Requirement Scoping</li>
                                <li>Custom Design & HSM Config</li>
                                <li>Standards-Compliant Build</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 4 — SERVICES GRID ═══ */}
            <section className="sv-section-grid" style={{ background: "var(--sv-bg)" }}>
                <div className="container">
                    <div className="sv-section-header">
                        <h2 className="sv-h2">Our PKI Consulting Services</h2>
                        <p className="sv-subtitle">Comprehensive cryptographic and infrastructure support</p>
                    </div>
                    <div className="sv-grid-layout" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                        {pkiServices.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="sv-grid-card"
                            >
                                <div className="sv-card-icon">{service.icon}</div>
                                <h4 className="sv-h4">{service.title}</h4>
                                <p className="sv-p">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 5 — INFRASTRUCTURE & BENEFITS ═══ */}
            <section className="sv-section-benefits">
                <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "60px", alignItems: "center" }}>
                    <div className="sv-benefits-image">
                        <div style={{ borderRadius: "24px", overflow: "hidden", maxHeight: "450px", borderLeft: "8px solid var(--sv-accent)" }}>
                            <Image
                                src="/pki_infrastructure_security_1772536450990.png"
                                alt="PKI Infrastructure"
                                width={1200}
                                height={800}
                                style={{ width: "100%", height: "auto", display: "block" }}
                            />
                        </div>
                    </div>
                    <div className="sv-benefits-content">
                        <h2 className="sv-h2">Why Professional Labs?</h2>
                        <p className="sv-p" style={{ fontSize: "1.1rem", marginBottom: "40px" }}>
                            We have a proven track record for Critical National Infrastructure and government agencies.
                        </p>
                        <ul className="sv-check-list">
                            {differentiators.map((diff, idx) => (
                                <li key={idx}>
                                    <CheckCircle2 size={18} className="icon" />
                                    <span>{diff}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 6 — CAPABILITIES GRID ═══ */}
            <section className="sv-section-features" style={{ background: "var(--sv-ink)", color: "#fff" }}>
                <div className="container">
                    <div className="sv-section-header light">
                        <h2 className="sv-h2" style={{ color: "#fff" }}>Key Capabilities</h2>
                        <p className="sv-subtitle" style={{ color: "rgba(255,255,255,0.7)" }}>Expertise spanning the entire cryptographic spectrum</p>
                    </div>
                    <div className="sv-grid-layout">
                        {keyCapabilities.map((cap, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="sv-pro-item"
                                style={{ background: "rgba(255,255,255,0.05)" }}
                            >
                                <div className="sv-check-icon-wrap" style={{ color: "var(--sv-accent)" }}>
                                    {cap.icon}
                                </div>
                                <div>
                                    <h5 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px" }}>{cap.title}</h5>
                                    <p style={{ opacity: 0.8, fontSize: "0.95rem" }}>{cap.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 7 — FAQ ═══ */}
            <section className="sv-section-faq">
                <div className="container">
                    <div className="sv-section-header">
                        <h2 className="sv-h2">Frequently Asked Questions</h2>
                        <p className="sv-subtitle">Everything you need to know about PKI and our consulting services</p>
                    </div>
                    <div className="sv-faq-list">
                        {faqItems.map((item, idx) => (
                            <div key={idx} className={`sv-faq-item ${openFaq === idx ? "active" : ""}`} onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                                <div className="sv-faq-q">
                                    <span>{item.question}</span>
                                    <span className="icon">{openFaq === idx ? "-" : "+"}</span>
                                </div>
                                <AnimatePresence>
                                    {openFaq === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="sv-faq-a"
                                        >
                                            {item.answer}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 8 — CTA ═══ */}
            <section className="sv-cta-banner">
                <div className="container">
                    <div className="sv-cta-box">
                        <h2 className="sv-h2" style={{ color: "#fff" }}>Ready to update your PKI?</h2>
                        <p className="sv-subtitle" style={{ color: "rgba(255,255,255,0.9)", marginBottom: "40px" }}>
                            Get a free 30-minute consultation with a Professional Labs expert.
                        </p>
                        <div className="sv-btn-center-wrap">
                            <Link href="/contact" className="sv-btn-primary" style={{ background: "#fff", color: "var(--sv-ink)" }}>
                                Book Your Free Consultation <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
