"use client";

import {
  Shield,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Award,
  Monitor,
  Users,
  Laptop,
  Code,
  Lock,
  Cloud,
  Database,
  Search,
  BookOpen,
  Briefcase,
  GraduationCap,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const trainingServices = [
  {
    title: "Certification-Focused Training",
    desc: "Our training courses are structured to prepare learners for industry-recognized certifications including CompTIA, Cisco, Microsoft, and other widely recognized IT credentials.",
    icon: <Award size={24} />,
  },
  {
    title: "Hands-On Learning Experience",
    desc: "Students gain practical experience through interactive labs, exercises, and real-world projects that help reinforce technical knowledge and build job-ready skills.",
    icon: <Monitor size={24} />,
  },
  {
    title: "Customized Corporate Training",
    desc: "Professional Labs offers customized enterprise IT training programs tailored to organizational needs. Courses can be adapted to fit your company's schedule and budget.",
    icon: <Briefcase size={24} />,
  },
  {
    title: "Experienced Industry Instructors",
    desc: "Our instructors are experienced IT professionals who bring real-world knowledge and practical insights into every training session, helping students understand modern IT challenges.",
    icon: <Users size={24} />,
  },
  {
    title: "Flexible Learning Options",
    desc: "We provide multiple learning formats including online training, instructor-led classes, and hybrid learning models, allowing students and professionals to learn at their own pace.",
    icon: <Laptop size={24} />,
  },
];

const courseCategories = [
  {
    title: "Network and Security",
    desc: "Learn networking fundamentals, network architecture, security protocols, firewall configuration, and intrusion detection systems used to protect modern IT infrastructure.",
    icon: <Shield size={22} />,
  },
  {
    title: "Cloud Computing",
    desc: "Understand cloud fundamentals, cloud security, and infrastructure management across leading platforms used in modern enterprise environments.",
    icon: <Cloud size={22} />,
  },
  {
    title: "Programming and Development",
    desc: "Learn programming languages such as Python, Java, and C#, along with software development methodologies, coding practices, and application development concepts.",
    icon: <Code size={22} />,
  },
  {
    title: "Cybersecurity",
    desc: "Develop cybersecurity skills including ethical hacking, vulnerability assessments, penetration testing, and threat detection techniques used to protect digital systems.",
    icon: <Lock size={22} />,
  },
  {
    title: "Data Science",
    desc: "Explore data analysis, machine learning fundamentals, and data visualization techniques used to extract insights from business data.",
    icon: <Database size={22} />,
  },
];

const curriculumAreas = [
  "Architecture and Engineering",
  "Cloud Computing",
  "Cybersecurity",
  "Data Storage",
  "Database Management",
  "Mobile Application Development",
  "Networking and Wireless Technologies",
  "Product Training (SaaS, Adobe, Microsoft, Citrix, Red Hat)",
  "Unified Communications",
  "Virtualization Technologies",
  "VoIP and Telephony",
  "Web Design and Programming",
];

const whyChoose = [
  {
    title: "Industry-Aligned Training",
    desc: "Courses are designed around modern technology standards and employer skill requirements.",
  },
  {
    title: "Hands-On Learning",
    desc: "Practical labs and projects help students gain real-world experience with enterprise technologies.",
  },
  {
    title: "Certification Preparation",
    desc: "Training programs help students prepare for globally recognized IT certifications.",
  },
  {
    title: "Experienced Instructors",
    desc: "Learn from professionals with real-world IT and cybersecurity experience.",
  },
  {
    title: "Flexible Learning",
    desc: "Choose online, classroom, or hybrid training formats that fit your schedule.",
  },
];

const faqItems = [
  {
    question: "What are the benefits of IT training services?",
    answer:
      "IT training services help individuals and organizations develop technical skills, stay updated with modern technologies, and improve productivity. Training programs also help professionals prepare for certifications and expand career opportunities in the technology sector.",
  },
  {
    question: "What types of IT training services are available?",
    answer:
      "IT training services typically include courses in cybersecurity, networking, cloud computing, programming, data science, database management, and enterprise software technologies.",
  },
  {
    question: "How much do IT training services typically cost?",
    answer:
      "The cost of IT training programs depends on the course type, certification level, training format, and duration. Some courses focus on short certification preparation, while others provide comprehensive multi-week training programs.",
  },
  {
    question: "What qualifications do IT trainers have?",
    answer:
      "Most IT trainers are experienced professionals with industry certifications and hands-on experience in fields such as cybersecurity, cloud infrastructure, networking, or software development.",
  },
  {
    question: "How can I choose the right IT training provider?",
    answer:
      "When selecting an IT training provider, consider factors such as course curriculum, certification preparation, instructor experience, hands-on labs, career support services, and learning format flexibility.",
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

export default function ITTrainingClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-training">
      {/* ═══ SECTION 1 — HERO BAND ═══ */}
      <section className="sv-hero-band">
        <div className="container">
          <nav className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Services</span>
            <span className="sep">/</span>
            <span className="active">IT Training Services</span>
          </nav>
          <h1 className="sv-hero-h1">IT Training Services</h1>
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
                Empower Your IT Skills with Professional IT Training Programs
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
                Professional Labs provides comprehensive IT training services
                designed to help individuals and organizations build in-demand
                technical skills. Our programs combine expert instruction,
                practical labs, and certification preparation.
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
                  Enroll for Top-Tier Learnings <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="sv-btn-outline"
                  style={{ padding: "18px 40px" }}
                >
                  Speak to a Training Advisor
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="sv-meta-tags">
                <span className="sv-tag">✔ Industry Certification Prep</span>
                <span className="sv-tag">✔ Hands-On Labs</span>
                <span className="sv-tag">✔ Career Support</span>
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
                className="sv-image-frame sv-training-img-frame"
                style={{
                  borderRadius: "32px",
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                <div className="sv-img-frame">
                  <Image
                    src="/modern_workplace_hero_1772545930778.png"
                    alt="IT Training Services - Students learning in a modern digital lab setting"
                    width={500}
                    height={400}
                    className="sv-float-img"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 — PROGRAMS ═══ */}
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
                Professional Labs IT Training Programs
              </h2>
              <p
                className="sv-p"
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  color: "var(--sv-gray)",
                }}
              >
                Professional Labs delivers professional IT certification
                training programs covering cybersecurity, cloud computing,
                networking, programming, and enterprise technologies.
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
                Our training courses focus on practical learning, preparing
                students for industry certifications and real-world IT roles.
                Programs are designed for beginners and professionals alike.
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
                    100%
                  </h4>
                  <span
                    style={{ fontSize: "0.85rem", color: "var(--sv-gray)" }}
                  >
                    Practical Labs
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
                    Expert
                  </h4>
                  <span
                    style={{ fontSize: "0.85rem", color: "var(--sv-gray)" }}
                  >
                    Industry Instructors
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
                padding: "30px",
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
                Career Support & Job Guidance
              </h4>
              <p className="sv-p" style={{ fontSize: "0.95rem" }}>
                Our Career Services team supports learners throughout their
                journey with resumes, LinkedIn optimization, and mock
                interviews.
              </p>
              <ul className="sv-check-list-pill" style={{ marginTop: "0" }}>
                <li>Resume Optimization</li>
                <li>LinkedIn Profile Improvement</li>
                <li>Mock Interview Preparation</li>
                <li>Job Search Strategies</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — SERVICES GRID ═══ */}
      <section
        className="sv-section-grid"
        style={{ background: "var(--sv-bg)" }}
      >
        <div className="container">
          <div className="sv-section-header">
            <h2 className="sv-h2">Our Training Services</h2>
            <p className="sv-subtitle">
              Comprehensive solutions designed to help learners gain
              certifications and advance careers.
            </p>
          </div>
          <div
            className="sv-grid-layout"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            }}
          >
            {trainingServices.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="sv-grid-card"
              >
                <div className="sv-card-icon">{item.icon}</div>
                <h4 className="sv-h4">{item.title}</h4>
                <p className="sv-p">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 — COURSES GRID ═══ */}
      <section className="sv-section-info">
        <div className="container">
          <div className="sv-section-header">
            <h2 className="sv-h2">Our Courses</h2>
            <p className="sv-subtitle">
              Explore our specialized IT training modules across core
              disciplines.
            </p>
          </div>
          <div
            className="sv-grid-layout"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "30px",
            }}
          >
            {courseCategories.map((course, idx) => (
              <motion.div
                key={idx}
                className="sv-pro-f-card"
                style={{
                  padding: "30px",
                  background: "#fff",
                  borderRadius: "24px",
                  border: "1px solid rgba(0,0,0,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <div style={{ color: "var(--sv-accent)" }}>{course.icon}</div>
                <h4 className="sv-h4" style={{ marginBottom: 0 }}>
                  {course.title}
                </h4>
                <p className="sv-p" style={{ fontSize: "0.95rem" }}>
                  {course.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 — CURRICULUM AREAS (Dark) ═══ */}
      <section
        className="sv-section-features"
        style={{ background: "var(--sv-ink)", color: "#fff" }}
      >
        <div className="container">
          <div className="sv-section-header light">
            <h2 className="sv-h2" style={{ color: "#fff" }}>
              IT Courses Across Curriculum Areas
            </h2>
            <p
              className="sv-subtitle"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Professional Labs offers a wide range of IT training courses
              across multiple technical disciplines.
            </p>
          </div>
          <div
            className="sv-grid-layout"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {curriculumAreas.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  background: "rgba(255,255,255,0.05)",
                  padding: "18px",
                  borderRadius: "16px",
                }}
              >
                <CheckCircle2 size={18} style={{ color: "var(--sv-accent)" }} />
                <span style={{ fontSize: "0.95rem" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7 — WHY CHOOSE US ═══ */}
      <section className="sv-section-benefits">
        <div
          className="container sv-training-benefits-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <div className="sv-benefits-image">
            <div
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                maxHeight: "450px",
                borderLeft: "8px solid var(--sv-accent)",
              }}
            >
              <Image
                src="/modern_workplace_collaboration_1772545955067.png"
                alt="IT Training Certification Preparation"
                width={1200}
                height={800}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
          <div className="sv-benefits-content">
            <h2 className="sv-h2">Why Choose Professional Labs?</h2>
            <p
              className="sv-p"
              style={{ fontSize: "1.1rem", marginBottom: "30px" }}
            >
              Career-focused IT training programs that combine certification
              preparation, practical learning, and expert instruction.
            </p>
            <ul className="sv-pro-features">
              {whyChoose.map((item, i) => (
                <li key={i} className="sv-pro-f-card">
                  <div
                    className="sv-pro-f-icon"
                    style={{ color: "var(--sv-accent)" }}
                  >
                    <CheckCircle2 size={18} />
                  </div>
                  <div className="sv-pro-f-body">
                    <strong>{item.title}:</strong> {item.desc}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 8 — FAQ ═══ */}
      <section
        className="sv-section-faq"
        style={{ background: "var(--sv-bg)" }}
      >
        <div className="container">
          <h2
            className="sv-h2"
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            Frequently Asked Questions About IT Training Services
          </h2>
          <div
            className="sv-faq-wrap"
            style={{ maxWidth: "900px", margin: "0 auto" }}
          >
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className={`sv-faq-item ${openFaq === idx ? "sv-active" : ""}`}
              >
                <button
                  className="sv-faq-q"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="sv-faq-qtext">{item.question}</span>
                  <span className="sv-faq-ico">
                    {openFaq === idx ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="sv-faq-a"
                    >
                      <div className="sv-faq-ainner">
                        <p style={{ lineHeight: "1.8" }}>{item.answer}</p>
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
              style={{ color: "#fff", marginBottom: "20px" }}
            >
              Ready to Advance Your IT Career?
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
              Join Professional Labs IT Training programs and develop the
              technical skills and certifications required to succeed.
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
                Enroll for Top-Tier Learnings <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="sv-btn-outline"
                style={{ borderColor: "#fff", color: "#fff" }}
              >
                Speak to a Training Advisor Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
