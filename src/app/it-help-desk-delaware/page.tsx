"use client";

import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Headphones,
  Monitor,
  Phone,
  Mail,
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
    desc: "Trained technicians and IT administrators who quickly troubleshoot common IT-related problems, providing you with an affordable IT helpdesk solution.",
    icon: <Globe size={24} />,
  },
  {
    title: "Multi-Channel Support Options",
    desc: "Accessible via phone, email, web chat, mobile apps, and web portals — allowing your users to be assisted in the manner they prefer.",
    icon: <MessageSquare size={24} />,
  },
  {
    title: "On-site Support Services",
    desc: "When remote assistance falls short, our qualified IT support personnel resolve all IT issues on-site, ensuring systems continue to operate without interruptions.",
    icon: <Wrench size={24} />,
  },
  {
    title: "Technical Support",
    desc: "Upkeep and support of computer hardware, software, and mobile devices. Trouble-free operation guaranteed by timely and sufficient technical support.",
    icon: <Cpu size={24} />,
  },
  {
    title: "Financially Backed SLAs",
    desc: "Service Level Agreements based on our capacity to always guarantee effective, efficient, and highest-quality support.",
    icon: <ShieldCheck size={24} />,
  },
  {
    title: "24/7/365 Availability",
    desc: "Our IT service desk solutions are accessible by phone, email, web chat, and secure web portal around the clock, every day of the year.",
    icon: <Clock size={24} />,
  },
];

const processSteps = [
  { name: "Raise Ticket", icon: <FileText size={20} />, color: "#22a7e0" },
  { name: "Contact You", icon: <Phone size={20} />, color: "#1b3164" },
  { name: "Self-Help", icon: <Layout size={20} />, color: "#22a7e0" },
  { name: "Expert Advice", icon: <Settings size={20} />, color: "#1b3164" },
  { name: "Resolved", icon: <CheckCircle2 size={20} />, color: "#22a7e0" },
];

const strengths = [
  "Nearly two decades of experience in the IT sector",
  "Backend expertise: .NET, Java, PHP, Node, and more",
  "Frontend expertise: Angular, React, Vue JS, JavaScript, HTML, CSS",
  "Easy monitoring and collaborative remote communication technologies",
  "Wide variety of open-source modification projects",
  "Free ITSM access with full API interaction for third-party ticketing",
];

const whyUsItems = [
  {
    title: "Customers Come First",
    desc: "Your satisfaction and success are at the heart of everything we do.",
    icon: <Users size={24} />,
  },
  {
    title: "Business Awareness",
    desc: "We understand how IT aligns with your broader business objectives.",
    icon: <TrendingUp size={24} />,
  },
  {
    title: "Time Management",
    desc: "Adept at resolving issues quickly to minimize downtime.",
    icon: <Clock size={24} />,
  },
  {
    title: "Attention to Detail",
    desc: "Thorough troubleshooting ensures problems are fully resolved.",
    icon: <Zap size={24} />,
  },
  {
    title: "Collaborative Team",
    desc: "We work smoothly with your team to deliver seamless support.",
    icon: <LifeBuoy size={24} />,
  },
  {
    title: "Analytical Mindset",
    desc: "Patient task managers adept at resolving unforeseen challenges.",
    icon: <Award size={24} />,
  },
];

