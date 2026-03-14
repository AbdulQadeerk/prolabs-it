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
  AlertTriangle,
  Settings,
  ShieldOff,
  ScanSearch,
  Phone,
  FileText,
  Download,
  Calendar,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const technologies = [
  {
    title: "Endpoint Behavioral Sensors",
    desc: "Defender continuously collects behavioral signals from endpoints including Windows, macOS, Linux, and mobile platforms. These sensors identify suspicious activities, privilege escalation attempts, and abnormal system behavior.",
    icon: <Activity size={28} />,
  },
  {
    title: "Cloud Security Analytics",
    desc: "Microsoft's cloud-powered analytics engine uses machine learning, AI models, and big-data processing to convert billions of signals into actionable threat detections and automated responses.",
    icon: <Cpu size={28} />,
  },
  {
    title: "Threat Intelligence",
    desc: "Defender integrates Microsoft's global threat intelligence network, mapping attacker techniques to the MITRE ATT&CK framework to identify known attack patterns, indicators of compromise (IoCs), and emerging threats.",
    icon: <Target size={28} />,
  },
];

const pros = [
  "Basic Defender protection is included on Windows devices.",
  "Supports multiple endpoint platforms including Windows, Windows Server, macOS, Linux, iOS, and Android.",
  "Protects Microsoft ecosystem workloads including Exchange Online, SharePoint, Teams, OneDrive, and Azure Active Directory.",
  "Detects Indicators of Compromise (IoC) mapped to the MITRE ATT&CK framework.",
  "Uses telemetry from billions of Microsoft 365 signals for threat detection.",
  "Creates a visual attack timeline for faster investigation.",
  "Supports advanced threat hunting using KQL (Kusto Query Language).",
  "Provides up to 180 days of security telemetry retention.",
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
    title: "Zero-Day Threat Protection",
    desc: "Using User and Entity Behavior Analytics (UEBA) to detect unknown and emerging threats.",
    icon: <Zap size={28} />,
  },
  {
    title: "Continuous Monitoring & Endpoint Control",
    desc: "Endpoint asset discovery, vulnerability assessments, application control, logging, and activity monitoring.",
    icon: <Eye size={28} />,
  },
  {
    title: "Automated Incident Response & Playbooks",
    desc: "Security playbooks automatically isolate compromised devices, block malicious activity, and remediate incidents.",
    icon: <RefreshCcw size={28} />,
  },
  {
    title: "Deception Technology & Honeypots",
    desc: "Deploy decoy systems that lure attackers and provide valuable threat intelligence.",
    icon: <Search size={28} />,
  },
  {
    title: "Network Analytics & Lateral Movement Detection",
    desc: "Identify suspicious connections, privilege escalation, and unusual login patterns across the network.",
    icon: <Activity size={28} />,
  },
  {
    title: "Integration with Microsoft 365, Azure AD & SIEM",
    desc: "Centralized security visibility with seamless integration across the Microsoft ecosystem.",
    icon: <Layout size={28} />,
  },
];

const businessBenefits = [
  {
    title: "Reduce Security Incidents by Up to 40%",
    icon: <Shield size={28} />,
  },
  {
    title: "Minimize Breach Response Time",
    icon: <Zap size={28} />,
  },
  {
    title: "Achieve Compliance Alignment",
    icon: <CheckCircle2 size={28} />,
  },
  {
    title: "Eliminate Alert Fatigue",
    icon: <Eye size={28} />,
  },
  {
    title: "Centralized Hybrid Visibility",
    icon: <Globe size={28} />,
  },
  {
    title: "Strengthen Identity & Endpoint Posture",
    icon: <Lock size={28} />,
  },
];

const comparisonRows = [
  {
    diy: "Manual configuration",
    managed: "Expert policy optimization",
  },
  {
    diy: "Reactive alert handling",
    managed: "24/7 SOC monitoring",
  },
  {
    diy: "No automation tuning",
    managed: "Automated playbooks",
  },
  {
    diy: "Limited threat hunting",
    managed: "Proactive threat intelligence",
  },
  {
    diy: "High alert fatigue",
    managed: "Intelligent triage",
  },
];

