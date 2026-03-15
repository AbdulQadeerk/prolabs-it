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
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const serviceTypes = [
  {
    title: "Web Application Development",
    desc: "Development of robust, scalable web applications designed to support enterprise workflows, complex business logic, and secure user interactions.",
    icon: <Monitor size={24} />,
  },
  {
    title: "Ecommerce Web Development",
    desc: "Conversion-focused ecommerce platforms designed to deliver seamless shopping experiences and support online sales growth.",
    icon: <ShoppingBag size={24} />,
  },
  {
    title: "Java Web Development",
    desc: "Enterprise-level applications built using Java technologies known for their security, reliability, and high performance.",
    icon: <Cpu size={24} />,
  },
  {
    title: "Drupal Development",
    desc: "Flexible content management solutions built using the Drupal platform to manage large websites and complex content structures.",
    icon: <Settings size={24} />,
  },
  {
    title: "Magento Web Development",
    desc: "Custom Magento ecommerce solutions designed to improve online store functionality, scalability, and customer experience.",
    icon: <Layers size={24} />,
  },
  {
    title: "Custom Web Development",
    desc: "Tailored digital platforms and interactive solutions designed to meet unique business requirements and operational goals.",
    icon: <Code2 size={24} />,
  },
];

const excellenceChecklist = [
  "Visually impressive digital interfaces",
  "Fast-loading, optimized performance",
  "User-focused navigation structures",
  "Scalable infrastructure for growth",
  "Mobile-responsive experiences across devices",
];

const craftingChecklist = [
  "Detailed project requirement analysis",
  "User-focused UI/UX design",
  "Secure and scalable architecture",
  "Mobile-responsive development",
  "Custom features and integrations",
  "Engaging visual content and interfaces",
  "Ongoing maintenance and support",
];

const whyChoose = [
  {
    title: "Agile Development Methodology",
    desc: "Our iterative development process allows faster delivery, improved collaboration, and flexibility for project changes.",
    icon: <Zap size={24} />,
  },
  {
    title: "Award-Quality Digital Solutions",
    desc: "Our team is recognized for building impactful digital platforms that deliver measurable business results.",
    icon: <Award size={24} />,
  },
  {
    title: "Competitive Development Pricing",
    desc: "Access experienced web developers and designers at globally competitive rates without compromising quality.",
    icon: <DollarSign size={24} />,
  },
  {
    title: "Global Expert Team",
    desc: "Our team includes 300+ specialists across multiple regions, bringing diverse technical expertise and industry knowledge.",
    icon: <Globe size={24} />,
  },
  {
    title: "Dedicated In-House Specialists",
    desc: "Our in-house team includes developers, UX designers, analysts, and QA engineers working together to deliver high-quality digital solutions.",
    icon: <Users size={24} />,
  },
  {
    title: "Client-Focused Development Approach",
    desc: "We build collaborative partnerships with clients through clear communication, transparency, and ongoing support.",
    icon: <MessageSquare size={24} />,
  },
  {
    title: "Proven Project Success",
    desc: "Professional Labs has successfully delivered web development solutions for businesses across multiple industries and technology environments.",
    icon: <CheckCircle2 size={24} />,
  },
  {
    title: "Rigorous Quality Assurance",
    desc: "Every web project undergoes comprehensive testing to ensure reliability, performance, and security before launch.",
    icon: <ShieldCheck size={24} />,
  },
  {
    title: "Faster Project Delivery",
    desc: "Efficient workflows reduce development time while ensuring high standards of quality.",
    icon: <Clock size={24} />,
  },
  {
    title: "Open Technology Expertise",
    desc: "Our team leverages modern open-source technologies and frameworks to deliver scalable and future-ready web solutions.",
    icon: <Unlock size={24} />,
  },
];

