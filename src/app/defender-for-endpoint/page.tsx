"use client";

import {
  Shield,
  ShieldCheck,
  Zap,
  Activity,
  Database,
  Server,
  Lock,
  Globe,
  Search,
  RefreshCcw,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle2,
  Target,
  Cpu,
  Eye,
  Layout,
  Terminal,
  HelpCircle,
  BarChart3,
  Phone,
  FileText,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const technologies = [
  {
    title: "Endpoint Behavioral Sensors",
    desc: "Captures behavioral signals directly from Windows and other supported platforms to detect abnormal activities.",
    icon: <Activity size={28} />,
  },
  {
    title: "Cloud Security Analytics",
    desc: "Uses machine learning and big data to convert behavioral signals into actionable threat detections and automated responses.",
    icon: <Cpu size={28} />,
  },
  {
    title: "Threat Intelligence",
    desc: "Leverages Microsoft's global threat intelligence ecosystem to detect attacker tactics mapped to MITRE ATT&CK.",
    icon: <Target size={28} />,
  },
];

const pros = [
  "Basic edition is free on all Windows devices.",
  "Compatibility with numerous endpoint platforms, including Windows 10, Windows Server, Linux, macOS, iOS, and Android.",
  "Several Microsoft applications, including Exchange Online, SharePoint, Microsoft Teams, OneDrive, Azure Active Directory (AD), and Azure Identities, are protected by a single license.",
  "Capable of identifying indicators of compromise (IoC) based on MITRE definitions and mapped to the MITRE ATT&CK knowledge base.",
  "Utilizes data collected from billions of Office 365 application signals.",
  "Generates a graphical timeline of an assault by merging all data associated with the same attack.",
  "Enhanced threat investigation via the KQL query language.",
  "180 days of retention for log data.",
];

const limitations = [
  {
    emoji: "⚠️",
    title: "Alert Fatigue",
    desc: "Unfiltered alerts overwhelm security teams and reduce response efficiency.",
  },
  {
    emoji: "⚙️",
    title: "Misconfigured Policies",
    desc: "Poorly tuned settings weaken protection and create compliance gaps.",
  },
  {
    emoji: "🛡️",
    title: "Coverage Gaps",
    desc: "Incomplete endpoint onboarding leaves blind spots in your security posture.",
  },
  {
    emoji: "🤖",
    title: "Underutilized Automation",
    desc: "Advanced investigation & response tools often remain unused.",
  },
  {
    emoji: "🔍",
    title: "Limited Visibility",
    desc: "Lack of deep telemetry reduces detection of lateral movement.",
  },
];

const proLabsFeatures = [
  {
    title: "Zero-Day Protection",
    desc: "using User and Entity Behavior Analytics (UEBA) to detect and prevent unknown threats.",
    icon: <Zap size={28} />,
  },
  {
    title: "Continuous Monitoring & Endpoint Control",
    desc: "asset management, endpoint vulnerability assessments, application control, auditing, logging, and activity monitoring.",
    icon: <Eye size={28} />,
  },
  {
    title: "Automated Incident Response & Playbooks",
    desc: "automated playbooks and remote manual action for remediating compromised endpoints, networks, and user accounts.",
    icon: <RefreshCcw size={28} />,
  },
  {
    title: "Deception Technology & Honeypots",
    desc: "lures attackers to an ostensibly weak honeypot, limiting harm and obtaining valuable intelligence regarding attack strategies.",
    icon: <Search size={28} />,
  },
  {
    title: "Network Analytics & Lateral Movement Detection",
    desc: "detects lateral movement, suspect connections, and irregular login patterns across your environment.",
    icon: <Activity size={28} />,
  },
  {
    title: "Integration with Microsoft 365, Azure AD & SIEM",
    desc: "seamless integration with your existing Microsoft ecosystem for centralized visibility and control.",
    icon: <Layout size={28} />,
  },
];

const businessBenefits = [
  {
    title: "Reduce Security Incidents by Up to 40%",
    desc: "Proactive threat detection and optimized policies dramatically reduce the volume of security events.",
    icon: <Shield size={28} />,
  },
  {
    title: "Minimize Breach Response Time",
    desc: "24/7 SOC monitoring and automated playbooks ensure threats are contained within minutes, not hours.",
    icon: <Zap size={28} />,
  },
  {
    title: "Achieve Compliance Alignment",
    desc: "Meet ISO 27001, SOC 2, and HIPAA requirements with proper endpoint security controls and reporting.",
    icon: <CheckCircle2 size={28} />,
  },
  {
    title: "Eliminate Alert Fatigue",
    desc: "Intelligent triage and expert tuning ensure your team only sees actionable, high-priority alerts.",
    icon: <Eye size={28} />,
  },
  {
    title: "Centralized Hybrid Visibility",
    desc: "Single-pane-of-glass visibility across on-premises, cloud, and remote endpoints.",
    icon: <Globe size={28} />,
  },
  {
    title: "Strengthen Identity & Endpoint Posture",
    desc: "Continuous posture assessments and identity protection reduce your overall attack surface.",
    icon: <Lock size={28} />,
  },
];

const comparisonRows = [
  {
    feature: "Configuration",
    diy: "Manual configuration",
    managed: "Expert policy optimization",
  },
  {
    feature: "Alert Handling",
    diy: "Reactive alert handling",
    managed: "24/7 SOC monitoring",
  },
  {
    feature: "Automation",
    diy: "No automation tuning",
    managed: "Automated playbooks",
  },
  {
    feature: "Threat Hunting",
    diy: "Limited threat hunting",
    managed: "Proactive threat intelligence",
  },
  {
    feature: "Alert Management",
    diy: "High alert fatigue",
    managed: "Intelligent triage",
  },
];

const faqs = [
  {
    question: "What does Microsoft Defender for Endpoint do?",
    answer:
      "Microsoft Defender for Endpoint is an enterprise endpoint detection and response (EDR) solution that helps organizations prevent, detect, investigate, and respond to advanced cyber threats across multiple operating systems.",
  },
  {
    question:
      "What is the difference between Microsoft Defender and Defender for Endpoint?",
    answer:
      "Microsoft Defender Antivirus provides basic protection, while Defender for Endpoint includes advanced EDR, threat intelligence, automated investigation, and security analytics.",
  },
  {
    question: "Is Microsoft Defender for Endpoint free?",
    answer:
      "The basic antivirus component is free on Windows devices, but full EDR capabilities require Microsoft 365 E5 or additional licensing.",
  },
  {
    question: "Is Defender for Endpoint enough without a SOC?",
    answer:
      "While powerful, Defender is most effective when combined with 24/7 monitoring and expert incident response provided by a managed SOC.",
  },
  {
    question: "Can Professional Labs manage Defender 24/7?",
    answer:
      "Yes. Professional Labs provides fully managed Defender services including monitoring, alert triage, automation, and incident response.",
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

export default function DefenderEndpointPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-def">
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
            <span className="active">Defender for Endpoint</span>
          </nav>
          <h1 className="sv-hero-h1">
            Microsoft Defender for Endpoint Services
          </h1>
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
              <motion.h2 variants={fadeInUp} className="sv-display-h2">
                Deploy, optimize, and fully manage Microsoft Defender for
                Endpoint with enterprise-grade expertise and 24/7 security
                monitoring.
              </motion.h2>

              <motion.div
                variants={fadeInUp}
                className="sv-hero-btn-wrap"
                style={{ gap: "16px", flexWrap: "wrap" }}
              >
                <Link href="/contact" className="sv-btn-primary">
                  🟢 Book Free Defender Security Assessment{" "}
                  <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="sv-btn-outline">
                  📄 Download Defender Readiness Checklist
                </Link>
              </motion.div>

              {/* Trust Micro-Bar */}
              <motion.div variants={fadeInUp} className="sv-trust-bar">
                <span className="sv-trust-item">
                  ✔ 50+ Certified Security Engineers
                </span>
                <span className="sv-trust-item">✔ 24/7 SOC Monitoring</span>
                <span className="sv-trust-item">
                  ✔ &lt;15-Minute Response SLA
                </span>
                <span className="sv-trust-item">
                  ✔ Trusted in 35+ Countries
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
              <div className="sv-img-frame">
                <Image
                  src="/defender_endpoint_hero.png"
                  alt="Defender for Endpoint Dashboard"
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
          SECTION 2 — Why Businesses Need Defender
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
              Why Modern Businesses Need Microsoft Defender for Endpoint
            </h2>
            <p className="sv-hero-p max-w-4xl mx-auto text-center">
              Modern organizations face ransomware, zero-day exploits,
              credential theft, and lateral movement attacks. Microsoft Defender
              for Endpoint provides advanced endpoint detection and response
              (EDR) capabilities to prevent, detect, investigate, and respond to
              sophisticated threats across hybrid environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — Core Technologies
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-info">
        <div className="container">
          <h2 className="sv-h2 text-center mb-12">
            Core Technologies Powering Microsoft Defender for Endpoint
          </h2>
          <div className="sv-tech-grid">
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="sv-tech-card"
              >
                <div className="sv-tech-icon">{tech.icon}</div>
                <div className="sv-tech-content">
                  <h3 className="sv-h4">{tech.title}</h3>
                  <p className="sv-p">{tech.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="sv-section-focus">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sv-focus-box"
          >
            <div className="sv-focus-text">
              <h3 className="sv-h3">Defender for Endpoint</h3>
              <p className="sv-p">
                Professional Labs Microsoft 365 Defender's recently added
                Automatic investigation & response card summarises any great
                fixes. The security operations staff can check the card to see
                what needs approval and when.
              </p>
              <p className="sv-p mt-4">
                It's easy for the security staff to access the Action Center and
                make the necessary corrections. The Complete Automation page can
                be accessed via a link on the Automated investigation and
                response card. Because of this, the security operations team can
                handle alarms and carry out remediation procedures efficiently
                and quickly.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — Strengths of Defender
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-analysis">
        <div className="container">
          <div className="sv-analysis-header">
            <h2 className="sv-h2" style={{ color: "#fff" }}>
              Strengths of Microsoft Defender for Endpoint
            </h2>
          </div>
          <div className="sv-pros-grid">
            {pros.map((pro, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="sv-pro-item"
              >
                <div className="sv-check-icon-wrap">
                  <CheckCircle2 size={22} className="text-accent" />
                </div>
                <span>{pro}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — Limitations & Why Expert Config Matters
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-limitations-dark">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sv-limitations-dark-h2"
          >
            Why Expert Implementation is Critical
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sv-limitations-dark-sub"
          >
            While Microsoft Defender for Endpoint is powerful, improper
            configuration can expose your organization to hidden risks.
          </motion.p>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="sv-limitations-dark-grid"
          >
            {limitations.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="sv-limitation-dark-card"
              >
                <p className="sv-limitation-dark-title">
                  <span className="sv-limitation-dark-emoji">{item.emoji}</span>{" "}
                  {item.title}
                </p>
                <p className="sv-limitation-dark-desc">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — Professional Labs Managed Defender Services
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-prolabs">
        <div className="container">
          <div className="sv-prolabs-header mb-12 flex flex-col items-center">
            <h2 className="sv-h2 text-center mb-4 w-full">
              Professional Labs Managed Defender for Endpoint Services
            </h2>
            <p className="sv-hero-p max-w-4xl mx-auto text-center">
              Professional Labs transforms Defender into a fully managed
              security solution with 24/7 monitoring and automated response.
            </p>
          </div>
          <div className="sv-prolabs-main">
            <div className="sv-prolabs-text">
              <div className="sv-pro-features">
                {proLabsFeatures.map((f, i) => (
                  <div key={i} className="sv-pro-f-card">
                    <div className="sv-pro-f-icon">{f.icon}</div>
                    <div className="sv-pro-f-body">
                      <strong>✔ {f.title}</strong> – {f.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — Business Outcomes with Managed Defender
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-outcomes">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sv-outcomes-h2"
          >
            Business Outcomes with Managed Defender
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="sv-outcomes-grid"
          >
            {businessBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="sv-outcome-card"
              >
                <p className="sv-outcome-text">
                  <span className="sv-outcome-highlight">
                    {benefit.title.split(" ").slice(0, 2).join(" ")}
                  </span>{" "}
                  {benefit.title.split(" ").slice(2).join(" ")}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8 — DIY Defender vs Managed by Professional Labs
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-versus">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sv-versus-h2"
          >
            DIY Defender vs Managed by Professional Labs
          </motion.h2>
          <div className="sv-versus-table-wrap">
            <div className="sv-versus-header">
              <div className="sv-versus-col-label sv-versus-diy-label">
                DIY Deployment
              </div>
              <div className="sv-versus-col-label sv-versus-managed-label">
                Professional Labs Managed
              </div>
            </div>
            {comparisonRows.map((row, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="sv-versus-row"
              >
                <div className="sv-versus-diy">{row.diy}</div>
                <div className="sv-versus-managed">{row.managed}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 9 — Mid-Page CTA
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
              Ready to Strengthen Your Endpoint Security?
            </h2>
            <p className="sv-mid-cta-p">
              Protect your organization with fully managed Microsoft Defender
              for Endpoint.
            </p>
            <div className="sv-mid-cta-btns">
              <Link href="/contact" className="sv-btn-white">
                🟢 Schedule Free Defender Assessment <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="sv-btn-cta-outline">
                📞 Speak to a Security Engineer Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 10 — FAQ
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-faq">
        <div className="container">
          <h2 className="sv-h2 text-center mb-20">
            Frequently Asked Questions About Microsoft Defender for Endpoint
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
          SECTION 11 — Final CTA
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
              Secure Every Endpoint. Detect Every Threat. Respond Instantly.
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "rgba(255,255,255,0.85)",
                marginBottom: 40,
              }}
            >
              Book a free 30-minute Defender assessment and uncover hidden
              endpoint risks today.
            </p>
            <div className="sv-mid-cta-btns">
              <Link href="/contact" className="sv-btn-white">
                🟢 Book Consultation <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="sv-btn-cta-outline">
                📄 Download Defender Readiness Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
