import s from "./Stats.module.css";

export default function Stats() {
  const stats = [
    { value: "17,000+", label: "Customers Worldwide" },
    { value: "5M+", label: "Endpoints Managed" },
    { value: "#1", label: "Rated RMM on G2" },
    { value: "98%", label: "CSAT Score" },
  ];

  return (
    <section className={s["stats-section"]}>
      <div className="container">
        <div className={s["stats-grid"]}>
          {stats.map((stat, index) => (
            <div key={index} className={s["stat-item"]}>
              <span className={s["stat-value"]}>{stat.value}</span>
              <span className={s["stat-label"]}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