const faqs = [
  {
    question: "What does Microsoft Defender for Endpoint do?",
    answer:
      "Microsoft Defender for Endpoint is an enterprise Endpoint Detection and Response (EDR) platform that helps organizations prevent, detect, investigate, and respond to advanced cyber threats across Windows, macOS, Linux, and mobile devices.",
  },
  {
    question:
      "What is the difference between Microsoft Defender and Defender for Endpoint?",
    answer:
      "Microsoft Defender is the built-in antivirus protection included with Windows. Microsoft Defender for Endpoint is an enterprise security platform that adds advanced threat detection, endpoint telemetry, automated investigation, and SOC-level response capabilities.",
  },
  {
    question: "Is Microsoft Defender for Endpoint free?",
    answer:
      "Basic Microsoft Defender protection is included with Windows devices. However, Defender for Endpoint enterprise features such as advanced threat detection, automated response, and threat hunting require Microsoft security licensing.",
  },
  {
    question: "Is Defender for Endpoint enough without a SOC?",
    answer:
      "While Defender provides strong security capabilities, most organizations require a Security Operations Center (SOC) to monitor alerts, investigate threats, and respond quickly to incidents.",
  },
  // {
  //   question: "Can Professional Labs manage Defender 24/7?",
  //   answer:
  //     "Yes. Professional Labs provides 24/7 managed Microsoft Defender for Endpoint services including SOC monitoring, threat detection, incident response, and automation optimization.",
  // },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function DefenderClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-def">
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO
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
                Endpoint with enterprise-grade security expertise and 24/7 SOC
                monitoring.
              </motion.h2>

              <motion.div
                variants={fadeInUp}
                className="sv-hero-btn-wrap"
                style={{ gap: "16px", flexWrap: "wrap" }}
              >
                <Link href="/contact" className="sv-btn-primary">
                  <Calendar size={18} /> Book Free Defender Security Assessment
                  <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="sv-btn-outline">
                  <Download size={18} /> Download Defender Readiness Checklist
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
                  alt="Microsoft Defender for Endpoint security dashboard"
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

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3b — Defender Automated Investigation
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-focus">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sv-focus-box"
          >
            <div className="sv-focus-text">
              <h2 className="sv-h2">Defender for Endpoint</h2>
              <p className="sv-p">
                Microsoft Defender provides automated investigation and response
                (AIR) capabilities that significantly reduce manual security
                operations workload.
              </p>
              <p className="sv-p mt-4">
                Security teams can review automated investigation results
                through the Action Center, approve remediation steps, and access
                the Complete Automation page to monitor incident handling and
                automated responses.
              </p>
              <p className="sv-p mt-4">
                These capabilities allow SOC teams to detect, investigate, and
                remediate threats quickly and efficiently without overwhelming
                security analysts.
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
          SECTION 5 — Why Expert Implementation is Critical
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-analysis">
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
                <p style={{ color: "#fff" }}>{item.desc}</p>
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
              enterprise endpoint security platform with continuous monitoring,
              threat detection, and automated response.
            </p>
          </div>
          <div className="sv-prolabs-main">
            <div className="sv-prolabs-text">
              <div className="sv-pro-features">
                {proLabsFeatures.map((f, i) => (
                  <div key={i} className="sv-pro-f-card">
                    <div className="sv-pro-f-icon">{f.icon}</div>
                    <div className="sv-pro-f-body">
                      <strong>
                        <CheckCircle2
                          size={16}
                          style={{
                            display: "inline",
                            verticalAlign: "middle",
                            marginRight: "6px",
                            color: "var(--sv-accent)",
                          }}
                        />
                        {f.title}
                      </strong>{" "}
                      – {f.desc}
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
      <section className="sv-section-analysis">
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
      <section className="sv-section-analysis">
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
          SECTION 9 — CTA
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
                <Calendar size={18} /> Schedule Free Defender Assessment{" "}
                <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="sv-btn-cta-outline">
                <Phone size={18} /> Speak to a Security Engineer Today
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
                <Calendar size={18} /> Book Consultation{" "}
                <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="sv-btn-cta-outline">
                <Download size={18} /> Download Defender Readiness Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
