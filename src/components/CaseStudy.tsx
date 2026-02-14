"use client";
import { useScrollReveal } from "./animations";

export default function CaseStudy() {
  const { ref, isVisible } = useScrollReveal();
  const testimonials = [
    {
      quote: "Professional Labs help manage our Email and Domain Environment; they haven't failed us once. Professional Labs helped us by making full use of Microsoft Technologies ensuring secure access from anywhere to our environment in the time of COVID.",
      author: "ADV. HUSSAIN NALWALA",
      position: "Founder",
      company: "CNS Juris",
    },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`case-study ${isVisible ? 'animate-in' : ''}`}>
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Client Testimonials</p>
          <h2>Real feedback from businesses who trust our IT solutions</h2>
        </div>

        <div className="case-grid">
          <div className="case-text">
            <div className="quote-mark">❝</div>
            <blockquote className="case-quote">
              {testimonials[0].quote}
            </blockquote>
            <div className="case-author">
              <div className="author-avatar">
                <span>{testimonials[0].author.charAt(0)}</span>
              </div>
              <div>
                <div className="author-name">{testimonials[0].author}</div>
                <div className="author-role">{testimonials[0].position}, {testimonials[0].company}</div>
              </div>
            </div>
          </div>

          <div className="case-stats-side">
            <div className="stat-card">
              <span className="sc-value">99%</span>
              <span className="sc-label">Client Satisfaction Rate</span>
            </div>
            <div className="stat-card">
              <span className="sc-value">100+</span>
              <span className="sc-label">Active Client Partnerships</span>
            </div>
            <div className="stat-card">
              <span className="sc-value">15+</span>
              <span className="sc-label">Years of Trusted Service</span>
            </div>
            <div className="stat-card">
              <span className="sc-value">&lt;15m</span>
              <span className="sc-label">Average Response Time</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .case-study {
          background: var(--bg-secondary, #f3faff);
          padding: 80px 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .eyebrow {
          color: #22a7e0;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.72rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        h2 {
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          color: var(--primary-blue);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.25;
        }

        .case-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 48px;
          align-items: center;
        }

        .case-text {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);
          border: 1px solid #e2e8f0;
        }

        .quote-mark {
          font-size: 3rem;
          color: #22a7e0;
          line-height: 1;
          margin-bottom: 8px;
          opacity: 0.3;
        }

        .case-quote {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--primary-blue);
          font-style: italic;
          margin-bottom: 28px;
          border: none;
          padding: 0;
        }

        .case-author {
          display: flex;
          align-items: center;
          gap: 14px;
          border-top: 1px solid #e2e8f0;
          padding-top: 20px;
        }

        .author-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #22a7e0 0%, #178dc8 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .author-name {
          font-weight: 700;
          color: var(--primary-blue);
          font-size: 0.9rem;
          letter-spacing: 0.3px;
        }

        .author-role {
          color: var(--text-secondary);
          font-size: 0.8rem;
        }

        .case-stats-side {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .stat-card {
          background: white;
          border-radius: 14px;
          padding: 24px 18px;
          text-align: center;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(34, 167, 224, 0.12);
          border-color: rgba(34, 167, 224, 0.3);
        }

        .sc-value {
          display: block;
          font-size: 1.8rem;
          font-weight: 700;
          color: #22a7e0;
          margin-bottom: 6px;
          line-height: 1;
        }

        .sc-label {
          display: block;
          font-size: 0.75rem;
          color: var(--text-secondary);
          line-height: 1.3;
        }

        @media (max-width: 900px) {
          .case-grid {
            grid-template-columns: 1fr;
          }
          .case-stats-side {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .case-stats-side {
            grid-template-columns: 1fr;
          }
          .case-text {
            padding: 28px;
          }
        }
      `}</style>

      <style jsx>{`
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes revealLeft {
          from { opacity: 0; transform: translateX(-32px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes revealRight {
          from { opacity: 0; transform: translateX(32px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .case-study:not(.animate-in) .section-header,
        .case-study:not(.animate-in) .case-text,
        .case-study:not(.animate-in) .stat-card {
          opacity: 0;
        }
        .case-study.animate-in .section-header {
          animation: revealUp 0.7s cubic-bezier(0.23,1,0.32,1) forwards;
        }
        .case-study.animate-in .case-text {
          animation: revealLeft 0.7s cubic-bezier(0.23,1,0.32,1) 0.15s forwards;
        }
        .case-study.animate-in .stat-card {
          animation: revealRight 0.5s cubic-bezier(0.23,1,0.32,1) forwards;
        }
        .case-study.animate-in .stat-card:nth-child(1) { animation-delay: 0.2s; }
        .case-study.animate-in .stat-card:nth-child(2) { animation-delay: 0.3s; }
        .case-study.animate-in .stat-card:nth-child(3) { animation-delay: 0.4s; }
        .case-study.animate-in .stat-card:nth-child(4) { animation-delay: 0.5s; }
      `}</style>
    </section>
  );
}
