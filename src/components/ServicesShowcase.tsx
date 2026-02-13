"use client";

import { useState } from "react";
import {
  ShieldCheck,
  Cloud,
  Mail,
  Lock,
  Shield,
  Monitor,
  Headphones,
  Network,
  Briefcase,
  ArrowRight,
} from "lucide-react";

interface Service {
  id: string;
  name: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    id: "soc",
    name: "Managed SOC",
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
    title: "Managed SOC Service",
    description:
      "Keep your Security Operations Strong and Scalable. Our 24/7 SOC monitors your environment, detects threats in real-time, and responds to incidents before they impact your business.",
    features: [
      "Round-the-clock threat monitoring",
      "Automated incident response workflows",
      "Advanced threat intelligence integration",
    ],
  },
  {
    id: "cloud",
    name: "Cloud Services",
    icon: <Cloud size={28} strokeWidth={1.5} />,
    title: "Cloud Managed Services",
    description:
      "Streamline cloud operations with managed services. We help you migrate, optimize, and manage your cloud infrastructure for maximum efficiency and cost savings.",
    features: [
      "Cloud migration and optimization",
      "Multi-cloud environment management",
      "Cost monitoring and optimization",
    ],
  },
  {
    id: "email",
    name: "Email Security",
    icon: <Mail size={28} strokeWidth={1.5} />,
    title: "Email Security",
    description:
      "Beware of phishing. Protect Email Data. Professional Labs Email Security protects your inbox from advanced threats, phishing attacks, and data breaches.",
    features: [
      "Advanced phishing detection",
      "Email encryption and DLP",
      "Real-time threat intelligence",
    ],
  },
  {
    id: "cloudapp",
    name: "Cloud App Security",
    icon: <Lock size={28} strokeWidth={1.5} />,
    title: "Microsoft Cloud App Security",
    description:
      "Securing User Behavior with Microsoft Cloud App Security. Gain visibility into cloud app usage, detect shadow IT, and enforce data protection policies.",
    features: [
      "Shadow IT discovery",
      "User behavior analytics",
      "Data loss prevention policies",
    ],
  },
  {
    id: "azure",
    name: "Azure Security",
    icon: <Shield size={28} strokeWidth={1.5} />,
    title: "Azure Security Service",
    description:
      "Safeguard your data and applications with Azure's reliable security services. Comprehensive protection for your cloud workloads and hybrid environments.",
    features: [
      "Azure Security Center management",
      "Network security group configuration",
      "Compliance and governance automation",
    ],
  },
  {
    id: "avd",
    name: "Azure Virtual Desktop",
    icon: <Monitor size={28} strokeWidth={1.5} />,
    title: "Azure Virtual Desktop",
    description:
      "Virtually access a secure remote desktop from anywhere. Deploy and scale Windows desktops and apps on Azure with built-in security.",
    features: [
      "Multi-session Windows 11 experience",
      "Secure remote access from any device",
      "Cost-effective virtual desktop infrastructure",
    ],
  },
  {
    id: "helpdesk",
    name: "IT Help Desk",
    icon: <Headphones size={28} strokeWidth={1.5} />,
    title: "IT Help Desk Service",
    description:
      "Our IT Help Desk Services will manage your IT infrastructure and software. Get 24/7 support, rapid resolution, and proactive monitoring.",
    features: [
      "24/7 multi-channel support",
      "SLA-driven resolution tracking",
      "Proactive system monitoring",
    ],
  },
  {
    id: "network",
    name: "Network & Security",
    icon: <Network size={28} strokeWidth={1.5} />,
    title: "Network and Security Services",
    description:
      "Network and Security Services from Professional Labs. Design, deploy, and manage robust network infrastructure with enterprise-grade security.",
    features: [
      "Network design and implementation",
      "Firewall and intrusion prevention",
      "Network performance monitoring",
    ],
  },
  {
    id: "workplace",
    name: "Modern Workplace",
    icon: <Briefcase size={28} strokeWidth={1.5} />,
    title: "Modern Workplace",
    description:
      "Redefine work with an employee-first approach. Transform your workplace with Microsoft 365, collaboration tools, and productivity solutions.",
    features: [
      "Microsoft 365 deployment and management",
      "Collaboration and productivity tools",
      "Employee experience optimization",
    ],
  },
];

