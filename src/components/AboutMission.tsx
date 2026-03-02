"use client";
import { useScrollReveal } from "./animations";
import s from "./AboutMission.module.css";

export default function AboutMission() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${s["mission-section"]} ${isVisible ? s["animate-in"] : ""}`}
    >
      <div className="container">
        <div className={s["mission-content"]}>
          <div className={s["pill-container"]}>
            <span className={s.pill}>Company Overview</span>
          </div>
          <h2 className={s["mission-text"]}>
            Professional Labs&apos;s mission is to{" "}
            <span className={s.highlight}>simplify complexity</span>. Our
            expertise helps organizations accelerate their time to value and
            achieve significant business impact.
          </h2>
          <div className={s["mission-actions"]}>
            <a href="#consultation" className={s["btn-consultation"]}>
              Get Your Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
