"use client";

import { useScrollReveal } from "./animations";

export default function AboutMission() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`mission-section ${isVisible ? 'animate-in' : ''}`}>
      <div className="container">
        <div className="mission-content">
          <div className="pill-container">
            <span className="pill">Company Overview</span>
          </div>
          <h2 className="mission-text">
            Professional Labs&apos;s mission is to <span className="highlight">simplify complexity</span>. Our expertise helps organizations accelerate their time to value and achieve significant business impact.
          </h2>
          <div className="mission-actions">
            <a href="#consultation" className="btn-consultation">Get Your Free Consultation</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mission-section {
          padding: 120px 0;
          background: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .mission-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(34, 167, 224, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 167, 224, 0.05) 1px, transparent 1px);
          background-size: 100px 100px;
          mask-image: radial-gradient(circle at center, black, transparent 80%);
          opacity: 0.5;
        }

        .mission-content {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .pill-container {
          margin-bottom: 32px;
        }

        .pill {
          display: inline-block;
          padding: 8px 18px;
          background: #22a7e0;
          color: white;
          font-weight: 700;
          border-radius: 50px;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          box-shadow: 0 4px 15px rgba(34, 167, 224, 0.2);
        }

        .mission-text {
          font-size: clamp(1.8rem, 4vw, 2.75rem);
          line-height: 1.3;
          color: #082638;
          margin-bottom: 56px;
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        .highlight {
          color: #22a7e0;
        }

        .btn-consultation {
          display: inline-block;
          padding: 20px 48px;
          background-color: #082638;
          color: white;
          font-weight: 700;
          border-radius: 50px;
          text-decoration: none;
          font-size: 1.1rem;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: 0 20px 40px rgba(5, 56, 86, 0.15);
        }

        .btn-consultation:hover {
          transform: translateY(-4px);
          background-color: #0a4a71;
          box-shadow: 0 25px 50px rgba(5, 56, 86, 0.25);
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .mission-section:not(.animate-in) .mission-content {
          opacity: 0;
          transform: translateY(40px);
        }

        .mission-section.animate-in .mission-content {
          animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        @media (max-width: 768px) {
          .mission-section {
            padding: 80px 0;
          }
          .mission-text {
            font-size: clamp(1.6rem, 5vw, 2rem);
          }
        }
      `}</style>
    </section>
  );
}
