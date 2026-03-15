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

const servicePackages = [
  {
    title: "Survey Platforms",
    desc: "Advanced survey tools designed to collect reliable data from targeted respondents across multiple demographic segments.",
    icon: <Monitor size={24} />,
  },
  {
    title: "Dedicated Research Support",
    desc: "Direct access to our research specialists for project guidance, research design improvements, and ongoing support.",
    icon: <Headphones size={24} />,
  },
  {
    title: "Research Platform Training",
    desc: "Training sessions to help teams effectively use survey tools and research platforms.",
    icon: <FileText size={24} />,
  },
  {
    title: "Custom Survey Templates",
    desc: "Pre-built survey frameworks tailored to industry-specific research objectives.",
    icon: <Settings size={24} />,
  },
  {
    title: "Survey Design Review",
    desc: "Expert review of survey structure, flow, and question logic before launch.",
    icon: <Eye size={24} />,
  },
  {
    title: "Qualification Testing",
    desc: "Preliminary testing to ensure surveys reach the correct target audience.",
    icon: <CheckCircle2 size={24} />,
  },
  {
    title: "B2B & Niche Audience Access",
    desc: "Target specialized audiences and hard-to-reach consumer segments.",
    icon: <Target size={24} />,
  },
  {
    title: "Complex Project Management",
    desc: "Expert-led project launches for advanced research studies requiring detailed planning and execution.",
    icon: <Zap size={24} />,
  },
];

const whyChoose = [
  {
    title: "Global Research Reach",
    desc: "Professional Labs conducts research across 50+ global markets, supporting organizations operating in international environments.",
    icon: <Globe size={24} />,
  },
  {
    title: "Transparent Research Process",
    desc: "Our research projects offer full transparency with data validation, recording capabilities, and detailed reporting.",
    icon: <ShieldCheck size={24} />,
  },
  {
    title: "Industry Expertise",
    desc: "Our analysts bring deep sector knowledge and strategic insight to deliver actionable intelligence tailored to your industry.",
    icon: <Lightbulb size={24} />,
  },
  {
    title: "Multilingual Research Capabilities",
    desc: "Professional Labs supports research projects in 40+ languages, enabling global data collection and international market analysis.",
    icon: <Languages size={24} />,
  },
];

const coreCapabilities = [
  "Defining research challenges and objectives",
  "Developing comprehensive research strategies",
  "Designing surveys and research materials",
  "Collecting and validating market data",
  "Performing advanced data analysis",
  "Generating research reports and insights",
  "Implementing data-driven strategies",
];

const processes = [
  {
    id: "01",
    title: "Define the Research Problem & Objectives",
  },
  {
    id: "02",
    title: "Develop the Research Plan",
  },
  {
    id: "03",
    title: "Collect and Analyze Market Data",
  },
  {
    id: "04",
    title: "Present Research Findings",
  },
];

