"use client";

import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Headphones,
  Monitor,
  Phone,
  MessageSquare,
  Wrench,
  ShieldCheck,
  Clock,
  Users,
  Settings,
  Globe,
  Zap,
  LifeBuoy,
  FileText,
  Award,
  Cpu,
  Layout,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const coreServices = [
  {
    title: "Remote IT Support Services",
    desc: "Our trained technicians and IT administrators quickly diagnose and resolve technical issues remotely, offering a cost-effective and efficient help desk solution.",
    icon: <Globe size={24} />,
  },
  {
    title: "Multi-Channel Support Options",
    desc: "Users can contact our IT help desk through phone, email, live chat, mobile apps, and secure web portals, ensuring support is always accessible through preferred communication channels.",
    icon: <MessageSquare size={24} />,
  },
  {
    title: "On-Site Support Services",
    desc: "When remote troubleshooting is not sufficient, our technical specialists can provide on-site IT support to resolve hardware, network, or infrastructure issues directly.",
    icon: <Wrench size={24} />,
  },
  {
    title: "Technical Support",
    desc: "Our support team provides maintenance and assistance for computers, servers, software applications, and mobile devices, ensuring reliable system performance.",
    icon: <Cpu size={24} />,
  },
  {
    title: "Financially Backed SLAs",
    desc: "Professional Labs offers service level agreements (SLAs) designed to guarantee reliable response times and consistent IT service performance.",
    icon: <ShieldCheck size={24} />,
  },
  {
    title: "24/7/365 IT Service Desk Availability",
    desc: "Our IT help desk is available around the clock, every day of the year, ensuring continuous support for your employees and IT infrastructure.",
    icon: <Clock size={24} />,
  },
];

const processSteps = [
  { name: "Raise Ticket", icon: <FileText size={20} />, color: "#22a7e0" },
  { name: "Contact You", icon: <Phone size={20} />, color: "#1b3164" },
  { name: "Self-Help Assistance", icon: <Layout size={20} />, color: "#22a7e0" },
  { name: "Expert Technical Advice", icon: <Settings size={20} />, color: "#1b3164" },
  { name: "Issue Resolved", icon: <CheckCircle2 size={20} />, color: "#22a7e0" },
];

const strengths = [
  "Nearly two decades of IT industry experience",
  "Backend expertise including .NET, Java, PHP, Node.js, and more",
  "Frontend technologies including Angular, React, Vue.js, JavaScript, HTML, and CSS",
  "Advanced monitoring and remote collaboration tools",
  "Open-source integration and customization capabilities",
  "Free ITSM access with full API integration for ticketing systems",
];

const whyUsItems = [
  {
    title: "Customers First",
    desc: "We prioritize customer satisfaction by ensuring every support request is handled promptly and professionally.",
    icon: <Users size={24} />,
  },
  {
    title: "Business-Focused IT Support",
    desc: "Our team understands how technology impacts business operations and aligns support services with organizational goals.",
    icon: <TrendingUp size={24} />,
  },
  {
    title: "Efficient Issue Resolution",
    desc: "Our technicians work quickly and efficiently to resolve technical issues and minimize downtime.",
    icon: <Clock size={24} />,
  },
  {
    title: "Detailed Troubleshooting",
    desc: "Thorough diagnostic processes ensure problems are properly identified and permanently resolved.",
    icon: <Zap size={24} />,
  },
  {
    title: "Collaborative IT Support",
    desc: "We integrate seamlessly with your internal IT team to provide a smooth and effective support experience.",
    icon: <LifeBuoy size={24} />,
  },
  {
    title: "Analytical Problem Solving",
    desc: "Our experienced support specialists use a structured approach to diagnose and resolve complex IT challenges.",
    icon: <Award size={24} />,
  },
];

