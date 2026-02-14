"use client";
import { useScrollReveal } from "./animations";

export default function TrustBar() {
  const { ref, isVisible } = useScrollReveal();
  const stats = [
    { number: "50", suffix: "+", label: "Engineers & Developers" },
    { number: "100", suffix: "+", label: "Global Customers" },
    { number: "35", suffix: "+", label: "Countries" },
    { number: "15", suffix: "+", label: "Years of Excellence" },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`trust-bar ${isVisible ? 'animate-in' : ''}`}>
      <div className="container">
        <div className="trust-inner">
          <div className="trust-label">
            <h2 className="trust-heading">Trusted by</h2>
            <p className="trust-sub">Global Companies</p>
          </div>
          <div className="trust-divider"></div>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">
                  {stat.number}
                  <span className="stat-suffix">{stat.suffix}</span>
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .trust-bar {
          background: linear-gradient(180deg, #0b2f45 0%, #053856 100%);
          padding: 48px 0;
          position: relative;
        }

        .trust-inner {
          display: flex;
          align-items: center;
          gap: 48px;
        }

        .trust-label {
          flex-shrink: 0;
        }

        .trust-heading {
          font-size: 1.6rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 4px;
          line-height: 1.2;
        }

        .trust-sub {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 400;
        }

        .trust-divider {
          width: 1px;
          height: 60px;
          background: rgba(34, 167, 224, 0.25);
          flex-shrink: 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          flex: 1;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: clamp(2.5rem, 4.5vw, 3.5rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .stat-suffix {
          color: #22a7e0;
          font-size: 0.75em;
        }

        .stat-label {
          font-size: 0.85rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.3;
        }

        @media (max-width: 1024px) {
          .trust-inner {
            flex-direction: column;
            text-align: center;
            gap: 32px;
          }
          .trust-divider {
            width: 60px;
            height: 1px;
          }
        }

        @media (max-width: 768px) {
          .trust-bar {
            padding: 36px 0;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @keyframes revealUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes revealLeft {
          from { opacity: 0; transform: translateX(-24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .trust-bar:not(.animate-in) .trust-label,
        .trust-bar:not(.animate-in) .stat-item {
          opacity: 0;
        }
        .trust-bar.animate-in .trust-label {
          animation: revealLeft 0.6s cubic-bezier(0.23,1,0.32,1) forwards;
        }
        .trust-bar.animate-in .stat-item {
          animation: revealUp 0.5s cubic-bezier(0.23,1,0.32,1) forwards;
        }
        .trust-bar.animate-in .stat-item:nth-child(1) { animation-delay: 0.1s; }
        .trust-bar.animate-in .stat-item:nth-child(2) { animation-delay: 0.2s; }
        .trust-bar.animate-in .stat-item:nth-child(3) { animation-delay: 0.3s; }
        .trust-bar.animate-in .stat-item:nth-child(4) { animation-delay: 0.4s; }
      `}</style>
    </section>
  );
}
