"use client";
import Link from "next/link";
import { useScrollReveal } from "./animations";
import s from "./ResourcesSection.module.css";

const resources = [
  {
    tag: "Cybersecurity",
    title: "Top Cybersecurity Threats Businesses Will Face in 2026",
    desc: "Learn the most common cyber attacks targeting modern organizations and how to strengthen your security posture before attackers exploit vulnerabilities.",
    color: "#22a7e0",
  },
  {
    tag: "IT Automation",
    title: "How AI Is Transforming IT Operations and Managed Services",
    desc: "Explore how AI-driven automation helps IT teams reduce manual tasks, detect issues faster, and improve overall service delivery.",
    color: "#178dc8",
  },
  {
    tag: "Data Backup",
    title: "Ransomware Recovery Starts with the Right Backup Strategy",
    desc: "Discover why modern backup and disaster recovery plans are critical to protect data and ensure fast recovery after cyber incidents.",
    color: "#0f6f9d",
  },
  {
    tag: "Network Security",
    title: "How Modern Network Security Stops Advanced Cyber Attacks",
    desc: "Understand how next-generation firewalls, threat detection, and AI-powered monitoring protect business networks from evolving threats.",
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
          <h2 className={s["section-title"]}>
            Insights on Cybersecurity, Cloud, and IT Management
          </h2>
          <p className={s["section-desc"]}>
            Stay updated with the latest insights on cybersecurity threats, IT
            automation, and cloud infrastructure management.
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
                <Link href="/blog" className={s["card-link"]}>
                  Read more <span className={s.arrow}>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
