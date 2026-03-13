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
    desc: "A unified foundation to understand, control, and make business decisions related to user access and access risks across the enterprise.",
    icon: <Layers size={28} />,
  },
  {
    title: "Business-Activity-Based Approach",
    desc: "Facilitates communication between auditors and IT staff and helps determine segregation of duties violations across enterprise applications, including SAP.",
    icon: <Users size={28} />,
  },
  {
    title: "Visibility & User Access Control",
    desc: "Consolidates access entitlements from target applications and employs sophisticated algorithms for role mining, modeling, and optimization.",
    icon: <Eye size={28} />,
  },
  {
    title: "Access Request Management",
    desc: "Delivers easier-to-implement, business-friendly, self-service access request functions for streamlined operations.",
    icon: <UserCheck size={28} />,
  },
  {
    title: "Target Integration & Automation",
    desc: "Automates the process of data collection and fulfillment of identity and access from distributed target systems.",
    icon: <RefreshCcw size={28} />,
  },
];

const iamBenefits = [
  {
    title: "Govern Access Control Lifecycles",
    desc: "Enable enterprises to manage access risks by governing access control lifecycles and administration of digital identities.",
    icon: <Shield size={28} />,
  },
  {
    title: "Dynamic Role Definition",
    desc: "Dynamically define roles, automate data authorization, and streamline access management across your organization.",
    icon: <Settings size={28} />,
  },
  {
    title: "Reduce Costs & Mitigate Risks",
    desc: "Reduce operational costs, mitigate risks while managing large amounts of data and identities across geographic locations.",
    icon: <Globe size={28} />,
  },
];

const solutionComponents = [
  "Plug and play IAM policy and procedure toolkits",
  "Seamless integration with multiple standards & HRMS systems",
  "Non-employee account modules",
  "Easily configurable approval workflow templates",
  "Common alerts and essential report sets",
];

const isimFeatures = [
  {
    title: "Centralized Management",
    desc: "ISIM centralizes the process of managing user accounts and access permissions across an organization's operating systems and applications.",
    icon: <Server size={28} />,
  },
  {
    title: "Automated Processes",
    desc: "ISIM can automatically create, modify, and terminate user privileges based on roles, accounts, and access permissions.",
    icon: <RefreshCcw size={28} />,
  },
  {
    title: "Policy-Based Solutions",
    desc: "Helps companies deploy policy-based provisioning solutions to automate the process of granting access rights to employees, contractors, and business partners.",
    icon: <ShieldCheck size={28} />,
  },
  {
    title: "Provisioning Support",
    desc: "Supports provisioning — the process of providing, deploying, and tracking a service or component in an enterprise.",
    icon: <Cloud size={28} />,
  },
  {
    title: "Security & Compliance",
    desc: "Helps enforce security and manage compliance. Can be used in a closed enterprise environment or across a virtual or extended enterprise.",
    icon: <Lock size={28} />,
  },
];

const outcomes = [
  "Comprehensive governance of access controls across business functions",
  "Transform IAM through preventive and detective controls",
  "Onboard apps and ensure continuous audit readiness",
  "Service capabilities to move IAM to the cloud",
  "Manage cloud-based workloads with ease",
  "Decentralized access control for microservices built for scale & interoperability",
];

