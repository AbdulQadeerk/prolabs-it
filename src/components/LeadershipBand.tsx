"use client";
import { useScrollReveal } from "./animations";

export default function LeadershipBand() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`leadership-band ${isVisible ? 'animate-in' : ''}`}>
      <div className="container">
        <div className="leadership-card">
          <div className="leadership-content">
            <p className="eyebrow">Industry Recognition</p>
            <h3>Professional Labs delivers a unified IT experience — trusted across 35+ countries since 1997</h3>
            <p className="leadership-desc">
              Our expertise helps organizations in accelerating their time to value and achieve significant business impact with Cyber Security, Cloud Services, and Managed Services.
            </p>
            <a href="#about" className="btn btn-outline btn-small">Learn More About Us</a>
          </div>
          <div className="leadership-stats">
            <div className="lstat">
              <span className="lstat-value">1997</span>
              <span className="lstat-label">Founded</span>
            </div>
            <div className="lstat">
              <span className="lstat-value">35+</span>
              <span className="lstat-label">Countries</span>
            </div>
            <div className="lstat">
              <span className="lstat-value">100+</span>
              <span className="lstat-label">Clients</span>
            </div>
            <div className="lstat">
              <span className="lstat-value">50+</span>
              <span className="lstat-label">Engineers</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .leadership-band {
          background: linear-gradient(180deg, #0b2f45 0%, #082638 100%);
          padding: 48px 0 56px;
        }

        .leadership-card {
          border-radius: 18px;
          padding: 40px;
          background: linear-gradient(135deg, #0c344e 0%, #082638 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 48px;
          align-items: center;
        }

        .leadership-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(0deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 100px 100px;
          opacity: 0.4;
          pointer-events: none;
        }

        .leadership-content {
          position: relative;
          z-index: 1;
        }

        .eyebrow {
          color: #22a7e0;
          font-size: 0.72rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 14px;
          font-weight: 700;
        }

        h3 {
          color: white;
          font-size: 1.5rem;
          line-height: 1.35;
          margin-bottom: 14px;
        }

        .leadership-desc {
          color: rgba(255, 255, 255, 0.65);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .leadership-stats {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .lstat {
          text-align: center;
          padding: 24px 16px;
          background: rgba(34, 167, 224, 0.06);
          border: 1px solid rgba(34, 167, 224, 0.12);
          border-radius: 14px;
          transition: all 0.3s ease;
        }

        .lstat:hover {
          background: rgba(34, 167, 224, 0.12);
          border-color: rgba(34, 167, 224, 0.3);
          transform: translateY(-4px);
        }

        .lstat-value {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: #22a7e0;
          margin-bottom: 4px;
          line-height: 1;
        }

        .lstat-label {
          display: block;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .leadership-band :global(.btn-outline) {
          border-color: rgba(255, 255, 255, 0.4);
          color: white;
        }

        .leadership-band :global(.btn-outline:hover) {
          border-color: #22a7e0;
          color: #22a7e0;
        }

        @media (max-width: 1024px) {
          .leadership-card {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        @media (max-width: 768px) {
          .leadership-card {
            padding: 28px;
          }
          h3 {
            font-size: 1.3rem;
          }
          .leadership-stats {
            grid-template-columns: 1fr 1fr;
          }
        }

        @keyframes revealUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .leadership-band:not(.animate-in) .leadership-card {
          opacity: 0; transform: translateY(32px);
        }
        .leadership-band:not(.animate-in) .lstat {
          opacity: 0; transform: translateY(20px);
        }
        .leadership-band.animate-in .leadership-card {
          animation: revealUp 0.7s cubic-bezier(0.23,1,0.32,1) forwards;
        }
        .leadership-band.animate-in .lstat {
          animation: revealUp 0.5s cubic-bezier(0.23,1,0.32,1) forwards;
        }
        .leadership-band.animate-in .lstat:nth-child(1) { animation-delay: 0.2s; }
        .leadership-band.animate-in .lstat:nth-child(2) { animation-delay: 0.3s; }
        .leadership-band.animate-in .lstat:nth-child(3) { animation-delay: 0.4s; }
        .leadership-band.animate-in .lstat:nth-child(4) { animation-delay: 0.5s; }
      `}</style>
    </section>
  );
}
