"use client";
import { useScrollReveal } from "./animations";
import s from "./TrustBar.module.css";

export default function TrustBar() {
  const { ref, isVisible } = useScrollReveal();
  const stats = [
    { number: "50", suffix: "+", label: "Engineers & Developers" },
    { number: "100", suffix: "+", label: "Global Customers" },
    { number: "35", suffix: "+", label: "Countries" },
    { number: "15", suffix: "+", label: "Years of Excellence" },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${s["trust-bar"]} ${isVisible ? s["animate-in"] : ""}`}
    >
      <div className="container">
        <div className={s["trust-inner"]}>
          <div className={s["trust-label"]}>
            <h2 className={s["trust-heading"]}>Trusted by</h2>
            <p className={s["trust-sub"]}>Global Companies</p>
          </div>
          <div className={s["trust-divider"]}></div>
          <div className={s["stats-grid"]}>
            {stats.map((stat, index) => (
              <div key={index} className={s["stat-item"]}>
                <div className={s["stat-number"]}>
                  {stat.number}
                  <span className={s["stat-suffix"]}>{stat.suffix}</span>
                </div>
                <div className={s["stat-label"]}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
