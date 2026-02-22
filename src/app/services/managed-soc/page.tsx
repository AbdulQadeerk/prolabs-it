"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    ShieldCheck, Target, Zap, BarChart3, Users, Lock,
    CheckCircle2, AlertTriangle, Shield, Globe, Award,
    HelpCircle, ChevronDown, ChevronUp, ArrowRight, Cloud
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "What is a managed SOC?",
        answer: "SOC as a Service (also known as Managed SOC) is a subscription service that allows businesses to \"outsource\" their SOC service operations to a third party. Managed SOC providers are third-party cybersecurity specialists that keep tabs on a business's IT infrastructure, endpoints, software, and data for potential security flaws. They're capable of finding threats before they even happen, responding quickly to any alerts they get, and fixing any problems that arise."
    },
    {
        question: "What are the services in SOC?",
        answer: "As a managed service, SOC as a service keeps an eye on security around the clock, utilizing automation and data science to increase the speed of detection and the reliability of alarms. Vulnerability evaluations, threat surveillance, and incident responses are all part of a security operations center (SOC) as a service."
    },
    {
        question: "How does a SOC develop?",
        answer: "There are five main stages in creating a SOC:\n1. Planning the SOC.\n2. Designing the SOC.\n3. Building the SOC.\n4. Operating the SOC.\n5. Reviewing the SOC."
    },
    {
        question: "What is the role of the SOC Manager?",
        answer: "A SOC manager is in charge of the security operations team and reports to the CIO (CISO). They are in charge of the team, give technical advice, and run things the following ways: Oversees how SOC staff are hired, trained, and evaluated. Makes things happen."
    },
    {
        question: "Is a SOC MSP?",
        answer: "A committed SOC is a service that gives an MSP access to a private network of experienced security analysts that they can use to add to or grow their new rosters. In this model, security experts are equipped to work with the processes and security tools that your company already has."
    }
];

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
};

