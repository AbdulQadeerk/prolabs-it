"use client";
import { useScrollReveal } from "./animations";
import s from "./AboutStats.module.css";

export default function AboutStats() {
  const { ref, isVisible } = useScrollReveal();

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "150+", label: "Expert Consultants" },
    { value: "50+", label: "Global Partners" },
    { value: "24/7", label: "Strategic Support" },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${s["about-stats"]} ${isVisible ? s["animate-in"] : ""}`}
    >
      <div className="container">
        <div className={s["stats-grid"]}>
          {stats.map((stat, index) => (
            <div key={index} className={s["stat-card"]}>
              <div className={s["stat-value"]}>{stat.value}</div>
              <div className={s["stat-label"]}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
