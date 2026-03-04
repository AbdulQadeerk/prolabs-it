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
  Mail,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const keyFeatures = [
  {
    title: "Centralized Ticket Dashboard",
    desc: "All customer requests from email, phone, chat, and social media are converted into structured tickets and displayed in a single dashboard for easy tracking.",
    icon: <LayoutDashboard size={24} />,
  },
  {
    title: "Automated Ticket Assignment",
    desc: "Tickets are automatically assigned to the right department or agent based on rules, reducing response time and ensuring accountability.",
    icon: <Settings size={24} />,
  },
  {
    title: "SLA Management",
    desc: "Define and track Service Level Agreements for faster responses and guaranteed resolution times.",
    icon: <Clock size={24} />,
  },
  {
    title: "Reporting & Analytics",
    desc: "Gain visibility into ticket volume, average response times, customer satisfaction scores, and agent productivity.",
    icon: <BarChart3 size={24} />,
  },
  {
    title: "Omnichannel Support",
    desc: "Integrate emails, live chat, calls, and social media — so customers can reach you through their preferred method.",
    icon: <MessageSquare size={24} />,
  },
  {
    title: "Alerts & Notifications",
    desc: "Automatic reminders for overdue tickets and instant notifications for customers and agents.",
    icon: <Bell size={24} />,
  },
  {
    title: "Role-Based Access & Collaboration",
    desc: "Empower your team with the right tools while ensuring security with role-specific access permissions.",
    icon: <ShieldCheck size={24} />,
  },
  {
    title: "Knowledge Base Integration",
    desc: "Reduce ticket volume by offering self-service options such as FAQs, tutorials, and step-by-step guides.",
    icon: <BookOpen size={24} />,
  },
  {
    title: "Multi-Language Support",
    desc: "Provide customer support in multiple languages to build trust with a global audience.",
    icon: <Globe size={24} />,
  },
  {
    title: "Cloud & Mobile Access",
    desc: "Work from anywhere with cloud-based infrastructure and mobile-ready access for your support agents.",
    icon: <Cloud size={24} />,
  },
];

const painPoints = [
  "Lost or delayed customer requests",
  "Lack of visibility into open and pending issues",
  "Frustrated customers due to inconsistent service",
  "Poor performance tracking of support teams",
];

const solutions = [
  "Centralize all support queries in one platform",
  "Automate workflows to reduce delays",
  "Gain insights into team performance and customer needs",
  "Build better customer experiences through efficient service delivery",
];

const impactAreas = [
  {
    title: "Team Collaboration",
    desc: "Internal notes, shared dashboards, and automated routing allow teams to handle complex issues without confusion.",
    icon: <Users size={24} />,
  },
  {
    title: "Business Insights",
    desc: "Advanced analytics help you identify recurring issues, peak times, and customer behavior trends.",
    icon: <TrendingUp size={24} />,
  },
  {
    title: "Scalable Platform",
    desc: "Cloud deployment, mobile access, and easy integration ensure operations remain agile as you grow.",
    icon: <Layers size={24} />,
  },
  {
    title: "Data-Driven Decisions",
    desc: "Optimize staffing, improve service quality, and make informed decisions that increase efficiency.",
    icon: <Target size={24} />,
  },
  {
    title: "Faster Resolution",
    desc: "Automated assignment and SLA tracking ensures every ticket is resolved within defined timelines.",
    icon: <Zap size={24} />,
  },
  {
    title: "Customer Satisfaction",
    desc: "Consistent, fast, and multi-channel support creates loyal customers who trust your brand.",
    icon: <Award size={24} />,
  },
];

