"use client";

import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  LayoutDashboard,
  Users,
  Clock,
  BarChart3,
  MessageSquare,
  Bell,
  ShieldCheck,
  BookOpen,
  Globe,
  Cloud,
  Settings,
  Zap,
  Target,
  TrendingUp,
  Layers,
  Award,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const keyFeatures = [
  {
    title: "Centralized Ticket Dashboard",
    desc: "All requests from email, phone, chat, or social media are converted into structured tickets within a single dashboard for easy tracking.",
    icon: <LayoutDashboard size={24} />,
  },
  {
    title: "Automated Ticket Assignment",
    desc: "Tickets are automatically routed to the appropriate department or support agent based on predefined rules, ensuring faster response times.",
    icon: <Settings size={24} />,
  },
  {
    title: "SLA Management",
    desc: "Define and monitor Service Level Agreements (SLAs) to maintain response standards and ensure timely issue resolution.",
    icon: <Clock size={24} />,
  },
  {
    title: "Reporting & Analytics",
    desc: "Access detailed reports on ticket volume, resolution time, customer satisfaction, and agent productivity.",
    icon: <BarChart3 size={24} />,
  },
  {
    title: "Omnichannel Support",
    desc: "Integrate support channels including email, live chat, calls, and social media so customers can reach you through their preferred channel.",
    icon: <MessageSquare size={24} />,
  },
  {
    title: "Alerts & Notifications",
    desc: "Automatic alerts for overdue tickets and instant notifications keep both customers and support agents informed.",
    icon: <Bell size={24} />,
  },
  {
    title: "Role-Based Access & Collaboration",
    desc: "Secure role-based access allows teams to collaborate efficiently while maintaining data control.",
    icon: <ShieldCheck size={24} />,
  },
  {
    title: "Knowledge Base Integration",
    desc: "Enable self-service with a knowledge base containing FAQs, tutorials, and troubleshooting guides to reduce ticket volume.",
    icon: <BookOpen size={24} />,
  },
  {
    title: "Multi-Language Support",
    desc: "Deliver support in multiple languages to improve global customer engagement.",
    icon: <Globe size={24} />,
  },
  {
    title: "Cloud & Mobile Access",
    desc: "Cloud-based access allows support teams to manage tickets from anywhere with mobile-friendly capabilities.",
    icon: <Cloud size={24} />,
  },
];

const painPoints = [
  "Lost or delayed customer requests",
  "Lack of visibility into open or pending issues",
  "Frustrated customers due to inconsistent service",
  "Limited tracking of support team performance",
];

const solutions = [
  "Centralize all support requests in one platform",
  "Automate workflows to reduce delays",
  "Monitor team productivity and service quality",
  "Deliver consistent, high-quality customer experiences",
];

const whyChooseItems = [
  {
    title: "Team Collaboration",
    desc: "Internal notes, shared dashboards, and automated routing allow teams to handle complex support issues without confusion.",
    icon: <Users size={24} />,
  },
  {
    title: "Business Insights",
    desc: "Advanced analytics reveal recurring problems, peak request periods, and customer support trends.",
    icon: <TrendingUp size={24} />,
  },
  {
    title: "Scalable Platform",
    desc: "Cloud deployment and seamless integrations ensure your support system grows with your business.",
    icon: <Layers size={24} />,
  },
  {
    title: "Data-Driven Decisions",
    desc: "Use performance analytics to improve staffing, optimize service workflows, and increase efficiency.",
    icon: <Target size={24} />,
  },
  {
    title: "Faster Resolution",
    desc: "Automated ticket assignment and SLA tracking ensure faster problem resolution.",
    icon: <Zap size={24} />,
  },
  {
    title: "Customer Satisfaction",
    desc: "Consistent, reliable, and multi-channel support helps build trust and long-term customer loyalty.",
    icon: <Award size={24} />,
  },
];

