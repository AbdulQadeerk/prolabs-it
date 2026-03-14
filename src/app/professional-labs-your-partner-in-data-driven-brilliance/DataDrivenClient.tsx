"use client";

import {
  BarChart3,
  Database,
  Search,
  Zap,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Brain,
  MessageSquare,
  Settings,
  ChevronDown,
  ChevronUp,
  PieChart,
  LineChart,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const aiCapabilities = [
  {
    title: "AI Strategy Consulting",
    desc: "Strategic planning and assessments to align artificial intelligence initiatives with business outcomes.",
    icon: <TrendingUp size={24} />,
  },
  {
    title: "AI Solution Development",
    desc: "Custom-built AI applications built using machine learning, predictive analytics, and advanced algorithms.",
    icon: <Brain size={24} />,
  },
  {
    title: "Data Engineering",
    desc: "Design scalable data pipelines and structured datasets that power analytics and AI platforms.",
    icon: <Database size={24} />,
  },
  {
    title: "Machine and Deep Learning",
    desc: "Deploy predictive models that identify trends, automate processes, and generate intelligent insights.",
    icon: <Zap size={24} />,
  },
  {
    title: "Natural Language Processing",
    desc: "Use NLP to analyze language data, power chatbots, and understand customer sentiment.",
    icon: <MessageSquare size={24} />,
  },
  {
    title: "AI Integration Services",
    desc: "Integrate AI and analytics solutions into your existing enterprise systems and workflows.",
    icon: <Settings size={24} />,
  },
];

const faqItems = [
  {
    question: "What are data-driven solutions?",
    answer: "Data-driven solutions use analytics, artificial intelligence, and data engineering to transform raw business data into actionable insights. These solutions help organizations improve decision-making, automate processes, and identify opportunities for growth.",
  },
  {
    question: "How can data analytics improve business decision-making?",
    answer: "Data analytics helps businesses analyze historical and real-time data to identify patterns, trends, and performance insights. This allows organizations to make informed decisions based on measurable data rather than assumptions.",
  },
  {
    question: "What is the difference between business intelligence and predictive analytics?",
    answer: "Business intelligence focuses on analyzing historical data through dashboards and reports, while predictive analytics uses machine learning and statistical models to forecast future outcomes and trends.",
  },
  {
    question: "What services are included in data-driven solutions?",
    answer: "Data-driven solutions typically include data integration, data engineering, data warehousing, business intelligence dashboards, predictive analytics, machine learning models, and AI-powered insights.",
  },
  {
    question: "Can data analytics integrate with existing business systems?",
    answer: "Yes. Data platforms can integrate with existing enterprise systems such as CRM, ERP, cloud platforms, and operational databases to provide centralized analytics and insights.",
  },
  {
    question: "How long does it take to implement a data-driven analytics platform?",
    answer: "Implementation timelines vary depending on the complexity of the data environment. Basic analytics dashboards can be deployed in weeks, while enterprise data platforms and predictive models may take several months.",
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

export default function DataDrivenClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-data-driven">
      {/* ═══ SECTION 1 — HERO BAND ═══ */}
      <section className="sv-hero-band">
        <div className="container">
          <nav className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Services</span>
            <span className="sep">/</span>
            <span className="active">Data Driven Solutions</span>
          </nav>
          <h1 className="sv-hero-h1">Data Driven Solutions</h1>
        </div>
      </section>

      {/* ═══ SECTION 2 — HERO CONTENT ═══ */}
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
              <motion.h2
                variants={fadeInUp}
                className="sv-display-h2"
                style={{ lineHeight: "1.2", marginBottom: "20px" }}
              >
                Transform Your Business with Advanced Data and AI Intelligence
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="sv-body-text"
                style={{ fontSize: "1.15rem", marginBottom: "35px", lineHeight: "1.6" }}
              >
                Data-driven organizations outperform competitors by turning complex data into strategic insights. Professional Labs delivers data-driven solutions powered by big data analytics, artificial intelligence, and business intelligence platforms.
              </motion.p>
              
              <motion.p
                variants={fadeInUp}
                className="sv-body-text"
                style={{ fontSize: "1.05rem", marginBottom: "35px", lineHeight: "1.6" }}
              >
                Our experts help businesses collect, integrate, and analyze data to uncover patterns, predict outcomes, and improve decision-making across the organization.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="sv-hero-btn-wrap"
                style={{ gap: "16px", flexWrap: "wrap", marginBottom: "40px" }}
              >
                <Link
                  href="/contact"
                  className="sv-btn-primary"
                  style={{ padding: "18px 40px" }}
                >
                  Get a Free 30-Minute Consultation <ArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="sv-meta-tags">
                <span className="sv-tag">Data Integration Services</span>
                <span className="sv-tag">Business Intelligence Analytics</span>
                <span className="sv-tag">Predictive Modeling & ML</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sv-hero-image"
            >
              <div
                className="sv-image-frame sv-data-driven-img-frame"
                style={{
                  borderRadius: "32px",
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                <Image
                  src="/data_driven_hero_1772550868463.png"
                  alt="Data Driven Solutions - Big data analytics and business intelligence dashboard"
                  width={1200}
                  height={800}
                  priority
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    maxHeight: "450px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 — EMPOWERING ═══ */}
      <section className="sv-section-info" style={{ background: "#fff" }}>
        <div className="container">
          <div className="sv-hero-grid" style={{ alignItems: "stretch" }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sv-info-card"
            >
              <h2 className="sv-h2" style={{ marginBottom: "24px" }}>
                Empowering Your Business with Data and AI
              </h2>
              <p
                className="sv-p"
                style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "var(--sv-gray)" }}
              >
                At Professional Labs, we combine advanced analytics, artificial intelligence, and scalable data infrastructure to help organizations unlock new opportunities from their data.
              </p>
              <p
                className="sv-p"
                style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "var(--sv-gray)", marginTop: "16px" }}
              >
                Our data strategy and AI consulting services ensure that your organization can transform raw data into meaningful insights and business value.
              </p>
              <div style={{ marginTop: "32px", display: "flex", gap: "24px" }}>
                <div style={{ borderLeft: "4px solid var(--sv-accent)", paddingLeft: "15px" }}>
                  <h4 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--sv-ink)" }}>
                    1TB+
                  </h4>
                  <span style={{ fontSize: "0.85rem", color: "var(--sv-gray)" }}>
                    Daily Data Ingestion
                  </span>
                </div>
                <div style={{ borderLeft: "4px solid var(--sv-ink)", paddingLeft: "15px" }}>
                  <h4 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--sv-ink)" }}>
                    Real-Time
                  </h4>
                  <span style={{ fontSize: "0.85rem", color: "var(--sv-gray)" }}>
                    Analytics Insights
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sv-focus-box"
              style={{
                background: "var(--sv-bg)",
                padding: "40px",
                borderRadius: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                width: "100%",
                margin: "0",
                alignItems: "flex-start",
              }}
            >
              <h4 className="sv-h4" style={{ marginBottom: "0" }}>
                AI Strategy Consulting
              </h4>
              <p className="sv-p" style={{ fontSize: "0.95rem" }}>
                Our consultants collaborate with your leadership and technology teams to design data and AI strategies aligned with your business goals.
              </p>
              <ul className="sv-check-list-pill" style={{ marginTop: "0" }}>
                <li>BI &amp; Dashboarding</li>
                <li>Data Lakes &amp; Warehousing</li>
                <li>Predictive Analytics</li>
                <li>Custom Machine Learning Models</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — SERVICES GRID ═══ */}
      <section
        className="sv-section-grid"
        style={{ background: "var(--sv-bg)" }}
      >
        <div className="container">
          <div className="sv-section-header">
            <h2 className="sv-h2">Cutting-Edge AI and Data Services</h2>
            <p className="sv-subtitle">
              Professional Labs delivers modern data and AI solutions that drive innovation, operational efficiency, and data-driven decision-making.
            </p>
          </div>
          <div
            className="sv-grid-layout"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
          >
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

      {/* ═══ SECTION 5 — OPTIMIZING DATA ═══ */}
      <section className="sv-section-benefits">
        <div
          className="container sv-data-driven-benefits-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <div className="sv-benefits-image">
            <div
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                maxHeight: "450px",
                borderLeft: "8px solid var(--sv-accent)",
              }}
            >
              <Image
                src="/big_data_infra_1772550892173.png"
                alt="Optimizing Data for Artificial Intelligence"
                width={1200}
                height={800}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
          <div className="sv-benefits-content">
            <h2 className="sv-h2">Optimizing Data for Artificial Intelligence</h2>
            <p className="sv-p" style={{ fontSize: "1.1rem", marginBottom: "40px" }}>
              Reliable data infrastructure is the foundation of successful AI initiatives. Our data engineering specialists design and maintain robust systems.
            </p>
            <ul className="sv-check-list">
              <li>
                  <CheckCircle2 size={18} className="icon" />
                  <span>Clean and organized enterprise data assets</span>
              </li>
              <li>
                  <CheckCircle2 size={18} className="icon" />
                  <span>Seamless integration across multiple systems</span>
              </li>
              <li>
                  <CheckCircle2 size={18} className="icon" />
                  <span>Continuous monitoring, support, and maintenance</span>
              </li>
              <li>
                  <CheckCircle2 size={18} className="icon" />
                  <span>Custom analytics platforms and reporting tools</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 — WHY CHOOSE US (Dark themed) ═══ */}
      <section
        className="sv-section-features"
        style={{ background: "var(--sv-ink)", color: "#fff" }}
      >
        <div className="container">
          <div className="sv-section-header light">
            <h2 className="sv-h2" style={{ color: "#fff" }}>
              Why Choose Professional Labs
            </h2>
            <p
              className="sv-subtitle"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Organizations choose Professional Labs for our data expertise, AI innovation, and collaborative consulting approach.
            </p>
          </div>
          <div className="sv-grid-layout">
            <motion.div
              className="sv-pro-item"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <div
                className="sv-check-icon-wrap"
                style={{ color: "var(--sv-accent)" }}
              >
                <Zap size={24} />
              </div>
              <div>
                <h5
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  Innovative Solutions
                </h5>
                <p style={{ opacity: 0.8, fontSize: "0.95rem" }}>
                  Delivering technologically advanced yet practical analytics and AI solutions that drive measurable business outcomes.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="sv-pro-item"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <div
                className="sv-check-icon-wrap"
                style={{ color: "var(--sv-accent)" }}
              >
                <Users size={24} />
              </div>
              <div>
                <h5
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  Expert Collaborative Team
                </h5>
                <p style={{ opacity: 0.8, fontSize: "0.95rem" }}>
                  A multidisciplinary team of data scientists, AI engineers, and industry specialists working together.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="sv-pro-item"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <div
                className="sv-check-icon-wrap"
                style={{ color: "var(--sv-accent)" }}
              >
                <ShieldCheck size={24} />
              </div>
              <div>
                <h5
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  Ethical and Secure AI
                </h5>
                <p style={{ opacity: 0.8, fontSize: "0.95rem" }}>
                  We prioritize data privacy, governance, and compliance while implementing advanced analytics solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7 — FAQ ═══ */}
      <section className="sv-section-faq">
        <div className="container">
          <h2
            className="sv-h2"
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            Frequently Asked Questions About Data-Driven Solutions
          </h2>
          <div
            className="sv-faq-wrap"
            style={{ maxWidth: "900px", margin: "0 auto" }}
          >
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className={`sv-faq-item ${openFaq === idx ? "sv-active" : ""}`}
              >
                <button
                  className="sv-faq-q"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="sv-faq-qtext">{item.question}</span>
                  <span className="sv-faq-ico">
                    {openFaq === idx ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="sv-faq-a"
                    >
                      <div className="sv-faq-ainner">
                        <p style={{ lineHeight: "1.8" }}>{item.answer}</p>
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
            <h2
              className="sv-h2"
              style={{ color: "#fff", marginBottom: "20px" }}
            >
              Ready to Unlock the Power of Data?
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
              Schedule a free consultation with a Professional Labs expert to explore how data and AI can accelerate your business growth.
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link href="/contact" className="sv-btn-white">
                Book Your Free Consultation <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
