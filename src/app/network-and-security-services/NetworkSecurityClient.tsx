"use client";

import {
  Shield,
  ShieldCheck,
  Zap,
  Activity,
  Lock,
  Globe,
  Search,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle2,
  Eye,
  Users,
  BookOpen,
  Key,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const services = [
  {
    title: "Network Assessment & Security Auditing",
    overview:
      "Professional Labs performs comprehensive network security assessments and audits to identify vulnerabilities, configuration risks, and performance gaps.",
    detailLabel: "Methodology:",
    detail:
      "Our evaluation analyzes network architecture, access controls, and security policies to deliver actionable recommendations for strengthening your infrastructure.",
    icon: <Search size={28} />,
  },
  {
    title: "Firewall Implementation & Configuration",
    overview:
      "We design and deploy enterprise-grade firewall solutions to protect your network from unauthorized access and cyber threats.",
    detailLabel: "Service Details:",
    detail:
      "Our engineers manage the entire process - from firewall selection and configuration to deployment and ongoing optimization.",
    icon: <Shield size={28} />,
  },
  {
    title: "Intrusion Detection & Prevention (IDPS)",
    overview:
      "Professional Labs implements advanced intrusion detection and prevention systems (IDPS) to continuously monitor network activity and stop malicious attacks.",
    detailLabel: "Functionality:",
    detail:
      "These systems detect suspicious behavior in real time and automatically respond to potential threats before damage occurs.",
    icon: <Activity size={28} />,
  },
  {
    title: "Data Encryption & Information Security",
    overview:
      "Protect sensitive business data with enterprise-level encryption and privacy protection services.",
    detailLabel: "Application:",
    detail:
      "We secure communication channels, databases, and stored information using modern encryption protocols to ensure confidentiality and regulatory compliance.",
    icon: <Lock size={28} />,
  },
  {
    title: "Secure Remote Access Solutions",
    overview:
      "Enable safe remote work with secure remote access infrastructure designed for distributed teams.",
    detailLabel: "Implementation:",
    detail:
      "Our solutions include VPN deployment, multi-factor authentication (MFA), and identity access controls that allow employees to securely connect from any location.",
    icon: <Globe size={28} />,
  },
  {
    title: "Cybersecurity Training & Awareness",
    overview:
      "Human error remains one of the leading causes of security breaches. Professional Labs provides security awareness training programs to strengthen your organization\u2019s cyber resilience.",
    detailLabel: "Content Includes:",
    detail: "",
    bullets: [
      "Phishing attack detection",
      "Secure password practices",
      "Safe data handling",
      "Cybersecurity best practices",
    ],
    icon: <BookOpen size={28} />,
  },
];

const whyChoose = [
  {
    title: "Customized Security Architecture",
    desc: "Solutions designed around your infrastructure and risk profile",
    icon: <Key size={28} />,
  },
  {
    title: "Experienced Security Engineers",
    desc: "Certified professionals with deep expertise in network protection",
    icon: <Users size={28} />,
  },
  {
    title: "Proactive Threat Prevention",
    desc: "Continuous monitoring and risk mitigation strategies",
    icon: <Eye size={28} />,
  },
  {
    title: "Complete Security Lifecycle Support",
    desc: "Assessment, deployment, monitoring, and employee training",
    icon: <ShieldCheck size={28} />,
  },
];

const outcomes = [
  "Comprehensive Vulnerability Assessment",
  "Enterprise-Grade Firewall Protection",
  "Real-Time Intrusion Detection",
  "End-to-End Data Encryption",
  "Secure Remote Workforce Enablement",
  "Security-Aware Employee Training",
];

const faqs = [
  {
    question:
      "How essential is regular network assessment and auditing for businesses?",
    answer:
      "Regular network assessments help identify vulnerabilities, improve performance, and ensure compliance with cybersecurity regulations. Professional Labs recommends performing security audits at least quarterly or after major infrastructure changes.",
  },
  {
    question: "Who needs firewall implementation services?",
    answer:
      "Any organization connected to the internet requires firewall protection. Firewalls act as the first line of defense against unauthorized access, malware, and network-based attacks.",
  },
  {
    question:
      "What is the role of intrusion detection and prevention systems (IDPS)?",
    answer:
      "IDPS continuously monitors network traffic and detects suspicious behavior. When threats are identified, the system can automatically block malicious activity and alert security teams.",
  },
  {
    question: "Should small businesses invest in data encryption?",
    answer:
      "Yes. Data encryption protects sensitive information such as customer records, financial data, and internal communications, making it essential for businesses of all sizes.",
  },
  {
    question:
      "Can Professional Labs support remote access for distributed teams?",
    answer:
      "Yes. Professional Labs deploys secure remote access solutions using VPNs, multi-factor authentication, and identity-based access controls to support safe remote work environments.",
  },
  {
    question:
      "How does security training benefit employees and organizations?",
    answer:
      "Security training helps employees recognize cyber threats such as phishing attacks and social engineering attempts, significantly reducing the risk of security breaches.",
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

export default function NetworkSecurityClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-netsec">
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO (Above the Fold)
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-hero-band">
        <div className="container">
          <nav className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Services</span>
            <span className="sep">/</span>
            <span className="active">Network &amp; Security Services</span>
          </nav>
          <h1 className="sv-hero-h1">Network &amp; Security Services</h1>
        </div>
      </section>

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
              <motion.p
                variants={fadeInUp}
                className="sv-hero-p"
                style={{ marginBottom: 16 }}
              >
                Protect your organization from modern cyber threats with
                enterprise-grade network security services from Professional
                Labs.
              </motion.p>

              <motion.p variants={fadeInUp} className="sv-hero-p">
                We help businesses secure their infrastructure, prevent
                intrusions, and maintain compliance with advanced security
                technologies and expert monitoring.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="sv-hero-btn-wrap"
                style={{ gap: "16px", flexWrap: "wrap" }}
              >
                <Link href="/contact" className="sv-btn-primary">
                  Get Free 30-Minute Consultation <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="sv-btn-outline">
                  Speak to a Security Expert
                </Link>
              </motion.div>

              {/* Trust Micro-Bar */}
              <motion.div variants={fadeInUp} className="sv-trust-bar">
                <span className="sv-trust-item">
                  ✔ Certified Security Engineers
                </span>
                <span className="sv-trust-item">✔ 24/7 Monitoring</span>
                <span className="sv-trust-item">
                  ✔ End-to-End Network Protection
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="sv-hero-image"
            >
              <div className="sv-img-frame sv-netsec-img-frame">
                <Image
                  src="/network_security_hero.png"
                  alt="Network and Security Services - Enterprise firewall, encryption, and intrusion protection dashboard"
                  width={500}
                  height={400}
                  className="sv-float-img"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — Intro / Enterprise Network & Security
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-why-defender">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sv-why-defender-content"
          >
            <h2 className="sv-h2 text-center mb-8">
              Enterprise Network &amp; Security Services from Professional Labs
            </h2>
            <p className="sv-hero-p max-w-4xl mx-auto text-center">
              Professional Labs delivers advanced network security solutions
              designed for modern business environments. Our services strengthen
              your infrastructure against cyber threats while improving network
              performance, availability, and compliance readiness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — Our Network and Security Services Include
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-info">
        <div className="container">
          <h2 className="sv-h2 text-center mb-12">
            Our Network and Security Services Include
          </h2>
          <div className="sv-security-grid">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="sv-scard"
              >
                <div className="sv-scard-icon">{service.icon}</div>
                <div className="sv-scard-body">
                  <h5>{service.title}</h5>
                  <p>
                    <strong>Overview:</strong> {service.overview}
                  </p>
                  <p style={{ marginTop: "12px" }}>
                    <strong>{service.detailLabel}</strong>{" "}
                    {service.detail}
                  </p>
                  {service.bullets && (
                    <ul
                      style={{
                        marginTop: "8px",
                        paddingLeft: "20px",
                        lineHeight: 1.8,
                      }}
                    >
                      {service.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — Why Choose Professional Labs
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-analysis">
        <div className="container">
          <div className="sv-analysis-header">
            <h2 className="sv-h2" style={{ color: "#fff" }}>
              Why Choose Professional Labs for Network &amp; Security?
            </h2>
            <p
              style={{
                fontSize: "1.15rem",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.7,
                marginTop: 16,
                maxWidth: 900,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Professional Labs delivers enterprise-level cybersecurity
              solutions tailored for businesses across multiple industries.
            </p>
          </div>
          <div className="sv-pros-grid">
            {whyChoose.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="sv-pro-item"
              >
                <div className="sv-check-icon-wrap">
                  <CheckCircle2 size={22} className="text-accent" />
                </div>
                <span>
                  <strong>{item.title}</strong> – {item.desc}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — What You Get (Business Outcomes)
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-outcomes">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sv-outcomes-h2"
          >
            What You Get with Professional Labs Network Security
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="sv-outcomes-grid"
          >
            {outcomes.map((outcome, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="sv-outcome-card"
              >
                <p className="sv-outcome-text">
                  <span className="sv-outcome-highlight">
                    {outcome.split(" ").slice(0, 2).join(" ")}
                  </span>{" "}
                  {outcome.split(" ").slice(2).join(" ")}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — Mid-Page CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-mid-cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sv-mid-cta-box"
          >
            <h2 className="sv-mid-cta-h2">
              Ready to Strengthen Your Network Security?
            </h2>
            <p className="sv-mid-cta-p">
              Get a free consultation and discover how Professional Labs can
              secure your infrastructure.
            </p>
            <div className="sv-mid-cta-btns">
              <Link href="/contact" className="sv-btn-white">
                Schedule Free Consultation <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="sv-btn-cta-outline">
                Speak to a Security Engineer Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — FAQ
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-faq">
        <div className="container">
          <h2 className="sv-h2 text-center mb-20">
            Frequently Asked Questions About Network and Security Services
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
                    {openFaq === index ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
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

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8 — Final CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="sv-cta-banner"
          >
            <h2 className="sv-h2" style={{ color: "#fff", marginBottom: 16 }}>
              Protect Your Network. Encrypt Your Data. Empower Your Team.
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "rgba(255,255,255,0.85)",
                marginBottom: 40,
              }}
            >
              Book a free 30-minute consultation with a Professional Labs
              network security expert today.
            </p>
            <div className="sv-mid-cta-btns">
              <Link href="/contact" className="sv-btn-white">
                Book Consultation <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="sv-btn-cta-outline">
                Call Us Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
