"use client";

import {
    Rocket,
    Users,
    Zap,
    Shield,
    Cloud,
    TrendingUp,
    ArrowRight,
    Globe,
    Headphones,
    Briefcase,
    CheckCircle2,
    ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

/* ── Data ── */

const cards = [
    {
        title: "Accelerated Path to Azure",
        description:
            "From single-application migrations to full data center transformations, Professional Labs results-driven assessment, planning, design, migration, deployment.",
        icon: <Rocket size={24} />,
    },
    {
        title: "White Labeled Services",
        description:
            "Professional Labs offer White Labeled services for CSP's where we act as an extension of your team enabling you to achieve more.",
        icon: <Users size={24} />,
    },
    {
        title: "Reduce Complexity",
        description:
            "Professional Labs with 24x7x365 support to simplify operations and reduce lead times. Professional Labs is always up to date with Azure's continual evolution.",
        icon: <Zap size={24} />,
    },
    {
        title: "Heightened Security and Reliability",
        description:
            "Professional Labs provides flexible security offerings as an extension of native Azure security capabilities, helping to protect against advanced threats and cyberattacks.",
        icon: <Shield size={24} />,
    },
    {
        title: "Hybrid and Multi-Cloud-Ready",
        description:
            "Enterprise IT complexity requires multi-cloud and hybrid strategies. Professional Labs integrates private cloud, bare metal and hybrid components.",
        icon: <Cloud size={24} />,
    },
    {
        title: "Azure or M365 Pre Sales",
        description:
            "From Lead Generation to content creation or Email Marketing, we help with it all. We understand the B2B market and curate customized strategies.",
        icon: <TrendingUp size={24} />,
    },
];

const stats = [
    { value: "35+", label: "Countries", icon: <Globe size={24} /> },
    { value: "24/7", label: "Expert Support", icon: <Headphones size={24} /> },
    { value: "500+", label: "Happy Clients", icon: <Briefcase size={24} /> },
];

const whyPartner = [
    "Deep expertise in Microsoft Azure ecosystem",
    "Seamless execution of multi-cloud strategies",
    "24/7/365 operational excellence",
    "Customized pre-sales and lead gen strategies",
    "White-labeled services tailored to your brand",
    "Certified Azure architects and engineers",
];

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } },
};

