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
  BarChart3,
  Phone,
  FileText,
  Download,
  Calendar,
  Building2,
  Heart,
  Code2,
  Landmark,
  ShoppingCart,
  Factory,
  AlertTriangle,
  ClipboardCheck,
  LockOpen,
  Scale,
  TrendingDown,
  ShieldAlert,
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
      "Comprehensive vulnerability scanning and analysis designed to identify known weaknesses across infrastructure, endpoints, applications, and operating systems.",
    approach:
      "Using industry-leading security tools and CVE databases, our team identifies vulnerabilities and delivers prioritized remediation guidance based on risk severity.",
  },
  {
    title: "Network Penetration Testing",
    icon: <Globe size={28} />,
    overview:
      "Simulated cyber attacks to evaluate network security posture and identify exploitable weaknesses.",
    subtitle: "Testing includes:",
    bullets: [
      "Firewall configuration analysis",
      "Exposed services and open ports",
      "Internal network segmentation",
      "Lateral movement risks",
    ],
  },
  {
    title: "Web Application Security Testing",
    icon: <Code2 size={28} />,
    overview:
      "Advanced web application testing aligned with OWASP Top 10 security risks to identify critical vulnerabilities including:",
    bullets: [
      "SQL Injection",
      "Cross-Site Scripting (XSS)",
      "Broken Authentication",
      "Insecure Direct Object References",
    ],
    footer:
      "This testing ensures web applications are protected against modern exploitation techniques used by cyber attackers.",
  },
  {
    title: "Cloud Security Assessment",
    icon: <Cloud size={28} />,
    overview:
      "Comprehensive testing of Azure, AWS, and hybrid cloud environments to identify misconfigurations and privilege escalation risks.",
    subtitle: "Key areas assessed include:",
    bullets: [
      "IAM misconfigurations",
      "Privilege escalation risks",
      "Public storage exposure",
      "Container security vulnerabilities",
    ],
  },
  {
    title: "Active Directory VAPT",
    icon: <Database size={28} />,
    overview:
      "Specialized penetration testing for Active Directory identity infrastructure to detect advanced identity-based attack paths.",
    subtitle: "Assessments include:",
    bullets: [
      "Misconfigured group policies",
      "Kerberoasting vulnerabilities",
      "Privilege escalation paths",
      "Lateral movement weaknesses",
    ],
  },
];

const businessRisks = [
  { text: "Data breaches", icon: <LockOpen size={22} /> },
  { text: "Regulatory penalties", icon: <Scale size={22} /> },
  { text: "Brand reputation damage", icon: <TrendingDown size={22} /> },
  { text: "Operational disruption", icon: <AlertTriangle size={22} /> },
  { text: "Ransomware exposure", icon: <ShieldAlert size={22} /> },
];

const businessBenefits = [
  "Identify exploitable vulnerabilities before attackers",
  "Significantly reduce breach risk",
  "Improve cyber insurance readiness",
  "Achieve compliance for ISO 27001, SOC 2, HIPAA, PCI-DSS",
  "Strengthen security monitoring and incident response",
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
    title: "Risk Prioritization using CVSS Scoring",
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
    name: "Healthcare & HIPAA-Regulated Organizations",
    icon: <Heart size={24} />,
  },
  { name: "SaaS and Technology Companies", icon: <Code2 size={24} /> },
  { name: "Government and Public Sector", icon: <Building2 size={24} /> },
  { name: "E-commerce and Retail", icon: <ShoppingCart size={24} /> },
  {
    name: "Manufacturing and Industrial Networks",
    icon: <Factory size={24} />,
  },
];

