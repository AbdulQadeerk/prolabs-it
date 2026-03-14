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
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const strategyFeatures = [
  {
    title: "Digital Maturity Assessment",
    desc: "Assess your organization's digital workplace readiness and identify opportunities for improvement.",
    icon: <TrendingUp size={24} />,
  },
  {
    title: "Solution Blueprint",
    desc: "Develop a comprehensive workplace transformation strategy and architecture.",
    icon: <Layers size={24} />,
  },
  {
    title: "Content Personalization",
    desc: "Create tailored user experiences and intelligent enterprise search capabilities.",
    icon: <Layout size={24} />,
  },
  {
    title: "ECM Health Assessment",
    desc: "Evaluate existing content management platforms and define migration or optimization strategies.",
    icon: <FileText size={24} />,
  },
];

const implementationFeatures = [
  {
    title: "Modern Intranet",
    desc: "Develop collaborative intranet platforms that enhance internal communication and knowledge sharing.",
    icon: <Globe size={22} />,
  },
  {
    title: "Productivity Applications",
    desc: "Design custom applications that streamline workflows and increase workforce efficiency.",
    icon: <Smartphone size={22} />,
  },
  {
    title: "Platform Engineering",
    desc: "Build and integrate enterprise search services and enterprise content management platforms.",
    icon: <Cpu size={22} />,
  },
  {
    title: "Content Migration",
    desc: "Securely migrate and validate legacy content systems into modern digital platforms.",
    icon: <RefreshCcw size={22} />,
  },
];

const managedServices = [
  {
    label: "Application Performance",
    text: "Application support and performance optimization to keep your workplace running smoothly.",
  },
  {
    label: "Enterprise Search",
    text: "Enterprise search managed services across disparate data systems for rapid information access.",
  },
  {
    label: "Collaboration Admin",
    text: "Collaboration platform administration and management for seamless team interactions.",
  },
  {
    label: "Continuous Updates",
    text: "Continuous updates and enhancements for workplace applications to leverage latest features.",
  },
];

