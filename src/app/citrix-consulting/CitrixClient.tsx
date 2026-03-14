"use client";

import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  Layout,
  Settings,
  TrendingUp,
  Zap,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const successLoop = [
  { name: "Plan", icon: <Layout size={20} />, color: "#22a7e0" },
  { name: "Develop", icon: <Cpu size={20} />, color: "#1b3164" },
  { name: "Rollout", icon: <Zap size={20} />, color: "#22a7e0" },
  { name: "Manage", icon: <Settings size={20} />, color: "#1b3164" },
  { name: "Optimize", icon: <TrendingUp size={20} />, color: "#22a7e0" },
];

const serviceAreas = [
  "Complete Citrix lifecycle implementation and support",
  "Flexible engagement models including hourly or fixed-price projects",
  "Proof-of-concept deployments to validate architecture",
  "Pilot testing and production environment implementation",
  "Technical training and staff development programs",
  "Citrix environment health checks and performance validation",
  "Remote help desk and support services for Citrix platforms",
];

const whyUsItems = [
  {
    title: "Flexible Service Options",
    desc: "Consulting solutions tailored to your existing infrastructure and digital workspace goals.",
  },
  {
    title: "Efficient Deployment",
    desc: "Optimized implementation processes reduce deployment timelines and infrastructure costs.",
  },
  {
    title: "Customer-Focused Approach",
    desc: "Our consulting strategy prioritizes business outcomes and long-term technology value.",
  },
  {
    title: "Knowledge Transfer",
    desc: "Comprehensive documentation and training empower your internal IT teams.",
  },
  {
    title: "Certified Experts",
    desc: "Our consultants include experienced virtualization engineers with extensive Citrix platform expertise.",
  },
  {
    title: "Proven Industry Experience",
    desc: "More than 15 years of delivering Citrix virtualization and digital workspace solutions.",
  },
];

