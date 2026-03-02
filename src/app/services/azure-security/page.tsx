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
  HelpCircle,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const azureServices = [
  {
    category: "General Security",
    items: [
      {
        title: "Security Center",
        desc: "A workload protection solution that provides security management and advanced threat protection across the hybrid cloud.",
        icon: <Shield size={28} />,
      },
      {
        title: "Key Vault",
        desc: "A service that secures sensitive details such as passwords, connection strings, and other information needed to keep apps working.",
        icon: <Key size={28} />,
      },
      {
        title: "Monitor logs",
        desc: "A service that collects telemetry and other data and provides a query language and analytics engine to deliver operational insights.",
        icon: <Activity size={28} />,
      },
      {
        title: "Dev/Test Labs",
        desc: "A service that helps testers and developers instantly create Azure environments while minimizing waste and controlling.",
        icon: <Layout size={28} />,
      },
    ],
  },
  {
    category: "Operations Security",
    items: [
      {
        title: "Security and Audit solution",
        desc: "A service that provides a complete view of an organization's IT security posture.",
        icon: <Search size={28} />,
      },
      {
        title: "Resource Manager",
        desc: "A service that enables working with resources in the organization's solution as a group. Deploy, update, or delete all resources together.",
        icon: <Server size={28} />,
      },
    ],
  },
  {
    category: "Applications Security",
    items: [
      {
        title: "Web Application vulnerability scanning",
        desc: "A service that provides one-click vulnerability scanning for your web applications.",
        icon: <ShieldCheck size={28} />,
      },
      {
        title: "Web Application Firewall",
        desc: "The WAF in Azure Application Gateway aims to secure web apps from rising web-based threats such as SQL injection.",
        icon: <Lock size={28} />,
      },
      {
        title: "Application Insights",
        desc: "An extendable Application Performance Management (APM) program for web developers.",
        icon: <Activity size={28} />,
      },
    ],
  },
  {
    category: "Storage Security",
    items: [
      {
        title: "Role-Based Access Control (RBAC)",
        desc: "Mechanism for restricting access based on the need-to-know and least-privilege principles.",
        icon: <UserCheck size={28} />,
      },
      {
        title: "Encryption",
        desc: "A mechanism for protecting data transmitted across networks and at rest in storage.",
        icon: <Lock size={28} />,
      },
    ],
  },
  {
    category: "Network Security",
    items: [
      {
        title: "Virtual Network",
        desc: "Representing a client's cloud network. It is a logical isolation of its network fabric dedicated to your subscription.",
        icon: <Globe size={28} />,
      },
      {
        title: "VPN Gateway",
        desc: "A virtual network gateway sending encrypted traffic to a public connection.",
        icon: <Shield size={28} />,
      },
      {
        title: "Network Layer Controls",
        desc: "The act of controlling connectivity to and from individual devices or subnetworks.",
        icon: <Layout size={28} />,
      },
    ],
  },
  {
    category: "Backup and Disaster Recovery",
    items: [
      {
        title: "Site Recovery",
        desc: "A service that helps to orchestrate Backup, failover, and recovery of workloads and applications.",
        icon: <RefreshCcw size={28} />,
      },
      {
        title: "Virtual machine backup",
        desc: "A service that protects application data with minimal operating costs and zero capital investment.",
        icon: <Database size={28} />,
      },
    ],
  },
  {
    category: "Identity and Access Management",
    items: [
      {
        title: "Active Directory",
        desc: "An authentication repository that supports multi-tenant, cloud-based directory and multi-identity management services.",
        icon: <UserCheck size={28} />,
      },
      {
        title: "Multi-Factor Authentication",
        desc: "A security provision that utilizes several authentications and verification methods before accessing protected information.",
        icon: <ShieldCheck size={28} />,
      },
    ],
  },
];