const faqItems = [
  {
    question: "What is a Modern Workplace?",
    answer:
      "A modern workplace is a digital work environment that integrates cloud technology, collaboration tools, and secure access systems to enable employees to work efficiently from any location or device.",
  },
  {
    question: "How can a Modern Workplace benefit your organization?",
    answer:
      "Modern workplace solutions improve employee productivity, enable hybrid work, strengthen security, and simplify collaboration across teams and departments.",
  },
  {
    question: "What services are included in a Modern Workplace solution?",
    answer:
      "Typical services include digital workplace strategy, cloud collaboration platforms, enterprise intranet development, productivity applications, identity management, and ongoing support services.",
  },
  {
    question: "How can a Modern Workplace help employees work more effectively?",
    answer:
      "A modern workplace provides employees with secure access to applications, files, and communication tools, allowing them to collaborate and work efficiently from anywhere.",
  },
  {
    question:
      "How can an organization implement a Modern Workplace solution?",
    answer:
      "Organizations can implement a modern workplace by assessing their current digital environment, defining a workplace strategy, deploying collaboration tools, and integrating secure identity and cloud platforms.",
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

export default function ModernWorkplaceClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-modern-workplace">
      {/* ═══ SECTION 1 — HERO BAND ═══ */}
      <section className="sv-hero-band">
        <div className="container">
          <nav className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Services</span>
            <span className="sep">/</span>
            <span className="active">Modern Workplace Solutions</span>
          </nav>
          <h1 className="sv-hero-h1">Modern Workplace Solutions</h1>
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
                Redefine Work with an Employee-First Digital Workplace
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="sv-body-text"
                style={{
                  fontSize: "1.15rem",
                  marginBottom: "12px",
                  lineHeight: "1.6",
                }}
              >
                A modern workplace empowers organizations to support hybrid work,
                secure collaboration, and employee productivity through
                integrated digital tools and cloud platforms. Professional Labs
                helps businesses design and implement modern workplace solutions
                that connect employees, applications, and data in a secure
                digital environment.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="sv-body-text"
                style={{
                  fontSize: "1.05rem",
                  marginBottom: "35px",
                  lineHeight: "1.6",
                }}
              >
                Our solutions focus on improving employee experience while
                enabling secure access, collaboration, and productivity across
                devices and locations.
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
                  Get a Free 30-Minute Consultation{" "}
                  <ArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="sv-meta-tags">
                <span className="sv-tag">Hybrid Workforce</span>
                <span className="sv-tag">Digital Workplace Solutions</span>
                <span className="sv-tag">Secure Productivity Platforms</span>
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
                className="sv-image-frame sv-modern-workplace-img-frame"
                style={{
                  borderRadius: "32px",
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                <Image
                  src="/modern_workplace_hero_1772545930778.png"
                  alt="Modern Workplace Solutions - Hybrid workforce collaboration and digital workplace dashboard"
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

      {/* ═══ SECTION 3 — UVP ═══ */}
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
                Connect, Collaborate, and Work Securely
              </h2>
              <p
                className="sv-p"
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  color: "var(--sv-gray)",
                }}
              >
                Professional Labs enables organizations to build a centralized
                digital workplace where employees can access the tools they need
                from any device or location.
              </p>
              <p
                className="sv-p"
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  color: "var(--sv-gray)",
                  marginTop: "16px",
                }}
              >
                By simplifying IT management and eliminating productivity
                barriers, our solutions help teams stay focused on collaboration
                and innovation rather than technical issues.
              </p>
              <div style={{ marginTop: "32px", display: "flex", gap: "24px" }}>
                <div
                  style={{
                    borderLeft: "4px solid var(--sv-accent)",
                    paddingLeft: "15px",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: 800,
                      color: "var(--sv-ink)",
                    }}
                  >
                    24×7
                  </h4>
                  <span
                    style={{ fontSize: "0.85rem", color: "var(--sv-gray)" }}
                  >
                    Support Assistant
                  </span>
                </div>
                <div
                  style={{
                    borderLeft: "4px solid var(--sv-ink)",
                    paddingLeft: "15px",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: 800,
                      color: "var(--sv-ink)",
                    }}
                  >
                    AI
                  </h4>
                  <span
                    style={{ fontSize: "0.85rem", color: "var(--sv-gray)" }}
                  >
                    Driven Support
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
                Hybrid Work Adaptability
              </h4>
              <p className="sv-p" style={{ fontSize: "0.95rem" }}>
                Our modern workplace platform centralizes employee experiences
                and enables seamless management of services across multiple
                devices through a secure self-service portal.
              </p>
              <ul className="sv-check-list-pill" style={{ marginTop: "0" }}>
                <li>Strategy &amp; Blueprint</li>
                <li>Seamless Consumption</li>
                <li>Mobile-First Management</li>
                <li>Direct Employee Feedback</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — STRATEGY & IMPLEMENTATION ═══ */}
      <section
        className="sv-section-grid"
        style={{ background: "var(--sv-bg)" }}
      >
        <div className="container">
          <div className="sv-section-header">
            <h2 className="sv-h2">Boost Productivity and Drive Business Success</h2>
            <p className="sv-subtitle">
              Professional Labs delivers strategic consulting and implementation
              services to help organizations build scalable, modern workplace
              environments.
            </p>
          </div>

          {/* Strategy Section */}
          <div style={{ marginBottom: "80px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                marginBottom: "30px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  height: "1px",
                  background: "rgba(0,0,0,0.1)",
                  flex: 1,
                  minWidth: "50px",
                }}
              ></div>
              <h3
                className="sv-h3"
                style={{
                  margin: 0,
                  textTransform: "uppercase",
                  fontSize: "1rem",
                  letterSpacing: "2px",
                  color: "var(--sv-gray)",
                  whiteSpace: "nowrap",
                }}
              >
                Strategy
              </h3>
              <div
                style={{
                  height: "1px",
                  background: "rgba(0,0,0,0.1)",
                  flex: 1,
                  minWidth: "50px",
                }}
              ></div>
            </div>
            <div
              className="sv-grid-layout"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
            >
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

          {/* Implementation Section */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                marginBottom: "30px",
                justifyContent: "center",
              }}
            >
              <div
                style={{ height: "1px", background: "rgba(0,0,0,0.1)", flex: 1 }}
              ></div>
              <h3
                className="sv-h3"
                style={{
                  margin: 0,
                  textTransform: "uppercase",
                  fontSize: "1rem",
                  letterSpacing: "2px",
                  color: "var(--sv-gray)",
                }}
              >
                Implementation
              </h3>
              <div
                style={{ height: "1px", background: "rgba(0,0,0,0.1)", flex: 1 }}
              ></div>
            </div>
            <div
              className="sv-grid-layout"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
            >
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

      {/* ═══ SECTION 5 — MANAGED SERVICES ═══ */}
      <section className="sv-section-benefits">
        <div
          className="container sv-modern-workplace-benefits-grid"
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
                src="/modern_workplace_collaboration_1772545955067.png"
                alt="Modern Workplace Managed Services"
                width={1200}
                height={800}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
          <div className="sv-benefits-content">
            <h2 className="sv-h2">Managed Services and Ongoing Support</h2>
            <p
              className="sv-p"
              style={{ fontSize: "1.1rem", marginBottom: "40px" }}
            >
              Professional Labs provides ongoing support and optimization
              services to ensure your digital workplace continues to perform at
              its best.
            </p>
            <ul className="sv-pro-features">
              {managedServices.map((item, idx) => (
                <li key={idx} className="sv-pro-f-card">
                  <div
                    className="sv-pro-f-icon"
                    style={{ color: "var(--sv-accent)" }}
                  >
                    <CheckCircle2 size={18} />
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
      <section
        className="sv-section-features"
        style={{ background: "var(--sv-ink)", color: "#fff" }}
      >
        <div className="container">
          <div className="sv-section-header light">
            <h2 className="sv-h2" style={{ color: "#fff" }}>
              Revamp Your Workplace with a Seamless Experience
            </h2>
            <p
              className="sv-subtitle"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Modern workplace solutions prioritize consumer-like simplicity
              while maintaining enterprise security and governance.
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
                <Smartphone size={24} />
              </div>
              <div>
                <h5
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  Effortless Management
                </h5>
                <p style={{ opacity: 0.8, fontSize: "0.95rem" }}>
                  Centralize workplace services and applications through a secure
                  self-service management platform.
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
                  Empowered Employees
                </h5>
                <p style={{ opacity: 0.8, fontSize: "0.95rem" }}>
                  Enable employees to share feedback and collaborate effectively
                  across departments.
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
                <Bot size={24} />
              </div>
              <div>
                <h5
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  AI Digital Assistant
                </h5>
                <p style={{ opacity: 0.8, fontSize: "0.95rem" }}>
                  Provide 24×7 support with AI-driven digital assistants that
                  proactively detect and resolve issues.
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
            Frequently Asked Questions About the Modern Workplace
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
              Ready to Transform Your Workplace?
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
              Schedule a free consultation with a Professional Labs expert to
              design and implement a modern workplace strategy tailored to your
              organization.
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
