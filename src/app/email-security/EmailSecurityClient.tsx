"use client";

import {
  Shield,
  Mail,
  Lock,
  Activity,
  Layout,
  Database,
  Cloud,
  Key,
  Search,
  ShieldCheck,
  Globe,
  RefreshCcw,
  UserCheck,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle2,
  Zap,
  Eye,
  ShieldPlus,
  LockKeyhole,
  Layers,
  SearchCode,
  Briefcase,
  Users,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Benefits of Email Security Services ── */
const emailBenefits = [
  {
    title: "Reduce Complexity",
    desc: "Eliminate the need for multiple standalone email security tools. Managed email security simplifies protection while providing actionable insights and centralized visibility.",
    icon: <Layers size={28} />,
  },
  {
    title: "Monitoring and Management",
    desc: "Professional Labs security analysts monitor email activity 24/7, identifying malicious incoming and outgoing messages before they cause security incidents or data loss.",
    icon: <Activity size={28} />,
  },
  {
    title: "Email Security Best Practices",
    desc: "Regular evaluations of email security settings, threat patterns, and attack frequency ensure your protection strategy remains up to date with evolving cyber threats.",
    icon: <ShieldCheck size={28} />,
  },
  {
    title: "Support Email Compliance",
    desc: "Implement email usage policies and security controls that support industry compliance and regulatory requirements.",
    icon: <Briefcase size={28} />,
  },
  {
    title: "Extended Support for Email Investigations",
    desc: "Advanced email attacks require continuous monitoring, investigation, and rapid response. Professional Labs provides expert support for analyzing threats and responding to incidents.",
    icon: <SearchCode size={28} />,
  },
];

/* ── FAQ Data ── */
const faqs = [
  {
    question: "What is the best email security service?",
    answer: `The best email security service protects organizations from phishing, malware, and email fraud using advanced threat detection, encryption, and monitoring.

Secure email platforms typically use end-to-end encryption, ensuring messages remain protected from sender to recipient.

When choosing an email security provider, organizations should evaluate:
• Server location and data privacy regulations
• Encryption standards and security protocols
• Threat detection capabilities
• Integration with cloud email platforms`,
  },
  {
    question: "What are the different types of email security?",
    answer:
      "Common email security technologies include anti-phishing protection, spam filtering, malware detection, data loss prevention (DLP), email encryption, and authentication protocols such as SPF, DKIM, and DMARC.",
  },
  {
    question: "How much does email security cost?",
    answer:
      "Email security costs vary depending on the number of users, deployment type, and level of threat protection required. Managed email security services typically include monitoring, threat detection, and incident response as part of the solution.",
  },
  {
    question: "Does Office 365 have email security?",
    answer:
      "Yes. Microsoft 365 includes built-in email security features such as spam filtering and basic threat protection. However, many organizations deploy advanced email security solutions to enhance protection against phishing, ransomware, and business email compromise.",
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

export default function EmailSecurityClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-email">
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
            <span className="active">Email Security</span>
          </nav>
          <h1 className="sv-hero-h1">
            Email Security for Phishing Protection & Business Safety
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
              <motion.p variants={fadeInUp} className="sv-hero-p">
                Professional Labs Email Security defends your business from
                cyber threats like phishing, ransomware, malware, and BEC,
                protecting communications, sensitive data, and inboxes.
              </motion.p>
              <motion.div variants={fadeInUp} className="sv-hero-btn-wrap">
                <Link href="/contact" className="sv-btn-primary">
                  Get a free 30-minute consultation with a Professional Labs
                  security expert <ArrowRight size={18} />
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
                  src="/email_security_hero.png"
                  alt="Email Security Dashboard protecting business communications"
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
          PEOPLE-CENTRIC APPROACH
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-info">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sv-info-layout"
          >
            <div className="sv-info-header text-center">
              <h2 className="sv-h2">
                Take a People-Centric Approach to Email Security
              </h2>
            </div>
            <div className="sv-info-grid mt-6">
              <div className="sv-info-card">
                <p className="sv-p">
                  Cybercriminals increasingly target employees and human
                  behavior rather than infrastructure. Phishing attacks,
                  credential theft, and business email compromise are now among
                  the most common cyber threats affecting organizations
                  worldwide.
                </p>
              </div>
              <div className="sv-info-card">
                <p className="sv-p">
                  To protect corporate communication and sensitive information,
                  businesses must implement advanced email security controls
                  that detect and block malicious emails before they reach
                  employee inboxes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          DATA SECURITY — PREVENT DATA LOSS + ENCRYPT
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-security">
        <div className="container">
          <div className="sv-security-flex">
            <div className="sv-security-text">
              <div className="flex justify-center">
                <h2 className="sv-h2">Get Peace of Mind with Data Security</h2>
              </div>
              <div className="flex justify-center text-center">
                <p className="sv-p mt-6 mb-12 max-w-4xl mx-auto">
                  Professional Labs Email Security automatically scans emails
                  and attachments for sensitive data, ensuring secure
                  communication while simplifying regulatory compliance.
                </p>
              </div>

              <div className="sv-security-grid">
                <div className="sv-scard">
                  <div className="sv-scard-icon">
                    <ShieldPlus size={28} />
                  </div>
                  <div className="sv-scard-body">
                    <h5>Prevent Data Loss</h5>
                    <p>
                      Create cross-organization DLP (Data Loss Prevention) rules
                      that detect and protect sensitive information in email
                      communications.
                    </p>
                    <p className="sv-p mt-4">
                      Email security policies can automatically identify and
                      prevent the transmission of:
                    </p>
                    <ul className="sv-check-list mt-4">
                      <li>
                        <CheckCircle2 size={16} /> Financial information
                      </li>
                      <li>
                        <CheckCircle2 size={16} /> Confidential business
                        documents
                      </li>
                      <li>
                        <CheckCircle2 size={16} /> Healthcare data
                      </li>
                      <li>
                        <CheckCircle2 size={16} /> Personally identifiable
                        information (PII)
                      </li>
                    </ul>
                    <p className="sv-p mt-4">
                      This ensures sensitive data remains protected across all
                      users, email messages, and attachments.
                    </p>
                  </div>
                </div>
                <div className="sv-scard">
                  <div className="sv-scard-icon">
                    <LockKeyhole size={28} />
                  </div>
                  <div className="sv-scard-body">
                    <h5>Encrypt and Authenticate Emails</h5>
                    <p>
                      Secure business communication using advanced email
                      encryption and authentication technologies.
                    </p>
                    <p className="sv-p mt-4">
                      Organizations can protect messages using:
                    </p>
                    <ul className="sv-check-list mt-4">
                      <li>
                        <CheckCircle2 size={16} /> S/MIME encryption and digital
                        signatures to verify sender identity
                      </li>
                      <li>
                        <CheckCircle2 size={16} /> TLS encryption for secure
                        email transmission
                      </li>
                      <li>
                        <CheckCircle2 size={16} /> Attachment and message
                        encryption for PDF and Microsoft Office files
                      </li>
                      <li>
                        <CheckCircle2 size={16} /> Secure web portal encryption
                        for confidential communications
                      </li>
                    </ul>
                    <p className="sv-p mt-4">
                      These capabilities ensure emails remain confidential,
                      authenticated, and protected from interception.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FLEXIBLE DEPLOYMENT
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-focus">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sv-focus-box"
          >
            <div className="sv-focus-icon">
              <ShieldCheck size={40} className="text-accent" />
            </div>
            <div className="sv-focus-text">
              <h2 className="sv-h2">
                Secure Email with Flexible Deployment Options
              </h2>
              <p className="sv-p mb-6">
                Professional Labs Email Security provides flexible deployment
                models designed to support modern cloud and hybrid environments.
              </p>
              <p className="sv-p mb-6">
                Using AI-powered threat detection, the platform identifies
                complex cyberattacks including phishing campaigns, ransomware
                attachments, brand impersonation, and financial fraud attempts.
              </p>
              <p className="sv-p">
                The solution protects organizations with or without an email
                gateway, allowing businesses to implement security in the way
                that best fits their infrastructure.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          BENEFITS — SMARTER, FASTER EMAIL SECURITY
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-benefits">
        <div className="container">
          <div className="sv-benefits-head text-center mb-12">
            <h2 className="sv-h2 mb-8">
              Benefits: Smarter, Faster, and More Proactive Email Security
            </h2>
            <div className="flex justify-center">
              <p className="sv-subtitle mt-6 max-w-4xl mx-auto">
                Email remains the primary communication channel for businesses
                and the most common entry point for cyberattacks. Effective
                email security must defend against a wide range of threats,
                including phishing attacks, spam and malicious links, malware
                and ransomware, business email compromise, and brand
                impersonation and fraud. Cloud platforms such as Microsoft 365
                and Google Workspace require advanced email protection because
                they are frequently targeted by cybercriminals.
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <p className="sv-p max-w-4xl mx-auto">
                Professional Labs Email Security helps organizations detect
                threats early, automate response, and protect users from
                evolving email attacks.
              </p>
            </div>
          </div>

          <div className="sv-benefits-grid">
            <div className="sv-benefit-card dark">
              <h4 className="sv-h4 mb-4">Email Security Cloud Gateway</h4>
              <p className="sv-p mb-4">
                The Email Security Cloud Gateway is ideal for organizations
                managing complex email environments that require granular
                control and configurable security policies.
              </p>
              <p className="sv-p mb-3">This deployment model provides:</p>
              <ul className="sv-check-list">
                <li>
                  <CheckCircle2 size={16} /> Advanced threat detection and
                  filtering
                </li>
                <li>
                  <CheckCircle2 size={16} /> Policy-based email security
                  controls
                </li>
                <li>
                  <CheckCircle2 size={16} /> Integration with awareness training
                  programs
                </li>
                <li>
                  <CheckCircle2 size={16} /> Brand and supply chain protection
                  tools
                </li>
              </ul>
              <p className="sv-p mt-4">
                It can also integrate with the Professional Labs security
                platform, enabling a comprehensive email protection ecosystem.
              </p>
            </div>
            <div className="sv-benefit-card blue">
              <h4 className="sv-h4 mb-4">
                Email Security - Cloud Integrated
              </h4>
              <p className="sv-p mb-4">
                Cloud-integrated email security can be deployed within minutes
                and is particularly effective for organizations using Microsoft
                365 environments.
              </p>
              <p className="sv-p mb-3">
                This solution does not require an MX record change, making
                implementation simple and fast. Key capabilities include:
              </p>
              <ul className="sv-check-list">
                <li>
                  <CheckCircle2 size={16} /> Out-of-the-box security policies
                </li>
                <li>
                  <CheckCircle2 size={16} /> Centralized dashboard showing
                  blocked threats
                </li>
                <li>
                  <CheckCircle2 size={16} /> Automated phishing and malware
                  detection
                </li>
                <li>
                  <CheckCircle2 size={16} /> One-click threat remediation
                </li>
              </ul>
              <p className="sv-p mt-4">
                This approach simplifies email security administration while
                maintaining enterprise-grade threat protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          BENEFITS OF EMAIL SECURITY SERVICES
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-grid">
        <div className="container">
          <h2 className="sv-h2 text-center mb-16">
            Benefits of Email Security Services
          </h2>
          <div className="sv-grid-layout">
            {emailBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="sv-grid-card"
              >
                <div className="sv-grid-icon">{benefit.icon}</div>
                <div className="sv-grid-body">
                  <h5>{benefit.title}</h5>
                  <p>{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
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
            Frequently Asked Questions About Email Security
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
                        {faq.answer.split("\n").map((line, i) => (
                          <p key={i} className={i > 0 ? "mt-4" : ""}>
                            {line}
                          </p>
                        ))}
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
