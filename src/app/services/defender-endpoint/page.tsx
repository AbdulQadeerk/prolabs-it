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
  Terminal,
  HelpCircle,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const technologies = [
  {
    title: "Endpoint behavioral sensors",
    desc: "capture and process behavioral signals straight from the Windows 10 OS. These sensors transmit this information to an isolated and private cloud instance of Microsoft Defender for Endpoint.",
    icon: <Activity size={28} />,
  },
  {
    title: "Cloud security analytics",
    desc: "Microsoft uses big data analytics and device learning technologies to convert behavioral signals into threat detections, insights, and suggested countermeasures.",
    icon: <Cpu size={28} />,
  },
  {
    title: "Threat intelligence",
    desc: "Microsoft's threat hunters and security teams deliver insights from threat intelligence gathered from partners and across the ecosystem. Defender for Endpoint uses threat intelligence to identify attacker tactics, methods, and procedures (TTPs) and produce alerts.",
    icon: <Target size={28} />,
  },
];

const pros = [
  "Basic edition is free on all Windows devices.",
  "Compatibility with numerous endpoint platforms, including Windows 10, Windows Server, Linux, macOS, iOS, and Android.",
  "Several Microsoft applications, including Exchange Online, SharePoint, Microsoft Teams, OneDrive, Azure Active Directory (AD), and Azure Identities, are protected by a single license.",
  "Capable of identifying indicators of compromise (IoC) based on MITRE definitions and mapped to the MITRE ATT&CK knowledge base.",
  "Utilizes data collected from billions of Office 365 application signals.",
  "Generates a graphical timeline of an assault by merging all data associated with the same attack.",
  "Enhanced threat investigation via the KQL query language",
  "180 days of retention for log data",
];

const proLabsFeatures = [
  {
    title: "Zero-day protection",
    desc: "using User and Entity Behavior Analytics (UEBA) to detect and prevent unknown threats.",
    icon: <Zap size={28} />,
  },
  {
    title: "Monitoring and control",
    desc: "asset management, endpoint vulnerability assessments, application control, auditing, logging, and activity monitoring.",
    icon: <Eye size={28} />,
  },
  {
    title: "Reaction orchestration",
    desc: "consists of automated playbooks and remote manual action for remediating compromised endpoints, networks, and user accounts.",
    icon: <RefreshCcw size={28} />,
  },
  {
    title: "Deception technology",
    desc: "lures attackers to an ostensibly weak honeypot, limiting harm and obtaining valuable intelligence regarding attack strategies.",
    icon: <Search size={28} />,
  },
  {
    title: "Using network analytics",
    desc: "to detect lateral movement, suspect connections, and irregular login",
    icon: <Activity size={28} />,
  },
];

