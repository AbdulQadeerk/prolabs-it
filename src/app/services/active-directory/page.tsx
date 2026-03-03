"use client";

import {
    Users,
    ShieldCheck,
    Cloud,
    Server,
    Zap,
    Globe,
    FileCheck,
    ArrowRight,
    TrendingUp,
    Briefcase,
    Layout,
    CheckCircle2,
    Database,
    Fingerprint,
    Search,
    RefreshCcw,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const adCapabilities = [
    {
        title: "Centralized Management",
        desc: "Simplify life for administrators by providing centralized user, rights, and rights management.",
        icon: <Layout size={24} />,
    },
    {
        title: "Single Sign-On (SSO)",
        desc: "Users authenticate once and seamlessly access any resources in their authorized domain.",
        icon: <Fingerprint size={24} />,
    },
    {
        title: "Collaboration Tools",
        desc: "Centralized files and resources to enable easier user collaboration and sharing.",
        icon: <Users size={24} />,
    },
    {
        title: "Enhanced Security",
        desc: "Enforcing security policies across the network with centralized control over access.",
        icon: <ShieldCheck size={24} />,
    },
    {
        title: "Business Continuity",
        desc: "Ensuring business continuity with proper file backups and easy disaster recovery.",
        icon: <TrendingUp size={24} />,
    },
    {
        title: "Optimized Performance",
        desc: "Identifying vulnerabilities and expensive queries to boost Active Directory efficiency.",
        icon: <Zap size={24} />,
    },
];

const troubleshootFeatures = [
    {
        title: "Highly Privileged Groups",
        desc: "To ensure proper access control and security, generate reports on highly privileged groups.",
        icon: <ShieldCheck size={22} />,
    },
    {
        title: "Replication Error Monitoring",
        desc: "Monitor for AD replication errors that could impact the consistency and reliability of your AD service.",
        icon: <RefreshCcw size={22} />,
    },
    {
        title: "Expensive LDAP Query Detection",
        desc: "Identify expensive LDAP queries that could slow down Active Directory performance.",
        icon: <Search size={22} />,
    },
    {
        title: "DNS & Name Resolution",
        desc: "Detect and troubleshoot DNS problems to ensure smooth and reliable network operation.",
        icon: <Globe size={22} />,
    },
];

const protectionHighlights = [
    {
        label: "Real-time security at enterprise scale",
        text: "Leverage the power and scale of the cloud to safeguard against increasing security threats."
    },
    {
        label: "Quick threat detection",
        text: "Monitor behavior of users, devices, and resources to detect anomalies in real time."
    },
    {
        label: "Focused issue resolution",
        text: "Efficient attack timeline feed surfaces the right issues for faster, focused resolution."
    }
];

const faqItems = [
    {
        question: "What is Active Directory, and why do you need it?",
        answer: "Active Directory is a service that provides expert advice and guidance on the design, implementation, and management of Active Directory infrastructure. You may need Active Directory consulting to optimize your existing environment, enhance security, or ensure compliance with regulatory requirements.",
    },
    {
        question: "What are the benefits of Active Directory consulting?",
        answer: "The benefits include access to expert consultants, customized solutions tailored to your specific needs, optimization of your Active Directory infrastructure, improved security, and reduced administrative overhead.",
    },
    {
        question: "What types of organizations can benefit from Active Directory Services?",
        answer: "Any organization that uses Microsoft-based IT infrastructure and relies on Active Directory for user authentication, access control, and directory services can benefit—from SMBs to large government agencies.",
    },
    {
        question: "How long does an AD consulting project usually take?",
        answer: "The duration varies depending on scope. A simple implementation may take a few weeks, while complex multi-forest projects can take several months.",
    },
    {
        question: "What qualifications should an AD consultant have?",
        answer: "They should have a strong understanding of Microsoft AD, relevant certifications (like MCSE), and proven experience with migration, security, and troubleshooting in large-scale environments.",
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

export default function ActiveDirectoryPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <main className="sv-page sv-ad">
            {/* ═══ SECTION 1 — HERO BAND ═══ */}
            <section className="sv-hero-band">
                <div className="container">
                    <nav className="sv-breadcrumb">
                        <Link href="/">Home</Link>
                        <span className="sep">/</span>
                        <span>Pages</span>
                        <span className="sep">/</span>
                        <span className="active">Active Directory Consulting</span>
                    </nav>
                    <h1 className="sv-hero-h1">Active Directory Consulting</h1>
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
                                Empower your team with optimized Active Directory solutions.
                            </motion.h2>

                            <motion.p variants={fadeInUp} className="sv-body-text" style={{ fontSize: "1.15rem", marginBottom: "35px", lineHeight: "1.6" }}>
                                Professional Labs helps you design, deploy, and troubleshoot complex AD deployments
                                across your enterprise, ensuring secure and efficient network management.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="sv-hero-btn-wrap" style={{ gap: "16px", flexWrap: "wrap", marginBottom: "40px" }}>
                                <Link href="/contact" className="sv-btn-primary" style={{ padding: "18px 40px" }}>
                                    Get a Free 30-Minute Consultation <ArrowRight size={18} />
                                </Link>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="sv-meta-tags">
                                <span className="sv-tag">AD DS Expert Delaware</span>
                                <span className="sv-tag">Hybrid Identity</span>
                                <span className="sv-tag">SSO Integration</span>
                                <span className="sv-tag">Azure AD Connect</span>
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
                                    src="/ad_hero_dashboard_1772545671247.png"
                                    alt="Active Directory Consulting Hero"
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

            {/* ═══ SECTION 3 — UNIQUE CAPABILITIES (2 column layout) ═══ */}
            <section className="sv-section-info" style={{ background: "#fff" }}>
                <div className="container">
                    <div className="sv-info-grid" style={{ alignItems: "stretch" }}>
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="sv-info-card">
                            <h2 className="sv-h2" style={{ marginBottom: "24px" }}>Why Professional Labs?</h2>
                            <p className="sv-p" style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "var(--sv-gray)" }}>
                                For over 20 years, we have provided expertise for all Active Directory and AD DS releases.
                                Our team manages complex deployments across the enterprise, ensuring secure,
                                centralized management that evolves with your business.
                            </p>
                            <div style={{ marginTop: "32px", display: "flex", gap: "24px" }}>
                                <div style={{ borderLeft: "4px solid var(--sv-accent)", paddingLeft: "15px" }}>
                                    <h4 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--sv-ink)" }}>20+</h4>
                                    <span style={{ fontSize: "0.85rem", color: "var(--sv-gray)" }}>Years Experience</span>
                                </div>
                                <div style={{ borderLeft: "4px solid var(--sv-ink)", paddingLeft: "15px" }}>
                                    <h4 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--sv-ink)" }}>Expert</h4>
                                    <span style={{ fontSize: "0.85rem", color: "var(--sv-gray)" }}>AD Architects</span>
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
                            <h4 className="sv-h4" style={{ marginBottom: "0" }}>Hybrid Solutions</h4>
                            <p className="sv-p" style={{ fontSize: "0.95rem" }}>
                                Use Azure AD Connect to sync on-premises identities to the cloud, forming a
                                <strong> robust hybrid network</strong> recommended by our consultants.
                            </p>
                            <ul className="sv-check-list-pill" style={{ marginTop: "0" }}>
                                <li>Azure AD Hybrid Sync</li>
                                <li>Single Sign-on (SSO)</li>
                                <li>Cloud App Registering</li>
                                <li>Identity-as-a-Service (IDaaS)</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 4 — TROUBLESHOOTING GRID ═══ */}
            <section className="sv-section-grid" style={{ background: "var(--sv-bg)" }}>
                <div className="container">
                    <div className="sv-section-header">
                        <h2 className="sv-h2">Efficiently Troubleshoot Issues</h2>
                        <p className="sv-subtitle">Identifying vulnerabilities and optimizing your AD structure</p>
                    </div>
                    <div className="sv-grid-layout" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                        {troubleshootFeatures.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="sv-grid-card"
                            >
                                <div className="sv-card-icon">{item.icon}</div>
                                <h4 className="sv-h4">{item.title}</h4>
                                <p className="sv-p">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 5 — INFRASTRUCTURE & PROTECTION ═══ */}
            <section className="sv-section-benefits">
                <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "60px", alignItems: "center" }}>
                    <div className="sv-benefits-image">
                        <div style={{ borderRadius: "24px", overflow: "hidden", maxHeight: "450px", borderLeft: "8px solid var(--sv-accent)" }}>
                            <Image
                                src="/ad_hybrid_sync_infra_1772545700338.png"
                                alt="AD Hybrid Sync"
                                width={1200}
                                height={800}
                                style={{ width: "100%", height: "auto", display: "block" }}
                            />
                        </div>
                    </div>
                    <div className="sv-benefits-content">
                        <h2 className="sv-h2">Safeguard with Azure Protection</h2>
                        <p className="sv-p" style={{ fontSize: "1.1rem", marginBottom: "40px" }}>
                            Leverage the power and scale of the cloud to safeguard against sophisticated security threats.
                        </p>
                        <ul className="sv-pro-features">
                            {protectionHighlights.map((item, idx) => (
                                <li key={idx} className="sv-pro-f-card">
                                    <div className="sv-pro-f-icon" style={{ color: "var(--sv-accent)" }}>
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div className="sv-pro-f-body">
                                        <strong>{item.label}:</strong> {item.text}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 6 — CAPABILITIES GRID (Dark themed) ═══ */}
            <section className="sv-section-features" style={{ background: "var(--sv-ink)", color: "#fff" }}>
                <div className="container">
                    <div className="sv-section-header light">
                        <h2 className="sv-h2" style={{ color: "#fff" }}>Simplifying Administration</h2>
                        <p className="sv-subtitle" style={{ color: "rgba(255,255,255,0.7)" }}>Enhancing security while streamlining management</p>
                    </div>
                    <div className="sv-grid-layout">
                        {adCapabilities.map((cap, idx) => (
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
                        <p className="sv-subtitle">Common technical insights on Active Directory solutions</p>
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
                        <h2 className="sv-h2" style={{ color: "#fff" }}>Ready to optimize your Active Directory?</h2>
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
