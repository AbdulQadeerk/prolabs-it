"use client";
import { useScrollReveal } from "./animations";
import s from "./LeadershipBand.module.css";

export default function LeadershipBand() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${s["leadership-band"]} ${isVisible ? s["animate-in"] : ""}`}
    >
      <div className="container">
        <div className={s["leadership-card"]}>
          <div className={s["leadership-content"]}>
            <p className={s.eyebrow}>Industry Recognition</p>
            <h3 className={s["leadership-heading"]}>
              Professional Labs delivers a unified IT experience — trusted
              across 35+ countries since 1997
            </h3>
            <p className={s["leadership-desc"]}>
              Our expertise helps organizations in accelerating their time to
              value and achieve significant business impact with Cyber Security,
              Cloud Services, and Managed Services.
            </p>
            <a href="#about" className="btn btn-outline btn-small">
              Learn More About Us
            </a>
          </div>
          <div className={s["leadership-stats"]}>
            <div className={s.lstat}>
              <span className={s["lstat-value"]}>1997</span>
              <span className={s["lstat-label"]}>Founded</span>
            </div>
            <div className={s.lstat}>
              <span className={s["lstat-value"]}>35+</span>
              <span className={s["lstat-label"]}>Countries</span>
            </div>
            <div className={s.lstat}>
              <span className={s["lstat-value"]}>100+</span>
              <span className={s["lstat-label"]}>Clients</span>
            </div>
            <div className={s.lstat}>
              <span className={s["lstat-value"]}>50+</span>
              <span className={s["lstat-label"]}>Engineers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
