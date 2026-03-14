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
  Server,
  Key,
  Settings,
  Layers,
  UserCheck,
  Database,
  Cloud,
  RefreshCcw,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const igiFeatures = [
  {
    title: "Single Identity Governance Platform",
    desc: "A unified platform that provides full visibility into user identities, access permissions, and risk exposure across enterprise applications and infrastructure.",
    icon: <Layers size={28} />,
  },
  {
    title: "Business-Activity-Based Governance",
    desc: "Improves collaboration between auditors, risk managers, and IT teams while helping organizations detect segregation-of-duties violations across enterprise systems including SAP.",
    icon: <Users size={28} />,
  },
  {
    title: "Visibility & User Access Control",
    desc: "Consolidates identity entitlements from multiple applications and applies advanced analytics for role mining, modeling, and access optimization.",
    icon: <Eye size={28} />,
  },
  {
    title: "Access Request Management",
    desc: "Provides intuitive self-service access request workflows that streamline user provisioning while maintaining security controls and approval policies.",
    icon: <UserCheck size={28} />,
  },
  {
    title: "Target Integration & Automation",
    desc: "Automates identity data collection and provisioning workflows across distributed systems to reduce manual effort and improve operational efficiency.",
    icon: <RefreshCcw size={28} />,
  },
];

const iamBenefits = [
  {
    title: "Govern Access Control Lifecycles",
    desc: "Manage user access across the full identity lifecycle while minimizing security risks.",
    icon: <Shield size={28} />,
  },
  {
    title: "Dynamic Role Management",
    desc: "Automate role definition and access authorization across departments and systems.",
    icon: <Settings size={28} />,
  },
  {
    title: "Reduce Operational Risk & Cost",
    desc: "Manage large identity datasets across global environments while improving security governance.",
    icon: <Globe size={28} />,
  },
];

const solutionComponents = [
  "Plug-and-play IAM policies and governance toolkits",
  "Integration with enterprise standards and HRMS systems",
  "Non-employee identity management modules",
  "Pre-configured approval workflow templates",
  "Built-in alerting systems and essential compliance reporting",
];

const isimFeatures = [
  {
    title: "Centralized Identity Management",
    desc: "ISIM centralizes identity management across enterprise applications, operating systems, and directories to simplify user access administration.",
    icon: <Server size={28} />,
  },
  {
    title: "Automated Access Lifecycle",
    desc: "The system automatically creates, modifies, and removes user privileges as employees join, change roles, or leave the organization.",
    icon: <RefreshCcw size={28} />,
  },
  {
    title: "Policy-Based Provisioning",
    desc: "Organizations can deploy policy-driven provisioning models that automate access requests and ensure consistent access governance.",
    icon: <ShieldCheck size={28} />,
  },
  {
    title: "Provisioning Support",
    desc: "ISIM supports provisioning processes including service deployment, access configuration, and lifecycle tracking across enterprise environments.",
    icon: <Cloud size={28} />,
  },
  {
    title: "Security & Compliance",
    desc: "The platform enforces access security policies and supports compliance initiatives across both traditional enterprise infrastructure and modern cloud environments.",
    icon: <Lock size={28} />,
  },
];

const outcomes = [
  "Comprehensive governance of access controls across business operations",
  "Improved IAM security through preventive and detective controls",
  "Faster application onboarding with continuous audit readiness",
  "Support for migrating IAM infrastructure to cloud environments",
  "Secure management of cloud workloads and hybrid environments",
  "Decentralized identity access for scalable microservices architectures",
];

