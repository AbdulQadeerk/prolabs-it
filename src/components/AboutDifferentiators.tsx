"use client";
import { useState } from "react";
import { useScrollReveal } from "./animations";
import { motion, AnimatePresence } from "framer-motion";
import s from "./AboutDifferentiators.module.css";

export default function AboutDifferentiators() {
  const { ref, isVisible } = useScrollReveal();
  const [index, setIndex] = useState(0);

  const differentiatorData = [
    {
      value: "Transparency",
      label: "OUR CORE FOUNDATION",
      desc: '"We deserve to have honest, open, and consistent information about our business from leadership. Every employee, no matter the level, is part of our journey."',
      logo: "https://prolabsit.com/wp-content/uploads/2023/03/Redington-India.png",
    },
    {
      value: "Calculated",
      label: "DATA-DRIVEN DECISIONS",
      desc: '"We collaborate across teams to ensure our decisions are in the best interest of our business. We value decisions that balance diligence and speed."',
      logo: "https://prolabsit.com/wp-content/uploads/2023/03/kloudynet.png",
    },
    {
      value: "Value",
      label: "EACH OTHER'S SUCCESS",
      desc: '"We go out of our way to lift each other up, applaud victories, and communicate with respect. We genuinely care about the success of every team member."',
      logo: "https://prolabsit.com/wp-content/uploads/2023/03/Picture15.png",
    },
    {
      value: "Efficiency",
      label: "SIMPLIFIED OPERATIONS",
      desc: '"Our goal is to remove the friction from IT management. We build tools and processes that allow our clients to focus on what matters most to their growth."',
      logo: "https://prolabsit.com/wp-content/uploads/2023/03/Picture14.png",
    },
  ];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % differentiatorData.length);
  };

  const handlePrev = () => {
    setIndex(
      (prev) =>
        (prev - 1 + differentiatorData.length) % differentiatorData.length,
    );
  };

  const displayItems = differentiatorData.slice(
    index % differentiatorData.length,
    (index % differentiatorData.length) + 3,
  );
  if (displayItems.length < 3) {
    displayItems.push(...differentiatorData.slice(0, 3 - displayItems.length));
  }

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${s["diff-section"]} ${isVisible ? s["animate-in"] : ""}`}
    >
      <div className="container">
        <h2 className={s["section-title"]}>
          This is why our customers love us
        </h2>

        <div className={s["carousel-wrapper"]}>
          <div className={s["diff-grid"]}>
            {displayItems.map((item, i) => (
              <div key={`${item.value}-${i}`} className={s["diff-item"]}>
                <div className={s["diff-value"]}>{item.value}</div>
                <div className={s["diff-label"]}>{item.label}</div>
                <p className={s["diff-description"]}>{item.desc}</p>
                <div className={s["diff-footer"]}>
                  <img
                    src={item.logo}
                    alt="Client Logo"
                    className={s["client-logo"]}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={s["carousel-controls"]}>
          <button
            className={`${s["control-btn"]} ${s["control-btn-active"]}`}
            onClick={handlePrev}
            aria-label="Previous"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className={`${s["control-btn"]} ${s["control-btn-active"]}`}
            onClick={handleNext}
            aria-label="Next"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className={s["view-more"]}>
          <a href="#about" className={s["view-more-link"]}>
            See more of our company values →
          </a>
        </div>
      </div>
    </section>
  );
}
