"use client";

import { useState } from "react";
import { useScrollReveal } from "./animations";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutDifferentiators() {
  const { ref, isVisible } = useScrollReveal();
  const [index, setIndex] = useState(0);

  const differentiatorData = [
    {
      value: "Transparency",
      label: "OUR CORE FOUNDATION",
      desc: '"We deserve to have honest, open, and consistent information about our business from leadership. Every employee, no matter the level, is part of our journey."',
      logo: "https://prolabsit.com/wp-content/uploads/2023/03/Redington-India.png"
    },
    {
      value: "Calculated",
      label: "DATA-DRIVEN DECISIONS",
      desc: '"We collaborate across teams to ensure our decisions are in the best interest of our business. We value decisions that balance diligence and speed."',
      logo: "https://prolabsit.com/wp-content/uploads/2023/03/kloudynet.png"
    },
    {
      value: "Value",
      label: "EACH OTHER'S SUCCESS",
      desc: '"We go out of our way to lift each other up, applaud victories, and communicate with respect. We genuinely care about the success of every team member."',
      logo: "https://prolabsit.com/wp-content/uploads/2023/03/Picture15.png"
    },
    {
      value: "Efficiency",
      label: "SIMPLIFIED OPERATIONS",
      desc: '"Our goal is to remove the friction from IT management. We build tools and processes that allow our clients to focus on what matters most to their growth."',
      logo: "https://prolabsit.com/wp-content/uploads/2023/03/Picture14.png"
    }
  ];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % differentiatorData.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + differentiatorData.length) % differentiatorData.length);
  };

  // Simple display of 3 items based on index
  const displayItems = differentiatorData.slice(index % differentiatorData.length, (index % differentiatorData.length) + 3);
  // Handle wrapping for carousel
  if (displayItems.length < 3) {
    displayItems.push(...differentiatorData.slice(0, 3 - displayItems.length));
  }

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`diff-section ${isVisible ? 'animate-in' : ''}`}>
      <div className="container">
        <h2 className="section-title">This is why our customers love us</h2>

        <div className="carousel-wrapper">
          <div className="diff-grid">
            {displayItems.map((item, i) => (
              <div key={`${item.value}-${i}`} className="diff-item">
                <div className="diff-value">{item.value}</div>
                <div className="diff-label">{item.label}</div>
                <p className="diff-description">{item.desc}</p>
                <div className="diff-footer">
                  <img src={item.logo} alt="Client Logo" className="client-logo" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-controls">
          <button
            className="control-btn active"
            onClick={handlePrev}
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className="control-btn active"
            onClick={handleNext}
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="view-more">
          <a href="#about" className="view-more-link">See more of our company values →</a>
        </div>
      </div>

      <style jsx>{`
        .diff-section {
          padding: 120px 0;
          background: white;
          text-align: center;
          overflow: hidden;
        }

        .section-title {
          font-size: clamp(2.2rem, 4.5vw, 3rem);
          color: #082638;
          margin-bottom: 80px;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .carousel-wrapper {
          position: relative;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .diff-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          text-align: left;
          width: 100%;
        }

        .diff-item {
          padding: 0 40px;
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 400px;
        }

        .diff-item:not(:last-child)::after {
          content: '';
          position: absolute;
          right: 0;
          top: 0;
          bottom: 40px;
          width: 1px;
          background: #f1f5f9;
        }

        .diff-value {
          font-size: clamp(2.2rem, 3.5vw, 3.5rem);
          font-weight: 800;
          color: #22a7e0;
          margin-bottom: 12px;
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .diff-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: #082638;
          letter-spacing: 0.08em;
          margin-bottom: 24px;
          text-transform: uppercase;
        }

        .diff-description {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #334155;
          margin-bottom: 40px;
          font-weight: 450;
        }

        .diff-footer {
          margin-top: auto;
          display: flex;
          align-items: center;
          min-height: 40px;
        }

        .client-logo {
          max-height: 32px;
          max-width: 120px;
          filter: grayscale(1);
          opacity: 0.6;
          object-fit: contain;
        }

        .carousel-controls {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 60px;
        }

        .control-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px solid #e2e8f0;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #082638;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .control-btn.active {
          background: #22a7e0;
          border-color: #22a7e0;
          color: white;
          box-shadow: 0 10px 20px rgba(34, 167, 224, 0.2);
        }

        .control-btn:hover:not(.active) {
          border-color: #22a7e0;
          color: #22a7e0;
          transform: translateY(-2px);
        }

        .view-more {
          margin-top: 32px;
        }

        .view-more-link {
          font-weight: 700;
          color: #082638;
          text-decoration: none;
          border-bottom: 2px solid #22a7e0;
          padding-bottom: 2px;
          transition: all 0.3s ease;
        }

        @media (max-width: 1024px) {
          .diff-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin: 0 auto;
          }
          .diff-item {
            padding: 40px 0;
            text-align: center;
            align-items: center;
            min-height: auto;
          }
          .diff-item:not(:last-child)::after {
            display: none;
          }
          .diff-footer {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
