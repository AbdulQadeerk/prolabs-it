"use client";
import { useScrollReveal } from "./animations";

const resources = [
  {
    tag: "Cybersecurity",
    title: "Cybersecurity in the Age of Remote Work: Preparing for a New Wave",
    desc: "Explore how remote work has reshaped cybersecurity and what your organization needs to stay protected.",
    color: "#22a7e0",
  },
  {
    tag: "Automation",
    title: "Unlocking the Power of AI & Automation in IT Service Management",
    desc: "Discover how AI-driven automation is transforming IT service delivery and operational efficiency.",
    color: "#178dc8",
  },
  {
    tag: "Data Backup",
    title: "Why Data Backup & Disaster Recovery Plans Are Essential",
    desc: "Learn why every business needs a robust backup and disaster recovery strategy to minimize downtime.",
    color: "#0f6f9d",
  },
  {
    tag: "Network Security",
    title: "The Role of AI & Machine Learning in Cyber Defense",
    desc: "How artificial intelligence and machine learning are revolutionizing threat detection and response.",
    color: "#0d4f6c",
  },
];

export default function ResourcesSection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="resources" ref={ref as React.RefObject<HTMLElement>} className={`resources-section ${isVisible ? 'animate-in' : ''}`}>
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Latest Insights</p>
          <h2>Events, Updates, and Resources</h2>
          <p className="section-desc">From digital transformation to data security — read what&apos;s shaping the future of modern IT services</p>
        </div>
        <div className="resources-grid">
          {resources.map((item, index) => (
            <article key={index} className="resource-card">
              <div className="card-header" style={{ background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}dd 100%)` }}>
                <span className="card-tag">{item.tag}</span>
              </div>
              <div className="card-body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href="#" className="card-link">
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .resources-section {
          background: var(--bg-primary);
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
          color: var(--primary-blue);
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          margin-bottom: 12px;
        }

        .section-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
        }

        .resource-card {
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          background: white;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .resource-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 40px rgba(34, 167, 224, 0.1);
          border-color: rgba(34, 167, 224, 0.3);
        }

        .card-header {
          height: 140px;
          display: flex;
          align-items: flex-end;
          padding: 16px;
          position: relative;
          overflow: hidden;
        }

        .card-header::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 30%, rgba(0, 0, 0, 0.15) 100%);
        }

        .card-tag {
          position: relative;
          z-index: 1;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: white;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(8px);
          padding: 4px 12px;
          border-radius: 20px;
          font-weight: 600;
        }

        .card-body {
          padding: 20px;
        }

        h3 {
          font-size: 0.95rem;
          margin-bottom: 10px;
          color: var(--primary-blue);
          line-height: 1.35;
          font-weight: 700;
        }

        p {
          color: var(--text-secondary);
          font-size: 0.85rem;
          margin-bottom: 16px;
          line-height: 1.5;
        }

        .card-link {
          color: #22a7e0;
          font-weight: 600;
          font-size: 0.8rem;
          text-decoration: none;
          transition: color 0.2s;
        }

        .card-link:hover {
          color: #178dc8;
        }

        @media (max-width: 1024px) {
          .resources-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 720px) {
          .resources-grid {
            grid-template-columns: 1fr;
          }
        }

        @keyframes revealUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .resources-section:not(.animate-in) .section-header,
        .resources-section:not(.animate-in) .resource-card {
          opacity: 0; transform: translateY(32px);
        }
        .resources-section.animate-in .section-header {
          animation: revealUp 0.7s cubic-bezier(0.23,1,0.32,1) forwards;
        }
        .resources-section.animate-in .resource-card {
          animation: revealUp 0.6s cubic-bezier(0.23,1,0.32,1) forwards;
        }
        .resources-section.animate-in .resource-card:nth-child(1) { animation-delay: 0.1s; }
        .resources-section.animate-in .resource-card:nth-child(2) { animation-delay: 0.2s; }
        .resources-section.animate-in .resource-card:nth-child(3) { animation-delay: 0.3s; }
        .resources-section.animate-in .resource-card:nth-child(4) { animation-delay: 0.4s; }
      `}</style>
    </section>
  );
}
