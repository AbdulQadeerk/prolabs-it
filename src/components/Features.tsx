"use client";
import { useScrollReveal } from "./animations";
import {
  FileSearch,
  ShieldCheck,
  Settings,
  Lock,
  Wrench,
  ArrowRight,
} from "lucide-react";
import s from "./Features.module.css";

export default function Features() {
  const { ref, isVisible } = useScrollReveal();
  const features = [
    {
      title: "Prolabs Identity Audit",
      description:
        "Comprehensive Active Directory & Entra ID health and security assessment in one report. Highlights misconfigurations, risks, and performance gaps with clear, prioritized remediation actions.",
      icon: <FileSearch size={32} strokeWidth={1.5} />,
    },
    {
      title: "Prolabs ACL Guardian",
      description:
        "Detects and cleans up risky permissions, including Anonymous/unsafe SIDs and broken ACLs across AD objects. Safely normalizes access control to reduce privilege exposure.",
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    },
    {
      title: "Prolabs GPO Guardian",
      description:
        "Finds GPO permission issues, orphaned/broken links, and inconsistent delegation that can weaken security. Repairs common misconfigurations and restores least-privilege control.",
      icon: <Settings size={32} strokeWidth={1.5} />,
    },
    {
      title: "Prolabs TLS Guardian",
      description:
        "Scans Windows servers for weak SSL/TLS protocols, ciphers, and insecure configuration baselines. Produces a remediation-ready plan to harden TLS settings.",
      icon: <Lock size={32} strokeWidth={1.5} />,
    },
    {
      title: "Prolabs ServiceDesk Toolkit",
      description:
        "Streamlines common helpdesk tasks like password resets, MFA resets, unlocks, and account recovery for AD and Entra ID. Standardizes operations with guardrails and logging.",
      icon: <Wrench size={32} strokeWidth={1.5} />,
    },
  ];

  return (
    <section
      id="tools"
      ref={ref as React.RefObject<HTMLElement>}
      className={`${s["features-section"]} ${isVisible ? s["animate-in"] : ""}`}
    >
      <div className="container">
        <div className={s["section-header"]}>
          <p className={s.eyebrow}>Our Proprietary Tools</p>
          <h2 className={s["section-title"]}>
            Everything you need to secure and manage IT
          </h2>
          <p className={s["section-subtitle"]}>
            From consultation to implementation — we deliver end-to-end IT
            excellence with our proprietary tools and solutions.
          </p>
        </div>

        <div className={s["features-grid"]}>
          {features.map((feature, index) => (
            <div key={index} className={s["feature-card"]}>
              <div className={s["feature-icon-wrapper"]}>{feature.icon}</div>
              <h3 className={s["feature-title"]}>{feature.title}</h3>
              <p className={s["feature-desc"]}>{feature.description}</p>
              <a href="#" className={s["feature-link"]}>
                Learn more <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
