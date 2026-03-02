"use client";
import { useScrollReveal } from "./animations";
import s from "./AboutLeader.module.css";

export default function AboutLeader() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${s["leader-section"]} ${isVisible ? s["animate-in"] : ""}`}
    >
      <div className={`container ${s["banner-outer"]}`}>
        <div className={s["leader-banner"]}>
          <div className={s["grid-bg"]}></div>
          <div className={s.content}>
            <h2 className={s["leader-title"]}>
              IDC names Professional Labs a leader in <br />
              Managed IT Services &amp; Digital Transformation <br />
              Tools for 2025 – 2026
            </h2>
            <div className={s["cta-link"]}>
              <a href="#research">Read research →</a>
            </div>
            <div className={s["logos-row"]}>
              <div className={s["logo-item"]}>Gartner</div>
              <div className={`${s["logo-item"]} ${s["logo-item-active"]}`}>
                IDC
              </div>
              <div className={s["logo-item"]}>FORRESTER</div>
              <div className={s["logo-item"]}>G2</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