const faqItems = [
  {
    question: "What is a ticketing system and how does it work?",
    answer:
      "A ticketing system is software used to manage customer support requests. Each inquiry is converted into a ticket that is tracked from submission to resolution, allowing teams to organize tasks, prioritize issues, and maintain service quality.",
  },
  {
    question:
      "Can the ticketing system handle requests from multiple channels?",
    answer:
      "Yes. Professional Labs ticketing solutions support omnichannel communication, allowing tickets to be created from email, chat, phone calls, and social media platforms in a single dashboard.",
  },
  {
    question: "Is a ticketing system suitable for small businesses?",
    answer:
      "Absolutely. Small businesses benefit from ticketing systems by improving response times, organizing support requests, and ensuring no customer inquiry is missed as the business grows.",
  },
  {
    question: "Can the ticketing system integrate with our existing tools?",
    answer:
      "Yes. Our ticketing systems integrate with CRM platforms, communication tools, analytics platforms, and internal business applications to ensure smooth workflows.",
  },
  {
    question:
      "What support does Professional Labs provide after implementation?",
    answer:
      "Professional Labs offers onboarding assistance, system configuration, training, maintenance, and ongoing support to ensure your ticketing platform continues to operate efficiently.",
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

export default function TicketingSystemClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-ticketing">
      {/* ═══ SECTION 1 — HERO BAND ═══ */}
      <section className="sv-hero-band">
        <div className="container">
          <nav className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Services</span>
            <span className="sep">/</span>
            <span className="active">Ticketing System</span>
          </nav>
          <h1 className="sv-hero-h1">
            Ticketing System Software &amp; Customer Support Management
            Solutions
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
                Streamline Customer Support with a Smart Ticketing System
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
                At Professional Labs, we help businesses improve customer
                experience with intelligent ticketing system software designed
                to organize, track, and resolve support requests efficiently.
                Managing support through scattered emails or calls leads to
                delays, miscommunication, and frustrated customers. Our
                centralized customer support ticketing platform solves that
                problem.
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
                  Get a Free Consultation <ArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="sv-meta-tags">
                <span className="sv-tag">Customer Support Platform</span>
                <span className="sv-tag">Omnichannel Ticketing</span>
                <span className="sv-tag">IT Service Desk</span>
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
                className="sv-image-frame sv-ticketing-img-frame"
                style={{
                  boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
                  borderRadius: "24px",
                  overflow: "hidden",
                  maxHeight: "450px",
                  border: "1px solid #e1dfdd",
                }}
              >
                <Image
                  src="/ticketing_hero.png"
                  alt="Ticketing System Software - Customer support management dashboard"
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

      {/* ═══ SECTION 3 — WHAT IS A TICKETING SYSTEM ═══ */}
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
                What is a Ticketing System?
              </h2>
              <p
                className="sv-p"
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  color: "var(--sv-gray)",
                }}
              >
                A ticketing system is a centralized platform used to manage
                customer inquiries, technical issues, and service requests. Each
                request is converted into a trackable support ticket, allowing
                teams to monitor progress from submission to resolution.
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
                This structured workflow ensures no request is missed while
                improving response time, accountability, and customer
                satisfaction.
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
                    Ticket Tracking
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
                    100%
                  </h4>
                  <span
                    style={{ fontSize: "0.85rem", color: "var(--sv-gray)" }}
                  >
                    Issue Visibility
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
                With Professional Labs Ticketing System, You Can
              </h4>
              <p className="sv-p" style={{ fontSize: "0.95rem" }}>
                Centralize, automate, and gain insights into every customer
                interaction - all from one powerful support platform.
              </p>
              <ul className="sv-check-list-pill" style={{ marginTop: "0" }}>
                <li>Centralize all customer support queries</li>
                <li>Automate ticket routing and workflows</li>
                <li>Gain insights into support team performance</li>
                <li>
                  Deliver faster and more consistent customer experiences
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — WHY BUSINESSES NEED IT ═══ */}
      <section className="sv-section-info" style={{ background: "#fff" }}>
        <div className="container">
          <div
            className="sv-ticketing-need-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="sv-h2" style={{ marginBottom: "24px" }}>
                Why Businesses Need a Ticketing System
              </h2>
              <p
                className="sv-p"
                style={{ marginBottom: "24px", color: "var(--sv-gray)" }}
              >
                Without a structured customer support ticketing platform,
                organizations often face serious operational challenges:
              </p>
              <div
                className="sv-pros-grid"
                style={{ gridTemplateColumns: "1fr", gap: "12px" }}
              >
                {painPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="sv-pro-item"
                    style={{
                      border: "none",
                      background: "#fef2f2",
                      padding: "15px 20px",
                    }}
                  >
                    <span style={{ fontWeight: 600, color: "#dc2626" }}>✕</span>
                    <span style={{ fontWeight: 600 }}>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3
                className="sv-h3"
                style={{ marginBottom: "24px", color: "var(--sv-ink)" }}
              >
                With Professional Labs Ticketing System
              </h3>
              <div
                className="sv-pros-grid"
                style={{ gridTemplateColumns: "1fr", gap: "12px" }}
              >
                {solutions.map((item, idx) => (
                  <div
                    key={idx}
                    className="sv-pro-item"
                    style={{
                      border: "none",
                      background: "#f0fdf4",
                      padding: "15px 20px",
                    }}
                  >
                    <div className="sv-check-icon-wrap">
                      <CheckCircle2 size={18} color="var(--sv-accent)" />
                    </div>
                    <span style={{ fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 — KEY FEATURES GRID ═══ */}
      <section
        className="sv-section-info"
        style={{ background: "var(--sv-bg)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="sv-h2" style={{ marginBottom: "16px" }}>
              Key Features of Professional Labs Ticketing System
            </h2>
            <p
              className="sv-subtitle"
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              Powerful capabilities to manage every support interaction from
              start to resolution.
            </p>
          </div>
          <div
            className="sv-grid-layout"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            }}
          >
            {keyFeatures.map((feature, idx) => (
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
                  {feature.icon}
                </div>
                <h5
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    marginBottom: "10px",
                  }}
                >
                  {feature.title}
                </h5>
                <p style={{ fontSize: "0.9rem", color: "var(--sv-gray)" }}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 — COLLABORATION & INSIGHTS (DARK) ═══ */}
      <section className="sv-section-analysis">
        <div className="container">
          <div
            className="sv-ticketing-collab-grid"
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
                style={{ color: "white", marginBottom: "24px" }}
              >
                Enhancing Team Collaboration &amp; Business Insights
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  marginBottom: "24px",
                }}
              >
                Exceptional customer support requires strong internal
                collaboration. The Professional Labs Ticketing System connects
                service teams, technical teams, and management through a shared
                support environment.
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                }}
              >
                Advanced reporting helps businesses identify recurring issues,
                analyze support trends, and understand customer behavior
                patterns. These insights enable organizations to optimize
                resources and continuously improve service quality.
              </p>
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
                Future-Ready &amp; Scalable Support Infrastructure
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  marginBottom: "36px",
                }}
              >
                Whether you operate a small support team or a large enterprise
                help desk, our ticketing system platform grows with your
                business. Cloud infrastructure, integration capabilities, and
                automation features ensure your support operations remain agile
                as demand increases.
              </p>
              <Link href="/contact" className="sv-btn-white">
                Get a Free 30-Minute Consultation <ArrowRight size={18} />
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
              Why Choose Professional Labs for Ticketing Systems?
            </h2>
          </div>
          <div
            className="sv-grid-layout"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            }}
          >
            {whyChooseItems.map((item, idx) => (
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
            FAQs for Ticketing System Services
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
              Get a Free 30-Minute Ticketing System Consultation
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
              Transform your customer support with a centralized, intelligent
              ticketing system designed for results.
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
