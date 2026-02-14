"use client";
import { useScrollReveal } from "./animations";

export default function StackSection() {
  const { ref, isVisible } = useScrollReveal();
  const partners = [
    { name: 'Microsoft', category: 'Cloud & Productivity' },
    { name: 'Azure', category: 'Cloud Platform' },
    { name: 'Microsoft 365', category: 'Workspace' },
    { name: 'SentinelOne', category: 'Endpoint Security' },
    { name: 'CrowdStrike', category: 'Threat Intelligence' },
    { name: 'Fortinet', category: 'Network Security' },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`stack-section ${isVisible ? 'animate-in' : ''}`}>
      <div className="container">
        <div className="stack-grid">
          <div className="stack-content">
            <p className="eyebrow">Technology Ecosystem</p>
            <h3>Built for your IT stack</h3>
            <p className="stack-desc">
              Connect and automate your entire stack with integrations that fit modern IT operations. We partner with industry-leading vendors to deliver best-in-class solutions.
            </p>
            <a href="#contact" className="stack-link">Explore integrations →</a>
          </div>
          <div className="stack-partners">
            {partners.map((partner, index) => (
              <div key={index} className="partner-card">
                <div className="partner-initial">{partner.name.charAt(0)}</div>
                <div>
                  <span className="partner-name">{partner.name}</span>
                  <span className="partner-cat">{partner.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .stack-section {
          background: var(--bg-primary);
          padding: 80px 0;
        }

        .stack-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          align-items: center;
          gap: 60px;
        }

        .eyebrow {
          color: #22a7e0;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.72rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        h3 {
          font-size: 1.8rem;
          color: var(--primary-blue);
          margin-bottom: 16px;
          font-weight: 700;
        }

        .stack-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.65;
          margin-bottom: 24px;
        }

        .stack-link {
          font-size: 0.9rem;
          font-weight: 600;
          color: #22a7e0;
          text-decoration: none;
          transition: all 0.2s;
        }

        .stack-link:hover {
          color: #178dc8;
        }

        .stack-partners {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .partner-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 18px 16px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
          transition: all 0.3s ease;
        }

        .partner-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(34, 167, 224, 0.1);
          border-color: rgba(34, 167, 224, 0.3);
        }

        .partner-initial {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(34, 167, 224, 0.08);
          color: #22a7e0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .partner-name {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--primary-blue);
        }

        .partner-cat {
          display: block;
          font-size: 0.7rem;
          color: var(--text-secondary);
        }

        @media (max-width: 1024px) {
          .stack-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .stack-partners {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .stack-partners {
            grid-template-columns: 1fr;
          }
        }

        @keyframes revealUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes revealLeft {
          from { opacity: 0; transform: translateX(-32px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .stack-section:not(.animate-in) .stack-content {
          opacity: 0; transform: translateX(-32px);
        }
        .stack-section:not(.animate-in) .partner-card {
          opacity: 0; transform: translateY(24px);
        }
        .stack-section.animate-in .stack-content {
          animation: revealLeft 0.7s cubic-bezier(0.23,1,0.32,1) forwards;
        }
        .stack-section.animate-in .partner-card {
          animation: revealUp 0.5s cubic-bezier(0.23,1,0.32,1) forwards;
        }
        .stack-section.animate-in .partner-card:nth-child(1) { animation-delay: 0.1s; }
        .stack-section.animate-in .partner-card:nth-child(2) { animation-delay: 0.18s; }
        .stack-section.animate-in .partner-card:nth-child(3) { animation-delay: 0.26s; }
        .stack-section.animate-in .partner-card:nth-child(4) { animation-delay: 0.34s; }
        .stack-section.animate-in .partner-card:nth-child(5) { animation-delay: 0.42s; }
        .stack-section.animate-in .partner-card:nth-child(6) { animation-delay: 0.50s; }
      `}</style>
    </section>
  );
}
