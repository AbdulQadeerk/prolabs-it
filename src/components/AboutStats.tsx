"use client";

import { useScrollReveal } from "./animations";

export default function AboutStats() {
  const { ref, isVisible } = useScrollReveal();

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "150+", label: "Expert Consultants" },
    { value: "50+", label: "Global Partners" },
    { value: "24/7", label: "Strategic Support" },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`about-stats ${isVisible ? 'animate-in' : ''}`}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .about-stats {
          padding: 100px 0;
          background: white;
          border-top: 1px solid #f1f5f9;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          max-width: 1200px;
          margin: 0 auto;
        }

        .stat-card {
          padding: 40px;
          text-align: center;
          position: relative;
        }

        .stat-card:not(:last-child)::after {
          content: '';
          position: absolute;
          right: 0;
          top: 20%;
          bottom: 20%;
          width: 1px;
          background: #e2e8f0;
        }

        .stat-value {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          color: #082638;
          margin-bottom: 12px;
          line-height: 1;
          letter-spacing: -0.02e;
        }

        .stat-label {
          font-size: 1rem;
          color: #22a7e0;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .about-stats:not(.animate-in) .stat-card {
          opacity: 0;
          transform: translateY(20px);
        }

        .about-stats.animate-in .stat-card {
          animation: fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        .about-stats.animate-in .stat-card:nth-child(1) { animation-delay: 0.1s; }
        .about-stats.animate-in .stat-card:nth-child(2) { animation-delay: 0.2s; }
        .about-stats.animate-in .stat-card:nth-child(3) { animation-delay: 0.3s; }
        .about-stats.animate-in .stat-card:nth-child(4) { animation-delay: 0.4s; }

        @media (max-width: 1024px) {
          .stat-card {
            padding: 20px;
          }
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .stat-card:nth-child(2)::after {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .stat-card::after {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
