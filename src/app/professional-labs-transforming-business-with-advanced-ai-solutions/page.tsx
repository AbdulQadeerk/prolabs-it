"use client";

import {
  ShieldCheck,
  Target,
  Zap,
  BarChart3,
  Users,
  Lock,
  CheckCircle2,
  AlertTriangle,
  Shield,
  Globe,
  Award,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Cloud,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is a managed SOC?",
    answer:
      "SOC as a Service (also known as Managed SOC) is a subscription service that allows businesses to \"outsource\" their SOC service operations to a third party. Managed SOC providers are third-party cybersecurity specialists that keep tabs on a business's IT infrastructure, endpoints, software, and data for potential security flaws. They're capable of finding threats before they even happen, responding quickly to any alerts they get, and fixing any problems that arise.",
  },
  {
    question: "What are the services in SOC?",
    answer:
      "As a managed service, SOC as a service keeps an eye on security around the clock, utilizing automation and data science to increase the speed of detection and the reliability of alarms. Vulnerability evaluations, threat surveillance, and incident responses are all part of a security operations center (SOC) as a service.",
  },
  {
    question: "How does a SOC develop?",
    answer:
      "There are five main stages in creating a SOC:\n1. Planning the SOC.\n2. Designing the SOC.\n3. Building the SOC.\n4. Operating the SOC.\n5. Reviewing the SOC.",
  },
  {
    question: "What is the role of the SOC Manager?",
    answer:
      "A SOC manager is in charge of the security operations team and reports to the CIO (CISO). They are in charge of the team, give technical advice, and run things the following ways: Oversees how SOC staff are hired, trained, and evaluated. Makes things happen.",
  },
  {
    question: "Is a SOC MSP?",
    answer:
      "A committed SOC is a service that gives an MSP access to a private network of experienced security analysts that they can use to add to or grow their new rosters. In this model, security experts are equipped to work with the processes and security tools that your company already has.",
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

export default function ManagedSOCPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-soc">
      {/* Hero Header Band */}
      <section className="sv-hero-band">
        <div className="container">
          <nav className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Pages</span>
            <span className="sep">/</span>
            <span className="active">Transforming Business with Advanced AI Solutions</span>
          </nav>
          <h1 className="sv-hero-h1">Transforming Business with Advanced AI Solutions</h1>
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
              className="sv-hero-text"
            >
              <motion.h2 variants={fadeInUp} className="sv-display-h2">Transforming Business with Advanced AI Solutions</motion.h2>
              <motion.p variants={fadeInUp} className="sv-lead">
                Professional Labs is a completely managed service provided by
                security professionals that identify and respond to intrusions
                on your PCs, servers, networks, cloud security, email accounts,
                and more.
              </motion.p>
              <motion.p variants={fadeInUp} className="sv-body-text">
                Managed SOC Services assist businesses in detecting, preventing,
                and responding to IT infrastructure risks. Professional Labs,
                one of the leading managed SOC providers, has provided real-time
                monitoring, proactive prevention, efficient management,
                immediate managed detection, and rapid reaction to security
                problems of varying complexity since the year 1997.
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
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="sv-hero-visual"
            >
              <div className="sv-visual-container">
                <Image
                  src="/managed_soc_hero.png"
                  alt="SOC Operations Dashboard"
                  width={550}
                  height={450}
                  className="sv-float-img"
                  priority
                />
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="sv-status-card"
                >
                  <div className="sv-status-icon">
                    <ShieldCheck size={28} />
                  </div>
                  <div className="sv-status-info">
                    <strong>24/7 Monitoring</strong>
                    <span>Live Protection Active</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="sv-why-section">
        <div className="container">
          <div className="sv-section-header">
            <h2 className="sv-h2">
              Why Choose Professional Labs for your Managed SOC Service
            </h2>
            <p className="sv-subtitle">
              The goal of Professional Labs, a Managed SOC provider, is to
              assist companies of all sizes in enhancing their security
              operations center. Our services are more capable of safeguarding
              assets than any internal SOC since we have a team of cybersecurity
              experts.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="sv-features-grid"
          >
            {[
              {
                icon: <Award size={28} />,
                text: "15+ years of experience in cybersecurity.",
              },
              {
                icon: <Users size={28} />,
                text: "24/7, India/UAE-based experience SOC team.",
              },
              {
                icon: <Cloud size={28} />,
                text: "A cloud-centric MSSP, based on the Prevent – Manage – Detect – Respond model.",
              },
              {
                icon: <Target size={28} />,
                text: "Professional Labs Cyber Security Team Proactively gathers threat intelligence data 24×7",
              },
              {
                icon: <Zap size={28} />,
                text: "Faster incident response with cutting-edge tools",
              },
              {
                icon: <BarChart3 size={28} />,
                text: "Risks are mitigated via Machine Learning and behavior analysis alerts",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="sv-feature-card"
              >
                <div className="sv-feature-icon">{f.icon}</div>
                <p className="sv-feature-text">{f.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="sv-pills-row">
            <div className="sv-pill">
              <CheckCircle2 size={18} />
              Pro Laboratories Cyber Security Champions have an insatiable zeal.
            </div>
            <div className="sv-pill">
              <CheckCircle2 size={18} />
              We provide MDR, XDR, as well as vulnerability assessment
              solutions.
            </div>
            <div className="sv-pill">
              <CheckCircle2 size={18} />
              Microsoft gold partners with Microsoft-certified Azure experts.
            </div>
          </div>
        </div>
      </section>

      {/* Threat Detection Section */}
      <section className="sv-dark-section">
        <div className="container">
          <div className="sv-dark-grid">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="sv-dark-visual"
            >
              <div className="sv-monitor-wrapper">
                <Image
                  src="/managed_soc_hero.png"
                  alt="Cybersecurity Event Dashboard"
                  width={600}
                  height={400}
                  className="sv-monitor-img"
                />
              </div>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="sv-dark-text"
            >
              <motion.h2 variants={fadeInUp} className="sv-dark-h2">
                Security Threat Detection
              </motion.h2>
              <motion.p variants={fadeInUp} className="sv-dark-p">
                Stay one step ahead of identified and undiscovered cyber attacks
                and stop them in their tracks with AI-powered 24/7 threat
                prevention, detection, and response capabilities. Utilize
                endpoint management and surveillance capabilities to protect all
                devices in your environments against endpoint assaults.
              </motion.p>
              <motion.div variants={fadeInUp} className="sv-stats-row">
                <div className="sv-stat-item">
                  <div className="sv-stat-val">AI</div>
                  <div className="sv-stat-label">Powered</div>
                </div>
                <div className="sv-stat-item">
                  <div className="sv-stat-val">24/7</div>
                  <div className="sv-stat-label">Monitoring</div>
                </div>
                <div className="sv-stat-item">
                  <div className="sv-stat-val">MDR</div>
                  <div className="sv-stat-label">Enterprise</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Needs Management Section */}
      <section className="sv-needs-section">
        <div className="container">
          <div className="sv-needs-grid">
            <div className="sv-needs-left">
              <h2 className="sv-h2">
                Customer's Managed SOC Needs that We Address
              </h2>
              <p className="sv-body-text">
                Professional Labs, a managed SOC as a service solution provider
                with 15 years of experience in cybersecurity, customizes its
                solution for each client. Our customers span healthcare,
                manufacturing, banking, retail, and eCommerce.
              </p>
              <div className="sv-industry-tags">
                {[
                  "Healthcare",
                  "Manufacturing",
                  "Banking",
                  "Retail",
                  "eCommerce",
                ].map((tag) => (
                  <span key={tag} className="sv-industry-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="sv-needs-right">
              <div className="sv-mssp-box">
                <h4 className="sv-mssp-title">As an MSSP, we address:</h4>
                <ul className="sv-check-list-pill">
                  <li>
                    Sufficient security coverage across diverse IT environments.
                  </li>
                  <li>
                    Protection against real-time nontargeted and APT threats.
                  </li>
                  <li>
                    Compliance with HIPAA, PCI DSS, and other global standards.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions Grid */}
      <section className="sv-values-section">
        <div className="container">
          <div className="sv-section-header text-center">
            <h2 className="sv-h2">Value Propositions</h2>
            <p className="sv-subtitle">
              Why you should use Security Operation Center (Managed SOC) Service
            </p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="sv-values-grid"
          >
            {[
              {
                icon: <Shield size={32} />,
                title: "24/7 Monitoring",
                desc: "Gain highest level of protection with round-the-clock surveillance.",
              },
              {
                icon: <Zap size={32} />,
                title: "Incident Response",
                desc: "Faster incident response and prevention to minimize disruption.",
              },
              {
                icon: <AlertTriangle size={32} />,
                title: "Avoid Loss",
                desc: "Prevent financial loss as a result of a data breach with proactive defense.",
              },
              {
                icon: <Globe size={32} />,
                title: "Gain Trust",
                desc: "Gain trust and improve work relationships with your clients and partners.",
              },
            ].map((v, i) => (
              <motion.div key={i} variants={fadeInUp} className="sv-value-card">
                <div className="sv-value-icon">{v.icon}</div>
                <h3 className="sv-value-title">{v.title}</h3>
                <p className="sv-value-desc">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Compliance & Consultation */}
      <section className="sv-consult-section">
        <div className="container text-center">
          <h2 className="sv-h2">Compliance & Consultation</h2>
          <p className="sv-subtitle mx-auto" style={{ maxWidth: "800px" }}>
            Learn how to maximize your company's technological and financial
            potential with a free consultation from Professional Labs Managed
            SOC Experts.
          </p>
          <div className="sv-compliance-strip">
            <span className="sv-comp-item">HIPAA</span>
            <span className="sv-comp-item">PCI DSS</span>
            <span className="sv-comp-item">ISO 27001</span>
            <span className="sv-comp-item">SOC 2</span>
          </div>
          <div className="sv-consult-cta">
            <Link href="/contact" className="sv-btn-primary sv-btn-large">
              Book a Free 30-Minute Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="sv-section-faq">
        <div className="container">
          <h2 className="sv-h2 text-center mb-12">
            FAQ's For Managed SOC Services
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
                    {openFaq === index ? <ChevronUp /> : <ChevronDown />}
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
                          <p key={i}>{line}</p>
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
