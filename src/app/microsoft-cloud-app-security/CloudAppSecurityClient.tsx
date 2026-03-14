"use client";

import {
  Shield,
  Cloud,
  Lock,
  Activity,
  Eye,
  Globe,
  Zap,
  Target,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Search,
  Users,
  BarChart3,
  FileCheck,
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

/* ── SASE Goals ── */
const saseGoals = [
  {
    title: "Streamlining",
    desc: "Improve productivity by integrating security tools and simplifying cloud security management.",
    icon: <Zap size={28} />,
  },
  {
    title: "Security",
    desc: "Identify and prevent modern cyber threats targeting cloud applications and SaaS platforms.",
    icon: <ShieldCheck size={28} />,
  },
  {
    title: "Scalability",
    desc: "Enable secure growth while supporting expanding cloud environments and distributed workforces.",
    icon: <Target size={28} />,
  },
  {
    title: "Support",
    desc: "Protect long-term cloud investments through continuous monitoring and expert security guidance.",
    icon: <Activity size={28} />,
  },
];

/* ── Key Capabilities ── */
const capabilities = [
  {
    title: "Visibility into cloud access",
    desc: "Identify who has access to specific applications and data.",
    icon: <Eye size={28} />,
  },
  {
    title: "User behavior monitoring",
    desc: "Detect suspicious activities and potential threats.",
    icon: <Users size={28} />,
  },
  {
    title: "Data classification and protection",
    desc: "Secure sensitive information using policy-based controls.",
    icon: <Lock size={28} />,
  },
  {
    title: "Compliance monitoring",
    desc: "Maintain regulatory compliance and security governance.",
    icon: <FileCheck size={28} />,
  },
];

/* ── FAQ Data ── */
const faqs = [
  {
    question: "What is Microsoft Cloud App Security?",
    answer:
      "Microsoft Cloud App Security, now known as Microsoft Defender for Cloud Apps, is a Cloud Access Security Broker (CASB) that helps organizations protect data, detect cyber threats, and control access across cloud applications. It integrates with services such as Amazon Web Services, Google Workspace, Google Cloud, and Dropbox to secure SaaS environments.",
  },
  {
    question: "Are Microsoft apps secure?",
    answer:
      "Microsoft cloud applications include built-in security features such as identity protection, threat detection, and compliance controls. However, organizations often enhance security using tools like Microsoft Defender for Cloud Apps to gain deeper visibility, threat monitoring, and policy enforcement.",
  },
  {
    question: "How do I set up Microsoft Cloud App Security?",
    answer:
      "Microsoft Cloud App Security is typically deployed by connecting cloud applications, configuring security policies, enabling activity monitoring, and integrating with identity systems like Azure Active Directory. Many organizations implement the solution with help from cloud security specialists.",
  },
  {
    question:
      "What is the difference between Defender for Cloud and Cloud App Security?",
    answer:
      "Microsoft Defender for Cloud focuses on protecting cloud infrastructure and workloads, while Microsoft Defender for Cloud Apps (formerly Cloud App Security) protects SaaS applications by monitoring user activity, detecting threats, and enforcing data protection policies.",
  },
];

export default function CloudAppSecurityClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-mcas">
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
            <span className="active">Microsoft Cloud App Security</span>
          </nav>
          <h1 className="sv-hero-h1">
            Microsoft Cloud App Security Services
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
                Secure cloud applications and protect sensitive data with
                Microsoft Cloud App Security, now part of Microsoft Defender for
                Cloud Apps.
              </motion.p>
              <motion.p variants={fadeInUp} className="sv-hero-p">
                This Cloud Access Security Broker (CASB) solution helps
                organizations monitor cloud activity, detect cyber threats,
                enforce security policies, and control access across SaaS
                applications and cloud platforms.
              </motion.p>
              <motion.p variants={fadeInUp} className="sv-hero-p">
                Microsoft Cloud App Security integrates with widely used
                platforms such as Amazon Web Services, Google Workspace, Google
                Cloud, and Dropbox, helping organizations maintain strong cloud
                security across hybrid and multi-cloud environments.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="sv-hero-btn-wrap sv-center"
              >
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
                  src="/cloud_app_security_hero.png"
                  alt="Microsoft Cloud App Security dashboard protecting SaaS applications"
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
          MODERN CLOUD PROTECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-info">
        <div className="container">
          <div className="sv-info-header text-center mb-16">
            <h2 className="sv-h2">
              Microsoft Cloud App Security for Modern Cloud Protection
            </h2>
            <div className="flex justify-center">
              <p className="sv-lead mt-6 max-w-4xl mx-auto">
                Modern organizations require secure cloud architectures to
                protect data, users, and applications as digital environments
                expand.
              </p>
            </div>
          </div>
          <div className="sv-info-grid">
            <div className="sv-info-card">
              <p className="sv-p">
                To address these challenges, businesses increasingly adopt
                Secure Access Service Edge (SASE) architectures that combine
                networking and security capabilities for cloud-first
                environments.
              </p>
            </div>
            <div className="sv-info-card">
              <p className="sv-p">
                Choosing the right cloud security platform is important, but the
                security expertise behind the platform is equally critical.
                Organizations need experienced security partners who can design,
                implement, and optimize cloud protection strategies as
                infrastructure evolves.
              </p>
            </div>
            <div className="sv-info-card">
              <p className="sv-p">
                Cloud computing enables flexibility and remote collaboration for
                employees and IT teams. However, it also introduces new security
                risks including shadow IT, unauthorized access, and data
                exposure.
              </p>
            </div>
            <div className="sv-info-card">
              <p className="sv-p">
                To fully benefit from cloud applications, organizations must
                maintain the right balance between user accessibility and data
                protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          KEY CAPABILITIES
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
                Key Capabilities of Microsoft Cloud App Security
              </h2>
              <p className="sv-p mb-6">
                The Microsoft Cloud App Security platform enables organizations
                to monitor and protect cloud application environments through
                advanced visibility and control.
              </p>
              <p className="sv-p mb-6">Key capabilities include:</p>
              <ul className="sv-check-list">
                {capabilities.map((cap, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={18} />{" "}
                    <strong>{cap.title}</strong> – {cap.desc}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SASE OBJECTIVES
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-grid">
        <div className="container">
          <h2 className="sv-h2 text-center mb-16">
            Supporting Secure Access Service Edge (SASE) Goals
          </h2>
          <p className="sv-subtitle text-center max-w-4xl mx-auto mb-12">
            Microsoft Cloud App Security helps organizations achieve the four
            key goals of a Secure Access Service Edge (SASE) architecture.
          </p>
          <div className="sv-grid-layout">
            {saseGoals.map((goal, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="sv-grid-card"
              >
                <div className="sv-grid-icon">{goal.icon}</div>
                <div className="sv-grid-body">
                  <h5>{goal.title}</h5>
                  <p>{goal.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHY ORGANIZATIONS CHOOSE MCAS
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-benefits">
        <div className="container">
          <div className="sv-benefits-head text-center mb-12">
            <h2 className="sv-h2 mb-8">
              Why Organizations Choose Microsoft Cloud App Security
            </h2>
          </div>

          <div className="sv-benefits-grid">
            <div className="sv-benefit-card dark">
              <p className="sv-p">
                Many security tools can replicate individual CASB functions, but
                replicating the full capability of Microsoft Cloud App Security
                often requires combining multiple solutions.
              </p>
              <p className="sv-p mt-4">
                Using fragmented tools can create security gaps and inconsistent
                policy enforcement across applications.
              </p>
            </div>
            <div className="sv-benefit-card blue">
              <p className="sv-p">
                Microsoft Cloud App Security provides a unified platform that
                integrates with other Microsoft security solutions, delivering
                centralized visibility, threat detection, and policy management
                across the cloud environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ACROSS THOUSANDS OF APPLICATIONS
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-info bg-white">
        <div className="container">
          <div className="sv-info-header text-center mb-12">
            <h2 className="sv-h2">
              Microsoft Cloud App Security Across Thousands of Applications
            </h2>
          </div>
          <div className="flex justify-center">
            <p className="sv-subtitle text-center max-w-4xl">
              Microsoft Cloud App Security is designed to monitor and analyze
              activity across more than 16,000 cloud applications.
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <p className="sv-p text-center max-w-4xl">
              When connected to supported applications, the platform analyzes:
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <ul className="sv-check-list max-w-4xl">
              <li>
                <CheckCircle2 size={18} /> Application usage patterns
              </li>
              <li>
                <CheckCircle2 size={18} /> User access behavior
              </li>
              <li>
                <CheckCircle2 size={18} /> Security risks and anomalies
              </li>
            </ul>
          </div>
          <div className="flex justify-center mt-6">
            <p className="sv-p text-center max-w-4xl">
              It can also analyze proxy server logs, giving security teams
              deeper visibility into cloud activity and potential threats.
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <p className="sv-p text-center max-w-4xl">
              This comprehensive monitoring provides organizations with
              actionable insights into how cloud applications are being used
              across the enterprise.
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <p className="sv-subtitle text-center max-w-4xl">
              <strong>
                Future-proof your cloud security strategy by implementing strong
                protection today.
              </strong>
            </p>
          </div>
        </div>
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="sv-hero-btn-wrap sv-center"
          style={{ marginTop: "40px" }}
        >
          <Link href="/contact" className="sv-btn-primary">
            Get a free 30-minute consultation with a Professional Labs expert{" "}
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FAQ SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-faq">
        <div className="container">
          <h2 className="sv-h2 text-center mb-20">
            Frequently Asked Questions About Microsoft Cloud App Security
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
