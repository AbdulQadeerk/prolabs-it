"use client";

import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Users,
  BarChart3,
  Mail,
  Settings,
  TrendingUp,
  Globe,
  ShieldCheck,
  Zap,
  Clock,
  Target,
  Layers,
  Database,
  MessageSquare,
  Award,
  Building2,
  ShoppingBag,
  Heart,
  GraduationCap,
  Landmark,
  Factory,
  Layout,
  Cpu,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const keyFeatures = [
  {
    title: "Contact & Lead Management",
    desc: "Maintain a centralized database of all customer and lead information, including emails, phone numbers, activity history, and notes. Easily segment your audience, track follow-ups, and personalize outreach.",
    icon: <Users size={24} />,
  },
  {
    title: "Sales Pipeline Tracking",
    desc: "Visualize your sales process using customizable pipelines. Track leads through stages like New, Contacted, Proposal Sent, and Closed. Gain instant visibility into bottlenecks and forecast revenue accurately.",
    icon: <BarChart3 size={24} />,
  },
  {
    title: "Workflow Automation",
    desc: "Automate repetitive tasks such as sending follow-up emails, assigning tasks, or updating deal stages. Save time and reduce manual errors by letting the CRM do the heavy lifting.",
    icon: <Settings size={24} />,
  },
  {
    title: "Communication Tools",
    desc: "Send and receive emails directly from the CRM, log calls, and manage conversations in one place. Integrate with Gmail, Outlook, or third-party messaging services to streamline communication.",
    icon: <Mail size={24} />,
  },
];

const benefits = [
  "Increased Productivity – Automate routine tasks to save time",
  "Better Collaboration – Keep sales, marketing, and service teams aligned",
  "Higher Customer Retention – Deliver service that keeps clients loyal",
  "Accurate Forecasting – Plan resources and targets with confidence",
  "Revenue Growth – Convert more leads into paying customers",
  "360-Degree Customer View – Understand every customer interaction",
];

const industries = [
  { title: "Retail & E-commerce", icon: <ShoppingBag size={24} /> },
  { title: "Manufacturing & Distribution", icon: <Factory size={24} /> },
  { title: "Real Estate", icon: <Building2 size={24} /> },
  { title: "Healthcare", icon: <Heart size={24} /> },
  { title: "Education", icon: <GraduationCap size={24} /> },
  { title: "Finance & Banking", icon: <Landmark size={24} /> },
];

const whyProlabs = [
  {
    title: "Centralized Data",
    desc: "Eliminate scattered customer information across emails, spreadsheets, and phone records.",
    icon: <Database size={24} />,
  },
  {
    title: "Targeted Campaigns",
    desc: "Your marketing team can run highly targeted campaigns using accurate, up-to-date information.",
    icon: <Target size={24} />,
  },
  {
    title: "Quick Issue Resolution",
    desc: "Your service team can resolve issues quickly using the same unified customer data.",
    icon: <Zap size={24} />,
  },
  {
    title: "Internal Collaboration",
    desc: "Improve collaboration across teams ensuring customers feel valued and connected.",
    icon: <MessageSquare size={24} />,
  },
  {
    title: "Scalable Solutions",
    desc: "As your business grows, your CRM grows with it — adding new features and integrations.",
    icon: <TrendingUp size={24} />,
  },
  {
    title: "Proven Excellence",
    desc: "Trusted by businesses across multiple sectors with a proven track record of results.",
    icon: <Award size={24} />,
  },
];