const faqItems = [
  {
    question: "What are market research services?",
    answer:
      "Market research services involve collecting and analyzing information about customers, competitors, and industry trends to help businesses make informed strategic decisions.",
  },
  {
    question: "What does a market research analyst do?",
    answer:
      "A market research analyst gathers and interprets data related to consumer behavior, market trends, and competitor strategies to provide actionable insights that guide business strategy.",
  },
  {
    question: "How much does it cost to hire a market research firm?",
    answer:
      "The cost of market research services varies depending on the project scope, research methodology, sample size, and geographic coverage. Custom research projects typically require tailored pricing.",
  },
  {
    question: "What are the main types of marketing research?",
    answer:
      "Common types of marketing research include customer research, product research, brand research, competitive analysis, market segmentation studies, pricing research, and satisfaction surveys.",
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

export default function MarketResearchClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-mktres">
      {/* ═══ SECTION 1 — HERO BAND ═══ */}
      <section className="sv-hero-band">
        <div className="container">
          <nav className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Services</span>
            <span className="sep">/</span>
            <span className="active">Market Research Services</span>
          </nav>
          <h1 className="sv-hero-h1">
            Market Research Services for Data-Driven Business Strategy
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
                Gain Actionable Market Insights to Make Smarter Business
                Decisions
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="sv-body-text"
                style={{
                  fontSize: "1.15rem",
                  marginBottom: "15px",
                  lineHeight: "1.6",
                }}
              >
                Professional Labs provides comprehensive market research services
                designed to help businesses understand their customers, analyze
                competitors, and identify growth opportunities.
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
                Our research experts collect and analyze valuable insights about
                your products, technologies, customers, competitors, and
                industry trends, enabling your organization to make strategic
                decisions based on reliable data rather than assumptions.
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
                  Consult a Market Research Expert Now{" "}
                  <ArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="sv-meta-tags">
                <span className="sv-tag">
                  ✔ Business Intelligence &amp; Data Analytics
                </span>
                <span className="sv-tag">✔ Competitive Market Analysis</span>
                <span className="sv-tag">✔ Customer Behavior Insights</span>
                <span className="sv-tag">
                  ✔ Customized Market Research Solutions
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sv-hero-image"
            >
              <div
                className="sv-image-frame sv-mktres-img-frame"
                style={{
                  borderRadius: "32px",
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 40px 80px rgba(0,0,0,0.12)",
                }}
              >
                <Image
                  src="/pki_hero_dashboard_1772536428647.png"
                  alt="Market Research Services - Business intelligence dashboard and data analytics"
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

      {/* ═══ SECTION 3 — QUANTITATIVE & QUALITATIVE ═══ */}
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
                Quantitative and Qualitative Market Research Solutions
              </h2>
              <p
                className="sv-p"
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  color: "var(--sv-gray)",
                }}
              >
                Our market research services combine quantitative data analysis
                and qualitative research techniques to deliver meaningful
                insights that support business transformation and strategic
                planning.
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
                Professional Labs helps organizations identify market
                opportunities, evaluate customer preferences, and build
                competitive strategies based on deep market understanding.
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
                Unlike traditional research firms, our approach integrates
                advanced analytics, modern research tools, and industry expertise
                to ensure complete and accurate market intelligence.
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
                Local Expertise with Global Market Intelligence
              </h4>
              <p className="sv-p" style={{ fontSize: "0.95rem" }}>
                Professional Labs delivers advanced business intelligence and
                market data analysis services to support companies across
                industries.
              </p>
              <p
                className="sv-p"
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  marginTop: "-10px",
                }}
              >
                Our market research services help organizations develop
                strategic advantages through:
              </p>
              <ul className="sv-check-list-pill" style={{ marginTop: "0" }}>
                <li>Customer behavior insights</li>
                <li>Competitive intelligence analysis</li>
                <li>Market opportunity identification</li>
                <li>Data-driven business transformation</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — RESEARCH PROCESS ═══ */}
      <section
        className="sv-section-process"
        style={{ padding: "100px 0", background: "#f8fafc" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2 className="sv-h2">4 Steps of Our Market Research Process</h2>
            <p className="sv-subtitle">
              Our structured approach ensures that every research project
              produces clear insights and reliable business intelligence.
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
              className="sv-mktres-process-hub"
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
                  4 Steps of Market Research Process
                </span>
              </div>
            </div>

            {/* Grid for Steps */}
            <div className="sv-mktres-process-grid">
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
              Professional Labs Market Research Capabilities
            </h2>
            <p
              className="sv-subtitle"
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              Professional Labs provides end-to-end market research outsourcing
              services, combining expertise in both primary and secondary
              research. Our analysts use modern business intelligence tools and
              visualization technologies to transform raw data into actionable
              insights.
            </p>
          </div>

          <div className="sv-mktres-cap-grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p
                className="sv-p"
                style={{ marginBottom: "30px", color: "var(--sv-gray)" }}
              >
                From identifying research respondents to delivering final
                reports, our specialists support every stage of the research
                process.
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
                  alt="Market Research Capabilities - Data analysis and business intelligence"
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

      {/* ═══ SECTION 6 — THE RIGHT AUDIENCE ═══ */}
      <section
        className="sv-section-respondents"
        style={{ background: "var(--sv-bg)", padding: "120px 0" }}
      >
        <div className="container">
          <div className="sv-mktres-audience-grid">
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
                  Successful research begins with the right respondents
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
                  Professional Labs connects businesses with targeted audiences
                  to ensure research accuracy and reliable insights. We provide
                  access to <strong>90M+ global panel respondents</strong>,
                  enabling precise demographic segmentation and targeted
                  research studies.
                </p>
              </div>

              <div className="sv-mktres-mini-cards">
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
                    Access specialized B2B audiences and focused consumer
                    segments to support niche market research initiatives.
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
                    <h5 style={{ margin: 0, fontWeight: 800 }}>
                      Global Respondent Reach
                    </h5>
                  </div>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--sv-gray)",
                      margin: 0,
                    }}
                  >
                    Our global respondent network allows businesses to conduct
                    research across multiple demographics, industries, and
                    geographic regions.
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
                  Fully Managed Research Support
                </div>
                <h3
                  className="sv-h3"
                  style={{
                    color: "#fff",
                    fontSize: "1.7rem",
                    marginBottom: "20px",
                  }}
                >
                  We manage the entire research process
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: "1.7",
                    marginBottom: "40px",
                  }}
                >
                  Professional Labs manages the entire research process,
                  including planning, data collection, analysis, and reporting,
                  ensuring high-quality results for every project.
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
                      Cluster analysis &amp; Pricing studies
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
                      Real-time Guidance &amp; Reporting
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
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
            <h2 className="sv-h2">Research Service &amp; Support Packages</h2>
            <p className="sv-subtitle">
              Our market research services include flexible support options
              designed to meet your research objectives.
            </p>
          </div>
          <div
            className="sv-grid-layout"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {servicePackages.map((item, idx) => (
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

      {/* ═══ SECTION 8 — WHY CHOOSE US ═══ */}
      <section
        className="sv-section-info"
        style={{ background: "var(--sv-bg)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="sv-h2">
              Why Choose Professional Labs for Market Research?
            </h2>
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
          <div className="sv-mktres-core-grid">
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
                Core Market Research Capabilities
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: "40px",
                  fontSize: "1.15rem",
                  lineHeight: "1.8",
                }}
              >
                Our research solutions equip business leaders with reliable
                intelligence to make strategic decisions in competitive markets.
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

      {/* ═══ SECTION 10 — DISCOVER CTA ═══ */}
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
              Discover New Market Opportunities
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
              Market research has become a critical driver of innovation and
              competitive advantage. With accurate insights into customer
              behavior and market trends, businesses can identify opportunities,
              reduce risks, and develop stronger strategies.
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
                Consult a Market Research Expert Now{" "}
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 11 — FAQ ═══ */}
      <section className="sv-section-faq">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="sv-h2">
              Frequently Asked Questions About Market Research Services
            </h2>
          </div>
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
    </main>
  );
}
