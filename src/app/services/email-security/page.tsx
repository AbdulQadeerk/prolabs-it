"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  HelpCircle,
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

const emailBenefits = [
  {
    title: "Reduce complexity",
    desc: "Stop the requirement for extra email security solutions. Outsource needs for tactical email security and gain actionable information.",
    icon: <Layers size={28} />,
  },
  {
    title: "Monitoring and management",
    desc: "Security analysts and responders are available 24 hours a day, seven days a week, to prevent malicious incoming and outgoing emails from causing data loss.",
    icon: <Activity size={28} />,
  },
  {
    title: "Email security best practices",
    desc: "Frequent evaluations of email security settings, policies, attack kinds, and frequency, along with proactive recommendations for email security.",
    icon: <ShieldCheck size={28} />,
  },
  {
    title: "Support email compliance",
    desc: "Implementing usage policies for email as part of a compliance program.",
    icon: <Briefcase size={28} />,
  },
  {
    title: "Extended help in email investigations",
    desc: "Advanced email attacks need careful, ongoing protection and responses to threats.",
    icon: <SearchCode size={28} />,
  },
];

const faqs = [
  {
    question: "What is the best email security service?",
    answer:
      "A secure email service offers measures to protect your email account's security and contents. This is typically achieved using end-to-end encryption. End-to-end encryption indicates that the email is encrypted from the sender to the recipient. \n\nEach secure email service provider offers a unique set of features. These are some considerations you should make. \n\nServer Location: Several countries, such as the United States, collect and share intelligence data acquired from email server logs. If you are more concerned about hackers than government organizations, you may not care about this. \n\nEncryption: Symmetric encryption encrypts and decrypts data using the same key. Both the sender and receiver must possess this key. Asymmetric encryption (public-key cryptography or encryption) encrypts data using two distinct sets of keys.",
  },
  {
    question: "What are the different types of email security?",
    answer:
      "TLS is the preferred encryption method because it's newer and offers more robust security features than SSL. It's also a good idea to combine TLS-based email encryption with email authentication to ensure the integrity of email messages.",
  },
  {
    question: "How much does email security cost?",
    answer:
      "The average email security configuration costs for companies less than 500 employee size up to $100 – $500, and for large companies, they are up to $2,000",
  },
  {
    question: "Does Office 365 have email security?",
    answer:
      "EOP automatically protects email messages in Microsoft 365 enterprises with Exchange Online mailboxes or Exchange Online Protection (EOP) organizations without Exchange Online mailboxes from spam (junk email).",
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

export default function EmailSecurityPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-email">
      <Header />

      {/* Hero Header Band */}
      <section className="sv-hero-band">
        <div className="container">
          <nav className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Services</span>
            <span className="sep">/</span>
            <span className="active">Email Security</span>
          </nav>
          <h1 className="sv-hero-h1">Email Security</h1>
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
                Beware of phishing. Protect Email Data. Professional Labs Email
                Security protects your inbox.
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
                  alt="Email Security Illustration"
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

      {/* People Centric Approach Section */}
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
                Take a people-centric approach to email security
              </h2>
            </div>
            <div className="sv-info-grid mt-6">
              <div className="sv-info-card">
                <p className="sv-p">
                  Cybercriminals increasingly target people rather than
                  infrastructure; in response to new and more sophisticated
                  cyber threats, businesses must implement proper controls to
                  safeguard corporate communication from business email security
                  compromise, malware, ransomware, and credential phishing.
                </p>
              </div>
              <div className="sv-info-card">
                <p className="sv-p">
                  To keep ahead of attackers and reduce security risks, you need
                  an innovative method to detect, analyze, and block advanced
                  email threats before they reach the inbox.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Security Section */}
      <section className="sv-section-security">
        <div className="container">
          <div className="sv-security-flex">
            <div className="sv-security-text">
              <div className="flex justify-center">
                <h2 className="sv-h2">Get Peace of Mind from Data Security:</h2>
              </div>
              <div className="flex justify-center text-center">
                <p className="sv-p mt-6 mb-12 max-w-4xl mx-auto">
                  safeguard confidential information and simplify compliance.
                  Professional Labs Email scans messages and attachments
                  automatically for sensitive material, including seamlessly
                  integrated encryption.
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
                      Build cross-DLP rules for organizations and individual
                      users to protect sensitive information by detecting
                      financials, confidential material, health information, and
                      personally identifiable information in all emails and
                      attachments.
                    </p>
                  </div>
                </div>
                <div className="sv-scard">
                  <div className="sv-scard-icon">
                    <LockKeyhole size={28} />
                  </div>
                  <div className="sv-scard-body">
                    <h5>Encrypt and Authentication</h5>
                    <p>
                      Encrypt emails and add a digital signature to authenticate
                      sender identity with S/MIME, or choose from various
                      customized encryption options, such as TLS encryption,
                      attachment and message encryption (PDF and Office), or
                      add-on complete web portal encryption.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexibility Section */}
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
              <h3 className="sv-h3">
                Secure email with the best deployment flexibility in the
                industry
              </h3>
              <p className="sv-p mb-6">
                Detect the most complex cyberattacks with AI technology.
              </p>
              <ul className="sv-check-list">
                <li>
                  <CheckCircle2 size={18} /> Safeguards against all email
                  assaults, including phishing, ransomware, and money fraud.
                </li>
                <li>
                  <CheckCircle2 size={18} /> With or without a gateway, get
                  industry-leading efficacy provided in the manner that best
                  matches your needs.
                </li>
                <li>
                  <CheckCircle2 size={18} /> Detect the most complex
                  cyberattacks with AI technology.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Detailed Section */}
      <section className="sv-section-benefits">
        <div className="container">
          <div className="sv-benefits-head text-center mb-12">
            <h2 className="sv-h2 mb-8">
              Benefits: More proactive, more intelligent, easier, and faster
              email security solutions
            </h2>
            <div className="flex justify-center">
              <p className="sv-subtitle mt-6 max-w-4xl mx-auto">
                Email is the portal via which the vast majority of essential
                corporate communication passes and the entry point for the vast
                majority of cyberattacks. Email security must protect against
                all email-based assaults that cybercriminals have developed,
                including phishing, spam, malware, ransomware, and brand
                impersonation. And large-scale cloud services providers, such as
                Microsoft 365 and Google Workspace, require the most excellent
                protection available for a straightforward reason: they are the
                most attractive targets.
              </p>
            </div>
          </div>

          <div className="sv-benefits-grid">
            <div className="sv-benefit-card dark">
              <h4 className="sv-h4 mb-4">Email Security Cloud Gateway</h4>
              <p className="sv-p">
                Ideally suited for businesses that need to handle increasingly
                sophisticated email systems, including the need for configurable
                policies and granular controls. This solution can also be used
                with Professional Labs comprehensive solution package, which
                includes award-winning awareness training, tools that
                proactively protect your brand and supply chain, and an
                unequaled portfolio of open APIs and pre-built connectors for
                sharing threat intelligence.
              </p>
            </div>
            <div className="sv-benefit-card blue">
              <h4 className="sv-h4 mb-4">Email Security, Cloud Integrated</h4>
              <p className="sv-p">
                Can be deployed in minutes and is ideal for organizations
                seeking to optimize M365 environment protection. An Integrated
                Cloud Email Security solution that does not require an MX record
                change dramatically simplifies email security administration
                with out-of-the-box settings, an intuitive homepage that
                displays what has been blocked and why, and one-click threat
                remediation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
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
                expert. <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="sv-section-faq">
        <div className="container">
          <h2 className="sv-h2 text-center mb-20">
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

      <Footer />
    </main>
  );
}
