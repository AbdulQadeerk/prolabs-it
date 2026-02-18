"use client";

import { useScrollReveal } from "./animations";

export default function AboutIntro() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`intro-section ${isVisible ? 'animate-in' : ''}`}>
      <div className="container">
        <div className="intro-grid">
          <div className="intro-content">
            <h2 className="intro-title">Get to Know Professional Labs</h2>
            <p className="intro-description">
              The modern world relies on a complex array of technologies to keep turning. Professional Labs aim is to simplify that complexity. Our expertise helps organizations in accelerating their time to value and achieve significant business impact.
            </p>
            <p className="intro-sub-description">
              Founded in 1997 and headquartered in Dubai, we specialize in simplifying complex problems for our customers with Cyber Security, Cloud Services, Managed Services and Market Research.
            </p>
          </div>
          <div className="intro-visual">
            <div className="experience-badge">
              <span className="exp-number">25+</span>
              <span className="exp-text">Years of Excellence</span>
            </div>
            <div className="visual-elements">
              <div className="element-box box-1"></div>
              <div className="element-box box-2"></div>
              <div className="element-box box-3"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .intro-section {
          padding: 120px 0;
          background: white;
          overflow: hidden;
        }

        .intro-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 80px;
          align-items: center;
        }

        .intro-title {
          font-size: clamp(2rem, 4.5vw, 3.25rem);
          color: var(--primary-blue, #053856);
          margin-bottom: 32px;
          font-weight: 700;
          line-height: 1.1;
        }

        .intro-description {
          font-size: 1.25rem;
          color: #1e293b;
          line-height: 1.6;
          margin-bottom: 24px;
          font-weight: 500;
        }

        .intro-sub-description {
          font-size: 1.1rem;
          color: #64748b;
          line-height: 1.7;
        }

        .intro-visual {
          position: relative;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .experience-badge {
          position: relative;
          z-index: 10;
          background: #053856;
          color: white;
          padding: 40px;
          border-radius: 30px;
          text-align: center;
          box-shadow: 0 40px 80px rgba(5, 56, 86, 0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .exp-number {
          font-size: 4rem;
          font-weight: 800;
          color: #22a7e0;
          line-height: 1;
        }

        .exp-text {
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          opacity: 0.9;
        }

        .visual-elements {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .element-box {
          position: absolute;
          border-radius: 20px;
          opacity: 0.1;
        }

        .box-1 {
          width: 200px;
          height: 200px;
          background: #22a7e0;
          top: 10%;
          left: 10%;
          transform: rotate(15deg);
        }

        .box-2 {
          width: 150px;
          height: 150px;
          background: #22a7e0;
          bottom: 10%;
          right: 15%;
          transform: rotate(-10deg);
        }

        .box-3 {
          width: 100px;
          height: 100px;
          background: #053856;
          top: 40%;
          right: 10%;
          transform: rotate(45deg);
        }

        @keyframes reveal {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes revealRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .intro-section:not(.animate-in) .intro-content,
        .intro-section:not(.animate-in) .intro-visual {
          opacity: 0;
        }

        .intro-section.animate-in .intro-content {
          animation: reveal 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        .intro-section.animate-in .intro-visual {
          animation: revealRight 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        @media (max-width: 1024px) {
          .intro-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 60px;
          }
          .experience-badge {
            padding: 30px;
          }
        }
      `}</style>
    </section>
  );
}
