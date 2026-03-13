"use client";

import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Monitor,
  ShoppingBag,
  Code2,
  Globe,
  Layers,
  Settings,
  Cpu,
  Zap,
  ShieldCheck,
  MessageSquare,
  Award,
  DollarSign,
  Users,
  Clock,
  Unlock,
  Layout,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const serviceTypes = [
  {
    title: "WEB APPLICATION DEVELOPMENT",
    desc: "Robust, scalable, and complex web applications tailored to enterprise needs.",
    icon: <Monitor size={24} />,
  },
  {
    title: "ECOMMERCE WEB DEVELOPMENT",
    desc: "Feature-rich online stores designed for conversion and seamless customer journeys.",
    icon: <ShoppingBag size={24} />,
  },
  {
    title: "JAVA WEB DEVELOPMENT",
    desc: "Enterprise-grade solutions leveraging the power of Java for security and performance.",
    icon: <Cpu size={24} />,
  },
  {
    title: "DRUPAL DEVELOPMENT",
    desc: "Customized content management systems built on the flexible Drupal platform.",
    icon: <Settings size={24} />,
  },
  {
    title: "MAGENTO WEB DEVELOPMENT",
    desc: "Optimized ecommerce experience with customized Magento modules and themes.",
    icon: <Layers size={24} />,
  },
  {
    title: "CUSTOM WEB DEVELOPMENT",
    desc: "Tailored interactive solutions and bespoke features to meet unique business goals.",
    icon: <Code2 size={24} />,
  },
];

const whatWeOffer = [
  "A complete analysis of requirements",
  "Intuitive and visually appealing UI/UX design",
  "Secure, scalable, and high-performing solutions",
  "Mobile-responsive designs",
  "Tailored features to meet specific needs",
  "Engaging visual content",
  "Maintenance and support services",
];

const whyChoose = [
  {
    title: "Agile Methodology",
    desc: "Our iterative approach ensures faster delivery and flexibility to changes.",
    icon: <Zap size={24} />,
  },
  {
    title: "Award-Winning Solutions",
    desc: "Recognized for excellence in crafting high-impact digital experiences.",
    icon: <Award size={24} />,
  },
  {
    title: "Competitive Rates",
    desc: "Top-tier design and development talent at globally competitive pricing.",
    icon: <DollarSign size={24} />,
  },
  {
    title: "Global Expert Team",
    desc: "300+ specialists across the Americas, Europe, and Asia-Pacific.",
    icon: <Globe size={24} />,
  },
  {
    title: "In-House Specialists",
    desc: "Dedicated analysts, UX/UI designers, and developers working together.",
    icon: <Users size={24} />,
  },
  {
    title: "Client-First Approach",
    desc: "Collaborative, communicative, and friendly relationships with our clients.",
    icon: <MessageSquare size={24} />,
  },
  {
    title: "Proven Track Record",
    desc: "A history of successful web development projects across diverse industries.",
    icon: <CheckCircle2 size={24} />,
  },
  {
    title: "Rigorous QA Testing",
    desc: "Comprehensive quality assurance before every launch for flawless performance.",
    icon: <ShieldCheck size={24} />,
  },
  {
    title: "Shorter Timelines",
    desc: "Efficient workflows that translate to lower costs and faster time-to-market.",
    icon: <Clock size={24} />,
  },
  {
    title: "Open Technologies",
    desc: "Unmatched expertise in leveraging the best open-source technologies.",
    icon: <Unlock size={24} />,
  },
];

