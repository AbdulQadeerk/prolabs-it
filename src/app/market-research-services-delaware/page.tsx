"use client";

import {
  Search,
  Globe,
  Eye,
  Users,
  BarChart3,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle2,
  Target,
  Languages,
  Monitor,
  FileText,
  Lightbulb,
  Headphones,
  Settings,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const services = [
  {
    title: "Survey platform",
    desc: "Robust survey tools to capture data from 90M+ panel respondents across any demographic segment.",
    icon: <Monitor size={28} />,
  },
  {
    title: "Dedicated phone support",
    desc: "Direct access to our research team for guidance, strategy adjustments, and real-time project updates.",
    icon: <Headphones size={28} />,
  },
  {
    title: "Product training",
    desc: "Comprehensive training on our platforms and tools to ensure your team maximizes research capabilities.",
    icon: <FileText size={28} />,
  },
  {
    title: "Customized survey templates",
    desc: "Pre-built and tailored survey templates designed for your specific industry and research objectives.",
    icon: <Settings size={28} />,
  },
  {
    title: "Pre-launch survey design review",
    desc: "Expert review of survey logic, flow, and design before launch for maximum completion and data quality.",
    icon: <Eye size={28} />,
  },
  {
    title: "Complementary qualification rate tests",
    desc: "Ensure your survey targets the right audience with preliminary qualification testing.",
    icon: <CheckCircle2 size={28} />,
  },
  {
    title: "Access to niche and B2B targeting",
    desc: "Access to specialized B2B audiences and hard-to-reach consumer segments for focused research studies.",
    icon: <Target size={28} />,
  },
  {
    title: "Manual launch of complex projects",
    desc: "Expert-led launch for intricate research projects requiring high-touch management and precision.",
    icon: <Zap size={28} />,
  },
];

const whyChoose = [
  {
    title: "Global Reach",
    desc: "50+ markets are covered across the Americas, Europe, and Asia-Pacific.",
    icon: <Globe size={28} />,
  },
  {
    title: "Transparency",
    desc: "100% recording capability and live barge-in capability for full research visibility.",
    icon: <Settings size={28} />,
  },
  {
    title: "Industry Expertise",
    desc: "Approach based on insights and sector expertise to deliver actionable intelligence.",
    icon: <Lightbulb size={28} />,
  },
  {
    title: "Multi-lingual Capabilities",
    desc: "Global coverage of 40+ languages for truly international research projects.",
    icon: <Languages size={28} />,
  },
];

const faqs = [
  {
    question: "What are market research services?",
    answer:
      "Businesses can learn more about potential customers and gauge product interest through market research. This kind of study can be undertaken either internally by the business or outside by a market research firm.",
  },
  {
    question: "What does an IT help desk technician do?",
    answer:
      "Businesses can learn more about potential customers and gauge product interest through market research. This kind of study can be undertaken either internally by the business or outside by a market research firm.",
  },
  {
    question: "How much does it cost to hire a market researcher?",
    answer:
      "Depending on the overall number of interviews, if they’re conducted anonymously, and the overall incidence, consumer interviews typically cost between $200 and $300 each in addition to incentives. Typically, corporate interviews cost between $300 and $500 plus incentives per session.",
  },
  {
    question: "What are the 7 types of marketing research?",
    answer:
      "The process is structured around market research processes that any brand can take to achieve its goals: Define the Problem, Develop the Research Strategy, Acquire the Research Materials, Collect the Data, Analyze the Data, Compile the Data, and Implement Data-Driven Strategies.",
  },
];

const coreCapabilities = [
  "Define the Problem.",
  "Develop the Research Strategy.",
  "Acquire the Research Materials.",
  "Collect the Data.",
  "Analyze the Data.",
  "Compile the Data.",
  "Implement Data-Driven Strategies.",
];

const processes = [
  {
    id: "01",
    title: "Define the problem & Research Objectives",
    position: "top-left",
  },
  {
    id: "02",
    title: "Develop the Research plan",
    position: "top-right",
  },
  {
    id: "03",
    title: "Present the Findings",
    position: "bottom-left",
  },
  {
    id: "04",
    title: "Analyse & Collect information",
    position: "bottom-right",
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

export default function MarketResearchPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-mktres">
      {/* ═══ SECTION 1 — HERO BAND ═══ */}
      <section className="sv-hero-band">
        <div className="container">
          <nav className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Pages</span>
            <span className="sep">/</span>
            <span className="active">Market Research Services</span>
          </nav>
          <h1 className="sv-hero-h1">Market Research Services</h1>
        </div>
      </section>

      {/* ═══ SECTION 2 — HERO MAIN ═══ */}
      <section className="sv-hero-main">
        <div className="container">
          <div className="sv-hero-grid" style={{ alignItems: "center" }}>
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
                Get useful facts regarding your goods, technology, customers,
                competition, and market so you can make decisions for your
                business based on data.
              </motion.h2>

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
                  Consult a Market Research Expert Now <ArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="sv-meta-tags"
                style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
              >
                <span className="sv-tag">Market Research Delaware</span>
                <span className="sv-tag">Business Intelligence</span>
                <span className="sv-tag">Data Research Experts</span>
                <span className="sv-tag">Customized Market Solutions</span>
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
                className="sv-image-frame"
                style={{
                  borderRadius: "32px",
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 40px 80px rgba(0,0,0,0.12)",
                }}
              >
                <Image
                  src="/pki_hero_dashboard_1772536428647.png"
                  alt="Market Research Hero"
                  width={1200}
                  height={800}
                  priority
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    maxHeight: "450px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 — UNIQUE INSIGHTS ═══ */}
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
                Quantitative and Qualitative Market Research Solutions That
                Provide Unique Insights For Business Transformation.
              </h2>
              <p
                className="sv-p"
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  color: "var(--sv-gray)",
                }}
              >
                Our market research services assist organizations in identifying
                development possibilities and developing a competitive strategy
                based on a thorough comprehension of customers and the market as
                a whole. Unlike other market research companies, we adopt a
                robust, exhaustive technique to ensure optimum research
                coverage.
              </p>
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
                Local Expertise
              </h4>
              <p className="sv-p" style={{ fontSize: "0.95rem" }}>
                Professional Labs Market Research Services Delaware. Business
                Intelligence and Data Research Delaware. Customized Market
                Research Solutions for Delaware Companies.
              </p>
              <div style={{ marginTop: "10px", width: "100%" }}>
                <ul className="sv-check-list-pill" style={{ marginTop: "0" }}>
                  <li>Data-Driven Strategies</li>
                  <li>Competitive Intelligence</li>
                  <li>Customer Insights</li>
                  <li>Market Transformation</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — RESEARCH PROCESS DIAGRAM ═══ */}
      <section
        className="sv-section-process"
        style={{ padding: "100px 0", background: "#f8fafc" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2 className="sv-h2">4 Step of Market Research Process</h2>
            <p className="sv-subtitle">
              Our Systematic approach to uncovering market intelligence
            </p>
          </div>

          <div
            style={{
              position: "relative",
              maxWidth: "900px",
              margin: "0 auto",
              padding: "40px 0",
            }}
          >
            {/* Center Hub */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "240px",
                height: "240px",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  border: "12px solid var(--sv-ink)",
                  background: "#fff",
                  boxShadow: "0 0 0 10px rgba(0, 43, 77, 0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                }}
              >
                <span
                  style={{
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    color: "var(--sv-ink)",
                    lineHeight: "1.2",
                  }}
                >
                  4 Step of Market Research Process
                </span>
              </div>
            </div>

            {/* Grid for Steps */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "100px",
                position: "relative",
              }}
            >
              {processes.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  style={{
                    background: "#fff",
                    padding: "30px",
                    borderRadius: "20px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                    border: "1px solid #e2e8f0",
                    position: "relative",
                    zIndex: 1,
                    minHeight: "140px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-15px",
                      left: idx % 2 === 0 ? "20px" : "auto",
                      right: idx % 2 === 1 ? "20px" : "auto",
                      background: "var(--sv-ink)",
                      color: "#fff",
                      padding: "5px 15px",
                      borderRadius: "10px",
                      fontSize: "0.9rem",
                      fontWeight: 800,
                    }}
                  >
                    {step.id}
                  </div>
                  <h4
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      margin: 0,
                      color: "var(--sv-ink)",
                    }}
                  >
                    {step.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 — ALL-INCLUSIVE CAPABILITIES ═══ */}
      <section className="sv-section-info" style={{ background: "#fff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="sv-h2" style={{ marginBottom: "16px" }}>
              Professional Labs All-inclusive Market Research Outsourcing
              Capabilities to Thrive in The Digital Age
            </h2>
            <p
              className="sv-subtitle"
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              Our market research expertise boosts the suitable approach to both
              primary and secondary sources to obtain market intelligence. Our
              industry specialists and consultants are adept at deciphering the
              nuances of underlying data to provide personalized market
              research.
            </p>
          </div>

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
              <p
                className="sv-p"
                style={{ marginBottom: "30px", color: "var(--sv-gray)" }}
              >
                As a final component of our market research solutions, we employ
                modern BI and visualization approaches to illustrate our
                findings.
              </p>
              <div
                style={{
                  background: "var(--sv-ink)",
                  padding: "45px",
                  borderRadius: "28px",
                  color: "#fff",
                  boxShadow: "0 30px 60px rgba(0,43,77,0.2)",
                }}
              >
                <div
                  style={{
                    background: "var(--sv-accent)",
                    height: "4px",
                    width: "50px",
                    marginBottom: "25px",
                  }}
                ></div>
                <h3
                  className="sv-h3"
                  style={{
                    color: "#fff",
                    marginBottom: "20px",
                    fontSize: "1.6rem",
                  }}
                >
                  Professionals in market research help at each stage, from
                  Respondents to Reports.
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "1.1rem",
                    lineHeight: "1.6",
                  }}
                >
                  We provide end-to-end support, ensuring your research project
                  yields the highest quality data and most relevant insights.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sv-hero-image"
            >
              <div
                className="sv-image-frame"
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  borderLeft: "8px solid var(--sv-accent)",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.1)",
                }}
              >
                <Image
                  src="/pki_infrastructure_security_1772536450990.png"
                  alt="Market Research Capabilities"
                  width={1200}
                  height={800}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 — RESEARCH EXPERTS (REDESIGNED) ═══ */}
      <section
        className="sv-section-respondents"
        style={{ background: "var(--sv-bg)", padding: "120px 0" }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "80px",
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div style={{ marginBottom: "40px" }}>
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--sv-accent)",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    display: "block",
                    marginBottom: "15px",
                  }}
                >
                  The Right Audience
                </span>
                <h2
                  className="sv-h2"
                  style={{ fontSize: "2.8rem", marginBottom: "25px" }}
                >
                  Research projects require the right respondents
                </h2>
                <p
                  className="sv-p"
                  style={{
                    fontSize: "1.15rem",
                    color: "var(--sv-gray)",
                    marginBottom: "35px",
                    lineHeight: "1.8",
                  }}
                >
                  Find your targeted demographic, no matter how narrow it may
                  be. We work with the top sample companies to give you access
                  to <strong>90M+ panel respondents</strong> with any
                  combination of segmentation, quotas, and splits you require.
                </p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "25px",
                }}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  style={{
                    background: "#fff",
                    padding: "30px",
                    borderRadius: "24px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                    border: "1px solid #e1dfdd",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "15px",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        background: "rgba(34, 167, 224, 0.1)",
                        color: "var(--sv-accent)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Target size={20} />
                    </div>
                    <h5 style={{ margin: 0, fontWeight: 800 }}>
                      Niche Targeting
                    </h5>
                  </div>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--sv-gray)",
                      margin: 0,
                    }}
                  >
                    Access focused B2B and specialized consumer segments.
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  style={{
                    background: "#fff",
                    padding: "30px",
                    borderRadius: "24px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                    border: "1px solid #e1dfdd",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "15px",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        background: "rgba(0, 43, 77, 0.05)",
                        color: "var(--sv-ink)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Globe size={20} />
                    </div>
                    <h5 style={{ margin: 0, fontWeight: 800 }}>90M+ Reached</h5>
                  </div>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--sv-gray)",
                      margin: 0,
                    }}
                  >
                    Global network for any combination of demographic quotas.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ position: "relative" }}
            >
              <div
                style={{
                  background: "var(--sv-ink)",
                  padding: "40px",
                  borderRadius: "24px",
                  color: "#fff",
                  boxShadow: "0 20px 50px rgba(0,0,30,0.2)",
                }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    padding: "10px 20px",
                    borderRadius: "100px",
                    width: "fit-content",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    marginBottom: "30px",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  Full Managed Support
                </div>
                <h3
                  className="sv-h3"
                  style={{
                    color: "#fff",
                    fontSize: "1.7rem",
                    marginBottom: "20px",
                  }}
                >
                  We’ll take care of everything
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: "1.7",
                    marginBottom: "40px",
                  }}
                >
                  We have your research experts on speed dial. We’ll take care
                  of everything, from planning to execution to reporting on the
                  outcome of your project.
                </p>
                <div
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    paddingTop: "30px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      marginBottom: "20px",
                    }}
                  >
                    <CheckCircle2 size={24} color="var(--sv-accent)" />
                    <span style={{ fontWeight: 600 }}>
                      Cluster analysis & Pricing studies
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <CheckCircle2 size={24} color="var(--sv-accent)" />
                    <span style={{ fontWeight: 600 }}>
                      Real-time Guidance & Reporting
                    </span>
                  </div>
                </div>
              </div>

              {/* NinjaOne Style Status Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  bottom: "-30px",
                  right: "-20px",
                  background: "#fff",
                  padding: "20px 30px",
                  borderRadius: "20px",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  border: "1px solid #e1dfdd",
                }}
              >
                <div
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "12px",
                    background: "#4ade80",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Users size={24} />
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 800,
                      color: "var(--sv-ink)",
                      fontSize: "1.1rem",
                    }}
                  >
                    90 Million+
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--sv-gray)",
                      fontWeight: 600,
                    }}
                  >
                    Respondents Pool
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7 — SERVICE PACKAGES ═══ */}
      <section className="sv-section-info" style={{ background: "#fff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="sv-h2">Service & Support Packages</h2>
            <p className="sv-subtitle">
              Make a customized set of services and products to suit your
              requirements, including
            </p>
          </div>
          <div
            className="sv-grid-layout"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {services.map((item, idx) => (
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

      {/* ═══ SECTION 8 — WHY PROLABS ═══ */}
      <section
        className="sv-section-info"
        style={{ background: "var(--sv-bg)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="sv-h2">Why Professional Lab’s</h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "30px",
            }}
          >
            {whyChoose.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                style={{
                  textAlign: "center",
                  padding: "40px 30px",
                  background: "#fff",
                  borderRadius: "28px",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.03)",
                  border: "1px solid #e1dfdd",
                }}
              >
                <div
                  style={{
                    color: "var(--sv-accent)",
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </div>
                <h4
                  style={{
                    fontWeight: 800,
                    marginBottom: "12px",
                    fontSize: "1.2rem",
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--sv-gray)",
                    lineHeight: "1.6",
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 9 — CORE CAPABILITIES ═══ */}
      <section
        className="sv-section-info"
        style={{
          background: "var(--sv-ink)",
          color: "#fff",
          padding: "120px 0",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
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
                style={{
                  color: "#fff",
                  marginBottom: "30px",
                  fontSize: "2.5rem",
                }}
              >
                Core capabilities
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: "40px",
                  fontSize: "1.15rem",
                  lineHeight: "1.8",
                }}
              >
                Our market research solutions equip business executives with the
                information necessary to formulate new strategies for success in
                a competitive market. We assist in developing and implementing
                business strategies that decrease costs, satisfy consumers’
                shifting demands, and distinguish products.
              </p>
              <div style={{ display: "flex", gap: "20px" }}>
                <div
                  style={{
                    width: "60px",
                    height: "6px",
                    background: "var(--sv-accent)",
                    borderRadius: "10px",
                  }}
                ></div>
                <div
                  style={{
                    width: "30px",
                    height: "6px",
                    background: "rgba(255,255,255,0.2)",
                    borderRadius: "10px",
                  }}
                ></div>
              </div>
            </motion.div>
            <div
              className="sv-pros-grid"
              style={{ gridTemplateColumns: "1fr", gap: "10px" }}
            >
              {coreCapabilities.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    padding: "20px",
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <CheckCircle2 size={22} color="var(--sv-accent)" />
                  <span style={{ fontWeight: 600, fontSize: "1.1rem" }}>
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 10 — NEW OPPORTUNITIES CTA ═══ */}
      <section className="sv-section-cta" style={{ padding: "100px 0" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="sv-cta-banner"
          >
            <h2
              className="sv-h2"
              style={{
                color: "white",
                marginBottom: "30px",
                fontSize: "2.8rem",
              }}
            >
              Uncover new business opportunities with research solutions
              tailored to your needs.
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "1.2rem",
                marginBottom: "45px",
                maxWidth: "800px",
                margin: "0 auto 45px",
                lineHeight: "1.7",
              }}
            >
              As a result of its enhanced capabilities, market research is
              gaining popularity as an industry-wide innovation and strategy
              driver. See how your company can gain exclusive market
              intelligence.
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
                Consult a Market Research Expert Now <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 11 — FAQ ═══ */}
      <section className="sv-section-faq">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="sv-h2">Frequently Asked Questions</h2>
            <p className="sv-subtitle">
              Common questions about our market research services
            </p>
          </div>
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
    </main>
  );
}
