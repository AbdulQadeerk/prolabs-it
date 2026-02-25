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
    icon: <Layers size={24} />,
  },
  {
    title: "Monitoring and management",
    desc: "Security analysts and responders are available 24 hours a day, seven days a week, to prevent malicious incoming and outgoing emails from causing data loss.",
    icon: <Activity size={24} />,
  },
  {
    title: "Email security best practices",
    desc: "Frequent evaluations of email security settings, policies, attack kinds, and frequency, along with proactive recommendations for email security.",
    icon: <ShieldCheck size={24} />,
  },
  {
    title: "Support email compliance",
    desc: "Implementing usage policies for email as part of a compliance program.",
    icon: <Briefcase size={24} />,
  },
  {
    title: "Extended help in email investigations",
    desc: "Advanced email attacks need careful, ongoing protection and responses to threats.",
    icon: <SearchCode size={24} />,
  },
];

const faqs = [
  {
    question: "What is the best email security service?",
    answer:
      "A secure email service offers measures to protect your email account’s security and contents. This is typically achieved using end-to-end encryption. End-to-end encryption indicates that the email is encrypted from the sender to the recipient. \n\nEach secure email service provider offers a unique set of features. These are some considerations you should make. \n\nServer Location: Several countries, such as the United States, collect and share intelligence data acquired from email server logs. If you are more concerned about hackers than government organizations, you may not care about this. \n\nEncryption: Symmetric encryption encrypts and decrypts data using the same key. Both the sender and receiver must possess this key. Asymmetric encryption (public-key cryptography or encryption) encrypts data using two distinct sets of keys.",
  },
  {
    question: "What are the different types of email security?",
    answer:
      "TLS is the preferred encryption method because it’s newer and offers more robust security features than SSL. It’s also a good idea to combine TLS-based email encryption with email authentication to ensure the integrity of email messages.",
  },
  {
    question: "How much does email security cost?",
    answer:
      "Contact us for a tailored quote based on your specific requirements and deployment options.",
  },
  {
    question: "Does Office 365 have email security?",
    answer:
      "Yes, Office 365 includes built-in security features, but Professional Labs Email Security adds an extra layer of advanced threat protection to safeguard your sensitive data further.",
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
    <main className="em-page-root">
      <Header />

      {/* Hero Header Band */}
      <section className="em-hero-band">
        <div className="container">
          <nav className="em-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Services</span>
            <span className="sep">/</span>
            <span className="active">Email Security</span>
          </nav>
          <h1 className="em-hero-h1">Email Security</h1>
        </div>
      </section>

      {/* Hero Content Section */}
      <section className="em-hero-main">
        <div className="container">
          <div className="em-hero-flex">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="em-hero-content"
            >
              <motion.h2 variants={fadeInUp} className="em-display-h2">
                Beware of phishing. Protect Email Data. Professional Labs Email
                Security protects your inbox.
              </motion.h2>
              <motion.div variants={fadeInUp} className="em-hero-btn-wrap">
                <Link href="/contact" className="em-btn-primary">
                  Book a free 30 min Email Security Meeting NOW{" "}
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div variants={fadeInUp} className="em-meta-tags">
                <span className="em-tag">
                  Professional Labs Email Security Protection for Delaware
                  Businesses
                </span>
                <span className="em-tag">
                  Delaware Anti-Phishing and Malware Email Security Services
                </span>
                <span className="em-tag">
                  Advanced Email Protection Solutions in Delaware
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="em-hero-image"
            >
              <div className="em-img-frame">
                <Image
                  src="/illustrations/benefit-security.svg"
                  alt="Email Security Illustration"
                  width={500}
                  height={400}
                  className="em-float-img"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* People Centric Approach Section */}
      <section className="em-section-info">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="em-info-layout"
          >
            <div className="em-info-header text-center mb-12">
              <h2 className="em-h2">
                Take a people-centric approach to email security
              </h2>
            </div>
            <div className="em-info-grid">
              <div className="em-info-card">
                <p className="em-p">
                  Cybercriminals increasingly target people rather than
                  infrastructure; in response to new and more sophisticated
                  cyber threats, businesses must implement proper controls to
                  safeguard corporate communication from business email security
                  compromise, malware, ransomware, and credential phishing.
                </p>
              </div>
              <div className="em-info-card">
                <p className="em-p">
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
      <section className="em-section-security">
        <div className="container">
          <div className="em-security-flex">
            <div className="em-security-text">
              <h2 className="em-h2">Get Peace of Mind from Data Security:</h2>
              <p className="em-p mt-6 mb-12">
                safeguard confidential information and simplify compliance.
                Professional Labs Email scans messages and attachments
                automatically for sensitive material, including seamlessly
                integrated encryption.
              </p>

              <div className="em-security-grid">
                <div className="em-scard">
                  <div className="em-scard-icon">
                    <ShieldPlus size={24} />
                  </div>
                  <div className="em-scard-body">
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
                <div className="em-scard">
                  <div className="em-scard-icon">
                    <LockKeyhole size={24} />
                  </div>
                  <div className="em-scard-body">
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
      <section className="em-section-focus">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="em-focus-box"
          >
            <div className="em-focus-icon">
              <ShieldCheck size={40} className="text-email" />
            </div>
            <div className="em-focus-text">
              <h3 className="em-h3">
                Secure email with the best deployment flexibility in the
                industry
              </h3>
              <p className="em-p mb-6">
                Detect the most complex cyberattacks with AI technology.
              </p>
              <ul className="em-check-list">
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
      <section className="em-section-benefits">
        <div className="container">
          <div className="em-benefits-head text-center mb-16">
            <h2 className="em-h2">
              Benefits: More proactive, more intelligent, easier, and faster
              email security solutions
            </h2>
            <p className="em-subtitle mt-6 max-w-4xl mx-auto">
              Email is the portal via which the vast majority of essential
              corporate communication passes and the entry point for the vast
              majority of cyberattacks. Email security must protect against all
              email-based assaults that cybercriminals have developed, including
              phishing, spam, malware, ransomware, and brand impersonation. And
              large-scale cloud services providers, such as Microsoft 365 and
              Google Workspace, require the most excellent protection available
              for a straightforward reason: they are the most attractive
              targets.
            </p>
          </div>

          <div className="em-benefits-grid">
            <div className="em-benefit-card dark">
              <h4 className="em-h4 mb-4">Email Security Cloud Gateway</h4>
              <p className="em-p">
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
            <div className="em-benefit-card blue">
              <h4 className="em-h4 mb-4">Email Security, Cloud Integrated</h4>
              <p className="em-p">
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
      <section className="em-section-grid">
        <div className="container">
          <h2 className="em-h2 text-center mb-16">
            Benefits of Email Security Services
          </h2>
          <div className="em-grid-layout">
            {emailBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="em-grid-card"
              >
                <div className="em-grid-icon">{benefit.icon}</div>
                <div className="em-grid-body">
                  <h5>{benefit.title}</h5>
                  <p>{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeInUp} className="em-hero-btn-wrap mt-16">
            <Link href="/contact" className="em-btn-primary">
              Book a free 30 min Email Security Meeting NOW{" "}
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
      {/* <section className="em-section-cta"> */}

      {/* </section> */}

      {/* FAQ Section */}
      <section className="em-section-faq">
        <div className="container">
          <h2 className="em-h2 text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="em-faq-wrap">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`em-faq-item ${openFaq === index ? "em-active" : ""}`}
              >
                <button
                  className="em-faq-q"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="em-faq-qtext">{faq.question}</span>
                  <span className="em-faq-ico">
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
                      className="em-faq-a"
                    >
                      <div className="em-faq-ainner">
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
        .em-page-root {
          --email: #0078d4;
          --em-ink: #002b4d;
          --em-text: #323130;
          --em-gray: #605e5c;
          --em-bg: #f3f2f1;
          background: #fff;
          color: var(--em-text);
          font-family: inherit;
        }

        .em-hero-band {
          background: linear-gradient(135deg, #001a33 0%, #004d99 100%);
          padding: 140px 0 60px;
          color: white;
        }

        .em-breadcrumb {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 25px;
        }

        .em-breadcrumb .sep {
          opacity: 0.3;
        }
        .em-breadcrumb .active {
          color: white;
          font-weight: 600;
        }
        .em-breadcrumb a:hover {
          color: var(--email);
        }

        .em-hero-h1 {
          font-size: clamp(2.5rem, 6vw, 4.2rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .em-hero-main {
          padding: 100px 0;
          background: #fff;
        }

        .em-hero-flex {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 70px;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .em-hero-flex {
            grid-template-columns: 1fr;
            gap: 50px;
            text-align: center;
          }
          .em-hero-btn-wrap {
            display: flex;
            justify-content: center;
          }
          .em-meta-tags {
            justify-content: center;
          }
        }

        .em-display-h2 {
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          font-weight: 800;
          color: var(--em-ink);
          line-height: 1.1;
          margin-bottom: 28px;
          letter-spacing: -0.03em;
        }

        .em-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: var(--email);
          color: white;
          padding: 20px 45px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1.1rem;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(0, 120, 212, 0.25);
          transition: all 0.3s;
        }

        .em-btn-primary:hover {
          transform: translateY(-4px);
          background: #005a9e;
          box-shadow: 0 15px 40px rgba(0, 120, 212, 0.35);
        }

        .em-meta-tags {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 50px;
        }

        .em-tag {
          background: var(--em-bg);
          padding: 10px 20px;
          border-radius: 10px;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--em-gray);
          width: fit-content;
        }

        @media (max-width: 1024px) {
          .em-tag {
            margin: 0 auto;
          }
        }

        .em-float-img {
          animation: emFloat 6s ease-in-out infinite;
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.08));
        }

        @keyframes emFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        /* Info Section */
        .em-section-info {
          padding: 100px 0;
          background: var(--em-bg);
        }
        .em-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        @media (max-width: 900px) {
          .em-info-grid {
            grid-template-columns: 1fr;
          }
        }

        .em-info-card {
          background: #fff;
          padding: 40px;
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
          border: 1px solid #e1dfdd;
        }

        .em-h2 {
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 800;
          color: var(--em-ink);
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .em-p {
          line-height: 1.7;
          font-size: 1.05rem;
        }

        /* Security Section */
        .em-section-security {
          padding: 100px 0;
        }
        .em-security-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 40px;
        }

        @media (max-width: 900px) {
          .em-security-grid {
            grid-template-columns: 1fr;
          }
        }

        .em-scard {
          display: flex;
          gap: 24px;
          padding: 35px;
          border-radius: 24px;
          background: var(--em-bg);
          transition: all 0.3s;
        }
        .em-scard:hover {
          background: #fff;
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
          border: 1px solid #e1dfdd;
        }
        .em-scard-icon {
          width: 50px;
          height: 50px;
          background: #fff;
          color: var(--email);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }
        .em-scard-body h5 {
          font-size: 1.2rem;
          font-weight: 800;
          margin: 0 0 12px 0;
          color: var(--em-ink);
        }
        .em-scard-body p {
          font-size: 0.95rem;
          color: var(--em-gray);
          line-height: 1.6;
          margin: 0;
        }

        .em-badge {
          background: var(--email);
          color: white;
          padding: 6px 16px;
          border-radius: 6px;
          font-weight: 700;
          font-size: 0.9rem;
        }

        /* Focus Section */
        .em-section-focus {
          padding: 80px 0;
        }
        .em-focus-box {
          background: #fff;
          border: 1px solid #e1dfdd;
          border-radius: 32px;
          padding: 60px;
          display: flex;
          gap: 45px;
          align-items: center;
          max-width: 1000px;
          margin: 0 auto;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.03);
        }

        @media (max-width: 768px) {
          .em-focus-box {
            flex-direction: column;
            text-align: center;
            padding: 40px;
            gap: 30px;
          }
        }

        .em-focus-icon {
          width: 80px;
          height: 80px;
          background: #e0f2fe;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .text-email {
          color: var(--email);
        }

        .em-check-list {
          list-style: none;
          padding: 0;
          display: grid;
          gap: 15px;
          margin-top: 20px;
          text-align: left;
        }
        .em-check-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-weight: 600;
          color: var(--em-text);
        }
        .em-check-list li svg {
          color: var(--email);
          margin-top: 3px;
          flex-shrink: 0;
        }

        /* Benefits Section */
        .em-section-benefits {
          padding: 100px 0;
          background: #fff;
        }
        .em-subtitle {
          font-size: 1.15rem;
          color: var(--em-gray);
          line-height: 1.7;
        }
        .em-benefits-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 60px;
        }

        @media (max-width: 900px) {
          .em-benefits-grid {
            grid-template-columns: 1fr;
          }
        }

        .em-benefit-card {
          padding: 50px;
          border-radius: 32px;
          transition: all 0.3s;
        }
        .em-benefit-card.dark {
          background: var(--em-ink);
          color: white;
        }
        .em-benefit-card.blue {
          background: var(--email);
          color: white;
        }
        .em-benefit-card .em-p {
          color: rgba(255, 255, 255, 0.85);
        }
        .em-h4 {
          font-size: 1.6rem;
          font-weight: 800;
        }

        /* Grid Section */
        .em-section-grid {
          padding: 100px 0;
          background: var(--em-bg);
        }
        .em-grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
        }
        .em-grid-card {
          background: #fff;
          padding: 40px;
          border-radius: 24px;
          text-align: center;
          transition: all 0.3s;
          border: 1px solid #e1dfdd;
        }
        .em-grid-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
        }
        .em-grid-icon {
          width: 60px;
          height: 60px;
          background: #f0f7ff;
          color: var(--email);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
        }
        .em-grid-card h5 {
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 15px;
          color: var(--em-ink);
        }
        .em-grid-card p {
          font-size: 0.95rem;
          color: var(--em-gray);
          line-height: 1.6;
        }

        /* FAQ */
        .em-section-faq {
          padding: 120px 0;
          background: #fff;
        }
        .em-faq-wrap {
          max-width: 900px;
          margin: 0 auto;
        }
        .em-faq-item {
          background: var(--em-bg);
          border-radius: 20px;
          margin-bottom: 16px;
          transition: all 0.3s;
          overflow: hidden;
        }
        .em-faq-item.em-active {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
          background: #fff;
          border: 1px solid #e1dfdd;
        }
        .em-faq-q {
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
        .em-faq-qtext {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--em-ink);
        }
        .em-faq-ico {
          color: var(--email);
        }
        .em-faq-a {
          padding: 0 40px 35px;
          color: var(--em-gray);
          font-size: 1.1rem;
          line-height: 1.8;
        }
        .em-faq-ainner {
          border-top: 1px solid var(--em-bg);
          padding-top: 20px;
        }

        /* CTA */
        .em-section-cta {
          padding: 120px 0;
          background: var(--em-bg);
        }
        .em-cta-banner {
          background: linear-gradient(
            135deg,
            var(--email) 0%,
            var(--em-ink) 100%
          );
          padding: 80px 40px;
          border-radius: 40px;
          text-align: center;
          box-shadow: 0 30px 60px rgba(0, 77, 153, 0.2);
        }
        .em-btn-white {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #fff;
          color: var(--email);
          padding: 22px 60px;
          border-radius: 100px;
          font-weight: 800;
          font-size: 1.2rem;
          text-decoration: none;
          transition: all 0.3s;
        }
        .em-btn-white:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 768px) {
          .em-hero-h1 {
            font-size: 2.8rem;
          }
          .em-display-h2 {
            font-size: 1.8rem;
          }
          .em-h4 {
            font-size: 1.4rem;
          }
          .em-scard {
            padding: 25px;
          }
          .em-faq-q {
            padding: 25px;
          }
          .em-faq-qtext {
            font-size: 1.1rem;
          }
          .em-benefit-card {
            padding: 30px;
          }
        }
      `}</style>
    </main>
  );
}
