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
            <h2 className={s["leadership-heading"]}>
              Professional Labs delivers unified IT and cybersecurity solutions,
              trusted by businesses across 35+ countries since 1997.
            </h2>
            <p className={s["leadership-desc"]}>
              Our experts help organizations accelerate digital transformation
              and drive measurable results through Cybersecurity, Cloud, and
              Managed IT Services.
            </p>
            <a href="/about" className="btn btn-outline btn-small">
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
