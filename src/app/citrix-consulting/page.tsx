"use client";

import {
    Activity,
    AppWindow,
    Box,
    CheckCircle2,
    ChevronDown,
    ChevronUp,
    Clock,
    Cpu,
    Database,
    Globe,
    Layout,
    LifeBuoy,
    MoveRight,
    RefreshCcw,
    Settings,
    ShieldCheck,
    Smartphone,
    TrendingUp,
    Users,
    Zap,
    ArrowRight,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const successLoop = [
    { name: "Plan", icon: <Layout size={20} />, color: "#22a7e0" },
    { name: "Develop", icon: <Cpu size={20} />, color: "#1b3164" },
    { name: "Rollout", icon: <Zap size={20} />, color: "#22a7e0" },
    { name: "Manage", icon: <Settings size={20} />, color: "#1b3164" },
    { name: "Optimize", icon: <TrendingUp size={20} />, color: "#22a7e0" },
];

const serviceAreas = [
    "Complete Citrix Lifecycle Deployments",
    "Citrix Hourly or Fixed-Price Project Engagements",
    "Proof of Concept Initiatives",
    "Pilot / Production Implementations",
    "Staff Development",
    "Health Screening and Validation of Citrix",
    "Help Desk and Remote Business Solutions for Citrix",
];

const whyUsItems = [
    { title: "Excellent service choices", desc: "Tailored options to fit your specific infrastructure needs." },
    { title: "Inexpensive and quick delivery", desc: "Optimized deployment cycles that save time and budget." },
    { title: "Customer-centric approach", desc: "Your business outcomes are at the heart of our design." },
    { title: "Effective instruction", desc: "Comprehensive documentation and training for your team." },
    { title: "Expert staff", desc: "TQM certified professionals with deep domain expertise." },
    { title: "15+ Years Experience", desc: "A trusted Citrix partner since the early virtualization era." },
];

const faqs = [
    {
        question: "What is Citrix Consulting?",
        answer: "Citrix Consulting helps to install, configure, patch, and set up networks and VLANs, do backups, monitor the system, and send alerts for cloud servers and environments. It ensures your virtualization platform is robust and secure.",
    },
    {
        question: "What is Citrix managed services?",
        answer: "Citrix Managed Services offers an unusual approach to consulting in order to maximize value while minimizing expenses and supervision requirements. We offer long-term personnel stability, 'evergreen' knowledge, surge capacity, and 24-hour-a-day, seven-day-a-week coverage.",
    },
    {
        question: "What is included in Citrix consulting service?",
        answer: "It includes the full implementation cycle: Plan, Develop, Rollout, Manage, and Optimize. We handle everything from initial proof-of-concept to production deployment and ongoing health checks.",
    },
    {
        question: "Is Citrix an MSP?",
        answer: "YES. Citrix Workspace is a comprehensive, unified, and intelligent digital workspace that provides MSPs with solutions that enable their clients to access the required data, applications, and content within an organization.",
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

export default function CitrixConsultingPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <main className="sv-page sv-citrix">
            {/* ═══ SECTION 1 — HERO BAND ═══ */}
            <section className="sv-hero-band">
                <div className="container">
                    <nav className="sv-breadcrumb">
                        <Link href="/">Home</Link>
                        <span className="sep">/</span>
                        <span>Pages</span>
                        <span className="sep">/</span>
                        <span className="active">Citrix Consulting</span>
                    </nav>
                    <h1 className="sv-hero-h1">Citrix Consulting Services</h1>
                </div>
            </section>

            {/* ═══ SECTION 2 — HERO MAIN ═══ */}
            <section className="sv-hero-main">
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
                                Rich, scalable desktop virtualization for the modern workforce.
                            </motion.h2>

                            <motion.p variants={fadeInUp} className="sv-body-text" style={{ fontSize: "1.15rem", marginBottom: "35px", lineHeight: "1.6" }}>
                                Professional Labs helps you build a robust, secure infrastructure for apps and users,
                                accelerating your digital workspace transformation.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="sv-hero-btn-wrap" style={{ gap: "16px", flexWrap: "wrap", marginBottom: "40px" }}>
                                <Link href="/contact" className="sv-btn-primary" style={{ padding: "18px 40px" }}>
                                    Get a Free 30-Minute Consultation <ArrowRight size={18} />
                                </Link>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="sv-meta-tags">
                                <span className="sv-tag">Citrix Partner Delaware</span>
                                <span className="sv-tag">VDI Integration</span>
                                <span className="sv-tag">Remote Workforce Solutions</span>
                                <span className="sv-tag">Citrix Managed Services</span>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="sv-hero-image"
                        >
                            <div className="sv-img-frame" style={{
                                boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                maxHeight: '450px',
                                border: '1px solid #e1dfdd'
                            }}>
                                <Image
                                    src="/citrix_dashboard_hero_1772533695469.png"
                                    alt="Citrix Dashboard Management"
                                    width={700}
                                    height={500}
                                    className="sv-float-img"
                                    style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: 'auto' }}
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 3 — LATEST PARTNERSHIP ═══ */}
            <section className="sv-section-info" style={{ background: "#fff" }}>
                <div className="container">
                    <div className="sv-hero-grid" style={{ alignItems: "stretch" }}>
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="sv-info-card">
                            <h2 className="sv-h2" style={{ marginBottom: "24px" }}>A Trusted Citrix Partner for 15+ Years</h2>
                            <p className="sv-p" style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "var(--sv-gray)" }}>
                                Professional Labs is certified and authorized to deploy and resell the whole suite of
                                Citrix solutions. Our skills enable us to create an application and data delivery model
                                that works perfectly for your unique user base.
                            </p>
                            <div style={{ marginTop: "32px", display: "flex", gap: "24px" }}>
                                <div style={{ borderLeft: "4px solid var(--sv-accent)", paddingLeft: "15px" }}>
                                    <h4 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--sv-ink)" }}>15+</h4>
                                    <span style={{ fontSize: "0.85rem", color: "var(--sv-gray)" }}>Years Experience</span>
                                </div>
                                <div style={{ borderLeft: "4px solid var(--sv-ink)", paddingLeft: "15px" }}>
                                    <h4 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--sv-ink)" }}>100%</h4>
                                    <span style={{ fontSize: "0.85rem", color: "var(--sv-gray)" }}>Certified Staff</span>
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
                            <h4 className="sv-h4" style={{ marginBottom: "0" }}>Our Approach</h4>
                            <p className="sv-p" style={{ fontSize: "0.95rem" }}>
                                We specialize in fixing problems in your current environment and moving to a
                                <strong> Citrix-as-a-service</strong> consumption model.
                            </p>
                            <ul className="sv-check-list-pill" style={{ marginTop: "0" }}>
                                <li>Robust Infrastructure Design</li>
                                <li>Seamless App Delivery</li>
                                <li>Environment Optimization</li>
                                <li>24/7 Security Support</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 4 — SUCCESS LOOP ═══ */}
            <section className="sv-section-info" style={{ background: "var(--sv-bg)" }}>
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 className="sv-h2" style={{ marginBottom: "16px" }}>The Citrix Success Loop</h2>
                        <p className="sv-subtitle" style={{ maxWidth: "800px", margin: "0 auto" }}>
                            Every Citrix solution goes through five repeating steps designed to maximize the value of your implementation.
                        </p>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
                        {successLoop.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                style={{
                                    background: "#fff",
                                    padding: "30px",
                                    borderRadius: "20px",
                                    width: "200px",
                                    textAlign: "center",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                                    position: "relative"
                                }}
                            >
                                <div style={{
                                    width: "60px", height: "60px", background: step.color, borderRadius: "15px",
                                    display: "flex", justifyContent: "center", alignItems: "center",
                                    margin: "0 auto 15px", color: "#fff"
                                }}>
                                    {step.icon}
                                </div>
                                <h5 style={{ fontWeight: 800, fontSize: "1.1rem" }}>{step.name}</h5>
                                {idx < successLoop.length - 1 && (
                                    <div className="hidden lg:block" style={{ position: "absolute", right: "-25px", top: "50%", transform: "translateY(-50%)", color: "var(--sv-gray)" }}>
                                        <ArrowRight size={20} />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <div style={{ marginTop: "60px", background: "var(--sv-ink)", padding: "40px", borderRadius: "24px", color: "#fff" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "40px", alignItems: "center" }}>
                            <div>
                                <h3 className="sv-h3" style={{ color: "#fff", marginBottom: "15px" }}>Citrix Consulting Kits</h3>
                                <div style={{ background: "var(--sv-accent)", height: "4px", width: "60px" }}></div>
                            </div>
                            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem" }}>
                                These kits are intended to highlight and solve your environment's particular needs at
                                each level of the loop. Every kit is customized to meet the unique requirements
                                of your business, illuminating and accelerating your progress.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 5 — BENEFITS LIST ═══ */}
            <section className="sv-section-info" style={{ background: "#fff" }}>
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="sv-h2" style={{ marginBottom: "24px" }}>How Our Citrix Services Benefit You</h2>
                            <p className="sv-p" style={{ marginBottom: "32px" }}>
                                We accelerate the planning and installation of business infrastructure while
                                resolving critical deployment issues.
                            </p>
                            <div className="sv-pros-grid" style={{ gridTemplateColumns: "1fr", gap: "12px" }}>
                                {serviceAreas.map((area, idx) => (
                                    <div key={idx} className="sv-pro-item" style={{ border: "none", background: "#f8fafc", padding: "15px 20px" }}>
                                        <div className="sv-check-icon-wrap">
                                            <CheckCircle2 size={18} color="var(--sv-accent)" />
                                        </div>
                                        <span style={{ fontWeight: 600 }}>{area}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="sv-hero-image"
                        >
                            <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", maxHeight: "400px" }}>
                                <Image
                                    src="/citrix_infra_benefits_1772533720638.png"
                                    alt="Citrix Infrastructure Benefits"
                                    width={600}
                                    height={450}
                                    style={{ borderRadius: "24px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)", objectFit: 'cover' }}
                                />
                                <div style={{
                                    position: "absolute", bottom: "20px", right: "20px", background: "#fff",
                                    padding: "20px", borderRadius: "16px", boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                                    maxWidth: "240px", borderLeft: "4px solid var(--sv-accent)"
                                }}>
                                    <h5 style={{ fontWeight: 800, marginBottom: "8px", color: "var(--sv-accent)", fontSize: "1rem" }}>Fast Results</h5>
                                    <p style={{ fontSize: "0.8rem", color: "var(--sv-gray)", margin: 0 }}>
                                        Significantly accelerate the planning and installation of business infrastructure.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 6 — WHY US ═══ */}
            <section className="sv-section-info" style={{ background: "var(--sv-bg)" }}>
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 className="sv-h2">Why Professional Labs?</h2>
                        <p className="sv-subtitle">Delivering excellence in Citrix virtualization services</p>
                    </div>
                    <div className="sv-grid-layout" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
                        {whyUsItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="sv-grid-card"
                            >
                                <div className="sv-grid-icon" style={{ background: "rgba(34, 167, 224, 0.1)", color: "var(--sv-accent)" }}>
                                    <CheckCircle2 size={24} />
                                </div>
                                <h5 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "10px" }}>{item.title}</h5>
                                <p style={{ fontSize: "0.9rem", color: "var(--sv-gray)" }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 7 — FAQ ═══ */}
            <section className="sv-section-faq" style={{ background: "#fff" }}>
                <div className="container">
                    <h2 className="sv-h2" style={{ textAlign: "center", marginBottom: "60px" }}>FAQ's for Citrix</h2>
                    <div className="sv-faq-wrap" style={{ maxWidth: "900px", margin: "0 auto" }}>
                        {faqs.map((faq, index) => (
                            <div key={index} className={`sv-faq-item ${openFaq === index ? "sv-active" : ""}`}>
                                <button
                                    className="sv-faq-q"
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                >
                                    <span className="sv-faq-qtext" style={{ fontWeight: 700 }}>{faq.question}</span>
                                    <span className="sv-faq-ico">
                                        {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
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
                            Talk to our Citrix Expert Now
                        </h2>
                        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.15rem", marginBottom: "40px", maxWidth: "600px", margin: "0 auto 40px" }}>
                            Maximize value while minimizing expenses and supervision requirements with our managed Citrix services.
                        </p>
                        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
                            <Link href="/contact" className="sv-btn-white">
                                Get Free Consultation <ArrowRight size={18} />
                            </Link>
                            <Link href="tel:+12063509033" className="sv-btn-primary" style={{ background: "transparent", border: "2px solid white", boxShadow: "none" }}>
                                Call Now: +1 206 350 9033
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