const faqs = [
  {
    question: "What is a CRM and why do I need it?",
    answer:
      "CRM (Customer Relationship Management) software is designed to help businesses manage interactions with potential and existing customers. It centralizes contact data, tracks communication, manages sales pipelines, and automates repetitive tasks to boost productivity. With the right CRM in place, your business can respond faster, close more deals, and deliver personalized experiences at scale.",
  },
  {
    question: "How does Prolabs IT CRM differ from off-the-shelf solutions?",
    answer:
      "Unlike generic CRM tools, Prolabs IT CRM solutions are customized to your specific business needs. We tailor workflows, integrations, and automations to match your existing processes. Our solutions are built for flexibility and scalability, so as your business evolves, your CRM adapts without disrupting your workflow.",
  },
  {
    question: "Which industries can benefit from your CRM solutions?",
    answer:
      "Our CRM solutions are adaptable across multiple sectors including Retail & E-commerce, Manufacturing & Distribution, Real Estate, Healthcare, Education, and Finance & Banking. We customize the platform for each industry's unique requirements and compliance needs.",
  },
  {
    question: "Can your CRM integrate with our existing tools?",
    answer:
      "Yes, our CRM integrates seamlessly with popular tools like Gmail, Outlook, third-party messaging services, and other business applications. We also provide full API access for custom integrations with your existing tech stack.",
  },
  {
    question: "How long does CRM implementation take?",
    answer:
      "Implementation timelines vary based on complexity and customization requirements. A standard deployment can be completed in 2–4 weeks, while more complex enterprise implementations with custom integrations may take 6–12 weeks. We provide a detailed timeline during our initial consultation.",
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

export default function CRMServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-crm">
      {/* ═══ SECTION 1 — HERO BAND ═══ */}
      <section className="sv-hero-band">
        <div className="container">
          <nav className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Pages</span>
            <span className="sep">/</span>
            <span className="active">CRM Services</span>
          </nav>
          <h1 className="sv-hero-h1">
            CRM (Customer Relationship Management) Services
          </h1>
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
                Empower Your Team with Optimized CRM Solutions
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
                Streamline customer relationships, accelerate growth, and
                deliver personalized experiences at scale with Prolabs IT
                comprehensive CRM solutions.
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
                <span className="sv-tag">CRM Solutions Delaware</span>
                <span className="sv-tag">Customer Management</span>
                <span className="sv-tag">Sales Pipeline Automation</span>
                <span className="sv-tag">CRM Integration Services</span>
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
                  src="/crm_hero.png"
                  alt="CRM Solutions Dashboard"
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

      {/* ═══ SECTION 3 — WHAT IS CRM ═══ */}
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
                What is a CRM and Why Do You Need It?
              </h2>
              <p
                className="sv-p"
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  color: "var(--sv-gray)",
                }}
              >
                CRM software is designed to help businesses manage interactions
                with potential and existing customers. It centralizes contact
                data, tracks communication, manages sales pipelines, and
                automates repetitive tasks to boost productivity. With the right
                CRM in place, your business can respond faster, close more
                deals, and deliver personalized experiences at scale.
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
                    360°
                  </h4>
                  <span
                    style={{ fontSize: "0.85rem", color: "var(--sv-gray)" }}
                  >
                    Customer View
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
                    Customizable
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
                Transform Your Business
              </h4>
              <p className="sv-p" style={{ fontSize: "0.95rem" }}>
                At Prolabs IT, we understand that your customers are the
                heartbeat of your business. Our CRM solutions help you build
                stronger relationships and increase sales efficiency.
              </p>
              <ul className="sv-check-list-pill" style={{ marginTop: "0" }}>
                <li>Centralized Customer Data</li>
                <li>Automated Workflows</li>
                <li>Sales Pipeline Visibility</li>
                <li>Multi-Channel Communication</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — KEY FEATURES ═══ */}
      <section
        className="sv-section-info"
        style={{ background: "var(--sv-bg)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="sv-h2" style={{ marginBottom: "16px" }}>
              Key Features of Our CRM
            </h2>
            <p
              className="sv-subtitle"
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              Powerful capabilities to manage every aspect of your customer
              relationships
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

      {/* ═══ SECTION 5 — BENEFITS (CHECKLIST + IMAGE) ═══ */}
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
                Benefits You'll Experience with Prolabs IT CRM
              </h2>
              <p className="sv-p" style={{ marginBottom: "32px" }}>
                Our CRM solutions are designed to give you a complete 360-degree
                view of your customers — enabling you to respond faster, make
                smarter decisions, and deliver experiences that stand out.
              </p>
              <div
                className="sv-pros-grid"
                style={{ gridTemplateColumns: "1fr", gap: "12px" }}
              >
                {benefits.map((item, idx) => (
                  <div
                    key={idx}
                    className="sv-pro-item"
                    style={{
                      border: "none",
                      background: "#f8fafc",
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
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sv-hero-image"
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: "24px",
                  overflow: "hidden",
                  maxHeight: "400px",
                }}
              >
                <Image
                  src="/crm_benefits.png"
                  alt="CRM Benefits Dashboard"
                  width={600}
                  height={450}
                  style={{
                    borderRadius: "24px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    right: "20px",
                    background: "#fff",
                    padding: "20px",
                    borderRadius: "16px",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    maxWidth: "240px",
                    borderLeft: "4px solid var(--sv-accent)",
                  }}
                >
                  <h5
                    style={{
                      fontWeight: 800,
                      marginBottom: "8px",
                      color: "var(--sv-accent)",
                      fontSize: "1rem",
                    }}
                  >
                    Revenue Growth
                  </h5>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--sv-gray)",
                      margin: 0,
                    }}
                  >
                    Convert more leads into paying customers with smarter CRM
                    tools.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 — EMPOWERING BUSINESSES (DARK) ═══ */}
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
                Empowering Businesses with Smarter CRM Solutions
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  marginBottom: "30px",
                }}
              >
                In many businesses, valuable customer information is scattered —
                in emails, spreadsheets, phone records, and personal notes. This
                disorganization leads to missed opportunities, slow responses,
                and frustrated customers.
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                }}
              >
                Prolabs IT CRM eliminates these challenges by centralizing all
                customer data into one secure, easy-to-access platform. Your
                sales team can track every lead's journey, your marketing team
                can run highly targeted campaigns, and your service team can
                resolve issues quickly.
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
                Future-Proof Your Customer Management
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  marginBottom: "36px",
                }}
              >
                As your business grows, your CRM can grow with it — adding new
                features, integrations, and automations without disrupting your
                workflow.
              </p>
              <Link href="/contact" className="sv-btn-white">
                Get a Free Consultation <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7 — INDUSTRIES WE SERVE ═══ */}
      <section className="sv-section-info" style={{ background: "#fff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="sv-h2" style={{ marginBottom: "16px" }}>
              Industries We Serve
            </h2>
            <p
              className="sv-subtitle"
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              Our CRM solutions are adaptable across multiple sectors
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
            {industries.map((item, idx) => (
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
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "rgba(34, 167, 224, 0.1)",
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto 15px",
                    color: "var(--sv-accent)",
                  }}
                >
                  {item.icon}
                </div>
                <h5 style={{ fontWeight: 800, fontSize: "1rem" }}>
                  {item.title}
                </h5>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 8 — WHY PROLABS ═══ */}
      <section
        className="sv-section-info"
        style={{ background: "var(--sv-bg)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="sv-h2">Why Professional Labs?</h2>
            <p className="sv-subtitle">
              Transforming the way you work with smarter customer management
            </p>
          </div>
          <div
            className="sv-grid-layout"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            }}
          >
            {whyProlabs.map((item, idx) => (
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

      {/* ═══ SECTION 9 — FAQ ═══ */}
      <section className="sv-section-faq" style={{ background: "#fff" }}>
        <div className="container">
          <h2
            className="sv-h2"
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            Frequently Asked Questions
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

      {/* ═══ SECTION 10 — CTA ═══ */}
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
              Ready to Transform Your Customer Relationships?
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
              Get a free 30-minute consultation with a Professional Labs expert
              and discover how our CRM solutions can accelerate your growth.
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
