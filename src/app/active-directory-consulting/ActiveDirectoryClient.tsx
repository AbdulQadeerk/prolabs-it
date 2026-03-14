"use client";

import {
  Users,
  ShieldCheck,
  Cloud,
  Server,
  Zap,
  Globe,
  Search,
  RefreshCcw,
  Fingerprint,
  Layout,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const adCapabilities = [
  {
    title: "Centralized Management",
    desc: "Administrators can manage users, groups, permissions, and resources from a centralized directory environment.",
    icon: <Layout size={24} />,
  },
  {
    title: "Single Sign-On (SSO)",
    desc: "Users authenticate once and gain seamless access to authorized applications and services.",
    icon: <Fingerprint size={24} />,
  },
  {
    title: "Collaboration Tools",
    desc: "Shared resources, files, and permissions allow teams to collaborate more efficiently across the network.",
    icon: <Users size={24} />,
  },
  {
    title: "Enhanced Security",
    desc: "Centralized policy enforcement ensures consistent security controls across users and devices.",
    icon: <ShieldCheck size={24} />,
  },
  {
    title: "Business Continuity",
    desc: "Directory backups and recovery strategies help maintain operations during system failures or disasters.",
    icon: <Cloud size={24} />,
  },
  {
    title: "Optimized Performance",
    desc: "Continuous monitoring and performance optimization ensure efficient directory operations.",
    icon: <Zap size={24} />,
  },
];

const troubleshootFeatures = [
  {
    title: "Highly Privileged Groups",
    desc: "Monitor privileged accounts and generate reports to maintain strong access control policies.",
    icon: <ShieldCheck size={22} />,
  },
  {
    title: "Replication Error Monitoring",
    desc: "Identify replication issues between domain controllers that may affect directory reliability.",
    icon: <RefreshCcw size={22} />,
  },
  {
    title: "Expensive LDAP Query Detection",
    desc: "Detect inefficient LDAP queries that can slow down Active Directory performance.",
    icon: <Search size={22} />,
  },
  {
    title: "DNS and Name Resolution",
    desc: "Diagnose DNS configuration issues that impact authentication and network communication.",
    icon: <Globe size={22} />,
  },
];

const faqItems = [
  {
    question: "What is Active Directory and why do organizations need it?",
    answer: "Active Directory is a directory service developed by Microsoft that manages users, devices, permissions, and network resources within an organization. It provides centralized authentication and identity management across enterprise environments.",
  },
  {
    question: "What are the benefits of Active Directory consulting?",
    answer: "Active Directory consulting helps organizations improve directory security, optimize performance, implement hybrid identity environments, and ensure compliance with enterprise IT standards.",
  },
  {
    question: "What types of organizations benefit from Active Directory services?",
    answer: "Organizations of all sizes—including enterprises, healthcare providers, financial institutions, and government agencies—use Active Directory to manage identity and access control across their networks.",
  },
  {
    question: "How long does an Active Directory consulting project take?",
    answer: "Project timelines vary depending on the size and complexity of the infrastructure. Small optimization projects may take a few days, while full migrations or hybrid identity deployments may require several weeks.",
  },
  {
    question: "What qualifications should an Active Directory consultant have?",
    answer: "Qualified consultants typically have experience with Microsoft Active Directory, identity and access management (IAM), network security, and hybrid cloud integration technologies.",
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

export default function ActiveDirectoryClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-ad">
      {/* ═══ SECTION 1 — HERO BAND ═══ */}
      <section className="sv-hero-band">
        <div className="container">
          <nav className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Services</span>
            <span className="sep">/</span>
            <span className="active">Active Directory Consulting Services</span>
          </nav>
          <h1 className="sv-hero-h1">Active Directory Consulting Services</h1>
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
                Optimize Identity Management with Secure Active Directory Solutions
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="sv-body-text"
                style={{ fontSize: "1.15rem", marginBottom: "35px", lineHeight: "1.6" }}
              >
                Active Directory (AD) is the backbone of enterprise identity and access management. Professional Labs provides Active Directory consulting services to help organizations design, deploy, secure, and optimize complex AD environments.
              </motion.p>
              
              <motion.p
                variants={fadeInUp}
                className="sv-body-text"
                style={{ fontSize: "1.05rem", marginBottom: "35px", lineHeight: "1.6" }}
              >
                Our experienced consultants support Active Directory Domain Services (AD DS), hybrid identity architecture, and enterprise authentication systems, ensuring reliable network management and strong security across your organization.
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
                <span className="sv-tag">Hybrid Identity Solutions</span>
                <span className="sv-tag">Single Sign-On Integration</span>
                <span className="sv-tag">Azure AD Connect</span>
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
                className="sv-image-frame sv-ad-img-frame"
                style={{
                  borderRadius: "32px",
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                <Image
                  src="/ad_hero_dashboard_1772545671247.png"
                  alt="Active Directory Consulting - Identity management and hybrid cloud dashboard"
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
                Active Directory Consulting Expertise
              </h2>
              <p
                className="sv-p"
                style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "var(--sv-gray)" }}
              >
                Professional Labs has over two decades of experience supporting Active Directory deployments and AD DS infrastructure across enterprise networks.
              </p>
              <p
                className="sv-p"
                style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "var(--sv-gray)", marginTop: "16px" }}
              >
                Our architects help organizations implement scalable directory services that support centralized user management, secure authentication, and hybrid cloud identity models.
              </p>
              <div style={{ marginTop: "32px", display: "flex", gap: "24px" }}>
                <div style={{ borderLeft: "4px solid var(--sv-accent)", paddingLeft: "15px" }}>
                  <h4 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--sv-ink)" }}>
                    20+
                  </h4>
                  <span style={{ fontSize: "0.85rem", color: "var(--sv-gray)" }}>
                    Years Experience
                  </span>
                </div>
                <div style={{ borderLeft: "4px solid var(--sv-ink)", paddingLeft: "15px" }}>
                  <h4 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--sv-ink)" }}>
                    Expert
                  </h4>
                  <span style={{ fontSize: "0.85rem", color: "var(--sv-gray)" }}>
                    AD Architects
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
                Hybrid Identity Solutions
              </h4>
              <p className="sv-p" style={{ fontSize: "0.95rem" }}>
                Modern organizations increasingly rely on hybrid identity environments that integrate on-premise infrastructure with cloud identity platforms. Our consultants deploy and configure Azure AD Connect to synchronize identities.
              </p>
              <ul className="sv-check-list-pill" style={{ marginTop: "0" }}>
                <li>Azure AD Hybrid Sync</li>
                <li>Single Sign-On (SSO)</li>
                <li>Cloud Application Registration</li>
                <li>Identity-as-a-Service (IDaaS)</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — TROUBLESHOOTING GRID ═══ */}
      <section
        className="sv-section-grid"
        style={{ background: "var(--sv-bg)" }}
      >
        <div className="container">
          <div className="sv-section-header">
            <h2 className="sv-h2">Efficiently Troubleshoot Active Directory Issues</h2>
            <p className="sv-subtitle">
              Active Directory environments can develop performance or security issues if not properly monitored. Professional Labs helps organizations identify vulnerabilities and optimize their AD infrastructure.
            </p>
          </div>
          <div
            className="sv-grid-layout"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
          >
            {troubleshootFeatures.map((item, idx) => (
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

      {/* ═══ SECTION 5 — CLOUD PROTECTION ═══ */}
      <section className="sv-section-benefits">
        <div
          className="container sv-ad-benefits-grid"
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
                src="/ad_hybrid_sync_infra_1772545700338.png"
                alt="Active Directory Hybrid Sync Infrastructure"
                width={1200}
                height={800}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
          <div className="sv-benefits-content">
            <h2 className="sv-h2">Safeguard Identity Infrastructure with Cloud Protection</h2>
            <p className="sv-p" style={{ fontSize: "1.1rem", marginBottom: "40px" }}>
              Integrating Active Directory with cloud security platforms strengthens identity protection across the enterprise.
            </p>
            <ul className="sv-check-list">
              <li>
                  <CheckCircle2 size={18} className="icon" />
                  <span>Real-time identity monitoring across users, devices, and resources</span>
              </li>
              <li>
                  <CheckCircle2 size={18} className="icon" />
                  <span>Advanced threat detection powered by cloud-scale analytics</span>
              </li>
              <li>
                  <CheckCircle2 size={18} className="icon" />
                  <span>Rapid identification of suspicious authentication activity</span>
              </li>
              <li>
                  <CheckCircle2 size={18} className="icon" />
                  <span>Streamlined incident response with detailed attack timelines</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 — ADMINISTRATION ═══ */}
      <section
        className="sv-section-features"
        style={{ background: "var(--sv-ink)", color: "#fff" }}
      >
        <div className="container">
          <div className="sv-section-header light">
            <h2 className="sv-h2" style={{ color: "#fff" }}>
              Simplifying Active Directory Administration
            </h2>
            <p
              className="sv-subtitle"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Active Directory centralizes identity management while improving operational efficiency for IT teams.
            </p>
          </div>
          <div className="sv-grid-layout">
            {adCapabilities.map((cap, idx) => (
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
            Frequently Asked Questions About Active Directory Consulting
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
                    {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
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
              Ready to Optimize Your Active Directory Environment?
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
              Schedule a free consultation with a Professional Labs specialist to evaluate and optimize your AD environment.
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
