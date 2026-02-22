"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    Shield, Server, Lock, Activity, Layout, Database,
    Cloud, Key, Search, ShieldCheck, Globe, RefreshCcw,
    UserCheck, ChevronDown, ChevronUp, ArrowRight, CheckCircle2,
    HelpCircle
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const azureServices = [
    {
        category: "General Security",
        items: [
            {
                title: "Security Center",
                desc: "A workload protection solution that provides security management and advanced threat protection across the hybrid cloud.",
                icon: <Shield size={24} />
            },
            {
                title: "Key Vault",
                desc: "A service that secures sensitive details such as passwords, connection strings, and other information needed to keep apps working.",
                icon: <Key size={24} />
            },
            {
                title: "Monitor logs",
                desc: "A service that collects telemetry and other data and provides a query language and analytics engine to deliver operational insights.",
                icon: <Activity size={24} />
            },
            {
                title: "Dev/Test Labs",
                desc: "A service that helps testers and developers instantly create Azure environments while minimizing waste and controlling.",
                icon: <Layout size={24} />
            }
        ]
    },
    {
        category: "Operations Security",
        items: [
            {
                title: "Security and Audit solution",
                desc: "A service that provides a complete view of an organization’s IT security posture.",
                icon: <Search size={24} />
            },
            {
                title: "Resource Manager",
                desc: "A service that enables working with resources in the organization’s solution as a group. Deploy, update, or delete all resources together.",
                icon: <Server size={24} />
            }
        ]
    },
    {
        category: "Applications Security",
        items: [
            {
                title: "Web Application vulnerability scanning",
                desc: "A service that provides one-click vulnerability scanning for your web applications.",
                icon: <ShieldCheck size={24} />
            },
            {
                title: "Web Application Firewall",
                desc: "The WAF in Azure Application Gateway aims to secure web apps from rising web-based threats such as SQL injection.",
                icon: <Lock size={24} />
            },
            {
                title: "Application Insights",
                desc: "An extendable Application Performance Management (APM) program for web developers.",
                icon: <Activity size={24} />
            }
        ]
    },
    {
        category: "Storage Security",
        items: [
            {
                title: "Role-Based Access Control (RBAC)",
                desc: "Mechanism for restricting access based on the need-to-know and least-privilege principles.",
                icon: <UserCheck size={24} />
            },
            {
                title: "Encryption",
                desc: "A mechanism for protecting data transmitted across networks and at rest in storage.",
                icon: <Lock size={24} />
            }
        ]
    },
    {
        category: "Network Security",
        items: [
            {
                title: "Virtual Network",
                desc: "Representing a client’s cloud network. It is a logical isolation of its network fabric dedicated to your subscription.",
                icon: <Globe size={24} />
            },
            {
                title: "VPN Gateway",
                desc: "A virtual network gateway sending encrypted traffic to a public connection.",
                icon: <Shield size={24} />
            },
            {
                title: "Network Layer Controls",
                desc: "The act of controlling connectivity to and from individual devices or subnetworks.",
                icon: <Layout size={24} />
            }
        ]
    },
    {
        category: "Backup and Disaster Recovery",
        items: [
            {
                title: "Site Recovery",
                desc: "A service that helps to orchestrate Backup, failover, and recovery of workloads and applications.",
                icon: <RefreshCcw size={24} />
            },
            {
                title: "Virtual machine backup",
                desc: "A service that protects application data with minimal operating costs and zero capital investment.",
                icon: <Database size={24} />
            }
        ]
    },
    {
        category: "Identity and Access Management",
        items: [
            {
                title: "Active Directory",
                desc: "An authentication repository that supports multi-tenant, cloud-based directory and multi-identity management services.",
                icon: <UserCheck size={24} />
            },
            {
                title: "Multi-Factor Authentication",
                desc: "A security provision that utilizes several authentications and verification methods before accessing protected information.",
                icon: <ShieldCheck size={24} />
            }
        ]
    }
];