const faqs = [
  {
    question: "What is IBM Security Identity Manager (ISIM)?",
    answer:
      "IBM Security Identity Manager (ISIM), also known as TIM, ITIM, or ISVG, is an identity management platform that helps organizations manage user access across enterprise IT systems. It automates the lifecycle of user identities including provisioning, role management, and access termination.",
  },
  {
    question: "What are the main benefits of implementing ISIM?",
    answer:
      "ISIM improves identity governance, automates user provisioning, strengthens security policies, and ensures organizations maintain compliance with regulatory standards.",
  },
  {
    question: "What are the four parts of IAM?",
    answer:
      "The four core components of Identity and Access Management are identity lifecycle management, authentication, authorization, and identity governance.",
  },
  {
    question: "Is IAM part of cybersecurity?",
    answer:
      "Yes. IAM is a critical component of cybersecurity that ensures only authorized users can access systems, applications, and sensitive data.",
  },
  {
    question: "What are the four pillars of IAM?",
    answer:
      "The main pillars of IAM include authentication, authorization, identity governance, and access lifecycle management.",
  },
  {
    question: "What is an example of IAM?",
    answer:
      "An example of IAM is an employee logging into enterprise systems using single sign-on (SSO) with multi-factor authentication while their access permissions are automatically controlled based on their role.",
  },
  {
    question: "What is IBM IGI?",
    answer:
      "IBM Identity Governance and Intelligence (IGI) is a platform designed to analyze user access, detect access risks, enforce governance policies, and maintain compliance across enterprise systems.",
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

export default function IAMClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-iam">
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
            <span className="active">
              Identity and Access Management (ISIM &amp; IGI)
            </span>
          </nav>
          <h1 className="sv-hero-h1">
            Identity and Access Management (ISIM &amp; IGI) Solutions
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
                Empowering Secure Access with Intelligent Identity Governance
              </motion.h2>

              <motion.p variants={fadeInUp} className="sv-hero-p">
                Professional Labs delivers enterprise Identity and Access
                Management (IAM) solutions using IBM Security Identity Manager
                (ISIM) and Identity Governance and Intelligence (IGI). Our IAM
                services help organizations secure digital identities, automate
                access control, and maintain regulatory compliance across
                enterprise systems.
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
                  Speak to an IAM Expert
                </Link>
              </motion.div>

              {/* Trust Micro-Bar */}
              <motion.div variants={fadeInUp} className="sv-trust-bar">
                <span className="sv-trust-item">✔ IBM Certified Partners</span>
                <span className="sv-trust-item">✔ Rapid IAM Deployment</span>
                <span className="sv-trust-item">
                  ✔ Enterprise-Grade Identity Security
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
              <div className="sv-img-frame sv-iam-img-frame">
                <Image
                  src="/iam_hero.png"
                  alt="Identity and Access Management - IBM ISIM and IGI enterprise identity governance dashboard"
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
          SECTION 2 — IGI Overview
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
              IGI - Identity Governance and Intelligence
            </h2>
            <p className="sv-hero-p max-w-4xl mx-auto text-center">
              IBM® Security Identity Governance and Intelligence (IGI) provides
              a centralized platform that enables organizations to analyze,
              govern, and control user access across enterprise systems and
              applications.
            </p>
            <p
              className="sv-hero-p max-w-4xl mx-auto text-center"
              style={{ marginTop: 0 }}
            >
              This intelligent identity governance solution allows business
              managers, auditors, and security teams to evaluate access risks,
              enforce policies, and ensure compliance with regulatory frameworks.
            </p>
            <p
              className="sv-hero-p max-w-4xl mx-auto text-center"
              style={{ marginTop: 0 }}
            >
              Using business-driven workflows and governance rules, IGI
              strengthens identity security while simplifying access management
              across enterprise environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — IGI Features
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-info">
        <div className="container">
          <h2 className="sv-h2 text-center mb-12">
            What Identity Governance and Intelligence Offers
          </h2>
          <div className="sv-tech-grid">
            {igiFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="sv-tech-card"
              >
                <div className="sv-tech-icon">{feature.icon}</div>
                <div className="sv-tech-content">
                  <h3 className="sv-h4">{feature.title}</h3>
                  <p className="sv-p">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — How IAM Services Transform Enterprise Security
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-prolabs">
        <div className="container">
          <div className="sv-prolabs-header mb-12 flex flex-col items-center">
            <h2 className="sv-h2 text-center mb-4 w-full">
              How IAM Services Transform Enterprise Security
            </h2>
            <p className="sv-hero-p max-w-4xl mx-auto text-center">
              Professional Labs Identity and Access Management solutions enable
              organizations to secure, automate, and govern digital identities
              across complex IT environments.
            </p>
          </div>
          <div className="sv-prolabs-main">
            <div className="sv-prolabs-text">
              <div className="sv-pro-features">
                {iamBenefits.map((item, i) => (
                  <div key={i} className="sv-pro-f-card">
                    <div className="sv-pro-f-icon">{item.icon}</div>
                    <div className="sv-pro-f-body">
                      <strong>✔ {item.title}</strong> – {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — Fast Track Solution & Components
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-analysis">
        <div className="container">
          <div className="sv-analysis-header">
            <h2 className="sv-h2" style={{ color: "#fff" }}>
              Professional Labs Identity Governance Fast Track
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "1.15rem",
                maxWidth: "800px",
                margin: "20px auto 0",
                lineHeight: 1.7,
              }}
            >
              Our Identity Governance Fast Track program provides organizations
              with a rapid foundation for implementing enterprise IAM solutions.
              This bundled deployment model helps reduce planning and
              implementation time for IAM initiatives.
            </p>
          </div>
          <div className="sv-pros-grid">
            {solutionComponents.map((item, idx) => (
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
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — Two-Staged Approach
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-focus">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sv-focus-box"
            style={{ display: "block" }}
          >
            <div className="sv-focus-text">
              <h2 className="sv-h2" style={{ marginBottom: 20 }}>
                Achieve Identity Governance and Compliance Faster
              </h2>
              <p className="sv-p">
                Professional Labs delivers a two-stage IAM implementation
                framework that enables organizations to quickly establish secure
                identity governance while maintaining flexibility for future
                expansion.
              </p>
              <p className="sv-p mt-4">
                This modular approach supports identity provisioning,
                automation, and access governance as your infrastructure evolves.
              </p>
              <p className="sv-p mt-4">
                <strong>
                  Strengthen IAM Foundations and Protect Enterprise Data:
                </strong>{" "}
                Our specialists leverage proven automation frameworks and
                accelerators to deploy IAM solutions quickly and securely. We
                work closely with your teams to build a strong identity
                governance foundation that ensures:
              </p>
              <ul className="sv-check-list" style={{ marginTop: 16 }}>
                <li>
                  <CheckCircle2
                    size={18}
                    style={{ color: "var(--sv-accent)", flexShrink: 0 }}
                  />
                  Data protection and privacy governance
                </li>
                <li>
                  <CheckCircle2
                    size={18}
                    style={{ color: "var(--sv-accent)", flexShrink: 0 }}
                  />
                  Regulatory compliance readiness
                </li>
                <li>
                  <CheckCircle2
                    size={18}
                    style={{ color: "var(--sv-accent)", flexShrink: 0 }}
                  />
                  Secure digital identity management
                </li>
                <li>
                  <CheckCircle2
                    size={18}
                    style={{ color: "var(--sv-accent)", flexShrink: 0 }}
                  />
                  Alignment with enterprise security policies
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — Outcomes
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-outcomes">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sv-outcomes-h2"
          >
            Outcomes You Can Experience
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
          SECTION 8 — ISIM Overview
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-info" style={{ background: "#fff" }}>
        <div className="container">
          <div className="sv-section-header">
            <h2 className="sv-h2 text-center">
              Identity Manager (ISIM) Overview
            </h2>
            <p className="sv-subtitle text-center" style={{ marginTop: 15 }}>
              IBM Security Identity Manager (ISIM) is an automated identity
              management solution that manages user access across enterprise IT
              systems. The platform enables organizations to automate
              provisioning, enforce identity policies, and control user access
              throughout the entire identity lifecycle.
            </p>
            <p className="sv-subtitle text-center" style={{ marginTop: 10 }}>
              Using roles, permissions, and policy rules, ISIM ensures that
              employees, contractors, and partners receive the appropriate level
              of access at the right time.
            </p>
          </div>
          <div className="sv-security-grid">
            {isimFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="sv-scard"
              >
                <div className="sv-scard-icon">{feature.icon}</div>
                <div className="sv-scard-body">
                  <h5>{feature.title}</h5>
                  <p>{feature.desc}</p>
                </div>
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
              Ready to Strengthen Your Identity Governance?
            </h2>
            <p className="sv-mid-cta-p">
              Schedule a free consultation with a Professional Labs identity
              security expert to explore the right IAM strategy for your
              organization.
            </p>
            <div className="sv-mid-cta-btns">
              <Link href="/contact" className="sv-btn-white">
                Schedule Free Consultation <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="sv-btn-cta-outline">
                Speak to an IAM Expert Today
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
            Frequently Asked Questions About ISIM, IGI &amp; Identity Access
            Management
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
              Govern Access. Protect Identities. Ensure Compliance.
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "rgba(255,255,255,0.85)",
                marginBottom: 40,
              }}
            >
              Book a free 30-minute consultation with a Professional Labs IAM
              expert and secure your enterprise today.
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
