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
  Target,
  Database,
  MessageSquare,
  Award,
  Building2,
  ShoppingBag,
  Heart,
  GraduationCap,
  Landmark,
  Factory,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const keyFeatures = [
  {
    title: "Contact & Lead Management",
    desc: "Maintain a centralized database containing all customer and lead information including contact details, communication history, and interaction notes. Segment audiences, track follow-ups, and personalize outreach campaigns effectively.",
    icon: <Users size={24} />,
  },
  {
    title: "Sales Pipeline Tracking",
    desc: "Visualize your entire sales process through customizable pipelines. Monitor deal progress through stages such as lead generation, qualification, proposal, and closing while identifying opportunities and potential bottlenecks.",
    icon: <BarChart3 size={24} />,
  },
  {
    title: "Workflow Automation",
    desc: "Automate repetitive tasks including email follow-ups, task assignments, and deal stage updates. Automation improves productivity while reducing manual errors and operational inefficiencies.",
    icon: <Settings size={24} />,
  },
  {
    title: "Integrated Communication Tools",
    desc: "Manage email conversations, log calls, and track customer interactions directly within the CRM platform. Integrations with tools such as Gmail, Outlook, and third-party messaging platforms streamline communication.",
    icon: <Mail size={24} />,
  },
];

const benefits = [
  "Increased productivity through automation of routine tasks",
  "Improved collaboration between sales, marketing, and service teams",
  "Higher customer retention through personalized engagement",
  "Accurate sales forecasting and pipeline management",
  "Revenue growth through better lead conversion",
  "Complete visibility into customer interactions and history",
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
    title: "Centralized Customer Data",
    desc: "Eliminate fragmented customer information stored across emails, spreadsheets, and multiple platforms by centralizing data into a single CRM system.",
    icon: <Database size={24} />,
  },
  {
    title: "Targeted Marketing Campaigns",
    desc: "Marketing teams can create highly targeted campaigns using accurate and updated customer data.",
    icon: <Target size={24} />,
  },
  {
    title: "Faster Issue Resolution",
    desc: "Customer service teams gain immediate access to interaction history and account information to resolve issues quickly.",
    icon: <Zap size={24} />,
  },
  {
    title: "Improved Internal Collaboration",
    desc: "Unified customer data helps sales, marketing, and support teams collaborate effectively and deliver better customer experiences.",
    icon: <MessageSquare size={24} />,
  },
  {
    title: "Scalable CRM Solutions",
    desc: "Our CRM platforms are designed to scale with your business by adding new integrations, automation capabilities, and reporting tools.",
    icon: <TrendingUp size={24} />,
  },
  {
    title: "Proven Expertise",
    desc: "Professional Labs has helped organizations across multiple industries implement CRM systems that improve productivity and customer engagement.",
    icon: <Award size={24} />,
  },
];

