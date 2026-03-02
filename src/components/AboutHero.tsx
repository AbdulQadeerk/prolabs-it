"use client";
import { useScrollReveal } from "./animations";
import s from "./AboutHero.module.css";

export default function AboutHero() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${s["about-hero-section"]} ${isVisible ? s["animate-in"] : ""}`}
    >
      <div className={`container ${s["banner-outer"]}`}>
        <div className={s["about-hero-banner"]}>
          <div className={s["video-background"]}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className={s["video-content"]}
            >
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-modern-city-at-night-with-bright-lights-and-traffic-lights-42991-large.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className={s["hero-overlay"]}></div>
          <div className={s["mesh-gradient"]}></div>
          <div className={s["hero-content"]}>
            <div className={s["content-inner"]}>
              <div className={s["hero-badge"]}>
                <span>ESTABLISHED 2012</span>
              </div>
              <h1 className={s["hero-title"]}>
                <span className={s["word-reveal"]}>Who</span>
                <span className={s["word-reveal"]}>We</span>
                <span className={s["word-reveal"]}>Are</span>
              </h1>
              <div className={s["title-underline"]}></div>
              <p className={s["hero-subtitle"]}>
                Professional Labs was founded with one goal: to put the customer
                first and <strong>simplify complex technology</strong> for
                everyone.
              </p>
              <div className={s["scroll-hint"]}>
                <div className={s.mouse}>
                  <div className={s.wheel}></div>
                </div>
                <span>Discover Our Story</span>
              </div>
            </div>
          </div>
          <div className={`${s["premium-glow"]} ${s["left-glow"]}`}></div>
          <div className={`${s["premium-glow"]} ${s["right-glow"]}`}></div>
          <div className={`${s["floating-node"]} ${s["node-1"]}`}></div>
          <div className={`${s["floating-node"]} ${s["node-2"]}`}></div>
        </div>
      </div>
    </section>
  );
}
