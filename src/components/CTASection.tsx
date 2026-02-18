"use client";
import { useScrollReveal } from "./animations";

export default function CTASection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`cta-section ${isVisible ? 'animate-in' : ''}`}>
      <div className="cta-bg-pattern"></div>
      <div className="container">
        <div className="cta-content">
          <p className="cta-eyebrow">Ready to Transform Your IT?</p>
          <h2 className="cta-title">Ready to simplify work with unified IT?</h2>
          <p className="cta-desc">
            Join 100+ businesses across 35+ countries who trust Professional Labs for their IT operations, security, and cloud services.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary btn-large">Get a Free Consultation</a>
            <a href="#services" className="btn btn-outline btn-large">Explore Services</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-section {
          background: linear-gradient(135deg, #0b2f45 0%, #082638 50%, #082638 100%);
          padding: 90px 0;
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .cta-bg-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image:
            radial-gradient(circle at 20% 50%, rgba(34, 167, 224, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 80% 40%, rgba(34, 167, 224, 0.08) 0%, transparent 50%),
            linear-gradient(0deg, rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: auto, auto, 100px 100px, 100px 100px;
          z-index: 1;
        }

        .container {
          position: relative;
          z-index: 2;
        }

        .cta-eyebrow {
          color: #22a7e0;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.72rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .cta-title {
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          color: white;
          margin-bottom: 16px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.2;
          font-weight: 700;
        }

        .cta-desc {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1rem;
          max-width: 600px;
          margin: 0 auto 36px;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 16px;
        }

        .btn-large {
          padding: 14px 32px;
          font-size: 0.95rem;
        }

        .cta-section :global(.btn-primary) {
          background: #22a7e0;
          color: white;
          border: none;
          font-weight: 700;
          box-shadow: 0 10px 30px rgba(34, 167, 224, 0.25);
        }

        .cta-section :global(.btn-primary:hover) {
          background: #178dc8;
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(34, 167, 224, 0.4);
        }

        .cta-section :global(.btn-outline) {
          border-color: rgba(255, 255, 255, 0.5);
          color: white;
        }

        .cta-section :global(.btn-outline:hover) {
          border-color: rgba(255, 255, 255, 0.9);
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        @media (max-width: 768px) {
          .cta-section {
            padding: 60px 0;
          }
          .cta-buttons {
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }
        }

        @keyframes revealUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .cta-section:not(.animate-in) .cta-content {
          opacity: 0; transform: translateY(32px);
        }
        .cta-section.animate-in .cta-content {
          animation: revealUp 0.8s cubic-bezier(0.23,1,0.32,1) forwards;
        }
      `}</style>
    </section>
  );
}
