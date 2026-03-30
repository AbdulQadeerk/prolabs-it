"use client";
import { useScrollReveal } from "../animations";
import Link from "next/link";
import s from "../CTASection.module.css";

export default function CTASectionDelaware() {
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
            Ready to Strengthen Your IT Infrastructure in Delaware?
          </h2>
          <p className={s["cta-desc"]}>
            Join businesses that trust Professional Labs for managed IT services in Delaware, cybersecurity, and cloud infrastructure solutions.
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
