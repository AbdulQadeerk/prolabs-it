"use client";

import {
  ShieldCheck,
  Lock,
  Key,
  Shield,
  Users,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Server,
  Cpu,
  BookOpen,
  FileCheck,
  Verified,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const keyCapabilities = [
  {
    title: "Digital Certificate Management",
    desc: "Secure certificate lifecycle management for users, devices, servers, and applications across enterprise environments.",
    icon: <Verified size={24} />,
  },
  {
    title: "Secure Key Generation",
    desc: "Highly secure cryptographic key generation and distribution systems to establish trusted communication channels.",
    icon: <Key size={24} />,
  },
  {
    title: "Identity Verification",
    desc: "Robust authentication and identity verification processes to ensure trusted access across networks.",
    icon: <Users size={24} />,
  },
  {
    title: "HSM Integration",
    desc: "Integration of Hardware Security Modules (HSMs) to securely store and protect cryptographic keys.",
    icon: <Cpu size={24} />,
  },
  {
    title: "Trusted Communication",
    desc: "Enable encrypted communication and secure authentication across public and private networks.",
    icon: <TrendingUp size={24} />,
  },
  {
    title: "Compliance & Security Standards",
    desc: "Design PKI architectures that align with regulatory frameworks and security standards across industries.",
    icon: <ShieldCheck size={24} />,
  },
];

const pkiServices = [
  {
    title: "PKI Consulting Services",
    desc: "Strategic consulting, security analysis, and architecture planning to modernize certificate-based security infrastructure.",
    icon: <ShieldCheck size={22} />,
  },
  {
    title: "Professional PKI Implementation",
    desc: "End-to-end deployment of secure PKI environments tailored to your organization's security policies and infrastructure.",
    icon: <Server size={22} />,
  },
  {
    title: "PKI Review & Assessment",
    desc: "Detailed audits of existing PKI systems to identify vulnerabilities, misconfigurations, and operational risks.",
    icon: <FileCheck size={22} />,
  },
  {
    title: "Security & PKI Training",
    desc: "Training programs designed to help internal teams manage digital certificates, cryptographic keys, and PKI operations securely.",
    icon: <BookOpen size={22} />,
  },
];

const differentiators = [
  "End-to-end PKI consulting including design, deployment, and optimization",
  "Hands-on experience operating enterprise-grade PKI systems",
  "Expertise integrating leading HSM hardware platforms",
  "Proven track record supporting government and critical infrastructure environments",
  "Tailored solutions that maximize the value of existing security investments",
];

const faqItems = [
  {
    question: "What is a PKI consultant?",
    answer:
      "A PKI consultant is a cybersecurity specialist who designs, implements, and manages public key infrastructure systems used to secure digital communication, identities, and data through encryption and digital certificates.",
  },
  {
    question: "What services does a PKI provide?",
    answer:
      "PKI services include certificate issuance, identity verification, encryption, digital signature management, secure key storage, and certificate lifecycle management.",
  },
  {
    question: "What is PKI and how does it work?",
    answer:
      "Public Key Infrastructure (PKI) uses a combination of public and private cryptographic keys, digital certificates, and certificate authorities to authenticate identities and encrypt data exchanged over networks.",
  },
  {
    question: "What is the importance of HSMs in PKI?",
    answer:
      "Hardware Security Modules (HSMs) provide highly secure environments for generating and storing cryptographic keys. They are essential for protecting the root keys used in PKI systems.",
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

export default function PKIClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-pki">
      {/* ═══ SECTION 1 — HERO BAND ═══ */}
      <section className="sv-hero-band">
        <div className="container">
          <nav className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Services</span>
            <span className="sep">/</span>
            <span className="active">PKI Consulting Services</span>
          </nav>
          <h1 className="sv-hero-h1">PKI Consulting Services</h1>
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
                Secure Digital Trust with Public Key Infrastructure
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
                Public Key Infrastructure (PKI) is the foundation of secure
                digital communication. Professional Labs provides expert PKI
                consulting services to help organizations design, deploy, and
                manage secure cryptographic environments that protect identities,
                applications, and sensitive data.
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
                Our PKI specialists support businesses in modernizing their
                certificate infrastructure, encryption systems, and trust
                frameworks with secure, standards-based implementations.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="sv-hero-btn-wrap"
                style={{
                  gap: "16px",
                  flexWrap: "wrap",
                  marginBottom: "40px",
                }}
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

              <motion.div
                variants={fadeInUp}
                className="sv-meta-tags"
                style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
              >
                <span className="sv-tag">HSM Integration</span>
                <span className="sv-tag">Digital Certificate Security</span>
                <span className="sv-tag">Cryptographic Consulting</span>
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
                className="sv-image-frame sv-pki-img-frame"
                style={{
                  borderRadius: "32px",
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                <Image
                  src="/pki_hero_dashboard_1772536428647.png"
                  alt="PKI Consulting Services - Public key infrastructure and digital certificate management dashboard"
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

      {/* ═══ SECTION 3 — WHAT DISTINGUISHES US ═══ */}
      <section className="sv-section-info" style={{ background: "#fff" }}>
        <div className="container">
          <div
            className="sv-hero-grid"
            style={{ alignItems: "stretch" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sv-info-card"
            >
              <h2
                className="sv-h2"
                style={{ marginBottom: "24px" }}
              >
                What Distinguishes Professional Labs
              </h2>
              <p
                className="sv-p"
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  color: "var(--sv-gray)",
                }}
              >
                Unlike traditional consulting firms, Professional Labs actively
                operates its own PKI infrastructure. This real-world experience
                allows us to deliver practical solutions that are tested,
                reliable, and designed for enterprise environments.
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
                Our consultants provide full lifecycle support—from architecture
                design and security assessment to implementation and operational
                optimization.
              </p>
              <div
                style={{
                  marginTop: "32px",
                  display: "flex",
                  gap: "24px",
                }}
              >
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
                    15+
                  </h4>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--sv-gray)",
                    }}
                  >
                    Years Track Record
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
                    HSM
                  </h4>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--sv-gray)",
                    }}
                  >
                    Security Experts
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
                Our PKI Consulting Process
              </h4>
              <p className="sv-p" style={{ fontSize: "0.95rem" }}>
                Our consulting methodology ensures that PKI environments are
                designed to support both current security requirements and future
                scalability.
              </p>
              <ul
                className="sv-check-list-pill"
                style={{ marginTop: "0" }}
              >
                <li>Current Capacity Assessment</li>
                <li>Future Requirement Scoping</li>
                <li>Custom PKI Design &amp; HSM Configuration</li>
                <li>Standards-Compliant Implementation</li>
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
            <h2 className="sv-h2">Our PKI Consulting Services</h2>
            <p className="sv-subtitle">
              Professional Labs provides comprehensive consulting services
              covering the entire public key infrastructure lifecycle.
            </p>
          </div>
          <div
            className="sv-grid-layout"
            style={{
              gridTemplateColumns:
                "repeat(auto-fit, minmax(300px, 1fr))",
            }}
          >
            {pkiServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="sv-grid-card"
              >
                <div className="sv-card-icon">{service.icon}</div>
                <h4 className="sv-h4">{service.title}</h4>
                <p className="sv-p">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 — WHY PROFESSIONAL LABS ═══ */}
      <section className="sv-section-benefits">
        <div
          className="container sv-pki-benefits-grid"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
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
                src="/pki_infrastructure_security_1772536450990.png"
                alt="PKI Infrastructure Security"
                width={1200}
                height={800}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          </div>
          <div className="sv-benefits-content">
            <h2 className="sv-h2">Why Professional Labs</h2>
            <p
              className="sv-p"
              style={{ fontSize: "1.1rem", marginBottom: "40px" }}
            >
              Organizations rely on our expertise to implement secure PKI
              infrastructures that support long-term digital trust and
              operational reliability.
            </p>
            <ul className="sv-check-list">
              {differentiators.map((diff, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={18} className="icon" />
                  <span>{diff}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 — KEY CAPABILITIES ═══ */}
      <section
        className="sv-section-features"
        style={{ background: "var(--sv-ink)", color: "#fff" }}
      >
        <div className="container">
          <div className="sv-section-header light">
            <h2 className="sv-h2" style={{ color: "#fff" }}>
              Key PKI Capabilities
            </h2>
            <p
              className="sv-subtitle"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Our expertise spans the full spectrum of modern cryptographic
              infrastructure.
            </p>
          </div>
          <div className="sv-grid-layout">
            {keyCapabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="sv-pro-item"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <div
                  className="sv-check-icon-wrap"
                  style={{ color: "var(--sv-accent)" }}
                >
                  {cap.icon}
                </div>
                <div>
                  <h5
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      marginBottom: "8px",
                    }}
                  >
                    {cap.title}
                  </h5>
                  <p style={{ opacity: 0.8, fontSize: "0.95rem" }}>
                    {cap.desc}
                  </p>
                </div>
              </motion.div>
            ))}
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
            Frequently Asked Questions About PKI Consulting
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
                  onClick={() =>
                    setOpenFaq(openFaq === idx ? null : idx)
                  }
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
                        <p style={{ lineHeight: "1.8" }}>
                          {item.answer}
                        </p>
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
              Ready to Modernize Your PKI Infrastructure?
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
              Schedule a free consultation with a Professional Labs PKI expert to
              assess your infrastructure and design a secure PKI strategy.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link href="/contact" className="sv-btn-white">
                Book Your Free Consultation{" "}
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
