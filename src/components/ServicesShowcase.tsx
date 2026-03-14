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
  ArrowRight,
  Brain,
  LineChart,
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
      "Protect your business with 24/7 Managed Security Operations Center (SOC) services. Our security experts continuously monitor your IT environment, detect cyber threats in real time, and respond quickly to prevent security incidents and business disruption.",
    features: [
      "Continuous threat monitoring & detection",
      "Automated incident response & remediation",
      "Integrated threat intelligence & analytics",
    ],
    href: "/managed-soc-services",
  },
  {
    id: "cloud",
    name: "Cloud Services",
    icon: <Cloud size={28} strokeWidth={1.5} />,
    title: "Cloud Managed Services",
    description:
      "Simplify and secure your cloud infrastructure with our Cloud Managed Services. We help businesses migrate, manage, and optimize cloud environments to improve performance, security, and cost efficiency.",
    features: [
      "Secure cloud migration & infrastructure optimization",
      "Multi-cloud monitoring and management",
      "Cloud cost control and performance optimization",
    ],
    href: "/cloud-managed-services",
  },
  {
    id: "email",
    name: "Email Security",
    icon: <Mail size={28} strokeWidth={1.5} />,
    title: "Email Security",
    description:
      "Protect your business communication with advanced email security solutions. Professional Labs safeguards inboxes from phishing attacks, malware, and email-based cyber threats to prevent data breaches and unauthorized access.",
    features: [
      "Advanced phishing and malware detection",
      "Email encryption and data loss protection (DLP)",
      "Real-time threat intelligence and filtering",
    ],
    href: "/email-security",
  },
  {
    id: "ai",
    name: "AI Solutions",
    icon: <Brain size={28} strokeWidth={1.5} />,
    title: "Advanced AI Solutions",
    description:
      "Drive innovation and efficiency with advanced AI solutions. Professional Labs helps businesses implement artificial intelligence strategies and custom AI tools to automate processes, gain insights, and accelerate digital transformation.",
    features: [
      "AI strategy and implementation roadmap",
      "Custom AI tools and automation solutions",
      "Machine learning and deep learning models",
    ],
    href: "/professional-labs-transforming-business-with-advanced-ai-solutions",
  },
  {
    id: "data-driven",
    name: "Data Driven Solutions",
    icon: <LineChart size={28} strokeWidth={1.5} />,
    title: "Data-Driven Solutions",
    description:
      "Turn data into actionable insights with data-driven IT solutions. Professional Labs helps businesses leverage analytics, data engineering, and predictive models to improve decision-making and operational performance.",
    features: [
      "Business intelligence analytics and dashboards",
      "Scalable and secure data pipelines",
      "Predictive modeling and advanced insights",
    ],
    href: "/professional-labs-your-partner-in-data-driven-brilliance",
  },
  {
    id: "cloudapp",
    name: "Cloud App Security",
    icon: <Lock size={28} strokeWidth={1.5} />,
    title: "Microsoft Cloud App Security",
    description:
      "Protect your cloud applications with Microsoft Cloud App Security. Gain visibility into app usage, detect shadow IT risks, and enforce data protection policies to secure users and sensitive business data.",
    features: [
      "Shadow IT discovery and risk monitoring",
      "User behavior analytics and threat detection",
      "Data loss prevention (DLP) policy enforcement",
    ],
    href: "/microsoft-cloud-app-security",
  },
  {
    id: "azure",
    name: "Azure Security",
    icon: <Shield size={28} strokeWidth={1.5} />,
    title: "Azure Security Services",
    description:
      "Protect your cloud infrastructure with Azure security services. Professional Labs secures cloud workloads, applications, and hybrid environments using Microsoft-native security tools and best practices.",
    features: [
      "Azure Security Center monitoring and management",
      "Network security group configuration and protection",
      "Compliance, governance, and policy automation",
    ],
    href: "/azure-security-service",
  },
  {
    id: "avd",
    name: "Azure Virtual Desktop",
    icon: <Monitor size={28} strokeWidth={1.5} />,
    title: "Azure Virtual Desktop",
    description:
      "Enable secure remote work with Azure Virtual Desktop. Deploy and manage Windows desktops and applications in the cloud with scalable infrastructure and built-in Microsoft security.",
    features: [
      "Multi-session Windows 11 virtual desktop experience",
      "Secure remote access from any device",
      "Cost-efficient and scalable virtual desktop infrastructure",
    ],
    href: "/azure-virtual-desktop",
  },
  {
    id: "helpdesk",
    name: "IT Help Desk",
    icon: <Headphones size={28} strokeWidth={1.5} />,
    title: "IT Help Desk Services",
    description:
      "Ensure smooth business operations with 24/7 IT help desk support. Professional Labs provides fast issue resolution, proactive monitoring, and reliable technical assistance to keep your IT systems running efficiently.",
    features: [
      "24/7 multi-channel IT support",
      "SLA-based issue tracking and resolution",
      "Proactive system monitoring and maintenance",
    ],
    href: "/it-help-desk",
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
          <p className={s.eyebrow}>OUR CORE SERVICES</p>
          <h2 className={s["section-title"]}>
            Managed IT &amp; Cybersecurity Services Built for Growing
            Organizations
          </h2>
          <p className={s["section-subtitle"]}>
            We streamline infrastructure, cloud security, and threat monitoring.
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
                Learn More About {activeService.name} <ArrowRight size={16} />
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
                  Professional Labs helps manage our email and domain
                  environment, and they have consistently delivered reliable
                  support. Their expertise with Microsoft technologies enabled
                  our team to work securely from anywhere during the pandemic.
                </p>
                <div className={s["testimonial-author"]}>
                  <div className={s["author-name"]}>ADV. HUSSAIN NALWALA</div>
                  <div className={s["author-position"]}>
                    Founder, CNS Juris
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={s["cta-section"]}>
          <a href="/contact" className={s["cta-button"]}>
            Explore All Services
          </a>
        </div>
      </div>
    </section>
  );
}
