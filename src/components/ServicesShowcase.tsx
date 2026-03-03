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
import Link from "next/link";
import s from "./ServicesShowcase.module.css";

interface Service {
  id: string;
  name: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  href: string;
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
    href: "/services/managed-soc",
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
    href: "#cloud",
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
    href: "#email",
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
    href: "#cloudapp",
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
    href: "/services/azure-security",
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
    href: "/services/azure-virtual-desktop",
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
    href: "#helpdesk",
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
    href: "#network",
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
    href: "/services/modern-workplace",
  },
];

export default function ServicesShowcase() {
  const [activeTab, setActiveTab] = useState("soc");
  const activeService =
    services.find((svc) => svc.id === activeTab) || services[0];

  return (
    <section id="services" className={s["services-showcase"]}>
      <div className="container">
        <div className={s["section-header"]}>
          <p className={s.eyebrow}>Our Core Services</p>
          <h2 className={s["section-title"]}>Unified IT Operations Platform</h2>
          <p className={s["section-subtitle"]}>
            Comprehensive, scalable IT services designed to empower growing
            businesses
          </p>
        </div>

        {/* Tabs */}
        <div className={s["tabs-container"]}>
          <div className={s["tabs-nav"]}>
            {services.map((service) => (
              <button
                key={service.id}
                className={`${s["tab-button"]} ${activeTab === service.id ? s["tab-button-active"] : ""}`}
                onClick={() => setActiveTab(service.id)}
              >
                <span className={s["tab-icon"]}>{service.icon}</span>
                <span className={s["tab-name"]}>{service.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className={s["tab-content"]}>
          <div className={s["content-grid"]}>
            <div className={s["content-left"]}>
              <h3 className={s["service-title"]}>{activeService.title}</h3>
              <p className={s["service-description"]}>
                {activeService.description}
              </p>

              <div className={s["features-list"]}>
                {activeService.features.map((feature, index) => (
                  <div key={index} className={s["feature-item"]}>
                    <div className={s["feature-icon"]}>
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
                    <span className={s["feature-text"]}>{feature}</span>
                  </div>
                ))}
              </div>

              <Link href={activeService.href} className={s["learn-more-link"]}>
                More about {activeService.name} <ArrowRight size={16} />
              </Link>
            </div>

            <div className={s["content-right"]}>
              {/* Service Visual Card */}
              <div className={s["service-visual"]}>
                <div className={s["visual-icon"]}>{activeService.icon}</div>
                <div className={s["visual-details"]}>
                  <h4>{activeService.title}</h4>
                  <div className={s["visual-metrics"]}>
                    <div className={s.metric}>
                      <span className={s["metric-value"]}>99.9%</span>
                      <span className={s["metric-label"]}>Uptime</span>
                    </div>
                    <div className={s.metric}>
                      <span className={s["metric-value"]}>24/7</span>
                      <span className={s["metric-label"]}>Support</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className={s["testimonial-card"]}>
                <div className={s["quote-icon"]}>❝</div>
                <p className={s["testimonial-quote"]}>
                  Professional Labs help manage our Email and Domain
                  Environment; they haven&apos;t failed us once.
                </p>
                <div className={s["testimonial-author"]}>
                  <div className={s["author-name"]}>ADV. HUSSAIN NALWALA</div>
                  <div className={s["author-position"]}>Founder, CNS Juris</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={s["cta-section"]}>
          <a href="#contact" className={s["cta-button"]}>
            Explore All Services
          </a>
        </div>
      </div>
    </section>
  );
}