const faqs = [
  {
    question: "What is web development?",
    answer:
      "Web development is the process of creating, building, and maintaining websites. It involves many tasks, including designing web pages, writing code, and configuring servers, databases, and other software components.",
  },
  {
    question: "What are the different types of web development services?",
    answer:
      "Several web development services include front-end development, back-end development, full-stack development, e-commerce development, content management system (CMS) development, and website maintenance and support.",
  },
  {
    question: "What skills are required for web development?",
    answer:
      "Web development requires a combination of technical skills such as programming languages like HTML, CSS, and JavaScript and knowledge of web development frameworks like React, Angular, and Node.js. Additionally, web developers should have good design, problem-solving, and communication skills.",
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "The time it takes to develop a website depends on the project's complexity. A simple website can take a few weeks to complete, while a more complex website with advanced features and functionality can take several months or more.",
  },
  {
    question: "How much do web development services cost?",
    answer:
      "The cost of web development services varies depending on the project's complexity and the web development company's rates. A basic website can cost anywhere from a few hundred to several thousand dollars, while a more complex website can cost tens of thousands or more. Getting a quote from the web development company is essential to get an accurate estimate.",
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

export default function WebDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-web">
      {/* ═══ SECTION 1 — HERO BAND ═══ */}
      <section className="sv-hero-band">
        <div className="container">
          <nav className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Pages</span>
            <span className="sep">/</span>
            <span className="active">Web Development Services</span>
          </nav>
          <h1 className="sv-hero-h1">Web Development Services</h1>
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
                Empowering Your Digital Vision with Comprehensive Web
                Development
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
                Trust Professional Labs for clear results and a smooth process.
                Get a free 30-minute consultation with a Professional Labs
                expert.
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
                <span className="sv-tag">Web Development Delaware</span>
                <span className="sv-tag">Custom Website Solutions</span>
                <span className="sv-tag">Ecommerce Development</span>
                <span className="sv-tag">Web App Outsourcing</span>
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
                  src="/web_dev_hero.png"
                  alt="Web Development Services Hero"
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

      {/* ═══ SECTION 3 — EMPOWERING BUSINESS ═══ */}
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
                Empowering Your Business with Website Development
              </h2>
              <p
                className="sv-p"
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  color: "var(--sv-gray)",
                }}
              >
                Every business needs a strong online presence to engage
                potential customers in today's digital landscape. An enterprise
                website is a powerful tool that boosts brand visibility and
                enables complex interactions and critical path routing while
                catering to marketing and personalization needs.
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
                    300+
                  </h4>
                  <span
                    style={{ fontSize: "0.85rem", color: "var(--sv-gray)" }}
                  >
                    Global Specialists
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
                    Custom Solutions
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
                Delaware Expertise
              </h4>
              <p className="sv-p" style={{ fontSize: "0.95rem" }}>
                Professional Labs Web Development Services Delaware. Custom
                Website Development Solutions Delaware. Ecommerce and Web
                Application Development Delaware.
              </p>
              <ul className="sv-check-list-pill" style={{ marginTop: "0" }}>
                <li>UI/UX Excellence</li>
                <li>Scalable Architectures</li>
                <li>Fast Performance</li>
                <li>Full Support</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — EXCELLENCE ═══ */}
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
                Excellence in Crafting Web Solutions at Professional Labs
              </h2>
              <p className="sv-p" style={{ marginBottom: "32px" }}>
                Our web development services cover a broad spectrum of web-based
                software, delivering exceptional user experiences. While web
                solutions may seem alike, we take a unique approach and
                understand the winning factors for each project.
              </p>
              <div
                className="sv-pros-grid"
                style={{ gridTemplateColumns: "1fr", gap: "12px" }}
              >
                {[
                  "Visually stunning designs",
                  "Fast-loading performance",
                  "User-friendly navigation",
                  "Scalable architecture",
                  "Mobile-first approach",
                ].map((area, idx) => (
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
                  src="/web_dev_benefits.png"
                  alt="Web Development Excellence"
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
                    Expert Team
                  </h5>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--sv-gray)",
                      margin: 0,
                    }}
                  >
                    Our experts work tirelessly to bring your vision to life.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 — TYPES OF SERVICES ═══ */}
      <section
        className="sv-section-info"
        style={{ background: "var(--sv-bg)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="sv-h2" style={{ marginBottom: "16px" }}>
              Types of Web Development Services
            </h2>
            <p
              className="sv-subtitle"
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              Comprehensive solutions for every digital requirement
            </p>
          </div>
          <div
            className="sv-grid-layout"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            }}
          >
            {serviceTypes.map((service, idx) => (
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

      {/* ═══ SECTION 6 — WHAT WE OFFER (DARK) ═══ */}
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
                Crafting Superior Digital Experiences
              </h2>
              <div
                className="sv-pros-grid"
                style={{ gridTemplateColumns: "1fr" }}
              >
                {whatWeOffer.map((item, idx) => (
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
                      {item}
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
                Expert Consultation
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  marginBottom: "36px",
                }}
              >
                At our web development agency, we pride ourselves on our
                efficient development process and extensive expertise.
              </p>
              <Link href="/contact" className="sv-btn-white">
                Consult an Expert Now <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7 — WHY CHOOSE PROLABS ═══ */}
      <section
        className="sv-section-info"
        style={{ background: "var(--sv-bg)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="sv-h2">Why Choose Professional Labs?</h2>
            <p className="sv-subtitle">
              Setting ourselves apart with expertise, agility, and excellence
            </p>
          </div>
          <div
            className="sv-grid-layout"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            }}
          >
            {whyChoose.map((item, idx) => (
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
              Ready to Elevate Your Online Presence?
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
              Collaborate with us today and transform your digital vision into a
              reality with our expert web development services.
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
