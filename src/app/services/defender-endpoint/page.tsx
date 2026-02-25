"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    icon: <Activity size={24} />,
  },
  {
    title: "Cloud security analytics",
    desc: "Microsoft uses big data analytics and device learning technologies to convert behavioral signals into threat detections, insights, and suggested countermeasures.",
    icon: <Cpu size={24} />,
  },
  {
    title: "Threat intelligence",
    desc: "Microsoft’s threat hunters and security teams deliver insights from threat intelligence gathered from partners and across the ecosystem. Defender for Endpoint uses threat intelligence to identify attacker tactics, methods, and procedures (TTPs) and produce alerts.",
    icon: <Target size={24} />,
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
    icon: <Zap size={24} />,
  },
  {
    title: "Monitoring and control",
    desc: "asset management, endpoint vulnerability assessments, application control, auditing, logging, and activity monitoring.",
    icon: <Eye size={24} />,
  },
  {
    title: "Reaction orchestration",
    desc: "consists of automated playbooks and remote manual action for remediating compromised endpoints, networks, and user accounts.",
    icon: <RefreshCcw size={24} />,
  },
  {
    title: "Deception technology",
    desc: "lures attackers to an ostensibly weak honeypot, limiting harm and obtaining valuable intelligence regarding attack strategies.",
    icon: <Search size={24} />,
  },
  {
    title: "Using network analytics",
    desc: "to detect lateral movement, suspect connections, and irregular login",
    icon: <Activity size={24} />,
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
      "Microsoft Defender for Persons is only accessible as part of a paid membership to the Microsoft 365(Opens in a new tab) cloud-based office service and comprehensively protects non-Windows devices. Microsoft’s antivirus software is available for a nominal membership cost on Mac and Android but not iOS.",
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
    <main className="def-page-root">
      <Header />

      {/* Hero Header Band */}
      <section className="def-hero-band">
        <div className="container">
          <nav className="def-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Pages</span>
            <span className="sep">/</span>
            <span className="active">Defender for Endpoint</span>
          </nav>
          <h1 className="def-hero-h1">Defender for Endpoint</h1>
        </div>
      </section>

      {/* Hero Content Section */}
      <section className="def-hero-main">
        <div className="container">
          <div className="def-hero-flex">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="def-hero-content"
            >
              <motion.h2 variants={fadeInUp} className="def-display-h2">
                Fix problems with installing Defender on endpoints.
              </motion.h2>

              <motion.div variants={fadeInUp} className="def-hero-lead">
                <strong></strong>
                <br />
                Get a free 30-minute consultation with a Professional Labs
                expert.
              </motion.div>
              <motion.div variants={fadeInUp} className="def-hero-btn-wrap">
                <Link href="/contact" className="def-btn-primary">
                  Get Endpoint Protection Now <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="def-hero-image"
            >
              <div className="def-img-frame">
                <Image
                  src="/illustrations/benefit-security.svg"
                  alt="Defender for Endpoint Illustration"
                  width={500}
                  height={400}
                  className="def-float-img"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="def-section-info">
        <motion.p
          variants={fadeInUp}
          className="def-hero-p max-w-5xl mx-auto px-6 text-center"
        >
          Microsoft provides businesses with an endpoint security platform that
          can identify, probe, and avert sophisticated attacks. Using several
          features of Microsoft Azure and Windows 10 enables companies to react
          quickly to security threats.
        </motion.p>
        <div className="container">
          <h2 className="def-h2 text-center mb-12">
            Microsoft Defender for Endpoint Technologies to Safeguard Business
            Networks:
          </h2>
          <div className="def-tech-grid">
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="def-tech-card"
              >
                <div className="def-tech-icon">{tech.icon}</div>
                <div className="def-tech-content">
                  <h4 className="def-h4">{tech.title}</h4>
                  <p className="def-p">{tech.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section className="def-section-focus">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="def-focus-box"
          >
            <div className="def-focus-text">
              <h3 className="def-h3">Defender for Endpoint</h3>
              <p className="def-p">
                Professional Labs Microsoft 365 Defender’s recently added
                Automatic investigation & response card summarises any great
                fixes. The security operations staff can check the card to see
                what needs approval and when.
              </p>
              <p className="def-p mt-4">
                It’s easy for the security staff to access the Action Center and
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
      <section className="def-section-analysis">
        <div className="container">
          <div className="def-analysis-header">
            <h2 className="def-h2">
              A Strengths and Limitations Analysis of Microsoft Defender for
              Endpoints
            </h2>
            <h3 className="def-h3 mt-4 text-defender">
              The pros of Microsoft Defender of Endpoint
            </h3>
          </div>
          <div className="def-pros-grid">
            {pros.map((pro, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="def-pro-item"
              >
                <div className="def-check-icon-wrap">
                  <CheckCircle2 size={22} className="text-defender" />
                </div>
                <span>{pro}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Labs Section */}
      <section className="def-section-prolabs">
        <div className="container">
          <div className="def-prolabs-header mb-12 flex flex-col items-center">
            <h3 className="def-h3 text-center mb-10 w-full">
              Microsoft Defender of Endpoint
            </h3>
            <h2 className="def-h2 mt-4">
              Professional Labs Endpoint Protection: Preventing, Detecting, and
              Protecting
            </h2>
          </div>
          <div className="def-prolabs-main">
            <div className="def-prolabs-text">
              <p className="def-p text-lg italic">
                Professional Labs is a robust security system that offers
                next-generation antivirus protection, automated incident
                response, and endpoint detection and response (EDR) security.
                With their “all in one” security concept, Professional Labs
                simplifies implementing a modern security toolkit. Further to
                traditional endpoint security, Professional Labs 360 also
                provides network analytics, UEBA, and deception technology.
              </p>
              <h4 className="def-h4 mt-12 mb-6">
                The Professional Labs Defender for Endpoint platform includes
                the following features:
              </h4>
              <div className="def-pro-features">
                {proLabsFeatures.map((f, i) => (
                  <div key={i} className="def-pro-f-card">
                    <div className="def-pro-f-icon">{f.icon}</div>
                    <div className="def-pro-f-body">
                      <strong>{f.title}</strong> – {f.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <motion.div variants={fadeInUp} className="def-btn-center-wrap">
        <Link href="/contact" className="def-btn-primary">
          Get Endpoint Protection Now <ArrowRight size={18} />
        </Link>
      </motion.div>

      {/* FAQ Section */}
      <section className="def-section-faq">
        <div className="container">
          <h2 className="def-h2 text-center mb-20">FAQ’s</h2>
          <div className="def-faq-wrap">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`def-faq-item ${openFaq === index ? "def-active" : ""}`}
              >
                <button
                  className="def-faq-q"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="def-faq-qtext">{faq.question}</span>
                  <span className="def-faq-ico">
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
                      className="def-faq-a"
                    >
                      <div className="def-faq-ainner">
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

      <Footer />

      <style jsx global>{`
        .def-page-root {
          --defender: #0078d4;
          --def-ink: #002b4d;
          --def-text: #323130;
          --def-gray: #605e5c;
          --def-bg: #f3f2f1;
          background: #fff;
          color: var(--def-text);
          font-family: inherit;
        }

        .def-hero-band {
          background: linear-gradient(135deg, #001a33 0%, #004d99 100%);
          padding: 140px 0 60px;
          color: white;
        }

        .def-breadcrumb {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 25px;
        }

        .def-breadcrumb .sep {
          opacity: 0.3;
        }
        .def-breadcrumb .active {
          color: white;
          font-weight: 600;
        }
        .def-breadcrumb a:hover {
          color: var(--defender);
        }

        .def-hero-h1 {
          font-size: clamp(2.5rem, 6vw, 4.2rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .def-hero-main {
          padding: 100px 0;
          background: #fff;
        }

        .def-hero-flex {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 70px;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .def-hero-flex {
            grid-template-columns: 1fr;
            gap: 50px;
            text-align: center;
          }
          .def-hero-btn-wrap {
            display: flex;
            justify-content: center;
          }
        }

        .def-display-h2 {
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 800;
          color: var(--def-ink);
          line-height: 1.2;
          margin-bottom: 28px;
          letter-spacing: -0.02em;
        }

        .def-hero-p {
          font-size: 1.25rem;
          color: var(--def-gray);
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .def-hero-lead {
          font-size: 1.1rem;
          color: var(--defender);
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .def-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: var(--defender);
          color: white;
          padding: 20px 45px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1.1rem;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(0, 120, 212, 0.25);
          transition: all 0.3s;
        }

        .def-btn-primary:hover {
          transform: translateY(-4px);
          background: #005a9e;
          box-shadow: 0 15px 40px rgba(0, 120, 212, 0.35);
        }

        .def-float-img {
          animation: defFloat 6s ease-in-out infinite;
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.08));
        }

        @keyframes defFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .def-section-info {
          padding: 100px 0;
          background: var(--def-bg);
        }
        .def-tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        .def-tech-card {
          background: #fff;
          padding: 40px;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
          border: 1px solid #e1dfdd;
          transition: transform 0.3s;
        }
        .def-tech-card:hover {
          transform: translateY(-5px);
        }
        .def-tech-icon {
          width: 50px;
          height: 50px;
          background: #f0f7ff;
          color: var(--defender);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .def-h4 {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--def-ink);
        }
        .def-p {
          line-height: 1.7;
          font-size: 1.05rem;
        }

        .def-section-focus {
          padding: 100px 0;
        }
        .def-focus-box {
          background: #fff;
          border: 1px solid #e1dfdd;
          border-radius: 32px;
          padding: 60px;
          max-width: 1000px;
          margin: 0 auto;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.03);
        }
        .def-h3 {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--def-ink);
        }
        .text-defender {
          color: var(--defender);
        }

        .def-section-analysis {
          padding: 100px 0;
          background: var(--def-ink);
          color: #fff;
        }
        .def-analysis-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .def-h2 {
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 800;
          line-height: 1.2;
          text-align: center;
        }
        .def-pros-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 20px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .def-pro-item {
          background: rgba(255, 255, 255, 0.05);
          padding: 20px 25px;
          border-radius: 12px;
          display: flex;
          align-items: flex-start;
          gap: 15px;
          font-size: 1.05rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: background 0.3s;
        }
        .def-check-icon-wrap {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          margin-top: 3px;
        }
        .def-pro-item:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .def-section-prolabs {
          padding: 120px 0;
        }
        .def-prolabs-text {
          max-width: 900px;
          margin: 0 auto;
        }
        .def-pro-features {
          display: grid;
          gap: 20px;
        }
        .def-pro-f-card {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          padding: 25px;
          background: var(--def-bg);
          border-radius: 16px;
        }
        .def-pro-f-icon {
          width: 48px;
          height: 48px;
          background: #fff;
          color: var(--defender);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }
        .def-pro-f-body {
          line-height: 1.6;
          font-size: 1.05rem;
          color: var(--def-gray);
        }
        .def-pro-f-body strong {
          color: var(--def-ink);
          font-weight: 800;
        }

        .def-section-faq {
          padding: 80px 0 120px;
          background: var(--def-bg);
        }
        .def-faq-wrap {
          max-width: 900px;
          margin: 0 auto;
        }
        .def-faq-item {
          background: #fff;
          border-radius: 20px;
          margin-bottom: 16px;
          transition: all 0.3s;
          overflow: hidden;
        }
        .def-faq-item.def-active {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
        }
        .def-faq-q {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 30px 40px;
          border: none;
          background: none;
          cursor: pointer;
          text-align: left;
        }
        .def-faq-qtext {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--def-ink);
        }
        .def-faq-ico {
          color: var(--defender);
        }
        .def-faq-a {
          padding: 0 40px 35px;
          color: var(--def-gray);
          font-size: 1.1rem;
          line-height: 1.8;
        }
        .def-faq-ainner {
          border-top: 1px solid var(--def-bg);
          padding-top: 20px;
        }

        .def-section-cta {
          padding: 100px 0;
          background: #fff;
        }
        .def-cta-banner {
          background: linear-gradient(
            135deg,
            var(--defender) 0%,
            var(--def-ink) 100%
          );
          padding: 80px 40px;
          border-radius: 40px;
          text-align: center;
          box-shadow: 0 30px 60px rgba(0, 77, 153, 0.2);
        }
        .def-btn-white {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #fff;
          color: var(--defender);
          padding: 22px 60px;
          border-radius: 100px;
          font-weight: 800;
          font-size: 1.2rem;
          text-decoration: none;
          transition: all 0.3s;
        }
        .def-btn-white:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 768px) {
          .def-hero-h1 {
            font-size: 2.8rem;
          }
          .def-display-h2 {
            font-size: 1.8rem;
          }
          .def-faq-q {
            padding: 25px;
          }
          .def-faq-qtext {
            font-size: 1.1rem;
          }
          .def-pros-grid {
            grid-template-columns: 1fr;
          }
        }
        .def-btn-center-wrap {
          display: flex;
          justify-content: center;
          padding: 40px 0;
          width: 100%;
        }
      `}</style>
    </main>
  );
}