const faqs = [
  {
    question: "What is Azure Security Service?",
    answer:
      "Azure Security Service is a suite of security features provided by Microsoft Azure to safeguard data and applications hosted on the cloud. It includes Azure Security Center, Azure Key Vault, and Azure Active Directory.",
  },
  {
    question:
      "How does Azure Security Service help protect against cyber threats?",
    answer:
      "Azure Security Service offers features such as threat detection, prevention, and response to protect against cyber threats. It also includes continuous monitoring of network traffic and analysis of security logs to identify potential risks.",
  },
  {
    question: "How does Azure Security Service help with compliance?",
    answer:
      "Azure Security Service includes compliance certifications such as HIPAA, PCI, and ISO, which help customers meet their regulatory requirements. It also offers compliance management and reporting features for auditing purposes.",
  },
  {
    question: "How can Azure Security Service benefit businesses?",
    answer:
      "Azure Security Service can benefit businesses by providing a secure and reliable platform for their applications and data, minimizing the risk of cyber-attacks and data breaches. It can also improve operational efficiency by automating security processes and reducing the need for manual intervention.",
  },
  {
    question: "Is Azure Security Service suitable for small businesses?",
    answer:
      "Yes, Azure Security Service can be suitable for small businesses. Azure Security Service offers a range of security tools and services that can help small businesses improve their security posture without incurring high costs.",
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

export default function AzureSecurityPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-azure">

      {/* Hero Header Band */}
      <section className="sv-hero-band">
        <div className="container">
          <nav className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Pages</span>
            <span className="sep">/</span>
            <span className="active">
              Azure Cloud Managed Security Services
            </span>
          </nav>
          <h1 className="sv-hero-h1">Azure Security Service</h1>
        </div>
      </section>

      {/* Hero Content Section */}
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
                Safeguard your data and applications with Azure's reliable
                security services.
              </motion.h2>
              <motion.p variants={fadeInUp} className="sv-hero-p">
                Azure is a cloud platform that supports various operating
                systems, languages, resources, and devices. As more businesses
                move to the cloud, security is crucial.
              </motion.p>
              <motion.div variants={fadeInUp} className="sv-hero-btn-wrap">
                <Link href="/contact" className="sv-btn-primary">
                  Get a free 30-minute consultation with a Professional Labs
                  expert.
                  <ArrowRight size={18} />
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
                  src="/illustrations/benefit-security.svg"
                  alt="Azure Security Illustration"
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

      {/* Importance Section */}
      <section className="sv-section-info">
        <div className="container">
          <div className="sv-info-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sv-info-card"
            >
              <h3 className="sv-h3">The Importance of Azure Cloud Security</h3>
              <p className="sv-p">
                Azure Cloud Security is essential for businesses because it
                provides a secure environment for storing and processing
                sensitive data and applications in the cloud. As more businesses
                move their operations to the cloud, the risk of cyber threats
                and attacks increases.
              </p>
              <p className="sv-p mt-4">
                By leveraging Azure Security Services, businesses can ensure
                that their operations are protected against potential security
                breaches, data loss, and unauthorized access, safeguarding their
                reputation and customer trust.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sv-info-card sv-dark-card"
            >
              <h3 className="sv-h3">Enhancing Cloud Security</h3>
              <p className="sv-p">
                Azure security tools are crucial for businesses because they
                provide comprehensive features to secure data and applications.
                These tools protect businesses against potential cyber threats
                and malware attacks.
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

      {/* Identity Protection Feature */}
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
              <h3 className="sv-h3">Azure AD Identity Protection</h3>
              <p className="sv-p">
                A feature that helps businesses safeguard their identities and
                detect potential identity-based risks in real time. It leverages
                machine learning algorithms to analyze user behaviors and detect
                anomalous patterns that may indicate suspicious activity. This
                enables businesses to mitigate potential risks and prevent
                security breaches proactively.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="sv-section-catalog">
        <div className="container">
          <div className="sv-catalog-head">
            <h2 className="sv-h2">Top Azure Managed Security Services</h2>
            <p className="sv-subtitle">
              Comprehensive security solutions categorized by your
              infrastructure needs
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
                expert. <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="sv-section-faq">
        <div className="container">
          <h2 className="sv-h2 text-center mb-16">
            Frequently Asked Questions
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
                      <div className="sv-faq-ainner">{faq.answer}</div>
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
