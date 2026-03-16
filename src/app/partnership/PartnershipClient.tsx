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
    ChevronDown,
    ChevronUp,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* ── Data ── */

const cards = [
    {
        title: "Accelerated Path to Azure",
        description:
            "From application migrations to full data center transformations, Professional Labs provides assessment, architecture design, migration planning, and deployment services that enable faster cloud adoption.",
        icon: <Rocket size={24} />,
    },
    {
        title: "White-Labeled Azure Services",
        description:
            "Our white-labeled cloud services allow CSP partners to deliver enterprise-grade Azure solutions under their own brand while leveraging Professional Labs expertise behind the scenes.",
        icon: <Users size={24} />,
    },
    {
        title: "Reduced Cloud Complexity",
        description:
            "Professional Labs provides 24/7/365 cloud support to help partners manage Azure environments efficiently while staying aligned with the latest Microsoft cloud updates and best practices.",
        icon: <Zap size={24} />,
    },
    {
        title: "Enhanced Security and Reliability",
        description:
            "We extend Azure's built-in security capabilities with additional services including threat protection, compliance monitoring, and advanced security architecture.",
        icon: <Shield size={24} />,
    },
    {
        title: "Hybrid and Multi-Cloud Ready",
        description:
            "Modern enterprises require hybrid and multi-cloud environments. Professional Labs supports integrations across private cloud infrastructure, Azure environments, and hybrid architectures.",
        icon: <Cloud size={24} />,
    },
    {
        title: "Azure and Microsoft 365 Pre-Sales Support",
        description:
            "From lead generation to marketing support and technical consulting, Professional Labs helps partners win new deals. Our team supports content creation, campaign strategy, and technical pre-sales consulting tailored for the B2B market.",
        icon: <TrendingUp size={24} />,
    },
];

const stats = [
    { value: "35+", label: "Countries", icon: <Globe size={24} /> },
    { value: "24/7", label: "Expert Support", icon: <Headphones size={24} /> },
    { value: "500+", label: "Happy Clients", icon: <Briefcase size={24} /> },
];

const whyPartner = [
    "Deep expertise in the Microsoft Azure ecosystem",
    "Seamless multi-cloud and hybrid cloud implementation",
    "24/7/365 cloud operations and technical support",
    "Customized pre-sales and lead generation strategies",
    "White-labeled cloud services aligned with your brand",
    "Certified Azure architects and cloud engineers",
];

