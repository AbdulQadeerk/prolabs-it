"use client";

import {
    Brain,
    Rocket,
    BarChart3,
    Database,
    MessageSquare,
    Link2,
    ShieldAlert,
    ArrowRight,
    Search,
    RefreshCcw,
    Zap,
    Users,
    ShieldCheck,
    CheckCircle2,
    Settings,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const aiCapabilities = [
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
        title: "Tangible Business Results",
        desc: "Our solutions deliver greater efficiency, enhanced experiences, and significant ROI.",
        icon: <BarChart3 size={22} />,
    },
    {
        title: "Collaborative Expert Team",
        desc: "AI experts and data scientists working closely with your team to exceed expectations.",
        icon: <Users size={22} />,
    },
    {
        title: "Ethical & Secure AI",
        desc: "Strong focus on privacy, security, and compliance with all regulatory standards.",
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

export default function AISolutionsPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <main className="sv-page sv-ai">
            {/* ═══ SECTION 1 — HERO BAND ═══ */}
            <section className="sv-hero-band">
                <div className="container">
                    <nav className="sv-breadcrumb">
                        <Link href="/">Home</Link>
                        <span className="sep">/</span>
                        <span>Pages</span>
                        <span className="sep">/</span>
                        <span className="active">Advanced AI Solutions</span>
                    </nav>
                    <h1 className="sv-hero-h1">Advanced AI Solutions</h1>
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
                                Revolutionize Your Business with Advanced AI Solutions.
                            </motion.h2>

                            <motion.p variants={fadeInUp} className="sv-body-text" style={{ fontSize: "1.15rem", marginBottom: "35px", lineHeight: "1.6" }}>
                                Harness the power of Artificial Intelligence to unlock new potentials.
                                From strategy to custom development and seamless integration, we help you stay ahead.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="sv-hero-btn-wrap" style={{ gap: "16px", flexWrap: "wrap", marginBottom: "40px" }}>
                                <Link href="/contact" className="sv-btn-primary" style={{ padding: "18px 40px" }}>
                                    Get a Free 30-Minute Consultation <ArrowRight size={18} />
                                </Link>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="sv-meta-tags">
                                <span className="sv-tag">AI Strategy Delaware</span>
                                <span className="sv-tag">Machine Learning Expert</span>
                                <span className="sv-tag">NLP Solutions</span>
                                <span className="sv-tag">Data Engineering</span>
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
                                    src="/ai_solutions_hero_1772546516990.png"
                                    alt="AI Solutions Hero"
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

            {/* ═══ SECTION 3 — EMPOWERING BUSINESS ═══ */}
            <section className="sv-section-info" style={{ background: "#fff" }}>
                <div className="container">
                    <div className="sv-info-grid" style={{ alignItems: "stretch" }}>
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="sv-info-card">
                            <h2 className="sv-h2" style={{ marginBottom: "24px" }}>Empowering Your Business with AI</h2>
                            <p className="sv-p" style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "var(--sv-gray)" }}>
                                At Professional Labs, we harness the power of Artificial Intelligence to unlock new potentials
                                for your business. Our comprehensive AI consulting services are designed to cater to your
                                unique needs, ensuring you stay ahead in an ever-evolving digital landscape.
                            </p>
                            <div style={{ marginTop: "32px", display: "flex", gap: "24px", flexWrap: "wrap" }}>
                                <div style={{ borderLeft: "4px solid var(--sv-accent)", paddingLeft: "15px" }}>
                                    <h4 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--sv-ink)" }}>ROI</h4>
                                    <span style={{ fontSize: "0.85rem", color: "var(--sv-gray)" }}>Driven Solutions</span>
                                </div>
                                <div style={{ borderLeft: "4px solid var(--sv-ink)", paddingLeft: "15px" }}>
                                    <h4 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--sv-ink)" }}>24/7</h4>
                                    <span style={{ fontSize: "0.85rem", color: "var(--sv-gray)" }}>Post-Deployment</span>
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
                                We work closely with you to develop customized AI roadmaps that align with your business
                                objectives and drive efficiency.
                            </p>
                            <ul className="sv-check-list-pill" style={{ marginTop: "0" }}>
                                <li>Customized Roadmaps</li>
                                <li>System Assessments</li>
                                <li>Improvement Identification</li>
                                <li>Cloud-Native AI</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 4 — CAPABILITIES GRID ═══ */}
            <section className="sv-section-grid" style={{ background: "var(--sv-bg)" }}>
                <div className="container">
                    <div className="sv-section-header">
                        <h2 className="sv-h2">Innovative AI Solutions, Tangible Results</h2>
                        <p className="sv-subtitle">Innovative solutions are not just technologically advanced but also practical and results-driven</p>
                    </div>

                    <div className="sv-grid-layout" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                        {aiCapabilities.map((item, idx) => (
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

            {/* ═══ SECTION 5 — DATA ENGINEERING & NLP ═══ */}
            <section className="sv-section-benefits">
                <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "60px", alignItems: "center" }}>
                    <div className="sv-benefits-image">
                        <div style={{ borderRadius: "24px", overflow: "hidden", maxHeight: "450px", borderLeft: "8px solid var(--sv-accent)" }}>
                            <Image
                                src="/ai_integration_data_engine_1772546539187.png"
                                alt="AI Data Engineering and Integration"
                                width={1200}
                                height={800}
                                style={{ width: "100%", height: "auto", display: "block" }}
                            />
                        </div>
                    </div>
                    <div className="sv-benefits-content">
                        <h2 className="sv-h2">Advanced Algorithms & NLP</h2>
                        <p className="sv-p" style={{ fontSize: "1.1rem", marginBottom: "30px" }}>
                            Unlock the power of human language and advanced algorithms to scale your business operations.
                        </p>
                        <div className="sv-pro-features">
                            <div className="sv-pro-f-card" style={{ marginBottom: "15px" }}>
                                <div className="sv-pro-f-body">
                                    <strong>Natural Language Processing:</strong> From chatbots to sentiment analysis,
                                    better understand customer needs and enhance engagement.
                                </div>
                            </div>
                            <div className="sv-pro-f-card" style={{ marginBottom: "15px" }}>
                                <div className="sv-pro-f-body">
                                    <strong>Machine Learning:</strong> Develop models that predict outcomes,
                                    automate tasks, and provide deep insights.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 6 — EXPERIENCE (Dark themed) ═══ */}
            <section className="sv-section-features" style={{ background: "var(--sv-ink)", color: "#fff" }}>
                <div className="container">
                    <div className="sv-section-header light">
                        <h2 className="sv-h2" style={{ color: "#fff" }}>Why Choose Professional Labs?</h2>
                        <p className="sv-subtitle" style={{ color: "rgba(255,255,255,0.7)" }}>Expert team with a collaborative approach and commitment to ethics</p>
                    </div>
                    <div className="sv-grid-layout" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                        <motion.div className="sv-pro-item" style={{ background: "rgba(255,255,255,0.05)" }}>
                            <div className="sv-check-icon-wrap" style={{ color: "var(--sv-accent)" }}><Users size={24} /></div>
                            <div>
                                <h5 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px" }}>Expert Team</h5>
                                <p style={{ opacity: 0.8, fontSize: "0.95rem" }}>AI experts, data scientists, and industry specialists working together.</p>
                            </div>
                        </motion.div>
                        <motion.div className="sv-pro-item" style={{ background: "rgba(255,255,255,0.05)" }}>
                            <div className="sv-check-icon-wrap" style={{ color: "var(--sv-accent)" }}><ShieldCheck size={24} /></div>
                            <div>
                                <h5 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px" }}>Ethical AI</h5>
                                <p style={{ opacity: 0.8, fontSize: "0.95rem" }}>Committed to privacy and security, ensuring compliance with all standards.</p>
                            </div>
                        </motion.div>
                        <motion.div className="sv-pro-item" style={{ background: "rgba(255,255,255,0.05)" }}>
                            <div className="sv-check-icon-wrap" style={{ color: "var(--sv-accent)" }}><Settings size={24} /></div>
                            <div>
                                <h5 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px" }}>Seamless Integration</h5>
                                <p style={{ opacity: 0.8, fontSize: "0.95rem" }}>Merging AI with existing systems without disrupting current operations.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 7 — FAQ ═══ */}
            <section className="sv-section-faq">
                <div className="container">
                    <div className="sv-section-header">
                        <h2 className="sv-h2">Frequently Asked Questions</h2>
                        <p className="sv-subtitle">Understanding AI Transformation at Professional Labs</p>
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
                        <h2 className="sv-h2" style={{ color: "#fff" }}>Ready to transform your business?</h2>
                        <p className="sv-subtitle" style={{ color: "rgba(255,255,255,0.9)", marginBottom: "40px" }}>
                            Get a free 30-minute consultation with a Professional Labs AI expert.
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