const faqItems = [
  {
    question: "What is a CRM and why do businesses need it?",
    answer:
      "CRM (Customer Relationship Management) software helps businesses manage interactions with prospects and customers by organizing contact data, tracking communications, managing sales pipelines, and automating routine tasks.",
  },
  {
    question:
      "How does Professional Labs CRM differ from standard CRM solutions?",
    answer:
      "Professional Labs provides customized CRM implementation and integration services designed around your business workflows, ensuring the system aligns with your sales processes and operational requirements.",
  },
  {
    question: "Which industries benefit from CRM solutions?",
    answer:
      "CRM systems are widely used across industries including retail, real estate, healthcare, education, manufacturing, and financial services where managing customer relationships is critical.",
  },
  {
    question: "Can your CRM integrate with existing tools?",
    answer:
      "Yes. Professional Labs CRM solutions can integrate with tools such as email platforms, marketing automation software, ERP systems, analytics platforms, and third-party business applications.",
  },
  {
    question: "How long does CRM implementation take?",
    answer:
      "CRM implementation timelines depend on business requirements, data migration complexity, customization needs, and integrations. Most implementations typically take a few weeks to a few months.",
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

export default function CRMServicesClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-crm">
      {/* ═══ SECTION 1 — HERO BAND ═══ */}
      <section className="sv-hero-band">
        <div className="container">
          <nav className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Services</span>
            <span className="sep">/</span>
            <span className="active">CRM Solutions</span>
          </nav>
          <h1 className="sv-hero-h1">
            CRM Solutions &amp; Customer Relationship Management Services
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
                Empower Your Team with Scalable CRM Solutions
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
                Our CRM solution delivers powerful Customer Relationship
                Management (CRM) services designed to help businesses manage
                customer interactions, automate sales processes, and improve
                customer engagement.
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
                <span className="sv-tag">✔ Customer Data Management</span>
                <span className="sv-tag">✔ Sales Pipeline Automation</span>
                <span className="sv-tag">✔ CRM Integration Services</span>
                <span className="sv-tag">
                  ✔ Workflow &amp; Marketing Automation
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
                className="sv-image-frame sv-crm-img-frame"
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
                  alt="CRM Solutions - Customer relationship management dashboard"
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
                What is a CRM and Why Does Your Business Need It?
              </h2>
              <p
                className="sv-p"
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  color: "var(--sv-gray)",
                }}
              >
                A Customer Relationship Management (CRM) system helps businesses
                manage interactions with prospects and customers in a
                centralized platform. CRM software organizes contact
                information, tracks communications, manages sales pipelines, and
                automates routine tasks that improve team productivity.
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
                With the right CRM strategy in place, organizations can respond
                faster to customer needs, improve collaboration between
                departments, and deliver personalized experiences at scale.
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
                    Customizable CRM Solutions
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
                Transform Your Business with CRM
              </h4>
              <p className="sv-p" style={{ fontSize: "0.95rem" }}>
                At Professional Labs, we understand that customer relationships
                are the foundation of long-term business success. Our CRM
                solutions help organizations strengthen customer engagement,
                improve sales efficiency, and gain deeper insights into customer
                behavior.
              </p>
              <ul className="sv-check-list-pill" style={{ marginTop: "0" }}>
                <li>Centralized customer data management</li>
                <li>Automated workflows and task management</li>
                <li>Real-time sales pipeline visibility</li>
                <li>Multi-channel communication tracking</li>
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
              Key Features of Our CRM Solutions
            </h2>
            <p
              className="sv-subtitle"
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              Powerful CRM capabilities designed to manage every stage of the
              customer lifecycle.
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

      {/* ═══ SECTION 5 — BENEFITS ═══ */}
      <section className="sv-section-info" style={{ background: "#fff" }}>
        <div className="container">
          <div
            className="sv-crm-benefits-grid"
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
                Benefits of Professional Labs CRM Solutions
              </h2>
              <p className="sv-p" style={{ marginBottom: "32px" }}>
                Our CRM solutions provide businesses with a complete 360-degree
                view of their customers, enabling smarter decision-making and
                stronger customer relationships.
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
                  alt="CRM Benefits - Customer relationship management analytics"
                  width={600}
                  height={450}
                  style={{
                    borderRadius: "24px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    objectFit: "cover",
                    width: "100%",
                    height: "auto",
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
            className="sv-crm-empower-grid"
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
                Empowering Businesses with Smarter CRM Solutions
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  marginBottom: "20px",
                }}
              >
                In many organizations, customer information is scattered across
                spreadsheets, emails, and disconnected systems. This lack of
                organization often results in missed opportunities, delayed
                responses, and inefficient customer management.
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                }}
              >
                Professional Labs CRM solutions centralize customer information
                into a single, secure platform. Sales teams can track every
                lead&#39;s journey, marketing teams can launch targeted
                campaigns, and service teams can resolve customer issues more
                efficiently.
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
                As your business grows, your CRM platform can scale with your
                operations. Our solutions allow organizations to add new
                integrations, automation features, and advanced analytics
                capabilities without disrupting existing workflows.
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
              Professional Labs CRM solutions are adaptable across a wide range
              of industries.
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

      {/* ═══ SECTION 8 — WHY CHOOSE US ═══ */}
      <section
        className="sv-section-info"
        style={{ background: "var(--sv-bg)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="sv-h2">
              Why Choose Professional Labs for CRM Services?
            </h2>
            <p className="sv-subtitle">
              Professional Labs helps businesses transform how they manage
              customer relationships through intelligent CRM solutions and
              strategic implementation.
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
            Frequently Asked Questions About CRM
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
                maxWidth: "700px",
                margin: "0 auto 40px",
              }}
            >
              Get a free 30-minute consultation with a Professional Labs expert
              and discover how our CRM solutions can improve customer engagement
              and accelerate business growth.
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
                Call Us Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
