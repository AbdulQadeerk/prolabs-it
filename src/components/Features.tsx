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
        "Complete Active Directory & Entra ID security and health assessment in one report. Identifies misconfigurations, risks, and performance gaps with clear, prioritized remediation steps.",
      icon: <FileSearch size={32} strokeWidth={1.5} />,
    },
    {
      title: "Prolabs ACL Guardian",
      description:
        "Detects and fixes risky permissions, including anonymous or unsafe SIDs and broken ACLs across AD objects. Normalizes access control to reduce privilege exposure.",
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    },
    {
      title: "Prolabs GPO Guardian",
      description:
        "Identifies GPO permission issues, broken or orphaned links, and inconsistent delegation that can weaken security. Fixes common misconfigurations and restores least-privilege access.",
      icon: <Settings size={32} strokeWidth={1.5} />,
    },
    {
      title: "Prolabs TLS Guardian",
      description:
        "Scans Windows servers for weak SSL/TLS protocols, ciphers, and insecure configurations. Generates a remediation-ready plan to strengthen TLS security settings.",
      icon: <Lock size={32} strokeWidth={1.5} />,
    },
    {
      title: "Prolabs ServiceDesk Toolkit",
      description:
        "Simplifies helpdesk tasks like password resets, MFA resets, unlocks, and account recovery for AD and Entra ID with secure workflows and logging.",
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
          <p className={s.eyebrow}>Proprietary Tools</p>
          <h2 className={s["section-title"]}>
            Advanced Security and IT Management Tools Built by Professional Labs
          </h2>
          <p className={s["section-subtitle"]}>
            Our proprietary tools help organizations detect vulnerabilities,
            strengthen identity security, and streamline IT operations.
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
