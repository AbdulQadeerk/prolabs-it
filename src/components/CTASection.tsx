"use client";
import { useScrollReveal } from "./animations";
import Link from "next/link";
import s from "./CTASection.module.css";

export default function CTASection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${s["cta-section"]} ${isVisible ? s["animate-in"] : ""}`}
    >
      <div className={s["cta-bg-pattern"]}></div>
      <div className={`container ${s["cta-container"]}`}>
        <div className={s["cta-content"]}>
          <p className={s["cta-eyebrow"]}>FINAL CTA</p>
          <h2 className={s["cta-title"]}>
            Ready to Strengthen Your IT Infrastructure?
          </h2>
          <p className={s["cta-desc"]}>
            Join organizations across 35+ countries that trust Professional Labs to manage their IT operations, cybersecurity, and cloud infrastructure.
          </p>
          <div className={s["cta-buttons"]}>
            <Link
              href="/contact"
              className={`btn btn-primary ${s["btn-large"]}`}
            >
              Get a Free IT Consultation
            </Link>
            <a href="#services" className={`btn btn-outline ${s["btn-large"]}`}>
              Download IT Security Checklist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