const faqs = [
  {
    question: "What is IBM Security Identity Manager (ISIM)?",
    answer:
      "IBM Security Identity Manager (ISIM), also known as TIM, ITIM, or ISVG, is an identity management system that helps companies manage user access to IT environments. It provides automated and policy-based solutions for managing user privileges throughout the entire user lifecycle, including creation, modification, and termination of access rights.",
  },
  {
    question: "What are the main benefits of implementing ISIM?",
    answer:
      "The main benefits include centralized user management across all systems, automated provisioning and de-provisioning of access, policy-driven access control, reduced IT administration costs, enhanced security posture, and easier regulatory compliance. ISIM streamlines identity governance and reduces the risk of unauthorized access.",
  },
  {
    question: "What are the four parts of IAM?",
    answer:
      "The four parts of IAM are: (1) Identity Management — creating, modifying, and deleting user identities; (2) Access Management — controlling who has access to what resources; (3) Authentication — verifying user identity through passwords, MFA, biometrics, etc.; and (4) Authorization — determining what authenticated users are allowed to do within a system.",
  },
  {
    question: "Is IAM part of cybersecurity?",
    answer:
      "Yes, Identity and Access Management (IAM) is a critical component of cybersecurity. IAM ensures that the right individuals have access to the right resources at the right times for the right reasons. It helps protect against unauthorized access, data breaches, and insider threats, making it a foundational element of any comprehensive cybersecurity strategy.",
  },
  {
    question: "What are the four pillars of IAM?",
    answer:
      "The four pillars of IAM are: (1) Identity Governance — policies and processes for managing digital identities; (2) Access Management — controlling and monitoring access to resources; (3) Privileged Access Management (PAM) — securing elevated access accounts; and (4) Identity Administration — day-to-day management of user accounts and credentials.",
  },
  {
    question: "What is an example of IAM?",
    answer:
      "A common example of IAM is when an employee joins a company and is automatically provisioned with access to email, HR systems, and department-specific applications based on their role. When they change departments, their access is updated accordingly. When they leave the company, all access is automatically revoked. This entire lifecycle is managed by IAM solutions like ISIM and IGI.",
  },
  {
    question: "What is IBM IGI?",
    answer:
      "IBM Identity Governance and Intelligence (IGI) is a comprehensive identity governance platform that helps organizations analyze, define, and control user access and access risks. It uses business-centric rules, activities, and processes, empowering line-of-business managers, auditors, and risk managers to govern access and evaluate regulatory compliance across enterprise applications and services.",
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

export default function IAMPage() {
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
              ISIM and IGI: Identity and Access Management
            </span>
          </nav>
          <h1 className="sv-hero-h1">
            ISIM and IGI: Identity and Access Management
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
                Empowering Secure Access with Intelligent Identity Management
              </motion.h2>

              <motion.p variants={fadeInUp} className="sv-hero-p">
                Professional Labs ISIM and IGI Delaware. Identity and Access
                Management Solutions Delaware. IBM Identity Governance Solutions
                Delaware. We deliver comprehensive IAM solutions that protect
                your enterprise identities and ensure regulatory compliance.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="sv-hero-btn-wrap"
                style={{ gap: "16px", flexWrap: "wrap" }}
              >
                <Link href="/contact" className="sv-btn-primary">
                  🟢 Get Free 30-Minute Consultation <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="sv-btn-outline">
                  📞 Speak to an IAM Expert
                </Link>
              </motion.div>

              {/* Trust Micro-Bar */}
              <motion.div variants={fadeInUp} className="sv-trust-bar">
                <span className="sv-trust-item">✔ IBM Certified Partners</span>
                <span className="sv-trust-item">✔ Rapid IAM Deployment</span>
                <span className="sv-trust-item">✔ Delaware-Based Support</span>
                <span className="sv-trust-item">
                  ✔ Enterprise-Grade Solutions
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
                  src="/iam_hero.png"
                  alt="Identity and Access Management Dashboard"
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
              IGI — Identity Governance and Intelligence
            </h2>
            <p className="sv-hero-p max-w-4xl mx-auto text-center">
              IBM® Security Identity Governance and Intelligence delivers one
              platform for organizations to analyze, define, and control user
              access and access risks. This solution employs business-centric
              rules, activities and processes, empowering line-of-business
              managers, auditors, and risk managers to govern access and
              evaluate regulatory compliance across enterprise applications and
              services.
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
          SECTION 4 — IAM Services Benefits
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-prolabs">
        <div className="container">
          <div className="sv-prolabs-header mb-12 flex flex-col items-center">
            <h2 className="sv-h2 text-center mb-4 w-full">
              IAM Services Can Transform Your Enterprise
            </h2>
            <p className="sv-hero-p max-w-4xl mx-auto text-center">
              Professional Labs Identity and Access Management services empower
              enterprises to govern, automate, and secure digital identities at
              scale.
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
              A bundled solution offering that ensures a strong foundation for
              enterprise IAM initiatives. This solution can drastically cut
              planning and deployment times for initial IAM deployments.
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
              <h3 className="sv-h3">
                Meet Your IAM Compliance Requirements Quickly
              </h3>
              <p className="sv-p">
                Professional Labs provides a fast track two-staged approach to
                achieve access and identity governance goals. This approach
                provides a modular and flexible method for building the very
                foundation of a robust and secure IAM program. The approach is
                also extendable to IAM provisioning, automation, and other
                operational functionalities as and when required.
              </p>
              <p className="sv-p mt-4">
                <strong>
                  Strengthen IAM Foundation, Protect Identities and Data:
                </strong>{" "}
                We have perfected the art of rapidly deploying IAM solutions by
                leveraging a range of accelerators and automation frameworks.
                Our experts can collaborate with you and quickly focus on the
                relevant areas needed to build a strong IAM foundation. This
                includes ensuring data protection, privacy governance, and
                legislative compliance and meeting customer expectations.
              </p>
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
              Identity Manager is an automated and policy-based solution that
              manages user access across IT environments, helping to drive
              effective identity management and governance across the
              enterprise. By using roles, accounts, and access permissions, it
              helps automate the creation, modification, and termination of user
              privileges throughout the entire user lifecycle.
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
              Get a free 30-minute consultation with a Professional Labs IAM
              expert and discover how ISIM and IGI can transform your enterprise
              security.
            </p>
            <div className="sv-mid-cta-btns">
              <Link href="/contact" className="sv-btn-white">
                🟢 Schedule Free Consultation <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="sv-btn-cta-outline">
                📞 Speak to an IAM Expert Today
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
                🟢 Book Consultation <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="sv-btn-cta-outline">
                📞 Call Us Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
