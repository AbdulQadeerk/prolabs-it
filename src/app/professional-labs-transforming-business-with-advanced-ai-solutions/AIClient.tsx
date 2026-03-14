"use client";

import {
  Brain,
  Database,
  Cpu,
  BarChart3,
  Bot,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Settings,
  Zap,
  ChevronDown,
  ChevronUp,
  Users,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const aiCapabilities = [
  {
    title: "AI Strategy Consulting",
    desc: "Strategic AI planning and assessments that align advanced technologies with business goals.",
    icon: <TrendingUp size={24} />,
  },
  {
    title: "AI Solution Development",
    desc: "Custom-built AI applications including predictive analytics, automation tools, and intelligent data platforms.",
    icon: <Bot size={24} />,
  },
  {
    title: "Data Engineering",
    desc: "Preparing and structuring enterprise data pipelines to power machine learning and analytics models.",
    icon: <Database size={24} />,
  },
  {
    title: "Machine & Deep Learning",
    desc: "Develop advanced algorithms that predict outcomes, detect patterns, and automate complex tasks.",
    icon: <Cpu size={24} />,
  },
  {
    title: "Natural Language Processing",
    desc: "Use NLP technologies to analyze language, power chatbots, and understand customer sentiment.",
    icon: <MessageSquare size={24} />,
  },
  {
    title: "AI Integration Services",
    desc: "Integrate AI capabilities into existing enterprise systems while maintaining operational continuity.",
    icon: <Settings size={24} />,
  },
];

const faqs = [
  {
    question: "What is AI consulting and how can it benefit my business?",
    answer: "AI consulting helps organizations identify opportunities to use artificial intelligence to improve operations, automate processes, and generate insights from data. It can increase efficiency, reduce costs, and enhance customer experiences.",
  },
  {
    question: "What AI services does Professional Labs offer?",
    answer: "Professional Labs provides AI strategy consulting, machine learning development, natural language processing solutions, data engineering services, and AI integration for enterprise systems.",
  },
  {
    question: "Is my business data safe when implementing AI solutions?",
    answer: "Yes. AI implementations follow strict data security and privacy standards. Professional Labs ensures secure data handling, encryption, and compliance with enterprise security practices.",
  },
  {
    question: "Can AI be integrated with existing business systems?",
    answer: "Yes. AI solutions can be integrated into existing enterprise applications, databases, and workflows to enhance automation and decision-making without replacing current infrastructure.",
  },
  {
    question: "How long does it take to implement an AI solution?",
    answer: "Implementation timelines vary depending on project complexity. Simple AI integrations may take a few weeks, while advanced machine learning systems may require several months of development and testing.",
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

export default function AIClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-ai">
      {/* ═══ SECTION 1 — HERO BAND ═══ */}
      <section className="sv-hero-band">
        <div className="container">
          <nav className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Services</span>
            <span className="sep">/</span>
            <span className="active">Advanced AI Solutions</span>
          </nav>
          <h1 className="sv-hero-h1">Advanced AI Solutions</h1>
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
                Transform Your Business with Enterprise Artificial Intelligence
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="sv-body-text"
                style={{ fontSize: "1.15rem", marginBottom: "35px", lineHeight: "1.6" }}
              >
                Artificial Intelligence is redefining how organizations analyze data, automate processes, and deliver better customer experiences. Professional Labs provides advanced AI consulting and development services to help businesses leverage machine learning, natural language processing, and intelligent automation.
              </motion.p>
              
              <motion.p
                variants={fadeInUp}
                className="sv-body-text"
                style={{ fontSize: "1.05rem", marginBottom: "35px", lineHeight: "1.6" }}
              >
                From AI strategy to custom development and system integration, our experts help organizations unlock new efficiencies, insights, and innovation using scalable AI solutions.
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
                <span className="sv-tag">Machine Learning Expertise</span>
                <span className="sv-tag">Natural Language Processing Solutions</span>
                <span className="sv-tag">Data Engineering & AI Integration</span>
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
                className="sv-image-frame sv-ai-img-frame"
                style={{
                  borderRadius: "32px",
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                <Image
                  src="/ai_hero_illustration_1772546340123.png"
                  alt="Advanced AI Solutions - Machine Learning, NLP and Data Science dashboard"
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

      {/* ═══ SECTION 3 — EXPERTISE ═══ */}
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
                Empowering Your Business with Artificial Intelligence
              </h2>
              <p
                className="sv-p"
                style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "var(--sv-gray)" }}
              >
                At Professional Labs, we help organizations harness the power of AI to improve decision-making, automate operations, and uncover actionable insights from data.
              </p>
              <p
                className="sv-p"
                style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "var(--sv-gray)", marginTop: "16px" }}
              >
                Our comprehensive AI consulting services are designed to align advanced technologies with your business objectives, ensuring practical AI implementations that deliver measurable results.
              </p>
              <div style={{ marginTop: "32px", display: "flex", gap: "24px" }}>
                <div style={{ borderLeft: "4px solid var(--sv-accent)", paddingLeft: "15px" }}>
                  <h4 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--sv-ink)" }}>
                    ROI
                  </h4>
                  <span style={{ fontSize: "0.85rem", color: "var(--sv-gray)" }}>
                    Driven Solutions
                  </span>
                </div>
                <div style={{ borderLeft: "4px solid var(--sv-ink)", paddingLeft: "15px" }}>
                  <h4 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--sv-ink)" }}>
                    24/7
                  </h4>
                  <span style={{ fontSize: "0.85rem", color: "var(--sv-gray)" }}>
                    Post-Deployment Support
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
                Our AI consultants work closely with your leadership and technology teams to develop a custom AI roadmap tailored to your organization’s goals and data ecosystem.
              </p>
              <ul className="sv-check-list-pill" style={{ marginTop: "0" }}>
                <li>Customized AI Roadmaps</li>
                <li>System Assessments</li>
                <li>Improvement Identification</li>
                <li>Cloud-Native AI Architecture</li>
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
            <h2 className="sv-h2">Innovative AI Solutions, Tangible Results</h2>
            <p className="sv-subtitle">
              Professional Labs focuses on delivering AI solutions that are not only technologically advanced but also practical, scalable, and results-driven.
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

      {/* ═══ SECTION 5 — DATA ENGINEERING ═══ */}
      <section className="sv-section-benefits">
        <div
          className="container sv-ai-benefits-grid"
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
                src="/ai_data_engineering_1772546365098.png"
                alt="AI Data Engineering and Integration"
                width={1200}
                height={800}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
          <div className="sv-benefits-content">
            <h2 className="sv-h2">AI Data Engineering and Integration</h2>
            <p className="sv-p" style={{ fontSize: "1.1rem", marginBottom: "40px" }}>
              Artificial intelligence solutions rely on well-structured data and advanced algorithms to deliver business value. Our AI engineers build scalable data architectures and intelligent models.
            </p>
            <div style={{ display: "grid", gap: "24px" }}>
              <div style={{ display: "flex", gap: "16px" }}>
                <div style={{ color: "var(--sv-accent)" }}><MessageSquare size={24} /></div>
                <div>
                  <h4 className="sv-h4" style={{ marginBottom: "8px" }}>Natural Language Processing</h4>
                  <p className="sv-p" style={{ fontSize: "0.95rem" }}>From conversational chatbots to advanced sentiment analysis, NLP helps businesses better understand and engage with customers.</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "16px" }}>
                <div style={{ color: "var(--sv-accent)" }}><Cpu size={24} /></div>
                <div>
                  <h4 className="sv-h4" style={{ marginBottom: "8px" }}>Machine Learning</h4>
                  <p className="sv-p" style={{ fontSize: "0.95rem" }}>Develop predictive models that automate workflows, improve forecasting, and deliver data-driven insights.</p>
                </div>
              </div>
            </div>
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
              Our AI consulting services combine technical expertise with a strong focus on ethical AI practices and business outcomes.
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
                  Expert Team
                </h5>
                <p style={{ opacity: 0.8, fontSize: "0.95rem" }}>
                  Experienced AI engineers, data scientists, and industry specialists working together to deliver practical solutions.
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
                  Ethical AI
                </h5>
                <p style={{ opacity: 0.8, fontSize: "0.95rem" }}>
                  We prioritize data privacy, security, and responsible AI implementation aligned with industry standards.
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
                  Seamless Integration
                </h5>
                <p style={{ opacity: 0.8, fontSize: "0.95rem" }}>
                  AI solutions are integrated into your existing systems without disrupting business operations.
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
            Frequently Asked Questions About AI Consulting
          </h2>
          <div
            className="sv-faq-wrap"
            style={{ maxWidth: "900px", margin: "0 auto" }}
          >
            {faqs.map((item, idx) => (
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
              Ready to Transform Your Business with AI?
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
              Schedule a free consultation with a Professional Labs AI expert to explore how artificial intelligence can accelerate your digital transformation.
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
