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
  Cloud,
  Eye,
  Terminal,
  HelpCircle,
  BarChart3,
  Phone,
  FileText,
  Building2,
  Heart,
  Code2,
  Landmark,
  ShoppingCart,
  Factory,
  AlertTriangle,
  ClipboardCheck,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const vaptServices = [
  {
    title: "Vulnerability Assessment",
    icon: <Search size={28} />,
    overview:
      "Comprehensive scanning and analysis to detect known vulnerabilities across infrastructure, endpoints, and applications.",
    approach:
      "Using industry-leading tools and CVE databases, we identify security gaps and deliver prioritized remediation guidance.",
  },
  {
    title: "Network Penetration Testing",
    icon: <Globe size={28} />,
    overview:
      "Simulated real-world attacks to test firewall configurations, exposed services, internal segmentation, and lateral movement risks.",
  },
  {
    title: "Web Application Security Testing",
    icon: <Code2 size={28} />,
    overview:
      "Advanced security testing aligned with OWASP Top 10 to detect vulnerabilities such as:",
    bullets: [
      "SQL Injection",
      "Cross-Site Scripting (XSS)",
      "Broken Authentication",
      "Insecure Direct Object References",
    ],
  },
  {
    title: "Cloud Security Assessment",
    icon: <Cloud size={28} />,
    overview:
      "Comprehensive testing of Azure, AWS, and hybrid cloud environments.",
    bullets: [
      "IAM misconfigurations",
      "Privilege escalation",
      "Storage exposure",
      "Container vulnerabilities",
    ],
  },
  {
    title: "Active Directory VAPT",
    icon: <Database size={28} />,
    overview: "Specialized AD penetration testing to detect:",
    bullets: [
      "Misconfigured group policies",
      "Kerberoasting vulnerabilities",
      "Privilege escalation paths",
      "Lateral movement weaknesses",
    ],
  },
];

const businessRisks = [
  { text: "Data breaches", emoji: "🔓" },
  { text: "Regulatory penalties", emoji: "⚖️" },
  { text: "Reputation damage", emoji: "📉" },
  { text: "Operational disruption", emoji: "⚠️" },
  { text: "Ransomware exposure", emoji: "🛡️" },
];

const businessBenefits = [
  "Identify exploitable vulnerabilities before attackers",
  "Reduce breach risk significantly",
  "Improve cyber insurance readiness",
  "Achieve compliance for ISO 27001, SOC 2, HIPAA, PCI-DSS",
  "Strengthen incident response preparedness",
];

const methodologySteps = [
  {
    step: "01",
    title: "Reconnaissance & Scope Definition",
    icon: <Search size={28} />,
  },
  {
    step: "02",
    title: "Automated Vulnerability Scanning",
    icon: <Activity size={28} />,
  },
  {
    step: "03",
    title: "Manual Exploitation & Validation",
    icon: <Terminal size={28} />,
  },
  {
    step: "04",
    title: "Risk Prioritization (CVSS Scoring)",
    icon: <BarChart3 size={28} />,
  },
  {
    step: "05",
    title: "Remediation Guidance & Technical Debrief",
    icon: <ClipboardCheck size={28} />,
  },
  {
    step: "06",
    title: "Optional Retesting & Validation",
    icon: <RefreshCcw size={28} />,
  },
];

const whyChoosePoints = [
  "Certified Ethical Hackers & Security Engineers",
  "Industry-Recognized Testing Frameworks",
  "Customized Testing for Your Environment",
  "Executive & Technical Reporting",
  "Confidential, NDA-Protected Engagement",
  "Post-Assessment Remediation Support",
];

const industries = [
  { name: "Financial Services", icon: <Landmark size={24} /> },
  {
    name: "Healthcare & HIPAA-Regulated Entities",
    icon: <Heart size={24} />,
  },
  { name: "SaaS & Technology Companies", icon: <Code2 size={24} /> },
  { name: "Government & Public Sector", icon: <Building2 size={24} /> },
  { name: "E-commerce & Retail", icon: <ShoppingCart size={24} /> },
  {
    name: "Manufacturing & Industrial Networks",
    icon: <Factory size={24} />,
  },
];

