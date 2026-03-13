"use client";

import {
  Shield,
  Activity,
  Lock,
  UserCheck,
  Search,
  Zap,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Target,
  Users,
  Eye,
  Layout,
  Globe,
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

export default function DefenderIdentityPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="sv-page sv-identity">
      {/* Hero Header Band */}
      <section className="sv-hero-band">
        <div className="container">
          <nav className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Services</span>
            <span className="sep">/</span>
            <span className="active">Microsoft Defender for Identity</span>
          </nav>
          <h1 className="sv-hero-h1">Microsoft Defender for Identity</h1>
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
                Evaluate and Track User Activity and Behaviour
              </motion.h2>
              <motion.p variants={fadeInUp} className="sv-hero-lead">
                The cloud-based security solution Microsoft Defender for
                Identity (formerly known as Azure ATP) uses signals from your
                on-premises Active Directory to detect and investigate advanced
                threats, compromised identities, and harmful insider acts.
              </motion.p>
              <motion.div variants={fadeInUp} className="sv-hero-btn-wrap">
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
                  src="/defender_identity_hero.png"
                  alt="Defender for Identity Dashboard"
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

      {/* Intro Section */}
      <section className="sv-section-info">
        <div className="container">
          <div className="flex justify-center">
            <div className="sv-info-header text-center mb-16">
              <p className="sv-lead max-w-4xl mx-auto">
                Professional Labs analysts and security professionals having
                trouble detecting advanced attacks in hybrid environments might
                use Microsoft Defender for Identity.
              </p>
            </div>
          </div>
          <div className="sv-info-grid">
            <div className="sv-info-card">
              <ul className="sv-check-list mt-2">
                <li>
                  <CheckCircle2 size={18} /> Learning-based analytics can be
                  used to keep tabs on user and entity activity and behavior.
                </li>
                <li>
                  <CheckCircle2 size={18} /> Safeguard Active Directory login
                  information
                </li>
              </ul>
            </div>
            <div className="sv-info-card">
              <ul className="sv-check-list mt-2">
                <li>
                  <CheckCircle2 size={18} /> Locate and probe malicious user
                  behavior and sophisticated attacks across the kill chain.
                </li>
                <li>
                  <CheckCircle2 size={18} /> Provide concise details about the
                  occurrence on a straightforward chronology to facilitate quick
                  triage.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cyber Threat Phases Section */}
      <section className="sv-section-focus">
        <div className="container">
          <h2 className="sv-h2 text-center mb-12">
            What Does Microsoft Defender for Identity Do?
          </h2>
          <div className="flex justify-center">
            <p className="sv-p text-center mb-16 max-w-3xl mx-auto">
              Microsoft’s Defender for Identity technology monitors cyber
              threats across several attack phases.
            </p>
          </div>

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
              <h5>Reconnaissance</h5>
              <p>
                while the attackers learn the structure of the environment, the
                assets there, and the types of entities that exist. They are,
                more broadly speaking, preparing for the later stages of the
                attack.
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
                <ShieldCheck size={28} />
              </div>
              <h5>Lateral movement cycle</h5>
              <p>
                when a hacker spends significant time and energy increasing
                their potential points of entry into your network.
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
                <Lock size={28} />
              </div>
              <h5>Domain dominance (persistence)</h5>
              <p>
                when an attacker obtains the data they need to continue their
                campaign using previously compromised accounts, credentials, and
                other methods.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="sv-section-info bg-white">
        <div className="container">
          <div className="sv-info-header text-center mb-16">
            <div className="flex justify-center">
              <p className="sv-lead mt-6 max-w-4xl mx-auto">
                Whether your infrastructure is on-premises, in the cloud, or
                combined, Microsoft Defender for Identity can help you identify
                and analyze sophisticated assaults and insider threats to keep
                malicious actors out.
              </p>
            </div>
          </div>
          <div className="sv-info-grid">
            <div className="sv-info-card">
              <p className="sv-p">
                Defender for Identity may establish a behavioral baseline for
                each user using your network’s permissions and group membership
                data. The adaptive built-in intelligence of Defender for
                Identity then recognizes anomalies, providing you with a window
                into potentially malicious activities and events that expose the
                advanced attacks, compromised users, and insider threats
                plaguing your business.
              </p>
            </div>
            <div className="sv-info-card sv-dark-card">
              <p className="sv-p">
                Defender for Identity’s patented sensors keeps tabs on
                enterprise domain controllers, revealing every action taken by
                every user on any device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Endpoint Protections Section */}
      <section className="sv-section-benefits">
        <div className="container">
          <div className="sv-benefits-head text-center mb-16">
            <h2 className="sv-h2 mb-4">Defender for Endpoint protections</h2>
            <div className="flex justify-center">
              <p className="sv-subtitle max-w-4xl">
                Using a three-pronged approach (recon, lateral movement cycle,
                and persistence), Defender for Identity scans network traffic
                for signs of account attacks and other suspicious behavior.
                Defenders for Endpoint can detect sophisticated cyber attacks by
                comparing warnings for known and unknown adversaries.
              </p>
            </div>
          </div>
          <div className="sv-info-card">
            <p className="sv-p text-center">
              Domain controller traffic is monitored by Defender for Identity,
              while Defender inspects endpoint devices for Endpoint. Combining
              the two solutions into a single interface for monitoring warnings
              is possible by configuring them in the Microsoft Defender for
              Identity portal.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Content Section */}
      <section className="sv-section-info">
        <div className="container">
          <h2 className="sv-h2 text-center mb-16">
            Microsoft Defender for Identity from Professional Labs offers the
            following benefits:
          </h2>
          <div className="sv-grid-layout">
            <div className="sv-info-card">
              <p className="sv-p">
                Pass-the-Ticket and Pass-the-Hash attacks, DNS reconnaissance,
                odd protocols, malicious service creation, and other forms of
                network intrusion are all things that Microsoft Defender for
                Identity can help you detect and investigate.
              </p>
            </div>
            <div className="sv-info-card">
              <p className="sv-p">
                With Microsoft Defender for Identity, your business is
                safeguarded from common and uncommon attack methods.
              </p>
            </div>
            <div className="sv-info-card">
              <p className="sv-p">
                With Microsoft Defender for Identity, sophisticated assaults and
                insider threats are uncovered before they can harm your
                business. This is accomplished by focusing on multiple stages of
                the cyber-attack kill chain, such as reconnaissance, the lateral
                movement cycle, and domain dominance.
              </p>
            </div>
            <div className="sv-info-card">
              <p className="sv-p">
                Microsoft Defender for Identity enables the use of dummy
                accounts designed to monitor and record suspicious network
                activities.
              </p>
            </div>
          </div>
          <div className="pt-20 flex justify-start">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="sv-bottom-cta-wrap"
            >
              <Link href="/contact" className="sv-btn-primary">
                Get a free 30-minute consultation with a Professional Labs
                expert. <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="sv-section-faq">
        <div className="container">
          <div className="mb-28 text-center">
            <h2 className="sv-h2">FAQ’s</h2>
          </div>
          <div className="sv-faq-wrap">
            <div className={`sv-faq-item ${openFaq === 0 ? "sv-active" : ""}`}>
              <button className="sv-faq-q" onClick={() => setOpenFaq(0)}>
                <span className="sv-faq-qtext">
                  What is Microsoft Defender for Identity?
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
                      Microsoft Defender for Identity (previously known as Azure
                      Advanced Threat Protection or Azure ATP) is a cloud-based
                      security solution that uses your on-premises Active
                      Directory signals to identify, detect, and investigate
                      advanced threats, compromised identities, and malicious
                      insider actions directed at your organization.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className={`sv-faq-item ${openFaq === 1 ? "sv-active" : ""}`}>
              <button
                className="sv-faq-q"
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
              >
                <span className="sv-faq-qtext">
                  How do I turn on Microsoft Defender for identity?
                </span>
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
                      To access the Defender for Cloud Applications settings,
                      click the settings button.
                      <br />
                      Choose Microsoft Defender for Identity from the drop-down
                      menu labeled Threat Protection.
                      <br />
                      Click the Save button after enabling Microsoft Defender to
                      share identity info.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className={`sv-faq-item ${openFaq === 2 ? "sv-active" : ""}`}>
              <button
                className="sv-faq-q"
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
              >
                <span className="sv-faq-qtext">
                  What is the benefit of a Defender of identity?
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
                      With Defender for Identity, you’ll only get the most
                      critical security alerts in a straightforward, real-time
                      attack timeline. Defender for Identity’s attack timeline
                      view makes it simple to zero in on what’s important by
                      employing the power of sophisticated analytics.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className={`sv-faq-item ${openFaq === 3 ? "sv-active" : ""}`}>
              <button
                className="sv-faq-q"
                onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
              >
                <span className="sv-faq-qtext">
                  What is the difference between the Defender of identity and
                  identity protection?
                </span>
                <span className="sv-faq-ico">
                  {openFaq === 3 ? <ChevronUp /> : <ChevronDown />}
                </span>
              </button>
              <AnimatePresence>
                {openFaq === 3 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="sv-faq-a"
                  >
                    <div className="sv-faq-ainner">
                      Integration with other Microsoft XDR products, such as
                      Microsoft 365 Defender and Cloud App Security, is
                      supported by Defender for Identity. However, Azure Active
                      Directory Identity Protection exists only in the Azure
                      cloud and is dedicated to protecting Azure Active
                      Directory deployments from external threats.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
