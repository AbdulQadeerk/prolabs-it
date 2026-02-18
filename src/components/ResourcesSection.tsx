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
          <h2 className="section-title">Events, Updates, and Resources</h2>
          <p className="section-desc">From digital transformation to data security — read what&apos;s shaping the future of modern IT services</p>
        </div>
        <div className="resources-grid">
          {resources.map((item, index) => (
            <article key={index} className="resource-card">
              <div className="card-accent" style={{ backgroundColor: item.color }}></div>
              <div className="card-body">
                <span className="card-tag" style={{ color: item.color }}>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href="#" className="card-link">
                  Read more <span className="arrow">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .resources-section {
          background: #f8fafc;
          padding: 120px 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-title {
          color: #082638;
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: 24px;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .section-desc {
          color: #475569;
          font-size: 1.1rem;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 32px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .resource-card {
          border-radius: 20px;
          background: white;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          border: 1px solid #f1f5f9;
          display: flex;
          flex-direction: column;
        }

        .resource-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(5, 56, 86, 0.12);
        }

        .card-accent {
          height: 6px;
          width: 100%;
        }

        .card-body {
          padding: 32px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .card-tag {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 800;
          margin-bottom: 16px;
          display: block;
        }

        h3 {
          font-size: 1.15rem;
          margin-bottom: 16px;
          color: #082638;
          line-height: 1.4;
          font-weight: 700;
        }

        p {
          color: #475569;
          font-size: 0.95rem;
          margin-bottom: 24px;
          line-height: 1.6;
          flex-grow: 1;
        }

        .card-link {
          color: #082638;
          font-weight: 800;
          font-size: 0.9rem;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s;
        }

        .arrow {
          transition: transform 0.2s;
          color: #22a7e0;
        }

        .card-link:hover .arrow {
          transform: translateX(5px);
        }

        @media (max-width: 1200px) {
          .resources-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .resources-grid {
            grid-template-columns: 1fr;
          }
          .resources-section {
            padding: 80px 0;
          }
        }

        @keyframes revealUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .resources-section:not(.animate-in) .resource-card {
          opacity: 0;
          transform: translateY(40px);
        }

        .resources-section.animate-in .resource-card {
          animation: revealUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        .resources-section.animate-in .resource-card:nth-child(1) { animation-delay: 0.1s; }
        .resources-section.animate-in .resource-card:nth-child(2) { animation-delay: 0.2s; }
        .resources-section.animate-in .resource-card:nth-child(3) { animation-delay: 0.3s; }
        .resources-section.animate-in .resource-card:nth-child(4) { animation-delay: 0.4s; }
      `}</style>
    </section>
  );
}