const faqs = [
    {
        question: "What is Azure Security Service?",
        answer: "Azure Security Service is a suite of security features provided by Microsoft Azure to safeguard data and applications hosted on the cloud. It includes Azure Security Center, Azure Key Vault, and Azure Active Directory."
    },
    {
        question: "How does Azure Security Service help protect against cyber threats?",
        answer: "Azure Security Service offers features such as threat detection, prevention, and response to protect against cyber threats. It also includes continuous monitoring of network traffic and analysis of security logs to identify potential risks."
    },
    {
        question: "How does Azure Security Service help with compliance?",
        answer: "Azure Security Service includes compliance certifications such as HIPAA, PCI, and ISO, which help customers meet their regulatory requirements. It also offers compliance management and reporting features for auditing purposes."
    },
    {
        question: "How can Azure Security Service benefit businesses?",
        answer: "Azure Security Service can benefit businesses by providing a secure and reliable platform for their applications and data, minimizing the risk of cyber-attacks and data breaches. It can also improve operational efficiency by automating security processes and reducing the need for manual intervention."
    },
    {
        question: "Is Azure Security Service suitable for small businesses?",
        answer: "Yes, Azure Security Service can be suitable for small businesses. Azure Security Service offers a range of security tools and services that can help small businesses improve their security posture without incurring high costs."
    }
];

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
};

