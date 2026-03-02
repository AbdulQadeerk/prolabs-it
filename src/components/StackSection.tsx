"use client";
import { useScrollReveal } from "./animations";
import s from "./StackSection.module.css";

export default function StackSection() {
  const { ref, isVisible } = useScrollReveal();
  const partners = [
    { name: "Microsoft", category: "Cloud & Productivity" },
    { name: "Azure", category: "Cloud Platform" },
    { name: "Microsoft 365", category: "Workspace" },
    { name: "SentinelOne", category: "Endpoint Security" },
    { name: "CrowdStrike", category: "Threat Intelligence" },
    { name: "Fortinet", category: "Network Security" },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${s["stack-section"]} ${isVisible ? s["animate-in"] : ""}`}
    >
      <div className="container">
        <div className={s["stack-grid"]}>
          <div className={s["stack-content"]}>
            <p className={s.eyebrow}>Technology Ecosystem</p>
            <h3 className={s["stack-heading"]}>Built for your IT stack</h3>
            <p className={s["stack-desc"]}>
              Connect and automate your entire stack with integrations that fit
              modern IT operations. We partner with industry-leading vendors to
              deliver best-in-class solutions.
            </p>
            <a href="#contact" className={s["stack-link"]}>
              Explore integrations →
            </a>
          </div>
          <div className={s["stack-partners"]}>
            {partners.map((partner, index) => (
              <div key={index} className={s["partner-card"]}>
                <div className={s["partner-initial"]}>
                  {partner.name.charAt(0)}
                </div>
                <div>
                  <span className={s["partner-name"]}>{partner.name}</span>
                  <span className={s["partner-cat"]}>{partner.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