export default function ServicesShowcase() {
  const [activeTab, setActiveTab] = useState("soc");
  const activeService = services.find((s) => s.id === activeTab) || services[0];

  return (
    <section id="services" className="services-showcase">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Our Core Services</p>
          <h2 className="section-title">Unified IT Operations Platform</h2>
          <p className="section-subtitle">
            Comprehensive, scalable IT services designed to empower growing
            businesses
          </p>
        </div>

        {/* Tabs */}
        <div className="tabs-container">
          <div className="tabs-nav">
            {services.map((service) => (
              <button
                key={service.id}
                className={`tab-button ${activeTab === service.id ? "active" : ""}`}
                onClick={() => setActiveTab(service.id)}
              >
                <span className="tab-icon">{service.icon}</span>
                <span className="tab-name">{service.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="tab-content">
          <div className="content-grid">
            <div className="content-left">
              <h3 className="service-title">{activeService.title}</h3>
              <p className="service-description">{activeService.description}</p>

              <div className="features-list">
                {activeService.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-icon">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M13.5 4L6 11.5L2.5 8"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>

              <a href="#" className="learn-more-link">
                More about {activeService.name} <ArrowRight size={16} />
              </a>
            </div>

            <div className="content-right">
              {/* Service Visual Card */}
              <div className="service-visual">
                <div className="visual-icon">{activeService.icon}</div>
                <div className="visual-details">
                  <h4>{activeService.title}</h4>
                  <div className="visual-metrics">
                    <div className="metric">
                      <span className="metric-value">99.9%</span>
                      <span className="metric-label">Uptime</span>
                    </div>
                    <div className="metric">
                      <span className="metric-value">24/7</span>
                      <span className="metric-label">Support</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="testimonial-card">
                <div className="quote-icon">❝</div>
                <p className="testimonial-quote">
                  Professional Labs help manage our Email and Domain
                  Environment; they haven&apos;t failed us once.
                </p>
                <div className="testimonial-author">
                  <div className="author-name">ADV. HUSSAIN NALWALA</div>
                  <div className="author-position">Founder, CNS Juris</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <a href="#contact" className="cta-button">
            Explore All Services
          </a>
        </div>
      </div>

      <style jsx>{`
        .services-showcase {
          background: #ffffff;
          padding: 80px 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .eyebrow {
          color: #22a7e0;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.75rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .section-title {
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 700;
          color: #123847;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }

        .section-subtitle {
          color: #4b6674;
          font-size: 1rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .tabs-container {
          margin-bottom: 0;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding: 2px 0 10px;
        }

        .tabs-container::-webkit-scrollbar {
          display: none;
        }

        .tabs-nav {
          display: flex;
          gap: 4px;
          justify-content: flex-start;
          width: max-content;
          margin: 0 auto;
          padding: 4px;
          border-radius: 999px;
          border: 1px solid #e2e8ec;
          background: #eef2f3;
          min-width: fit-content;
        }

        .tab-button {
          position: relative;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 999px;
          padding: 11px 18px;
          font-size: 1rem;
          font-weight: 500;
          color: #123847;
          cursor: pointer;
          white-space: nowrap;
          transition:
            background-color 0.2s ease,
            border-color 0.2s ease,
            box-shadow 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0;
          line-height: 1.15;
        }

        .tab-button:hover {
          background: rgba(255, 255, 255, 0.55);
        }

        .tab-button.active {
          color: #123847;
          background: #ffffff;
          border-color: #e0e7eb;
          box-shadow: 0 1px 2px rgba(18, 56, 71, 0.08);
        }

        .tab-icon {
          display: none;
          align-items: center;
          color: inherit;
        }

        .tab-button.active .tab-icon {
          color: #22a7e0;
        }

        .tab-content {
          background: linear-gradient(
            135deg,
            #e8f4f8 0%,
            #f0f8fb 50%,
            #edf6fa 100%
          );
          border-radius: 0 0 16px 16px;
          padding: 48px 40px;
          min-height: 440px;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 40px;
        }

        .content-left {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .service-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #123847;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .service-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #4b6674;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.8);
          padding: 12px 16px;
          border-radius: 8px;
          backdrop-filter: blur(10px);
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
        }

        .feature-icon {
          flex-shrink: 0;
          width: 22px;
          height: 22px;
          background: #22a7e0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .feature-text {
          font-size: 0.875rem;
          color: #123847;
          font-weight: 500;
        }

        .learn-more-link {
          font-size: 0.9rem;
          font-weight: 600;
          color: #22a7e0;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: gap 0.3s ease;
        }

        .learn-more-link:hover {
          gap: 10px;
        }

        .content-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .service-visual {
          background: white;
          border-radius: 12px;
          padding: 28px 24px;
          box-shadow: 0 2px 12px rgba(18, 56, 71, 0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
        }

        .visual-icon {
          width: 56px;
          height: 56px;
          background: rgba(34, 167, 224, 0.1);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #22a7e0;
        }

        .visual-details h4 {
          font-size: 1.05rem;
          color: #123847;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .visual-metrics {
          display: flex;
          justify-content: center;
          gap: 32px;
        }

        .metric {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .metric-value {
          font-size: 1.8rem;
          font-weight: 700;
          color: #22a7e0;
          line-height: 1;
        }

        .metric-label {
          font-size: 0.75rem;
          color: #5e7282;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .testimonial-card {
          background: white;
          border-radius: 12px;
          padding: 28px 24px;
          box-shadow: 0 2px 12px rgba(18, 56, 71, 0.08);
          flex: 1;
        }

        .quote-icon {
          font-size: 2.2rem;
          color: #123847;
          line-height: 1;
          margin-bottom: 8px;
          opacity: 0.12;
        }

        .testimonial-quote {
          font-size: 0.875rem;
          line-height: 1.6;
          color: #4b6674;
          font-style: italic;
          margin-bottom: 18px;
        }

        .testimonial-author {
          border-top: 1px solid #e5eaee;
          padding-top: 14px;
        }

        .author-name {
          font-size: 0.75rem;
          font-weight: 700;
          color: #123847;
          letter-spacing: 0.5px;
          margin-bottom: 2px;
        }

        .author-position {
          font-size: 0.75rem;
          color: #5e7282;
        }

        .cta-section {
          text-align: center;
          margin-top: 48px;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #22a7e0;
          color: white;
          border: none;
          padding: 15px 44px;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 6px 25px rgba(34, 167, 224, 0.3);
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .cta-button:hover {
          background: #178dc8;
          transform: translateY(-2px);
          box-shadow: 0 10px 35px rgba(34, 167, 224, 0.4);
        }

        @media (max-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr;
          }
          .content-right {
            flex-direction: row;
          }
        }

        @media (max-width: 768px) {
          .services-showcase {
            padding: 60px 0;
          }
          .tab-content {
            padding: 28px 20px;
          }
          .service-title {
            font-size: 1.4rem;
          }
          .content-right {
            flex-direction: column;
          }
          .tabs-nav {
            margin: 0;
            border-radius: 20px;
            padding: 3px;
          }
          .tab-button {
            padding: 10px 14px;
            font-size: 0.86rem;
          }
          .tab-icon {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
