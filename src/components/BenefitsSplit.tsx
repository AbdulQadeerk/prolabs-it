"use client";
import { useScrollReveal } from "./animations";
import s from "./BenefitsSplit.module.css";

export default function BenefitsSplit() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className={`${s["benefits-section"]} ${isVisible ? s["animate-in"] : ""}`}
    >
      <div className="container">
        <div className={s["section-header"]}>
          <p className={s.eyebrow}>Trusted by IT teams and MSPs worldwide</p>
          <h2 className={s["section-heading"]}>
            Delivering scalable &amp; innovative IT solutions that empower
            businesses
          </h2>
        </div>

        <div className={s["about-text"]}>
          <p>
            The modern world relies on a complex array of technologies to keep
            turning. Professional Labs aim is to simplify that complexity. Our
            expertise helps organizations in accelerating their time to value
            and achieve significant business impact.
          </p>
          <p>
            Founded in 1997 and headquartered in Dubai, we specialize in
            simplifying complex problems for our customers with Cyber Security,
            Cloud Services, and Managed Services.
          </p>
        </div>

        <div className={s["benefits-grid"]}>
          <div className={s["benefit-card"]}>
            <div className={s["card-icon"]}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h3 className={s["card-heading"]}>
              Streamline IT with a powerful, simple platform
            </h3>
            <p>
              Automate endpoint management, reduce costs, and improve resiliency
              across your organization with unified visibility and control.
            </p>
            <div className={s["card-stats"]}>
              <div className={s["cs-item"]}>
                <span className={s["cs-value"]}>99.9%</span>
                <span className={s["cs-label"]}>SLA Uptime</span>
              </div>
              <div className={s["cs-item"]}>
                <span className={s["cs-value"]}>&lt;15min</span>
                <span className={s["cs-label"]}>Response Time</span>
              </div>
            </div>
          </div>

          <div className={s["benefit-card"]}>
            <div className={s["card-icon"]}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className={s["card-heading"]}>
              Powerful, profitable, secure, and scalable
            </h3>
            <p>
              Deliver exceptional service with automation, insight, and rapid
              remote access. Our security-first approach protects your
              organization at every level.
            </p>
            <div className={s["card-stats"]}>
              <div className={s["cs-item"]}>
                <span className={s["cs-value"]}>24/7</span>
                <span className={s["cs-label"]}>SOC Monitoring</span>
              </div>
              <div className={s["cs-item"]}>
                <span className={s["cs-value"]}>35+</span>
                <span className={s["cs-label"]}>Countries Served</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
