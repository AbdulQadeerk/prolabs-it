"use client";

import {
  Monitor,
  Shield,
  ShieldCheck,
  Zap,
  Database,
  Lock,
  Globe,
  RefreshCcw,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layout,
  Terminal,
  Cloud,
  Layers,
  Settings,
  TrendingUp,
  Users,
  Smartphone,
  Laptop,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const keyCapabilities = [
  {
    title: "Simplified Deployment",
    desc: "Set up a complete desktop virtualization system on Azure without the need for gateway servers.",
    icon: <Cloud size={24} />,
  },
  {
    title: "Flexible Host Pools",
    desc: "Distribute host pools to handle a wide variety of workloads based on your specific needs.",
    icon: <Layers size={24} />,
  },
  {
    title: "Image Flexibility",
    desc: "Use custom images for mission-critical workloads or Azure Gallery images for testing.",
    icon: <Layout size={24} />,
  },
  {
    title: "Cost Optimization",
    desc: "Share resources across sessions with multi-session capabilities to reduce VM overhead.",
    icon: <TrendingUp size={24} />,
  },
  {
    title: "Personalized Desktops",
    desc: "Give users their own permanent, dedicated virtual machines for a sense of ownership.",
    icon: <Users size={24} />,
  },
  {
    title: "Intelligent Autoscaling",
    desc: "Automatically scale capacity based on time of day, demand, or specific business schedules.",
    icon: <Zap size={24} />,
  },
];

const securityFeatures = [
  {
    title: "End-to-End Protection",
    desc: "Integrated with Azure Firewall, Azure Security Center, and Microsoft Defender for Endpoint.",
    icon: <ShieldCheck size={22} />,
  },
  {
    title: "Conditional Access",
    desc: "Utilize dynamic policy generators to mitigate hazards before granting user access.",
    icon: <Lock size={22} />,
  },
  {
    title: "Multi-Factor Auth",
    desc: "Implement mandatory MFA for all logins to ensure secure environment entry.",
    icon: <Settings size={22} />,
  },
  {
    title: "RBAC & Threat Detection",
    desc: "Identify threats and manage permissions using Role-Based Access Control via Security Center.",
    icon: <Shield size={22} />,
  },
];

const costBenefits = [
  "Utilize existing Microsoft 365 or Windows per-user licenses at no extra cost",
  "Shut down and reallocate VM resources to minimize infrastructure expenses",
  "Maximize investment with Windows 10/11 multi-session capabilities",
  "Reduce up-front capital costs and align spending with actual demand",
  "Save management time with fully managed cloud VDI setup",
];

const deviceSupport = [
  { name: "Windows", icon: <Laptop size={20} /> },
  { name: "macOS", icon: <Laptop size={20} /> },
  { name: "iOS", icon: <Smartphone size={20} /> },
  { name: "Android", icon: <Smartphone size={20} /> },
  { name: "HTML5", icon: <Globe size={20} /> },
];

const faqs = [
  {
    question: "What is Azure Virtual Desktop?",
    answer:
      "Azure Virtual Desktop (formerly Windows Virtual Desktop) is a desktop and app virtualization service that runs on the cloud. It's the only virtual desktop infrastructure (VDI) that delivers simplified management, multi-session Windows 10/11, optimizations for Microsoft 365 Apps, and support for Remote Desktop Services (RDS) environments.",
  },
  {
    question: "How does Azure Virtual Desktop work?",
    answer:
      "Azure Virtual Desktop provides users with a complete Windows experience by hosting desktops and applications on Azure virtual machines. Users can connect from any device using the Remote Desktop client or an HTML5-capable browser, while Microsoft manages the underlying infrastructure like brokering, load balancing, and diagnostics.",
  },
  {
    question: "Can I use my existing Windows licenses?",
    answer:
      "Yes! You can use Azure Virtual Desktop with your existing eligible Microsoft 365 or Windows per-user licenses, which can significantly reduce costs. You only pay for the Azure virtual machines and storage that your virtual desktops use.",
  },
  {
    question: "Is Azure Virtual Desktop secure?",
    answer:
      "Absolutely. Security is built-in. AVD uses reverse connect technology, meaning you don't need to open inbound ports. It integrates with Azure Active Directory and supports Multi-Factor Authentication (MFA), Conditional Access, and Role-Based Access Control (RBAC) to ensure only authorized users can access your resources.",
  },
  {
    question: "What are the benefits of multi-session Windows 10/11?",
    answer:
      "Multi-session allows multiple users to connect to a single Azure virtual machine simultaneously. This provides a full Windows desktop experience while maximizing resource utilization and reducing the number of VMs you need to manage and pay for.",
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

export default function AzureVirtualDesktopPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-azure">
      {/* ═══ SECTION 1 — HERO BAND ═══ */}
      <section className="sv-hero-band">
        <div className="container">
          <nav className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Pages</span>
            <span className="sep">/</span>
            <span className="active">Azure Virtual Desktop Service</span>
          </nav>
          <h1 className="sv-hero-h1">Azure Virtual Desktop</h1>
        </div>
      </section>

      {/* ═══ SECTION 2 — HERO MAIN (text + image) ═══ */}
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
                Virtually access a secure remote desktop from anywhere.
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="sv-body-text"
                style={{ fontSize: "1.2rem", marginBottom: "40px" }}
              >
                Experience the seamless performance of Windows 10 and 11 on any
                device, fully managed in the cloud.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="sv-hero-btn-wrap"
                style={{ gap: "16px", flexWrap: "wrap" }}
              >
                <Link href="/contact" className="sv-btn-primary">
                  Get a Free 30-Minute Consultation <ArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="sv-meta-tags">
                <span className="sv-tag">AVD Solutions Delaware</span>
                <span className="sv-tag">Remote Desktop Delaware</span>
                <span className="sv-tag">Windows Virtualization</span>
                <span className="sv-tag">Azure Desktop Hosting</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="sv-hero-image"
            >
              <div
                className="sv-img-frame"
                style={{
                  boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
                  borderRadius: "24px",
                  overflow: "hidden",
                  maxHeight: "450px",
                  border: "1px solid #e1dfdd",
                }}
              >
                <Image
                  src="/avd_hero_dashboard_1772533817476.png"
                  alt="Azure Virtual Desktop Dashboard"
                  width={700}
                  height={500}
                  className="sv-float-img"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    width: "100%",
                    height: "auto",
                  }}
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 — COST REDUCTION ═══ */}
      <section className="sv-section-info">
        <div className="container">
          <div className="sv-info-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sv-info-card"
            >
              <h2 className="sv-h2" style={{ marginBottom: "24px" }}>
                Azure Virtual Desktop can reduce costs
              </h2>
              <p
                className="sv-p"
                style={{ marginBottom: "24px", color: "var(--sv-gray)" }}
              >
                If you already have a valid Microsoft 365 or Windows per-user
                license, Azure Virtual Desktop can be utilized by your
                organization at no additional cost. Using a managed service in
                the cloud for your whole VDI setup is a great way to save time
                and energy on management.
              </p>
              <div
                className="sv-pros-grid"
                style={{ gridTemplateColumns: "1fr", gap: "15px" }}
              >
                {costBenefits.map((point, idx) => (
                  <div
                    key={idx}
                    className="sv-pro-item"
                    style={{
                      background: "transparent",
                      padding: 0,
                      border: "none",
                    }}
                  >
                    <div
                      className="sv-check-icon-wrap"
                      style={{ marginTop: "4px" }}
                    >
                      <CheckCircle2 size={18} color="var(--sv-accent)" />
                    </div>
                    <span
                      style={{
                        fontSize: "0.95rem",
                        color: "var(--sv-ink)",
                        fontWeight: 600,
                      }}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sv-info-card sv-dark-card"
            >
              <h3 className="sv-h3">Universal Accessibility</h3>
              <p
                className="sv-p"
                style={{ color: "rgba(255,255,255,0.7)", marginBottom: "30px" }}
              >
                The Azure Virtual Desktop client is available for all major
                platforms, allowing you to access your desktop and apps from any
                internet-connected device.
              </p>
              <div
                className="sv-pills-row"
                style={{ justifyContent: "flex-start", gap: "10px" }}
              >
                {deviceSupport.map((device, idx) => (
                  <span
                    key={idx}
                    className="sv-pill"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      color: "#fff",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    {device.icon} {device.name}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: "40px" }}>
                <h4
                  className="sv-h4"
                  style={{ color: "#fff", marginBottom: "15px" }}
                >
                  Optimize Operations
                </h4>
                <p
                  className="sv-p"
                  style={{
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  Pick the right Azure VM for optimal performance and make use
                  of Windows 10/11 multi-session advantage to support numerous
                  users in a single instance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — MICROSOFT ECOSYSTEM ═══ */}
      <section className="sv-section-focus" style={{ background: "#fff" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sv-focus-box"
            style={{ gap: "60px" }}
          >
            {/* <div className="sv-focus-icon" style={{ background: "var(--sv-bg)", width: "120px", height: "120px" }}>
                            <Image src="/images/prolabs-logo-dark.png" alt="Microsoft Ecosystem" width={80} height={80} style={{ objectFit: 'contain' }} />
                        </div> */}
            <div>
              <h3 className="sv-h2" style={{ marginBottom: "20px" }}>
                Get the most out of Microsoft Teams and Office
              </h3>
              <p className="sv-p" style={{ color: "var(--sv-gray)" }}>
                If your company uses Microsoft products like Outlook, OneDrive,
                and Teams, we ensure your employees can perform tasks as
                efficiently on the virtual desktop as they would on a physical
                device. We specialize in optimizing these workflows for high
                latency or low bandwidth environments.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 5 — CAPABILITIES ═══ */}
      <section
        className="sv-section-info"
        style={{ background: "var(--sv-bg)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="sv-h2" style={{ marginBottom: "16px" }}>
              Key Capabilities
            </h2>
            <p className="sv-subtitle">
              Setting up an Azure Virtual Desktop environment is easy and
              flexible
            </p>
          </div>
          <div
            className="sv-grid-layout"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            }}
          >
            {keyCapabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="sv-grid-card"
                style={{ textAlign: "left", padding: "40px" }}
              >
                <div className="sv-grid-icon" style={{ margin: "0 0 24px 0" }}>
                  {cap.icon}
                </div>
                <h5
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 800,
                    marginBottom: "12px",
                  }}
                >
                  {cap.title}
                </h5>
                <p style={{ fontSize: "0.95rem", color: "var(--sv-gray)" }}>
                  {cap.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 — AMMP ═══ */}
      <section className="sv-section-info" style={{ background: "#fff" }}>
        <div className="container">
          <div className="sv-avd-ammp-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="sv-h2" style={{ marginBottom: "24px" }}>
                Deploy Azure Virtual Desktop with AMMP
              </h2>
              <p
                className="sv-p"
                style={{ color: "var(--sv-gray)", marginBottom: "20px" }}
              >
                The Azure Migration and Modernization Program (AMMP) offers
                evaluation, proof-of-concept, milestone rewards, Azure credits,
                and technical training for all three control planes.
              </p>
              <p className="sv-p" style={{ color: "var(--sv-gray)" }}>
                If a partner meets requirements for Advanced Specialization or
                for Citrix/VMware partners, they can enable whichever control
                planes they like in AMMP for a seamless transition.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sv-mssp-box"
              style={{
                background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
              }}
            >
              <h4 className="sv-mssp-title">AMMP Benefits</h4>
              <ul className="sv-check-list-pill">
                <li>Comprehensive Cloud Evaluation</li>
                <li>Proof-of-Concept Development</li>
                <li>Milestone-based Rewards</li>
                <li>Free Azure Service Credits</li>
                <li>Advanced Technical Training</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7 — TRUST & SECURITY ═══ */}
      <section className="sv-section-analysis">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2
              className="sv-h2"
              style={{ color: "white", marginBottom: "16px" }}
            >
              What makes Azure Virtual Desktop so trusted?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.2rem" }}>
              Integral safety features and compliance by design
            </p>
          </div>

          <div className="sv-tech-grid" style={{ marginBottom: "80px" }}>
            {securityFeatures.map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="sv-tech-card"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="sv-tech-icon"
                  style={{
                    background: "rgba(34, 167, 224, 0.1)",
                    color: "var(--sv-accent)",
                  }}
                >
                  {feat.icon}
                </div>
                <div>
                  <h4
                    className="sv-h4"
                    style={{ color: "#fff", marginBottom: "10px" }}
                  >
                    {feat.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sv-focus-box"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.05)",
              padding: "40px",
              color: "#fff",
            }}
          >
            <div style={{ textAlign: "center", width: "100%" }}>
              <ShieldCheck
                size={48}
                color="var(--sv-accent)"
                style={{ margin: "0 auto 20px" }}
              />
              <h3 className="sv-h3" style={{ color: "#fff" }}>
                Global Compliance Standards
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  maxWidth: "800px",
                  margin: "0 auto",
                }}
              >
                Take advantage of many certifications Azure Virtual Desktop has
                earned, including
                <strong>
                  {" "}
                  ISO 27001, 27018, 27701, PCI, FedRAMP High, HIPAA, and more
                </strong>
                . Secure your business data by keeping it in the cloud rather
                than on local PCs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 8 — FAQ ═══ */}
      <section className="sv-section-faq">
        <div className="container">
          <h2
            className="sv-h2"
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            FAQ's
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

      {/* ═══ SECTION 9 — CTA ═══ */}
      <section className="sv-section-cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="sv-cta-banner"
          >
            <h2
              className="sv-h2"
              style={{ color: "white", marginBottom: "20px" }}
            >
              Stay Connected with Secure Remote Desktops
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "1.15rem",
                marginBottom: "40px",
                maxWidth: "600px",
                margin: "0 auto 40px",
              }}
            >
              Get Azure Virtual Desktop Pricing and a free 30-minute
              consultation with our experts.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <Link href="/contact" className="sv-btn-white">
                Get Pricing Now <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="sv-btn-primary"
                style={{
                  background: "transparent",
                  border: "2px solid white",
                  boxShadow: "none",
                }}
              >
                Book Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
