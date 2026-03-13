"use client";

import {
    Users,
    Zap,
    Layout,
    ArrowRight,
    TrendingUp,
    ShieldCheck,
    CheckCircle2,
    Globe,
    Search,
    RefreshCcw,
    Layers,
    FileText,
    Cpu,
    Smartphone,
    Bot,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const strategyFeatures = [
    {
        title: "Digital Maturity Assessment",
        desc: "Evaluating your digital workplace readiness and potential.",
        icon: <TrendingUp size={24} />,
    },
    {
        title: "Solution Blueprint",
        desc: "Work management strategy and professional solution design.",
        icon: <Layers size={24} />,
    },
    {
        title: "Content Personalization",
        desc: "Tailored user experiences and enterprise search architecture.",
        icon: <Layout size={24} />,
    },
    {
        title: "ECM Health Assessment",
        desc: "Knowledge management and content platform migration strategy.",
        icon: <FileText size={24} />,
    },
];

const implementationFeatures = [
    {
        title: "Modern Intranet",
        desc: "Building intuitive, collaborative intranet platforms for teams.",
        icon: <Globe size={22} />,
    },
    {
        title: "Productivity Apps",
        desc: "Custom development of apps that boost workforce efficiency.",
        icon: <Smartphone size={22} />,
    },
    {
        title: "Platform Build & Engineering",
        desc: "Enterprise Search Services and ECM Platform engineering.",
        icon: <Cpu size={22} />,
    },
    {
        title: "Content Migration",
        desc: "Validation and seamless migration of existing content platforms.",
        icon: <RefreshCcw size={22} />,
    },
];

const managedServices = [
    {
        label: "Application Support & Enhancements",
        text: "Ensuring your workplace applications are always running and optimized."
    },
    {
        label: "Enterprise Search Managed Services",
        text: "Maintaining efficient, rapid search across your entire data landscape."
    },
    {
        label: "Collaboration Platform Admin",
        text: "Seamless administration for ECM and partnership-driven platforms."
    }
];

const faqItems = [
    {
        question: "What is a Modern Workplace?",
        answer: "A Modern Workplace is an advanced digital ecosystem that provides a centralized platform for employee productivity, collaboration, and communication.",
    },
    {
        question: "How can a Modern Business Workplace benefit your organization?",
        answer: "Modern Business Workplace solutions can improve employee productivity, streamline workflows, enhance collaboration, increase cybersecurity, and provide better data analytics.",
    },
    {
        question: "What types of services are included in a Modern Workplace solution?",
        answer: "Typically, a Modern Workplace solution includes various services, such as cloud-based productivity suites, enterprise mobility management, virtual meetings, secure file sharing, and cybersecurity solutions.",
    },
    {
        question: "How can a Modern Workplace solution help your employees work more effectively?",
        answer: "A Modern Workplace solution can help employees work more efficiently and with fewer distractions by providing a centralized collaboration, communication, and productivity platform.",
    },
    {
        question: "How can your organization implement a Modern Workplace solution?",
        answer: "The best way is to work with a trusted IT partner who can help you design, deploy, and manage the solution to ensure a seamless transition and maximum benefits for your organization.",
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

export default function ModernWorkplacePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <main className="sv-page sv-modern-workplace">
            {/* ═══ SECTION 1 — HERO BAND ═══ */}
            <section className="sv-hero-band">
                <div className="container">
                    <nav className="sv-breadcrumb">
                        <Link href="/">Home</Link>
                        <span className="sep">/</span>
                        <span>Pages</span>
                        <span className="sep">/</span>
                        <span className="active">Modern Workplace</span>
                    </nav>
                    <h1 className="sv-hero-h1">Modern Workplace</h1>
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
                                Redefine work with an employee-first approach.
                            </motion.h2>

                            <motion.p variants={fadeInUp} className="sv-body-text" style={{ fontSize: "1.15rem", marginBottom: "35px", lineHeight: "1.6" }}>
                                Drive success with an employee-centric approach, boosting productivity,
                                collaboration, and talent acquisition. Connect, collaborate, and work securely.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="sv-hero-btn-wrap" style={{ gap: "16px", flexWrap: "wrap", marginBottom: "40px" }}>
                                <Link href="/contact" className="sv-btn-primary" style={{ padding: "18px 40px" }}>
                                    Get a Free 30-Minute Consultation <ArrowRight size={18} />
                                </Link>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="sv-meta-tags">
                                <span className="sv-tag">Modern Workplace Delaware</span>
                                <span className="sv-tag">Hybrid Workforce</span>
                                <span className="sv-tag">Digital Workplace</span>
                                <span className="sv-tag">Secure Productivity</span>
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
                                    src="/modern_workplace_hero_1772545930778.png"
                                    alt="Modern Workplace Hero"
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

            {/* ═══ SECTION 3 — UNIQUE VALUE PROPOSITION ═══ */}
            <section className="sv-section-info" style={{ background: "#fff" }}>
                <div className="container">
                    <div className="sv-info-grid" style={{ alignItems: "stretch" }}>
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="sv-info-card">
                            <h2 className="sv-h2" style={{ marginBottom: "24px" }}>Connect, Collaborate, and Work Securely</h2>
                            <p className="sv-p" style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "var(--sv-gray)" }}>
                                Professional Labs solution empowers your team to connect on any device, anywhere.
                                Eliminate the hassle of IT issues and hello to a centralized workplace giving your
                                employees access to the tools they need to stay focused.
                            </p>
                            <div style={{ marginTop: "32px", display: "flex", gap: "24px" }}>
                                <div style={{ borderLeft: "4px solid var(--sv-accent)", paddingLeft: "15px" }}>
                                    <h4 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--sv-ink)" }}>24×7</h4>
                                    <span style={{ fontSize: "0.85rem", color: "var(--sv-gray)" }}>Support Assistant</span>
                                </div>
                                <div style={{ borderLeft: "4px solid var(--sv-ink)", paddingLeft: "15px" }}>
                                    <h4 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--sv-ink)" }}>AI</h4>
                                    <span style={{ fontSize: "0.85rem", color: "var(--sv-gray)" }}>Driven Support</span>
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
                            <h4 className="sv-h4" style={{ marginBottom: "0" }}>Hybrid Work Adaptability</h4>
                            <p className="sv-p" style={{ fontSize: "0.95rem" }}>
                                Our platform centralizes employee experiences, allowing for effortless management of services
                                across all devices through our <strong>self-service marketplace</strong>.
                            </p>
                            <ul className="sv-check-list-pill" style={{ marginTop: "0" }}>
                                <li>Strategy & Blueprint</li>
                                <li>Seamless Consumption</li>
                                <li>Mobile-first Management</li>
                                <li>Direct Employee Feedback</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 4 — STRATEGY & IMPLEMENTATION ═══ */}
            <section className="sv-section-grid" style={{ background: "var(--sv-bg)" }}>
                <div className="container">
                    <div className="sv-section-header">
                        <h2 className="sv-h2">Boost Productivity & Drive Success</h2>
                        <p className="sv-subtitle">Strategic assessment and professional implementation</p>
                    </div>

                    {/* Strategy Column */}
                    <div style={{ marginBottom: "80px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "30px", justifyContent: "center", flexWrap: "wrap" }}>
                            <div style={{ height: "1px", background: "rgba(0,0,0,0.1)", flex: 1, minWidth: "50px" }}></div>
                            <h3 className="sv-h3" style={{ margin: 0, textTransform: "uppercase", fontSize: "1rem", letterSpacing: "2px", color: "var(--sv-gray)", whiteSpace: "nowrap" }}>Strategy</h3>
                            <div style={{ height: "1px", background: "rgba(0,0,0,0.1)", flex: 1, minWidth: "50px" }}></div>
                        </div>
                        <div className="sv-grid-layout" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                            {strategyFeatures.map((item, idx) => (
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

                    {/* Implementation Column */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "30px", justifyContent: "center" }}>
                            <div style={{ height: "1px", background: "rgba(0,0,0,0.1)", flex: 1 }}></div>
                            <h3 className="sv-h3" style={{ margin: 0, textTransform: "uppercase", fontSize: "1rem", letterSpacing: "2px", color: "var(--sv-gray)" }}>Implementation</h3>
                            <div style={{ height: "1px", background: "rgba(0,0,0,0.1)", flex: 1 }}></div>
                        </div>
                        <div className="sv-grid-layout" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                            {implementationFeatures.map((item, idx) => (
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
                </div>
            </section>

            {/* ═══ SECTION 5 — COLLABORATION ═══ */}
            <section className="sv-section-benefits">
                <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "60px", alignItems: "center" }}>
                    <div className="sv-benefits-image">
                        <div style={{ borderRadius: "24px", overflow: "hidden", maxHeight: "450px", borderLeft: "8px solid var(--sv-accent)" }}>
                            <Image
                                src="/modern_workplace_collaboration_1772545955067.png"
                                alt="Modern Workplace Collaboration"
                                width={1200}
                                height={800}
                                style={{ width: "100%", height: "auto", display: "block" }}
                            />
                        </div>
                    </div>
                    <div className="sv-benefits-content">
                        <h2 className="sv-h2">Managed Services & Support</h2>
                        <p className="sv-p" style={{ fontSize: "1.1rem", marginBottom: "40px" }}>
                            Ongoing application support and enhancements to keep your modern workforce at its full potential.
                        </p>
                        <ul className="sv-pro-features">
                            {managedServices.map((item, idx) => (
                                <li key={idx} className="sv-pro-f-card">
                                    <div className="sv-pro-f-icon" style={{ color: "var(--sv-accent)" }}>
                                        <Bot size={24} />
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

            {/* ═══ SECTION 6 — EXPERIENCE (Dark themed) ═══ */}
            <section className="sv-section-features" style={{ background: "var(--sv-ink)", color: "#fff" }}>
                <div className="container">
                    <div className="sv-section-header light">
                        <h2 className="sv-h2" style={{ color: "#fff" }}>Revamp your Work with Ease</h2>
                        <p className="sv-subtitle" style={{ color: "rgba(255,255,255,0.7)" }}>Seamless, consumer-like experience prioritized for user-friendliness</p>
                    </div>
                    <div className="sv-grid-layout">
                        <motion.div className="sv-pro-item" style={{ background: "rgba(255,255,255,0.05)" }}>
                            <div className="sv-check-icon-wrap" style={{ color: "var(--sv-accent)" }}><Smartphone size={24} /></div>
                            <div>
                                <h5 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px" }}>Effortless Management</h5>
                                <p style={{ opacity: 0.8, fontSize: "0.95rem" }}>Manage services across all devices through our self-service marketplace.</p>
                            </div>
                        </motion.div>
                        <motion.div className="sv-pro-item" style={{ background: "rgba(255,255,255,0.05)" }}>
                            <div className="sv-check-icon-wrap" style={{ color: "var(--sv-accent)" }}><Users size={24} /></div>
                            <div>
                                <h5 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px" }}>Empowered Employees</h5>
                                <p style={{ opacity: 0.8, fontSize: "0.95rem" }}>Enabling employees to provide valuable feedback and stay engaged.</p>
                            </div>
                        </motion.div>
                        <motion.div className="sv-pro-item" style={{ background: "rgba(255,255,255,0.05)" }}>
                            <div className="sv-check-icon-wrap" style={{ color: "var(--sv-accent)" }}><Bot size={24} /></div>
                            <div>
                                <h5 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px" }}>AI Digital Assistant</h5>
                                <p style={{ opacity: 0.8, fontSize: "0.95rem" }}>24×7 support utilizing predictive analytics to tackle issues proactively.</p>
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
                        <p className="sv-subtitle">Understanding the Advanced Digital Ecosystem</p>
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
                        <h2 className="sv-h2" style={{ color: "#fff" }}>Ready to transform your workplace?</h2>
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
