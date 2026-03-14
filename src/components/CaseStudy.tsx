"use client";
import { useScrollReveal } from "./animations";
import s from "./CaseStudy.module.css";

export default function CaseStudy() {
  const { ref, isVisible } = useScrollReveal();
  const testimonials = [
    {
      quote:
        "Professional Labs helps manage our email and domain environment, and they have consistently delivered reliable support. Their expertise with Microsoft technologies enabled our team to work securely from anywhere during the pandemic.",
      author: "ADV. Hussain Nalwala",
      position: "Founder",
      company: "CNS Juris",
    },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${s["case-study"]} ${isVisible ? s["animate-in"] : ""}`}
    >
      <div className="container">
        <div className={s["section-header"]}>
          <p className={s.eyebrow}>Client Testimonials</p>
          <h2 className={s["section-heading"]}>
            Real feedback from businesses who trust our IT solutions
          </h2>
        </div>

        <div className={s["case-grid"]}>
          <div className={s["case-text"]}>
            <div className={s["quote-mark"]}>❝</div>
            <blockquote className={s["case-quote"]}>
              {testimonials[0].quote}
            </blockquote>
            <div className={s["case-author"]}>
              <div className={s["author-avatar"]}>
                <span>{testimonials[0].author.charAt(0)}</span>
              </div>
              <div>
                <div className={s["author-name"]}>{testimonials[0].author}</div>
                <div className={s["author-role"]}>
                  {testimonials[0].position}, {testimonials[0].company}
                </div>
              </div>
            </div>
          </div>

          <div className={s["case-stats-side"]}>
            <div className={s["stat-card"]}>
              <span className={s["sc-value"]}>99%</span>
              <span className={s["sc-label"]}>Client Satisfaction Rate</span>
            </div>
            <div className={s["stat-card"]}>
              <span className={s["sc-value"]}>100+</span>
              <span className={s["sc-label"]}>Active Client Partnerships</span>
            </div>
            <div className={s["stat-card"]}>
              <span className={s["sc-value"]}>15+</span>
              <span className={s["sc-label"]}>Years of Trusted Service</span>
            </div>
            <div className={s["stat-card"]}>
              <span className={s["sc-value"]}>&lt;15m</span>
              <span className={s["sc-label"]}>Average Response Time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
