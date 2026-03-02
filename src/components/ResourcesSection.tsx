"use client";
import { useScrollReveal } from "./animations";
import s from "./ResourcesSection.module.css";

const resources = [
  {
    tag: "Cybersecurity",
    title: "Cybersecurity in the Age of Remote Work: Preparing for a New Wave",
    desc: "Explore how remote work has reshaped cybersecurity and what your organization needs to stay protected.",
    color: "#22a7e0",
  },
  {
    tag: "Automation",
    title: "Unlocking the Power of AI & Automation in IT Service Management",
    desc: "Discover how AI-driven automation is transforming IT service delivery and operational efficiency.",
    color: "#178dc8",
  },
  {
    tag: "Data Backup",
    title: "Why Data Backup & Disaster Recovery Plans Are Essential",
    desc: "Learn why every business needs a robust backup and disaster recovery strategy to minimize downtime.",
    color: "#0f6f9d",
  },
  {
    tag: "Network Security",
    title: "The Role of AI & Machine Learning in Cyber Defense",
    desc: "How artificial intelligence and machine learning are revolutionizing threat detection and response.",
    color: "#0d4f6c",
  },
];

export default function ResourcesSection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section
      id="resources"
      ref={ref as React.RefObject<HTMLElement>}
      className={`${s["resources-section"]} ${isVisible ? s["animate-in"] : ""}`}
    >
      <div className="container">
        <div className={s["section-header"]}>
          <h2 className={s["section-title"]}>Events, Updates, and Resources</h2>
          <p className={s["section-desc"]}>
            From digital transformation to data security — read what&apos;s
            shaping the future of modern IT services
          </p>
        </div>
        <div className={s["resources-grid"]}>
          {resources.map((item, index) => (
            <article key={index} className={s["resource-card"]}>
              <div
                className={s["card-accent"]}
                style={{ backgroundColor: item.color }}
              ></div>
              <div className={s["card-body"]}>
                <span className={s["card-tag"]} style={{ color: item.color }}>
                  {item.tag}
                </span>
                <h3 className={s["card-heading"]}>{item.title}</h3>
                <p className={s["card-desc"]}>{item.desc}</p>
                <a href="#" className={s["card-link"]}>
                  Read more <span className={s.arrow}>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