const faqs = [
  {
    question: "What is IT Help Desk Support Service?",
    answer:
      "IT Help Desk Support Service is a centralized resource designed to provide end-users with information and support related to a company's IT infrastructure. It handles incident management, troubleshooting, and routine IT queries to ensure smooth business operations.",
  },
  {
    question: "What does an IT help desk technician do?",
    answer:
      "An IT help desk technician provides technical support to end-users by diagnosing and resolving hardware, software, and network issues. They handle ticket management, escalate complex problems, and ensure timely resolution of all IT-related concerns.",
  },
  {
    question: "What is the difference between the help desk and IT support?",
    answer:
      "A help desk is typically the first point of contact for users experiencing IT issues, focused on quick resolution of common problems. IT support encompasses a broader range of services including infrastructure management, system administration, and strategic IT planning.",
  },
  {
    question: "What are the hard skills of the IT help desk?",
    answer:
      "The staff at the help desk is composed of patient task managers adept at resolving unforeseen challenges. Skills include: putting customers first, business awareness, time management, attention to detail, collaboration, patience, willingness to learn, working well under stress, an analytical mind, and being empathetic.",
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

export default function ITHelpdeskPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-helpdesk">
      {/* ═══ SECTION 1 — HERO BAND ═══ */}
      <section className="sv-hero-band">
        <div className="container">
          <nav className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Pages</span>
            <span className="sep">/</span>
            <span className="active">IT Help Desk</span>
          </nav>
          <h1 className="sv-hero-h1">IT Help Desk Services</h1>
        </div>
      </section>

      {/* ═══ SECTION 2 — HERO MAIN ═══ */}
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
                Our IT Help Desk Services Will Manage Your IT Infrastructure and
                Software
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
                We are one of the leading providers of IT help desk services,
                offering IT support that enhances the end-user experience while
                ensuring all software and hardware are constantly monitored for
                changes and errors.
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
                  Get a Free 30-Minute Consultation <ArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="sv-meta-tags">
                <span className="sv-tag">IT Help Desk Delaware</span>
                <span className="sv-tag">Remote IT Support</span>
                <span className="sv-tag">24/7 IT Help Desk Solutions</span>
                <span className="sv-tag">Managed IT Support</span>
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
                  src="/helpdesk_hero.png"
                  alt="IT Help Desk Services Dashboard"
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

      {/* ═══ SECTION 3 — OVERVIEW ═══ */}
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
                We offer the industry's premier IT support services. With our
                comprehensive IT support, you can protect and safeguard your IT
                infrastructure investment against unknown threats and unexpected
                downtimes, ensuring that overall productivity and functionality
                are never jeopardized.
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
                    Support Available
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
                    Years Experience
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
                Our Helpdesk Approach
              </h4>
              <p className="sv-p" style={{ fontSize: "0.95rem" }}>
                Professional Labs helpdesk services provide our customers with
                access to vital IT support functions, including troubleshooting,
                guidance for routine IT issues, and the capacity to solve
                pertinent IT problems.
              </p>
              <ul className="sv-check-list-pill" style={{ marginTop: "0" }}>
                <li>Troubleshooting & Guidance</li>
                <li>Hardware & Software Monitoring</li>
                <li>Multi-Platform Support</li>
                <li>Dedicated Account Managers</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — CORE SERVICES GRID ═══ */}
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
              Comprehensive outsourced IT support services for global businesses
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
              We have a well-defined procedure for providing IT Help Desk
              Support
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
                style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem" }}
              >
                Quick help desk support without the high overhead costs. Our
                professionals work smoothly with your team to give high-quality
                IT support services. All Professional Labs Help Desk products
                include free ITSM access with full API interaction for
                third-party ticketing systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 — STRENGTHS (DARK) ═══ */}
      <section className="sv-section-analysis">
        <div className="container">
          <div
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
                style={{ color: "white", marginBottom: "36px" }}
              >
                Our Strengths in IT Help Desk Services
              </h2>
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
                Get Offshore IT Help Desk Services
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  marginBottom: "36px",
                }}
              >
                We have nearly two decades of experience in the IT sector. Let
                us assure you first-rate IT managed support services.
              </p>
              <Link href="/contact" className="sv-btn-white">
                Get Started Now <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7 — WHY US ═══ */}
      <section
        className="sv-section-info"
        style={{ background: "var(--sv-bg)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="sv-h2">Why Professional Labs?</h2>
            <p className="sv-subtitle">
              Skills and values that define our IT Help Desk excellence
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
            FAQ's for IT Help Desk
          </h2>
          <div
            className="sv-faq-wrap"
            style={{ maxWidth: "900px", margin: "0 auto" }}
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`sv-faq-item ${openFaq === index ? "sv-active" : ""}`}
              >
                <button
                  className="sv-faq-q"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
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
              Get Offshore IT Help Desk Services NOW
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
              Our IT service desk solutions are accessible by phone, email, web
              chat, and a secure web portal 24/7/365.
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
                Call Now: +1 206 350 9033
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