const faqs = [
  {
    question: "What is a Ticketing System and how does it work?",
    answer:
      "A Ticketing System is a centralized software platform that allows businesses to manage customer inquiries, complaints, and service requests. Each request is converted into a 'ticket' that can be tracked from creation to resolution. This ensures no issue is missed, response times are improved, and customer satisfaction is maximized.",
  },
  {
    question:
      "Can the Ticketing System handle requests from multiple channels?",
    answer:
      "Yes. Our Ticketing System supports omnichannel integration including email, phone, live chat, social media, and web portals. All requests are unified into a single dashboard regardless of their source, ensuring consistent and efficient service delivery.",
  },
  {
    question: "Is the Ticketing System suitable for small businesses?",
    answer:
      "Absolutely. Our Ticketing System is designed to be scalable — whether your business is small today or growing into an enterprise tomorrow. We offer flexible plans that grow with your needs, and the system can be customized to fit businesses of any size.",
  },
  {
    question:
      "What kind of support does Prolabs IT provide after implementation?",
    answer:
      "We provide comprehensive post-implementation support including training, troubleshooting, system updates, and ongoing optimization. Our support team is available to ensure your ticketing system runs smoothly and efficiently at all times.",
  },
  {
    question:
      "Can Prolabs IT's Ticketing System integrate with my existing tools?",
    answer:
      "Yes. Our Ticketing System is designed to integrate seamlessly with CRM, ERP, email platforms, and third-party applications. This ensures a unified workflow, better collaboration, and minimal disruption to your existing processes.",
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

export default function TicketingSystemPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-ticketing">
      {/* ═══ SECTION 1 — HERO BAND ═══ */}
      <section className="sv-hero-band">
        <div className="container">
          <nav className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Pages</span>
            <span className="sep">/</span>
            <span className="active">Ticketing System Service</span>
          </nav>
          <h1 className="sv-hero-h1">Ticketing System Services</h1>
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
                Streamline Customer Support with Smarter Ticketing
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
                At Professional Labs IT, we believe that customer experience is
                at the heart of business success. Managing customer requests
                through scattered emails or calls leads to delays,
                miscommunication, and unhappy customers. Our Ticketing System
                solves that.
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
                <span className="sv-tag">Ticketing System Delaware</span>
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
                  src="/ticketing_hero.png"
                  alt="Ticketing System Dashboard"
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
                A Ticketing System is a centralized software platform that
                allows businesses to manage customer inquiries, complaints, and
                service requests. Each request is converted into a "ticket" that
                can be tracked from creation to resolution. This ensures no
                issue is missed, response times are improved, and customer
                satisfaction is maximized.
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
                With Prolabs IT Ticketing, You Can
              </h4>
              <p className="sv-p" style={{ fontSize: "0.95rem" }}>
                Centralize, automate, and gain insights into every customer
                interaction — all from one powerful platform.
              </p>
              <ul className="sv-check-list-pill" style={{ marginTop: "0" }}>
                <li>Centralize all support queries</li>
                <li>Automate workflows to reduce delays</li>
                <li>Gain insights into team performance</li>
                <li>Build better customer experiences</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — WHY BUSINESSES NEED IT ═══ */}
      <section className="sv-section-info" style={{ background: "#fff" }}>
        <div className="container">
          <div
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
                Without a structured ticketing system, businesses face serious
                operational challenges:
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
                With Prolabs IT's Ticketing System
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
              Key Features of Prolabs IT Ticketing System
            </h2>
            <p
              className="sv-subtitle"
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              Powerful capabilities to manage every support interaction from
              start to finish
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
                Enhancing Team Collaboration & Business Insights
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  marginBottom: "24px",
                }}
              >
                A great support experience doesn't happen in isolation — it
                requires teams to work together effectively. Prolabs IT
                Ticketing System promotes seamless collaboration between
                departments, allowing customer service, technical, and sales
                teams to stay aligned.
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                }}
              >
                Our system provides advanced analytics and reporting that help
                you identify recurring issues, peak request times, and customer
                behavior trends. Make data-driven business decisions that
                increase overall efficiency.
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
                Future-Ready & Scalable
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  marginBottom: "36px",
                }}
              >
                Whether your business is small today or growing into an
                enterprise tomorrow, our system scales with you. Cloud
                deployment, mobile access, and easy integration keep your
                operations agile.
              </p>
              <Link href="/contact" className="sv-btn-white">
                Get a Free 30-Minute Consultation <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7 — IMPACT AREAS ═══ */}
      <section
        className="sv-section-info"
        style={{ background: "var(--sv-bg)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="sv-h2">Why Professional Labs?</h2>
            <p className="sv-subtitle">
              Driving measurable results across every support touchpoint
            </p>
          </div>
          <div
            className="sv-grid-layout"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            }}
          >
            {impactAreas.map((item, idx) => (
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
              Get a Free 30-Minute Ticketing System Consultation
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
                Call Now: +1 206 350 9033
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
