"use client";
import { useScrollReveal } from "./animations";
import s from "./AboutIntro.module.css";

export default function AboutIntro() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${s["intro-section"]} ${isVisible ? s["animate-in"] : ""}`}
    >
      <div className="container">
        <div className={s["intro-grid"]}>
          <div className={s["intro-content"]}>
            <h2 className={s["intro-title"]}>Get to Know Professional Labs</h2>
            <p className={s["intro-description"]}>
              The modern world relies on a complex array of technologies to keep
              turning. Professional Labs aim is to simplify that complexity. Our
              expertise helps organizations in accelerating their time to value
              and achieve significant business impact.
            </p>
            <p className={s["intro-sub-description"]}>
              Founded in 1997 and headquartered in Dubai, we specialize in
              simplifying complex problems for our customers with Cyber
              Security, Cloud Services, Managed Services and Market Research.
            </p>
          </div>
          <div className={s["intro-visual"]}>
            <div className={s["experience-badge"]}>
              <span className={s["exp-number"]}>25+</span>
              <span className={s["exp-text"]}>Years of Excellence</span>
            </div>
            <div className={s["visual-elements"]}>
              <div className={`${s["element-box"]} ${s["box-1"]}`}></div>
              <div className={`${s["element-box"]} ${s["box-2"]}`}></div>
              <div className={`${s["element-box"]} ${s["box-3"]}`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
