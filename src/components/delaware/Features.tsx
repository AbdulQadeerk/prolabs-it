"use client";
import { useScrollReveal } from "../animations";
import {
  FileSearch,
  ShieldCheck,
  Settings,
  Lock,
  Wrench,
  ArrowRight,
} from "lucide-react";
import s from "../Features.module.css";

export default function FeaturesDelaware() {
  const { ref, isVisible } = useScrollReveal();
  const features = [
    {
      title: "Prolabs Identity Audit",
      description:
        "Active Directory & Entra ID security assessment with remediation insights.",
      icon: <FileSearch size={32} strokeWidth={1.5} />,
    },
    {
      title: "Prolabs ACL Guardian",
      description:
        "Detect and fix risky permissions across directory systems.",
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    },
    {
      title: "Prolabs GPO Guardian",
      description:
        "Identify and resolve policy misconfigurations.",
      icon: <Settings size={32} strokeWidth={1.5} />,
    },
    {
      title: "Prolabs TLS Guardian",
      description:
        "Scan and improve TLS security across servers.",
      icon: <Lock size={32} strokeWidth={1.5} />,
    },
    {
      title: "Prolabs ServiceDesk Toolkit",
      description:
        "Simplify IT help desk operations with secure workflows.",
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
            Our proprietary tools help organizations strengthen IT security and streamline operations.
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
