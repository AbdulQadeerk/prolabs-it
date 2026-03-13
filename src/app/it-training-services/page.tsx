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
  BookOpen,
  Award,
  Monitor,
  Code,
  Briefcase,
  GraduationCap,
  Laptop,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Data ── */

const services = [
  {
    title: "Certification-Driven Training",
    desc: "Our training courses are designed to help you earn the certifications you need for your career goals, such as CompTIA, Cisco, Microsoft, and more.",
    icon: <Award size={28} />,
  },
  {
    title: "Hands-On Experience",
    desc: "We provide hands-on experience through our labs and projects, allowing you to gain practical knowledge and apply your skills in real-world scenarios.",
    icon: <Monitor size={28} />,
  },
  {
    title: "Customized Training",
    desc: "We offer customized training solutions to meet the unique needs of your business. We can tailor our courses to fit your schedule, budget, and training objectives.",
    icon: <Settings size={28} />,
  },
  {
    title: "Experienced Instructors",
    desc: "Our instructors are experienced professionals with years of industry experience, providing valuable insights and guidance throughout your training.",
    icon: <Users size={28} />,
  },
  {
    title: "Flexible Learning Options",
    desc: "We offer flexible learning options, including online, classroom, and hybrid training, to fit your schedule and learning preferences.",
    icon: <Laptop size={28} />,
  },
];

const courses = [
  {
    title: "Network and Security",
    desc: "Covers network design, security protocols, firewalls, intrusion detection, and more.",
    icon: <Shield size={28} />,
  },
  {
    title: "Cloud Computing",
    desc: "Covers cloud fundamentals, cloud security, cloud infrastructure, and cloud computing services.",
    icon: <Cloud size={28} />,
  },
  {
    title: "Programming and Development",
    desc: "Covers languages such as Python, Java, C#, and more, as well as software development methodologies and best practices.",
    icon: <Code size={28} />,
  },
  {
    title: "Cybersecurity",
    desc: "Covers ethical hacking, vulnerability assessments, penetration testing, and more.",
    icon: <Lock size={28} />,
  },
  {
    title: "Data Science",
    desc: "Covers data analysis, machine learning, data visualization, and more.",
    icon: <Database size={28} />,
  },
];

const curriculumAreas = [
  "Architecture and Engineering",
  "Cloud Computing",
  "Cyber Security",
  "Data Storage",
  "Databases/Database Management",
  "Mobile App Development",
  "Networking and Wireless",
  "Product Training (SaaS, Adobe, Microsoft, Citrix, Red Hat, etc.)",
  "Unified Communications",
  "Virtualization",
  "VoIP and Telephony",
  "Web Design and Programming",
];

const whyChoose = [
  {
    title: "Industry-Standard Training",
    desc: "Our courses are designed to meet industry standards and equip you with the latest skills and knowledge employers require.",
    icon: <ShieldCheck size={28} />,
  },
  {
    title: "Practical Experience",
    desc: "Our labs and projects provide hands-on experience and allow you to apply your skills in real-world scenarios.",
    icon: <Monitor size={28} />,
  },
  {
    title: "Certification Preparation",
    desc: "Our training programs are designed to help you earn the certifications you need to advance your career.",
    icon: <Award size={28} />,
  },
  {
    title: "Experienced Instructors",
    desc: "Our instructors are experienced professionals with years of industry experience, providing valuable insights and guidance.",
    icon: <Users size={28} />,
  },
  {
    title: "Flexible Learning Options",
    desc: "We offer flexible learning options to fit your schedule and learning preferences so that you can learn at your own pace and convenience.",
    icon: <Laptop size={28} />,
  },
];

