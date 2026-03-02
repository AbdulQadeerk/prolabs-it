"use client";
import { useScrollReveal } from "./animations";
import s from "./StandardsSection.module.css";

export default function StandardsSection() {
  const { ref, isVisible } = useScrollReveal();
  const certifications = [
    { name: "ISO 27001", desc: "Information Security" },
    { name: "SOC 2", desc: "Type II Compliance" },
    { name: "GDPR", desc: "Data Protection" },
    { name: "HIPAA", desc: "Healthcare Compliance" },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${s["standards-section"]} ${isVisible ? s["animate-in"] : ""}`}
    >
      <div className="container">
        <p className={s.eyebrow}>Compliance &amp; Security</p>
        <h2 className={s["section-heading"]}>
          Built for IT. Backed by the world&apos;s strictest standards.
        </h2>
        <p className={s["standards-desc"]}>
          We adhere to the highest industry standards to ensure your data and
          systems are protected.
        </p>
        <div className={s["badge-row"]}>
          {certifications.map((cert, index) => (
            <div key={index} className={s["badge-card"]}>
              <div className={s["badge-icon"]}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <span className={s["badge-name"]}>{cert.name}</span>
              <span className={s["badge-desc"]}>{cert.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