export default function ManagedSOCPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <main className="soc-page-wrapper">
            <Header />

            {/* Hero Header Band */}
            <section className="soc-hero-band">
                <div className="container">
                    <nav className="soc-breadcrumbs">
                        <Link href="/">Home</Link>
                        <span className="sep">/</span>
                        <span>Pages</span>
                        <span className="sep">/</span>
                        <span className="active">Managed SOC Security Service</span>
                    </nav>
                    <h1 className="soc-hero-title">Managed SOC Service</h1>
                </div>
            </section>

            {/* Hero Content Section */}
            <section className="soc-hero-content">
                <div className="container">
                    <div className="soc-hero-grid">
                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="soc-hero-text"
                        >
                            <motion.h2 variants={fadeInUp} className="soc-display-h2">
                                Keep your Security Operations Strong and Scalable With Our Managed SOC Service
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="soc-lead">
                                Professional Labs is a completely managed service provided by security professionals that identify and respond to intrusions on your PCs, servers, networks, cloud security, email accounts, and more.
                            </motion.p>
                            <motion.p variants={fadeInUp} className="soc-body-text">
                                Managed SOC Services assist businesses in detecting, preventing, and responding to IT infrastructure risks. Professional Labs, one of the leading managed SOC providers, has provided real-time monitoring, proactive prevention, efficient management, immediate managed detection, and rapid reaction to security problems of varying complexity since the year 1997.
                            </motion.p>
                            <motion.div variants={fadeInUp} className="soc-hero-cta">
                                <Link href="/contact" className="soc-btn-primary">
                                    Get a free consultation <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="soc-hero-visual"
                        >
                            <div className="soc-visual-container">
                                <Image
                                    src="/illustrations/benefit-security.svg"
                                    alt="Security Illustration"
                                    width={550}
                                    height={450}
                                    className="soc-floating-img"
                                    priority
                                />
                                <motion.div
                                    initial={{ x: 30, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="soc-status-card"
                                >
                                    <div className="soc-status-icon">
                                        <ShieldCheck size={28} />
                                    </div>
                                    <div className="soc-status-info">
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
            <section className="soc-why-section">
                <div className="container">
                    <div className="soc-section-header">
                        <h2 className="soc-h2">Why Choose Professional Labs for your Managed SOC Service</h2>
                        <p className="soc-subtitle">
                            The goal of Professional Labs, a Managed SOC provider, is to assist companies of all sizes in enhancing their security operations center. Our services are more capable of safeguarding assets than any internal SOC since we have a team of cybersecurity experts.
                        </p>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="soc-features-grid"
                    >
                        {[
                            { icon: <Award size={28} />, text: "15+ years of experience in cybersecurity." },
                            { icon: <Users size={28} />, text: "24/7, India/UAE-based experience SOC team." },
                            { icon: <Cloud size={28} />, text: "A cloud-centric MSSP, based on the Prevent – Manage – Detect – Respond model." },
                            { icon: <Target size={28} />, text: "Professional Labs Cyber Security Team Proactively gathers threat intelligence data 24×7" },
                            { icon: <Zap size={28} />, text: "Faster incident response with cutting-edge tools" },
                            { icon: <BarChart3 size={28} />, text: "Risks are mitigated via Machine Learning and behavior analysis alerts" }
                        ].map((f, i) => (
                            <motion.div key={i} variants={fadeInUp} className="soc-feature-card">
                                <div className="soc-feature-icon">{f.icon}</div>
                                <p className="soc-feature-text">{f.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="soc-pills-row">
                        <div className="soc-pill"><CheckCircle2 size={18} /> Pro Laboratories Cyber Security Champions have an insatiable zeal.</div>
                        <div className="soc-pill"><CheckCircle2 size={18} /> We provide MDR, XDR, as well as vulnerability assessment solutions.</div>
                        <div className="soc-pill"><CheckCircle2 size={18} /> Microsoft gold partners with Microsoft-certified Azure experts.</div>
                    </div>
                </div>
            </section>

            {/* Threat Detection Section */}
            <section className="soc-dark-section">
                <div className="container">
                    <div className="soc-dark-grid">
                        <motion.div
                            initial={{ x: -40, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="soc-dark-visual"
                        >
                            <div className="soc-monitor-wrapper">
                                <Image
                                    src="/illustrations/dashboard-preview.svg"
                                    alt="Monitoring Dashboard"
                                    width={600}
                                    height={400}
                                    className="soc-monitor-img"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="soc-dark-text"
                        >
                            <motion.h2 variants={fadeInUp} className="soc-dark-h2">Security Threat Detection</motion.h2>
                            <motion.p variants={fadeInUp} className="soc-dark-p">
                                Stay one step ahead of identified and undiscovered cyber attacks and stop them in their tracks with AI-powered 24/7 threat prevention, detection, and response capabilities. Utilize endpoint management and surveillance capabilities to protect all devices in your environments against endpoint assaults.
                            </motion.p>
                            <motion.div variants={fadeInUp} className="soc-stats-row">
                                <div className="soc-stat-item">
                                    <div className="soc-stat-val">AI</div>
                                    <div className="soc-stat-label">Powered</div>
                                </div>
                                <div className="soc-stat-item">
                                    <div className="soc-stat-val">24/7</div>
                                    <div className="soc-stat-label">Monitoring</div>
                                </div>
                                <div className="soc-stat-item">
                                    <div className="soc-stat-val">MDR</div>
                                    <div className="soc-stat-label">Enterprise</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Needs Management Section */}
            <section className="soc-needs-section">
                <div className="container">
                    <div className="soc-needs-grid">
                        <div className="soc-needs-left">
                            <h2 className="soc-h2">Customer’s Managed SOC Needs that We Address</h2>
                            <p className="soc-body-text">
                                Professional Labs, a managed SOC as a service solution provider with 15 years of experience in cybersecurity, customizes its solution for each client. Our customers span healthcare, manufacturing, banking, retail, and eCommerce.
                            </p>
                            <div className="soc-industry-tags">
                                {['Healthcare', 'Manufacturing', 'Banking', 'Retail', 'eCommerce'].map(tag => (
                                    <span key={tag} className="soc-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="soc-needs-right">
                            <div className="soc-mssp-box">
                                <h4 className="soc-mssp-title">As an MSSP, we address:</h4>
                                <ul className="soc-check-list">
                                    <li>Sufficient security coverage across diverse IT environments.</li>
                                    <li>Protection against real-time nontargeted and APT threats.</li>
                                    <li>Compliance with HIPAA, PCI DSS, and other global standards.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Propositions Grid */}
            <section className="soc-values-section">
                <div className="container">
                    <div className="soc-section-header text-center">
                        <h2 className="soc-h2">Value Propositions</h2>
                        <p className="soc-subtitle">Why you should use Security Operation Center (Managed SOC) Service</p>
                    </div>
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="soc-values-grid"
                    >
                        {[
                            { icon: <Shield size={32} />, title: "24/7 Monitoring", desc: "Gain highest level of protection with round-the-clock surveillance." },
                            { icon: <Zap size={32} />, title: "Incident Response", desc: "Faster incident response and prevention to minimize disruption." },
                            { icon: <AlertTriangle size={32} />, title: "Avoid Loss", desc: "Prevent financial loss as a result of a data breach with proactive defense." },
                            { icon: <Globe size={32} />, title: "Gain Trust", desc: "Gain trust and improve work relationships with your clients and partners." }
                        ].map((v, i) => (
                            <motion.div key={i} variants={fadeInUp} className="soc-value-card">
                                <div className="soc-value-icon">{v.icon}</div>
                                <h3 className="soc-value-title">{v.title}</h3>
                                <p className="soc-value-desc">{v.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Compliance & Consultation */}
            <section className="soc-consult-section">
                <div className="container text-center">
                    <h2 className="soc-h2">Compliance & Consultation</h2>
                    <p className="soc-subtitle mx-auto" style={{ maxWidth: '800px' }}>
                        Learn how to maximize your company’s technological and financial potential with a free consultation from Professional Labs Managed SOC Experts.
                    </p>
                    <div className="soc-compliance-strip">
                        <span className="soc-comp-item">HIPAA</span>
                        <span className="soc-comp-item">PCI DSS</span>
                        <span className="soc-comp-item">ISO 27001</span>
                        <span className="soc-comp-item">SOC 2</span>
                    </div>
                    <div className="soc-consult-cta">
                        <Link href="/contact" className="soc-btn-primary soc-btn-large">
                            Book a Free 30-Minute Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="soc-faq-section">
                <div className="container">
                    <h2 className="soc-h2 text-center mb-12">FAQ’s For Managed SOC Services</h2>
                    <div className="soc-faq-list">
                        {faqs.map((faq, index) => (
                            <div key={index} className={`soc-faq-item ${openFaq === index ? "active" : ""}`}>
                                <button
                                    className="soc-faq-q"
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                >
                                    <span className="soc-faq-text">{faq.question}</span>
                                    <span className="soc-faq-icon">{openFaq === index ? <ChevronUp /> : <ChevronDown />}</span>
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="soc-faq-a"
                                        >
                                            <div className="soc-faq-a-inner">
                                                {faq.answer.split('\n').map((line, i) => (
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

            <Footer />

            <style jsx global>{`
        /* Reset & Base Scoping */
        .soc-page-wrapper {
          --soc-blue: #22a7e0;
          --soc-dark: #082638;
          --soc-ink: #0b2f45;
          --soc-gray: #4b6674;
          --soc-light: #f8fafc;
          background: #fff;
          font-family: inherit;
        }

        .soc-hero-band {
          background: linear-gradient(135deg, var(--soc-dark) 0%, #0d4f6c 100%);
          padding: 130px 0 60px;
          color: white;
        }

        .soc-breadcrumbs {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 24px;
        }

        .soc-breadcrumbs .sep { opacity: 0.3; }
        .soc-breadcrumbs .active { color: white; font-weight: 600; }
        .soc-breadcrumbs a:hover { color: var(--soc-blue); }

        .soc-hero-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          margin: 0;
          line-height: 1;
        }

        .soc-hero-content {
          padding: 100px 0;
          background: #fff;
          position: relative;
        }

        .soc-hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 70px;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .soc-hero-grid { grid-template-columns: 1fr; gap: 50px; text-align: center; }
          .soc-hero-cta { display: flex; justify-content: center; }
          .soc-status-card { display: none; }
        }

        .soc-display-h2 {
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 800;
          color: var(--soc-dark);
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }

        .soc-lead {
          font-size: 1.25rem;
          color: var(--soc-ink);
          font-weight: 600;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .soc-body-text {
          font-size: 1.05rem;
          color: var(--soc-gray);
          line-height: 1.7;
          margin-bottom: 35px;
        }

        .soc-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: var(--soc-blue);
          color: white;
          padding: 18px 40px;
          border-radius: 100px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 12px 24px rgba(34, 167, 224, 0.25);
          transition: all 0.3s;
        }

        .soc-btn-primary:hover {
          transform: translateY(-3px);
          background: #178dc8;
          box-shadow: 0 16px 32px rgba(34, 167, 224, 0.35);
        }

        .soc-visual-container {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .soc-floating-img {
          animation: socFloat 6s ease-in-out infinite;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.08));
        }

        @keyframes socFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .soc-status-card {
          position: absolute;
          bottom: 40px;
          left: -30px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 20px 24px;
          border-radius: 16px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
          border: 1px solid white;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .soc-status-icon {
          width: 50px;
          height: 50px;
          background: #e0f2fe;
          color: var(--soc-blue);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .soc-status-info strong { display: block; color: var(--soc-dark); }
        .soc-status-info span { font-size: 0.85rem; color: var(--soc-blue); font-weight: 600; }

        /* Why Choose Section */
        .soc-why-section {
          padding: 120px 0;
          background: var(--soc-light);
        }

        .soc-section-header { text-align: center; margin-bottom: 70px; }
        .soc-h2 {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 800;
          color: var(--soc-dark);
          margin-bottom: 20px;
          letter-spacing: -0.01em;
        }
        .soc-subtitle {
          font-size: 1.1rem;
          color: var(--soc-gray);
          max-width: 900px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .soc-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .soc-feature-card {
          background: #fff;
          padding: 40px;
          border-radius: 24px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .soc-feature-card:hover {
          transform: translateY(-8px);
          border-color: var(--soc-blue);
          box-shadow: 0 20px 40px rgba(8, 38, 56, 0.08);
        }

        .soc-feature-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--soc-blue) 0%, #0f6f9d 100%);
          color: white;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .soc-feature-text {
          font-size: 1.05rem;
          color: var(--soc-dark);
          font-weight: 600;
          line-height: 1.5;
          margin: 0;
        }

        .soc-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          justify-content: center;
          margin-top: 40px;
        }

        .soc-pill {
          background: white;
          padding: 12px 25px;
          border-radius: 100px;
          font-weight: 600;
          color: var(--soc-ink);
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid #f1f5f9;
          font-size: 0.95rem;
        }

        .soc-pill svg { color: var(--soc-blue); }

        /* Dark Section */
        .soc-dark-section {
          background: var(--soc-dark);
          padding: 120px 0;
          color: white;
          overflow: hidden;
        }

        .soc-dark-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .soc-dark-grid { grid-template-columns: 1fr; text-align: center; gap: 50px; }
          .soc-stats-row { justify-content: center; }
        }

        .soc-monitor-wrapper { position: relative; }
        .soc-monitor-wrapper::after {
          content: '';
          position: absolute;
          top: -30px; left: -30px; width: 100%; height: 100%;
          border: 2px solid rgba(34, 167, 224, 0.1);
          border-radius: 20px;
          z-index: 0;
        }
        .soc-monitor-img { position: relative; z-index: 1; border-radius: 12px; box-shadow: 0 30px 60px rgba(0,0,0,0.3); }

        .soc-dark-h2 { font-size: 2.8rem; font-weight: 800; margin-bottom: 25px; }
        .soc-dark-p { font-size: 1.15rem; color: rgba(255,255,255,0.7); line-height: 1.8; margin-bottom: 40px; }

        .soc-stats-row { display: flex; gap: 40px; }
        .soc-stat-val { font-size: 2.8rem; font-weight: 800; color: var(--soc-blue); line-height: 1; }
        .soc-stat-label { font-size: 0.85rem; text-transform: uppercase; color: rgba(255,255,255,0.4); margin-top: 5px; font-weight: 700; letter-spacing: 1px; }

        /* Needs Section */
        .soc-needs-section { padding: 120px 0; background: #fff; }
        .soc-needs-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 80px; align-items: center; }

        @media (max-width: 900px) { .soc-needs-grid { grid-template-columns: 1fr; gap: 50px; } }

        .soc-industry-tags { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
        .soc-tag { background: #f0f9ff; color: var(--soc-blue); padding: 8px 18px; border-radius: 50px; font-weight: 700; font-size: 0.9rem; }

        .soc-mssp-box { background: var(--soc-light); padding: 50px; border-radius: 32px; border: 1px solid #f1f5f9; }
        .soc-mssp-title { font-size: 1.4rem; font-weight: 800; color: var(--soc-blue); margin-bottom: 24px; }
        .soc-check-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 15px; }
        .soc-check-list li { position: relative; padding-left: 40px; color: var(--soc-gray); font-weight: 500; line-height: 1.5; }
        .soc-check-list li::before {
          content: '✓';
          position: absolute; left: 0; top: 0;
          width: 28px; height: 28px; background: var(--soc-blue); color: #fff;
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          font-weight: 900; font-size: 14px;
        }

        /* Value Props Section */
        .soc-values-section { padding: 120px 0; background: var(--soc-light); }
        .soc-values-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 30px; }
        .soc-value-card { background: #fff; padding: 50px 35px; border-radius: 32px; text-align: center; transition: all 0.3s; border: 1px solid #f1f5f9; }
        .soc-value-card:hover { transform: translateY(-12px); border-color: var(--soc-blue); box-shadow: 0 25px 50px rgba(0,0,0,0.06); }
        .soc-value-icon { width: 80px; height: 80px; background: #f0f9ff; color: var(--soc-blue); border-radius: 24px; display: flex; align-items: center; justify-content: center; margin: 0 auto 30px; transform: rotate(-5deg); transition: transform 0.3s; }
        .soc-value-card:hover .soc-value-icon { transform: rotate(0deg) scale(1.1); }
        .soc-value-title { font-size: 1.4rem; font-weight: 800; color: var(--soc-dark); margin-bottom: 15px; }
        .soc-value-desc { font-size: 0.95rem; color: var(--soc-gray); line-height: 1.6; }

        /* Consultation Section */
        .soc-consult-section { padding: 120px 0; background: #fff; }
        .soc-compliance-strip { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin: 50px 0; }
        .soc-comp-item { background: white; border: 1px solid #e2e8f0; padding: 25px 45px; border-radius: 16px; font-weight: 900; font-size: 1.1rem; color: #94a3b8; transition: all 0.3s; }
        .soc-comp-item:hover { color: var(--soc-dark); border-color: var(--soc-blue); transform: scale(1.05); }
        .soc-btn-large { font-size: 1.2rem; padding: 22px 60px; }

        /* FAQ Section */
        .soc-faq-section { padding: 120px 0; background: var(--soc-light); }
        .soc-faq-list { max-width: 900px; margin: 0 auto; }
        .soc-faq-item { background: #fff; border-radius: 20px; border: 1px solid #f1f5f9; margin-bottom: 16px; transition: all 0.3s; }
        .soc-faq-item.active { border-color: var(--soc-blue); box-shadow: 0 10px 30px rgba(34, 167, 224, 0.08); }
        .soc-faq-q { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 28px 40px; border: none; background: none; cursor: pointer; text-align: left; }
        .soc-faq-text { font-size: 1.25rem; font-weight: 700; color: var(--soc-dark); }
        .soc-faq-icon { color: var(--soc-blue); }
        .soc-faq-a { padding: 0 40px 30px; color: var(--soc-gray); font-size: 1.1rem; line-height: 1.8; }
        .soc-faq-a-inner { border-top: 1px solid #f1f5f9; padding-top: 20px; }

        @media (max-width: 768px) {
          .soc-hero-title { font-size: 3rem; }
          .soc-dark-h2 { font-size: 2.2rem; }
          .soc-faq-text { font-size: 1.1rem; }
          .soc-faq-q { padding: 20px; }
          .soc-faq-a { padding: 0 20px 20px; }
          .soc-mssp-box { padding: 30px; }
          .soc-stats-row { flex-direction: column; gap: 20px; }
        }
      `}</style>
        </main>
    );
}
