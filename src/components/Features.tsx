"use client";
import { useScrollReveal } from "./animations";
import { FileSearch, ShieldCheck, Settings, Lock, Wrench, ArrowRight } from 'lucide-react';

export default function Features() {
  const { ref, isVisible } = useScrollReveal();
  const features = [
    {
      title: "Prolabs Identity Audit",
      description: "Comprehensive Active Directory & Entra ID health and security assessment in one report. Highlights misconfigurations, risks, and performance gaps with clear, prioritized remediation actions.",
      icon: <FileSearch size={32} strokeWidth={1.5} />,
    },
    {
      title: "Prolabs ACL Guardian",
      description: "Detects and cleans up risky permissions, including Anonymous/unsafe SIDs and broken ACLs across AD objects. Safely normalizes access control to reduce privilege exposure.",
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    },
    {
      title: "Prolabs GPO Guardian",
      description: "Finds GPO permission issues, orphaned/broken links, and inconsistent delegation that can weaken security. Repairs common misconfigurations and restores least-privilege control.",
      icon: <Settings size={32} strokeWidth={1.5} />,
    },
    {
      title: "Prolabs TLS Guardian",
      description: "Scans Windows servers for weak SSL/TLS protocols, ciphers, and insecure configuration baselines. Produces a remediation-ready plan to harden TLS settings.",
      icon: <Lock size={32} strokeWidth={1.5} />,
    },
    {
      title: "Prolabs ServiceDesk Toolkit",
      description: "Streamlines common helpdesk tasks like password resets, MFA resets, unlocks, and account recovery for AD and Entra ID. Standardizes operations with guardrails and logging.",
      icon: <Wrench size={32} strokeWidth={1.5} />,
    },
  ];

  return (
    <section id="tools" ref={ref as React.RefObject<HTMLElement>} className={`features-section ${isVisible ? 'animate-in' : ''}`}>
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Our Proprietary Tools</p>
          <h2 className="section-title">Everything you need to secure and manage IT</h2>
          <p className="section-subtitle">
            From consultation to implementation — we deliver end-to-end IT excellence with our proprietary tools and solutions.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
              <a href="#" className="feature-link">
                Learn more <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .features-section {
          background-color: var(--bg-primary);
          padding: 100px 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 64px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .eyebrow {
          color: #22a7e0;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.72rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .section-title {
          color: var(--primary-blue);
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          margin-bottom: 16px;
          line-height: 1.25;
        }

        .section-subtitle {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.6;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
        }

        .feature-card {
          padding: 32px;
          border-radius: 18px;
          border: 1px solid #e2e8f0;
          background: white;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 40px rgba(34, 167, 224, 0.1);
          border-color: rgba(34, 167, 224, 0.3);
        }

        .feature-icon-wrapper {
          color: #22a7e0;
          margin-bottom: 20px;
          background: rgba(34, 167, 224, 0.08);
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          border: 1px solid rgba(34, 167, 224, 0.12);
          transition: all 0.3s ease;
        }

        .feature-card:hover .feature-icon-wrapper {
          background: rgba(34, 167, 224, 0.15);
          transform: scale(1.05);
        }

        .feature-title {
          color: var(--primary-blue);
          font-size: 1.15rem;
          margin-bottom: 12px;
          font-weight: 700;
        }

        .feature-desc {
          color: var(--text-secondary);
          margin-bottom: 20px;
          line-height: 1.6;
          font-size: 0.9rem;
        }

        .feature-link {
          color: #22a7e0;
          font-weight: 600;
          font-size: 0.85rem;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: gap 0.2s;
          text-decoration: none;
        }

        .feature-link:hover {
          gap: 10px;
        }

        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 720px) {
          .features-section {
            padding: 60px 0;
          }
          .features-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Scroll-reveal animations */
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .features-section:not(.animate-in) .section-header,
        .features-section:not(.animate-in) .feature-card {
          opacity: 0;
          transform: translateY(32px);
        }
        .features-section.animate-in .section-header {
          animation: revealUp 0.7s cubic-bezier(0.23,1,0.32,1) forwards;
        }
        .features-section.animate-in .feature-card {
          animation: revealUp 0.6s cubic-bezier(0.23,1,0.32,1) forwards;
        }
        .features-section.animate-in .feature-card:nth-child(1) { animation-delay: 0.1s; }
        .features-section.animate-in .feature-card:nth-child(2) { animation-delay: 0.18s; }
        .features-section.animate-in .feature-card:nth-child(3) { animation-delay: 0.26s; }
        .features-section.animate-in .feature-card:nth-child(4) { animation-delay: 0.34s; }
        .features-section.animate-in .feature-card:nth-child(5) { animation-delay: 0.42s; }
      `}</style>
    </section>
  );
}
