"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Shield,
  Activity,
  Lock,
  Search,
  Zap,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Globe,
  Database,
  Cloud,
  Terminal,
  ShieldAlert,
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

export default function VaptPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-vapt">
      <Header />

      {/* Hero Header Band */}
      <section className="sv-hero-band">
        <div className="container">
          <nav className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Services</span>
            <span className="sep">/</span>
            <span className="active">
              Vulnerability Assessment and Penetration Testing
            </span>
          </nav>
          <h1 className="sv-hero-h1">Vulnerability Assessment and PT</h1>
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
                Vulnerability Assessment and Penetration Testing
              </motion.h2>
              <motion.p variants={fadeInUp} className="sv-hero-lead">
                At Professional Labs, we specialize in offering comprehensive
                Vulnerability Assessment and Penetration Testing (VAPT)
                services. Our mission is to identify, analyze, and fortify
                against potential security vulnerabilities in your IT
                infrastructure, ensuring robust and resilient digital defenses.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="sv-hero-btn-wrap sv-center"
              >
                <Link href="/contact" className="sv-btn-primary">
                  Get a free 30-minute consultation with a Professional Labs
                  expert. <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div variants={fadeInUp} className="sv-meta-tags mt-10">
                <span className="sv-tag">
                  Professional Labs VAPT Services Delaware.
                </span>
                <span className="sv-tag">
                  Vulnerability Assessment and Penetration Testing in Delaware.
                </span>
                <span className="sv-tag">
                  Secure Your IT Environment with VAPT Delaware.
                </span>
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
                  alt="VAPT Illustration"
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

      {/* Introduction */}
      <section className="sv-section-info">
        <div className="container">
          <div className="sv-info-header text-center mb-16">
            <h2 className="sv-h2">Introduction</h2>
            <p className="sv-lead mt-6 max-w-4xl mx-auto">
              At Professional Labs, we specialize in offering comprehensive
              Vulnerability Assessment and Penetration Testing (VAPT) services.
              Our mission is to identify, analyze, and fortify against potential
              security vulnerabilities in your IT infrastructure, ensuring
              robust and resilient digital defenses.
            </p>
          </div>
        </div>
      </section>

      {/* VAPT Services Grid */}
      <section className="sv-section-grid">
        <div className="container">
          <h2 className="sv-h2 text-center mb-16">Our VAPT Services</h2>
          <div className="sv-grid-layout">
            {/* Vulnerability Assessment */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="sv-grid-card"
            >
              <div className="sv-grid-icon">
                <Search size={24} />
              </div>
              <h5>Vulnerability Assessment</h5>
              <p>
                <strong>Overview:</strong> We perform exhaustive assessments to
                pinpoint vulnerabilities in your network, systems, and
                applications.
                <br />
                <br />
                <strong>Approach:</strong> Utilizing state-of-the-art tools and
                methodologies, our team evaluates your IT environment for known
                vulnerabilities, delivering a detailed report and actionable
                recommendations.
              </p>
            </motion.div>

            {/* Penetration Testing */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="sv-grid-card"
            >
              <div className="sv-grid-icon">
                <ShieldAlert size={24} />
              </div>
              <h5>Penetration Testing</h5>
              <p>
                <strong>Overview:</strong> Our expert team simulates
                cyber-attacks on your systems to assess the effectiveness of
                your security measures.
                <br />
                <br />
                <strong>Methodology:</strong> Employing ethical hacking
                techniques, we uncover weaknesses that could be exploited,
                ensuring your defenses are up-to-date and effective.
              </p>
            </motion.div>

            {/* Web App Security */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="sv-grid-card"
            >
              <div className="sv-grid-icon">
                <Globe size={24} />
              </div>
              <h5>Web Application Security Testing</h5>
              <p>
                <strong>Overview:</strong> Specialized testing for web
                applications to detect security flaws and vulnerabilities.
                <br />
                <br />
                <strong>Testing Scope:</strong> We focus on common
                vulnerabilities like SQL injection, Cross-Site Scripting (XSS),
                and adherence to OWASP Top 10 standards.
              </p>
            </motion.div>

            {/* Cloud Security */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="sv-grid-card"
            >
              <div className="sv-grid-icon">
                <Cloud size={24} />
              </div>
              <h5>Cloud Security Assessment</h5>
              <p>
                <strong>Overview:</strong> Tailored evaluations for cloud
                environments to ensure security and compliance.
                <br />
                <br />
                <strong>Service Details:</strong> Examination of cloud
                configuration, security controls, and data protection measures
                to mitigate cloud-specific threats.
              </p>
            </motion.div>

            {/* AD VAPT */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="sv-grid-card"
            >
              <div className="sv-grid-icon">
                <Database size={24} />
              </div>
              <h5>Active Directory VAPT</h5>
              <p>
                <strong>Overview:</strong> Targeted assessment and testing of
                your Active Directory setup.
                <br />
                <br />
                <strong>Assessment Focus:</strong> We check for
                misconfigurations, potential privilege escalation, and other
                security loopholes in your AD environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="sv-section-benefits">
        <div className="container">
          <div className="sv-benefits-head text-center mb-16">
            <h2 className="sv-h2 mb-4">
              Why Choose Professional Labs for VAPT?
            </h2>
          </div>

          <div className="sv-benefits-grid">
            <div className="sv-benefit-card dark">
              <h4 className="sv-h4 mb-4">Expert Team</h4>
              <p className="sv-p">
                Our cybersecurity professionals are highly experienced in
                diverse aspects of VAPT.
              </p>
            </div>
            <div className="sv-benefit-card blue">
              <h4 className="sv-h4 mb-4">Tailored Solutions</h4>
              <p className="sv-p">
                We provide customized testing based on your unique business
                requirements.
              </p>
            </div>
            <div className="sv-benefit-card dark">
              <h4 className="sv-h4 mb-4">In-depth Reporting</h4>
              <p className="sv-p">
                Our reports offer detailed insights into vulnerabilities with
                practical remediation strategies.
              </p>
            </div>
            <div className="sv-benefit-card blue">
              <h4 className="sv-h4 mb-4">Ethical and Confidential</h4>
              <p className="sv-p">
                We conduct all assessments ethically and maintain
                confidentiality throughout the process.
              </p>
            </div>
          </div>
          <div className="pt-24 pb-12 flex justify-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="sv-hero-btn-wrap"
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
          <div className="mb-28 text-center">
            <h2 className="sv-h2">FAQ’s</h2>
          </div>
          <div className="sv-faq-wrap">
            <div className={`sv-faq-item ${openFaq === 0 ? "sv-active" : ""}`}>
              <button className="sv-faq-q" onClick={() => setOpenFaq(0)}>
                <span className="sv-faq-qtext">
                  What is the difference between Vulnerability Assessment and
                  Penetration Testing?
                </span>
                <span className="sv-faq-ico">
                  {openFaq === 0 ? <ChevronUp /> : <ChevronDown />}
                </span>
              </button>
            </div>

            <div className={`sv-faq-item ${openFaq === 1 ? "sv-active" : ""}`}>
              <button
                className="sv-faq-q"
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
              >
                <span className="sv-faq-qtext">
                  How often should VAPT be conducted?
                </span>
                <span className="sv-faq-ico">
                  {openFaq === 1 ? <ChevronUp /> : <ChevronDown />}
                </span>
              </button>
            </div>

            <div className={`sv-faq-item ${openFaq === 2 ? "sv-active" : ""}`}>
              <button
                className="sv-faq-q"
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
              >
                <span className="sv-faq-qtext">
                  Is data security maintained during the VAPT process?
                </span>
                <span className="sv-faq-ico">
                  {openFaq === 2 ? <ChevronUp /> : <ChevronDown />}
                </span>
              </button>
            </div>

            <div className={`sv-faq-item ${openFaq === 3 ? "sv-active" : ""}`}>
              <button
                className="sv-faq-q"
                onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
              >
                <span className="sv-faq-qtext">
                  Can VAPT be customized for different environments like cloud
                  or web applications?
                </span>
                <span className="sv-faq-ico">
                  {openFaq === 3 ? <ChevronUp /> : <ChevronDown />}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