const faqItems = [
  {
    question: "What is IT help desk support service?",
    answer:
      "IT help desk support is a centralized service that assists employees or users with technical issues related to software, hardware, networks, and IT systems. It provides troubleshooting, incident management, and technical guidance to maintain smooth business operations.",
  },
  {
    question: "What does an IT help desk technician do?",
    answer:
      "An IT help desk technician provides technical assistance to users by diagnosing and resolving issues related to computers, applications, network connectivity, and other IT infrastructure components.",
  },
  {
    question: "What is the difference between a help desk and IT support?",
    answer:
      "A help desk focuses on end-user issue resolution and technical assistance, while broader IT support may include infrastructure management, system administration, and long-term technology strategy.",
  },
  {
    question: "What skills are required for IT help desk professionals?",
    answer:
      "IT help desk professionals require skills such as technical troubleshooting, networking knowledge, operating system management, communication skills, and familiarity with IT service management tools.",
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

export default function ITHelpDeskClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-helpdesk">
      {/* ═══ SECTION 1 — HERO BAND ═══ */}
      <section className="sv-hero-band">
        <div className="container">
          <nav className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Services</span>
            <span className="sep">/</span>
            <span className="active">IT Help Desk Services</span>
          </nav>
          <h1 className="sv-hero-h1">
            IT Help Desk Services for Reliable 24/7 IT Support
          </h1>
        </div>
      </section>

      {/* ═══ SECTION 2 — HERO CONTENT ═══ */}
      <section className="sv-hero-main">
        <div className="container">
          <div className="sv-hero-grid">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="sv-hero-content"
              style={{ paddingRight: "20px" }}
            >
              <motion.h2
                variants={fadeInUp}
                className="sv-display-h2"
                style={{ lineHeight: "1.2", marginBottom: "20px" }}
              >
                Managed IT Help Desk Services for Infrastructure and Software
                Support
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="sv-body-text"
                style={{
                  fontSize: "1.15rem",
                  marginBottom: "35px",
                  lineHeight: "1.6",
                }}
              >
                Our IT support specialists deliver fast troubleshooting,
                proactive monitoring, and technical assistance to ensure your
                hardware, software, and networks operate smoothly. By resolving
                issues quickly and preventing system failures, we help
                organizations maintain productivity and reduce downtime.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="sv-hero-btn-wrap"
                style={{ gap: "16px", flexWrap: "wrap", marginBottom: "40px" }}
              >
                <Link
                  href="/contact"
                  className="sv-btn-primary"
                  style={{ padding: "18px 40px" }}
                >
                  Get a Free 30-Minute Consultation{" "}
                  <ArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="sv-meta-tags">
                <span className="sv-tag">✔ Remote IT Support Services</span>
                <span className="sv-tag">
                  ✔ 24/7 IT Help Desk Availability
                </span>
                <span className="sv-tag">✔ Managed IT Support Solutions</span>
                <span className="sv-tag">
                  ✔ End-User Technical Assistance
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
              <div
                className="sv-image-frame sv-helpdesk-img-frame"
                style={{
                  boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
                  borderRadius: "24px",
                  overflow: "hidden",
                  maxHeight: "450px",
                  border: "1px solid #e1dfdd",
                }}
              >
                <Image
                  src="/helpdesk_hero.png"
                  alt="IT Help Desk Services - 24/7 IT support and managed service desk"
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

      {/* ═══ SECTION 3 — CORE SERVICES OVERVIEW ═══ */}
      <section className="sv-section-info" style={{ background: "#fff" }}>
        <div className="container">
          <div className="sv-hero-grid" style={{ alignItems: "stretch" }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sv-info-card"
            >
              <h2 className="sv-h2" style={{ marginBottom: "24px" }}>
                Professional Labs Core IT Help Desk Services
              </h2>
              <p
                className="sv-p"
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  color: "var(--sv-gray)",
                }}
              >
                Professional Labs delivers reliable IT support services and
                service desk solutions designed to protect your technology
                infrastructure and support your workforce.
              </p>
              <p
                className="sv-p"
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  color: "var(--sv-gray)",
                  marginTop: "16px",
                }}
              >
                Our comprehensive help desk solutions ensure that your systems,
                software, and networks remain secure, monitored, and
                operational, reducing the risk of unexpected downtime and
                operational disruption.
              </p>
              <div style={{ marginTop: "32px", display: "flex", gap: "24px" }}>
                <div
                  style={{
                    borderLeft: "4px solid var(--sv-accent)",
                    paddingLeft: "15px",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: 800,
                      color: "var(--sv-ink)",
                    }}
                  >
                    24/7
                  </h4>
                  <span
                    style={{ fontSize: "0.85rem", color: "var(--sv-gray)" }}
                  >
                    Support Availability
                  </span>
                </div>
                <div
                  style={{
                    borderLeft: "4px solid var(--sv-ink)",
                    paddingLeft: "15px",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: 800,
                      color: "var(--sv-ink)",
                    }}
                  >
                    20+
                  </h4>
                  <span
                    style={{ fontSize: "0.85rem", color: "var(--sv-gray)" }}
                  >
                    Years of IT Industry Experience
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sv-focus-box"
              style={{
                background: "var(--sv-bg)",
                padding: "40px",
                borderRadius: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                width: "100%",
                margin: "0",
                alignItems: "flex-start",
              }}
            >
              <h4 className="sv-h4" style={{ marginBottom: "0" }}>
                Our IT Help Desk Support Approach
              </h4>
              <p className="sv-p" style={{ fontSize: "0.95rem" }}>
                Professional Labs help desk services provide organizations with
                centralized IT support for troubleshooting, user assistance, and
                technical issue resolution.
              </p>
              <p
                className="sv-p"
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  marginTop: "-10px",
                }}
              >
                Our structured service approach includes:
              </p>
              <ul className="sv-check-list-pill" style={{ marginTop: "0" }}>
                <li>Troubleshooting and technical guidance for users</li>
                <li>
                  Continuous monitoring of hardware and software systems
                </li>
                <li>Multi-platform support for modern IT environments</li>
                <li>Dedicated account management for service coordination</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — GLOBAL IT SUPPORT SERVICES ═══ */}
      <section
        className="sv-section-info"
        style={{ background: "var(--sv-bg)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="sv-h2" style={{ marginBottom: "16px" }}>
              Our Global IT Support Services Include
            </h2>
            <p
              className="sv-subtitle"
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              Professional Labs provides comprehensive outsourced IT help desk
              services designed to support organizations with distributed teams
              and modern digital infrastructure.
            </p>
          </div>
          <div
            className="sv-grid-layout"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            }}
          >
            {coreServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="sv-grid-card"
              >
                <div
                  className="sv-grid-icon"
                  style={{
                    background: "rgba(34, 167, 224, 0.1)",
                    color: "var(--sv-accent)",
                  }}
                >
                  {service.icon}
                </div>
                <h5
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    marginBottom: "10px",
                  }}
                >
                  {service.title}
                </h5>
                <p style={{ fontSize: "0.9rem", color: "var(--sv-gray)" }}>
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 — PROCESS STEPS ═══ */}
      <section className="sv-section-info" style={{ background: "#fff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="sv-h2" style={{ marginBottom: "16px" }}>
              Our IT Help Desk Support Process
            </h2>
            <p
              className="sv-subtitle"
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              We follow a structured process to deliver fast and effective IT
              help desk support.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{
                  background: "#f8fafc",
                  padding: "30px",
                  borderRadius: "20px",
                  width: "200px",
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background: step.color,
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto 15px",
                    color: "#fff",
                  }}
                >
                  {step.icon}
                </div>
                <h5 style={{ fontWeight: 800, fontSize: "1.1rem" }}>
                  {step.name}
                </h5>
                {idx < processSteps.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      right: "-25px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "var(--sv-gray)",
                    }}
                  >
                    <ArrowRight size={20} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div
            style={{
              marginTop: "60px",
              background: "var(--sv-ink)",
              padding: "40px",
              borderRadius: "24px",
              color: "#fff",
            }}
          >
            <div
              className="sv-helpdesk-quick-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: "40px",
                alignItems: "center",
              }}
            >
              <div>
                <h3
                  className="sv-h3"
                  style={{ color: "#fff", marginBottom: "15px" }}
                >
                  Quick Help Desk Support
                </h3>
                <div
                  style={{
                    background: "var(--sv-accent)",
                    height: "4px",
                    width: "60px",
                  }}
                ></div>
              </div>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                }}
              >
                Professional Labs provides fast and efficient IT help desk
                support without the overhead costs of maintaining an internal IT
                support team. Our specialists work closely with your organization
                to deliver high-quality IT support services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 — STRENGTHS (DARK) ═══ */}
      <section className="sv-section-analysis">
        <div className="container">
          <div
            className="sv-helpdesk-strengths-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
              alignItems: "center",
            }}
          >
            <div>
              <h2
                className="sv-h2"
                style={{ color: "white", marginBottom: "20px" }}
              >
                Our Strengths in IT Help Desk Services
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  marginBottom: "30px",
                }}
              >
                Professional Labs brings extensive technical expertise and
                operational efficiency to help desk management.
              </p>
              <div
                className="sv-pros-grid"
                style={{ gridTemplateColumns: "1fr" }}
              >
                {strengths.map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="sv-pro-item"
                  >
                    <div className="sv-check-icon-wrap">
                      <CheckCircle2 size={20} color="var(--sv-accent)" />
                    </div>
                    <span
                      style={{
                        color: "rgba(255,255,255,0.88)",
                        fontWeight: 500,
                      }}
                    >
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "32px",
                padding: "56px 40px",
                textAlign: "center",
              }}
            >
              <h3
                className="sv-h3"
                style={{ color: "white", marginBottom: "20px" }}
              >
                Offshore IT Help Desk Services
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  marginBottom: "36px",
                }}
              >
                Professional Labs provides reliable offshore IT help desk
                support services that help organizations scale their IT
                operations while controlling operational costs.
              </p>
              <Link href="/contact" className="sv-btn-white">
                Get Started Now <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7 — WHY CHOOSE US ═══ */}
      <section
        className="sv-section-info"
        style={{ background: "var(--sv-bg)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="sv-h2">
              Why Choose Professional Labs for IT Help Desk Services?
            </h2>
            <p className="sv-subtitle">
              Professional Labs combines technical expertise, service efficiency,
              and customer-focused support to deliver reliable IT help desk
              solutions.
            </p>
          </div>
          <div
            className="sv-grid-layout"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            }}
          >
            {whyUsItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="sv-grid-card"
              >
                <div
                  className="sv-grid-icon"
                  style={{
                    background: "rgba(34, 167, 224, 0.1)",
                    color: "var(--sv-accent)",
                  }}
                >
                  {item.icon}
                </div>
                <h5
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </h5>
                <p style={{ fontSize: "0.9rem", color: "var(--sv-gray)" }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 8 — FAQ ═══ */}
      <section className="sv-section-faq" style={{ background: "#fff" }}>
        <div className="container">
          <h2
            className="sv-h2"
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            Frequently Asked Questions About IT Help Desk Services
          </h2>
          <div
            className="sv-faq-wrap"
            style={{ maxWidth: "900px", margin: "0 auto" }}
          >
            {faqItems.map((faq, index) => (
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
                  <span className="sv-faq-qtext" style={{ fontWeight: 700 }}>
                    {faq.question}
                  </span>
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
                        <p style={{ lineHeight: "1.8" }}>{faq.answer}</p>
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
              Get Offshore IT Help Desk Services Now
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "1.15rem",
                marginBottom: "40px",
                maxWidth: "700px",
                margin: "0 auto 40px",
              }}
            >
              Our IT service desk solutions are accessible 24/7 via phone,
              email, live chat, and secure web portals, ensuring your business
              receives continuous IT support whenever needed.
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
                Get Free Consultation <ArrowRight size={18} />
              </Link>
              <Link
                href="tel:+12063509033"
                className="sv-btn-primary"
                style={{
                  background: "transparent",
                  border: "2px solid white",
                  boxShadow: "none",
                }}
              >
                Call Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
