"use client";

import {
    Shield,
    ShieldCheck,
    Zap,
    Database,
    Lock,
    Globe,
    RefreshCcw,
    ChevronDown,
    ChevronUp,
    ArrowRight,
    CheckCircle2,
    Cpu,
    Layout,
    Terminal,
    BarChart3,
    FileText,
    Cloud,
    Layers,
    Settings,
    TrendingUp,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const uniqueFeatures = [
    {
        title: "Unified Computing Platform",
        desc: "Seamless IaaS, PaaS, and SaaS compatibility in a single public computing platform for maximum versatility.",
        icon: <Layers size={24} />,
    },
    {
        title: "Elastic Scalability",
        desc: "Unmatched flexibility to scale computing resources up or down instantly based on your business demands.",
        icon: <TrendingUp size={24} />,
    },
    {
        title: "Cross-Platform Support",
        desc: "Native support for all major operating systems, programming languages, tools, and development frameworks.",
        icon: <Cpu size={24} />,
    },
    {
        title: "Enterprise Availability",
        desc: "99.95% uptime SLA and 24/7 dedicated technical support ensuring uninterrupted service for critical apps.",
        icon: <Cloud size={24} />,
    },
    {
        title: "Global Reach",
        desc: "Geosynchronous data centers strategically located worldwide for seamless global accessibility and low latency.",
        icon: <Globe size={24} />,
    },
    {
        title: "Optimized Cost Model",
        desc: "Highly cost-efficient pay-as-you-go model for optimal resource management and budget control.",
        icon: <BarChart3 size={24} />,
    },
];

const consultingServices = [
    {
        title: "Feasibility & ROI Analysis",
        desc: "Evaluate TCO, ROI, development time, and deployment costs to ensure project feasibility.",
        icon: <BarChart3 size={22} />,
    },
    {
        title: "Executive Strategy Sessions",
        desc: "Strategic consultations for executive staff with interactive Q&A sessions and detailed reports.",
        icon: <FileText size={22} />,
    },
    {
        title: "Cloud Architecture Design",
        desc: "Design robust cloud architectures for Azure-based applications and enterprise data warehouses.",
        icon: <Layout size={22} />,
    },
    {
        title: "Infrastructure & CI/CD",
        desc: "Azure and hybrid infrastructure design combined with high-performance CI/CD pipeline implementation.",
        icon: <Terminal size={22} />,
    },
    {
        title: "Tailored Migration Strategy",
        desc: "Bespoke Azure migration plans aligned with your business goals, timeframes, and technical capabilities.",
        icon: <RefreshCcw size={22} />,
    },
    {
        title: "Risk Management",
        desc: "Comprehensive risk management plans to identify and mitigate potential roadblocks during cloud transition.",
        icon: <Shield size={22} />,
    },
    {
        title: "IT Policy Development",
        desc: "Detailed process descriptions and policies for efficient IT service provisioning after Azure migration.",
        icon: <Settings size={22} />,
    },
    {
        title: "Code & Infrastructure Review",
        desc: "In-depth infrastructure configuration audits and application code reviews for optimization.",
        icon: <Database size={22} />,
    },
];

const benefits = [
    {
        title: "Speed",
        desc: "Azure provides unmatched speed for deployment, operation, and scalability. It supports private connections and IPv6 workloads.",
        icon: <Zap size={28} />,
    },
    {
        title: "Scalability",
        desc: "Offers on-demand scalability, enabling organizations to increase or decrease storage space and computing power instantly.",
        icon: <TrendingUp size={28} />,
    },
    {
        title: "Security",
        desc: "Built on Security Development Lifecycle (SDL) and ISO 27001 standards to ensure privacy and availability.",
        icon: <Lock size={28} />,
    },
    {
        title: "Compliance",
        desc: "Offers more than 35 compliance certifications aligned with key industries and global regulatory guidelines.",
        icon: <ShieldCheck size={28} />,
    },
    {
        title: "Cost-efficiency",
        desc: "Pay-as-you-go model and consumption-based pricing structure allow businesses to manage IT budgets efficiently.",
        icon: <BarChart3 size={28} />,
    },
    {
        title: "Availability",
        desc: "Operates across 55+ regions and 140 countries, providing high availability and redundancy worldwide.",
        icon: <Globe size={28} />,
    },
    {
        title: "Interoperability",
        desc: "Enterprise-level tools and SDKs for multiple languages make it easy to build and manage custom web apps.",
        icon: <Cpu size={28} />,
    },
];

const whyPartner = [
    "Microsoft Partner with demonstrated Cloud Competencies",
    "Member of Microsoft Cloud Solution Provider (CSP) program",
    "Elite team of certified IT professionals and architects",
    "20+ years of experience in Azure development and migration",
    "ISO 9001 certified quality management systems",
    "ISO 27001-based information security management systems",
];

const serviceOptions = [
    {
        title: "Azure Migration",
        desc: "We deliver individual migration strategy and help you implement your cost effective and high performing Azure environment.",
        icon: <RefreshCcw size={32} />,
    },
    {
        title: "Implementation",
        desc: "We design Cloud Architectures and CI/CD pipelines using SaaS and PaaS functionality of Azure to cut down on development costs.",
        icon: <Layers size={32} />,
    },
    {
        title: "Managed Services",
        desc: "We assess the performance of your Azure environment and optimize it to reduce tenancy costs and increase overall performance.",
        icon: <Settings size={32} />,
    },
];

const faqs = [
    {
        question: "What are Azure Consulting Services?",
        answer:
            "Azure Consulting Services refers to the range of consulting services offered by experts specializing in Microsoft Azure. These services include planning, designing, and implementing Azure solutions to help businesses achieve their goals. Azure consultants work with organizations to identify their specific needs and design customized solution that meets their unique requirements.",
    },
    {
        question: "Why do businesses need an Azure Solutions Partner?",
        answer:
            "Businesses need Azure Consulting Services to take advantage of the many benefits offered by Microsoft Azure. With the help of Azure consultants, organizations can design and implement scalable, secure, and efficient cloud solutions that improve their operational efficiency, reduce costs, and enhance their competitive edge.",
    },
    {
        question: "What are the benefits of using Microsoft Azure consultants?",
        answer:
            "Microsoft Azure consultants bring specialized expertise that helps minimize risks, optimize cloud costs, and accelerate deployment times. They ensure your architecture follows best practices for security and performance, allowing your internal team to focus on core business operations.",
    },
    {
        question: "How do I choose the right Azure consulting company?",
        answer:
            "To choose the right Azure consulting firm, you should look for a company with experience in your industry, expertise in Azure technologies, a proven track record of successful projects, and good communication skills. You should also check their certifications (like Microsoft Partner status), customer reviews, and pricing models to ensure a good fit.",
    },
    {
        question: "What services are typically included in Azure consulting engagements?",
        answer:
            "Azure consulting engagements can include cloud strategy development, architecture design, infrastructure deployment, application migration, data management and analytics, security and compliance, and ongoing support and optimization. Consultants may also provide training to help your team manage cloud environments.",
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

export default function AzureConsultingPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <main className="sv-page sv-azure">
            {/* ═══ SECTION 1 — HERO BAND ═══ */}
            <section className="sv-hero-band">
                <div className="container">
                    <nav className="sv-breadcrumb">
                        <Link href="/">Home</Link>
                        <span className="sep">/</span>
                        <span>Services</span>
                        <span className="sep">/</span>
                        <span className="active">Microsoft Azure Cloud Consulting Services</span>
                    </nav>
                    <h1 className="sv-hero-h1">Azure Consulting Services</h1>
                </div>
            </section>

            {/* ═══ SECTION 2 — HERO MAIN (text + image) ═══ */}
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
                                Transform your business with Azure's cutting-edge cloud, IoT, and analytics solutions
                            </motion.h2>

                            <motion.div variants={fadeInUp} className="sv-hero-btn-wrap" style={{ gap: "16px", flexWrap: "wrap" }}>
                                <Link href="/contact" className="sv-btn-primary">
                                    🟢 Get a Free 30-Minute Consultation <ArrowRight size={18} />
                                </Link>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="sv-meta-tags">
                                <span className="sv-tag">Azure Consulting Delaware</span>
                                <span className="sv-tag">Cloud Migration Delaware</span>
                                <span className="sv-tag">Azure Managed Services</span>
                                <span className="sv-tag">Cloud Consulting</span>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="sv-hero-image"
                        >
                            <div className="sv-img-frame">
                                <Image
                                    src="/images/dashboard-hero.png"
                                    alt="Microsoft Azure Consulting Services Delaware"
                                    width={600}
                                    height={500}
                                    className="sv-float-img"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 3 — OVERVIEW ═══ */}
            <section className="sv-section-info">
                <div className="container">
                    <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center", marginBottom: "60px" }}>
                        <h2 className="sv-h2" style={{ marginBottom: "24px" }}>Unlocking Innovation with Microsoft Azure</h2>
                        <p className="sv-subtitle">
                            Microsoft Azure is the ultimate cloud platform offering over 200 innovative products and services.
                            Designed to help organizations tackle modern business challenges, Azure consulting services provide
                            seamless flexibility to build, run, and manage versatile applications across multiple clouds,
                            on-premises, or at the edge.
                        </p>
                    </div>

                    <h3 className="sv-h3" style={{ textAlign: "center", marginBottom: "40px" }}>What makes Microsoft Azure unique?</h3>
                    <div className="sv-tech-grid">
                        {uniqueFeatures.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="sv-tech-card"
                            >
                                <div className="sv-tech-icon">{feature.icon}</div>
                                <div>
                                    <h4 className="sv-h4" style={{ marginBottom: "10px" }}>{feature.title}</h4>
                                    <p className="sv-p" style={{ fontSize: "0.95rem", color: "var(--sv-gray)" }}>{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 4 — SIMPLIFY (focus text) ═══ */}
            <section className="sv-section-focus" style={{ background: "#fff" }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="sv-focus-box"
                        style={{ flexDirection: "column", maxWidth: "900px", textAlign: "left" }}
                    >
                        <h3 className="sv-h2" style={{ marginBottom: "20px" }}>
                            Simplify Your Azure Environment with Remote Azure Consulting Services
                        </h3>
                        <p className="sv-p" style={{ marginBottom: "18px", color: "var(--sv-gray)" }}>
                            In today's fast-paced world, keeping up with the latest technological advancements can be challenging,
                            especially when managing your Azure environment. Balancing workloads and gaining experience in new
                            environments can undoubtedly be overwhelming. However, simplifying your Azure environment is now
                            easier with Professional Labs Azure Consulting IT Services.
                        </p>
                        <p className="sv-p" style={{ marginBottom: "18px", color: "var(--sv-gray)" }}>
                            As a trusted Microsoft partner, we specialize in helping organizations maintain, grow, and manage
                            their Azure environment. Our team of IT professionals is equipped with the expertise and knowledge
                            needed to ensure your Azure environment runs smoothly and efficiently.
                        </p>
                        <p className="sv-p" style={{ color: "var(--sv-gray)" }}>
                            Utilizing our remote-managed IT services lets you focus on your core business while we care for your
                            Azure environment. Our services include monitoring, maintenance, security, backup, and disaster recovery,
                            all customized to your unique business requirements.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ═══ SECTION 5 — CONSULTING SERVICES ═══ */}
            <section className="sv-section-info" style={{ background: "var(--sv-bg)" }}>
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 className="sv-h2" style={{ marginBottom: "16px" }}>Discover Your Azure Potential</h2>
                        <p className="sv-subtitle">Comprehensive consulting services to accelerate your cloud initiative</p>
                    </div>
                    <div className="sv-tech-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                        {consultingServices.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="sv-scard"
                                style={{ flexDirection: "column" }}
                            >
                                <div className="sv-scard-icon">{service.icon}</div>
                                <div className="sv-scard-body">
                                    <h5>{service.title}</h5>
                                    <p>{service.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 6 — BENEFITS ═══ */}
            <section className="sv-section-info" style={{ background: "#fff" }}>
                <div className="container">
                    <h2 className="sv-h2" style={{ textAlign: "center", marginBottom: "60px" }}>7 Key Benefits of Microsoft Azure</h2>
                    <div className="sv-features-grid">
                        {benefits.map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="sv-feature-card"
                            >
                                <div className="sv-feature-icon">{benefit.icon}</div>
                                <div>
                                    <p className="sv-feature-text">{benefit.title}</p>
                                    <p className="sv-p" style={{ fontSize: "0.95rem", color: "var(--sv-gray)", marginTop: "10px" }}>{benefit.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 7 — WHY PROFESSIONAL LABS ═══ */}
            <section className="sv-section-analysis">
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
                        <div>
                            <h2 className="sv-h2" style={{ color: "white", marginBottom: "36px" }}>
                                Why Professional Labs is Your Perfect Azure Solutions Partner
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
                                        <span style={{ color: "rgba(255,255,255,0.88)", fontWeight: 500 }}>{point}</span>
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
                            <h3 className="sv-h3" style={{ color: "white", marginBottom: "20px" }}>Expert Consultation</h3>
                            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "36px" }}>
                                Accelerate your cloud journey with a free strategy session with our Azure certified architects.
                            </p>
                            <Link href="/contact" className="sv-btn-white">
                                Schedule a Strategy Meeting <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 8 — SERVICE OPTIONS ═══ */}
            <section className="sv-section-grid">
                <div className="container">
                    <h2 className="sv-h2" style={{ textAlign: "center", marginBottom: "60px" }}>Choose Your Azure Service Option</h2>
                    <div className="sv-grid-layout">
                        {serviceOptions.map((opt, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="sv-grid-card"
                                style={{ textAlign: "left" }}
                            >
                                <div className="sv-grid-icon" style={{ margin: "0 0 24px 0" }}>
                                    {opt.icon}
                                </div>
                                <h5>{opt.title}</h5>
                                <p style={{ marginBottom: "24px" }}>{opt.desc}</p>
                                <Link href="/contact" style={{ color: "var(--sv-accent)", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
                                    Explore Option <ArrowRight size={16} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 9 — FAQ ═══ */}
            <section className="sv-section-faq">
                <div className="container">
                    <h2 className="sv-h2" style={{ textAlign: "center", marginBottom: "60px" }}>Frequently Asked Questions</h2>
                    <div className="sv-faq-wrap">
                        {faqs.map((faq, index) => (
                            <div key={index} className={`sv-faq-item ${openFaq === index ? "sv-active" : ""}`}>
                                <button
                                    className="sv-faq-q"
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                >
                                    <span className="sv-faq-qtext">{faq.question}</span>
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
                                                <p>{faq.answer}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 10 — CTA ═══ */}
            <section className="sv-section-cta">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="sv-cta-banner"
                    >
                        <h2 className="sv-h2" style={{ color: "white", marginBottom: "20px" }}>
                            Ready to Modernize Your Operations with Azure?
                        </h2>
                        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.15rem", marginBottom: "40px", maxWidth: "600px", margin: "0 auto 40px" }}>
                            Get a free 30-minute consultation with a Professional Labs expert and transform your business today.
                        </p>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Link href="/contact" className="sv-btn-white">
                                🟢 Book Free Consultation <ArrowRight size={18} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
