"use client";

import BrandCarousel from "@/components/BrandCarousel";
import s from "./Hero.module.css";

export default function Hero() {
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
            The modern world relies on a complex array of technologies to keep
            turning. Professional Labs aim is to simplify that complexity.
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
        <div className={s["hero-visual"]}>
          <div className={s["hero-image-glow"]}></div>
          <div className={s["dashboard-card"]}>
            <div className={s["dashboard-header"]}>
              <div className={s["dashboard-dots"]}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className={s["dashboard-title"]}>
                Professional Labs Dashboard
              </span>
            </div>
            <div className={s["dashboard-body"]}>
              <div className={s["dash-stat-row"]}>
                <div className={s["dash-stat"]}>
                  <span className={s["dash-stat-value"]}>99.9%</span>
                  <span className={s["dash-stat-label"]}>Uptime SLA</span>
                </div>
                <div className={s["dash-stat"]}>
                  <span className={s["dash-stat-value"]}>24/7</span>
                  <span className={s["dash-stat-label"]}>Monitoring</span>
                </div>
                <div className={s["dash-stat"]}>
                  <span className={s["dash-stat-value"]}>&lt;15m</span>
                  <span className={s["dash-stat-label"]}>Response Time</span>
                </div>
              </div>
              <div className={s["dash-chart"]}>
                <div className={s["chart-bar"]} style={{ height: "45%" }}></div>
                <div className={s["chart-bar"]} style={{ height: "65%" }}></div>
                <div className={s["chart-bar"]} style={{ height: "55%" }}></div>
                <div
                  className={`${s["chart-bar"]} ${s["chart-bar-active"]}`}
                  style={{ height: "85%" }}
                ></div>
                <div className={s["chart-bar"]} style={{ height: "70%" }}></div>
                <div className={s["chart-bar"]} style={{ height: "90%" }}></div>
                <div className={s["chart-bar"]} style={{ height: "75%" }}></div>
              </div>
              <div className={s["dash-services"]}>
                <div className={s["dash-service-item"]}>
                  <span
                    className={`${s["service-dot"]} ${s["service-dot-green"]}`}
                  ></span>{" "}
                  SOC Active
                </div>
                <div className={s["dash-service-item"]}>
                  <span
                    className={`${s["service-dot"]} ${s["service-dot-green"]}`}
                  ></span>{" "}
                  Cloud Services
                </div>
                <div className={s["dash-service-item"]}>
                  <span
                    className={`${s["service-dot"]} ${s["service-dot-green"]}`}
                  ></span>{" "}
                  Email Security
                </div>
              </div>
            </div>
          </div>
          {/* Floating accent cards */}
          <div className={`${s["float-card"]} ${s["float-card-left"]}`}>
            <span className={s["fc-icon"]}>🛡️</span>
            <div>
              <span className={s["fc-title"]}>Threat Blocked</span>
              <span className={s["fc-value"]}>2,847 today</span>
            </div>
          </div>
          <div className={`${s["float-card"]} ${s["float-card-right"]}`}>
            <span className={s["fc-icon"]}>☁️</span>
            <div>
              <span className={s["fc-title"]}>Cloud Health</span>
              <span className={s["fc-value"]}>All systems operational</span>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logo Marquee — inside hero like NinjaOne */}
      <BrandCarousel />
    </section>
  );
}
