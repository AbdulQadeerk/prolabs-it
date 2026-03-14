"use client";

import {
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
  BarChart3,
  FileText,
  Cloud,
  Layers,
  Settings,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const uniqueFeatures = [
  {
    title: "Unified Cloud Platform",
    desc: "Azure integrates Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS) capabilities into a single cloud ecosystem for maximum flexibility.",
    icon: <Layers size={24} />,
  },
  {
    title: "Elastic Scalability",
    desc: "Azure provides instant resource scaling, allowing businesses to increase or decrease computing power, storage, and workloads based on demand.",
    icon: <TrendingUp size={24} />,
  },
  {
    title: "Cross-Platform Support",
    desc: "The platform supports multiple operating systems, programming languages, and development frameworks, enabling developers to build and deploy applications using familiar tools.",
    icon: <Cpu size={24} />,
  },
  {
    title: "Enterprise Availability",
    desc: "Microsoft Azure provides a 99.95% uptime SLA supported by global infrastructure and enterprise-grade technical support.",
    icon: <Cloud size={24} />,
  },
  {
    title: "Global Infrastructure",
    desc: "Azure operates through geographically distributed data centers, enabling low-latency connectivity and high availability across regions.",
    icon: <Globe size={24} />,
  },
  {
    title: "Optimized Cost Model",
    desc: "Azure uses a flexible pay-as-you-go pricing model, helping businesses optimize cloud spending while maintaining operational efficiency.",
    icon: <BarChart3 size={24} />,
  },
];

const consultingServices = [
  {
    title: "Feasibility & ROI Analysis",
    desc: "Evaluate total cost of ownership (TCO), ROI, and deployment timelines to determine cloud project feasibility.",
    icon: <BarChart3 size={22} />,
  },
  {
    title: "Executive Strategy Sessions",
    desc: "Strategic consulting sessions for leadership teams with detailed cloud roadmap planning and architecture recommendations.",
    icon: <FileText size={22} />,
  },
  {
    title: "Cloud Architecture Design",
    desc: "Design scalable Azure architectures for enterprise applications, analytics platforms, and data warehouses.",
    icon: <Layout size={22} />,
  },
  {
    title: "Infrastructure & CI/CD Implementation",
    desc: "Develop modern Azure infrastructure combined with automated CI/CD pipelines for faster development and deployment cycles.",
    icon: <Terminal size={22} />,
  },
  {
    title: "Tailored Migration Strategy",
    desc: "Create customized Azure migration strategies aligned with your business objectives, technical requirements, and operational timelines.",
    icon: <RefreshCcw size={22} />,
  },
  {
    title: "Risk Management",
    desc: "Identify and mitigate risks associated with cloud migration and application modernization.",
    icon: <Shield size={22} />,
  },
  {
    title: "IT Policy Development",
    desc: "Define governance policies and operational processes to manage cloud infrastructure after migration.",
    icon: <Settings size={22} />,
  },
  {
    title: "Code & Infrastructure Review",
    desc: "Conduct detailed audits of application code and cloud configurations to improve performance and security.",
    icon: <Database size={22} />,
  },
];

const benefits = [
  {
    title: "Speed",
    desc: "Azure enables rapid deployment and scaling of enterprise applications with optimized network connectivity and modern cloud infrastructure.",
    icon: <Zap size={28} />,
  },
  {
    title: "Scalability",
    desc: "Businesses can dynamically scale compute resources, storage, and services based on real-time workload requirements.",
    icon: <TrendingUp size={28} />,
  },
  {
    title: "Security",
    desc: "Azure follows the Microsoft Secure Development Lifecycle (SDL) and global security standards to protect enterprise data and applications.",
    icon: <Lock size={28} />,
  },
  {
    title: "Compliance",
    desc: "Azure maintains dozens of global compliance certifications, supporting regulatory requirements across industries.",
    icon: <ShieldCheck size={28} />,
  },
  {
    title: "Cost Efficiency",
    desc: "Consumption-based pricing and cost management tools allow organizations to control cloud expenses effectively.",
    icon: <BarChart3 size={28} />,
  },
  {
    title: "Availability",
    desc: "Microsoft Azure operates across multiple global regions, providing high availability and redundancy for mission-critical workloads.",
    icon: <Globe size={28} />,
  },
  {
    title: "Interoperability",
    desc: "Azure provides developer tools, APIs, and SDKs that support multiple languages and frameworks for building enterprise applications.",
    icon: <Cpu size={28} />,
  },
];

const whyPartner = [
  "Microsoft Partner with advanced cloud competencies",
  "Member of Microsoft Cloud Solution Provider (CSP) program",
  "Certified Azure architects and cloud engineers",
  "20+ years of experience in cloud transformation and IT services",
  "ISO 9001 quality management standards",
  "ISO 27001 information security management framework",
];

const serviceOptions = [
  {
    title: "Azure Migration",
    desc: "We design customized cloud migration strategies and help organizations move workloads to Azure while ensuring performance, security, and cost optimization.",
    icon: <RefreshCcw size={32} />,
  },
  {
    title: "Azure Implementation",
    desc: "Our experts design scalable cloud architectures and implement modern DevOps pipelines using Azure PaaS and SaaS services.",
    icon: <Layers size={32} />,
  },
  {
    title: "Azure Managed Services",
    desc: "We monitor, maintain, and optimize Azure environments to improve system performance while reducing operational costs.",
    icon: <Settings size={32} />,
  },
];

const faqs = [
  {
    question: "What are Azure Consulting Services?",
    answer:
      "Azure consulting services involve expert guidance for planning, designing, migrating, and managing cloud infrastructure using Microsoft Azure. Consultants help businesses implement scalable, secure cloud environments tailored to their operational needs.",
  },
  {
    question: "Why do businesses need an Azure Solutions Partner?",
    answer:
      "Azure solutions partners provide technical expertise, cloud architecture design, migration planning, and ongoing optimization to ensure organizations successfully adopt and manage cloud infrastructure.",
  },
  {
    question:
      "What are the benefits of using Microsoft Azure consultants?",
    answer:
      "Azure consultants help organizations accelerate cloud adoption, reduce migration risks, improve cloud security, and optimize infrastructure costs.",
  },
  {
    question: "How do I choose the right Azure consulting company?",
    answer:
      "Look for providers with certified Azure architects, proven cloud migration experience, strong security practices, and a track record of enterprise cloud deployments.",
  },
  {
    question:
      "What services are included in Azure consulting engagements?",
    answer:
      "Typical Azure consulting services include cloud architecture design, migration planning, DevOps implementation, cost optimization, security configuration, and managed cloud operations.",
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

export default function AzureConsultingClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-azure">
      {/* ═══ SECTION 1 — HERO BAND ═══ */}
      <section className="sv-hero-band">
        <div className="container">
          <nav className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Services</span>
            <span className="sep">/</span>
            <span className="active">
              Microsoft Azure Consulting Services
            </span>
          </nav>
          <h1 className="sv-hero-h1">Microsoft Azure Consulting Services</h1>
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
                Transform Your Business with Azure Cloud, IoT &amp; Data
                Solutions
              </motion.h2>

              <motion.p variants={fadeInUp} className="sv-hero-p">
                Microsoft Azure consulting services help organizations modernize
                infrastructure, migrate workloads, and build scalable
                applications in the cloud. With over 200 cloud services and
                enterprise tools, Microsoft Azure enables businesses to innovate
                faster while maintaining security, performance, and global
                availability.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="sv-hero-btn-wrap"
                style={{ gap: "16px", flexWrap: "wrap" }}
              >
                <Link href="/contact" className="sv-btn-primary">
                  Get a Free 30-Minute Consultation{" "}
                  <ArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="sv-meta-tags">
                <span className="sv-tag">Cloud Migration</span>
                <span className="sv-tag">Azure Managed Services</span>
                <span className="sv-tag">Cloud Architecture Consulting</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="sv-hero-image"
            >
              <div className="sv-img-frame sv-azure-img-frame">
                <Image
                  src="/images/dashboard-hero.png"
                  alt="Microsoft Azure Consulting Services - Cloud migration and architecture dashboard"
                  width={600}
                  height={500}
                  className="sv-float-img"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 — OVERVIEW ═══ */}
      <section className="sv-section-info">
        <div className="container">
          <div
            style={{
              maxWidth: "860px",
              margin: "0 auto",
              textAlign: "center",
              marginBottom: "60px",
            }}
          >
            <h2 className="sv-h2" style={{ marginBottom: "24px" }}>
              Unlock Innovation with Microsoft Azure
            </h2>
            <p className="sv-subtitle">
              Microsoft Azure is a powerful enterprise cloud platform designed to
              support modern applications, data analytics, AI solutions, and
              scalable infrastructure.
            </p>
            <p className="sv-subtitle" style={{ marginTop: 12 }}>
              Organizations use Azure to build, deploy, and manage applications
              across cloud, on-premise, and hybrid environments, enabling greater
              flexibility, improved performance, and cost efficiency.
            </p>
            <p className="sv-subtitle" style={{ marginTop: 12 }}>
              Azure consulting services help businesses accelerate cloud adoption
              while ensuring security, governance, and operational reliability.
            </p>
          </div>

          <h3
            className="sv-h3"
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            What Makes Microsoft Azure Unique?
          </h3>
          <div className="sv-tech-grid">
            {uniqueFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="sv-tech-card"
              >
                <div className="sv-tech-icon">{feature.icon}</div>
                <div>
                  <h4
                    className="sv-h4"
                    style={{ marginBottom: "10px" }}
                  >
                    {feature.title}
                  </h4>
                  <p
                    className="sv-p"
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--sv-gray)",
                    }}
                  >
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — SIMPLIFY (focus text) ═══ */}
      <section
        className="sv-section-focus"
        style={{ background: "#fff" }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sv-focus-box"
            style={{
              flexDirection: "column",
              maxWidth: "900px",
              textAlign: "left",
            }}
          >
            <h2
              className="sv-h2"
              style={{ marginBottom: "20px" }}
            >
              Simplify Your Azure Environment with Remote Azure Consulting
            </h2>
            <p
              className="sv-p"
              style={{ marginBottom: "18px", color: "var(--sv-gray)" }}
            >
              Managing a complex Azure environment can be challenging without the
              right cloud expertise. Organizations must balance infrastructure
              performance, cost optimization, security policies, and evolving
              cloud technologies.
            </p>
            <p
              className="sv-p"
              style={{ marginBottom: "18px", color: "var(--sv-gray)" }}
            >
              Professional Labs Azure consulting services simplify this process
              by providing expert cloud architecture, monitoring, and managed
              services.
            </p>
            <p
              className="sv-p"
              style={{ marginBottom: "18px", color: "var(--sv-gray)" }}
            >
              As a trusted Microsoft partner, our cloud specialists help
              organizations deploy, optimize, and manage Azure environments to
              ensure reliability and scalability.
            </p>
            <p
              className="sv-p"
              style={{
                marginBottom: "12px",
                color: "var(--sv-ink)",
                fontWeight: 700,
              }}
            >
              Our Azure consulting services include:
            </p>
            <ul className="sv-check-list">
              <li>
                <CheckCircle2
                  size={18}
                  style={{ color: "var(--sv-accent)", flexShrink: 0 }}
                />
                Azure environment monitoring and management
              </li>
              <li>
                <CheckCircle2
                  size={18}
                  style={{ color: "var(--sv-accent)", flexShrink: 0 }}
                />
                Infrastructure optimization and performance tuning
              </li>
              <li>
                <CheckCircle2
                  size={18}
                  style={{ color: "var(--sv-accent)", flexShrink: 0 }}
                />
                Security implementation and governance
              </li>
              <li>
                <CheckCircle2
                  size={18}
                  style={{ color: "var(--sv-accent)", flexShrink: 0 }}
                />
                Backup, disaster recovery, and business continuity
              </li>
              <li>
                <CheckCircle2
                  size={18}
                  style={{ color: "var(--sv-accent)", flexShrink: 0 }}
                />
                Cost optimization and cloud resource management
              </li>
            </ul>
            <p
              className="sv-p"
              style={{
                marginTop: "18px",
                color: "var(--sv-gray)",
              }}
            >
              With remote Azure managed services, your team can focus on core
              business operations while experts maintain your cloud
              infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 5 — CONSULTING SERVICES ═══ */}
      <section
        className="sv-section-info"
        style={{ background: "var(--sv-bg)" }}
      >
        <div className="container">
          <div
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            <h2
              className="sv-h2"
              style={{ marginBottom: "16px" }}
            >
              Discover Your Azure Potential
            </h2>
            <p className="sv-subtitle">
              Comprehensive consulting services designed to accelerate cloud
              transformation and innovation.
            </p>
          </div>
          <div
            className="sv-tech-grid"
            style={{
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {consultingServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="sv-scard"
                style={{ flexDirection: "column" }}
              >
                <div className="sv-scard-icon">{service.icon}</div>
                <div className="sv-scard-body">
                  <h5>{service.title}</h5>
                  <p>{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 — BENEFITS ═══ */}
      <section
        className="sv-section-info"
        style={{ background: "#fff" }}
      >
        <div className="container">
          <h2
            className="sv-h2"
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            Key Benefits of Microsoft Azure
          </h2>
          <div className="sv-features-grid">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="sv-feature-card"
              >
                <div className="sv-feature-icon">{benefit.icon}</div>
                <div>
                  <p className="sv-feature-text">{benefit.title}</p>
                  <p
                    className="sv-p"
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--sv-gray)",
                      marginTop: "10px",
                    }}
                  >
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7 — WHY PROFESSIONAL LABS ═══ */}
      <section className="sv-section-analysis">
        <div className="container">
          <div className="sv-azure-partner-grid">
            <div>
              <h2
                className="sv-h2"
                style={{ color: "white", marginBottom: "36px" }}
              >
                Why Professional Labs is Your Azure Solutions Partner
              </h2>
              <div
                className="sv-pros-grid"
                style={{ gridTemplateColumns: "1fr" }}
              >
                {whyPartner.map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="sv-pro-item"
                  >
                    <div className="sv-check-icon-wrap">
                      <CheckCircle2
                        size={20}
                        color="var(--sv-accent)"
                      />
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
                Expert Azure Consultation
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  marginBottom: "36px",
                }}
              >
                Accelerate your cloud transformation with a free strategy
                session with our Azure cloud architects.
              </p>
              <Link href="/contact" className="sv-btn-white">
                Schedule a Free Strategy Meeting{" "}
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 8 — SERVICE OPTIONS ═══ */}
      <section className="sv-section-grid">
        <div className="container">
          <h2
            className="sv-h2"
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            Choose Your Azure Service Option
          </h2>
          <div className="sv-grid-layout">
            {serviceOptions.map((opt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="sv-grid-card"
                style={{ textAlign: "left" }}
              >
                <div
                  className="sv-grid-icon"
                  style={{ margin: "0 0 24px 0" }}
                >
                  {opt.icon}
                </div>
                <h5>{opt.title}</h5>
                <p style={{ marginBottom: "24px" }}>{opt.desc}</p>
                <Link
                  href="/contact"
                  style={{
                    color: "var(--sv-accent)",
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    textDecoration: "none",
                  }}
                >
                  Explore Option <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 9 — FAQ ═══ */}
      <section className="sv-section-faq">
        <div className="container">
          <h2
            className="sv-h2"
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            Frequently Asked Questions About Azure Consulting Services
          </h2>
          <div className="sv-faq-wrap">
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
              Ready to Modernize Your Operations with Azure?
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
              Get a free 30-minute consultation with a Professional Labs
              expert and transform your business today.
            </p>
            <div
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Link href="/contact" className="sv-btn-white">
                Book Free Consultation <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
