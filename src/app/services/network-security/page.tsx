"use client";

import {
  Shield,
  ShieldCheck,
  Zap,
  Activity,
  Lock,
  Globe,
  Search,
  Wifi,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle2,
  Eye,
  Users,
  BookOpen,
  Server,
  Key,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const services = [
  {
    title: "Network Assessment & Auditing",
    overview:
      "Professional Labs conducts thorough assessments and audits of your network infrastructure to identify vulnerabilities and areas for enhancement.",
    detail:
      "Our evaluations cover current network configurations, security risks, and provide recommendations for improvements and optimizations.",
    icon: <Search size={28} />,
  },
  {
    title: "Firewall Implementation",
    overview:
      "We specialize in customizing and implementing firewalls to protect your network against unauthorized access and cyber threats.",
    detail:
      "We manage the entire process, from firewall selection to deployment, ensuring it aligns with your unique security requirements.",
    icon: <Shield size={28} />,
  },
  {
    title: "Intrusion Detection & Prevention",
    overview:
      "Our services include setting up advanced intrusion detection and prevention systems to monitor and defend your network.",
    detail:
      "These systems are adept at identifying and countering potential intrusions in real time, keeping your data safe from malicious activities.",
    icon: <Activity size={28} />,
  },
  {
    title: "Data Encryption & Privacy",
    overview:
      "At Professional Labs, we prioritize the confidentiality and integrity of your data through state-of-the-art encryption technologies.",
    detail:
      "Our services range from encrypting communication channels to safeguarding sensitive data stored on your servers and in databases.",
    icon: <Lock size={28} />,
  },
  {
    title: "Secure Remote Access",
    overview:
      "We provide secure remote access solutions, facilitating safe and efficient remote work environments.",
    detail:
      "Our solutions incorporate VPNs, multi-factor authentication, and more, ensuring secure access to your network from any location.",
    icon: <Globe size={28} />,
  },
  {
    title: "Security Training & Awareness",
    overview:
      "Professional Labs offers comprehensive training programs to educate your team about cybersecurity best practices.",
    detail:
      "The training encompasses various topics, including recognizing phishing, secure password practices, and proper handling of sensitive data.",
    icon: <BookOpen size={28} />,
  },
];

const whyChoose = [
  {
    title: "Customized Solutions",
    desc: "Our services are tailored to meet the specific needs of your business, ensuring the most effective and efficient security posture.",
    icon: <Key size={28} />,
  },
  {
    title: "Skilled Experts",
    desc: "Our team consists of seasoned professionals with extensive experience in network security across diverse industries.",
    icon: <Users size={28} />,
  },
  {
    title: "Proactive Measures",
    desc: "We emphasize preventing security incidents through proactive strategies, minimizing risk before threats materialize.",
    icon: <Eye size={28} />,
  },
  {
    title: "End-to-End Support",
    desc: "From initial assessments to implementation, monitoring, and training, we provide comprehensive, ongoing support.",
    icon: <ShieldCheck size={28} />,
  },
];

const faqs = [
  {
    question:
      "How essential is regular network assessment and auditing for businesses in Delaware?",
    answer:
      "Regular network assessment and auditing is critical for Delaware businesses to identify vulnerabilities, ensure compliance with regulations, and proactively address security gaps before they are exploited. Professional Labs recommends conducting assessments at least quarterly or after any significant infrastructure change.",
  },
  {
    question: "Who needs firewall implementation services?",
    answer:
      "Any organization with a network connected to the internet needs a properly configured firewall. Whether you're a small business in Wilmington or a large enterprise, firewall implementation is your first line of defense against unauthorized access, DDoS attacks, and data breaches.",
  },
  {
    question:
      "What is the role of intrusion detection and prevention systems (IDPS)?",
    answer:
      "Intrusion detection and prevention systems continuously monitor your network traffic for suspicious activity. They identify potential threats in real-time and can automatically block malicious traffic, significantly reducing the risk of data breaches and cyberattacks.",
  },
  {
    question: "Should small businesses invest in data encryption?",
    answer:
      "Absolutely. Small businesses are often targeted by cybercriminals because they tend to have weaker security. Data encryption ensures that even if data is intercepted, it remains unreadable and unusable to unauthorized parties, protecting customer information and business-critical data.",
  },
  {
    question:
      "Can Professional Labs support remote access for a distributed workforce?",
    answer:
      "Yes. Professional Labs provides enterprise-grade secure remote access solutions including VPN setup, multi-factor authentication, and zero-trust network architecture, enabling your workforce to securely access company resources from any location worldwide.",
  },
  {
    question: "How does security training benefit employees and organizations?",
    answer:
      "Security training transforms employees from potential vulnerability points into active defenders of your organization. It reduces phishing success rates, strengthens password practices, improves incident reporting, and fosters a security-aware culture that protects your business from social engineering attacks.",
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

export default function NetworkSecurityPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-netsec">
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
            <span className="active">Network and Security Services</span>
          </nav>
          <h1 className="sv-hero-h1">Network and Security Services</h1>
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
                Professional Labs Network and Security Services Delaware.
                Firewall Implementation Delaware. Intrusion Detection and Data
                Encryption Services Delaware.
              </motion.h2>

              <motion.p variants={fadeInUp} className="sv-hero-p">
                At Professional Labs, we offer specialized Network and Security
                services, expertly designed to fortify your organization's
                digital infrastructure against the evolving landscape of cyber
                threats. Our services ensure not only the security of your
                network but also its optimal performance and resilience.
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
                  📞 Speak to a Security Expert
                </Link>
              </motion.div>

              {/* Trust Micro-Bar */}
              <motion.div variants={fadeInUp} className="sv-trust-bar">
                <span className="sv-trust-item">
                  ✔ Certified Security Engineers
                </span>
                <span className="sv-trust-item">✔ 24/7 Monitoring</span>
                <span className="sv-trust-item">✔ Delaware-Based Support</span>
                <span className="sv-trust-item">✔ End-to-End Protection</span>
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
                  src="/network_security_hero.png"
                  alt="Network Security Dashboard"
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
          SECTION 2 — Intro / Why Network Security Matters
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
              Network and Security Services from Professional Labs
            </h2>
            <p className="sv-hero-p max-w-4xl mx-auto text-center">
              Get a free 30-minute consultation with a Professional Labs expert.
              Our comprehensive network and security services are designed to
              protect Delaware businesses from evolving cyber threats while
              ensuring peak network performance and regulatory compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — Our Network and Security Services
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-info">
        <div className="container">
          <h2 className="sv-h2 text-center mb-12">
            Our Network and Security Services Include
          </h2>
          <div className="sv-security-grid">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="sv-scard"
              >
                <div className="sv-scard-icon">{service.icon}</div>
                <div className="sv-scard-body">
                  <h5>{service.title}</h5>
                  <p>
                    <strong>Overview:</strong> {service.overview}
                  </p>
                  <p style={{ marginTop: "12px" }}>
                    <strong>
                      {service.title === "Network Assessment & Auditing"
                        ? "Methodology:"
                        : service.title === "Firewall Implementation"
                          ? "Service Details:"
                          : service.title === "Intrusion Detection & Prevention"
                            ? "Functionality:"
                            : service.title === "Data Encryption & Privacy"
                              ? "Application:"
                              : service.title === "Secure Remote Access"
                                ? "Implementation:"
                                : "Content:"}
                    </strong>{" "}
                    {service.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — Why Choose Professional Labs
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-prolabs">
        <div className="container">
          <div className="sv-prolabs-header mb-12 flex flex-col items-center">
            <h2 className="sv-h2 text-center mb-4 w-full">
              Why Choose Professional Labs for Network and Security?
            </h2>
            <p className="sv-hero-p max-w-4xl mx-auto text-center">
              Professional Labs delivers enterprise-grade network and security
              solutions customized for Delaware businesses of all sizes.
            </p>
          </div>
          <div className="sv-prolabs-main">
            <div className="sv-prolabs-text">
              <div className="sv-pro-features">
                {whyChoose.map((item, i) => (
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
          SECTION 5 — Business Outcomes
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-outcomes">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sv-outcomes-h2"
          >
            What You Get with Professional Labs Network Security
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="sv-outcomes-grid"
          >
            {[
              "Comprehensive Vulnerability Assessment",
              "Enterprise-Grade Firewall Protection",
              "Real-Time Intrusion Detection",
              "End-to-End Data Encryption",
              "Secure Remote Workforce Enablement",
              "Security-Aware Employee Training",
            ].map((outcome, idx) => (
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
          SECTION 6 — Mid-Page CTA
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
              Ready to Fortify Your Network Security?
            </h2>
            <p className="sv-mid-cta-p">
              Get a free 30-minute consultation with a Professional Labs
              security expert and discover how we can protect your business.
            </p>
            <div className="sv-mid-cta-btns">
              <Link href="/contact" className="sv-btn-white">
                🟢 Schedule Free Consultation <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="sv-btn-cta-outline">
                📞 Speak to a Security Engineer Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — FAQ
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-faq">
        <div className="container">
          <h2 className="sv-h2 text-center mb-20">
            Frequently Asked Questions About Network and Security Services
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
          SECTION 8 — Final CTA
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
              Protect Your Network. Encrypt Your Data. Empower Your Team.
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "rgba(255,255,255,0.85)",
                marginBottom: 40,
              }}
            >
              Book a free 30-minute consultation with a Professional Labs
              network security expert today.
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
