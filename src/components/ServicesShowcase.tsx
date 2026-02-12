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
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: ShieldCheck,
    title: "Managed SOC Service",
    description: "Keep your Security Operations Strong and Scalable",
  },
  {
    icon: Cloud,
    title: "Cloud Managed Services",
    description: "Streamline cloud operations with managed services.",
  },
  {
    icon: Mail,
    title: "Email Security",
    description:
      "Beware of phishing. Protect Email Data. Professional Labs Email Security. protects your inbox",
  },
  {
    icon: Lock,
    title: "Microsoft Cloud App Security",
    description: "Securing User Behavior with Microsoft Cloud App Security",
  },
  {
    icon: Shield,
    title: "Azure Security Service",
    description:
      "Safeguard your data and applications with Azure's reliable security services.",
  },
  {
    icon: Monitor,
    title: "Azure Virtual Desktop",
    description: "Virtually access a secure remote desktop from anywhere.",
  },
  {
    icon: Headphones,
    title: "IT Help Desk Service",
    description:
      "Our IT Help Desk Services will manage your IT infrastructure and software",
  },
  {
    icon: Network,
    title: "Network and Security Services",
    description: "Network and Security Services from Pro Labs It",
  },
  {
    icon: Briefcase,
    title: "Modern Workplace",
    description: "Redefine work with an employee-first approach",
  },
];

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];
  const ActiveIcon = activeService.icon;

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

        <div className="showcase-stage">
          <div className="showcase-panel">
            <div className="panel-icon">
              <ActiveIcon size={62} strokeWidth={1.6} />
            </div>
            <h3 className="panel-title">{activeService.title}</h3>
            <p className="panel-description">{activeService.description}</p>
            <a href="#contact" className="panel-link">
              Explore service <ArrowRight size={18} />
            </a>
          </div>

          <div className="selector-rail">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;

              return (
                <button
                  key={service.title}
                  className={`selector-pill ${activeIndex === index ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <ServiceIcon size={16} strokeWidth={2} />
                  <span>{service.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="tabs-container">
          <div className="tabs-nav">
            {services.map((service, index) => (
              <button
                key={service.title}
                className={`tab-button ${activeIndex === index ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="tab-name">{service.title}</span>
              </button>
            ))}
          </div>
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

        .showcase-stage {
          position: relative;
          margin-top: 8px;
          border-radius: 10px;
          padding: 52px 28px 26px;
          background: #083a57;
          overflow: hidden;
          border: 1px solid rgba(23, 141, 200, 0.22);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
        }

        .showcase-stage::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(34, 167, 224, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 167, 224, 0.08) 1px, transparent 1px);
          background-size: 54px 54px, 54px 54px;
          pointer-events: none;
          opacity: 0.35;
        }

        .showcase-panel {
          position: relative;
          z-index: 2;
          width: min(100%, 760px);
          margin: 0 auto;
          text-align: center;
          background: #0d3f5f;
          border: 1px solid rgba(34, 167, 224, 0.35);
          border-radius: 4px;
          padding: 56px 52px 72px;
        }

        .showcase-panel::before,
        .showcase-panel::after {
          content: "";
          position: absolute;
          width: 12px;
          height: 12px;
          border-color: #22a7e0;
          border-style: solid;
        }

        .showcase-panel::before {
          left: -1px;
          top: -1px;
          border-width: 2px 0 0 2px;
        }

        .showcase-panel::after {
          right: -1px;
          bottom: -1px;
          border-width: 0 2px 2px 0;
        }

        .panel-icon {
          color: #22a7e0;
          display: inline-flex;
          margin-bottom: 18px;
        }

        .panel-title {
          color: #ffffff;
          font-size: clamp(2rem, 3.2vw, 3.2rem);
          font-weight: 700;
          line-height: 1.08;
          margin-bottom: 14px;
          letter-spacing: -0.02em;
        }

        .panel-description {
          color: rgba(255, 255, 255, 0.82);
          font-size: clamp(1rem, 1.5vw, 1.32rem);
          line-height: 1.4;
          max-width: 760px;
          margin: 0 auto 24px;
        }

        .panel-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #22a7e0;
          font-size: 1.2rem;
          font-weight: 600;
          text-decoration: none;
          transition: gap 0.2s ease;
        }

        .panel-link:hover {
          gap: 12px;
        }

        .selector-rail {
          position: relative;
          z-index: 3;
          width: fit-content;
          max-width: 100%;
          margin: -42px auto 0;
          border-radius: 16px;
          background: #1a5678;
          border: 1px solid rgba(34, 167, 224, 0.24);
          padding: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }

        .selector-rail::-webkit-scrollbar {
          display: none;
        }

        .selector-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
          border-radius: 10px;
          border: 1px solid transparent;
          background: transparent;
          color: rgba(225, 241, 250, 0.82);
          padding: 10px 14px;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .selector-pill:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
        }

        .selector-pill.active {
          background: rgba(34, 167, 224, 0.2);
          color: #ffffff;
          border-color: rgba(34, 167, 224, 0.5);
        }

        .tabs-container {
          margin-top: 16px;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }

        .tabs-container::-webkit-scrollbar {
          display: none;
        }

        .tabs-nav {
          display: flex;
          gap: 8px;
          justify-content: flex-start;
          width: fit-content;
          margin: 0 auto;
          padding: 0 2px 6px;
          border-radius: 999px;
          min-width: fit-content;
        }

        .tab-button {
          position: relative;
          background: #f1f4f5;
          border: 1px solid #e2e8ec;
          border-radius: 999px;
          padding: 8px 14px;
          font-size: 0.83rem;
          font-weight: 500;
          color: #3a596c;
          cursor: pointer;
          white-space: nowrap;
          transition:
            background-color 0.2s ease,
            border-color 0.2s ease,
            color 0.2s ease;
          display: flex;
          align-items: center;
          line-height: 1.2;
        }

        .tab-button:hover {
          color: #123847;
          border-color: #cfdae0;
        }

        .tab-button.active {
          color: #123847;
          background: #ffffff;
          border-color: #d7e0e6;
        }

        @media (max-width: 1024px) {
          .showcase-panel {
            padding: 42px 28px 62px;
          }
          .selector-rail {
            margin-top: -34px;
          }
        }

        @media (max-width: 768px) {
          .services-showcase {
            padding: 60px 0;
          }
          .showcase-stage {
            padding: 36px 12px 18px;
          }
          .showcase-panel {
            padding: 32px 16px 52px;
          }
          .panel-title {
            font-size: clamp(1.35rem, 6vw, 2rem);
          }
          .panel-description {
            font-size: 0.95rem;
            line-height: 1.45;
            margin-bottom: 16px;
          }
          .panel-link {
            font-size: 1rem;
          }
          .selector-rail {
            margin-top: -28px;
            padding: 6px;
            border-radius: 12px;
          }
          .selector-pill {
            padding: 8px 11px;
            font-size: 0.8rem;
          }
          .tabs-container {
            margin-top: 12px;
          }
          .tabs-nav {
            margin: 0;
            padding-bottom: 2px;
          }
          .tab-button {
            padding: 8px 10px;
            font-size: 0.72rem;
          }
          .tab-name {
            max-width: 132px;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      `}</style>
    </section>
  );
}
