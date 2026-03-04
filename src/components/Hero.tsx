"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import BrandCarousel from "@/components/BrandCarousel";
import s from "./Hero.module.css";

export default function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 },
    );
    if (visualRef.current) observer.observe(visualRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className={s.hero}>
      <div className={s["hero-bg-glow"]}></div>

      {/* Main Content Grid */}
      <div className={`container ${s["hero-container"]}`}>
        <div className={s["hero-content"]}>
          <div className={s["hero-badge"]}>
            <span className={s["badge-dot"]}></span>
            Smarter IT. Stronger Business.
          </div>
          <h1 className={s["hero-title"]}>
            Unify IT.
            <br />
            Simplify work.
          </h1>
          <p className={s["hero-subtitle"]}>
            One platform to manage every device, protect every endpoint, and
            support every employee.
          </p>
          <div className={s["hero-actions"]}>
            <a href="#contact" className="btn btn-primary">
              Get a Free Consultation
            </a>
            <a href="#services" className="btn btn-outline">
              Explore Services
            </a>
          </div>
        </div>

        <div className={s["hero-visual"]} ref={visualRef}>
          <div className={s["hero-image-glow"]}></div>

          {/* Main person image */}
          <div className={s["hero-person"]}>
            <Image
              src="/man-laptop.avif"
              alt="IT Professional working on laptop"
              width={620}
              height={700}
              className={s["person-img"]}
              priority
            />
          </div>

          {/* Floating card LEFT — "Patching Compliance" style */}
          <div
            className={`${s["overlay-card"]} ${s["overlay-left"]} ${inView ? s["slide-in-left"] : ""}`}
          >
            <div className={s["oc-header"]}>
              <span className={s["oc-dot"]}></span>
              Patching compliance
            </div>
            <div className={s["oc-stat-row"]}>
              <span className={s["oc-stat-value"]}>99%</span>
              <span className={s["oc-stat-label"]}>(2299/2323 devices)</span>
            </div>
            <div className={s["oc-progress-track"]}>
              <div
                className={s["oc-progress-fill"]}
                style={{ width: "99%" }}
              ></div>
            </div>
          </div>

          {/* Floating card RIGHT — "Patches Installed" donut style */}
          <div
            className={`${s["overlay-card"]} ${s["overlay-right"]} ${inView ? s["slide-in-right"] : ""}`}
          >
            <div className={s["oc-header"]}>
              <span className={s["oc-dot"]}></span>
              Patches installed
            </div>
            <div className={s["oc-donut-row"]}>
              <div className={s["donut-wrap"]}>
                <svg viewBox="0 0 100 100" className={s["donut-svg"]}>
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#22a7e0"
                    strokeWidth="8"
                    strokeDasharray="241"
                    strokeDashoffset="10"
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <span className={s["donut-label"]}>96%</span>
              </div>
              <div className={s["donut-legend"]}>
                <div className={s["legend-item"]}>
                  <span
                    className={`${s["legend-dot"]} ${s["legend-green"]}`}
                  ></span>
                  Installed <span className={s["legend-val"]}>7,770</span>
                </div>
                <div className={s["legend-item"]}>
                  <span
                    className={`${s["legend-dot"]} ${s["legend-blue"]}`}
                  ></span>
                  Approved <span className={s["legend-val"]}>85</span>
                </div>
                <div className={s["legend-item"]}>
                  <span
                    className={`${s["legend-dot"]} ${s["legend-red"]}`}
                  ></span>
                  Failed <span className={s["legend-val"]}>9</span>
                </div>
                <div className={s["legend-item"]}>
                  <span
                    className={`${s["legend-dot"]} ${s["legend-yellow"]}`}
                  ></span>
                  Pending <span className={s["legend-val"]}>162</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logo Marquee — inside hero like NinjaOne */}
      <BrandCarousel />
    </section>
  );
}