const faqs = [
  {
    question:
      "What is the difference between Vulnerability Assessment and Penetration Testing?",
    answer:
      "Vulnerability Assessment identifies security weaknesses through automated scanning and analysis, while Penetration Testing actively exploits those vulnerabilities to determine their real-world impact and potential business risk.",
  },
  {
    question: "How often should VAPT be conducted?",
    answer:
      "Most organizations conduct VAPT assessments at least once or twice per year, or after major infrastructure changes, new application deployments, or compliance audits.",
  },
  {
    question: "Is data security maintained during the VAPT process?",
    answer:
      "Yes. Professional Labs follows strict confidentiality policies, secure testing methodologies, and NDA-protected engagements to ensure client systems and data remain protected during testing.",
  },
  {
    question: "Can VAPT be customized for cloud and web applications?",
    answer:
      "Yes. VAPT testing can be tailored to evaluate cloud infrastructure, SaaS platforms, APIs, and web applications based on the organization's environment and risk profile.",
  },
  {
    question: "Is VAPT required for ISO 27001 or SOC 2 compliance?",
    answer:
      "Yes. Security testing such as vulnerability assessments and penetration testing is often required to demonstrate compliance with frameworks including ISO 27001, SOC 2, PCI-DSS, and other cybersecurity standards.",
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

export default function VaptClient() {
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
                Identify Critical Security Vulnerabilities Before Attackers Do
              </motion.h2>
              <motion.p variants={fadeInUp} className="sv-hero-p">
                Strengthen your cybersecurity posture with enterprise-grade
                Vulnerability Assessment and Penetration Testing (VAPT)
                services trusted by organizations across 35+ countries.
              </motion.p>
              <motion.p variants={fadeInUp} className="sv-hero-p">
                Professional Labs helps businesses identify hidden
                vulnerabilities across networks, applications, cloud platforms,
                and identity systems before attackers can exploit them.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="sv-hero-btn-wrap"
                style={{ gap: "16px", flexWrap: "wrap" }}
              >
                <Link href="/contact" className="sv-btn-primary">
                  <Calendar size={18} /> Schedule Free VAPT Consultation{" "}
                  <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="sv-btn-outline">
                  <Download size={18} /> Download VAPT Readiness Checklist
                </Link>
              </motion.div>

              {/* Trust Micro-Bar */}
              <motion.div variants={fadeInUp} className="sv-trust-bar">
                <span className="sv-trust-item">✔ Certified Ethical Hackers</span>
                <span className="sv-trust-item">✔ ISO &amp; SOC 2 Compliance Alignment</span>
                <span className="sv-trust-item">✔ Detailed Remediation Reports</span>
                <span className="sv-trust-item">✔ Confidential &amp; NDA-Protected</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="sv-hero-image"
            >
              <div className="sv-img-frame sv-vapt-img-frame">
                <Image
                  src="/vapt_hero.png"
                  alt="VAPT Security Assessment Dashboard"
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
          SECTION 2 — Comprehensive VAPT Introduction
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
              Professional Labs provides advanced Vulnerability Assessment and
              Penetration Testing services designed to detect and validate
              security weaknesses across complex IT environments.
            </p>
            <p className="sv-hero-p max-w-4xl mx-auto text-center">
              Our security experts simulate real-world cyber attacks to evaluate
              how attackers could exploit vulnerabilities and how your
              organization can defend against them.
            </p>
            <p
              className="sv-lead max-w-4xl mx-auto text-center"
              style={{ color: "var(--sv-accent)" }}
            >
              Identify risks. Simulate attacks. Deliver actionable remediation.
            </p>
            <p
              className="sv-p max-w-4xl mx-auto text-center"
              style={{ color: "var(--sv-gray)" }}
            >
              Our testing approach follows globally recognized frameworks
              including:
            </p>
            <ul
              className="sv-check-list max-w-2xl mx-auto"
              style={{ marginTop: "16px" }}
            >
              <li>
                <CheckCircle2 size={18} /> OWASP Top 10
              </li>
              <li>
                <CheckCircle2 size={18} /> MITRE ATT&amp;CK
              </li>
              <li>
                <CheckCircle2 size={18} /> NIST security standards
              </li>
              <li>
                <CheckCircle2 size={18} /> PTES penetration testing methodology
              </li>
            </ul>
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
          <div className="sv-features-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {vaptServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="sv-feature-card"
                style={{ flexDirection: "column", alignItems: "flex-start" }}
              >
                <div className="sv-feature-icon">{service.icon}</div>
                <div>
                  <h3 className="sv-h4" style={{ marginBottom: "10px" }}>{service.title}</h3>
                  <p className="sv-p">{service.overview}</p>
                  {service.approach && (
                    <p className="sv-p" style={{ marginTop: "12px" }}>
                      <strong>Approach:</strong> {service.approach}
                    </p>
                  )}
                  {service.subtitle && (
                    <p className="sv-p" style={{ marginTop: "12px" }}>
                      <strong>{service.subtitle}</strong>
                    </p>
                  )}
                  {service.bullets && (
                    <ul
                      className="sv-check-list"
                      style={{ marginTop: "12px" }}
                    >
                      {service.bullets.map((b, i) => (
                        <li key={i}>
                          <CheckCircle2 size={18} className="text-accent" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {service.footer && (
                    <p className="sv-p" style={{ marginTop: "12px" }}>
                      {service.footer}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — Why VAPT Is Critical (dark bg)
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
            Organizations that do not conduct regular VAPT assessments face
            increased exposure to cyber attacks and operational risks. Potential
            impacts include:
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
                  <span className="sv-limitation-dark-emoji" style={{ display: "inline-flex" }}>{risk.icon}</span>{" "}
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
            With Professional Labs VAPT services, organizations can:
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

          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <Link
              href="/contact"
              className="sv-btn-outline"
              style={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}
            >
              <Download size={18} /> Download the VAPT Readiness Checklist
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
              Professional Labs follows a structured security testing
              methodology to ensure findings are accurate, validated, and
              actionable.
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
          SECTION 6 — Why Choose Professional Labs (dark bg)
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
              Book a professional VAPT security assessment today.
            </p>
            <div className="sv-mid-cta-btns">
              <Link href="/contact" className="sv-btn-white">
                <Calendar size={18} /> Schedule Free Consultation{" "}
                <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="sv-btn-cta-outline">
                <Phone size={18} /> Speak to a Security Expert
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
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
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
                <Calendar size={18} /> Book Your VAPT Assessment{" "}
                <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="sv-btn-cta-outline">
                <Download size={18} /> Download VAPT Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