const faqs = [
  {
    question: "What are the benefits of IT training services?",
    answer:
      "IT training services can help individuals and businesses acquire new skills and knowledge, stay up-to-date with the latest technologies and trends, and increase productivity and efficiency. Training can also boost confidence and job satisfaction and improve job prospects and career advancement opportunities.",
  },
  {
    question: "What types of IT training services are available?",
    answer:
      "Various IT training services are available, including classroom-based training, online courses, webinars, on-the-job training, certification programs, and customized training solutions. Some providers may also offer specialized training in specific areas, such as programming languages, cybersecurity, data analysis, cloud computing, and project management.",
  },
  {
    question: "How much do IT training services typically cost?",
    answer:
      "The cost of IT training services can vary depending on the type of training, the duration, the intensity of the program, the level of customization, the provider, and other factors. Classroom-based training and certification programs may be more expensive than online courses and webinars. Some providers may offer discounts or scholarships for certain groups, such as students, veterans, or unemployed individuals.",
  },
  {
    question: "What are the qualifications of IT trainers?",
    answer:
      "IT trainers should have a strong background in the specific technology or area of expertise they teach and effective communication and teaching skills. They may have degrees or certifications in computer science, information technology, or related fields and relevant work experience. Some trainers may also have teaching certifications or experience in adult education.",
  },
  {
    question: "How can I choose the right IT training service provider?",
    answer:
      "When choosing an IT training service provider, consider its reputation, experience, expertise, accreditation, course offerings, training methods, and cost. Look for reviews and recommendations from previous clients or industry experts. You may also want to consider the provider's customer service, support, flexibility, and responsiveness to your needs and goals.",
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

export default function ITTrainingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-training">
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
            <span className="active">IT Training Services</span>
          </nav>
          <h1 className="sv-hero-h1">IT Training Services</h1>
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
              <motion.h2 variants={fadeInUp} className="sv-display-h2">
                Empower Your IT Skills with Our Customized IT Training Services
              </motion.h2>

              <motion.p variants={fadeInUp} className="sv-hero-p">
                At Professional Labs we offer comprehensive IT Training Services
                to help individuals and businesses enhance their technical
                skills and achieve their professional goals. Our training
                programs are designed to provide hands-on experience and
                practical knowledge and prepare you for real-world scenarios.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="sv-hero-btn-wrap"
                style={{ gap: "16px", flexWrap: "wrap" }}
              >
                <Link href="/contact" className="sv-btn-primary">
                  🟢 Enroll for Top-Tier Learnings <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="sv-btn-outline">
                  📞 Speak to a Training Advisor
                </Link>
              </motion.div>

              {/* Trust Micro-Bar */}
              <motion.div variants={fadeInUp} className="sv-trust-bar">
                <span className="sv-trust-item">✔ Industry Certifications</span>
                <span className="sv-trust-item">
                  ✔ Hands-On Labs & Projects
                </span>
                <span className="sv-trust-item">
                  ✔ Flexible Learning Options
                </span>
                <span className="sv-trust-item">✔ Career Support Included</span>
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
                  src="/modern_workplace_hero_1772545930778.png"
                  alt="IT Training Dashboard"
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
          SECTION 2 — SEO Keywords Intro
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
              Professional Labs IT Training Services
            </h2>
            <p className="sv-hero-p max-w-4xl mx-auto text-center">
              Professional Labs IT Training Services for Delaware businesses.
              Cybersecurity and Cloud IT Courses in Delaware. Career Support and
              Certification IT Training in Delaware. Our comprehensive programs
              prepare you for industry certifications and real-world IT
              challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — Our Services
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-security">
        <div className="container">
          <div className="sv-section-header">
            <h2 className="sv-h2">Our Training Services</h2>
            <p className="sv-subtitle" style={{ marginTop: 15 }}>
              Comprehensive IT training solutions designed to elevate your
              skills, earn certifications, and advance your career.
            </p>
          </div>
          <div className="sv-security-grid">
            {services.map((item, idx) => (
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
          SECTION 4 — Career Support (Focus Box)
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
              <h3 className="sv-h3">Career Support</h3>
              <p className="sv-p">
                Our Career Services team provides extensive support to help
                students kickstart their careers in IT and Cybersecurity,
                regardless of their prior experience. To help students achieve
                their employment goals, we offer personalized guidance from a
                dedicated Employment Development Manager, who can help you
                identify and apply for job roles that align with your training.
              </p>
              <p className="sv-p mt-4">
                We also offer assistance in refining your resume, optimizing
                your LinkedIn profile, and conducting mock interviews to prepare
                you for the job search process. Through our Exclusive Learning
                Hubs Job Site, you can access a range of employment
                opportunities from our network of Employer Partners.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — Our Courses
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-info">
        <div className="container">
          <h2 className="sv-h2 text-center mb-12">Our Courses</h2>
          <div className="sv-tech-grid">
            {courses.map((course, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="sv-tech-card"
              >
                <div className="sv-tech-icon">{course.icon}</div>
                <div className="sv-tech-content">
                  <h3 className="sv-h4">{course.title}</h3>
                  <p className="sv-p">{course.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — Curriculum Areas (Dark Checklist)
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-analysis">
        <div className="container">
          <div className="sv-analysis-header">
            <h2 className="sv-h2" style={{ color: "#fff" }}>
              IT Courses Across Curriculum Areas
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
              IT courses can be found in various curriculum areas — explore our
              comprehensive catalog below.
            </p>
          </div>
          <div className="sv-pros-grid">
            {curriculumAreas.map((item, idx) => (
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
          SECTION 7 — Why Choose Us
      ═══════════════════════════════════════════════════════════ */}
      <section className="sv-section-prolabs">
        <div className="container">
          <div className="sv-prolabs-header mb-12 flex flex-col items-center">
            <h2 className="sv-h2 text-center mb-4 w-full">
              Why Choose Professional Labs for IT Training?
            </h2>
            <p className="sv-hero-p max-w-4xl mx-auto text-center">
              Industry-leading training programs designed to fast-track your IT
              career with certifications, hands-on experience, and expert
              guidance.
            </p>
          </div>
          <div className="sv-prolabs-main">
            <div className="sv-prolabs-text">
              <div className="sv-pro-features">
                {whyChoose.map((item, i) => (
                  <div key={i} className="sv-pro-f-card">
                    <div className="sv-pro-f-icon">{item.icon}</div>
                    <div className="sv-pro-f-body">
                      <strong>✔ {item.title}</strong> – {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
            <h2 className="sv-mid-cta-h2">Ready to Advance Your IT Career?</h2>
            <p className="sv-mid-cta-p">
              Enroll in Professional Labs IT Training and gain the
              certifications and hands-on skills employers demand.
            </p>
            <div className="sv-mid-cta-btns">
              <Link href="/contact" className="sv-btn-white">
                🟢 Enroll for Top-Tier Learnings <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="sv-btn-cta-outline">
                📞 Speak to a Training Advisor Today
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
            Frequently Asked Questions About IT Training Services
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
              Transform Your Career. Master IT Skills. Get Certified.
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "rgba(255,255,255,0.85)",
                marginBottom: 40,
              }}
            >
              Enroll in Professional Labs IT Training today and take the first
              step toward your IT career goals.
            </p>
            <div className="sv-mid-cta-btns">
              <Link href="/contact" className="sv-btn-white">
                🟢 Enroll Now <ArrowRight size={18} />
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
