"use client";

import {
  Shield,
  Server,
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
  Download,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Azure Managed Security Services Data ── */
const azureServices = [
  {
    category: "General Security",
    items: [
      {
        title: "Security Center",
        desc: "Provides centralized security posture management and advanced threat protection for hybrid cloud environments.",
        icon: <Shield size={28} />,
      },
      {
        title: "Key Vault",
        desc: "Protects sensitive data such as passwords, encryption keys, and connection strings used by applications.",
        icon: <Key size={28} />,
      },
      {
        title: "Monitor Logs",
        desc: "Collects telemetry and operational data and provides analytics for security monitoring and troubleshooting.",
        icon: <Activity size={28} />,
      },
      {
        title: "Dev/Test Labs",
        desc: "Allows developers to quickly create Azure environments while controlling costs and minimizing infrastructure waste.",
        icon: <Layout size={28} />,
      },
    ],
  },
  {
    category: "Operations Security",
    items: [
      {
        title: "Security and Audit Solutions",
        desc: "Provides visibility into an organization's overall IT security posture.",
        icon: <Search size={28} />,
      },
      {
        title: "Resource Manager",
        desc: "Helps deploy, update, and manage Azure resources efficiently within a secure infrastructure framework.",
        icon: <Server size={28} />,
      },
    ],
  },
  {
    category: "Application Security",
    items: [
      {
        title: "Web Application Vulnerability Scanning",
        desc: "Identifies security weaknesses in web applications before attackers exploit them.",
        icon: <ShieldCheck size={28} />,
      },
      {
        title: "Web Application Firewall",
        desc: "Protects web applications from threats such as SQL injection and cross-site scripting attacks.",
        icon: <Lock size={28} />,
      },
      {
        title: "Application Insights",
        desc: "Provides performance monitoring and diagnostics for modern cloud applications.",
        icon: <Activity size={28} />,
      },
    ],
  },
  {
    category: "Storage Security",
    items: [
      {
        title: "Role-Based Access Control (RBAC)",
        desc: "Restricts access to resources based on least-privilege principles.",
        icon: <UserCheck size={28} />,
      },
      {
        title: "Encryption",
        desc: "Protects sensitive data both during transmission and while stored in the cloud.",
        icon: <Lock size={28} />,
      },
    ],
  },
  {
    category: "Network Security",
    items: [
      {
        title: "Virtual Network",
        desc: "Creates secure network isolation within Azure infrastructure.",
        icon: <Globe size={28} />,
      },
      {
        title: "VPN Gateway",
        desc: "Enables encrypted communication between on-premise networks and Azure environments.",
        icon: <Shield size={28} />,
      },
      {
        title: "Network Layer Controls",
        desc: "Controls connectivity and traffic flow between network resources.",
        icon: <Layout size={28} />,
      },
    ],
  },
  {
    category: "Backup and Disaster Recovery",
    items: [
      {
        title: "Site Recovery",
        desc: "Automates failover and disaster recovery to ensure business continuity.",
        icon: <RefreshCcw size={28} />,
      },
      {
        title: "Virtual Machine Backup",
        desc: "Protects application data and system workloads with reliable backup solutions.",
        icon: <Database size={28} />,
      },
    ],
  },
  {
    category: "Identity and Access Management",
    items: [
      {
        title: "Azure Active Directory",
        desc: "Provides centralized identity and access management for cloud environments.",
        icon: <UserCheck size={28} />,
      },
      {
        title: "Multi-Factor Authentication",
        desc: "Strengthens security by requiring multiple authentication factors before granting access.",
        icon: <ShieldCheck size={28} />,
      },
    ],
  },
];

/* ── Updated FAQ Data ── */
const faqs = [
  {
    question: "What is Azure Security Service?",
    answer:
      "Azure Security Services are cloud security solutions provided by Microsoft Azure that help protect applications, data, and cloud infrastructure from cyber threats. These services include tools such as Azure Security Center, Azure Active Directory, and Azure Key Vault.",
  },
  {
    question:
      "How does Azure Security Service help protect against cyber threats?",
    answer:
      "Azure security tools provide continuous monitoring, threat detection, identity protection, and automated security controls that help organizations prevent unauthorized access and detect suspicious activity in real time.",
  },
  {
    question: "How does Azure Security Service help with compliance?",
    answer:
      "Azure security solutions support compliance with major industry standards such as ISO 27001, HIPAA, and GDPR by providing built-in security controls, monitoring capabilities, and compliance reporting.",
  },
  {
    question: "How can Azure Security Service benefit businesses?",
    answer:
      "Azure security improves business resilience by protecting cloud workloads, securing sensitive data, reducing the risk of cyber attacks, and ensuring regulatory compliance.",
  },
  {
    question: "Is Azure Security Service suitable for small businesses?",
    answer:
      "Yes. Azure Security Services are scalable and can be customized for organizations of all sizes, allowing small and mid-sized businesses to implement enterprise-grade cloud security.",
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

export default function AzureSecurityClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-azure">
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
            <span className="active">Azure Security Services</span>
          </nav>
          <h1 className="sv-hero-h1">
            Azure Security Services for Secure Cloud Infrastructure
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
              <motion.p variants={fadeInUp} className="sv-lead">
                Safeguard your applications, identities, and sensitive data with
                Professional Labs Azure Security Services.
              </motion.p>
              <motion.p variants={fadeInUp} className="sv-hero-p">
                Azure is a powerful cloud platform supporting multiple operating
                systems, programming languages, applications, and devices. As
                organizations migrate workloads to the cloud, strong cloud
                security and identity protection become essential to prevent
                cyber threats and data breaches.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="sv-hero-btn-wrap"
                style={{ gap: "16px", flexWrap: "wrap" }}
              >
                <Link href="/contact" className="sv-btn-primary">
                  Book a Free 30-Minute Azure Security Consultation
                  <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="sv-btn-outline">
                  <Download size={18} /> Download Azure Cloud Security Checklist
                </Link>
              </motion.div>

              {/* Trust Micro-Bar */}
              <motion.div variants={fadeInUp} className="sv-trust-bar">
                <span className="sv-trust-item">✔ Azure Security Center</span>
                <span className="sv-trust-item">✔ Identity Protection</span>
                <span className="sv-trust-item">✔ Compliance Ready</span>
                <span className="sv-trust-item">✔ Hybrid Cloud</span>
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
                  src="/azure_security_hero.png"
                  alt="Azure Security Services Dashboard for cloud infrastructure protection"
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
          IMPORTANCE OF AZURE CLOUD SECURITY
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-info">
        <div className="container">
          <div className="sv-info-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sv-info-card"
            >
              <h2 className="sv-h2">The Importance of Azure Cloud Security</h2>
              <p className="sv-p">
                Cloud adoption continues to grow as organizations move critical
                applications and data to cloud platforms. However, this shift
                also increases the risk of cyber attacks, identity compromise,
                and data exposure.
              </p>
              <p className="sv-p mt-4">
                Azure Cloud Security provides organizations with advanced
                security controls designed to protect workloads, data, and
                identities across hybrid and cloud environments.
              </p>
              <p className="sv-p mt-4">
                By implementing Azure Security Services, businesses can:
              </p>
              <ul className="sv-list mt-4">
                <li>
                  <CheckCircle2 size={18} /> Prevent unauthorized access to
                  sensitive systems
                </li>
                <li>
                  <CheckCircle2 size={18} /> Detect cyber threats and suspicious
                  activity early
                </li>
                <li>
                  <CheckCircle2 size={18} /> Protect business-critical
                  applications and data
                </li>
                <li>
                  <CheckCircle2 size={18} /> Maintain compliance with global
                  security standards
                </li>
              </ul>
              <p className="sv-p mt-4">
                Strong cloud security helps organizations protect their
                reputation, maintain customer trust, and reduce the risk of
                costly security incidents.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sv-info-card sv-dark-card"
            >
              <h2 className="sv-h2">
                Enhancing Cloud Security with Azure Security Tools
              </h2>
              <p className="sv-p">
                Microsoft Azure provides a comprehensive suite of cloud-native
                security tools designed to protect applications, infrastructure,
                and identities.
              </p>
              <p className="sv-p mt-4">
                Professional Labs helps organizations implement and manage these
                security solutions to strengthen their cloud security posture.
              </p>
              <ul className="sv-list mt-6">
                <li>
                  <CheckCircle2 size={18} /> Azure Security Center
                </li>
                <li>
                  <CheckCircle2 size={18} /> Azure Active Directory
                </li>
                <li>
                  <CheckCircle2 size={18} /> Azure Key Vault
                </li>
                <li>
                  <CheckCircle2 size={18} /> Azure Information Protection
                </li>
                <li>
                  <CheckCircle2 size={18} /> Azure Firewall
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          AZURE AD IDENTITY PROTECTION
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
              <Shield size={40} className="text-accent" />
            </div>
            <div className="sv-focus-text">
              <h2 className="sv-h2">Azure AD Identity Protection</h2>
              <p className="sv-p">
                Azure AD Identity Protection helps organizations protect digital
                identities and detect potential identity-based risks in real
                time.
              </p>
              <p className="sv-p mt-4">
                Using machine learning and behavioral analytics, this security
                feature analyzes user activity patterns and detects suspicious
                login attempts, compromised credentials, or abnormal access
                behavior.
              </p>
              <p className="sv-p mt-4">
                Organizations can respond quickly to identity threats by
                implementing automated policies and security alerts to prevent
                unauthorized access.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TOP AZURE MANAGED SECURITY SERVICES
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-catalog">
        <div className="container">
          <div className="sv-catalog-head">
            <h2 className="sv-h2">Top Azure Managed Security Services</h2>
            <p className="sv-subtitle">
              Professional Labs delivers comprehensive Azure managed security
              solutions designed to secure infrastructure, applications,
              networks, and data across cloud environments.
            </p>
          </div>

          <div className="sv-cat-list">
            {azureServices.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="sv-cat-group"
              >
                <div className="sv-cat-top">
                  <span className="sv-cat-idx">0{idx + 1}</span>
                  <h4 className="sv-cat-name">{cat.category}</h4>
                </div>
                <div className="sv-grid-services">
                  {cat.items.map((item, i) => (
                    <div key={i} className="sv-scard">
                      <div className="sv-scard-icon">{item.icon}</div>
                      <div className="sv-scard-body">
                        <h5>{item.title}</h5>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA after services */}
          <div className="pt-20 flex justify-start">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="sv-bottom-cta-wrap"
            >
              <Link href="/contact" className="sv-btn-primary">
                Book a Free 30-Minute Azure Security Consultation{" "}
                <ArrowRight size={18} />
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
          <h2 className="sv-h2 text-center mb-16">
            Frequently Asked Questions About Azure Security Services
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
    </main>
  );
}