export default function PartnershipClient() {
    return (
        <main className="sv-page sv-azure">
            {/* ═══ SECTION 1 — HERO BAND ═══ */}
            <section className="sv-hero-band">
                <div className="container">
                    <nav className="sv-breadcrumb">
                        <Link href="/">Home</Link>
                        <span className="sep">/</span>
                        <span className="active">CSP Partner Program</span>
                    </nav>
                    <h1 className="sv-hero-h1">CSP Partner Program</h1>
                </div>
            </section>

            {/* ═══ SECTION 2 — HERO MAIN (text + CTA) ═══ */}
            <section className="sv-hero-main">
                <div className="container">
                    <div className="sv-hero-grid">
                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="sv-hero-content"
                        >
                            <motion.h2 variants={fadeInUp} className="sv-display-h2">
                                Elevate Your CSP Business with Expert Precision
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="sv-hero-p">
                                Accelerate your revenue with Professional Labs end-to-end Azure solutions.
                                We act as a seamless extension of your team, solving cloud complexity and driving competitive advantage.
                            </motion.p>

                            <motion.div
                                variants={fadeInUp}
                                className="sv-hero-btn-wrap"
                                style={{ gap: "16px", flexWrap: "wrap" }}
                            >
                                <Link href="/contact" className="sv-btn-primary">
                                    Partner With Us <ArrowRight size={18} />
                                </Link>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="sv-meta-tags">
                                <span className="sv-tag">Global CSP Partner Program</span>
                                <span className="sv-tag">Azure Solutions Partner</span>
                                <span className="sv-tag">White Labeled Services</span>
                                <span className="sv-tag">24/7 Cloud Support</span>
                            </motion.div>
                        </motion.div>

                        {/* Stats Visual Panel */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="sv-hero-image"
                        >
                            <div
                                style={{
                                    background: "linear-gradient(135deg, #082638, #0d4f6c)",
                                    borderRadius: "32px",
                                    padding: "50px 36px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "28px",
                                }}
                            >
                                {stats.map((stat, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "20px",
                                            background: "rgba(255,255,255,0.06)",
                                            backdropFilter: "blur(12px)",
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            borderRadius: "20px",
                                            padding: "28px 30px",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "56px",
                                                height: "56px",
                                                borderRadius: "14px",
                                                background: "rgba(34,167,224,0.15)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "#22a7e0",
                                                flexShrink: 0,
                                            }}
                                        >
                                            {stat.icon}
                                        </div>
                                        <div>
                                            <div
                                                style={{
                                                    fontSize: "2rem",
                                                    fontWeight: 800,
                                                    color: "#fff",
                                                    letterSpacing: "-0.02em",
                                                    lineHeight: 1.1,
                                                }}
                                            >
                                                {stat.value}
                                            </div>
                                            <div
                                                style={{
                                                    fontSize: "0.9rem",
                                                    color: "rgba(255,255,255,0.55)",
                                                    fontWeight: 600,
                                                    textTransform: "uppercase",
                                                    letterSpacing: "0.1em",
                                                    marginTop: "4px",
                                                }}
                                            >
                                                {stat.label}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 3 — OVERVIEW ═══ */}
            <section className="sv-section-info">
                <div className="container">
                    <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center", marginBottom: "60px" }}>
                        <h2 className="sv-h2" style={{ marginBottom: "24px" }}>
                            Committed to Your Long-Term Success
                        </h2>
                        <p className="sv-subtitle">
                            Many CSPs are seeking certified experts to assist them with the complexity of Microsoft Azure.
                            Professional Labs has the tools and expertise to help you unravel cloud complexities faster and easier.
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 4 — STRATEGIC ADVANTAGES (cards) ═══ */}
            <section className="sv-section-info" style={{ background: "#fff" }}>
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 className="sv-h2" style={{ marginBottom: "16px" }}>
                            Strategic Partnership Advantages
                        </h2>
                        <p className="sv-subtitle">
                            Comprehensive services to accelerate your CSP revenue and cloud growth
                        </p>
                    </div>
                    <div className="sv-tech-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                        {cards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="sv-scard"
                                style={{ flexDirection: "column" }}
                            >
                                <div className="sv-scard-icon">{card.icon}</div>
                                <div className="sv-scard-body">
                                    <h5>{card.title}</h5>
                                    <p>{card.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 5 — B2B MARKETING (focus text) ═══ */}
            <section className="sv-section-focus" style={{ background: "var(--sv-bg)" }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="sv-focus-box"
                        style={{ flexDirection: "column", maxWidth: "900px", textAlign: "left" }}
                    >
                        <h3 className="sv-h2" style={{ marginBottom: "20px" }}>
                            More Than Just Technical Support
                        </h3>
                        <p className="sv-p" style={{ marginBottom: "18px", color: "var(--sv-gray)" }}>
                            Professional Labs understands the B2B market and curates a highly customized strategy for your business interest.
                            From lead generation to content creation or email marketing, we help with it all.
                        </p>
                        <p className="sv-p" style={{ color: "var(--sv-gray)" }}>
                            We provide the latest tools and technologies to help you compete in the modern cloud landscape.
                            Our team of certified Azure experts works as a seamless extension of your organization,
                            ensuring rapid cloud adoption and improved business outcomes.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ═══ SECTION 6 — WHY PROFESSIONAL LABS (dark bg) ═══ */}
            <section className="sv-section-analysis">
                <div className="container">
                    <div className="sv-partnership-why-grid">
                        <div>
                            <h2 className="sv-h2" style={{ color: "white", marginBottom: "36px" }}>
                                Why Partner with Professional Labs?
                            </h2>
                            <div className="sv-pros-grid" style={{ gridTemplateColumns: "1fr" }}>
                                {whyPartner.map((point, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="sv-pro-item"
                                    >
                                        <div className="sv-check-icon-wrap">
                                            <CheckCircle2 size={20} color="var(--sv-accent)" />
                                        </div>
                                        <span style={{ color: "rgba(255,255,255,0.88)", fontWeight: 500 }}>
                                            {point}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            style={{
                                background: "rgba(255,255,255,0.05)",
                                backdropFilter: "blur(12px)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                borderRadius: "32px",
                                padding: "56px 40px",
                                textAlign: "center",
                            }}
                        >
                            <h3 className="sv-h3" style={{ color: "white", marginBottom: "20px" }}>
                                Expert Consultation
                            </h3>
                            <p
                                style={{
                                    color: "rgba(255,255,255,0.65)",
                                    fontSize: "1.05rem",
                                    lineHeight: "1.7",
                                    marginBottom: "36px",
                                }}
                            >
                                Accelerate your cloud journey with a free strategy session with our Azure certified architects.
                                Partner with Professional Labs and transform your business outcomes with certified Azure experts by your side.
                            </p>
                            <Link href="/contact" className="sv-btn-white">
                                Schedule a Strategy Meeting <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 7 — STATS (feature cards) ═══ */}
            <section className="sv-why-section">
                <div className="container">
                    <div className="sv-section-header">
                        <h2 className="sv-h2">Our Global Reach</h2>
                    </div>
                    <div className="sv-features-grid">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="sv-feature-card"
                            >
                                <div className="sv-feature-icon">{stat.icon}</div>
                                <div>
                                    <p className="sv-feature-text" style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "6px" }}>
                                        {stat.value}
                                    </p>
                                    <p className="sv-p" style={{ fontSize: "0.95rem", color: "var(--sv-gray)" }}>
                                        {stat.label}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 8 — CTA ═══ */}
            <section className="sv-section-cta">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="sv-cta-banner"
                    >
                        <h2 className="sv-h2" style={{ color: "white", marginBottom: "20px" }}>
                            Ready to Scale Your CSP Revenue?
                        </h2>
                        <p
                            style={{
                                color: "rgba(255,255,255,0.8)",
                                fontSize: "1.15rem",
                                marginBottom: "40px",
                                maxWidth: "600px",
                                margin: "0 auto 40px",
                            }}
                        >
                            Partner with Professional Labs and transform your business outcomes with certified Azure experts by your side.
                            Join over 500+ successful partners worldwide.
                        </p>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Link href="/contact" className="sv-btn-white">
                                Get Started Today <ChevronRight size={18} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