export default function AzureSecurityPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <main className="az-page-root">
            <Header />

            {/* Hero Header Band */}
            <section className="az-hero-band">
                <div className="container">
                    <nav className="az-breadcrumb">
                        <Link href="/">Home</Link>
                        <span className="sep">/</span>
                        <span>Pages</span>
                        <span className="sep">/</span>
                        <span className="active">Azure Cloud Managed Security Services</span>
                    </nav>
                    <h1 className="az-hero-h1">Azure Security Service</h1>
                </div>
            </section>

            {/* Hero Content Section */}
            <section className="az-hero-main">
                <div className="container">
                    <div className="az-hero-flex">
                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="az-hero-content"
                        >
                            <motion.h2 variants={fadeInUp} className="az-display-h2">
                                Safeguard your data and applications with Azure's reliable security services.
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="az-hero-p">
                                Azure is a cloud platform that supports various operating systems, languages, resources, and devices. As more businesses move to the cloud, security is crucial.
                            </motion.p>
                            <motion.div variants={fadeInUp} className="az-hero-btn-wrap">
                                <Link href="/contact" className="az-btn-primary">
                                    Get a free 30-minute consultation <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                            <motion.div variants={fadeInUp} className="az-meta-tags">
                                <span className="az-tag">Delaware Azure Managed Security</span>
                                <span className="az-tag">Compliance Services</span>
                                <span className="az-tag">Professional Labs Solutions</span>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="az-hero-image"
                        >
                            <div className="az-img-frame">
                                <Image
                                    src="/illustrations/benefit-security.svg"
                                    alt="Azure Security Illustration"
                                    width={500}
                                    height={400}
                                    className="az-float-img"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Importance Section */}
            <section className="az-section-info">
                <div className="container">
                    <div className="az-info-columns">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="az-info-card"
                        >
                            <h3 className="az-h3">The Importance of Azure Cloud Security</h3>
                            <p className="az-p">
                                Azure Cloud Security is essential for businesses because it provides a secure environment for storing and processing sensitive data and applications in the cloud. As more businesses move their operations to the cloud, the risk of cyber threats and attacks increases.
                            </p>
                            <p className="az-p mt-4">
                                By leveraging Azure Security Services, businesses can ensure that their operations are protected against potential security breaches, data loss, and unauthorized access, safeguarding their reputation and customer trust.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="az-info-card az-dark-card"
                        >
                            <h3 className="az-h3">Enhancing Cloud Security</h3>
                            <p className="az-p">
                                Azure security tools are crucial for businesses because they provide comprehensive features to secure data and applications. These tools protect businesses against potential cyber threats and malware attacks.
                            </p>
                            <ul className="az-list mt-6">
                                <li><CheckCircle2 size={18} /> Azure Security Center</li>
                                <li><CheckCircle2 size={18} /> Azure Active Directory</li>
                                <li><CheckCircle2 size={18} /> Azure Key Vault</li>
                                <li><CheckCircle2 size={18} /> Azure Information Protection</li>
                                <li><CheckCircle2 size={18} /> Azure Firewall</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Identity Protection Feature */}
            <section className="az-section-focus">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="az-focus-box"
                    >
                        <div className="az-focus-icon">
                            <Shield size={40} className="text-azure" />
                        </div>
                        <div className="az-focus-text">
                            <h3 className="az-h3">Azure AD Identity Protection</h3>
                            <p className="az-p">
                                A feature that helps businesses safeguard their identities and detect potential identity-based risks in real time. It leverages machine learning algorithms to analyze user behaviors and detect anomalous patterns that may indicate suspicious activity. This enables businesses to mitigate potential risks and prevent security breaches proactively.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Categories */}
            <section className="az-section-catalog">
                <div className="container">
                    <div className="az-catalog-head">
                        <h2 className="az-h2">Top Azure Managed Security Services</h2>
                        <p className="az-subtitle">Comprehensive security solutions categorized by your infrastructure needs</p>
                    </div>

                    <div className="az-cat-list">
                        {azureServices.map((cat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="az-cat-group"
                            >
                                <div className="az-cat-top">
                                    <span className="az-cat-idx">0{idx + 1}</span>
                                    <h4 className="az-cat-name">{cat.category}</h4>
                                </div>
                                <div className="az-grid-services">
                                    {cat.items.map((item, i) => (
                                        <div key={i} className="az-scard">
                                            <div className="az-scard-icon">{item.icon}</div>
                                            <div className="az-scard-body">
                                                <h5>{item.title}</h5>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="az-section-faq">
                <div className="container">
                    <h2 className="az-h2 text-center mb-16">Frequently Asked Questions</h2>
                    <div className="az-faq-wrap">
                        {faqs.map((faq, index) => (
                            <div key={index} className={`az-faq-item ${openFaq === index ? "az-active" : ""}`}>
                                <button
                                    className="az-faq-q"
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                >
                                    <span className="az-faq-qtext">{faq.question}</span>
                                    <span className="az-faq-ico">
                                        {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </span>
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="az-faq-a"
                                        >
                                            <div className="az-faq-ainner">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="az-section-cta">
                <div className="container">
                    <div className="az-cta-banner">
                        <h2 className="az-h2 text-white">Ready to secure your Azure infrastructure?</h2>
                        <p className="text-white opacity-80 mt-4 mb-10 text-lg">
                            Get a free 30-minute consultation with a Professional Labs security expert today.
                        </p>
                        <Link href="/contact" className="az-btn-white">
                            Claim Your Free Consultation <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx global>{`
        .az-page-root {
          --azure: #0078d4;
          --az-ink: #002b4d;
          --az-text: #323130;
          --az-gray: #605e5c;
          --az-bg: #f3f2f1;
          background: #fff;
          color: var(--az-text);
          font-family: inherit;
        }

        .az-hero-band {
          background: linear-gradient(135deg, #001a33 0%, #004d99 100%);
          padding: 140px 0 60px;
          color: white;
        }

        .az-breadcrumb {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 25px;
        }

        .az-breadcrumb .sep { opacity: 0.3; }
        .az-breadcrumb .active { color: white; font-weight: 600; }
        .az-breadcrumb a:hover { color: var(--azure); }

        .az-hero-h1 {
          font-size: clamp(2.5rem, 6vw, 4.2rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .az-hero-main {
          padding: 100px 0;
          background: #fff;
        }

        .az-hero-flex {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 70px;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .az-hero-flex { grid-template-columns: 1fr; gap: 50px; text-align: center; }
          .az-hero-btn-wrap { display: flex; justify-content: center; }
          .az-meta-tags { justify-content: center; }
        }

        .az-display-h2 {
          font-size: clamp(2rem, 4.5vw, 3.4rem);
          font-weight: 800;
          color: var(--az-ink);
          line-height: 1.1;
          margin-bottom: 28px;
          letter-spacing: -0.03em;
        }

        .az-hero-p {
          font-size: 1.25rem;
          color: var(--az-gray);
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .az-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: var(--azure);
          color: white;
          padding: 20px 45px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1.1rem;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(0, 120, 212, 0.25);
          transition: all 0.3s;
        }

        .az-btn-primary:hover {
          transform: translateY(-4px);
          background: #005a9e;
          box-shadow: 0 15px 40px rgba(0, 120, 212, 0.35);
        }

        .az-meta-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 50px;
        }

        .az-tag {
          background: var(--az-bg);
          padding: 8px 18px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--az-gray);
        }

        .az-float-img {
          animation: azFloat 6s ease-in-out infinite;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.08));
        }

        @keyframes azFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        /* Info Section */
        .az-section-info { padding: 100px 0; background: var(--az-bg); }
        .az-info-columns { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
        
        @media (max-width: 900px) { .az-info-columns { grid-template-columns: 1fr; } }

        .az-info-card {
          background: #fff;
          padding: 50px;
          border-radius: 28px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.03);
          border: 1px solid #e1dfdd;
        }

        .az-dark-card {
          background: var(--az-ink);
          color: white;
          border: none;
        }

        .az-h3 { font-size: 1.8rem; font-weight: 800; color: inherit; margin-bottom: 25px; }
        .az-dark-card .az-h3 { color: #fff; }

        .az-p { line-height: 1.7; font-size: 1.05rem; }

        .az-list { list-style: none; padding: 0; display: grid; gap: 14px; }
        .az-list li { display: flex; align-items: center; gap: 12px; font-weight: 700; }
        .az-list li svg { color: var(--azure); }

        /* Focus Section */
        .az-section-focus { padding: 80px 0; }
        .az-focus-box {
          background: #fff;
          border: 1px solid #e1dfdd;
          border-radius: 32px;
          padding: 60px;
          display: flex;
          gap: 45px;
          align-items: center;
          max-width: 1000px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .az-focus-box { flex-direction: column; text-align: center; padding: 40px; gap: 30px; }
        }

        .az-focus-icon {
          width: 80px; height: 80px; background: #e0f2fe; border-radius: 20px;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .text-azure { color: var(--azure); }

        /* Catalog Section */
        .az-section-catalog { padding: 120px 0; background: #fff; }
        .az-catalog-head { text-align: center; margin-bottom: 80px; }
        .az-h2 { font-size: clamp(2rem, 3.5vw, 2.7rem); font-weight: 800; color: var(--az-ink); letter-spacing: -0.02em; }
        .az-subtitle { font-size: 1.2rem; color: var(--az-gray); margin-top: 15px; }

        .az-cat-list { display: grid; gap: 80px; }
        .az-cat-top {
          display: flex; align-items: center; gap: 20px; margin-bottom: 40px;
          border-bottom: 2px solid var(--az-bg); padding-bottom: 15px;
        }
        .az-cat-idx { font-size: 1.6rem; font-weight: 800; color: var(--azure); opacity: 0.4; }
        .az-cat-name { font-size: 1.8rem; font-weight: 800; color: var(--az-ink); margin: 0; }

        .az-grid-services {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 30px;
        }

        .az-scard {
          display: flex; gap: 24px; padding: 35px; border-radius: 24px;
          background: var(--az-bg); transition: all 0.3s;
        }
        .az-scard:hover {
          background: #fff; transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
          border: 1px solid #e1dfdd;
        }
        .az-scard-icon {
          width: 50px; height: 50px; background: #fff; color: var(--azure);
          border-radius: 12px; display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }
        .az-scard-body h5 { font-size: 1.2rem; font-weight: 800; margin: 0 0 12px 0; color: var(--az-ink); }
        .az-scard-body p { font-size: 0.95rem; color: var(--az-gray); line-height: 1.6; margin: 0; }

        /* FAQ */
        .az-section-faq { padding: 120px 0; background: var(--az-bg); }
        .az-faq-wrap { max-width: 900px; margin: 0 auto; }
        .az-faq-item { background: #fff; border-radius: 20px; margin-bottom: 16px; transition: all 0.3s; overflow: hidden; }
        .az-faq-item.az-active { box-shadow: 0 20px 40px rgba(0,0,0,0.05); }
        .az-faq-q { 
          width: 100%; display: flex; justify-content: space-between; align-items: center; 
          padding: 30px 40px; border: none; background: none; cursor: pointer; text-align: left;
        }
        .az-faq-qtext { font-size: 1.25rem; font-weight: 700; color: var(--az-ink); }
        .az-faq-ico { color: var(--azure); }
        .az-faq-a { padding: 0 40px 35px; color: var(--az-gray); font-size: 1.1rem; line-height: 1.8; }
        .az-faq-ainner { border-top: 1px solid var(--az-bg); padding-top: 20px; }

        /* CTA */
        .az-section-cta { padding: 120px 0; background: #fff; }
        .az-cta-banner {
          background: linear-gradient(135deg, var(--azure) 0%, var(--az-ink) 100%);
          padding: 80px 40px; border-radius: 40px; text-align: center;
          box-shadow: 0 30px 60px rgba(0, 77, 153, 0.2);
        }
        .az-btn-white {
          display: inline-flex; align-items: center; gap: 12px;
          background: #fff; color: var(--azure); padding: 22px 60px;
          border-radius: 100px; font-weight: 800; font-size: 1.2rem;
          text-decoration: none; transition: all 0.3s;
        }
        .az-btn-white:hover { transform: scale(1.05); box-shadow: 0 10px 30px rgba(255,255,255,0.2); }

        @media (max-width: 768px) {
          .az-hero-h1 { font-size: 2.8rem; }
          .az-display-h2 { font-size: 1.8rem; }
          .az-cat-name { font-size: 1.5rem; }
          .az-scard { padding: 25px; }
          .az-faq-q { padding: 25px; }
          .az-faq-qtext { font-size: 1.1rem; }
        }
      `}</style>
        </main>
    );
}