const faqs = [
  {
    question:
      "What is the difference between Vulnerability Assessment and Penetration Testing?",
    answer:
      "Vulnerability Assessment identifies security weaknesses through scanning and analysis, while Penetration Testing actively exploits those weaknesses to determine real-world impact and business risk.",
  },
  {
    question: "How often should VAPT be conducted?",
    answer:
      "Organizations should conduct VAPT at least annually or after major infrastructure changes, application updates, or compliance audits.",
  },
  {
    question: "Is data security maintained during the VAPT process?",
    answer:
      "Yes. All engagements are confidential, conducted ethically, and protected by NDA agreements to ensure data integrity and privacy.",
  },
  {
    question: "Can VAPT be customized for cloud and web applications?",
    answer:
      "Yes. Professional Labs provides tailored VAPT services for web applications, cloud platforms, networks, and Active Directory environments.",
  },
  {
    question: "Is VAPT required for ISO 27001 or SOC 2 compliance?",
    answer:
      "Yes. Regular security testing is a mandatory requirement for maintaining compliance with ISO 27001, SOC 2, PCI-DSS, and other standards.",
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

export default function VaptPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-vapt">
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
            <span className="active">VAPT</span>
          </nav>
          <h1 className="sv-hero-h1">
            Vulnerability Assessment &amp; Penetration Testing (VAPT) Services
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
                Identify critical vulnerabilities before attackers do.
                Strengthen your security posture with enterprise-grade VAPT
                services trusted across 35+ countries.
              </motion.h2>

              <motion.div
                variants={fadeInUp}
                className="sv-hero-btn-wrap"
                style={{ gap: "16px", flexWrap: "wrap" }}
              >
                <Link href="/contact" className="sv-btn-primary">
                  🟢 Schedule Free VAPT Consultation <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="sv-btn-outline">
                  📄 Download VAPT Readiness Checklist
                </Link>
              </motion.div>

              {/* Trust Micro-Bar */}
              <motion.div variants={fadeInUp} className="sv-trust-bar">
                <span className="sv-trust-item">
                  ✔ Certified Ethical Hackers
                </span>
                <span className="sv-trust-item">
                  ✔ ISO &amp; SOC 2 Compliance Alignment
                </span>
                <span className="sv-trust-item">
                  ✔ Detailed Remediation Reports
                </span>
                <span className="sv-trust-item">
                  ✔ Confidential &amp; NDA-Protected
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
                  src="/illustrations/benefit-security.svg"
                  alt="Vulnerability Assessment and Penetration Testing Services"
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
          SECTION 2 — Introduction (Authority)
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
              Comprehensive VAPT Services for Modern Enterprises
            </h2>
            <p className="sv-hero-p max-w-4xl mx-auto text-center">
              At Professional Labs, we deliver advanced Vulnerability Assessment
              and Penetration Testing (VAPT) services designed to uncover hidden
              security gaps across networks, applications, cloud environments,
              and Active Directory infrastructures.
            </p>
            <p
              className="sv-lead max-w-4xl mx-auto text-center"
              style={{ color: "var(--sv-accent)" }}
            >
              Identify risks. Simulate real-world attacks. Deliver actionable
              remediation.
            </p>
            <p
              className="sv-p max-w-4xl mx-auto text-center"
              style={{ color: "var(--sv-gray)" }}
            >
              We follow industry-recognized frameworks including OWASP Top 10,
              MITRE ATT&amp;CK, NIST, and PTES methodologies to ensure accurate
              and impactful assessments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — Our VAPT Services
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-info">
        <div className="container">
          <h2 className="sv-h2 text-center mb-12">
            Our Vulnerability Assessment &amp; Penetration Testing Services
          </h2>
          <div className="sv-tech-grid">
            {vaptServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="sv-tech-card"
              >
                <div className="sv-tech-icon">{service.icon}</div>
                <div className="sv-tech-content">
                  <h3 className="sv-h4">{service.title}</h3>
                  <p className="sv-p">{service.overview}</p>
                  {service.approach && (
                    <p className="sv-p" style={{ marginTop: "12px" }}>
                      <strong>Approach:</strong> {service.approach}
                    </p>
                  )}
                  {service.bullets && (
                    <ul className="sv-check-list" style={{ marginTop: "12px" }}>
                      {service.bullets.map((b, i) => (
                        <li key={i}>
                          <CheckCircle2 size={18} className="text-accent" />
                          {b}
                        </li>
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
          SECTION 4 — Business Impact (Conversion Focused)
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-outcomes">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sv-outcomes-h2"
          >
            Why VAPT Is Critical for Your Business
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sv-limitations-dark-sub"
          >
            Without regular VAPT testing, organizations risk serious operational
            and financial damage.
          </motion.p>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="sv-limitations-dark-grid"
            style={{ marginBottom: "50px" }}
          >
            {businessRisks.map((risk, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="sv-limitation-dark-card"
              >
                <p className="sv-limitation-dark-title">
                  <span className="sv-limitation-dark-emoji">{risk.emoji}</span>{" "}
                  {risk.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              color: "rgba(255,255,255,0.7)",
              textAlign: "center",
              fontSize: "1.15rem",
              marginBottom: "30px",
            }}
          >
            With Professional Labs VAPT:
          </motion.p>

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
                  <span className="sv-outcome-highlight">✔</span> {benefit}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div
            style={{
              textAlign: "center",
              marginTop: "50px",
            }}
          >
            <Link
              href="/contact"
              className="sv-btn-outline"
              style={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}
            >
              📄 Download VAPT Readiness Checklist
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — Our Methodology
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-prolabs">
        <div className="container">
          <div className="sv-prolabs-header mb-12 flex flex-col items-center">
            <h2 className="sv-h2 text-center mb-4 w-full">
              Our Structured VAPT Methodology
            </h2>
            <p className="sv-hero-p max-w-4xl mx-auto text-center">
              This ensures findings are accurate, actionable, and
              business-relevant.
            </p>
          </div>
          <div className="sv-prolabs-text">
            <div className="sv-pro-features">
              {methodologySteps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="sv-pro-f-card"
                >
                  <div className="sv-pro-f-icon">{s.icon}</div>
                  <div className="sv-pro-f-body">
                    <strong>
                      {s.step}. {s.title}
                    </strong>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — Why Choose Professional Labs for VAPT
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-analysis">
        <div className="container">
          <div className="sv-analysis-header">
            <h2 className="sv-h2" style={{ color: "#fff" }}>
              Why Choose Professional Labs for VAPT?
            </h2>
          </div>
          <div className="sv-pros-grid">
            {whyChoosePoints.map((point, idx) => (
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
                <span>{point}</span>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              textAlign: "center",
              color: "var(--sv-accent)",
              fontWeight: 700,
              fontSize: "1.15rem",
              marginTop: "40px",
            }}
          >
            Trusted by 100+ global organizations since 1997.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — Industries We Serve
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-why-section">
        <div className="container">
          <div className="sv-section-header">
            <h2 className="sv-h2">VAPT Services for Multiple Industries</h2>
          </div>
          <div className="sv-features-grid">
            {industries.map((ind, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="sv-feature-card"
              >
                <div className="sv-feature-icon">{ind.icon}</div>
                <p className="sv-feature-text">{ind.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8 — Mid-Page CTA
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
              Don&apos;t Wait for a Breach to Discover Vulnerabilities
            </h2>
            <p className="sv-mid-cta-p">
              Book a professional VAPT assessment today and uncover hidden risks
              before attackers do.
            </p>
            <div className="sv-mid-cta-btns">
              <Link href="/contact" className="sv-btn-white">
                🟢 Schedule Free Consultation <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="sv-btn-cta-outline">
                📞 Speak to a Security Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 9 — FAQ
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-faq">
        <div className="container">
          <h2 className="sv-h2 text-center mb-20">
            Frequently Asked Questions About VAPT
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
          SECTION 10 — Final CTA
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
              Secure Your Infrastructure. Validate Your Defenses. Prevent
              Breaches.
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "rgba(255,255,255,0.85)",
                marginBottom: 40,
              }}
            >
              Get a detailed VAPT report with prioritized remediation guidance
              from certified experts.
            </p>
            <div className="sv-mid-cta-btns">
              <Link href="/contact" className="sv-btn-white">
                🟢 Book Your VAPT Assessment <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="sv-btn-cta-outline">
                📄 Download VAPT Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
