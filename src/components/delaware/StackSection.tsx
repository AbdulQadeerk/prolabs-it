"use client";
import { useScrollReveal } from "../animations";
import s from "../StackSection.module.css";

export default function StackSectionDelaware() {
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
            <h2 className={s["stack-heading"]}>
              Strategic Partnerships with Leading Technology Providers
            </h2>
            <p className={s["stack-desc"]}>
              Professional Labs partners with industry-leading technology vendors
              to deliver secure and scalable IT solutions. Our integrations
              ensure seamless interoperability across cloud infrastructure,
              cybersecurity platforms, and enterprise productivity tools.
            </p>
            <a href="/partnership" className={s["stack-link"]}>
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
