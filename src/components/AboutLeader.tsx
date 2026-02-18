"use client";

import { useScrollReveal } from "./animations";

export default function AboutLeader() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`leader-section ${isVisible ? 'animate-in' : ''}`}>
      <div className="container banner-outer">
        <div className="leader-banner">
          <div className="grid-bg"></div>

          <div className="content relative z-10">
            <h2 className="leader-title">
              IDC names Professional Labs a leader in <br />
              Managed IT Services & Digital Transformation <br />
              Tools for 2025 – 2026
            </h2>

            <div className="cta-link">
              <a href="#research">Read research →</a>
            </div>

            <div className="logos-row">
              <div className="logo-item">Gartner</div>
              <div className="logo-item active">IDC</div>
              <div className="logo-item">FORRESTER</div>
              <div className="logo-item">G2</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .leader-section {
          padding: 80px 0;
          background: #f8fafc;
        }

        .banner-outer {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .leader-banner {
          position: relative;
          background: #082638;
          border-radius: 40px;
          padding: 100px 40px;
          text-align: center;
          color: white;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(5, 56, 86, 0.2);
        }

        .grid-bg {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(34, 167, 224, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 167, 224, 0.1) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(circle at center, black, transparent 90%);
          opacity: 0.3;
        }

        .leader-title {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 700;
          line-height: 1.25;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }

        .cta-link a {
          color: #22a7e0;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.1rem;
          border-bottom: 2px solid transparent;
          transition: all 0.3s;
        }

        .cta-link a:hover {
          border-bottom-color: #22a7e0;
          padding-bottom: 4px;
        }

        .logos-row {
          margin-top: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 60px;
          flex-wrap: wrap;
        }

        .logo-item {
          font-size: 1.2rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          opacity: 0.4;
          text-transform: uppercase;
          transition: all 0.3s;
        }

        .logo-item.active {
          opacity: 1;
          color: white;
          transform: scale(1.1);
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .leader-section:not(.animate-in) .content {
          opacity: 0;
          transform: translateY(40px);
        }

        .leader-section.animate-in .content {
          animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        @media (max-width: 768px) {
          .leader-banner {
            padding: 60px 20px;
            border-radius: 24px;
          }
          .logos-row {
            gap: 30px;
            margin-top: 50px;
          }
          .leader-title {
             font-size: clamp(1.4rem, 6vw, 1.8rem);
          }
        }
      `}</style>
    </section>
  );
}
