"use client";

import {
  Shield,
  Activity,
  Lock,
  UserCheck,
  Search,
  Zap,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Target,
  Users,
  Eye,
  Layout,
  Globe,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

/* ── FAQ Data ── */
const faqs = [
  {
    question: "What is Microsoft Defender for Identity?",
    answer:
      "Microsoft Defender for Identity is a cloud-based identity security solution that analyzes Active Directory signals to detect advanced cyber threats, compromised identities, and insider attacks across hybrid environments.",
  },
  {
    question: "How do I enable Microsoft Defender for Identity?",
    answer:
      "Microsoft Defender for Identity is enabled by deploying sensors on Active Directory domain controllers, connecting identity telemetry to Microsoft security services, and configuring monitoring and threat detection policies.",
  },
  {
    question: "What are the benefits of Microsoft Defender for Identity?",
    answer:
      "The platform helps organizations detect credential theft, monitor suspicious user behavior, identify insider threats, and protect Active Directory environments from advanced cyber attacks.",
  },
  {
    question:
      "What is the difference between Defender for Identity and Azure AD Identity Protection?",
    answer:
      "Microsoft Defender for Identity focuses on protecting on-premises Active Directory environments, while Azure Active Directory Identity Protection secures cloud identities within Azure AD. Both solutions can work together within the Microsoft security ecosystem.",
  },
];

export default function DefenderIdentityClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-identity">
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
            <span className="active">Microsoft Defender for Identity</span>
          </nav>
          <h1 className="sv-hero-h1">
            Microsoft Defender for Identity Services
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
              className="sv-hero-content"
            >
              <motion.h2 variants={fadeInUp} className="sv-display-h2">
                Evaluate and Monitor User Behavior Across Active Directory
              </motion.h2>
              <motion.p variants={fadeInUp} className="sv-hero-lead">
                Microsoft Defender for Identity (formerly Azure ATP) is a
                cloud-based identity security solution that analyzes signals
                from on-premises Active Directory to detect advanced threats,
                compromised identities, and harmful insider activity.
              </motion.p>
              <motion.div variants={fadeInUp} className="sv-hero-btn-wrap">
                <Link href="/contact" className="sv-btn-primary">
                  Get a free 30-minute consultation with a Professional Labs
                  expert <ArrowRight size={18} />
                </Link>
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
                  src="/defender_identity_hero.png"
                  alt="Microsoft Defender for Identity protecting Active Directory"
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
          ADVANCED IDENTITY THREAT DETECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-info">
        <div className="container">
          <div className="sv-info-header text-center mb-16">
            <h2 className="sv-h2">
              Advanced Identity Threat Detection for Hybrid Environments
            </h2>
            <div className="flex justify-center">
              <p className="sv-lead mt-6 max-w-4xl mx-auto">
                Professional Labs security analysts use Defender for Identity to
                help organizations:
              </p>
            </div>
          </div>
          <div className="sv-info-grid">
            <div className="sv-info-card">
              <ul className="sv-check-list mt-2">
                <li>
                  <CheckCircle2 size={18} /> Monitor user and entity behavior
                  using machine-learning analytics
                </li>
                <li>
                  <CheckCircle2 size={18} /> Protect Active Directory
                  credentials and authentication systems
                </li>
              </ul>
            </div>
            <div className="sv-info-card">
              <ul className="sv-check-list mt-2">
                <li>
                  <CheckCircle2 size={18} /> Detect malicious user behavior and
                  advanced cyber attacks
                </li>
                <li>
                  <CheckCircle2 size={18} /> Investigate security events with
                  clear visual attack timelines
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          HOW DEFENDER DETECTS CYBER ATTACKS
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-focus">
        <div className="container">
          <h2 className="sv-h2 text-center mb-12">
            How Microsoft Defender for Identity Detects Cyber Attacks
          </h2>
          <div className="flex justify-center">
            <p className="sv-p text-center mb-16 max-w-3xl mx-auto">
              Microsoft Defender for Identity continuously monitors network
              traffic and authentication activity to identify threats across
              multiple phases of the cyber attack lifecycle.
            </p>
          </div>

          <div className="sv-grid-layout">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="sv-grid-card"
            >
              <div className="sv-grid-icon">
                <Search size={28} />
              </div>
              <div className="sv-grid-body">
                <h5>Reconnaissance</h5>
                <p>
                  During the reconnaissance stage, attackers explore the
                  environment to identify assets, users, permissions, and
                  network structure. This phase helps them prepare for later
                  attack stages.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="sv-grid-card"
            >
              <div className="sv-grid-icon">
                <Activity size={28} />
              </div>
              <div className="sv-grid-body">
                <h5>Lateral Movement Cycle</h5>
                <p>
                  In this stage, attackers attempt to move across systems using
                  compromised credentials, increasing their access points
                  within the network.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="sv-grid-card"
            >
              <div className="sv-grid-icon">
                <Lock size={28} />
              </div>
              <div className="sv-grid-body">
                <h5>Domain Dominance (Persistence)</h5>
                <p>
                  Once attackers gain sufficient privileges, they maintain
                  persistence by exploiting compromised accounts, credentials,
                  or elevated permissions to control the environment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          BEHAVIORAL ANALYTICS & INSIDER THREAT DETECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-info bg-white">
        <div className="container">
          <div className="sv-info-header text-center mb-16">
            <h2 className="sv-h2">
              Behavioral Analytics and Insider Threat Detection
            </h2>
          </div>
          <div className="sv-info-grid">
            <div className="sv-info-card">
              <p className="sv-p">
                Microsoft Defender for Identity builds a behavioral baseline for
                every user and entity based on permissions, group membership,
                and historical activity patterns.
              </p>
              <p className="sv-p mt-4">
                Using advanced machine learning, the platform detects anomalies
                such as:
              </p>
              <ul className="sv-check-list mt-4">
                <li>
                  <CheckCircle2 size={16} /> Unusual login activity
                </li>
                <li>
                  <CheckCircle2 size={16} /> Suspicious credential usage
                </li>
                <li>
                  <CheckCircle2 size={16} /> Privilege escalation attempts
                </li>
                <li>
                  <CheckCircle2 size={16} /> Abnormal authentication patterns
                </li>
              </ul>
              <p className="sv-p mt-4">
                This behavioral intelligence allows organizations to identify
                compromised identities, insider threats, and malicious activity
                before significant damage occurs.
              </p>
            </div>
            <div className="sv-info-card sv-dark-card">
              <p className="sv-p">
                Defender for Identity sensors continuously monitor enterprise
                domain controllers, providing full visibility into user actions
                across devices and systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          DEFENDER FOR IDENTITY + ENDPOINT INTEGRATION
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-benefits">
        <div className="container">
          <div className="sv-benefits-head text-center mb-16">
            <h2 className="sv-h2 mb-4">
              Defender for Identity and Defender for Endpoint Integration
            </h2>
            <div className="flex justify-center">
              <p className="sv-subtitle max-w-4xl">
                Microsoft Defender for Identity works alongside Microsoft
                Defender for Endpoint to deliver comprehensive threat detection
                across identities and devices. While Defender for Identity
                monitors domain controller traffic and identity activity,
                Defender for Endpoint analyzes endpoint behavior and device
                telemetry.
              </p>
            </div>
          </div>
          <div className="sv-info-card">
            <p className="sv-p text-center mb-6">
              When integrated within the Microsoft security ecosystem, these
              tools provide a unified dashboard where security teams can:
            </p>
            <ul className="sv-check-list" style={{ maxWidth: "600px", margin: "0 auto" }}>
              <li>
                <CheckCircle2 size={18} /> Correlate alerts across identities
                and endpoints
              </li>
              <li>
                <CheckCircle2 size={18} /> Detect sophisticated multi-stage
                attacks
              </li>
              <li>
                <CheckCircle2 size={18} /> Investigate threats across the full
                attack timeline
              </li>
              <li>
                <CheckCircle2 size={18} /> Improve security response efficiency
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          BENEFITS OF DEFENDER FOR IDENTITY
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-info">
        <div className="container">
          <h2 className="sv-h2 text-center mb-8">
            Benefits of Microsoft Defender for Identity
          </h2>
          <div className="flex justify-center mb-12">
            <p className="sv-p text-center max-w-4xl">
              Professional Labs helps organizations implement and manage
              Microsoft Defender for Identity to strengthen identity security
              and detect advanced threats. Key benefits include:
            </p>
          </div>
          <div className="sv-grid-layout">
            <div className="sv-info-card">
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <CheckCircle2 size={20} style={{ color: "var(--sv-accent)", flexShrink: 0, marginTop: "2px" }} />
                <p className="sv-p">
                  Detect Pass-the-Hash and Pass-the-Ticket credential attacks
                </p>
              </div>
            </div>
            <div className="sv-info-card">
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <CheckCircle2 size={20} style={{ color: "var(--sv-accent)", flexShrink: 0, marginTop: "2px" }} />
                <p className="sv-p">
                  Identify DNS reconnaissance and suspicious protocols
                </p>
              </div>
            </div>
            <div className="sv-info-card">
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <CheckCircle2 size={20} style={{ color: "var(--sv-accent)", flexShrink: 0, marginTop: "2px" }} />
                <p className="sv-p">
                  Detect malicious service creation and abnormal authentication
                  activity
                </p>
              </div>
            </div>
            <div className="sv-info-card">
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <CheckCircle2 size={20} style={{ color: "var(--sv-accent)", flexShrink: 0, marginTop: "2px" }} />
                <p className="sv-p">
                  Monitor suspicious network behavior across identity
                  infrastructure
                </p>
              </div>
            </div>
          </div>
          <div className="pt-20 flex justify-start">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="sv-bottom-cta-wrap"
            >
              <Link href="/contact" className="sv-btn-primary">
                Get a free 30-minute consultation with a Professional Labs
                expert <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FAQ SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-faq">
        <div className="container">
          <h2 className="sv-h2 text-center mb-20">
            Frequently Asked Questions About Microsoft Defender for Identity
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
    </main>
  );
}
