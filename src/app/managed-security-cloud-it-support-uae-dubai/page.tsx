"use client";

import {
  Shield,
  ShieldCheck,
  Zap,
  Activity,
  Lock,
  Globe,
  Search,
  Cloud,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle2,
  Eye,
  Users,
  Server,
  Settings,
  Layers,
  Database,
  RefreshCcw,
  BarChart3,
  Cpu,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const whatWeOffer = [
  {
    title: "Business-Driven Cloud Solutions",
    desc: "SAP, application migration, cloud-native applications, analytics/big data, IoT, and other business solutions powered by our CMS can be configured and managed to meet your specific needs and budget.",
    icon: <Layers size={28} />,
  },
  {
    title: "Automation & Self-Service",
    desc: "Extensive, cost-effective, and flexible automation and self-service capabilities allow you to focus on delivering business value instead of managing infrastructure.",
    icon: <RefreshCcw size={28} />,
  },
  {
    title: "Security & Compliance",
    desc: "Excellent security and compliance capabilities are built into our CMS solutions across industries and geographies to protect your data and meet regulatory requirements.",
    icon: <ShieldCheck size={28} />,
  },
  {
    title: "Standard Service Sets",
    desc: "A comprehensive set of standard services that meet you where you are on your cloud journey and assist you in overcoming common challenges.",
    icon: <Settings size={28} />,
  },
  {
    title: "Flexible Delivery Models",
    desc: "Pricing, integration, delivery, and management models that are flexible and incorporate world-class methods, processes, and tools to provide on-demand scalability and agility.",
    icon: <Globe size={28} />,
  },
  {
    title: "Deep Business Understanding",
    desc: "You need to know a lot about your business and how it works to move quickly and take advantage of changes in the market — our experts bring that understanding.",
    icon: <Search size={28} />,
  },
];

const openCloudBenefits = [
  "CSP expenditures optimized by as much as 30% with decreased or restructured costs and pay-as-you-go models",
  "Fast cloud installations tailored to your demands and financial objectives",
  "Improved compliance and security capabilities for peace of mind",
  "Improved performance and efficiency to focus on business value",
  "Ongoing advice and help from strategy to implementation to operation",
  "Rapid public cloud adoption and cloud environment change",
  "Optimized workloads that expand or contract without hiring more personnel",
];

const cloudProviders = [
  { name: "Microsoft Azure", icon: <Cloud size={28} /> },
  { name: "Amazon Web Services", icon: <Server size={28} /> },
  { name: "Oracle Cloud", icon: <Database size={28} /> },
  { name: "Google Cloud Platform", icon: <Globe size={28} /> },
  { name: "IBM Cloud", icon: <Cpu size={28} /> },
  { name: "ProLabs Cloud Services", icon: <Shield size={28} /> },
];

const faqs = [
  {
    question:
      "What are the 3 types of cloud managed services in the United States for customers?",
    answer:
      "Cloud services are classified into three types: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). IaaS enables businesses to handle their computing, networking, and storage components without physically managing them on-premises. PaaS provides a platform for developing, testing, and deploying applications, while SaaS delivers fully managed software applications over the internet.",
  },
  {
    question:
      "Why use cloud-managed services as a solution for your organization?",
    answer:
      "A cloud-managed service can monitor your organization for suspicious activities 24 hours a day, seven days a week, and deploy cloud resources to safeguard your firm's data. In addition to providing help for disaster recovery, cloud-managed services can also improve security, reduce operational costs, increase scalability, and free your IT team to focus on strategic initiatives.",
  },
  {
    question: "What is cloud hosted vs. cloud managed?",
    answer:
      "Cloud-hosted services, or dedicated hosting, reserve a single server for your use — this could be located on-site or remotely in a data center; nevertheless, this server is yours alone. Cloud managed services also use a dedicated server in a remote location exclusively available to your organization. The major distinction is resource availability and support through a Managed Services provider who handles monitoring, maintenance, security, and optimization.",
  },
  {
    question: "What are the 6 most common cloud managed services in business?",
    answer:
      "With cloud computing services, consumers can rent computing resources from any location on the planet. These cloud servers are accessible 24 hours a day and currently power most of the Internet. The 6 most common cloud services are: Microsoft Azure, Amazon Web Services (AWS), Oracle Cloud, Google Cloud Platform (GCP), IBM Cloud, and ProLabs Cloud Services.",
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

export default function CloudManagedServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-cms">
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO (Above the Fold)
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-hero-band">
        <div className="container">
          <nav className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Services</span>
            <span className="sep">/</span>
            <span className="active">Managed Security & Cloud IT Support - Dubai, UAE</span>
          </nav>
          <h1 className="sv-hero-h1">Managed Security & Cloud IT Support - Dubai, UAE</h1>
        </div>
      </section>

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
              <motion.h2 variants={fadeInUp} className="sv-display-h2">Managed Security & Cloud IT Support - Dubai, UAE</motion.h2>

              <motion.p variants={fadeInUp} className="sv-hero-p">
                You may never realize the full benefits of the cloud if it fails
                to streamline your critical IT processes and simplify the
                management of key business applications. Professional Labs Cloud
                Managed Services (CMS) takes the complexity out of workload
                management, so you can focus on what matters most.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="sv-hero-btn-wrap"
                style={{ gap: "16px", flexWrap: "wrap" }}
              >
                <Link href="/contact" className="sv-btn-primary">
                  🟢 Get Free Cloud Consultation <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="sv-btn-outline">
                  📞 Speak to a Cloud Expert
                </Link>
              </motion.div>

              {/* Trust Micro-Bar */}
              <motion.div variants={fadeInUp} className="sv-trust-bar">
                <span className="sv-trust-item">
                  ✔ AWS, Azure, GCP & Oracle
                </span>
                <span className="sv-trust-item">✔ 24/7 Cloud Monitoring</span>
                <span className="sv-trust-item">✔ Up to 30% Cost Savings</span>
                <span className="sv-trust-item">✔ Delaware-Based Support</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="sv-hero-image"
            >
              <div className="sv-img-frame">
                <Image
                  src="/cloud_app_security_hero.png"
                  alt="Cloud Infrastructure Dashboard"
                  width={500}
                  height={400}
                  className="sv-float-img"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — Mission & Vision
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-why-defender">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sv-why-defender-content"
          >
            <h2 className="sv-h2 text-center mb-8">
              Professional Labs' Mission: Delivering Innovation
            </h2>
            <p className="sv-hero-p max-w-4xl mx-auto text-center">
              Managing your IT infrastructure can be expensive, both monetarily
              and in terms of personnel. You can focus on strategic business
              initiatives, optimize costs, and delegate day-to-day management to
              us by streamlining and simplifying your processes and freeing up
              resources.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — How We Help / Cloud Vision
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-info">
        <div className="container">
          <h2 className="sv-h2 text-center mb-12">
            How We Help You Realize Your Cloud Vision
          </h2>
          <div className="sv-info-grid">
            <div className="sv-info-card">
              <p className="sv-p">
                To bring you world-class solutions and the best core offer
                providers, Professional Labs CMS takes a holistic, integrated
                strategy that utilizes products and services from leading
                technology providers such as Amazon Web Services (AWS),
                Microsoft Azure, Google Cloud, and Oracle Cloud.
              </p>
              <p className="sv-p" style={{ marginTop: "16px" }}>
                Our specialized resources have provided numerous rapid, scalable
                cloud solutions to businesses of all sizes. We accelerate and
                automate our leading practices across single, multiple, or
                hybrid cloud deployments using our OpenCloud cloud management
                platform (CMP).
              </p>
            </div>
            <div className="sv-info-card sv-dark-card">
              <p className="sv-p">
                We create turnkey solutions that provide scalability, agility,
                and rapid deployment capabilities to help you capitalize on the
                cloud's transformative value. By combining OpenCloud with our
                extensive global experience and resource pool, we assist you in
                developing, executing, and managing a comprehensive, flexible
                cloud managed strategy that enables you to engineer advantage
                and make your cloud vision a reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — What We Offer
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-security">
        <div className="container">
          <div className="sv-section-header">
            <h2 className="sv-h2">What We Offer</h2>
            <p className="sv-subtitle" style={{ marginTop: 15 }}>
              Professional Labs Cloud Managed Services provides versatile
              solutions for integration and delivery, offering two paths to CMS
              delivery through three phases of designing your optimized cloud
              environment.
            </p>
          </div>
          <div className="sv-security-grid">
            {whatWeOffer.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="sv-scard"
              >
                <div className="sv-scard-icon">{item.icon}</div>
                <div className="sv-scard-body">
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — OpenCloud Benefits (Dark Section)
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-analysis">
        <div className="container">
          <div className="sv-analysis-header">
            <h2 className="sv-h2" style={{ color: "#fff" }}>
              OpenCloud-Powered Professional Labs Cloud Managed Services
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "1.15rem",
                maxWidth: "800px",
                margin: "20px auto 0",
                lineHeight: 1.7,
              }}
            >
              On our Professional Labs OpenCloud cloud management platform or
              your cloud management platform — with either option, you receive
              our full range of services.
            </p>
          </div>
          <div className="sv-pros-grid">
            {openCloudBenefits.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="sv-pro-item"
              >
                <div className="sv-check-icon-wrap">
                  <CheckCircle2 size={22} className="text-accent" />
                </div>
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — Why Professional Labs
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-focus">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sv-focus-box"
            style={{ display: "block" }}
          >
            <div className="sv-focus-text">
              <h3 className="sv-h3">
                Why Professional Labs for Managed Service Solutions?
              </h3>
              <p className="sv-p">
                Monitoring your cloud deployment might be a significant
                obstacle. Let us help you reduce the complexities of the cloud.
                We collaborate with you to develop transparent, cost-effective
                cloud management techniques that enable you to build a flexible,
                scalable cloud ecosystem that is personalized to your needs,
                supports your growth goals, and allows you to focus on providing
                value.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — Cloud Providers (Outcomes Dark)
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-outcomes">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sv-outcomes-h2"
          >
            6 Most Common Cloud Services We Work With
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="sv-outcomes-grid"
          >
            {cloudProviders.map((provider, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="sv-outcome-card"
              >
                <p className="sv-outcome-text">
                  <span className="sv-outcome-highlight">
                    {provider.name.split(" ").slice(0, 2).join(" ")}
                  </span>{" "}
                  {provider.name.split(" ").slice(2).join(" ")}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8 — Mid-Page CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-mid-cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sv-mid-cta-box"
          >
            <h2 className="sv-mid-cta-h2">
              Ready to Streamline Your Cloud Operations?
            </h2>
            <p className="sv-mid-cta-p">
              Get a free consultation with a Professional Labs cloud expert and
              discover how our managed services can transform your
              infrastructure.
            </p>
            <div className="sv-mid-cta-btns">
              <Link href="/contact" className="sv-btn-white">
                🟢 Schedule Free Consultation <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="sv-btn-cta-outline">
                📞 Speak to a Cloud Engineer Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 9 — FAQ
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-faq">
        <div className="container">
          <h2 className="sv-h2 text-center mb-20">
            Frequently Asked Questions About Managed Cloud Services
          </h2>
          <div className="sv-faq-wrap">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`sv-faq-item ${openFaq === index ? "sv-active" : ""}`}
              >
                <button
                  className="sv-faq-q"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
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

      {/* ═══════════════════════════════════════════════════════════
          SECTION 10 — Final CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="sv-cta-banner"
          >
            <h2 className="sv-h2" style={{ color: "#fff", marginBottom: 16 }}>
              Optimize Your Cloud. Reduce Costs. Scale With Confidence.
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "rgba(255,255,255,0.85)",
                marginBottom: 40,
              }}
            >
              Learn more about Professional Labs Cloud Managed Services and
              discover how we can help you engineer your cloud advantage.
            </p>
            <div className="sv-mid-cta-btns">
              <Link href="/contact" className="sv-btn-white">
                🟢 Book Consultation <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="sv-btn-cta-outline">
                📞 Call Us Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
