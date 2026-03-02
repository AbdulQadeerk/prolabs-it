"use client";

import { useState } from "react";
import { UNIFIED_PLATFORM_SERVICES } from "@/data/unifiedPlatformServices";
import Link from "next/link";
import s from "./UnifiedPlatform.module.css";

const SERVICES = UNIFIED_PLATFORM_SERVICES;

export default function UnifiedPlatform() {
  const [activeTab, setActiveTab] = useState(0);
  const service = SERVICES[activeTab];

  return (
    <section className={s["unified-section"]}>
      <div className="container">
        <div className={s["section-header"]}>
          <span className={s.badge}>Professional Labs Platform</span>
          <h2 className={s.title}>Unified IT Operations Platform</h2>
          <div className={s.tabs}>
            {SERVICES.map((svc, i) => (
              <button
                key={svc.id}
                className={`${s.tab} ${i === activeTab ? s["tab-active"] : ""}`}
                onClick={() => setActiveTab(i)}
              >
                {svc.tabLabel}
              </button>
            ))}
          </div>
        </div>

        <div className={s["platform-grid"]}>
          <div className={s["platform-showcase"]}>
            <div className={s["showcase-content"]}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href={service.ctaLink} className={s["cta-link"]}>
                {service.ctaText} <span>→</span>
              </Link>
            </div>
            <div className={s["showcase-image"]}>
              <img
                className={s["platform-img"]}
                src={service.dashboardImage}
                alt={`${service.tabLabel} dashboard`}
              />
            </div>
          </div>

          <div className={s["testimonial-card"]}>
            <div className={s["testimonial-head"]}>
              <img
                src={service.testimonial.logo}
                alt={service.testimonial.logoAlt}
              />
              <span className={s.metric}>{service.testimonial.metric}</span>
            </div>
            <blockquote className={s["testimonial-quote"]}>
              &ldquo;{service.testimonial.quote}&rdquo;
            </blockquote>
            <div className={s["testimonial-attribution"]}>
              <strong>{service.testimonial.author}</strong>
              <span>{service.testimonial.role}</span>
            </div>
          </div>
        </div>

        <div className={s["section-cta"]}>
          <Link href="/products" className="btn btn-primary">
            See the product
          </Link>
        </div>
      </div>
    </section>
  );
}
