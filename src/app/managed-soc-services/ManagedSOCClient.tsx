"use client";

import {
  ShieldCheck,
  Target,
  Zap,
  BarChart3,
  Users,
  Lock,
  CheckCircle2,
  AlertTriangle,
  Shield,
  Globe,
  Award,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Cloud,
  Download,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Updated FAQ Data ── */
const faqs = [
  {
    question: "What is a managed SOC?",
    answer:
      "A Managed Security Operations Center is a cybersecurity service that continuously monitors IT systems, detects security threats, and responds to cyber incidents to protect business infrastructure and sensitive data.",
  },
  {
    question: "What services are included in a SOC?",
    answer:
      "SOC services typically include threat monitoring, security event analysis, incident response, vulnerability management, log monitoring, and threat intelligence integration.",
  },
  {
    question: "How does a SOC improve cybersecurity?",
    answer:
      "A SOC improves cybersecurity by providing continuous monitoring, early threat detection, rapid incident response, and proactive security management.",
  },
  {
    question: "What is the role of a SOC manager?",
    answer:
      "A SOC manager oversees security operations, manages incident response processes, coordinates analysts, and ensures the organization's security monitoring systems operate effectively.",
  },
  {
    question: "What is the difference between a SOC and an MSP?",
    answer:
      "A SOC focuses on cybersecurity monitoring and threat response, while a Managed Service Provider (MSP) manages broader IT services such as infrastructure, cloud management, and technical support.",
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

export default function ManagedSOCClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-soc">
      {/* ═══════════════════════════════════════════════════════════
          HERO HEADER BAND
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-hero-band">
        <div className="container">
          <nav className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Services</span>
            <span className="sep">/</span>
            <span className="active">Managed SOC Services</span>
          </nav>
          <h1 className="sv-hero-h1">
            Managed SOC Services for 24/7 Threat Detection and Response
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          HERO CONTENT SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-hero-main">
        <div className="container">
          <div className="sv-hero-grid">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="sv-hero-text"
            >
              <motion.p variants={fadeInUp} className="sv-lead">
                Protect your organization with Professional Labs Managed SOC
                services designed to monitor, detect, and respond to
                cybersecurity threats across your entire IT environment.
              </motion.p>
              <motion.p variants={fadeInUp} className="sv-body-text">
                Our cybersecurity experts provide 24/7 Security Operations
                Center (SOC) monitoring to safeguard endpoints, networks,
                servers, cloud platforms, and email systems from evolving cyber
                threats.
              </motion.p>
              <motion.p variants={fadeInUp} className="sv-body-text">
                Professional Labs delivers a fully managed SOC solution that
                combines advanced threat intelligence, AI-powered detection, and
                rapid incident response to protect your business from security
                breaches and downtime. With decades of cybersecurity experience,
                Professional Labs enables businesses to strengthen their
                security posture with real-time monitoring, proactive threat
                prevention, and expert incident response.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="sv-hero-btn-wrap"
                style={{ gap: "16px", flexWrap: "wrap" }}
              >
                <Link href="/contact" className="sv-btn-primary">
                  Book a Free 30-Minute SOC Consultation
                  <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="sv-btn-outline">
                  <Download size={18} /> Download Cyber Threat Exposure Report
                </Link>
              </motion.div>

              {/* Trust Micro-Bar */}
              <motion.div variants={fadeInUp} className="sv-trust-bar">
                <span className="sv-trust-item">✔ 24/7 SOC Monitoring</span>
                <span className="sv-trust-item">✔ AI-Powered Detection</span>
                <span className="sv-trust-item">✔ MDR & XDR</span>
                <span className="sv-trust-item">✔ Since 1997</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="sv-hero-visual"
            >
              <div className="sv-visual-container">
                <Image
                  src="/managed_soc_hero.png"
                  alt="Managed SOC Operations Dashboard showing 24/7 threat monitoring"
                  width={550}
                  height={450}
                  className="sv-float-img"
                  priority
                />
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="sv-status-card"
                >
                  <div className="sv-status-icon">
                    <ShieldCheck size={28} />
                  </div>
                  <div className="sv-status-info">
                    <strong>24/7 Monitoring</strong>
                    <span>Live Protection Active</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHY CHOOSE PROFESSIONAL LABS
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-why-section">
        <div className="container">
          <div className="sv-section-header">
            <h2 className="sv-h2">
              Why Choose Professional Labs for Managed SOC Services
            </h2>
            <p className="sv-subtitle">
              Professional Labs helps organizations strengthen their Security
              Operations Center capabilities with expert-led cybersecurity
              monitoring and advanced threat detection technologies.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="sv-features-grid"
          >
            {[
              {
                icon: <Award size={28} />,
                text: "15+ years of cybersecurity and threat monitoring expertise",
              },
              {
                icon: <Users size={28} />,
                text: "24/7 SOC team with global monitoring capabilities",
              },
              {
                icon: <Cloud size={28} />,
                text: "Cloud-first MSSP model based on Prevent - Detect - Respond framework",
              },
              {
                icon: <Target size={28} />,
                text: "Continuous threat intelligence gathering and analysis",
              },
              {
                icon: <Zap size={28} />,
                text: "Faster incident response using advanced security platforms",
              },
              {
                icon: <BarChart3 size={28} />,
                text: "AI and behavioral analytics for proactive threat detection",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="sv-feature-card"
              >
                <div className="sv-feature-icon">{f.icon}</div>
                <p className="sv-feature-text">{f.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THREAT DETECTION SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-dark-section">
        <div className="container">
          <div className="sv-dark-grid">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="sv-dark-visual"
            >
              <div className="sv-monitor-wrapper">
                <Image
                  src="/managed_soc_hero.png"
                  alt="Advanced Security Threat Detection Dashboard"
                  width={600}
                  height={400}
                  className="sv-monitor-img"
                />
              </div>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="sv-dark-text"
            >
              <motion.h2 variants={fadeInUp} className="sv-dark-h2">
                Advanced Security Threat Detection and Response
              </motion.h2>
              <motion.p variants={fadeInUp} className="sv-dark-p">
                Modern cyber threats require continuous monitoring and rapid
                response. Professional Labs Managed SOC services provide
                AI-powered threat detection and real-time security monitoring to
                protect business environments from both known and emerging cyber
                attacks. Our SOC platform combines endpoint monitoring,
                behavioral analytics, and threat intelligence to detect
                suspicious activity across your IT infrastructure.
              </motion.p>
              <motion.div variants={fadeInUp} className="sv-stats-row">
                <div className="sv-stat-item">
                  <div className="sv-stat-val">AI</div>
                  <div className="sv-stat-label">Powered</div>
                </div>
                <div className="sv-stat-item">
                  <div className="sv-stat-val">24/7</div>
                  <div className="sv-stat-label">Monitoring</div>
                </div>
                <div className="sv-stat-item">
                  <div className="sv-stat-val">MDR</div>
                  <div className="sv-stat-label">Enterprise</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          INDUSTRIES SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-needs-section">
        <div className="container">
          <div className="sv-needs-grid">
            <div className="sv-needs-left">
              <h2 className="sv-h2">
                Industries We Protect with Managed SOC Services
              </h2>
              <p className="sv-body-text">
                Professional Labs delivers customized SOC solutions tailored to
                the security needs of organizations across multiple industries.
                Our cybersecurity services support companies in sectors
                including:
              </p>
              <div className="sv-industry-tags">
                {[
                  "Healthcare",
                  "Manufacturing",
                  "Banking & Financial Services",
                  "Retail",
                  "eCommerce",
                ].map((tag) => (
                  <span key={tag} className="sv-industry-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="sv-needs-right">
              <div className="sv-mssp-box">
                <h4 className="sv-mssp-title">As an MSSP, we address:</h4>
                <ul className="sv-check-list-pill">
                  <li>
                    Comprehensive protection across hybrid IT environments
                  </li>
                  <li>
                    Defense against advanced persistent threats (APT) and
                    ransomware
                  </li>
                  <li>
                    Compliance with global regulatory standards including HIPAA
                    and PCI DSS
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          VALUE PROPOSITIONS / BENEFITS
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-values-section">
        <div className="container">
          <div className="sv-section-header text-center">
            <h2 className="sv-h2">Benefits of Managed SOC Services</h2>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="sv-values-grid"
          >
            {[
              {
                icon: <Shield size={32} />,
                title: "24/7 Security Monitoring",
                desc: "Continuous threat monitoring to protect critical systems and data.",
              },
              {
                icon: <Zap size={32} />,
                title: "Faster Incident Response",
                desc: "Rapid detection and response to minimize business disruption.",
              },
              {
                icon: <AlertTriangle size={32} />,
                title: "Prevent Financial Loss",
                desc: "Proactive security measures to reduce the risk of costly data breaches.",
              },
              {
                icon: <Globe size={32} />,
                title: "Strengthen Customer Trust",
                desc: "Build confidence with clients and partners through strong cybersecurity practices.",
              },
            ].map((v, i) => (
              <motion.div key={i} variants={fadeInUp} className="sv-value-card">
                <div className="sv-value-icon">{v.icon}</div>
                <h3 className="sv-value-title">{v.title}</h3>
                <p className="sv-value-desc">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          COMPLIANCE SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-consult-section">
        <div className="container text-center">
          <h2 className="sv-h2">Security Compliance and Expert Consultation</h2>
          <p className="sv-subtitle mx-auto" style={{ maxWidth: "800px" }}>
            Professional Labs helps organizations align with major cybersecurity
            and data protection frameworks while strengthening their overall
            security posture. Our SOC services support compliance with:
          </p>
          <div className="sv-compliance-strip">
            <span className="sv-comp-item">HIPAA</span>
            <span className="sv-comp-item">PCI DSS</span>
            <span className="sv-comp-item">ISO 27001</span>
            <span className="sv-comp-item">SOC 2</span>
          </div>
          <div className="sv-consult-cta">
            <Link href="/contact" className="sv-btn-primary sv-btn-large">
              Book a Free 30-Minute Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FAQ SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-faq">
        <div className="container">
          <h2 className="sv-h2 text-center mb-12">
            Frequently Asked Questions About Managed SOC Services
          </h2>
          <div className="sv-faq-wrap">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`sv-faq-item ${openFaq === index ? "sv-active" : ""}`}
              >
                <button
                  className="sv-faq-q"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="sv-faq-qtext">{faq.question}</span>
                  <span className="sv-faq-ico">
                    {openFaq === index ? <ChevronUp /> : <ChevronDown />}
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
    </main>
  );
}