const faqItems = [
  {
    question: "What is web development?",
    answer:
      "Web development refers to the process of creating and maintaining websites and web applications. It includes designing interfaces, writing code, configuring servers, managing databases, and building interactive features that allow users to access digital services online.",
  },
  {
    question: "What are the different types of web development services?",
    answer:
      "Common web development services include website development, web application development, ecommerce development, CMS development, custom software development, and frontend/back-end development.",
  },
  {
    question: "What skills are required for web development?",
    answer:
      "Web developers typically work with technologies such as HTML, CSS, JavaScript, backend programming languages, databases, web frameworks, and server technologies to build modern websites and applications.",
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "The development timeline depends on project complexity, design requirements, functionality, and integrations. Basic websites may take a few weeks, while complex web applications may require several months.",
  },
  {
    question: "How much do web development services cost?",
    answer:
      "Web development costs vary depending on project scope, features, design complexity, and technology requirements. Custom web development projects typically involve tailored pricing based on specific business needs.",
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

export default function WebDevelopmentClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-web">
      {/* ═══ SECTION 1 — HERO BAND ═══ */}
      <section className="sv-hero-band">
        <div className="container">
          <nav className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Services</span>
            <span className="sep">/</span>
            <span className="active">Web Development Services</span>
          </nav>
          <h1 className="sv-hero-h1">
            Web Development Services for High-Performance Websites &amp; Web
            Applications
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
                Empowering Your Digital Vision with Expert Web Development
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
                Professional Labs delivers comprehensive web development
                services designed to help businesses build powerful, scalable,
                and high-performing digital platforms. Our experienced
                development team works closely with organizations to create
                websites and web applications that enhance user experience,
                improve performance, and support long-term growth.
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
                Trust Professional Labs for a smooth development process and
                measurable results.
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
                <span className="sv-tag">✔ Custom Website Development</span>
                <span className="sv-tag">
                  ✔ Ecommerce Development Solutions
                </span>
                <span className="sv-tag">
                  ✔ Scalable Web Application Development
                </span>
                <span className="sv-tag">
                  ✔ Full-Stack Web Development Expertise
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
                className="sv-image-frame sv-webdev-img-frame"
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
                  alt="Web Development Services - Custom websites and web applications dashboard"
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
                Empowering Your Business with Modern Website Development
              </h2>
              <p
                className="sv-p"
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  color: "var(--sv-gray)",
                }}
              >
                Professional Labs designs and develops enterprise-grade websites
                and web applications that combine modern design, advanced
                functionality, and reliable performance to support marketing,
                operations, and customer engagement.
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
                    Custom Development Solutions
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
                UI/UX Excellence and Scalable Web Architecture
              </h4>
              <p className="sv-p" style={{ fontSize: "0.95rem" }}>
                Our web development team focuses on building solutions that
                deliver exceptional usability, speed, and scalability. Every
                project is carefully designed to meet business objectives while
                ensuring a seamless experience for users across devices.
              </p>
              <ul className="sv-check-list-pill" style={{ marginTop: "0" }}>
                <li>Visually engaging UI/UX design</li>
                <li>High-speed website performance</li>
                <li>Intuitive navigation and user flows</li>
                <li>Scalable and secure architecture</li>
                <li>Mobile-first responsive development</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — EXCELLENCE ═══ */}
      <section className="sv-section-info" style={{ background: "#fff" }}>
        <div className="container">
          <div
            className="sv-webdev-excellence-grid"
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
              <p className="sv-p" style={{ marginBottom: "16px" }}>
                Professional Labs develops a wide range of web-based platforms
                and software solutions that deliver engaging digital experiences
                and business value.
              </p>
              <p
                className="sv-p"
                style={{ marginBottom: "32px", color: "var(--sv-gray)" }}
              >
                While many web solutions may appear similar, our development
                process focuses on identifying the unique requirements of each
                project and implementing technologies that maximize performance,
                usability, and scalability.
              </p>
              <div
                className="sv-pros-grid"
                style={{ gridTemplateColumns: "1fr", gap: "12px" }}
              >
                {excellenceChecklist.map((area, idx) => (
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
                  alt="Web Development Excellence - Modern digital platforms"
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
              Comprehensive web development solutions designed to support every
              digital business need.
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

      {/* ═══ SECTION 6 — CRAFTING SUPERIOR (DARK) ═══ */}
      <section className="sv-section-analysis">
        <div className="container">
          <div
            className="sv-webdev-crafting-grid"
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
                Crafting Superior Digital Experiences
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  marginBottom: "30px",
                }}
              >
                Our web development process focuses on creating digital
                platforms that combine strong functionality with intuitive
                design.
              </p>
              <div
                className="sv-pros-grid"
                style={{ gridTemplateColumns: "1fr" }}
              >
                {craftingChecklist.map((item, idx) => (
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
                Expert Web Development Consultation
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  marginBottom: "36px",
                }}
              >
                Our web development agency combines technical expertise with a
                structured development process to ensure projects are delivered
                efficiently and successfully.
              </p>
              <Link href="/contact" className="sv-btn-white">
                Consult an Expert Now <ArrowRight size={18} />
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
              Why Choose Professional Labs for Web Development?
            </h2>
            <p className="sv-subtitle">
              Professional Labs stands out for delivering high-quality web
              development services that combine technical excellence, innovation,
              and efficiency.
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
            Frequently Asked Questions About Web Development
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
                Call Us Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