const faqItems = [
    {
        question: "What is the CSP Partner Program?",
        answer:
            "The Cloud Solution Provider (CSP) Partner Program allows businesses to sell Microsoft cloud services such as Azure and Microsoft 365 while providing value-added services, billing, and support to customers.",
    },
    {
        question: "How does Professional Labs support CSP partners?",
        answer:
            "Professional Labs supports CSP partners with Azure architecture, cloud migrations, white-labeled services, security solutions, and 24/7 technical support.",
    },
    {
        question: "Can Professional Labs provide white-labeled cloud services?",
        answer:
            "Yes. Professional Labs offers white-labeled Azure services that allow partners to deliver enterprise cloud solutions under their own brand.",
    },
    {
        question: "What services can CSP partners offer with Professional Labs?",
        answer:
            "Partners can offer Azure cloud infrastructure, virtual desktop environments, cloud security, managed IT services, migration services, and hybrid cloud solutions.",
    },
    {
        question: "Do you provide technical support for Azure deployments?",
        answer:
            "Yes. Professional Labs provides 24/7 cloud support, architecture consulting, and deployment assistance for Azure and Microsoft cloud solutions.",
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

export default function PartnershipClient() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

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
                    <h1 className="sv-hero-h1">CSP Partner Program for Azure Cloud Growth</h1>
                </div>
            </section>

            {/* ═══ SECTION 2 — HERO MAIN (text + CTA) ═══ */}
            <section className="sv-hero-main">
                <div className="container">
                    <div className="sv-hero-grid sv-partnership-hero-grid">
                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="sv-hero-content"
                        >
                            <motion.h2 variants={fadeInUp} className="sv-display-h2">
                                Elevate Your CSP Business with Azure Expertise
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="sv-hero-p">
                                Accelerate your Microsoft cloud revenue with the Professional Labs CSP Partner Program.
                                Our certified Azure experts act as a seamless extension of your team, helping you deliver
                                scalable cloud solutions, simplify complex deployments, and create competitive advantages
                                for your customers.
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
                                <span className="sv-tag">White-Labeled Cloud Services</span>
                                <span className="sv-tag">24/7 Cloud Support</span>
                            </motion.div>
                        </motion.div>

                        {/* Stats Visual Panel */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="sv-hero-image sv-partnership-stats-panel"
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
                            Committed to Your Long-Term CSP Success
                        </h2>
                        <p className="sv-subtitle">
                            Many Cloud Solution Providers (CSPs) are seeking experienced Azure specialists to help navigate
                            the complexity of Microsoft cloud environments. Professional Labs delivers the expertise, tools,
                            and support required to simplify cloud adoption and accelerate business growth.
                        </p>
                        <p className="sv-subtitle" style={{ marginTop: "20px" }}>
                            Our team works closely with partners to deliver reliable Azure cloud architecture, migrations,
                            security, and managed services, enabling CSPs to focus on expanding their customer base and
                            increasing recurring revenue.
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
                            Professional Labs provides comprehensive services designed to help CSP partners grow faster
                            and deliver high-value cloud solutions.
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

            {/* ═══ SECTION 5 — MORE THAN TECHNICAL SUPPORT ═══ */}
            <section className="sv-section-focus" style={{ background: "var(--sv-bg)" }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="sv-focus-box"
                        style={{ flexDirection: "column", maxWidth: "900px", textAlign: "left" }}
                    >
                        <h2 className="sv-h2" style={{ marginBottom: "20px" }}>
                            More Than Just Technical Support
                        </h2>
                        <p className="sv-p" style={{ marginBottom: "18px", color: "var(--sv-gray)" }}>
                            Professional Labs provides strategic partnership support beyond technical services. Our team
                            helps CSP partners grow by providing marketing insights, sales enablement support, and
                            technical expertise required to succeed in the modern cloud ecosystem.
                        </p>
                        <p className="sv-p" style={{ color: "var(--sv-gray)" }}>
                            We equip partners with the latest tools and technologies to compete in the global cloud
                            marketplace. Our certified Azure engineers work alongside your team to ensure faster
                            deployments, improved customer satisfaction, and scalable cloud solutions.
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
                            <h2 className="sv-h2" style={{ color: "white", marginBottom: "20px" }}>
                                Expert Azure Consultation
                            </h2>
                            <p
                                style={{
                                    color: "rgba(255,255,255,0.65)",
                                    fontSize: "1.05rem",
                                    lineHeight: "1.7",
                                    marginBottom: "36px",
                                }}
                            >
                                Accelerate your cloud journey with a free strategy session with our Azure-certified
                                architects. Professional Labs helps CSP partners design scalable cloud architectures,
                                optimize Azure deployments, and deliver secure cloud solutions to customers.
                            </p>
                            <Link href="/contact" className="sv-btn-white">
                                Schedule a Strategy Meeting <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 7 — GLOBAL REACH (stats) ═══ */}
            <section className="sv-why-section">
                <div className="container">
                    <div className="sv-section-header">
                        <h2 className="sv-h2">Our Global Reach</h2>
                        <p className="sv-subtitle" style={{ marginTop: "16px" }}>
                            Professional Labs supports partners and organizations across global markets with
                            enterprise-grade cloud solutions.
                        </p>
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

            {/* ═══ SECTION 8 — FAQ ═══ */}
            <section className="sv-section-faq" style={{ background: "#fff" }}>
                <div className="container">
                    <h2 className="sv-h2" style={{ textAlign: "center", marginBottom: "60px" }}>
                        Frequently Asked Questions
                    </h2>
                    <div className="sv-faq-wrap" style={{ maxWidth: "900px", margin: "0 auto" }}>
                        {faqItems.map((faq, index) => (
                            <div
                                key={index}
                                className={`sv-faq-item ${openFaq === index ? "sv-active" : ""}`}
                            >
                                <button
                                    className="sv-faq-q"
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                >
                                    <span className="sv-faq-qtext" style={{ fontWeight: 700 }}>
                                        {faq.question}
                                    </span>
                                    <span className="sv-faq-ico">
                                        {openFaq === index ? (
                                            <ChevronUp size={20} />
                                        ) : (
                                            <ChevronDown size={20} />
                                        )}
                                    </span>
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="sv-faq-a"
                                        >
                                            <div className="sv-faq-ainner">
                                                <p style={{ lineHeight: "1.8" }}>{faq.answer}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 9 — CTA ═══ */}
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
                                maxWidth: "700px",
                                margin: "0 auto 40px",
                            }}
                        >
                            Partner with Professional Labs and unlock new opportunities in the Microsoft cloud ecosystem.
                            Our Azure experts help CSP partners expand service offerings, increase recurring revenue, and
                            deliver advanced cloud solutions to customers worldwide. Join 500+ successful partners who
                            trust Professional Labs for their cloud expertise.
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
