"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Shield,
  Cloud,
  Lock,
  Activity,
  Eye,
  Globe,
  Zap,
  Target,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  CheckCircle2,
  Box,
  Layers,
  Search,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function CloudAppSecurityPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-mcas">
      <Header />

      {/* Hero Header Band */}
      <section className="sv-hero-band">
        <div className="container">
          <nav className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Services</span>
            <span className="sep">/</span>
            <span className="active">Microsoft Cloud App Security</span>
          </nav>
          <h1 className="sv-hero-h1">Microsoft Cloud App Security</h1>
        </div>
      </section>

      {/* Hero Content Section */}
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
                Securing User Behavior with Microsoft Cloud App Security
              </motion.h2>
              <motion.p variants={fadeInUp} className="sv-hero-lead">
                Microsoft Cloud App Security, now known as Microsoft Defender
                for Cloud Apps, is a Cloud Access Security Broker (CASB) that
                protects data, detects and combats cyber threats, and controls
                access in your security cloud app environment. It works nicely
                with popular services such as Amazon Web Services, G Suite,
                Google Cloud, and Dropbox.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="sv-hero-btn-wrap sv-center"
              >
                <Link href="/contact" className="sv-btn-primary">
                  Get a free 30-minute consultation with a Professional Labs
                  expert. <ArrowRight size={18} />
                </Link>
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
                  src="/illustrations/benefit-security.svg"
                  alt="Cloud App Security Illustration"
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

      {/* Partners/SASE Intro Section */}
      <section className="sv-section-info">
        <div className="container">
          <div className="sv-info-header text-center mb-16">
            <h2 className="sv-h2">Microsoft Cloud App Security</h2>
            <div className="flex justify-center">
              <p className="sv-lead mt-6 max-w-4xl mx-auto">
                You will need the best partners to handle new difficulties, such
                as establishing a secure access service edge (SASE)
                architecture.
              </p>
            </div>
          </div>
          <div className="sv-info-grid">
            <div className="sv-info-card">
              <p className="sv-p">
                Regarding cloud security, the network and partner behind the
                platform are equally as important as the platform itself. You
                need a leader in networking and security with the experience and
                foresight to help your organization as it grows and changes.
              </p>
            </div>
            <div className="sv-info-card">
              <p className="sv-p">
                Cloud computing promotes the flexibility of employees and IT
                teams. Yet, it poses additional security risks and difficulties
                for your firm. To reap the benefits of cloud applications and
                services, an IT team must establish the optimal balance between
                facilitating access and securing sensitive data.
              </p>
            </div>
            <div className="sv-info-card">
              <p className="sv-p">
                Here is where a Cloud App Security Broker comes into play to
                remedy the imbalance, securing your organization’s use of cloud
                services by enforcing your enterprise’s security standards. As
                the name suggests, CASBs is a gatekeepers to facilitate
                real-time access between your workplace users and the cloud
                resources they utilize, regardless of location or device.
              </p>
            </div>
            <div className="sv-info-card">
              <p className="sv-p">
                Professional Labs achieves this by uncovering and revealing
                Shadow IT and app use, monitoring user activities for anomalous
                behaviors, limiting access to your resources, enabling the
                classification and prevention of sensitive information leaks,
                safeguarding against malicious actors, and evaluating the
                compliance of cloud services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CASB Explanation Section */}
      <section className="sv-section-focus">
        <div className="container">
          <div className="sv-info-grid mb-12"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sv-focus-box"
          >
            <div className="sv-focus-icon">
              <ShieldCheck size={40} className="text-accent" />
            </div>
            <div className="sv-focus-text">
              <h3 className="sv-h3">The Microsoft Cloud App Security tool:</h3>
              <ul className="sv-check-list">
                <li>
                  <CheckCircle2 size={18} /> Allows you to see who has access to
                  what data and applications.
                </li>
                <li>
                  <CheckCircle2 size={18} /> keeps tabs on what people are up
                  to.
                </li>
                <li>
                  <CheckCircle2 size={18} /> Uses categories to keep private
                  data safe.
                </li>
                <li>
                  <CheckCircle2 size={18} /> Guarantees observance of the rules.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SASE Objectives Section */}
      <section className="sv-section-grid">
        <div className="container">
          <h2 className="sv-h3 text-center mb-16">
            Discover how to select a cloud security provider based on essential
            criteria, such as technical skills and business requirements, to
            accomplish the four objectives of a SASE architecture:
          </h2>
          <div className="sv-grid-layout">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="sv-grid-card"
            >
              <div className="sv-grid-icon">
                <Zap size={28} />
              </div>
              <h5>Streamlining</h5>
              <p>enhance productivity and integrate existing tools</p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="sv-grid-card"
            >
              <div className="sv-grid-icon">
                <ShieldCheck size={28} />
              </div>
              <h5>Security</h5>
              <p>identify and thwart the most dangerous threats of 2021</p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="sv-grid-card"
            >
              <div className="sv-grid-icon">
                <Target size={28} />
              </div>
              <h5>Scalability</h5>
              <p>
                enabling productivity and performance as your organization
                evolves.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="sv-grid-card"
            >
              <div className="sv-grid-icon">
                <Activity size={28} />
              </div>
              <h5>Support</h5>
              <p>Back up your long-term investments.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Comparison Section */}
      <section className="sv-section-benefits">
        <div className="container">
          <div className="sv-benefits-head text-center mb-12">
            <h2 className="sv-h2 mb-8">
              Does Microsoft Cloud App Security work well?
            </h2>
          </div>

          <div className="sv-benefits-grid">
            <div className="sv-benefit-card dark">
              <p className="sv-p">
                Microsoft Cloud App Security can be largely replicated by
                alternative software. Still, you must combine many solutions to
                provide the same cloud protection level.
              </p>
              <p className="sv-p mt-4">
                A solution comprising disparate security technologies may leave
                defenses vulnerable and not provide the same amount of control
                over policies or user actions.
              </p>
            </div>
            <div className="sv-benefit-card blue">
              <p className="sv-p">
                Microsoft Cloud App Security, on the other hand, integrates with
                other potent tools to protect your complete Microsoft Cloud Apps
                Security environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* World of Apps Section */}
      <section className="sv-section-info bg-white">
        <div className="container">
          <div className="sv-info-header text-center mb-12">
            <h2 className="sv-h2">
              Microsoft Cloud App Security: Working with a world of apps
            </h2>
          </div>
          <div className="flex justify-center">
            <p className="sv-subtitle text-center max-w-4xl">
              MCAS is designed to work with more than 16,000 apps, and when you
              use one or more of the apps on its list, MCAS analyses usage,
              access, and other essential information. It even searches proxy
              server records for these applications, providing a comprehensive
              insight into their activity.
            </p>
          </div>
          <div className="flex justify-center">
            <p className="sv-subtitle text-center max-w-4xl">
              Future-proof yourself. Discover security measures today.
            </p>
          </div>
        </div>
        <motion.div variants={fadeInUp} className="sv-hero-btn-wrap sv-center">
          <Link href="/contact" className="sv-btn-primary">
            Get a free 30-minute consultation with a Professional Labs expert.{" "}
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="sv-section-faq">
        <div className="container">
          <h2 className="sv-h2 text-center mb-[20px]">FAQ’s</h2>
          <div className="sv-faq-wrap">
            <div className={`sv-faq-item ${openFaq === 0 ? "sv-active" : ""}`}>
              <button className="sv-faq-q" onClick={() => setOpenFaq(0)}>
                <span className="sv-faq-qtext">
                  What is Microsoft Cloud App Security?
                </span>
                <span className="sv-faq-ico">
                  {openFaq === 0 ? <ChevronUp /> : <ChevronDown />}
                </span>
              </button>
              <AnimatePresence>
                {openFaq === 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="sv-faq-a"
                  >
                    <div className="sv-faq-ainner">
                      Microsoft Cloud App Security, now known as Microsoft
                      Defender for Cloud Apps, is a Cloud Access Security Broker
                      (CASB) that protects data, detects and combats cyber
                      threats, and controls access in your security cloud app
                      environment. It works nicely with popular services such as
                      Amazon Web Services, G Suite, Google Cloud, and Dropbox.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className={`sv-faq-item ${openFaq === 1 ? "sv-active" : ""}`}>
              <button className="sv-faq-q" onClick={() => setOpenFaq(1)}>
                <span className="sv-faq-qtext">Are Microsoft apps secure?</span>
                <span className="sv-faq-ico">
                  {openFaq === 1 ? <ChevronUp /> : <ChevronDown />}
                </span>
              </button>
              <AnimatePresence>
                {openFaq === 1 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="sv-faq-a"
                  >
                    <div className="sv-faq-ainner">
                      Regarding cloud security, the network and partner behind
                      the platform are equally as important as the platform
                      itself. You need a leader in networking and security with
                      the experience and foresight to help your organization as
                      it grows and changes.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className={`sv-faq-item ${openFaq === 2 ? "sv-active" : ""}`}>
              <button className="sv-faq-q" onClick={() => setOpenFaq(2)}>
                <span className="sv-faq-qtext">
                  How do I set up Microsoft Cloud App Security?
                </span>
                <span className="sv-faq-ico">
                  {openFaq === 2 ? <ChevronUp /> : <ChevronDown />}
                </span>
              </button>
              <AnimatePresence>
                {openFaq === 2 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="sv-faq-a"
                  >
                    <div className="sv-faq-ainner">
                      Go to Settings, then pick Files under Information
                      Protection. Choose Enable file monitoring, followed by
                      Save. Under Information Protection, select Microsoft
                      Information Protection if you utilize sensitivity labels
                      from Microsoft Purview Information Protection. Choose the
                      necessary parameters, then click Save.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className={`sv-faq-item ${openFaq === 3 ? "sv-active" : ""}`}>
              <button className="sv-faq-q" onClick={() => setOpenFaq(3)}>
                <span className="sv-faq-qtext">
                  What is the difference between Defender for cloud and cloud
                  app security?
                </span>
                <span className="sv-faq-ico">
                  {openFaq === 3 ? <ChevronUp /> : <ChevronDown />}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