const faqs = [
  {
    question: "What does Defender for Endpoint do?",
    answer:
      "Microsoft Defender for Endpoint is an enterprise endpoint security platform that helps networks prevent, detect, investigate, and respond to advanced threats. Microsoft Defender for Endpoint provides best-in-class endpoint security across Windows, macOS, Linux, Android, iOS, and network devices, enabling your enterprise to quickly prevent attacks, scale security resources, and evolve defenses.",
  },
  {
    question:
      "What is the difference between Microsoft Defender and Defender for Endpoint?",
    answer:
      "Even when a non-Microsoft Antivirus is running, your Windows device and data are protected from viruses, ransomware, trojans, and other malware by Windows Security, which includes Microsoft Defender Antivirus. \n\nDefender for Endpoint is an endpoint security system that provides vulnerability management, endpoint protection, endpoint detection and response, mobile threat defense, and managed services through a unified platform.",
  },
  {
    question: "Is Microsoft Defender for Endpoint free?",
    answer:
      "Microsoft Defender for Persons is only accessible as part of a paid membership to the Microsoft 365(Opens in a new tab) cloud-based office service and comprehensively protects non-Windows devices. Microsoft's antivirus software is available for a nominal membership cost on Mac and Android but not iOS.",
  },
  {
    question: "Is Microsoft Defender for Endpoint an antivirus?",
    answer:
      "Microsoft Defender Antivirus is a cutting-edge antivirus solution. When coupled with additional Defender for Endpoint features like endpoint detection and response and automated investigation and remediation, you get even more comprehensive security.",
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

export default function DefenderEndpointPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-def">

      {/* Hero Header Band */}
      <section className="sv-hero-band">
        <div className="container">
          <nav className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Pages</span>
            <span className="sep">/</span>
            <span className="active">Defender for Endpoint</span>
          </nav>
          <h1 className="sv-hero-h1">Defender for Endpoint</h1>
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
                Fix problems with installing Defender on endpoints.
              </motion.h2>

              <motion.div variants={fadeInUp} className="sv-hero-btn-wrap">
                <Link href="/contact" className="sv-btn-primary">
                  Get a free 30-minute consultation with a Professional Labs
                  expert. <ArrowRight size={18} />
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
                  alt="Defender for Endpoint Illustration"
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

      {/* Technologies Section */}
      <section className="sv-section-info">
        <div className="flex justify-center">
          <motion.p
            variants={fadeInUp}
            className="sv-hero-p max-w-5xl mx-auto px-6 text-center"
          >
            Microsoft provides businesses with an endpoint security platform
            that can identify, probe, and avert sophisticated attacks. Using
            several features of Microsoft Azure and Windows 10 enables companies
            to react quickly to security threats.
          </motion.p>
        </div>
        <div className="container">
          <h2 className="sv-h2 text-center mb-12">
            Microsoft Defender for Endpoint Technologies to Safeguard Business
            Networks:
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
                  <h4 className="sv-h4">{tech.title}</h4>
                  <p className="sv-p">{tech.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section className="sv-section-focus">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sv-focus-box"
          >
            <div className="sv-focus-text">
              <h3 className="sv-h3">Defender for Endpoint</h3>
              <p className="sv-p">
                Professional Labs Microsoft 365 Defender's recently added
                Automatic investigation & response card summarises any great
                fixes. The security operations staff can check the card to see
                what needs approval and when.
              </p>
              <p className="sv-p mt-4">
                It's easy for the security staff to access the Action Center and
                make the necessary corrections. The Complete Automation page can
                be accessed via a link on the Automated investigation and
                response card. Because of this, the security operations team can
                handle alarms and carry out remediation procedures efficiently
                and quickly.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Analysis Section */}
      <section className="sv-section-analysis">
        <div className="container">
          <div className="sv-analysis-header">
            <h2 className="sv-h2">
              A Strengths and Limitations Analysis of Microsoft Defender for
              Endpoints
            </h2>
            <h3 className="sv-h3 mt-4 text-accent">
              The pros of Microsoft Defender of Endpoint
            </h3>
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

      {/* Pro Labs Section */}
      <section className="sv-section-prolabs">
        <div className="container">
          <div className="sv-prolabs-header mb-12 flex flex-col items-center">
            <h3 className="sv-h3 text-center mb-10 w-full">
              Microsoft Defender of Endpoint
            </h3>
            <h2 className="sv-h3 mt-4">
              Professional Labs Endpoint Protection: Preventing, Detecting, and
              Protecting
            </h2>
          </div>
          <div className="sv-prolabs-main">
            <div className="sv-prolabs-text">
              <p className="sv-p text-lg italic">
                Professional Labs is a robust security system that offers
                next-generation antivirus protection, automated incident
                response, and endpoint detection and response (EDR) security.
                With their "all in one" security concept, Professional Labs
                simplifies implementing a modern security toolkit. Further to
                traditional endpoint security, Professional Labs 360 also
                provides network analytics, UEBA, and deception technology.
              </p>
              <h4 className="sv-h4 mt-12 mb-6">
                The Professional Labs Defender for Endpoint platform includes
                the following features:
              </h4>
              <div className="sv-pro-features">
                {proLabsFeatures.map((f, i) => (
                  <div key={i} className="sv-pro-f-card">
                    <div className="sv-pro-f-icon">{f.icon}</div>
                    <div className="sv-pro-f-body">
                      <strong>{f.title}</strong> – {f.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <motion.div variants={fadeInUp} className="sv-btn-center-wrap">
        <Link href="/contact" className="sv-btn-primary">
          Get a free 30-minute consultation with a Professional Labs expert.{" "}
          <ArrowRight size={18} />
        </Link>
      </motion.div>

      {/* FAQ Section */}
      <section className="sv-section-faq">
        <div className="container">
          <h2 className="sv-h2 text-center mb-20">FAQ's</h2>
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

      {/* Final CTA */}

    </main>
  );
}
