"use client";

import {
    BarChart3,
    Database,
    LineChart,
    PieChart,
    Search,
    Zap,
    Users,
    ShieldCheck,
    CheckCircle2,
    ArrowRight,
    Brain,
    Rocket,
    MessageSquare,
    Link2,
    Settings,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const dataCapabilities = [
    {
        title: "AI Strategy Consulting",
        desc: "Customized AI Roadmaps and assessments to align technology with your business objectives.",
        icon: <Rocket size={24} />,
    },
    {
        title: "AI Solution Development",
        desc: "Bespoke AI tools from machine learning models to advanced analytics built for your needs.",
        icon: <Brain size={24} />,
    },
    {
        title: "Data Engineering",
        desc: "Preparing and structuring your data to effectively fuel and power AI algorithms.",
        icon: <Database size={24} />,
    },
    {
        title: "Machine & Deep Learning",
        desc: "Harnessing advanced algorithms to predict outcomes and automate complex tasks.",
        icon: <Zap size={24} />,
    },
    {
        title: "Natural Language Processing",
        desc: "Understanding human language through chatbots and deep sentiment analysis.",
        icon: <MessageSquare size={24} />,
    },
    {
        title: "AI Integration Services",
        desc: "Seamlessly merging AI with your existing systems without disrupting operations.",
        icon: <Link2 size={24} />,
    },
];

const whyChooseUsFeatures = [
    {
        title: "Innovative Solutions",
        desc: "Technologically advanced but also practical and results-driven outcomes.",
        icon: <Zap size={22} />,
    },
    {
        title: "Expert Collaborative Team",
        desc: "Comprised of AI experts, data scientists, and industry specialists.",
        icon: <Users size={22} />,
    },
    {
        title: "Ethical & Private",
        desc: "Committed to privacy and security, ensuring compliance with all standards.",
        icon: <ShieldCheck size={22} />,
    },
];

const faqItems = [
    {
        question: "What is AI Consulting and how can it benefit my business?",
        answer: "AI Consulting involves leveraging artificial intelligence technology to enhance various aspects of your business. Benefits include increased efficiency, improved decision-making, cost reduction, and innovation in customer service and product development.",
    },
    {
        question: "What kind of AI services does Professional Labs offer?",
        answer: "We offer a range of AI services including AI strategy development, custom AI solution development, data engineering, machine learning, natural language processing, AI integration services, and ongoing support and maintenance.",
    },
    {
        question: "Is my business data safe when implementing AI solutions?",
        answer: "Absolutely. At Professional Labs, we prioritize the security and privacy of your data. Our AI solutions are designed with the highest security standards and we ensure compliance with all relevant data protection regulations.",
    },
    {
        question: "Can AI be integrated with my existing systems?",
        answer: "Yes, we specialize in integrating AI solutions with existing business systems. Our approach ensures that AI integration is seamless, enhancing your current systems without disrupting your operations.",
    },
    {
        question: "How long does it take to implement an AI solution?",
        answer: "The time frame varies depending on the complexity and scope of the project. Generally, it can range from a few weeks to several months. We provide a realistic timeline after assessing your specific needs.",
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

export default function DataDrivenSolutionsPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <main className="sv-page sv-data-driven">
            {/* ═══ SECTION 1 — HERO BAND ═══ */}
            <section className="sv-hero-band">
                <div className="container">
                    <nav className="sv-breadcrumb">
                        <Link href="/">Home</Link>
                        <span className="sep">/</span>
                        <span>Pages</span>
                        <span className="sep">/</span>
                        <span className="active">Data Driven Solutions</span>
                    </nav>
                    <h1 className="sv-hero-h1">Data Driven Solutions</h1>
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
                                Transforming Business with Advanced Data Driven Solutions.
                            </motion.h2>

                            <motion.p variants={fadeInUp} className="sv-body-text" style={{ fontSize: "1.15rem", marginBottom: "35px", lineHeight: "1.6" }}>
                                Revolutionize Your Business: Harness the Power of Big Data, Analytics, and Cutting-Edge AI Solutions!
                                Turn complex data into actionable intelligence with our Professional Labs expert team.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="sv-hero-btn-wrap" style={{ gap: "16px", flexWrap: "wrap", marginBottom: "40px" }}>
                                <Link href="/contact" className="sv-btn-primary" style={{ padding: "18px 40px" }}>
                                    Get a Free 30-Minute Consultation <ArrowRight size={18} />
                                </Link>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="sv-meta-tags">
                                <span className="sv-tag">AI Consulting Delaware</span>
                                <span className="sv-tag">Data Integration</span>
                                <span className="sv-tag">BI Analytics</span>
                                <span className="sv-tag">Predictive Modeling</span>
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
                                    src="/data_driven_hero_1772550868463.png"
                                    alt="Data Driven Solutions Hero"
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

            {/* ═══ SECTION 3 — EMPOWERING WITH AI ═══ */}
            <section className="sv-section-info" style={{ background: "#fff" }}>
                <div className="container">
                    <div className="sv-info-grid" style={{ alignItems: "stretch" }}>
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="sv-info-card">
                            <h2 className="sv-h2" style={{ marginBottom: "24px" }}>Empowering Your Business with AI</h2>
                            <p className="sv-p" style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "var(--sv-gray)" }}>
                                At Professional Labs, we harness the power of Artificial Intelligence to unlock new
                                potentials for your business. Our comprehensive AI consulting services are designed to
                                cater to your unique needs, ensuring you stay ahead in an ever-evolving digital landscape.
                            </p>
                            <div style={{ marginTop: "32px", display: "flex", gap: "24px", flexWrap: "wrap" }}>
                                <div style={{ borderLeft: "4px solid var(--sv-accent)", paddingLeft: "15px" }}>
                                    <h4 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--sv-ink)" }}>1TB+</h4>
                                    <span style={{ fontSize: "0.85rem", color: "var(--sv-gray)" }}>Daily Ingestion</span>
                                </div>
                                <div style={{ borderLeft: "4px solid var(--sv-ink)", paddingLeft: "15px" }}>
                                    <h4 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--sv-ink)" }}>Real-Time</h4>
                                    <span style={{ fontSize: "0.85rem", color: "var(--sv-gray)" }}>Analytics Insights</span>
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
                            <h4 className="sv-h4" style={{ marginBottom: "0" }}>AI Strategy Consulting</h4>
                            <p className="sv-p" style={{ fontSize: "0.95rem" }}>
                                We work closely with you to develop tailored AI strategies that align with your business objectives.
                            </p>
                            <ul className="sv-check-list-pill" style={{ marginTop: "0" }}>
                                <li>BI & Dashboarding</li>
                                <li>Data Lakes & Warehousing</li>
                                <li>Predictive Analytics</li>
                                <li>Custom ML Modeling</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 4 — SERVICES GRID ═══ */}
            <section className="sv-section-grid" style={{ background: "var(--sv-bg)" }}>
                <div className="container">
                    <div className="sv-section-header">
                        <h2 className="sv-h2">Cutting-Edge AI & Data Services</h2>
                        <p className="sv-subtitle">Innovative solutions for growth and operational efficiency</p>
                    </div>

                    <div className="sv-grid-layout" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                        {dataCapabilities.map((item, idx) => (
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

            {/* ═══ SECTION 5 — DATA ENGINEERING ═══ */}
            <section className="sv-section-benefits">
                <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "60px", alignItems: "center" }}>
                    <div className="sv-benefits-image">
                        <div style={{ borderRadius: "24px", overflow: "hidden", maxHeight: "450px", borderLeft: "8px solid var(--sv-accent)" }}>
                            <Image
                                src="/big_data_infra_1772550892173.png"
                                alt="Data Driven Infrastructure"
                                width={1200}
                                height={800}
                                style={{ width: "100%", height: "auto", display: "block" }}
                            />
                        </div>
                    </div>
                    <div className="sv-benefits-content">
                        <h2 className="sv-h2">Optimizing Your Data for AI</h2>
                        <p className="sv-p" style={{ fontSize: "1.1rem", marginBottom: "40px" }}>
                            Data is the fuel that powers AI. Our data engineering services focus on preparing and
                            structuring your data to effectively feed AI algorithms.
                        </p>
                        <ul className="sv-check-list">
                            <li>
                                <CheckCircle2 size={18} className="icon" />
                                <span>Clean, Organized Data Assets</span>
                            </li>
                            <li>
                                <CheckCircle2 size={18} className="icon" />
                                <span>Seamless Integration Services</span>
                            </li>
                            <li>
                                <CheckCircle2 size={18} className="icon" />
                                <span>Continuous Support & Maintenance</span>
                            </li>
                            <li>
                                <CheckCircle2 size={18} className="icon" />
                                <span>Bespoke Analytics Tooling</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 6 — WHY CHOOSE US (Dark themed) ═══ */}
            <section className="sv-section-features" style={{ background: "var(--sv-ink)", color: "#fff" }}>
                <div className="container">
                    <div className="sv-section-header light">
                        <h2 className="sv-h2" style={{ color: "#fff" }}>Why Choose Professional Labs?</h2>
                        <p className="sv-subtitle" style={{ color: "rgba(255,255,255,0.7)" }}>Innovating for your business outcomes with expert collaborative approach</p>
                    </div>
                    <div className="sv-grid-layout">
                        {whyChooseUsFeatures.map((feat, idx) => (
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
                                    {feat.icon}
                                </div>
                                <div>
                                    <h5 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px" }}>{feat.title}</h5>
                                    <p style={{ opacity: 0.8, fontSize: "0.95rem" }}>{feat.desc}</p>
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
                        <p className="sv-subtitle">Expert insights on AI Consulting and Data Strategy</p>
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
                        <h2 className="sv-h2" style={{ color: "#fff" }}>Ready to harness the power of AI?</h2>
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
