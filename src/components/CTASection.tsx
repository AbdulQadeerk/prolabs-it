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
          <p className={s["cta-eyebrow"]}>Ready to Transform Your IT?</p>
          <h2 className={s["cta-title"]}>
            Ready to simplify work with unified IT?
          </h2>
          <p className={s["cta-desc"]}>
            Join 100+ businesses across 35+ countries who trust Professional
            Labs for their IT operations, security, and cloud services.
          </p>
          <div className={s["cta-buttons"]}>
            <Link
              href="/contact"
              className={`btn btn-primary ${s["btn-large"]}`}
            >
              Get a Free Consultation
            </Link>
            <a href="#services" className={`btn btn-outline ${s["btn-large"]}`}>
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