const faqs = [
  {
    question: "What is Citrix Consulting?",
    answer:
      "Citrix consulting services help organizations design, deploy, configure, and optimize Citrix virtualization environments. This includes infrastructure setup, network configuration, system monitoring, and performance optimization to ensure secure and efficient digital workspaces.",
  },
  {
    question: "What is Citrix Managed Services?",
    answer:
      "Citrix managed services provide ongoing support, monitoring, maintenance, and optimization of Citrix environments. Managed service providers ensure the infrastructure runs efficiently while reducing the workload for internal IT teams.",
  },
  {
    question: "What is included in Citrix consulting services?",
    answer:
      "Typical Citrix consulting services include infrastructure design, virtualization deployment, application delivery configuration, system optimization, monitoring, and security management.",
  },
  {
    question: "Is Citrix an MSP?",
    answer:
      "Citrix itself is a technology platform provider. Managed service providers use Citrix technologies to deliver virtualization services, digital workspaces, and remote desktop solutions to organizations.",
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

export default function CitrixClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-citrix">
      {/* ═══ SECTION 1 — HERO BAND ═══ */}
      <section className="sv-hero-band">
        <div className="container">
          <nav className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Services</span>
            <span className="sep">/</span>
            <span className="active">Citrix Consulting Services</span>
          </nav>
          <h1 className="sv-hero-h1">Citrix Consulting Services</h1>
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
                Scalable Desktop Virtualization for the Modern Workforce
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="sv-body-text"
                style={{
                  fontSize: "1.15rem",
                  marginBottom: "12px",
                  lineHeight: "1.6",
                }}
              >
                Citrix enables organizations to deliver secure applications,
                virtual desktops, and digital workspaces to employees anywhere in
                the world. Professional Labs provides expert Citrix consulting
                services to design, deploy, and manage high-performance
                virtualization environments that support remote work, hybrid
                infrastructure, and modern IT operations.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="sv-body-text"
                style={{
                  fontSize: "1.05rem",
                  marginBottom: "35px",
                  lineHeight: "1.6",
                }}
              >
                Our Citrix specialists help businesses build secure, scalable
                infrastructure for application delivery and virtual desktop
                environments, accelerating digital workspace transformation while
                improving performance and security.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="sv-hero-btn-wrap"
                style={{
                  gap: "16px",
                  flexWrap: "wrap",
                  marginBottom: "40px",
                }}
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
                <span className="sv-tag">VDI Integration</span>
                <span className="sv-tag">Remote Workforce Solutions</span>
                <span className="sv-tag">Citrix Managed Services</span>
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
                className="sv-img-frame sv-citrix-img-frame"
                style={{
                  boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
                  borderRadius: "24px",
                  overflow: "hidden",
                  maxHeight: "450px",
                  border: "1px solid #e1dfdd",
                }}
              >
                <Image
                  src="/citrix_dashboard_hero_1772533695469.png"
                  alt="Citrix Consulting Services - Virtual desktop and application delivery dashboard"
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

      {/* ═══ SECTION 3 — TRUSTED PARTNER ═══ */}
      <section className="sv-section-info" style={{ background: "#fff" }}>
        <div className="container">
          <div
            className="sv-hero-grid"
            style={{ alignItems: "stretch" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sv-info-card"
            >
              <h2
                className="sv-h2"
                style={{ marginBottom: "24px" }}
              >
                A Trusted Citrix Partner with 15+ Years of Experience
              </h2>
              <p
                className="sv-p"
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  color: "var(--sv-gray)",
                }}
              >
                Professional Labs is certified and authorized to deploy and
                support the complete Citrix virtualization and application
                delivery ecosystem. Our experienced engineers design tailored
                infrastructure that ensures seamless application access, secure
                remote work environments, and optimized user performance.
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
                Our expertise helps organizations build a reliable application
                and data delivery framework that supports both remote and
                in-office users.
              </p>
              <div
                style={{
                  marginTop: "32px",
                  display: "flex",
                  gap: "24px",
                }}
              >
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
                    15+
                  </h4>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--sv-gray)",
                    }}
                  >
                    Years Experience
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
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--sv-gray)",
                    }}
                  >
                    Certified Staff
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
                Our Citrix Consulting Approach
              </h4>
              <p className="sv-p" style={{ fontSize: "0.95rem" }}>
                We help organizations resolve challenges within existing Citrix
                environments while transitioning infrastructure to modern
                Citrix-as-a-Service consumption models. Our consulting services
                focus on improving performance, strengthening security, and
                simplifying infrastructure management.
              </p>
              <ul
                className="sv-check-list-pill"
                style={{ marginTop: "0" }}
              >
                <li>Robust Infrastructure Design</li>
                <li>Seamless Application Delivery</li>
                <li>Environment Optimization</li>
                <li>24/7 Security Support</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — SUCCESS LOOP ═══ */}
      <section
        className="sv-section-info"
        style={{ background: "var(--sv-bg)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2
              className="sv-h2"
              style={{ marginBottom: "16px" }}
            >
              The Citrix Success Loop
            </h2>
            <p
              className="sv-subtitle"
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              Every Citrix implementation follows a continuous lifecycle designed
              to maximize system performance and business value.
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
            {successLoop.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{
                  background: "#fff",
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
                {idx < successLoop.length - 1 && (
                  <div
                    className="hidden lg:block"
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

          <p
            className="sv-subtitle"
            style={{
              textAlign: "center",
              maxWidth: "700px",
              margin: "40px auto 0",
            }}
          >
            This iterative approach ensures virtualization environments evolve
            alongside changing business and technology needs.
          </p>

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
              className="sv-citrix-kits-grid"
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
                  Citrix Consulting Kits
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
                }}
              >
                Our Citrix consulting kits are designed to address specific
                challenges within your virtualization environment at every stage
                of deployment. Each kit is customized to align with your
                infrastructure requirements, user workloads, and digital
                workspace goals, helping accelerate your Citrix transformation
                journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 — BENEFITS LIST ═══ */}
      <section className="sv-section-info" style={{ background: "#fff" }}>
        <div className="container">
          <div
            className="sv-citrix-benefits-grid"
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
              <h2
                className="sv-h2"
                style={{ marginBottom: "24px" }}
              >
                How Our Citrix Services Benefit Your Business
              </h2>
              <p className="sv-p" style={{ marginBottom: "32px" }}>
                Our Citrix consulting services help organizations accelerate
                deployment while resolving infrastructure issues that impact
                performance and productivity.
              </p>
              <div
                className="sv-pros-grid"
                style={{
                  gridTemplateColumns: "1fr",
                  gap: "12px",
                }}
              >
                {serviceAreas.map((area, idx) => (
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
                      <CheckCircle2
                        size={18}
                        color="var(--sv-accent)"
                      />
                    </div>
                    <span style={{ fontWeight: 600 }}>{area}</span>
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
                  src="/citrix_infra_benefits_1772533720638.png"
                  alt="Citrix Infrastructure Benefits"
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
                    Fast Results
                  </h5>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--sv-gray)",
                      margin: 0,
                    }}
                  >
                    Accelerate the planning and installation of business
                    infrastructure.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 — WHY US ═══ */}
      <section
        className="sv-section-info"
        style={{ background: "var(--sv-bg)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="sv-h2">
              Why Professional Labs for Citrix Consulting
            </h2>
            <p className="sv-subtitle">
              Organizations choose Professional Labs for reliable Citrix
              virtualization expertise and proven infrastructure strategies.
            </p>
          </div>
          <div
            className="sv-grid-layout"
            style={{
              gridTemplateColumns:
                "repeat(auto-fit, minmax(320px, 1fr))",
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
                  <CheckCircle2 size={24} />
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
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--sv-gray)",
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7 — FAQ ═══ */}
      <section className="sv-section-faq" style={{ background: "#fff" }}>
        <div className="container">
          <h2
            className="sv-h2"
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            Frequently Asked Questions About Citrix Consulting
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
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                >
                  <span
                    className="sv-faq-qtext"
                    style={{ fontWeight: 700 }}
                  >
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
                        <p style={{ lineHeight: "1.8" }}>
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 8 — CTA ═══ */}
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
              Talk to Our Citrix Experts
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
              Maximize the value of your virtualization infrastructure while
              minimizing operational complexity with Professional Labs Citrix
              consulting and managed services.
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
                href="/contact"
                className="sv-btn-cta-outline"
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
